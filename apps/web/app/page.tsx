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
      desc: "Scalable cloud environments built for performance and reliability.",
      icon: Cloud,
    },
    {
      title: "AI Automation",
      desc: "Intelligent systems that automate workflows and decision-making.",
      icon: Cpu,
    },
    {
      title: "DevOps Engineering",
      desc: "CI/CD pipelines that accelerate delivery and reduce risk.",
      icon: Workflow,
    },
    {
      title: "Platform Engineering",
      desc: "Internal platforms that scale development teams.",
      icon: Layers,
    },
    {
      title: "Managed IT Services",
      desc: "End-to-end infrastructure and system management.",
      icon: Settings,
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">
            AISEL Technologies
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-slate-950 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-transparent blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm uppercase tracking-wider text-blue-400">
              AISEL Technologies
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
              Engineering Scalable Cloud & AI Platforms
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              We help organizations design, build, and optimize systems that
              drive performance, automation, and measurable growth.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg">
                Start a Project
              </button>
              <button className="border border-gray-500 px-6 py-3 rounded-md">
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent border border-white/10 backdrop-blur-sm" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16">Core Services</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="border border-gray-200 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition bg-white text-left"
                >
                  <Icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Cloud migration for enterprise systems",
              "AI automation for business operations",
              "Platform engineering for scale",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Start Your Transformation
        </h2>

        <p className="text-gray-400 mb-8">
          Build scalable, intelligent systems with AISEL Technologies.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md shadow-lg">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-10 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm text-gray-500">
          <div>
            <div className="font-semibold text-gray-900 mb-2">
              AISEL Technologies
            </div>
            Building scalable cloud and AI platforms.
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-2">Company</div>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-2">Status</div>
            API: {status}
          </div>
        </div>
      </footer>

    </main>
  );
}