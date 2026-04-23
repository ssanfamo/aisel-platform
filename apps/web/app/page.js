"use client";

import { useEffect, useState } from "react";
import { Cloud, Cpu, Workflow, Layers, Settings } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

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

      {/* HERO WITH REAL IMAGE */}
      <section className="relative text-white py-32 px-6">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Cloud infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <div>
              <p className="text-sm text-blue-400 uppercase tracking-wider">
                Enterprise Cloud & AI Consulting
              </p>

              <h1 className="mt-4 text-5xl md:text-6xl font-semibold">
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

          {/* Services Image */}
          <FadeIn>
            <div className="mb-16 rounded-xl overflow-hidden">
              <Image
                src="/images/services.jpg"
                alt="Technology services"
                width={1200}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border p-8 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1">
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.desc}</p>
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