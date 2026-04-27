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
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative text-white py-40 px-6">

        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Cloud infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-sm text-blue-400 uppercase tracking-wider">
              Enterprise Cloud & AI Consulting
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
              Transforming Technology Into Competitive Advantage
            </h1>

            <p className="mt-6 text-gray-200 max-w-xl text-lg">
              We design, build, and scale cloud and AI systems that deliver measurable business outcomes.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg">
                Start a Project
              </button>

              <button className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10">
                View Services
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
                  <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-500 shadow-sm hover:shadow-xl transition duration-500 transform hover:-translate-y-2">

                    <div className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">
                      <Icon className="w-8 h-8 text-blue-600 mb-4" />

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                        {service.title}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {service.desc}
                      </p>

                      <div className="mt-4 text-blue-600 text-sm opacity-0 group-hover:opacity-100">
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

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-4xl font-semibold mb-12">
              Why Choose AISEL Technologies
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <FadeIn>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Enterprise Expertise
                </h3>
                <p className="text-gray-600">
                  Deep experience in cloud, DevOps, and AI systems across industries.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Scalable Solutions
                </h3>
                <p className="text-gray-600">
                  Architectures designed to grow with your business.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Measurable Impact
                </h3>
                <p className="text-gray-600">
                  Focused on delivering outcomes, not just implementations.
                </p>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Transform Your Business?
        </h2>

        <p className="text-gray-300 mb-6">
          Let’s build scalable, intelligent systems together.
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded-md">
          Contact Us
        </button>
      </section>

      {/* STATUS */}
      <section className="text-center text-sm text-gray-500 py-10">
        API Status: {status}
      </section>

    </main>
  );
}