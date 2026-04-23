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
    <main className="bg-white text-gray-900">

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">
            AISEL Technologies
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="#">Services</a>
            <a href="#">Case Studies</a>
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

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm uppercase tracking-wider text-blue-400">
              Enterprise Cloud & AI Consulting
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
              Transforming Technology Into Business Advantage
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              We partner with organizations to design, build, and scale
              cloud, AI, and platform solutions that deliver measurable impact.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg">
                Start a Project
              </button>
              <button className="border border-gray-500 px-6 py-3 rounded-md">
                View Services
              </button>
            </div>
          </div>

          <div className="h-[420px] rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent border border-white/10 backdrop-blur-sm" />
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="bg-white py-16 px-6 border-b">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          Trusted by forward-thinking organizations
          <div className="mt-8 flex justify-center gap-10 opacity-60 text-gray-400">
            <span>Enterprise Co.</span>
            <span>Global Tech</span>
            <span>FinTech Group</span>
            <span>Data Systems</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
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
                  className="border border-gray-200 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition bg-white"
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Proven Results
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Cloud Transformation",
                desc: "Reduced infrastructure cost by 35% while improving scalability.",
              },
              {
                title: "AI Automation",
                desc: "Automated core workflows, increasing efficiency by 50%.",
              },
              {
                title: "Platform Engineering",
                desc: "Enabled rapid deployment across multiple engineering teams.",
              },
            ].map((caseItem, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-gray-500">{caseItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Ready to Transform Your Technology?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build scalable systems that drive real business outcomes.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md shadow-lg">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-gray-500">

          <div>
            <div className="font-semibold text-gray-900 mb-2">
              AISEL Technologies
            </div>
            Enterprise cloud, AI, and platform engineering solutions.
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-2">Services</div>
            <p>Cloud</p>
            <p>AI</p>
            <p>DevOps</p>
          </div>

          <div>
            <div className="font-semibold text-gray-900 mb-2">Company</div>
            <p>About</p>
            <p>Careers</p>
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