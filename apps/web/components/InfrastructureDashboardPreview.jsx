import Link from "next/link";

export default function InfrastructureDashboardPreview() {
return ( <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] p-6 shadow-2xl">


  {/* TOP BAR */}
  <div className="flex items-center justify-between border-b border-white/10 pb-4">

    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
        Monitoring & Observability
      </p>

      <h3 className="mt-2 text-xl font-semibold text-white">
        Infrastructure Operations Dashboard
      </h3>
    </div>

    <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400">
      <div className="h-2 w-2 rounded-full bg-emerald-400" />
      Operational
    </div>

  </div>

  {/* MAIN GRID */}
  <div className="mt-6 grid gap-4 lg:grid-cols-3">

    {/* METRICS */}
    <div className="space-y-4 lg:col-span-1">

      {[
        {
          label: "CPU Usage",
          value: "32%",
        },
        {
          label: "Memory Usage",
          value: "61%",
        },
        {
          label: "Containers Running",
          value: "12",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm"
        >

          <p className="text-sm text-gray-400">
            {item.label}
          </p>

          <div className="mt-3 flex items-end justify-between">

            <h4 className="text-3xl font-semibold text-white">
              {item.value}
            </h4>

            <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
              Stable
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* LIVE DASHBOARD PREVIEW */}
    <div className="rounded-2xl border border-white/5 bg-white/5 p-5 lg:col-span-2">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-400">
            Infrastructure Performance
          </p>

          <h4 className="mt-1 text-lg font-semibold text-white">
            Operational Metrics Overview
          </h4>
        </div>

        <div className="flex gap-2 text-xs text-gray-400">

          <span className="rounded-full bg-white/5 px-3 py-1">
            24H
          </span>

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
            LIVE
          </span>

        </div>

      </div>

      <Link
        href="/dashboard"
        className="block mt-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0F172A] to-[#111827] p-6 transition-all duration-300 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10"
      >

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-400">
              AISEL Platform
            </p>

            <h4 className="mt-1 text-2xl font-semibold text-white">
              Live Infrastructure Dashboard
            </h4>
          </div>

          <div className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400">
            LIVE
          </div>

        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">

          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-400">
              Infrastructure Nodes
            </p>

            <h5 className="mt-2 text-3xl font-bold text-white">
              5
            </h5>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-400">
              Active Alerts
            </p>

            <h5 className="mt-2 text-3xl font-bold text-amber-400">
              3
            </h5>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-400">
              Status
            </p>

            <h5 className="mt-2 text-3xl font-bold text-emerald-400">
              Healthy
            </h5>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-4">

          <div>
            <p className="text-sm text-white">
              Explore the AISEL Platform
            </p>

            <p className="text-xs text-gray-400">
              Real-time observability, monitoring, alerting and analytics
            </p>
          </div>

          <div className="text-sm font-medium text-emerald-400">
            Open Dashboard →
          </div>

        </div>

      </Link>

    </div>

  </div>

  {/* FOOTER */}
  <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">

    {[
      "Real-Time Infrastructure Monitoring",
      "Operational Visibility & Alerting",
      "Scalable Monitoring Architecture",
    ].map((item) => (
      <div
        key={item}
        className="rounded-xl border border-white/5 bg-white/5 px-4 py-4 text-sm text-gray-300"
      >
        {item}
      </div>
    ))}

  </div>

</div>

);
}
