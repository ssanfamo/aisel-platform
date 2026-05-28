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
# INFRASTRUCTURE NODES
# ---------------------------------------------------

NODES = [
    {
        "id": "node-1",
        "name": "API Server",
        "type": "api",
    },
    {
        "id": "node-2",
        "name": "Database Server",
        "type": "database",
    },
    {
        "id": "node-3",
        "name": "Monitoring Server",
        "type": "monitoring",
    },
    {
        "id": "node-4",
        "name": "Worker Cluster",
        "type": "worker",
    },
    {
        "id": "node-5",
        "name": "Load Balancer",
        "type": "gateway",
    },
]

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
# NODE STATUS
# ---------------------------------------------------


def calculate_node_status(cpu, memory, disk):

    if cpu >= 90 or memory >= 90 or disk >= 90:
        return "critical"

    if cpu >= 75 or memory >= 75 or disk >= 75:
        return "warning"

    return "healthy"


# ---------------------------------------------------
# LIVE NODE SNAPSHOT
# ---------------------------------------------------


def build_nodes_snapshot(db: Session):

    snapshot = []

    for node in NODES:

        latest_metric = (
            db.query(Metric)
            .filter(Metric.node_id == node["id"])
            .order_by(desc(Metric.timestamp))
            .first()
        )

        if latest_metric:

            status = calculate_node_status(
                latest_metric.cpu_usage,
                latest_metric.memory_usage,
                latest_metric.disk_usage,
            )

            snapshot.append({
                "id": node["id"],
                "name": node["name"],
                "type": node["type"],
                "cpu_usage": latest_metric.cpu_usage,
                "memory_usage": latest_metric.memory_usage,
                "disk_usage": latest_metric.disk_usage,
                "status": status,
                "last_updated": latest_metric.timestamp.isoformat(),
            })

        else:

            snapshot.append({
                "id": node["id"],
                "name": node["name"],
                "type": node["type"],
                "cpu_usage": 0,
                "memory_usage": 0,
                "disk_usage": 0,
                "status": "offline",
                "last_updated": None,
            })

    return snapshot


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

            selected_node = random.choice(NODES)

            metric = Metric(
                node_id=selected_node["id"],
                cpu_usage=round(random.uniform(10, 95), 1),
                memory_usage=round(random.uniform(20, 95), 1),
                disk_usage=round(random.uniform(5, 95), 1),
                timestamp=datetime.utcnow(),
            )

            db.add(metric)

            db.commit()

            db.refresh(metric)

            # -----------------------------------------
            # ALERTS
            # -----------------------------------------

            evaluate_alerts(
                db,
                metric
            )

            # -----------------------------------------
            # LIVE METRIC PAYLOAD
            # -----------------------------------------

            metric_payload = {
                "id": metric.id,
                "node_id": metric.node_id,
                "cpu_usage": metric.cpu_usage,
                "memory_usage": metric.memory_usage,
                "disk_usage": metric.disk_usage,
                "timestamp": metric.timestamp.isoformat(),
            }

            # -----------------------------------------
            # NODE SNAPSHOT
            # -----------------------------------------

            nodes_payload = build_nodes_snapshot(db)

            # -----------------------------------------
            # WEBSOCKET EVENTS
            # -----------------------------------------

            await sio.emit(
                "metrics_update",
                metric_payload
            )

            await sio.emit(
                "nodes_update",
                nodes_payload
            )

            print(
                f"Metric emitted from {metric.node_id}"
            )

        except Exception as e:
            print(
                "Metric generator error:",
                e
            )

        finally:
            db.close()

        await asyncio.sleep(2)