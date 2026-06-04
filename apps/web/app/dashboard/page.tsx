"use client";

import { useEffect, useState } from "react";

import {
  Activity,
  AlertTriangle,
  Cpu,
  HardDrive,
  MemoryStick,
  ShieldAlert,
} from "lucide-react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { io } from "socket.io-client";

import InfrastructureTopology from "../../components/topology/infrastructure-topology";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";

  const getToken = () => {
    if (typeof window === "undefined") {
      return null;
    }

    return localStorage.getItem(
      "access_token"
    );
  };

const socket = io(API_URL, {
  transports: ["websocket"],
});

export default function DashboardPage() {
  const [nodes, setNodes] = useState<any[]>([]);

  const [metrics, setMetrics] = useState<any[]>([]);

  const [alerts, setAlerts] = useState<any[]>([]);

  const [connected, setConnected] =
    useState(false);

  // ---------------------------------------------------
  // LOAD INITIAL DATA
  // ---------------------------------------------------

  useEffect(() => {
    const token = getToken();

    if (!token) {
      window.location.href = "/login";
      return;
    }

    loadNodes();

    loadAlerts();
  }, []);

  const loadNodes = async () => {
    try {
      const token = getToken();

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(
        `${API_URL}/api/nodes`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        localStorage.removeItem(
          "access_token"
        );

        window.location.href = "/login";
        return;
      }

      const data = await response.json();

      setNodes(data);
    } catch (err) {
      console.error(
        "Failed to load nodes:",
        err
      );
    }
  };

  const loadAlerts = async () => {
    try {
      const token = getToken();

      if (!token) {
        return;
      }

      const response = await fetch(
        `${API_URL}/api/alerts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        localStorage.removeItem(
          "access_token"
        );

        window.location.href = "/login";
        return;
      }

      const data = await response.json();

      setAlerts(data);
    } catch (err) {
      console.error(
        "Failed to load alerts:",
        err
      );
    }
  };

  // ---------------------------------------------------
  // SOCKET EVENTS
  // ---------------------------------------------------

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    socket.on(
      "metrics_update",
      (metric) => {
        setMetrics((prev) => [
          metric,
          ...prev,
        ].slice(0, 30));
      }
    );

    socket.on(
      "nodes_update",
      (updatedNodes) => {
        setNodes(updatedNodes);
      }
    );

    return () => {
      socket.off("connect");

      socket.off("disconnect");

      socket.off("metrics_update");

      socket.off("nodes_update");
    };
  }, []);

  // ---------------------------------------------------
  // KPI CALCULATIONS
  // ---------------------------------------------------

  const activeAlerts =
    alerts.length;

  const healthyNodes =
    nodes.filter(
      (n) => n.status === "healthy"
    ).length;

  const avgCpu =
    nodes.length > 0
      ? (
          nodes.reduce(
            (sum, node) =>
              sum + node.cpu_usage,
            0
          ) / nodes.length
        ).toFixed(1)
      : "0";

  // ---------------------------------------------------
  // STATUS COLORS
  // ---------------------------------------------------

  const getStatusStyles = (
    status: string
  ) => {
    switch (status) {
      case "critical":
        return "bg-red-500/20 text-red-400";

      case "warning":
        return "bg-yellow-500/20 text-yellow-400";

      default:
        return "bg-green-500/20 text-green-400";
    }
  };

  const getAlertStyles = (
    severity: string
  ) => {
    switch (severity) {
      case "critical":
        return "border-red-500/30 bg-red-500/10 text-red-300";

      case "warning":
        return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300";

      default:
        return "border-blue-500/30 bg-blue-500/10 text-blue-300";
    }
  };

  return (
    <main className="min-h-screen bg-[#020817] text-white">

      <div className="mx-auto max-w-7xl p-8">

        {/* HEADER */}

        <div className="mb-10 flex items-start justify-between">

          <div>

            <h1 className="text-5xl font-bold tracking-tight">
              AISEL Infrastructure Dashboard
            </h1>

            <p className="mt-3 text-slate-400">
              Real-time infrastructure observability
            </p>

          </div>

          <div
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              connected
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {connected
              ? "Connected"
              : "Disconnected"}
          </div>

        </div>

        {/* KPI CARDS */}

        <div className="mb-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-4">

              <Activity className="h-8 w-8 text-cyan-400" />

              <div>

                <div className="text-sm text-slate-400">
                  Infrastructure Health
                </div>

                <div className="text-3xl font-bold">
                  {healthyNodes}/{nodes.length}
                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-4">

              <ShieldAlert className="h-8 w-8 text-red-400" />

              <div>

                <div className="text-sm text-slate-400">
                  Active Alerts
                </div>

                <div className="text-3xl font-bold">
                  {activeAlerts}
                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-4">

              <Cpu className="h-8 w-8 text-blue-400" />

              <div>

                <div className="text-sm text-slate-400">
                  Avg CPU Usage
                </div>

                <div className="text-3xl font-bold">
                  {avgCpu}%
                </div>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-4">

              <AlertTriangle className="h-8 w-8 text-yellow-400" />

              <div>

                <div className="text-sm text-slate-400">
                  Operational Status
                </div>

                <div className="text-2xl font-bold text-green-400">
                  Stable
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* NODES */}

        <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {nodes.map((node) => (

            <div
              key={node.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >

              <div className="mb-5 flex items-start justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {node.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    {node.id}
                  </p>

                </div>

                <div
                  className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusStyles(
                    node.status
                  )}`}
                >
                  {node.status}
                </div>

              </div>

              <div className="space-y-4 text-sm">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-blue-400" />
                    CPU Usage
                  </div>

                  <div className="font-semibold text-green-400">
                    {node.cpu_usage}%
                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <MemoryStick className="h-4 w-4 text-emerald-400" />
                    Memory Usage
                  </div>

                  <div className="font-semibold">
                    {node.memory_usage}%
                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4 text-yellow-400" />
                    Disk Usage
                  </div>

                  <div className="font-semibold">
                    {node.disk_usage}%
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CHARTS */}

        <div className="mb-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <h2 className="mb-6 text-3xl font-bold">
              CPU Usage
            </h2>

            <div className="h-[350px] w-full">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart data={metrics}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      new Date(
                        value
                      ).toLocaleTimeString()
                    }
                  />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="cpu_usage"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

            <h2 className="mb-6 text-3xl font-bold">
              Memory Usage
            </h2>

            <div className="h-[350px] w-full">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart data={metrics}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      new Date(
                        value
                      ).toLocaleTimeString()
                    }
                  />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="memory_usage"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={false}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>
        
        {/* TOPOLOGY */}

        <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="mb-6">

            <h2 className="text-3xl font-bold">
              Infrastructure Topology
            </h2>

            <p className="mt-2 text-slate-400">
              Real-time infrastructure relationship map
            </p>

          </div>

          <InfrastructureTopology
            nodesData={nodes}
          />

        </div>

        {/* ALERT CENTER */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-3xl font-bold">
              Active Alerts
            </h2>

            <div className="rounded-full bg-red-500/20 px-4 py-2 text-sm text-red-400">
              {alerts.length} Alerts
            </div>

          </div>

          <div className="space-y-4">

            {alerts.length === 0 && (

              <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-5 text-green-300">
                No active infrastructure alerts
              </div>

            )}

            {alerts.map((alert) => (

              <div
                key={alert.id}
                className={`rounded-xl border p-5 ${getAlertStyles(
                  alert.severity
                )}`}
              >

                <div className="flex items-start justify-between">

                  <div>

                    <div className="font-semibold">
                      {alert.message}
                    </div>

                    <div className="mt-2 text-sm opacity-70">
                      {alert.node_id}
                    </div>

                  </div>

                  <div className="rounded-full bg-black/20 px-3 py-1 text-xs uppercase tracking-wide">
                    {alert.severity}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}