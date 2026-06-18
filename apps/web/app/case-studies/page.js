"use client";

import Link from "next/link";

import {
  ArrowRight,
  Activity,
  Server,
  Workflow,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import Container from "../../components/Container";
import Section from "../../components/Section";
import FadeIn from "../../components/FadeIn";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Reducing Operational Blind Spots Through Unified Monitoring",
      category: "Monitoring & Observability",
      challenge:
        "Operational visibility was fragmented across infrastructure environments, making incident detection and performance analysis difficult.",
      solution:
        "Implemented centralized monitoring and observability systems using modern dashboarding, infrastructure metrics collection, and operational alerting workflows.",
      results: [
        "operational visibility",
        "Faster incident detection",
        "Centralized infrastructure monitoring",
        "Improved operational awareness",
      ],
      technologies: [
        "Grafana",
        "Prometheus",
        "Docker",
        "Linux",
      ],
      image: "/images/case-monitoring.jpg",
    },

    {
      title: "Improving Deployment Reliability Through Automation",
      category: "Systems Automation",
      challenge:
        "Manual deployment workflows created operational inconsistencies and increased deployment risk across environments.",
      solution:
        "Designed automation-driven CI/CD workflows with containerized deployment pipelines, operational validation, and deployment standardization.",
      results: [
        "Reduced manual deployment effort",
        "Consistent release processes",
        "Improved deployment reliability",
        "Faster operational delivery",
      ],
      technologies: [
        "Docker",
        "GitHub Actions",
        "Nginx",
        "Linux",
      ],
      image: "/images/case-automation.jpg",
    },

    {
      title: "Building Scalable Infrastructure Foundations",
      category: "Infrastructure Engineering",
      challenge:
        "Infrastructure environments lacked standardization, scalability planning, and operational consistency.",
      solution:
        "Implemented scalable infrastructure baselines, operational standards, monitoring integration, and containerized operational environments.",
      results: [
        "Infrastructure standardization",
        "Improved scalability readiness",
        "Operational consistency",
        "Enhanced platform reliability",
      ],
      technologies: [
        "Docker",
        "Ubuntu",
        "Cloud Infrastructure",
        "Monitoring Stack",
      ],
      image: "/images/case-infrastructure.jpg",
    },
  ];

  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark py-24 text-white lg:py-32">

        <Container>

          <div className="mx-auto max-w-5xl text-center">

            <FadeIn>

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Case Studies
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Infrastructure Engineering & Operational Delivery
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                Real-world infrastructure modernization, operational automation,
                observability deployment, and scalable infrastructure engineering
                initiatives focused on reliability, visibility, and operational excellence.
              </p>

            </FadeIn>

          </div>

        </Container>

      </section>

      {/* WHAT THESE INITIATIVES DEMONSTRATE */}

      <Section className="bg-white py-20">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                What These Initiatives Demonstrate
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight">
                Infrastructure Capabilities Built For Reliability
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                These case studies represent real-world infrastructure engineering,
                monitoring, observability and automation capabilities delivered by
                AISEL Technologies. While project environments differ, the focus
                remains consistent.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">

                {[
                  "Reliability",
                  "Visibility",
                  "Scalability",
                  "Operational Excellence",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full bg-brand-light px-6 py-3 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </FadeIn>

        </Container>

      </Section>

      {/* METRICS */}
      <Section className="bg-white py-24">

        <Container>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Server,
                title: "Infrastructure",
                value: "Scalable",
              },
              {
                icon: Activity,
                title: "Observability",
                value: "24/7",
              },
              {
                icon: Workflow,
                title: "Automation",
                value: "Operational",
              },
              {
                icon: ShieldCheck,
                title: "Reliability",
                value: "Enterprise",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title}>

                  <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                      <Icon className="h-7 w-7 text-brand-primary" />
                    </div>

                    <div className="mt-8 text-3xl font-semibold">
                      {item.value}
                    </div>

                    <div className="mt-3 text-gray-600">
                      {item.title}
                    </div>

                  </div>

                </FadeIn>
              );
            })}

          </div>

        </Container>

      </Section>

      {/* CASE STUDIES */}
      <Section className="bg-brand-light py-32">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <div className="mb-20">

                <FadeIn>

                  <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-sm">

                    <p className="text-sm uppercase tracking-[0.25em] text-brand-primary text-center">
                      Core Competencies
                    </p>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                      {[
                        "Infrastructure Engineering",
                        "Monitoring & Observability",
                        "Systems Automation",
                        "Cloud Operations",
                        "Operational Excellence",
                        "Managed Infrastructure Services",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4"
                        >

                          <ShieldCheck className="h-5 w-5 text-brand-primary" />

                          <span>{item}</span>

                        </div>
                      ))}

                    </div>

                  </div>

                </FadeIn>

              </div>

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Featured Initiatives
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Infrastructure & Operational Transformation
              </h2>

            </div>

          </FadeIn>

          <div className="mt-24 space-y-32">

            {caseStudies.map((study, index) => (
              <FadeIn key={study.title}>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                  {/* IMAGE */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>

                    <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl lg:h-[520px]">

                      <img
                        src={study.image}
                        alt={study.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-8 left-8 right-8">

                        <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                          {study.category}
                        </div>

                        <h3 className="mt-5 text-3xl font-semibold text-white">
                          {study.title}
                        </h3>

                      </div>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>

                    <div>

                      <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                        Challenge
                      </p>

                      <p className="mt-5 text-lg leading-8 text-gray-600">
                        {study.challenge}
                      </p>

                    </div>

                    <div className="mt-12">

                      <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                        Solution
                      </p>

                      <p className="mt-5 text-lg leading-8 text-gray-600">
                        {study.solution}
                      </p>

                    </div>

                    <div className="mt-12">

                      <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                        Results
                      </p>

                      <div className="mt-6 grid gap-4">

                        {study.results.map((result) => (
                          <div
                            key={result}
                            className="flex items-start gap-4"
                          >

                            <ShieldCheck className="mt-1 h-5 w-5 text-brand-primary" />

                            <p className="text-gray-700">
                              {result}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>

                    <div className="mt-12">

                      <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                        Technology Stack
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">

                        {study.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm"
                          >
                            {tech}
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </FadeIn>
            ))}

          </div>

        </Container>

      </Section>

      {/* DELIVERY METHODOLOGY */}
      <Section className="bg-white py-28">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Delivery Methodology
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                Infrastructure Delivery Focused On Reliability
              </h2>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Assessment",
                description:
                  "Operational analysis and infrastructure evaluation.",
              },
              {
                title: "Architecture",
                description:
                  "Scalable infrastructure planning and system design.",
              },
              {
                title: "Implementation",
                description:
                  "Deployment automation and operational integration.",
              },
              {
                title: "Optimization",
                description:
                  "Monitoring, observability, and operational refinement.",
              },
            ].map((item) => (
              <FadeIn key={item.title}>

                <div className="rounded-3xl bg-brand-light p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <BarChart3 className="h-7 w-7 text-brand-primary" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {item.description}
                  </p>

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
                Build Reliable & Observable Infrastructure
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                Partner with AISEL Technologies to modernize infrastructure,
                improve operational visibility, and implement scalable
                infrastructure systems.
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
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-gray-200 px-8 py-4 text-gray-700 transition-all duration-300 hover:bg-gray-50"
                >
                  Explore Services
                </Link>

              </div>

            </div>

          </FadeIn>

        </Container>

      </Section>

    </main>
  );
}
