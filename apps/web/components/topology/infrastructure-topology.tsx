
"use client";

import React from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

interface Props {
  nodesData: any[];
}

export default function InfrastructureTopology({
  nodesData,
}: Props) {

  const topologyNodes = nodesData.map(
    (node, index) => {

      const statusColors: any = {
        healthy: "#22c55e",
        warning: "#eab308",
        critical: "#ef4444",
        offline: "#64748b",
      };

      return {
        id: node.id,

        status: node.status,

        position: {
          x: 250 * (index % 3),
          y: 180 * Math.floor(index / 3),
        },

        data: {
          label: (
            <div className="min-w-[180px] rounded-xl border border-white/10 bg-[#0f172a] p-4 text-white shadow-2xl">

              <div className="flex items-center justify-between">

                <div className="text-sm font-semibold">
                  {node.name}
                </div>

                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    background:
                      statusColors[node.status],
                  }}
                />

              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-300">

                <div>
                  CPU: {node.cpu_usage}%
                </div>

                <div>
                  Memory: {node.memory_usage}%
                </div>

                <div>
                  Disk: {node.disk_usage}%
                </div>

                <div className="pt-2 text-[11px] uppercase tracking-wide text-slate-500">
                  {node.status}
                </div>

              </div>

            </div>
          ),
        },

        style: {
          background: "transparent",
          border: "none",
        },
      };
    }
  );

  const topologyEdges = [
    {
      id: "e1",
      source: "node-5",
      target: "node-1",
      animated: true,
      style: {
        stroke: "#38bdf8",
      },
    },

    {
      id: "e2",
      source: "node-1",
      target: "node-2",
      animated: true,
      style: {
        stroke: "#38bdf8",
      },
    },

    {
      id: "e3",
      source: "node-1",
      target: "node-4",
      animated: true,
      style: {
        stroke: "#38bdf8",
      },
    },

    {
      id: "e4",
      source: "node-2",
      target: "node-3",
      animated: true,
      style: {
        stroke: "#38bdf8",
      },
    },
  ];

  return (
    <div className="h-[700px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#020817]">

      <ReactFlow
        nodes={topologyNodes}
        edges={topologyEdges}
        fitView
      >

        <MiniMap
          nodeColor={(node) => {

            switch (node.status) {

              case "critical":
                return "#ef4444";

              case "warning":
                return "#eab308";

              case "healthy":
                return "#22c55e";

              default:
                return "#64748b";
            }
          }}
        />

        <Controls />

        <Background />

      </ReactFlow>

    </div>
  );
}