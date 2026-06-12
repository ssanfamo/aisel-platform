from fastapi import APIRouter
from database import SessionLocal
from models.node import Node
from models.alert import Alert
from models.metric import Metric

router = APIRouter(prefix="/api/public", tags=["public"])

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

        metrics_count = db.query(Metric).count()

        return {
            "nodes": node_count,
            "alerts": alert_count,
            "metrics": metrics_count,
            "cpu_usage": round(latest_metric.cpu_usage, 1) if latest_metric else 0,
            "memory_usage": round(latest_metric.memory_usage, 1) if latest_metric else 0,
            "status": "Healthy" if alert_count < 10 else "Attention Required"
        }

    finally:
        db.close()