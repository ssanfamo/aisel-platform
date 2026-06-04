from sqlalchemy import (
    Column,
    Integer,
    String,
)

from database import Base


class TenantUser(Base):

    __tablename__ = "tenant_users"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    tenant_id = Column(Integer)

    user_id = Column(Integer)

    role = Column(String)