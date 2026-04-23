"use client";

import { useEffect, useState } from "react";
import { Cloud, Cpu, Workflow, Layers, Settings } from "lucide-react";

export default function Home() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Offline"));
  }, []);

  const services = [
    {
      title: "Cloud Infrastructure",
      desc: "Scalable, secure cloud environments built for enterprise performance.",
      icon: Cloud,
    },
    {
      title: "AI Automation",
      desc: "Intelligent systems that automate operations and decision-making.",
      icon: Cpu,
    },
    {
      title: "DevOps Engineering",
      desc: "CI/CD pipelines that accelerate delivery and reduce risk.",
      icon: Workflow,
    },
    {
      title: "Platform Engineering",
      desc: "Internal platforms that enable scalable engineering teams.",
      icon: Layers,
    },
    {
      title: "Managed IT Services",
      desc: "End-to-end infrastructure and operational support.",
      icon: Settings,
    },
  ];

  return (
    <main className="bg-white text-gray-900 pt-10">

      {/* HERO */}
      <section className="bg-slate-950 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm text-blue-400 uppercase tracking-wider">
              Enterprise Cloud & AI Consulting
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-semibold">
              Transforming Technology Into Business Advantage
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl">
              We design, build, and scale cloud and AI systems that deliver
              measurable business impact.
            </p>
          </div>

          <div className="h-[400px] rounded-2xl bg-gradient-to-br from-blue-600/30 to-indigo-600/20" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="border p-8 rounded-xl hover:shadow-lg transition"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="text-center text-sm text-gray-500 pb-10">
        API Status: {status}
      </section>

    </main>
  );
}