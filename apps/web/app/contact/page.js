"use client";

import Container from "../../components/Container";
import Section from "../../components/Section";
import FadeIn from "../../components/FadeIn";

import {
  ShieldCheck,
  Activity,
  Workflow,
  Server,
  ArrowRight,
  Eye,
  Cpu,
  Layers3,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark py-40 text-white">

        <Container className="relative z-10">

          <FadeIn>

            <div className="max-w-5xl">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                About AISEL Technologies
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Infrastructure Engineering Built Around Reliability &
                Operational Discipline
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                AISEL Technologies helps organizations build stable,
                observable, and scalable infrastructure systems through
                operational engineering, automation, and structured
                infrastructure management.
              </p>

            </div>

          </FadeIn>

        </Container>
      </section>

      {/* COMPANY OVERVIEW */}
      <Section className="py-28">
        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <FadeIn>

              <div>

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Infrastructure Systems Designed for Operational Growth
                </h2>

                <p className="mt-8 text-lg leading-8 text-gray-600">
                  Modern organizations depend on infrastructure environments
                  that remain reliable, scalable, observable, and operationally
                  efficient as systems and workloads evolve.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  AISEL Technologies focuses on infrastructure engineering,
                  operational visibility, automation, and managed operational
                  support designed to improve infrastructure reliability and
                  reduce operational complexity.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-700">
                      Infrastructure reliability & scalability
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-700">
                      Monitoring & operational visibility
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-700">
                      Automation-driven operational workflows
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-700">
                      Long-term infrastructure operational support
                    </p>
                  </div>

                </div>

              </div>

            </FadeIn>

            <div className="rounded-3xl bg-brand-light p-10">

              <div className="grid gap-8 sm:grid-cols-2">

                <div className="rounded-2xl bg-white p-6 shadow-sm">

                  <Server className="mb-4 h-8 w-8 text-brand-primary" />

                  <h3 className="text-lg font-semibold">
                    Infrastructure
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Scalable cloud, hybrid, and operational infrastructure
                    systems.
                  </p>

                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">

                  <Activity className="mb-4 h-8 w-8 text-brand-primary" />

                  <h3 className="text-lg font-semibold">
                    Observability
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Operational visibility through monitoring, metrics, and
                    alerting systems.
                  </p>

                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">

                  <Workflow className="mb-4 h-8 w-8 text-brand-primary" />

                  <h3 className="text-lg font-semibold">
                    Automation
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Automated workflows and deployment operations designed for
                    consistency and efficiency.
                  </p>

                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">

                  <ShieldCheck className="mb-4 h-8 w-8 text-brand-primary" />

                  <h3 className="text-lg font-semibold">
                    Reliability
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Operational environments built around stability and
                    long-term reliability.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </Section>

      {/* OPERATIONAL PHILOSOPHY */}
      <Section className="bg-brand-light py-28">
        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Operational Philosophy
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                AISEL Technologies approaches infrastructure operations with a
                systems-driven mindset focused on reliability, operational
                visibility, automation, and scalable infrastructure management.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <ShieldCheck className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Reliability
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Stable infrastructure environments improve operational
                continuity and long-term business performance.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <Eye className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Visibility
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Operational visibility reduces downtime and enables better
                infrastructure decision-making.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <Cpu className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Automation
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Manual operational processes do not scale efficiently in modern
                infrastructure environments.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <Layers3 className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Structure
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Structured operational systems improve consistency, efficiency,
                and infrastructure delivery quality.
              </p>

            </div>

          </div>

        </Container>
      </Section>

      {/* CORE PRINCIPLES */}
      <Section className="py-28">
        <Container>

          <FadeIn>

            <div className="mx-auto max-w-3xl text-center">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Core Principles
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Our operational approach is built around engineering discipline,
                operational visibility, automation, and scalable infrastructure
                systems.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-brand-light p-10">

              <h3 className="text-2xl font-semibold">
                Reliability First
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Infrastructure environments should remain stable and predictable
                as operational complexity and business workloads increase.
              </p>

            </div>

            <div className="rounded-3xl bg-brand-light p-10">

              <h3 className="text-2xl font-semibold">
                Operational Visibility
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Real-time operational insight improves incident response,
                performance analysis, and infrastructure decision-making.
              </p>

            </div>

            <div className="rounded-3xl bg-brand-light p-10">

              <h3 className="text-2xl font-semibold">
                Automation-Driven Operations
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Automation reduces repetitive operational tasks and improves
                deployment consistency across infrastructure environments.
              </p>

            </div>

            <div className="rounded-3xl bg-brand-light p-10">

              <h3 className="text-2xl font-semibold">
                Scalable Architecture
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Infrastructure systems should support operational growth without
                increasing unnecessary complexity or instability.
              </p>

            </div>

          </div>

        </Container>
      </Section>

      {/* WHY AISEL */}
      <Section className="bg-brand-dark py-28 text-white">
        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <FadeIn>

              <div>

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Why Organizations Choose AISEL
                </h2>

                <p className="mt-8 text-lg leading-8 text-gray-300">
                  AISEL Technologies combines infrastructure engineering,
                  operational visibility, automation, and structured operational
                  management into a unified infrastructure operations approach.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-300">
                      Infrastructure-focused operational expertise
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-300">
                      Automation-oriented operational systems
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-300">
                      Long-term infrastructure operational support
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />

                    <p className="text-gray-300">
                      Structured infrastructure delivery workflows
                    </p>
                  </div>

                </div>

              </div>

            </FadeIn>

            <div className="rounded-3xl bg-white/5 p-10 backdrop-blur-sm">

              <h3 className="text-2xl font-semibold">
                Operational Approach
              </h3>

              <div className="mt-10 space-y-6">

                {[
                  "Assess",
                  "Architect",
                  "Deploy",
                  "Monitor",
                  "Optimize",
                  "Support",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 p-5"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary font-semibold text-white">
                      {index + 1}
                    </div>

                    <h4 className="text-lg font-semibold">
                      {step}
                    </h4>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-32 text-center">
        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Build Reliable Operational Infrastructure
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                Schedule an infrastructure assessment to identify operational
                risks, infrastructure limitations, automation opportunities, and
                observability gaps across your operational environment.
              </p>

              <div className="mt-12">

                <a
                  href="/contact"
                  className="inline-block rounded-md bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Infrastructure Assessment
                </a>

              </div>

            </div>

          </FadeIn>

        </Container>
      </Section>

    </main>
  );
}