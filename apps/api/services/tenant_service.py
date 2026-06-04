from sqlalchemy.orm import Session

from models.tenant_user import (
    TenantUser,
)


def get_user_tenant(
    db: Session,
    user_id: int,
):

    return (
        db.query(TenantUser)
        .filter(
            TenantUser.user_id == user_id
        )
        .first()
    )