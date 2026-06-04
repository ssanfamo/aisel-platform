from integrations.resend_client import (
    send_email,
)

response = send_email(
    "contact@aiseltechnologies.com",
    "AISEL Test Alert",
    """
    <h2>AISEL Alert Test</h2>
    <p>
        Email notifications
        are working.
    </p>
    """,
)

print(response)