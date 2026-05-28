from random import randint


def get_nodes():

    database_status = random_status()

    api_status = (
        "critical"
        if database_status == "critical"
        else random_status()
    )

    worker_status = (
        "warning"
        if api_status == "critical"
        else random_status()
    )

    monitoring_status = "healthy"

    return [
        {
            "id": "node-5",
            "name": "Load Balancer",
            "type": "gateway",
            "status": "healthy",
            "cpu_usage": randint(10, 40),
            "memory_usage": randint(20, 50),
            "disk_usage": randint(10, 30),
        },

        {
            "id": "node-1",
            "name": "API Cluster",
            "type": "api",
            "status": api_status,
            "cpu_usage": randint(20, 95),
            "memory_usage": randint(20, 90),
            "disk_usage": randint(20, 80),
        },

        {
            "id": "node-2",
            "name": "Primary Database",
            "type": "database",
            "status": database_status,
            "cpu_usage": randint(20, 95),
            "memory_usage": randint(30, 95),
            "disk_usage": randint(40, 95),
        },

        {
            "id": "node-3",
            "name": "Worker Cluster",
            "type": "worker",
            "status": worker_status,
            "cpu_usage": randint(20, 90),
            "memory_usage": randint(20, 90),
            "disk_usage": randint(20, 80),
        },

        {
            "id": "node-4",
            "name": "Monitoring Stack",
            "type": "monitoring",
            "status": monitoring_status,
            "cpu_usage": randint(5, 40),
            "memory_usage": randint(10, 50),
            "disk_usage": randint(10, 40),
        },
    ]


def random_status():

    value = randint(1, 100)

    if value > 90:
        return "critical"

    if value > 75:
        return "warning"

    return "healthy"