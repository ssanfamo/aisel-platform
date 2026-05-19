INSERT INTO tenants (name, plan)
VALUES ('AISEL Demo Client', 'pro');

INSERT INTO users (
    tenant_id,
    name,
    email,
    role
)
SELECT
    id,
    'Admin User',
    'admin@aisel.com',
    'admin'
FROM tenants
LIMIT 1;