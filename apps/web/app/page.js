"use client";

import Container from "../components/Container";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";

import {
  Server,
  Activity,
  Workflow,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden py-44 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="AISEL Technologies Infrastructure"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-brand-dark/85" />
        </div>

        <Container className="relative z-10 text-center">
          <FadeIn>

            <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
              AISEL Technologies
            </p>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Build Stable, Scalable Infrastructure for Modern Operations.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
              We help growing businesses engineer reliable infrastructure,
              implement operational visibility, and automate critical systems
              for scale, uptime, and operational efficiency.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-md bg-brand-primary px-8 py-4 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg"
              >
                Schedule Infrastructure Assessment
              </a>

              <a
                href="/services"
                className="rounded-md border border-white/20 px-8 py-4 transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </a>

            </div>

          </FadeIn>
        </Container>
      </section>

      {/* CORE SERVICES */}
      <Section className="py-28">
        <Container>

          <FadeIn>
            <div className="max-w-3xl">

              <h2 className="mb-6 text-5xl font-semibold tracking-tight">
                Infrastructure & Operational Engineering
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                AISEL Technologies helps organizations build reliable,
                observable, and automated operational environments that support
                long-term business growth and infrastructure scalability.
              </p>

            </div>
          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Infrastructure Engineering */}
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <Server className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Infrastructure Engineering
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Design and deployment of scalable cloud, hybrid, and on-prem
                infrastructure environments built for reliability, performance,
                and operational growth.
              </p>

            </div>

            {/* Monitoring */}
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <Activity className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Monitoring & Observability
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Real-time visibility into infrastructure health, uptime, logs,
                metrics, and system performance through modern monitoring and
                observability solutions.
              </p>

            </div>

            {/* Automation */}
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <Workflow className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Systems Automation
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Automation of deployments, workflows, and operational processes
                to reduce manual overhead, improve consistency, and accelerate
                infrastructure operations.
              </p>

            </div>

            {/* Managed Services */}
            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <ShieldCheck className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Managed Infrastructure Services
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Ongoing monitoring, optimization, maintenance, and operational
                support for mission-critical infrastructure environments.
              </p>

            </div>

          </div>
        </Container>
      </Section>

      {/* OPERATIONAL CHALLENGES */}
      <Section className="bg-brand-light py-28">
        <Container>

          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">

              <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Infrastructure Problems Slow Business Growth
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                Downtime, poor visibility, manual operations, and unstable
                systems create operational bottlenecks that impact performance,
                scalability, and customer experience.
              </p>

            </div>
          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <h3 className="mb-3 text-lg font-semibold">
                Unplanned Downtime
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Infrastructure instability impacts availability and business
                continuity.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <h3 className="mb-3 text-lg font-semibold">
                Limited Visibility
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Teams lack real-time insight into infrastructure performance,
                failures, and operational risks.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <h3 className="mb-3 text-lg font-semibold">
                Manual Operations
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Repetitive operational tasks reduce efficiency and increase
                deployment risk.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <h3 className="mb-3 text-lg font-semibold">
                Scaling Complexity
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Infrastructure environments become increasingly difficult to
                manage as organizations grow.
              </p>

            </div>

          </div>
        </Container>
      </Section>

      {/* HOW WE WORK */}
      <Section className="py-28">
        <Container>

          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">

              <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Structured Infrastructure Delivery
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                Our infrastructure engagement process is designed to improve
                operational reliability, visibility, and scalability from
                assessment to ongoing optimization.
              </p>

            </div>
          </FadeIn>

          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary font-semibold text-white shadow-sm">
                1
              </div>

              <h4 className="mb-3 text-lg font-semibold">
                Infrastructure Assessment
              </h4>

              <p className="text-sm leading-7 text-gray-600">
                We assess your infrastructure, operational risks, and scaling
                requirements.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary font-semibold text-white shadow-sm">
                2
              </div>

              <h4 className="mb-3 text-lg font-semibold">
                Architecture & Planning
              </h4>

              <p className="text-sm leading-7 text-gray-600">
                We design scalable infrastructure and operational workflows
                aligned with business goals.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary font-semibold text-white shadow-sm">
                3
              </div>

              <h4 className="mb-3 text-lg font-semibold">
                Deployment & Automation
              </h4>

              <p className="text-sm leading-7 text-gray-600">
                We implement infrastructure, monitoring systems, and automation
                workflows.
              </p>

            </div>

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary font-semibold text-white shadow-sm">
                4
              </div>

              <h4 className="mb-3 text-lg font-semibold">
                Monitoring & Optimization
              </h4>

              <p className="text-sm leading-7 text-gray-600">
                Continuous monitoring and operational optimization ensure
                long-term infrastructure reliability.
              </p>

            </div>

          </div>
        </Container>
      </Section>

      {/* TRUST SIGNALS */}
      <Section className="bg-brand-dark py-24 text-white">
        <Container>

          <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">

            <div>
              <h3 className="text-4xl font-semibold">24/7</h3>

              <p className="mt-3 text-gray-300">
                Infrastructure Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold">99.9%</h3>

              <p className="mt-3 text-gray-300">
                Reliability-Focused Operations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold">Automation</h3>

              <p className="mt-3 text-gray-300">
                Reduced Manual Operations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold">Scalable</h3>

              <p className="mt-3 text-gray-300">
                Infrastructure Architecture
              </p>
            </div>

          </div>

        </Container>
      </Section>

      {/* TECHNOLOGY STACK */}
      <Section className="bg-brand-light py-28">
        <Container>

          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">

              <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Modern Infrastructure & Operations Technologies
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                We work with modern infrastructure, observability, and
                automation technologies to build reliable operational
                environments.
              </p>

            </div>
          </FadeIn>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            {[
              "Docker",
              "Linux",
              "Grafana",
              "Prometheus",
              "CI/CD Pipelines",
              "Cloud Infrastructure",
              "Infrastructure Automation",
              "Monitoring Systems",
              "Operational Visibility",
              "Server Infrastructure",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white px-6 py-3 text-sm shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark py-32 text-center text-white">
        <Container>

          <FadeIn>
            <div className="mx-auto max-w-4xl">

              <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Build Reliable Infrastructure That Scales With Your Business
              </h2>

              <p className="mb-10 text-lg leading-8 text-gray-300">
                We help organizations improve infrastructure reliability,
                operational visibility, automation, and scalability through
                structured engineering and managed operational support.
              </p>

              <a
                href="/contact"
                className="inline-block rounded-md bg-brand-primary px-8 py-4 transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg"
              >
                Schedule Infrastructure Assessment
              </a>

            </div>
          </FadeIn>

        </Container>
      </Section>

    </main>
  );
}