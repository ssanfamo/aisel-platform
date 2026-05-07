"use client";

import Container from "../../components/Container";
import Section from "../../components/Section";
import FadeIn from "../../components/FadeIn";

import {
  ArrowRight,
  Activity,
  Workflow,
  Server,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Layers3,
} from "lucide-react";

const caseStudies = [
  {
    category: "Monitoring & Observability",
    title: "Infrastructure Monitoring Platform",
    icon: Activity,

    challenge:
      "Operational environments lacked centralized visibility across infrastructure services, system health, and operational metrics.",

    solution:
      "Designed and deployed a centralized monitoring and observability stack for operational infrastructure visibility and alerting.",

    technologies: [
      "Grafana",
      "Prometheus",
      "Docker",
      "Linux",
      "Node Exporter",
    ],

    outcomes: [
      "Improved operational visibility",
      "Centralized monitoring",
      "Real-time alerting",
      "Reduced infrastructure blind spots",
    ],
  },

  {
    category: "Systems Automation",
    title: "Automated Deployment Pipeline",
    icon: Workflow,

    challenge:
      "Manual deployment workflows increased operational overhead, slowed releases, and introduced configuration inconsistencies.",

    solution:
      "Implemented automated CI/CD deployment workflows with containerized deployment processes and operational standardization.",

    technologies: [
      "GitHub Actions",
      "Docker",
      "Linux",
      "Nginx",
      "Git",
    ],

    outcomes: [
      "Reduced deployment overhead",
      "Improved release consistency",
      "Faster operational delivery",
      "Reduced manual intervention",
    ],
  },

  {
    category: "Infrastructure Engineering",
    title: "Containerized Infrastructure Environment",
    icon: Server,

    challenge:
      "Operational environments required improved scalability, deployment consistency, and simplified infrastructure management.",

    solution:
      "Designed a containerized operational infrastructure environment with standardized deployment and operational workflows.",

    technologies: [
      "Docker",
      "Reverse Proxy",
      "Linux",
      "Monitoring Stack",
      "Automation Scripts",
    ],

    outcomes: [
      "Improved scalability",
      "Operational consistency",
      "Simplified infrastructure management",
      "Enhanced deployment portability",
    ],
  },
];

const focusAreas = [
  {
    title: "Infrastructure Reliability",
    description:
      "Designing operational environments focused on stability, scalability, and infrastructure resilience.",
    icon: ShieldCheck,
  },

  {
    title: "Operational Visibility",
    description:
      "Improving visibility across infrastructure systems, monitoring, alerting, and operational metrics.",
    icon: BarChart3,
  },

  {
    title: "Systems Automation",
    description:
      "Reducing operational overhead through workflow automation and deployment standardization.",
    icon: Workflow,
  },

  {
    title: "Scalable Architecture",
    description:
      "Building infrastructure environments designed for operational growth and long-term scalability.",
    icon: Layers3,
  },
];

export default function CaseStudiesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark py-40 text-white">

        <Container>

          <FadeIn>

            <div className="max-w-5xl">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Case Studies
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Infrastructure & Operational Capability
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                AISEL Technologies delivers infrastructure engineering,
                monitoring, observability, and systems automation solutions
                focused on operational reliability, visibility, scalability,
                and operational efficiency.
              </p>

            </div>

          </FadeIn>

        </Container>

      </section>

      {/* INTRO */}
      <Section className="py-28">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Operational Infrastructure Solutions
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Our infrastructure-focused delivery approach emphasizes
                operational reliability, visibility, automation, and scalable
                infrastructure systems designed to support long-term operational
                growth.
              </p>

            </div>

          </FadeIn>

        </Container>

      </Section>

      {/* CASE STUDIES */}
      <Section className="bg-brand-light py-28">

        <Container>

          <div className="grid gap-10">

            {caseStudies.map((study) => {
              const Icon = study.icon;

              return (
                <FadeIn key={study.title}>

                  <div className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

                      {/* LEFT */}
                      <div className="max-w-3xl">

                        <div className="inline-flex items-center rounded-full bg-brand-light px-4 py-2 text-sm font-medium text-brand-primary">
                          {study.category}
                        </div>

                        <div className="mt-6 flex items-center gap-4">

                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                            <Icon className="h-7 w-7 text-brand-primary" />
                          </div>

                          <h2 className="text-3xl font-semibold tracking-tight">
                            {study.title}
                          </h2>

                        </div>

                        <div className="mt-10">

                          <h3 className="text-lg font-semibold">
                            Operational Challenge
                          </h3>

                          <p className="mt-4 leading-8 text-gray-600">
                            {study.challenge}
                          </p>

                        </div>

                        <div className="mt-10">

                          <h3 className="text-lg font-semibold">
                            Solution Architecture
                          </h3>

                          <p className="mt-4 leading-8 text-gray-600">
                            {study.solution}
                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}
                      <div className="w-full max-w-md rounded-3xl bg-brand-light p-8">

                        <div>

                          <h3 className="text-lg font-semibold">
                            Technologies Used
                          </h3>

                          <div className="mt-6 flex flex-wrap gap-3">

                            {study.technologies.map((tech) => (
                              <div
                                key={tech}
                                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                              >
                                {tech}
                              </div>
                            ))}

                          </div>

                        </div>

                        <div className="mt-10">

                          <h3 className="text-lg font-semibold">
                            Operational Outcomes
                          </h3>

                          <div className="mt-6 space-y-4">

                            {study.outcomes.map((outcome) => (
                              <div
                                key={outcome}
                                className="flex items-start gap-4"
                              >

                                <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />

                                <p className="text-gray-700">
                                  {outcome}
                                </p>

                              </div>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </FadeIn>
              );
            })}

          </div>

        </Container>

      </Section>

      {/* FOCUS AREAS */}
      <Section className="py-28">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-3xl text-center">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Infrastructure Focus Areas
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                AISEL Technologies focuses on operational infrastructure
                environments designed for visibility, reliability, scalability,
                and operational efficiency.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <FadeIn key={area.title}>

                  <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                      <Icon className="h-7 w-7 text-brand-primary" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {area.description}
                    </p>

                  </div>

                </FadeIn>
              );
            })}

          </div>

        </Container>

      </Section>

      {/* DELIVERY APPROACH */}
      <Section className="bg-brand-dark py-28 text-white">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Operational Delivery Approach
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                Our infrastructure delivery methodology focuses on operational
                visibility, infrastructure reliability, automation, scalability,
                and long-term operational sustainability.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Infrastructure Assessment",
              "Architecture Design",
              "Operational Implementation",
              "Monitoring & Optimization",
            ].map((step, index) => (
              <FadeIn key={step}>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary font-semibold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-7">
                    {step}
                  </h3>

                </div>

              </FadeIn>
            ))}

          </div>

        </Container>

      </Section>

      {/* FINAL CTA */}
      <Section className="py-32 text-center">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Build Scalable & Observable Infrastructure
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                Partner with AISEL Technologies to improve operational
                visibility, infrastructure reliability, automation, and scalable
                infrastructure delivery.
              </p>

              <div className="mt-12">

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-md bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Infrastructure Assessment

                  <ArrowRight className="h-5 w-5" />

                </a>

              </div>

            </div>

          </FadeIn>

        </Container>

      </Section>

    </main>
  );
}