from fastapi import (
    APIRouter,
    HTTPException,
    Depends,
)

from pydantic import BaseModel

from database import SessionLocal

from models.user import User

from auth.security import (
    hash_password,
    verify_password,
)

from auth.jwt import (
    create_access_token,
)

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)

from auth.dependencies import (
    get_current_user,
)

from services.tenant_service import (
    get_user_tenant,
)


@router.get("/me")
def me(
    current_user=Depends(
        get_current_user
    )
):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "tenant_id": current_user.tenant_id,
    }

# ----------------------------------
# SCHEMAS
# ----------------------------------

class RegisterRequest(
    BaseModel
):
    email: str
    password: str
    full_name: str


class LoginRequest(
    BaseModel
):
    email: str
    password: str


# ----------------------------------
# REGISTER
# ----------------------------------

@router.post("/register")
def register(
    payload: RegisterRequest
):

    db = SessionLocal()

    try:

        existing_user = (
            db.query(User)
            .filter(
                User.email == payload.email
            )
            .first()
        )

        if existing_user:

            raise HTTPException(
                status_code=400,
                detail="User already exists",
            )

        user = User(
            email=payload.email,
            password_hash=hash_password(
                payload.password
            ),
            full_name=payload.full_name,
        )

        db.add(user)

        db.commit()

        db.refresh(user)

        return {
            "message": "User created",
            "user_id": user.id,
        }

    finally:
        db.close()


# ----------------------------------
# LOGIN
# ----------------------------------

@router.post("/login")
def login(
    payload: LoginRequest
):

    db = SessionLocal()

    try:

        user = (
            db.query(User)
            .filter(
                User.email == payload.email
            )
            .first()
        )

        if not user:

            raise HTTPException(
                status_code=401,
                detail="Invalid credentials",
            )

        if not verify_password(
            payload.password,
            user.password_hash,
        ):

            raise HTTPException(
                status_code=401,
                detail="Invalid credentials",
            )

        tenant = get_user_tenant(
            db,
            user.id,
        )

        if not tenant:

            raise HTTPException(
                status_code=400,
                detail="User is not assigned to a tenant",
            )

        token = create_access_token(
            {
                "user_id": user.id,
                "tenant_id": tenant.tenant_id,
                "email": user.email,
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
        }

    finally:
        db.close()