from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import socketio
import asyncio
import random
from datetime import datetime

# -----------------------------
# SOCKET.IO SERVER
# -----------------------------

sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins="*",
)

fastapi_app = FastAPI()

fastapi_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# API ROUTES
# -----------------------------

@fastapi_app.get("/")
async def root():
    return {"status": "running"}

@fastapi_app.get("/api/nodes")
async def get_nodes():
    return [
        {
            "id": "node-1",
            "name": "AISEL Core Node",
            "status": "online",
        },
        {
            "id": "node-2",
            "name": "Monitoring Node",
            "status": "online",
        },
        {
            "id": "node-3",
            "name": "Automation Node",
            "status": "online",
        },
    ]

# -----------------------------
# SOCKET EVENTS
# -----------------------------

@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

# -----------------------------
# METRIC EMITTER
# -----------------------------

async def metric_generator():
    while True:
        metric = {
            "node_id": "node-1",
            "timestamp": datetime.utcnow().isoformat(),
            "cpu_usage": random.randint(20, 90),
            "memory_usage": random.randint(30, 95),
        }

        print("Emitting metric:", metric)

        await sio.emit(
            "metric_update",
            metric
        )

        await asyncio.sleep(3)

# -----------------------------
# STARTUP
# -----------------------------

@fastapi_app.on_event("startup")
async def startup_event():
    asyncio.create_task(metric_generator())

# -----------------------------
# ASGI APP
# -----------------------------

app = socketio.ASGIApp(
    sio,
    other_asgi_app=fastapi_app,
)