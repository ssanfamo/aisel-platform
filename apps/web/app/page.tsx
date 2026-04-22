"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Offline"));
  }, []);

  return (
    <main className="bg-[#020617] text-white">
      {/* HERO */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-b from-[#020617] via-[#020617] to-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Scalable Cloud, AI & Data Platforms
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We design and deploy enterprise-grade systems that help organizations
            scale faster, automate intelligently, and operate with clarity.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition">
              Start Your Transformation
            </button>
            <button className="border border-gray-600 hover:border-white px-8 py-4 rounded-2xl text-lg transition">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Cloud Infrastructure",
              desc: "Scalable, secure cloud environments designed for performance and reliability.",
            },
            {
              title: "AI Automation",
              desc: "Intelligent automation systems that streamline operations and improve decisions.",
            },
            {
              title: "DevOps Engineering",
              desc: "CI/CD pipelines and workflows that accelerate delivery and reduce risk.",
            },
            {
              title: "Platform Engineering",
              desc: "Internal platforms that standardize development and improve efficiency.",
            },
            {
              title: "Managed IT Services",
              desc: "End-to-end infrastructure management for stability and scalability.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY AISEL */}
      <section className="py-24 px-6 bg-[#020617] text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Why AISEL
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          We combine cloud engineering, AI systems, and platform expertise to
          help organizations scale faster, reduce operational complexity, and
          unlock measurable business value.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-lg">
          <span className="bg-[#0f172a] px-6 py-3 rounded-xl border border-gray-800">
            Scalable Architecture
          </span>
          <span className="bg-[#0f172a] px-6 py-3 rounded-xl border border-gray-800">
            Intelligent Automation
          </span>
          <span className="bg-[#0f172a] px-6 py-3 rounded-xl border border-gray-800">
            Operational Excellence
          </span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            { title: "Discover", desc: "Understand your systems and needs." },
            { title: "Design", desc: "Architect scalable solutions." },
            { title: "Build", desc: "Implement with modern practices." },
            { title: "Optimize", desc: "Continuously improve performance." },
          ].map((step, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
        <h2 className="text-4xl font-bold mb-4">
          Build Your Next-Generation Platform
        </h2>
        <p className="text-lg mb-8">
          Partner with AISEL to design and deploy scalable, intelligent systems.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        API Status: {status}
      </footer>
    </main>
  );
}