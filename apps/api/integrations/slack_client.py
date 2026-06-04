import requests


def send_slack_message(
    webhook_url,
    message,
):

    response = requests.post(
        webhook_url,
        json={
            "text": message
        },
        timeout=10,
    )

    response.raise_for_status()