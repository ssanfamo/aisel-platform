from datetime import (
    datetime,
    timedelta,
)

from sqlalchemy.orm import Session

from models.notification_channel import (
    NotificationChannel,
)

from services.email_service import (
    send_alert_email,
)


# ---------------------------------------------------
# COOLDOWN CHECK
# ---------------------------------------------------

def can_send_notification(
    channel,
):
    """
    Check whether notification
    cooldown has expired.
    """

    cooldown = (
        channel.cooldown_minutes
        or 30
    )

    if (
        channel.last_notification_sent
        is None
    ):
        return True

    next_allowed = (
        channel.last_notification_sent
        + timedelta(
            minutes=cooldown
        )
    )

    return (
        datetime.utcnow()
        >= next_allowed
    )


# ---------------------------------------------------
# NOTIFY ALERT
# ---------------------------------------------------

def notify_alert(
    db: Session,
    alert,
):

    channels = (
        db.query(
            NotificationChannel
        )
        .filter(
            NotificationChannel.tenant_id
            == alert.tenant_id,
            NotificationChannel.enabled
            == True,
        )
        .all()
    )

    for channel in channels:

        try:

            # -------------------------
            # COOLDOWN
            # -------------------------

            if not can_send_notification(
                channel
            ):

                print(
                    f"Cooldown active for "
                    f"channel {channel.id}"
                )

                continue

            # -------------------------
            # EMAIL
            # -------------------------

            if (
                channel.type
                == "email"
            ):

                email = (
                    channel.config.get(
                        "email"
                    )
                )

                if email:

                    send_alert_email(
                        email,
                        alert,
                    )

                    print(
                        f"Alert email sent "
                        f"to {email}"
                    )

            # -------------------------
            # FUTURE: SLACK
            # -------------------------

            elif (
                channel.type
                == "slack"
            ):

                print(
                    f"Slack notification "
                    f"queued for "
                    f"channel {channel.id}"
                )

            # -------------------------
            # FUTURE: WEBHOOK
            # -------------------------

            elif (
                channel.type
                == "webhook"
            ):

                print(
                    f"Webhook notification "
                    f"queued for "
                    f"channel {channel.id}"
                )

            # -------------------------
            # UPDATE COOLDOWN
            # -------------------------

            channel.last_notification_sent = (
                datetime.utcnow()
            )

            db.commit()

        except Exception as e:

            error_text = str(e)

            # -------------------------
            # RESEND QUOTA
            # -------------------------

            if (
                "daily_quota_exceeded"
                in error_text
            ):

                print(
                    "Resend daily quota "
                    "reached."
                )

                continue

            print(
                "Notification error:",
                error_text,
            )

            db.rollback()