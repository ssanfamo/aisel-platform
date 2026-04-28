"use client";

import { useEffect, useState } from "react";
import { Cloud, Cpu, Workflow, Layers, Settings } from "lucide-react";
import FadeIn from "../components/FadeIn";
import Container from "../components/Container";
import Section from "../components/Section";

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
      desc: "Secure, scalable environments engineered for reliability.",
      icon: Cloud,
      image: "/images/cloud.jpg",
    },
    {
      title: "AI Automation",
      desc: "Intelligent systems that streamline operations.",
      icon: Cpu,
      image: "/images/ai.jpg",
    },
    {
      title: "DevOps Engineering",
      desc: "CI/CD pipelines that accelerate delivery.",
      icon: Workflow,
      image: "/images/devops.jpg",
    },
    {
      title: "Platform Engineering",
      desc: "Platforms that scale developer productivity.",
      icon: Layers,
      image: "/images/operations.jpg",
    },
    {
      title: "Managed IT Services",
      desc: "Monitoring, support, and infrastructure management.",
      icon: Settings,
      image: "/images/operations.jpg",
    },
  ];

  return (
    <main>

      {/* HERO */}
      <section className="relative text-white py-44">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/85" />
        </div>

        <Container className="relative text-center">
          <FadeIn>
            <p className="text-sm text-brand-primary uppercase tracking-widest">
              AISEL Technologies
            </p>

            <h1 className="mt-6 text-6xl md:text-7xl font-semibold tracking-tight">
              Engineering Scalable Systems for Modern Businesses
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
              We design cloud, AI, and platform solutions that deliver measurable results.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <a
                href="/contact"
                className="bg-brand-primary px-6 py-3 rounded-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Get a Free Consultation
              </a>

              <a
                href="/case-studies"
                className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition"
              >
                View Case Studies
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SERVICES */}
      <Section>
        <Container>
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
                        className="w-full h-full object-cover transition group-hover:scale-105"
                      />
                    </div>

                    <Icon className="w-7 h-7 text-brand-primary mb-3" />

                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {service.desc}
                    </p>

                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* INLINE CTA */}
      <Section className="bg-brand-light text-center">
        <Container>
          <FadeIn>
            <h3 className="text-2xl font-semibold mb-4">
              Need help choosing the right solution?
            </h3>

            <p className="text-brand-muted mb-6">
              We’ll assess your needs and recommend the best approach.
            </p>

            <a
              href="/contact"
              className="bg-brand-primary text-white px-6 py-3 rounded-md hover:shadow-lg"
            >
              Talk to an Expert
            </a>
          </FadeIn>
        </Container>
      </Section>

      {/* METRICS */}
      <Section className="bg-brand-light">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-4xl font-semibold mb-4">
              Proven Results Across Projects
            </h2>

            <p className="text-brand-muted mb-12">
              Our solutions deliver measurable improvements in performance, reliability, and efficiency.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            <FadeIn>
              <div>
                <p className="text-4xl font-semibold text-brand-primary">70%</p>
                <p className="text-gray-600 mt-2 text-sm">Downtime Reduction</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <p className="text-4xl font-semibold text-brand-primary">3x</p>
                <p className="text-gray-600 mt-2 text-sm">Faster Deployments</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <p className="text-4xl font-semibold text-brand-primary">50%</p>
                <p className="text-gray-600 mt-2 text-sm">Efficiency Increase</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark text-white text-center">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-semibold mb-4">
              Let’s Talk About Your Project
            </h2>

            <p className="text-gray-300 mb-2">
              No commitment. No pressure.
            </p>

            <p className="text-gray-400 mb-8 text-sm">
              Just a quick conversation to explore how we can help.
            </p>

            <a
              href="/contact"
              className="bg-brand-primary px-6 py-3 rounded-md hover:shadow-lg"
            >
              Schedule a Free Call
            </a>
          </FadeIn>
        </Container>
      </Section>

      {/* STATUS */}
      <div className="text-center text-sm text-gray-400 py-8">
        API Status: {status}
      </div>

    </main>
  );
}