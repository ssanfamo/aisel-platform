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
      title: "Managed IT Services",
      desc: "End-to-end monitoring, support, and infrastructure management.",
      icon: Settings,
      image: "/images/operations.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative text-white py-48 px-6">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-sm text-brand-primary uppercase tracking-widest">
              AISEL Technologies
            </p>

            <h1 className="mt-6 text-6xl md:text-7xl font-semibold tracking-tight">
              Building Scalable Systems for Modern Businesses
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-xl leading-relaxed">
              We design and implement cloud, AI, and platform solutions that
              deliver measurable performance and long-term scalability.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-brand-primary text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Start a Project
              </button>

              <button className="border border-white/30 px-6 py-3 rounded-md transition-all duration-300 hover:bg-white/10">
                Explore Services
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-5xl font-semibold mb-16 tracking-tight">
              Core Capabilities
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group">

                    <div className="h-52 overflow-hidden rounded-lg mb-5">
                      <img
                        src={service.image}
                        alt=""
                        className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <Icon className="w-7 h-7 text-brand-primary mb-3" />

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>

                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="bg-brand-light py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-5xl font-semibold mb-16 tracking-tight">
              Why AISEL Technologies
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 text-sm">

            <FadeIn>
              <div>
                <h3 className="text-lg font-semibold mb-3">Proven Expertise</h3>
                <p className="text-gray-600">
                  Deep experience across cloud infrastructure, DevOps, and AI systems.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-lg font-semibold mb-3">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Systems designed to grow with your business without compromise.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-lg font-semibold mb-3">Business Impact</h3>
                <p className="text-gray-600">
                  Focused on outcomes that improve efficiency and reduce cost.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white py-28 text-center px-6">
        <FadeIn>
          <h2 className="text-4xl font-semibold mb-4">
            Let’s Build Your Next Platform
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with us to design systems that scale.
          </p>

          <button className="bg-brand-primary px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Contact Us
          </button>
        </FadeIn>
      </section>

      {/* STATUS */}
      <section className="text-center text-sm text-gray-400 py-8">
        API Status: {status}
      </section>

    </main>
  );
}