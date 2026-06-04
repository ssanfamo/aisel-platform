from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime,
    ForeignKey,
)

from datetime import datetime

from database import Base


class Metric(Base):

    __tablename__ = "metrics"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    tenant_id = Column(Integer, default=1)

    node_id = Column(String)

    cpu_usage = Column(Float)

    memory_usage = Column(Float)

    disk_usage = Column(Float)

    timestamp = Column(
        DateTime,
        default=datetime.utcnow,
    )