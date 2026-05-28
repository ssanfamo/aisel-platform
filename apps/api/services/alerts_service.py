from sqlalchemy.orm import Session

from models.alert import Alert


# ---------------------------------------------------
# ALERT RULES
# ---------------------------------------------------


def evaluate_alerts(
    db: Session,
    metric
):

    alerts_to_create = []

    # -----------------------------------------
    # CPU ALERTS
    # -----------------------------------------

    if metric.cpu_usage >= 90:

        alerts_to_create.append({
            "severity": "critical",
            "metric_type": "cpu",
            "metric_value": metric.cpu_usage,
            "message": (
                f"{metric.node_id} CPU usage "
                f"critical at {metric.cpu_usage}%"
            ),
        })

    elif metric.cpu_usage >= 75:

        alerts_to_create.append({
            "severity": "warning",
            "metric_type": "cpu",
            "metric_value": metric.cpu_usage,
            "message": (
                f"{metric.node_id} CPU usage "
                f"high at {metric.cpu_usage}%"
            ),
        })

    # -----------------------------------------
    # MEMORY ALERTS
    # -----------------------------------------

    if metric.memory_usage >= 90:

        alerts_to_create.append({
            "severity": "critical",
            "metric_type": "memory",
            "metric_value": metric.memory_usage,
            "message": (
                f"{metric.node_id} memory usage "
                f"critical at {metric.memory_usage}%"
            ),
        })

    elif metric.memory_usage >= 75:

        alerts_to_create.append({
            "severity": "warning",
            "metric_type": "memory",
            "metric_value": metric.memory_usage,
            "message": (
                f"{metric.node_id} memory usage "
                f"high at {metric.memory_usage}%"
            ),
        })

    # -----------------------------------------
    # DISK ALERTS
    # -----------------------------------------

    if metric.disk_usage >= 90:

        alerts_to_create.append({
            "severity": "critical",
            "metric_type": "disk",
            "metric_value": metric.disk_usage,
            "message": (
                f"{metric.node_id} disk usage "
                f"critical at {metric.disk_usage}%"
            ),
        })

    elif metric.disk_usage >= 75:

        alerts_to_create.append({
            "severity": "warning",
            "metric_type": "disk",
            "metric_value": metric.disk_usage,
            "message": (
                f"{metric.node_id} disk usage "
                f"high at {metric.disk_usage}%"
            ),
        })

    # -----------------------------------------
    # SAVE ALERTS
    # -----------------------------------------

    created_alerts = []

    for item in alerts_to_create:

        alert = Alert(
            node_id=metric.node_id,
            severity=item["severity"],
            metric_type=item["metric_type"],
            metric_value=item["metric_value"],
            message=item["message"],
            active=True,
        )

        db.add(alert)

        created_alerts.append(alert)

    db.commit()

    return created_alerts


# ---------------------------------------------------
# ACTIVE ALERTS
# ---------------------------------------------------


def get_active_alerts(
    db: Session
):

    return (
        db.query(Alert)
        .filter(Alert.active == True)
        .order_by(Alert.created_at.desc())
        .limit(50)
        .all()
    )