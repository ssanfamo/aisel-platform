from socket_server import sio


async def emit_metric(metric_data):
    await sio.emit("metric_update", metric_data)


async def emit_alert(alert):
    await sio.emit("alert", alert)