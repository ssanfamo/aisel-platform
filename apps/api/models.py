from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from database import Base

class Metric(Base):

    __tablename__ = "metrics"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    node_id = Column(String)

    cpu_usage = Column(Float)

    memory_usage = Column(Float)

    timestamp = Column(
        DateTime,
        default=datetime.utcnow
    )