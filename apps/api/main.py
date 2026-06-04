import asyncio

from fastapi import (
    FastAPI,
    Depends,
)

from fastapi.middleware.cors import CORSMiddleware

import socketio

from database import (
    engine,
    SessionLocal,
)

# ---------------------------------------------------
# MODELS
# ---------------------------------------------------

from models.metric import Metric
from models.alert import Alert
from models.node import Node
from models.user import User
from models.tenant import Tenant
from models.tenant_user import TenantUser

# ---------------------------------------------------
# AUTH
# ---------------------------------------------------

from auth.routes import router as auth_router

from auth.dependencies import (
    get_current_user,
)

# ---------------------------------------------------
# SERVICES
# ---------------------------------------------------

from services.metrics_service import (
    metric_generator,
    get_latest_metrics,
    get_metrics_by_node,
    build_nodes_snapshot,
)

from services.alerts_service import (
    get_active_alerts,
)

# ---------------------------------------------------
# DATABASE
# ---------------------------------------------------

from database import Base

Base.metadata.create_all(bind=engine)

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

# ---------------------------------------------------
# ROUTERS
# ---------------------------------------------------

app.include_router(auth_router)

# ---------------------------------------------------
# SOCKET.IO MOUNT
# ---------------------------------------------------

app.mount(
    "/socket.io",
    socket_app,
)

# ---------------------------------------------------
# SOCKET EVENTS
# ---------------------------------------------------

@sio.event
async def connect(
    sid,
    environ,
):
    print(f"Client connected: {sid}")


@sio.event
async def disconnect(
    sid,
):
    print(f"Client disconnected: {sid}")

# ---------------------------------------------------
# STARTUP
# ---------------------------------------------------

@app.on_event("startup")
async def startup_event():

    asyncio.create_task(
        metric_generator(
            SessionLocal,
            sio,
        )
    )

# ---------------------------------------------------
# ROOT
# ---------------------------------------------------

@app.get("/")
async def root():

    return {
        "status": "running",
        "service": "AISEL Infrastructure API",
    }

# ---------------------------------------------------
# AUTH TEST
# ---------------------------------------------------

@app.get("/api/profile")
async def profile(
    current_user=Depends(
        get_current_user
    )
):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "full_name": current_user.full_name,
    }

# ---------------------------------------------------
# NODES
# ---------------------------------------------------

@app.get("/api/nodes")
async def api_nodes(
    current_user=Depends(
        get_current_user
    )
):

    db = SessionLocal()

    try:

        return build_nodes_snapshot(
                    db,
                    current_user.tenant_id,
                )

    finally:
        db.close()

# ---------------------------------------------------
# METRICS
# ---------------------------------------------------

@app.get("/api/metrics")
async def api_metrics(
    limit: int = 50,
    current_user=Depends(
        get_current_user
    ),
):

    db = SessionLocal()

    try:

        metrics = get_latest_metrics(
            db,
            current_user.tenant_id,
            limit,
        )

        return [
            {
                "id": metric.id,
                "node_id": metric.node_id,
                "cpu_usage": metric.cpu_usage,
                "memory_usage": metric.memory_usage,
                "disk_usage": metric.disk_usage,
                "tenant_id": metric.tenant_id,
                "timestamp": metric.timestamp.isoformat(),
            }
            for metric in metrics
        ]

    finally:
        db.close()

# ---------------------------------------------------
# NODE METRICS
# ---------------------------------------------------

@app.get("/api/metrics/{node_id}")
async def api_node_metrics(
    node_id: str,
    limit: int = 100,
    current_user=Depends(
        get_current_user
    ),
):

    db = SessionLocal()

    try:

        metrics = get_metrics_by_node(
            db,
            current_user.tenant_id,
            node_id,
            limit,
        )

        return [
            {
                "id": metric.id,
                "node_id": metric.node_id,
                "cpu_usage": metric.cpu_usage,
                "memory_usage": metric.memory_usage,
                "disk_usage": metric.disk_usage,
                "tenant_id": metric.tenant_id,
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
async def api_alerts(
    current_user=Depends(
        get_current_user
    )
):

    db = SessionLocal()

    try:

        alerts = get_active_alerts(
            db,
            current_user.tenant_id,
        )

        return [
            {
                "id": alert.id,
                "tenant_id": alert.tenant_id,
                "node_id": alert.node_id,
                "severity": alert.severity,
                "metric_type": alert.metric_type,
                "metric_value": alert.metric_value,
                "message": alert.message,
                "active": alert.active,
                "created_at": alert.created_at.isoformat(),
            }
            for alert in alerts
        ]

    finally:
        db.close()