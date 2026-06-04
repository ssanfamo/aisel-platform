from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Boolean,
    DateTime,
    ForeignKey,
)

from datetime import datetime

from database import Base



class Alert(Base):

    __tablename__ = "alerts"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    tenant_id = Column(Integer, default=1)

    node_id = Column(
        String,
        nullable=False,
    )

    severity = Column(
        String,
        nullable=False,
    )

    metric_type = Column(
        String,
        nullable=False,
    )

    metric_value = Column(
        Float,
        nullable=False,
    )

    message = Column(
        String,
        nullable=False,
    )

    active = Column(
        Boolean,
        default=True,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )
    last_notification_sent = Column(
    DateTime,
    nullable=True,
)   
    