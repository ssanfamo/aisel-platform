"use client";

import { useEffect, useState } from "react";

import io from "socket.io-client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";

type NodeType = {
  id: string;
  name: string;
  status: string;
};

type MetricType = {
  node_id: string;
  cpu_usage: number;
  memory_usage: number;
  timestamp: string;
};

export default function DashboardPage() {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [metrics, setMetrics] = useState<MetricType[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    loadNodes();

    const socket = io(API_URL, {
      transports: ["websocket", "polling"],
    });

    socket.on("connect", () => {
      console.log("Socket connected");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      setConnected(false);
    });

    socket.on("metric_update", (metric: MetricType) => {
      console.log("Metric received:", metric);

      setMetrics((prev) => {
        const updated = [...prev, metric];

        return updated.slice(-20);
      });
    });

    socket.on("connect_error", (err) => {
      console.error("Socket error:", err);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  async function loadNodes() {
    try {
      const response = await fetch(
        `${API_URL}/api/nodes`
      );

      const data = await response.json();

      console.log("Nodes response:", data);

      if (Array.isArray(data)) {
        setNodes(data);
      } else if (Array.isArray(data.nodes)) {
        setNodes(data.nodes);
      } else {
        setNodes([]);
      }
    } catch (error) {
      console.error("Failed to load nodes:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1020] p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              AISEL Infrastructure Dashboard
            </h1>

            <p className="mt-2 text-gray-400">
              Real-time infrastructure observability
            </p>
          </div>

          <div
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              connected
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {connected ? "Connected" : "Disconnected"}
          </div>
        </div>

        {/* NODES */}
        <div className="grid gap-6 md:grid-cols-3">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-semibold">
                {node.name}
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                {node.id}
              </p>

              <div className="mt-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    node.status === "online"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {node.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CHARTS */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* CPU CHART */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-semibold">
              CPU Usage
            </h2>

            <div
              style={{
                width: "100%",
                height: 350,
                minWidth: 0,
              }}
            >
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleTimeString()
                    }
                  />

                  <YAxis domain={[0, 100]} />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="cpu_usage"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* MEMORY CHART */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 text-2xl font-semibold">
              Memory Usage
            </h2>

            <div
              style={{
                width: "100%",
                height: 350,
                minWidth: 0,
              }}
            >
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(value) =>
                      new Date(value).toLocaleTimeString()
                    }
                  />

                  <YAxis domain={[0, 100]} />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="memory_usage"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* LIVE METRICS */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Live Metrics Stream
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-white/10 text-gray-400">
                <tr>
                  <th className="pb-4">Time</th>
                  <th className="pb-4">Node</th>
                  <th className="pb-4">CPU</th>
                  <th className="pb-4">Memory</th>
                </tr>
              </thead>

              <tbody>
                {[...metrics]
                  .reverse()
                  .map((metric, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5"
                    >
                      <td className="py-3">
                        {new Date(
                          metric.timestamp
                        ).toLocaleTimeString()}
                      </td>

                      <td className="py-3">
                        {metric.node_id}
                      </td>

                      <td className="py-3">
                        {metric.cpu_usage}%
                      </td>

                      <td className="py-3">
                        {metric.memory_usage}%
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}