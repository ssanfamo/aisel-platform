"use client";

import { Cloud, Cpu, Workflow, Layers, Settings } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Cloud Infrastructure", icon: Cloud },
    { title: "AI Automation", icon: Cpu },
    { title: "DevOps Engineering", icon: Workflow },
    { title: "Platform Engineering", icon: Layers },
    { title: "Managed IT Services", icon: Settings },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12">Services</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="border p-8 rounded-xl">
              <Icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}