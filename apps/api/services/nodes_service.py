NODES = [
    {
        "id": "node-1",
        "name": "API Server",
        "status": "online",
        "region": "eu-west"
    },
    {
        "id": "node-2",
        "name": "Database Server",
        "status": "online",
        "region": "eu-west"
    },
    {
        "id": "node-3",
        "name": "Monitoring Server",
        "status": "online",
        "region": "us-east"
    }
]


def get_nodes():
    return NODES