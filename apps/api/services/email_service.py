from integrations.resend_client import (
    send_email,
)


def send_alert_email(
    to_email: str,
    alert,
):
    severity = (
        alert.severity.upper()
    )

    subject = (
        f"[{severity}] "
        f"{alert.node_id} "
        f"{alert.metric_type}"
    )

    html = f"""
    <h2>
        AISEL Infrastructure Alert
    </h2>

    <p>
        <strong>Severity:</strong>
        {alert.severity}
    </p>

    <p>
        <strong>Node:</strong>
        {alert.node_id}
    </p>

    <p>
        <strong>Metric:</strong>
        {alert.metric_type}
    </p>

    <p>
        <strong>Value:</strong>
        {alert.metric_value}
    </p>

    <p>
        {alert.message}
    </p>
    """

    return send_email(
        to_email,
        subject,
        html,
    )