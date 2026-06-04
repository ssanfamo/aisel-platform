from integrations.slack_client import (
    send_slack_message,
)


def send_alert_slack(
    webhook_url,
    alert,
):

    message = (
        f"🚨 {alert.severity.upper()}\n"
        f"Node: {alert.node_id}\n"
        f"Metric: {alert.metric_type}\n"
        f"Value: {alert.metric_value}"
    )

    send_slack_message(
        webhook_url,
        message,
    )