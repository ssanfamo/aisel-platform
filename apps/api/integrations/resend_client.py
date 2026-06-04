import os
import requests

from dotenv import load_dotenv

load_dotenv()

RESEND_API_KEY = os.getenv(
    "RESEND_API_KEY"
)

FROM_EMAIL = os.getenv(
    "RESEND_FROM_EMAIL"
)

RESEND_URL = (
    "https://api.resend.com/emails"
)


def send_email(
    to_email: str,
    subject: str,
    html: str,
):

    if not RESEND_API_KEY:

        raise Exception(
            "RESEND_API_KEY not configured"
        )

    payload = {
        "from": FROM_EMAIL,
        "to": [to_email],
        "subject": subject,
        "html": html,
    }

    response = requests.post(
        RESEND_URL,
        headers={
            "Authorization":
                f"Bearer {RESEND_API_KEY}",
            "Content-Type":
                "application/json",
        },
        json=payload,
        timeout=30,
    )

    if response.status_code not in (
        200,
        201,
    ):
        raise Exception(
            (
                "Resend error: "
                f"{response.status_code} "
                f"{response.text}"
            )
        )

    return response.json()