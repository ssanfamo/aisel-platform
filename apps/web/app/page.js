"use client";

import { useEffect, useState } from "react";
import { Cloud, Cpu, Workflow, Layers } from "lucide-react";
import FadeIn from "../components/FadeIn";

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
      image: "/images/cloud.jpg",
    },
    {
      title: "AI Automation",
      desc: "Intelligent systems that automate operations and decision-making.",
      icon: Cpu,
      image: "/images/ai.jpg",
    },
    {
      title: "DevOps Engineering",
      desc: "CI/CD pipelines that accelerate delivery and reduce risk.",
      icon: Workflow,
      image: "/images/devops.jpg",
    },
    {
      title: "Platform Engineering",
      desc: "Internal platforms that enable scalable engineering teams.",
      icon: Layers,
      image: "/images/operations.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900 pt-10">

      {/* HERO */}
      <section className="relative text-white py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <FadeIn>
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

              <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105">
                  Start a Project
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <FadeIn>
            <h2 className="text-4xl font-semibold text-center mb-16">
              Core Capabilities
            </h2>
          </FadeIn>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <div
                  key={i}
                  className="border rounded-xl overflow-hidden shadow-sm bg-white"
                >

                  {/* IMAGE (FORCED VISIBLE) */}
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />

                  {/* CONTENT */}
                  <div className="p-6">
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.desc}</p>
                  </div>

                </div>
              );
            })}
          </div>
      </section>

      {/* STATUS */}
      <section className="text-center text-sm text-gray-500 pb-10">
        API Status: {status}
      </section>

    </main>
  );
}