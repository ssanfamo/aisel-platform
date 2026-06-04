from sqlalchemy.orm import Session

from models.node import Node


# ---------------------------------------------------
# NODE STATUS CALCULATION
# ---------------------------------------------------

def calculate_status(
    cpu: float,
    memory: float,
    disk: float,
):

    if (
        cpu >= 90
        or memory >= 90
        or disk >= 90
    ):
        return "critical"

    if (
        cpu >= 75
        or memory >= 75
        or disk >= 75
    ):
        return "warning"

    return "healthy"


# ---------------------------------------------------
# GET ALL NODES FOR TENANT
# ---------------------------------------------------

def get_nodes(
    db: Session,
    tenant_id: int,
):

    return (
        db.query(Node)
        .filter(
            Node.tenant_id == tenant_id
        )
        .all()
    )


# ---------------------------------------------------
# GET SINGLE NODE FOR TENANT
# ---------------------------------------------------

def get_node(
    db: Session,
    tenant_id: int,
    node_id: str,
):

    return (
        db.query(Node)
        .filter(
            Node.tenant_id == tenant_id,
            Node.id == node_id,
        )
        .first()
    )


# ---------------------------------------------------
# UPDATE NODE METRICS
# ---------------------------------------------------

def update_node_metrics(
    db: Session,
    tenant_id: int,
    node_id: str,
    cpu_usage: float,
    memory_usage: float,
    disk_usage: float,
):

    node = (
        db.query(Node)
        .filter(
            Node.tenant_id == tenant_id,
            Node.id == node_id,
        )
        .first()
    )

    if not node:
        return None

    node.cpu_usage = cpu_usage

    node.memory_usage = memory_usage

    node.disk_usage = disk_usage

    node.status = calculate_status(
        cpu_usage,
        memory_usage,
        disk_usage,
    )

    db.commit()

    db.refresh(node)

    return node


# ---------------------------------------------------
# CREATE NODE
# ---------------------------------------------------

def create_node(
    db: Session,
    tenant_id: int,
    node_id: str,
    name: str,
    node_type: str,
):

    node = Node(
        id=node_id,
        tenant_id=tenant_id,
        name=name,
        type=node_type,
        status="healthy",
        cpu_usage=0,
        memory_usage=0,
        disk_usage=0,
    )

    db.add(node)

    db.commit()

    db.refresh(node)

    return node


# ---------------------------------------------------
# DELETE NODE
# ---------------------------------------------------

def delete_node(
    db: Session,
    tenant_id: int,
    node_id: str,
):

    node = (
        db.query(Node)
        .filter(
            Node.tenant_id == tenant_id,
            Node.id == node_id,
        )
        .first()
    )

    if not node:
        return False

    db.delete(node)

    db.commit()

    return True


# ---------------------------------------------------
# BUILD DASHBOARD SNAPSHOT
# ---------------------------------------------------

def build_nodes_snapshot(
    db: Session,
    tenant_id: int,
):

    nodes = get_nodes(
        db,
        tenant_id,
    )

    return [
        {
            "id": node.id,
            "tenant_id": node.tenant_id,
            "name": node.name,
            "type": node.type,
            "status": node.status,
            "cpu_usage": node.cpu_usage,
            "memory_usage": node.memory_usage,
            "disk_usage": node.disk_usage,
        }
        for node in nodes
    ]