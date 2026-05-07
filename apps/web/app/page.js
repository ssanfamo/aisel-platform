"use client";

import Link from "next/link";

import Container from "../components/Container";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";

import {
  ArrowRight,
  CheckCircle2,
  Activity,
  Server,
  Workflow,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark py-40 text-white">

        <Container>

          <FadeIn>

            <div className="max-w-5xl">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Infrastructure Engineering & Operational Systems
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Scalable Infrastructure Engineering & Operational Excellence
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                AISEL Technologies delivers infrastructure engineering,
                monitoring & observability, systems automation, and managed
                infrastructure services focused on reliability, scalability,
                operational visibility, and automation.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Infrastructure Assessment

                  <ArrowRight className="h-5 w-5" />

                </Link>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-white/10 bg-white/5 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10"
                >
                  View Case Studies
                </Link>

              </div>

            </div>

          </FadeIn>

        </Container>

      </section>

      {/* CORE SERVICES */}
      <Section className="bg-white py-32">

        <Container>

          {/* SECTION INTRO */}
          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Core Services
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Infrastructure Engineering & Operational Systems
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                AISEL Technologies delivers infrastructure engineering,
                monitoring, observability, systems automation, and managed
                operational services designed for reliability, scalability,
                visibility, and operational efficiency.
              </p>

            </div>

          </FadeIn>

          <div className="mt-24 space-y-32">

            {/* SERVICE 1 */}
            <FadeIn>

              <div className="grid items-center gap-16 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">

                  <img
                    src="/images/infrastructure-engineering.jpg"
                    alt="Infrastructure Engineering"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />

                </div>

                {/* CONTENT */}
                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                    Infrastructure Engineering
                  </p>

                  <h3 className="mt-6 text-4xl font-semibold tracking-tight">
                    Scalable Operational Infrastructure
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-gray-600">
                    Design and implementation of scalable infrastructure
                    environments focused on operational reliability,
                    deployment consistency, and long-term scalability.
                  </p>

                  <div className="mt-10 grid gap-4">

                    {[
                      "Cloud & Hybrid Infrastructure",
                      "Containerized Environments",
                      "Infrastructure Architecture",
                      "Operational Standardization",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />

                        <p className="text-gray-700">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </FadeIn>

            {/* SERVICE 2 */}
            <FadeIn>

              <div className="grid items-center gap-16 lg:grid-cols-2">

                {/* CONTENT */}
                <div className="order-2 lg:order-1">

                  <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                    Monitoring & Observability
                  </p>

                  <h3 className="mt-6 text-4xl font-semibold tracking-tight">
                    Operational Visibility & Monitoring
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-gray-600">
                    Centralized monitoring and observability solutions
                    designed to improve infrastructure visibility,
                    operational awareness, and proactive incident response.
                  </p>

                  <div className="mt-10 grid gap-4">

                    {[
                      "Infrastructure Monitoring",
                      "Operational Dashboards",
                      "Metrics & Alerting",
                      "Performance Visibility",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />

                        <p className="text-gray-700">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

                {/* IMAGE */}
                <div className="order-1 overflow-hidden rounded-3xl shadow-2xl lg:order-2">

                  <img
                    src="/images/monitoring-observability.jpg"
                    alt="Monitoring & Observability"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </FadeIn>

            {/* SERVICE 3 */}
            <FadeIn>

              <div className="grid items-center gap-16 lg:grid-cols-2">

                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl shadow-2xl">

                  <img
                    src="/images/systems-automation.jpg"
                    alt="Systems Automation"
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                    Systems Automation
                  </p>

                  <h3 className="mt-6 text-4xl font-semibold tracking-tight">
                    Automated Operational Workflows
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-gray-600">
                    Automation-driven infrastructure workflows designed to
                    improve operational efficiency, deployment consistency,
                    and infrastructure reliability.
                  </p>

                  <div className="mt-10 grid gap-4">

                    {[
                      "CI/CD Pipelines",
                      "Deployment Automation",
                      "Infrastructure Scripting",
                      "Operational Workflow Automation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />

                        <p className="text-gray-700">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </FadeIn>

            {/* SERVICE 4 */}
            <FadeIn>

              <div className="grid items-center gap-16 lg:grid-cols-2">

                {/* CONTENT */}
                <div className="order-2 lg:order-1">

                  <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                    Managed Infrastructure Services
                  </p>

                  <h3 className="mt-6 text-4xl font-semibold tracking-tight">
                    Ongoing Operational Infrastructure Support
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-gray-600">
                    Managed operational infrastructure services focused on
                    system reliability, monitoring operations, incident
                    response, and operational optimization.
                  </p>

                  <div className="mt-10 grid gap-4">

                    {[
                      "Infrastructure Operations",
                      "Monitoring Management",
                      "Operational Support",
                      "Reliability Optimization",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />

                        <p className="text-gray-700">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

                {/* IMAGE */}
                <div className="order-1 overflow-hidden rounded-3xl shadow-2xl lg:order-2">

                  <img
                    src="/images/managed-services.jpg"
                    alt="Managed Infrastructure Services"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </FadeIn>

          </div>

        </Container>

      </Section>

      {/* VALUE SECTION */}
      <Section className="bg-brand-light py-28">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Operational Focus
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Infrastructure Built For Reliability & Scale
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Our infrastructure delivery methodology emphasizes
                operational visibility, scalability, automation,
                reliability, and long-term operational sustainability.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Server,
                title: "Scalable Infrastructure",
                description:
                  "Infrastructure environments designed for growth and operational scalability.",
              },

              {
                icon: Activity,
                title: "Operational Visibility",
                description:
                  "Monitoring and observability systems that improve operational awareness.",
              },

              {
                icon: Workflow,
                title: "Automation",
                description:
                  "Workflow automation focused on operational efficiency and consistency.",
              },

              {
                icon: ShieldCheck,
                title: "Reliability",
                description:
                  "Operational systems designed for stability, resilience, and reliability.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title}>

                  <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                      <Icon className="h-7 w-7 text-brand-primary" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </FadeIn>
              );
            })}

          </div>

        </Container>

      </Section>

      {/* FINAL CTA */}
      <Section className="py-32 text-center">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Build Reliable & Observable Infrastructure
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                Partner with AISEL Technologies to improve operational
                visibility, infrastructure reliability, automation,
                and scalable infrastructure delivery.
              </p>

              <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Infrastructure Assessment

                  <ArrowRight className="h-5 w-5" />

                </Link>

                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-gray-200 px-8 py-4 text-gray-700 transition-all duration-300 hover:bg-gray-50"
                >
                  Explore Case Studies
                </Link>

              </div>

            </div>

          </FadeIn>

        </Container>

      </Section>

    </main>
  );
}
