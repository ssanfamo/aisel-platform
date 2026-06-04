from sqlalchemy.orm import Session

from models.alert import Alert

from services.notification_service import (
    notify_alert,
)


# ---------------------------------------------------
# ALERT RULES
# ---------------------------------------------------

def evaluate_alerts(
    db: Session,
    metric,
):

    alerts_to_create = []

    # -----------------------------------------
    # AUTO RECOVERY
    # -----------------------------------------

    if metric.cpu_usage < 75:

        (
            db.query(Alert)
            .filter(
                Alert.tenant_id == metric.tenant_id,
                Alert.node_id == metric.node_id,
                Alert.metric_type == "cpu",
                Alert.active == True,
            )
            .update(
                {"active": False}
            )
        )

    if metric.memory_usage < 75:

        (
            db.query(Alert)
            .filter(
                Alert.tenant_id == metric.tenant_id,
                Alert.node_id == metric.node_id,
                Alert.metric_type == "memory",
                Alert.active == True,
            )
            .update(
                {"active": False}
            )
        )

    if metric.disk_usage < 75:

        (
            db.query(Alert)
            .filter(
                Alert.tenant_id == metric.tenant_id,
                Alert.node_id == metric.node_id,
                Alert.metric_type == "disk",
                Alert.active == True,
            )
            .update(
                {"active": False}
            )
        )

    db.commit()

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
    # CREATE ALERTS
    # -----------------------------------------

    created_alerts = []

    for item in alerts_to_create:

        existing_alert = (
            db.query(Alert)
            .filter(
                Alert.tenant_id == metric.tenant_id,
                Alert.node_id == metric.node_id,
                Alert.metric_type == item["metric_type"],
                Alert.active == True,
            )
            .first()
        )

        if existing_alert:

            existing_alert.metric_value = (
                item["metric_value"]
            )

            existing_alert.message = (
                item["message"]
            )

            db.commit()

            try:

                notify_alert(
                    db,
                    existing_alert,
                )

            except Exception as e:

                print(
                    "Notification error:",
                    e,
                )

            continue
        

        alert = Alert(
            tenant_id=metric.tenant_id,
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

    for alert in created_alerts:

        db.refresh(alert)

        try:

            notify_alert(
                db,
                alert,
            )

        except Exception as e:

            print(
                "Notification error:",
                e,
            )

    return created_alerts


# ---------------------------------------------------
# GET ACTIVE ALERTS
# ---------------------------------------------------

def get_active_alerts(
    db: Session,
    tenant_id: int,
):

    return (
        db.query(Alert)
        .filter(
            Alert.tenant_id == tenant_id,
            Alert.active == True,
        )
        .order_by(
            Alert.created_at.desc()
        )
        .limit(50)
        .all()
    )


# ---------------------------------------------------
# GET ALERT
# ---------------------------------------------------

def get_alert(
    db: Session,
    tenant_id: int,
    alert_id: int,
):

    return (
        db.query(Alert)
        .filter(
            Alert.id == alert_id,
            Alert.tenant_id == tenant_id,
        )
        .first()
    )


# ---------------------------------------------------
# ACKNOWLEDGE ALERT
# ---------------------------------------------------

def acknowledge_alert(
    db: Session,
    tenant_id: int,
    alert_id: int,
):

    alert = (
        db.query(Alert)
        .filter(
            Alert.id == alert_id,
            Alert.tenant_id == tenant_id,
        )
        .first()
    )

    if not alert:
        return None

    alert.active = False

    db.commit()

    db.refresh(alert)

    return alert


# ---------------------------------------------------
# CLEAR ACTIVE ALERTS
# ---------------------------------------------------

def clear_active_alerts(
    db: Session,
    tenant_id: int,
):

    alerts = (
        db.query(Alert)
        .filter(
            Alert.tenant_id == tenant_id,
            Alert.active == True,
        )
        .all()
    )

    for alert in alerts:
        alert.active = False

    db.commit()

    return len(alerts)