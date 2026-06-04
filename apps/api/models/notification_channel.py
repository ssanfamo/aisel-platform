from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    JSON,
    DateTime,
)

from datetime import datetime

from database import Base


class NotificationChannel(Base):

    __tablename__ = "notification_channels"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    tenant_id = Column(
        Integer,
        nullable=False,
    )

    type = Column(
        String,
        nullable=False,
    )

    name = Column(
        String,
        nullable=False,
    )

    config = Column(
        JSON,
        nullable=False,
    )

    enabled = Column(
        Boolean,
        default=True,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )

    cooldown_minutes = Column(
        Integer,
        default=30
    )

    last_notification_sent = Column(
        DateTime,
        nullable=True
    )
