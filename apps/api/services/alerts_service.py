from datetime import datetime

from sqlalchemy.orm import Session

from models.alert import Alert


def evaluate_alerts(
    db: Session,
    metric
):
    alerts_created = []

    # -----------------------------------------
    # CPU ALERT
    # -----------------------------------------

    if metric.cpu_usage >= 85:
        alert = Alert(
            node_id=metric.node_id,
            level="critical",
            message=f"High CPU usage: {metric.cpu_usage}%",
            created_at=datetime.utcnow(),
        )

        db.add(alert)
        alerts_created.append(alert)

    # -----------------------------------------
    # MEMORY ALERT
    # -----------------------------------------

    if metric.memory_usage >= 85:
        alert = Alert(
            node_id=metric.node_id,
            level="warning",
            message=f"High memory usage: {metric.memory_usage}%",
            created_at=datetime.utcnow(),
        )

        db.add(alert)
        alerts_created.append(alert)

    # -----------------------------------------
    # DISK ALERT
    # -----------------------------------------

    if metric.disk_usage >= 90:
        alert = Alert(
            node_id=metric.node_id,
            level="critical",
            message=f"High disk usage: {metric.disk_usage}%",
            created_at=datetime.utcnow(),
        )

        db.add(alert)
        alerts_created.append(alert)

    db.commit()

    return alerts_created


def get_active_alerts(
    db: Session,
    limit: int = 50
):
    return (
        db.query(Alert)
        .order_by(Alert.created_at.desc())
        .limit(limit)
        .all()
    )