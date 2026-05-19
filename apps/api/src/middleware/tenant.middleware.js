export function tenantResolver(req, res, next) {

    if (!req.user || !req.user.tenant_id) {

        return res.status(403).json({
            status: "error",
            message: "Tenant access denied"
        });
    }

    req.tenantId = req.user.tenant_id;

    next();
}