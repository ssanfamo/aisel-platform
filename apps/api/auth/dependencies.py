from fastapi import (
    Depends,
    HTTPException,
)

from fastapi.security import (
    OAuth2PasswordBearer,
)

from database import SessionLocal

from models.user import User

from services.tenant_service import (
    get_user_tenant,
)

from auth.jwt import (
    decode_access_token,
)

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/auth/login"
)


class CurrentUser:

    def __init__(
        self,
        id,
        email,
        full_name,
        tenant_id,
    ):
        self.id = id
        self.email = email
        self.full_name = full_name
        self.tenant_id = tenant_id


def get_current_user(
    token: str = Depends(
        oauth2_scheme
    )
):

    payload = decode_access_token(
        token
    )

    if not payload:

        raise HTTPException(
            status_code=401,
            detail="Invalid token",
        )

    db = SessionLocal()

    try:

        user = (
            db.query(User)
            .filter(
                User.id == payload["user_id"]
            )
            .first()
        )

        if not user:

            raise HTTPException(
                status_code=401,
                detail="User not found",
            )

        tenant = get_user_tenant(
            db,
            user.id,
        )

        if not tenant:

            raise HTTPException(
                status_code=401,
                detail="Tenant not found",
            )

        return CurrentUser(
            id=user.id,
            email=user.email,
            full_name=user.full_name,
            tenant_id=tenant.tenant_id,
        )

    finally:
        db.close()