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
    <main className="bg-white text-gray-900">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="text-xl font-semibold tracking-tight">
            AISEL Technologies
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-black">Services</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-slate-950 text-white py-32 px-6 overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-transparent blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-wider text-blue-400">
              AISEL Technologies
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight">
              Engineering Scalable Cloud & AI Platforms
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              We partner with organizations to design, build, and optimize systems
              that drive performance, automation, and measurable growth.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium shadow-lg">
                Start a Project
              </button>

              <button className="border border-gray-500 px-6 py-3 rounded-md">
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent border border-white/10 backdrop-blur-sm" />

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-10 border-b text-center text-gray-500">
        Trusted by organizations building modern digital platforms
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">
            Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Cloud Infrastructure",
                desc: "Scalable cloud environments built for performance and reliability.",
              },
              {
                title: "AI Automation",
                desc: "Intelligent systems that automate workflows and decision-making.",
              },
              {
                title: "DevOps Engineering",
                desc: "CI/CD pipelines that accelerate delivery and reduce risk.",
              },
              {
                title: "Platform Engineering",
                desc: "Internal platforms that scale development teams.",
              },
              {
                title: "Managed IT Services",
                desc: "End-to-end infrastructure and system management.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="border border-gray-200 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition bg-white"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Driving Real Business Outcomes
          </h2>

          <p className="text-lg text-gray-500">
            We combine cloud engineering, AI systems, and platform expertise to
            help organizations scale faster, reduce complexity, and unlock value.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {["Scalable Architecture", "Automation", "Efficiency"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border shadow-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-16">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { title: "Discover", desc: "Understand systems and needs." },
              { title: "Design", desc: "Architect scalable solutions." },
              { title: "Build", desc: "Implement efficiently." },
              { title: "Optimize", desc: "Continuously improve." },
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

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Start Your Transformation
        </h2>

        <p className="text-gray-400 mb-8">
          Build scalable, intelligent systems with AISEL Technologies.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium shadow-lg">
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