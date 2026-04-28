"use client";

import { Cloud, Cpu, Workflow, Layers, Settings } from "lucide-react";
import FadeIn from "../../components/FadeIn";

export default function Services() {
  const services = [
    {
      title: "Cloud Infrastructure",
      desc: "Design and deploy secure, scalable cloud environments tailored to enterprise needs.",
      icon: Cloud,
      image: "/images/cloud.jpg",
    },
    {
      title: "AI Automation",
      desc: "Build intelligent systems that automate workflows and enhance decision-making.",
      icon: Cpu,
      image: "/images/ai.jpg",
    },
    {
      title: "DevOps Engineering",
      desc: "Accelerate delivery with robust CI/CD pipelines and infrastructure automation.",
      icon: Workflow,
      image: "/images/devops.jpg",
    },
    {
      title: "Platform Engineering",
      desc: "Create internal developer platforms that scale engineering productivity.",
      icon: Layers,
      image: "/images/operations.jpg",
    },
    {
      title: "Managed IT Services",
      desc: "End-to-end infrastructure monitoring, maintenance, and support.",
      icon: Settings,
      image: "/images/operations.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-brand-dark text-white py-32 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl font-semibold mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            We deliver scalable, intelligent technology solutions that drive business performance.
          </p>
        </FadeIn>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-500 shadow-sm hover:shadow-xl transition duration-500 transform hover:-translate-y-2">

                  {/* IMAGE */}
                  <div className="h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="mt-4 text-blue-600 text-sm opacity-0 group-hover:opacity-100 transition">
                      Learn more →
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}

        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-brand-light py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <FadeIn>
            <h2 className="text-4xl font-semibold mb-6">
              Delivering Measurable Results
            </h2>

            <p className="text-gray-600">
              Our solutions are designed to optimize operations, reduce costs,
              and enable scalable growth across your organization.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white py-20 text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-4">
            Let’s Build Your Next Solution
          </h2>

          <p className="text-gray-300 mb-6">
            Partner with us to design and implement systems that scale.
          </p>

          <button className="bg-brand-primary px-6 py-3 rounded-md">
            Contact Us
          </button>
        </FadeIn>
      </section>

    </main>
  );
}