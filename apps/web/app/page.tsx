"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("API offline"));
  }, []);

  return (
    <main className="bg-[#0a0f1c] text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a]">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Build and Scale Your Cloud, AI & Data Platforms
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          We design, deploy, and optimize enterprise-grade systems that enable
          organizations to scale faster, automate intelligently, and operate
          with clarity.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg">
            Start Your Transformation
          </button>
          <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-xl text-lg">
            View Services
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cloud Infrastructure",
              desc: "Design and deploy scalable cloud environments built for performance, security, and cost efficiency.",
            },
            {
              title: "AI Automation",
              desc: "Implement intelligent automation systems that streamline operations and enhance decision-making.",
            },
            {
              title: "DevOps Engineering",
              desc: "Build CI/CD pipelines and automation workflows to accelerate delivery and improve reliability.",
            },
            {
              title: "Platform Engineering",
              desc: "Create internal developer platforms that standardize and scale engineering operations.",
            },
            {
              title: "Managed IT Services",
              desc: "End-to-end management of infrastructure, systems, and operational environments.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#111827] p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY AISEL */}
      <section className="py-20 px-6 bg-[#0f172a] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why AISEL
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          We combine cloud engineering, AI systems, and platform expertise to
          help organizations scale faster, reduce operational complexity, and
          unlock measurable business value.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-lg">
          <span>✔ Scalable Architecture</span>
          <span>✔ Intelligent Automation</span>
          <span>✔ Operational Excellence</span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              title: "Discover",
              desc: "Analyze current systems and business needs.",
            },
            {
              title: "Design",
              desc: "Architect scalable and efficient solutions.",
            },
            {
              title: "Build",
              desc: "Implement using modern cloud and DevOps practices.",
            },
            {
              title: "Optimize",
              desc: "Continuously improve performance and cost efficiency.",
            },
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
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Design and Deploy Your Next-Generation Platform
        </h2>
        <p className="text-lg mb-6">
          Partner with AISEL to build scalable, intelligent systems that drive
          growth.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </section>

      {/* FOOTER / STATUS */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        API Status: {status}
      </footer>
    </main>
  );
}