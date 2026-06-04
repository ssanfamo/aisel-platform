from sqlalchemy import (
    Column,
    String,
    Float,
    Integer,
    DateTime,
    ForeignKey,
)

from datetime import datetime

from database import Base


class Node(Base):

    __tablename__ = "nodes"

    id = Column(
        String,
        primary_key=True,
        index=True,
    )

    tenant_id = Column(Integer, default=1)

    name = Column(String)

    type = Column(String)

    status = Column(String)

    cpu_usage = Column(
        Float,
        default=0,
    )

    memory_usage = Column(
        Float,
        default=0,
    )

    disk_usage = Column(
        Float,
        default=0,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )