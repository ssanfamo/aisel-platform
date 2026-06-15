INSERT INTO nodes (
    id,
    tenant_id,
    name,
    type,
    status,
    cpu_usage,
    memory_usage,
    disk_usage,
    created_at
)
VALUES
('node-1',1,'API Cluster','application','healthy',0,0,0,NOW()),
('node-2',1,'Primary Database','database','healthy',0,0,0,NOW()),
('node-3',1,'Worker Cluster','worker','healthy',0,0,0,NOW()),
('node-4',1,'Monitoring Stack','monitoring','healthy',0,0,0,NOW()),
('node-5',1,'Load Balancer','network','healthy',0,0,0,NOW());
