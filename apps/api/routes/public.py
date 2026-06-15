from fastapi import APIRouter

from database import SessionLocal

from models.node import Node
from models.alert import Alert
from models.metric import Metric

router = APIRouter(
    prefix="/api/public",
    tags=["public"],
)

# ---------------------------------------------------
# DASHBOARD SUMMARY
# ---------------------------------------------------

@router.get("/dashboard-summary")
def dashboard_summary():

    db = SessionLocal()

    try:

        node_count = db.query(Node).count()

        alert_count = (
            db.query(Alert)
            .filter(Alert.active == True)
            .count()
        )

        latest_metric = (
            db.query(Metric)
            .order_by(Metric.timestamp.desc())
            .first()
        )

        metrics_count = (
            db.query(Metric)
            .count()
        )

        return {
            "nodes": node_count,
            "alerts": alert_count,
            "metrics": metrics_count,
            "cpu_usage": round(
                latest_metric.cpu_usage,
                1
            ) if latest_metric else 0,
            "memory_usage": round(
                latest_metric.memory_usage,
                1
            ) if latest_metric else 0,
            "status": (
                "Healthy"
                if alert_count < 10
                else "Attention Required"
            ),
        }

    finally:
        db.close()


# ---------------------------------------------------
# RECENT ALERTS
# ---------------------------------------------------

@router.get("/recent-alerts")
def recent_alerts():

    db = SessionLocal()

    try:

        alerts = (
            db.query(Alert)
            .order_by(Alert.created_at.desc())
            .limit(10)
            .all()
        )

        return [
            {
                "id": alert.id,
                "node_id": alert.node_id,
                "severity": alert.severity,
                "metric_type": alert.metric_type,
                "metric_value": alert.metric_value,
                "message": alert.message,
                "active": alert.active,
                "created_at": alert.created_at.isoformat(),
            }
            for alert in alerts
        ]

    finally:
        db.close()


# ---------------------------------------------------
# NODE STATUS
# ---------------------------------------------------

@router.get("/node-status")
def node_status():

    db = SessionLocal()

    try:

        nodes = (
            db.query(Node)
            .all()
        )

        results = []

        for node in nodes:

            active_alerts = (
                db.query(Alert)
                .filter(
                    Alert.node_id == node.id,
                    Alert.active == True,
                )
                .count()
            )

            if active_alerts >= 3:
                status = "Critical"

            elif active_alerts > 0:
                status = "Warning"

            else:
                status = "Healthy"

            results.append(
                {
                    "node_id": node.id,
                    "name": getattr(
                        node,
                        "name",
                        node.id,
                    ),
                    "status": status,
                    "active_alerts": active_alerts,
                }
            )

        return results

    finally:
        db.close()