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
    <main className="font-sans text-gray-900">
      
      {/* HERO (DARK) */}
      <section className="bg-[#020617] text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build and Scale Modern Cloud & AI Platforms
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We help organizations design, deploy, and optimize systems that
            drive performance, automation, and growth.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
              Start Your Transformation
            </button>
            <button className="border border-gray-500 hover:border-white px-8 py-4 rounded-lg text-lg transition">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          Trusted by organizations building modern digital platforms
        </div>
      </section>

      {/* SERVICES (LIGHT) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Cloud Infrastructure",
                desc: "Scalable cloud environments designed for performance, security, and cost efficiency.",
              },
              {
                title: "AI Automation",
                desc: "Intelligent automation systems that streamline operations and enhance decision-making.",
              },
              {
                title: "DevOps Engineering",
                desc: "CI/CD pipelines that accelerate delivery and improve reliability.",
              },
              {
                title: "Platform Engineering",
                desc: "Internal platforms that standardize development and scale engineering teams.",
              },
              {
                title: "Managed IT Services",
                desc: "End-to-end management of infrastructure, systems, and operations.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="border rounded-xl p-8 hover:shadow-lg transition bg-white"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Driving Measurable Business Outcomes
          </h2>

          <p className="text-lg text-gray-600">
            We combine cloud engineering, AI systems, and platform expertise to
            help organizations scale faster, reduce operational complexity, and
            unlock real business value.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border">
              Scalable Architecture
            </div>
            <div className="bg-white p-6 rounded-xl border">
              Intelligent Automation
            </div>
            <div className="bg-white p-6 rounded-xl border">
              Operational Efficiency
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { title: "Discover", desc: "Understand your systems and goals." },
              { title: "Design", desc: "Architect scalable solutions." },
              { title: "Build", desc: "Implement with modern practices." },
              { title: "Optimize", desc: "Continuously improve performance." },
            ].map((step, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (DARK AGAIN) */}
      <section className="bg-[#020617] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Building Your Next-Generation Platform
        </h2>

        <p className="text-gray-400 mb-8">
          Partner with AISEL to design and deploy scalable, intelligent systems.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-6 text-center text-gray-500 text-sm border-t">
        API Status: {status}
      </footer>
    </main>
  );
}