"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function InfrastructureDashboardPreview() {
const [stats, setStats] = useState({
nodes: 0,
alerts: 0,
metrics: 0,
cpu_usage: 0,
memory_usage: 0,
status: "Loading...",
});

const [nodes, setNodes] = useState([]);

const [alerts, setAlerts] = useState([]);

useEffect(() => {
const loadStats = async () => {
try {
const response = await fetch(
`${process.env.NEXT_PUBLIC_API_URL}/api/public/dashboard-summary`
);

    const data = await response.json();

    setStats({
      nodes: data.nodes || 0,
      alerts: data.alerts || 0,
      metrics: data.metrics || 0,
      cpu_usage: data.cpu_usage || 0,
      memory_usage: data.memory_usage || 0,
      status: data.status || "Healthy",
    });

    const alertsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/public/recent-alerts`
    );

    const alertsData = await alertsResponse.json();

    setAlerts(alertsData || []);

    const nodeResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/public/node-status`
    );

    const nodeData = await nodeResponse.json();

    setNodes(nodeData || []);

  } catch (error) {
    console.error("Failed to load dashboard summary:", error);

    setStats({
      nodes: 0,
      alerts: 0,
      metrics: 0,
      cpu_usage: 0,
      memory_usage: 0,
      status: "Unavailable",
    });
  }
};

loadStats();

const interval = setInterval(loadStats, 60000);

return () => clearInterval(interval);

}, []);

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
      {stats.status}
    </div>

  </div>

  {/* MAIN GRID */}
  <div className="mt-6 grid gap-4 lg:grid-cols-3">

    {/* LIVE METRICS */}
    <div className="space-y-4 lg:col-span-1">

      {[
        {
          label: "Infrastructure Nodes",
          value: stats.nodes,
        },
        {
          label: "Active Alerts",
          value: stats.alerts,
        },
        {
          label: "Metrics Collected",
          value: stats.metrics.toLocaleString(),
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
              Live
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* DASHBOARD CARD */}
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
              Nodes
            </p>

            <h5 className="mt-2 text-3xl font-bold text-white">
              {stats.nodes}
            </h5>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-400">
              Alerts
            </p>

            <h5 className="mt-2 text-3xl font-bold text-amber-400">
              {stats.alerts}
            </h5>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-400">
              Metrics
            </p>

            <h5 className="mt-2 text-3xl font-bold text-emerald-400">
              {stats.metrics.toLocaleString()}
            </h5>
          </div>

        </div>

        <div className="mt-6 rounded-xl border border-white/5 bg-white/5 px-4 py-4">

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">CPU Usage</span>
            <span className="font-medium text-white">
              {stats.cpu_usage}%
            </span>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span className="text-gray-400">Memory Usage</span>
            <span className="font-medium text-white">
              {stats.memory_usage}%
            </span>
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


  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">

    <div className="flex items-center justify-between">

      <h4 className="text-lg font-semibold text-white">
        Recent Platform Activity
      </h4>

      <span className="text-xs text-emerald-400">
        LIVE
      </span>

    </div>

    <div className="mt-4 space-y-3">

      {alerts.slice(0, 5).map((alert) => (

        <div
          key={alert.id}
          className="rounded-xl border border-white/5 bg-white/5 p-3"
        >

          <div className="flex items-center justify-between">

            <span className={`text-xs font-medium ${
              alert.severity === "critical"
                ? "text-red-400"
                : "text-amber-400"
            }`}>
              {alert.severity.toUpperCase()}
            </span>

            <span className="text-xs text-gray-500">
              {alert.node_id}
            </span>

          </div>

          <p className="mt-2 text-sm text-gray-300">
            {alert.message}
          </p>

        </div>

      ))}

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
