export default function AutomationPipelinePreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] p-6 shadow-2xl">

      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
            Systems Automation
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Infrastructure Automation Pipeline
          </h3>

        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
          ACTIVE WORKFLOW
        </div>

      </div>

      {/* PIPELINE */}
      <div className="mt-10 grid gap-6 lg:grid-cols-4">

        {[
          {
            title: "Source Control",
            subtitle: "Git Repository",
            status: "Synced",
          },
          {
            title: "Build Pipeline",
            subtitle: "Container Build",
            status: "Running",
          },
          {
            title: "Infrastructure",
            subtitle: "Deployment Stage",
            status: "Operational",
          },
          {
            title: "Monitoring",
            subtitle: "Health Verification",
            status: "Healthy",
          },
        ].map((item, index) => (
          <div
            key={item.title}
            className="relative rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
          >

            {/* CONNECTOR */}
            {index < 3 && (
              <div className="absolute left-full top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-cyan-300 lg:block" />
            )}

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">

              <div className="h-3 w-3 rounded-full bg-cyan-300" />

            </div>

            <h4 className="mt-6 text-lg font-semibold text-white">
              {item.title}
            </h4>

            <p className="mt-2 text-sm text-gray-400">
              {item.subtitle}
            </p>

            <div className="mt-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
              {item.status}
            </div>

          </div>
        ))}

      </div>

      {/* TERMINAL SECTION */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/5 bg-black/40">

        <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">

          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-4 text-xs text-gray-500">
            deployment-pipeline.log
          </span>

        </div>

        <div className="space-y-3 px-5 py-5 font-mono text-sm text-emerald-300">

          <div>
            ✓ Container build completed successfully
          </div>

          <div>
            ✓ Infrastructure validation passed
          </div>

          <div>
            ✓ Monitoring health checks operational
          </div>

          <div>
            ✓ Deployment synchronized across environment
          </div>

          <div className="text-cyan-300">
            → Automation pipeline active
          </div>

        </div>

      </div>

      {/* FOOTER GRID */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">

        {[
          {
            title: "CI/CD Automation",
            value: "Operational",
          },
          {
            title: "Deployment Consistency",
            value: "Standardized",
          },
          {
            title: "Infrastructure State",
            value: "Healthy",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/5 bg-white/5 p-5"
          >

            <p className="text-sm text-gray-400">
              {item.title}
            </p>

            <div className="mt-3 text-xl font-semibold text-white">
              {item.value}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
