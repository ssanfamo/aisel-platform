import asyncio

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import socketio

from database import engine, SessionLocal
from models.metric import Base as MetricBase
from models.alert import Base as AlertBase

from services.metrics_service import (
    metric_generator,
    get_latest_metrics,
    get_metrics_by_node,
)

from services.nodes_service import (
    get_nodes,
)

from services.alerts_service import (
    get_active_alerts,
)

# ---------------------------------------------------
# DATABASE
# ---------------------------------------------------

MetricBase.metadata.create_all(bind=engine)
AlertBase.metadata.create_all(bind=engine)

# ---------------------------------------------------
# SOCKET.IO
# ---------------------------------------------------

sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins="*",
)

socket_app = socketio.ASGIApp(
    sio
)

# ---------------------------------------------------
# FASTAPI
# ---------------------------------------------------

app = FastAPI(
    title="AISEL Infrastructure API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/socket.io", socket_app)

# ---------------------------------------------------
# SOCKET EVENTS
# ---------------------------------------------------

@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")


@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

# ---------------------------------------------------
# STARTUP
# ---------------------------------------------------

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(
        metric_generator(
            SessionLocal,
            sio
        )
    )

# ---------------------------------------------------
# ROOT
# ---------------------------------------------------

@app.get("/")
async def root():
    return {
        "status": "running"
    }

# ---------------------------------------------------
# NODES
# ---------------------------------------------------

@app.get("/api/nodes")
async def api_nodes():
    return get_nodes()

# ---------------------------------------------------
# METRICS
# ---------------------------------------------------

@app.get("/api/metrics")
async def api_metrics(limit: int = 50):
    db = SessionLocal()

    try:
        metrics = get_latest_metrics(
            db,
            limit
        )

        return [
            {
                "id": metric.id,
                "node_id": metric.node_id,
                "cpu_usage": metric.cpu_usage,
                "memory_usage": metric.memory_usage,
                "disk_usage": metric.disk_usage,
                "timestamp": metric.timestamp.isoformat(),
            }
            for metric in metrics
        ]

    finally:
        db.close()


@app.get("/api/metrics/{node_id}")
async def api_node_metrics(
    node_id: str,
    limit: int = 100
):
    db = SessionLocal()

    try:
        metrics = get_metrics_by_node(
            db,
            node_id,
            limit
        )

        return [
            {
                "id": metric.id,
                "node_id": metric.node_id,
                "cpu_usage": metric.cpu_usage,
                "memory_usage": metric.memory_usage,
                "disk_usage": metric.disk_usage,
                "timestamp": metric.timestamp.isoformat(),
            }
            for metric in metrics
        ]

    finally:
        db.close()

# ---------------------------------------------------
# ALERTS
# ---------------------------------------------------

@app.get("/api/alerts")
async def api_alerts():
    db = SessionLocal()

    try:
        alerts = get_active_alerts(db)

        return [
            {
                "id": alert.id,
                "node_id": alert.node_id,
                "level": alert.level,
                "message": alert.message,
                "created_at": alert.created_at.isoformat(),
            }
            for alert in alerts
        ]

    finally:
        db.close()