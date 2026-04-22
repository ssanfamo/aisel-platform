"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  Workflow,
  Layers,
  Settings,
} from "lucide-react";

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
      desc: "Internal platforms that scale development teams efficiently.",
      icon: Layers,
    },
    {
      title: "Managed IT Services",
      desc: "End-to-end infrastructure and system management.",
      icon: Settings,
    },
  ];

  return (
    <main className="font-sans text-gray-900">

      {/* HERO */}
      <section className="bg-[#020617] text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Build and Scale Modern Cloud & AI Platforms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We design, deploy, and optimize systems that drive performance,
            automation, and business growth.
          </motion.p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition">
              Start Your Transformation
            </button>
            <button className="border border-gray-500 hover:border-white px-8 py-4 rounded-lg text-lg transition">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-10 border-b text-center text-gray-500">
        Trusted by organizations building modern digital platforms
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="border rounded-xl p-8 hover:shadow-xl transition bg-white"
                >
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Driving Real Business Outcomes
          </h2>

          <p className="text-lg text-gray-600">
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
          <h2 className="text-4xl font-bold mb-16">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { title: "Discover", desc: "Understand systems and needs." },
              { title: "Design", desc: "Architect scalable solutions." },
              { title: "Build", desc: "Implement efficiently." },
              { title: "Optimize", desc: "Continuously improve." },
            ].map((step, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }}>
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020617] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Transformation
        </h2>

        <p className="text-gray-400 mb-8">
          Build scalable, intelligent systems with AISEL Technologies.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition">
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