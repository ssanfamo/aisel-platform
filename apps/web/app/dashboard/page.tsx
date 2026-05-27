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
  cpu_usage?: number;
  memory_usage?: number;
  disk_usage?: number;
};

type MetricType = {
  id?: number;
  node_id: string;
  cpu_usage: number;
  memory_usage: number;
  disk_usage: number;
  timestamp: string;
};

export default function DashboardPage() {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [metrics, setMetrics] = useState<MetricType[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    loadNodes();

    const socket = io(API_URL, {
      transports: ["websocket"], // Changed to only websocket as per your requirement
    });

    socket.on("connect", () => {
      console.log("Socket connected");
      setConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
      setConnected(false);
    });

    // Changed from "metric_update" to "metrics_update" as per your provided code
    socket.on("metrics_update", (metric: MetricType) => {
      console.log("Live metric:", metric);

      setMetrics((prev) => {
        const updated = [...prev, metric];
        return updated.slice(-20);
      });

      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          if (node.id === metric.node_id) {
            return {
              ...node,
              cpu_usage: metric.cpu_usage,
              memory_usage: metric.memory_usage,
              disk_usage: metric.disk_usage,
              status:
                metric.cpu_usage > 85
                  ? "critical"
                  : "healthy",
            };
          }
          return node;
        })
      );
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

      let nodesData = [];
      if (Array.isArray(data)) {
        nodesData = data;
      } else if (Array.isArray(data.nodes)) {
        nodesData = data.nodes;
      }

      // Initialize nodes with default values
      setNodes(nodesData.map((node: any) => ({
        ...node,
        cpu_usage: node.cpu_usage || 0,
        memory_usage: node.memory_usage || 0,
        disk_usage: node.disk_usage || 0,
        status: node.status || "healthy"
      })));
    } catch (error) {
      console.error("Failed to load nodes:", error);
      setNodes([]);
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

              {/* Display real-time metrics for each node */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CPU Usage:</span>
                  <span className={node.cpu_usage && node.cpu_usage > 85 ? "text-red-400" : "text-green-400"}>
                    {node.cpu_usage?.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Memory Usage:</span>
                  <span>{node.memory_usage?.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Disk Usage:</span>
                  <span>{node.disk_usage?.toFixed(1)}%</span>
                </div>
              </div>

              <div className="mt-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    node.status === "healthy" || node.status === "online"
                      ? "bg-green-500/20 text-green-400"
                      : node.status === "critical"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
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
                  <th className="pb-4">Disk</th>
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

                      <td className="py-3">
                        {metric.disk_usage}%
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