"use client";

import { useEffect, useState } from "react";

import { io } from "socket.io-client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL!;

const TOKEN =
  process.env.NEXT_PUBLIC_JWT_TOKEN!;

export default function DashboardPage() {

  const [overview, setOverview] =
    useState<any>(null);

  const [chartData, setChartData] =
    useState<any[]>([]);

  const [nodes, setNodes] =
    useState<any[]>([]);

  const [selectedNode, setSelectedNode] =
    useState<string>("");


  async function loadOverview(
    nodeId?: string
  ) {

    try {

      const currentNode =
        nodeId || selectedNode;

      if (!currentNode) {
        return;
      }

      const response =
        await fetch(
          `${API_URL}/api/nodes/${currentNode}/overview`,
          {
            headers: {
              Authorization:
                `Bearer ${TOKEN}`
            }
          }
        );

      const data =
        await response.json();

      setOverview(data.overview);

      if (
        data.overview?.latest_metrics
        ) {

        const metric =
            data.overview.latest_metrics;

        if (!metric) return;

        setChartData((prev) => {

            const updated = [

            ...prev,

            {
                time:
                new Date(
                    metric.timestamp
                ).toLocaleTimeString(),

                cpu:
                metric.cpu_usage,

                memory:
                metric.memory_usage
            }
            ];

            return updated.slice(-20);
        });
        }

    } catch (error) {

      console.error(
        "Failed to load overview:",
        error
      );
    }
  }

  useEffect(() => {

    async function initialize() {

        try {

        const response =
            await fetch(
            `${API_URL}/api/nodes`,
            {
                headers: {
                Authorization:
                    `Bearer ${TOKEN}`
                }
            }
            );

        const data =
            await response.json();

        setNodes(data.nodes || []);

        if (
            data.nodes &&
            data.nodes.length > 0
        ) {

            const firstNode =
            data.nodes[0].id;

            setSelectedNode(firstNode);

            await loadOverview(firstNode);
        }

        } catch (error) {

        console.error(
            "Initialization failed:",
            error
        );
        }
    }

    initialize();

    }, []);

  useEffect(() => {

    if (selectedNode) {
      loadOverview();
    }

  }, [selectedNode]);

  useEffect(() => {

    const socket =
      io(API_URL);

    socket.on(
      "connect",
      () => {

        console.log(
          "Socket connected:",
          socket.id
        );
      }
    );

    socket.on(
      "metrics:new",
      (data) => {

        console.log(
          "LIVE METRIC:",
          data
        );

        if (
          data.node_id !==
          selectedNode
        ) {
          return;
        }

        setChartData((prev) => [

          ...prev.slice(-19),

          {
            time:
              new Date(
                data.timestamp
              ).toLocaleTimeString(),

            cpu:
              data.cpu_usage,

            memory:
              data.memory_usage
          }
        ]);

        loadOverview();
      }
    );

    return () => {
      socket.disconnect();
    };

  }, [selectedNode]);

  return (

    <div className="flex min-h-screen bg-gray-50">

      <div
        className="
          w-[280px]
          bg-white
          border-r
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Infrastructure Nodes
        </h2>

        <div className="space-y-3">

          {
            nodes.map((node) => (

              <button
                key={node.id}

                onClick={() =>
                  setSelectedNode(
                    node.id
                  )
                }

                className={`
                  w-full
                  text-left
                  p-4
                  rounded-xl
                  border
                  transition

                  ${
                    selectedNode ===
                    node.id
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }
                `}
              >

                <p className="font-bold">
                  {node.name}
                </p>

                <p
                  className="
                    text-sm
                    opacity-70
                  "
                >
                  {node.type}
                </p>

              </button>
            ))
          }

        </div>
      </div>

      <div
        className="
          flex-1
          p-10
          space-y-6
        "
      >

        <div>

          <h1
            className="
              text-4xl
              font-bold
            "
          >
            AISEL Fleet Dashboard
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >

            Active Node:

            {" "}

            {
              nodes.find(
                (
                  node
                ) =>
                  node.id ===
                  selectedNode
              )?.name
            }

          </p>

        </div>

        {
          overview && (

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
              "
            >

              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  p-6
                "
              >

                <h2
                  className="
                    text-lg
                    font-semibold
                    mb-3
                  "
                >
                  Health Status
                </h2>

                <p
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  {
                    overview.health
                      ?.status
                  }
                </p>

                <p
                  className="
                    text-gray-500
                    mt-2
                  "
                >
                  Score:

                  {" "}

                  {
                    overview.health
                      ?.health_score
                  }
                </p>

              </div>

              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  p-6
                "
              >

                <h2
                  className="
                    text-lg
                    font-semibold
                    mb-3
                  "
                >
                  CPU Average
                </h2>

                <p
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  {
                    overview.trends
                      ?.cpu_average
                  }%
                </p>

              </div>

              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  p-6
                "
              >

                <h2
                  className="
                    text-lg
                    font-semibold
                    mb-3
                  "
                >
                  Memory Average
                </h2>

                <p
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  {
                    overview.trends
                      ?.memory_average
                  }%
                </p>

              </div>

              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-sm
                  p-6
                "
              >

                <h2
                  className="
                    text-lg
                    font-semibold
                    mb-3
                  "
                >
                  Active Alerts
                </h2>

                <p
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  {
                    overview.active_alerts
                      ?.length
                  }
                </p>

              </div>

            </div>
          )
        }

        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            p-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Live Infrastructure Metrics
          </h2>

          <div className="h-[350px] w-full min-w-0">

            <ResponsiveContainer
              width="100%"
              height={350}
            >

              <LineChart
                data={chartData}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="time" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="cpu"
                  stroke="#000"
                />

                <Line
                  type="monotone"
                  dataKey="memory"
                  stroke="#8884d8"
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {
          overview?.diagnostics && (

            <div
              className="
                bg-white
                rounded-2xl
                shadow-sm
                p-6
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                Diagnostics
              </h2>

              <div className="space-y-3">

                {
                  overview
                    .diagnostics
                    .diagnostics
                    ?.map(
                      (
                        item: string,
                        index: number
                      ) => (

                        <div
                          key={index}

                          className="
                            p-4
                            rounded-xl
                            bg-red-50
                            border
                            border-red-200
                          "
                        >
                          {item}
                        </div>
                      )
                    )
                }

              </div>

            </div>
          )
        }

        {
          overview?.diagnostics
            ?.recommendations && (

            <div
              className="
                bg-white
                rounded-2xl
                shadow-sm
                p-6
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                Recommendations
              </h2>

              <div className="space-y-3">

                {
                  overview
                    .diagnostics
                    .recommendations
                    ?.map(
                      (
                        item: string,
                        index: number
                      ) => (

                        <div
                          key={index}

                          className="
                            p-4
                            rounded-xl
                            bg-blue-50
                            border
                            border-blue-200
                          "
                        >
                          {item}
                        </div>
                      )
                    )
                }

              </div>

            </div>
          )
        }

      </div>

    </div>
  );
}