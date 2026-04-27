"use client";

import { useEffect, useState } from "react";
import { Cloud, Cpu, Workflow, Layers, Settings } from "lucide-react";
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
    {
      title: "Managed IT Services (MSP)",
      desc: "End-to-end monitoring, support, and infrastructure management.",
      icon: Settings,
      image: "/images/operations.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900 pt-10">

      {/* HERO */}
      <section className="relative text-white py-32 px-6">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Cloud infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-sm text-blue-400 uppercase tracking-wider">
              Enterprise Cloud & AI Consulting
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-semibold max-w-3xl">
              Transforming Technology Into Business Advantage
            </h1>

            <p className="mt-6 text-gray-200 max-w-xl">
              We design, build, and scale cloud and AI systems that deliver
              measurable business impact.
            </p>

            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg transition transform hover:scale-105">
                Start a Project
              </button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">

                    {/* IMAGE */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <Icon className="w-8 h-8 text-blue-600 mb-4" />

                      <h3 className="text-xl font-semibold mb-2 transition group-hover:text-blue-600">
                        {service.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                        Learn more →
                      </div>
                    </div>

                  </div>
                </FadeIn>
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