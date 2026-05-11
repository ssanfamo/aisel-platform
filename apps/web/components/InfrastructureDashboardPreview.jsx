export default function InfrastructureDashboardPreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] p-6 shadow-2xl">

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
              label: "Network Traffic",
              value: "1.2Gb/s",
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

        {/* CHART AREA */}
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

          {/* FAKE CHART */}
          <div className="relative mt-8 h-64 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-emerald-500/5 to-transparent">

            <div className="absolute inset-0 opacity-20">

              <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            </div>

            <svg
              viewBox="0 0 500 200"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >

              <path
                d="M0 160 C80 140, 120 90, 180 110 C240 130, 280 40, 340 60 C400 80, 450 30, 500 50"
                stroke="#34D399"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d="M0 180 C80 170, 120 120, 180 130 C240 140, 280 70, 340 90 C400 110, 450 60, 500 80"
                stroke="#10B981"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.7"
              />

            </svg>

            <div className="absolute bottom-4 left-4 rounded-xl border border-white/5 bg-black/40 px-4 py-3 backdrop-blur-sm">

              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Operational Status
              </p>

              <div className="mt-2 flex items-center gap-2 text-emerald-400">

                <div className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-sm font-medium">
                  All Systems Operational
                </span>

              </div>

            </div>

          </div>

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
