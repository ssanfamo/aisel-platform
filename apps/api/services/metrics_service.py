import asyncio
import random
from datetime import datetime

from sqlalchemy.orm import Session
from sqlalchemy import desc

from models.metric import Metric

from services.alerts_service import (
    evaluate_alerts,
)


# ---------------------------------------------------
# METRIC QUERIES
# ---------------------------------------------------

def get_latest_metrics(
    db: Session,
    limit: int = 50
):
    return (
        db.query(Metric)
        .order_by(desc(Metric.timestamp))
        .limit(limit)
        .all()
    )


def get_metrics_by_node(
    db: Session,
    node_id: str,
    limit: int = 100
):
    return (
        db.query(Metric)
        .filter(Metric.node_id == node_id)
        .order_by(desc(Metric.timestamp))
        .limit(limit)
        .all()
    )


# ---------------------------------------------------
# METRIC GENERATOR
# ---------------------------------------------------

async def metric_generator(
    SessionLocal,
    sio
):
    print("Metric generator started")

    while True:

        db = SessionLocal()

        try:

            metric = Metric(
                node_id="node-1",
                cpu_usage=round(random.uniform(10, 95), 1),
                memory_usage=round(random.uniform(20, 90), 1),
                disk_usage=round(random.uniform(5, 95), 1),
                timestamp=datetime.utcnow(),
            )

            db.add(metric)

            db.commit()

            db.refresh(metric)

            # -----------------------------------------
            # ALERT EVALUATION
            # -----------------------------------------

            evaluate_alerts(
                db,
                metric
            )

            # -----------------------------------------
            # SOCKET PAYLOAD
            # -----------------------------------------

            payload = {
                "id": metric.id,
                "node_id": metric.node_id,
                "cpu_usage": metric.cpu_usage,
                "memory_usage": metric.memory_usage,
                "disk_usage": metric.disk_usage,
                "timestamp": metric.timestamp.isoformat(),
            }

            # -----------------------------------------
            # EMIT LIVE UPDATE
            # -----------------------------------------

            await sio.emit(
                "metrics_update",
                payload
            )

            print("Metric emitted:", payload)

        except Exception as e:
            print(
                "Metric generator error:",
                e
            )

        finally:
            db.close()

        await asyncio.sleep(3)