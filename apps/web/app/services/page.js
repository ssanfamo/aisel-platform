"use client";

import Container from "../../components/Container";
import Section from "../../components/Section";
import FadeIn from "../../components/FadeIn";

import {
  Server,
  Activity,
  Workflow,
  ShieldCheck,
  Cloud,
  BarChart3,
  Cpu,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark py-40 text-white">

        <Container className="relative z-10">

          <FadeIn>

            <div className="max-w-4xl">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Services
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Infrastructure Engineering & Operational Services
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                AISEL Technologies provides infrastructure engineering,
                monitoring, automation, and managed operational services
                designed to improve reliability, scalability, and operational
                visibility.
              </p>

            </div>

          </FadeIn>

        </Container>
      </section>

      {/* SERVICES OVERVIEW */}
      <Section className="py-28">
        <Container>

          <FadeIn>

            <div className="max-w-3xl">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Core Operational Capabilities
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our infrastructure and operational services are built to help
                organizations maintain stable systems, improve operational
                visibility, automate repetitive processes, and scale with
                confidence.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <Server className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Infrastructure Engineering
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Scalable cloud, hybrid, and on-prem infrastructure systems built
                for operational reliability and long-term growth.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <Activity className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Monitoring & Observability
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Real-time operational visibility through monitoring, metrics,
                dashboards, logs, and alerting systems.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <Workflow className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Systems Automation
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Automation of deployments, infrastructure workflows, and
                operational processes to improve efficiency and consistency.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              <ShieldCheck className="mb-5 h-10 w-10 text-brand-primary" />

              <h3 className="mb-4 text-xl font-semibold">
                Managed Infrastructure Services
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                Ongoing monitoring, optimization, maintenance, and operational
                support for critical infrastructure environments.
              </p>

            </div>

          </div>

        </Container>
      </Section>

      {/* INFRASTRUCTURE ENGINEERING */}
      <Section className="bg-brand-light py-28">
        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <FadeIn>

              <div>

                <div className="mb-6 inline-flex rounded-full bg-white p-4 shadow-sm">
                  <Cloud className="h-8 w-8 text-brand-primary" />
                </div>

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Infrastructure Engineering
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We design and deploy scalable infrastructure environments that
                  support operational reliability, performance, and business
                  scalability across cloud, hybrid, and on-prem environments.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Cloud & hybrid infrastructure architecture
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Containerized deployment environments
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Infrastructure scalability planning
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Server & operational environment optimization
                    </p>
                  </div>

                </div>

              </div>

            </FadeIn>

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h3 className="text-2xl font-semibold">
                Business Outcomes
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <h4 className="font-semibold">
                    Operational Stability
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Reliable infrastructure environments designed for uptime and
                    operational continuity.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Scalable Operations
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Infrastructure systems built to support business growth and
                    evolving workloads.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Improved Performance
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Optimized operational environments for better efficiency and
                    resource utilization.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </Container>
      </Section>

      {/* MONITORING */}
      <Section className="py-28">
        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="order-2 lg:order-1 rounded-3xl bg-brand-light p-10">

              <div className="mb-6 inline-flex rounded-full bg-white p-4 shadow-sm">
                <BarChart3 className="h-8 w-8 text-brand-primary" />
              </div>

              <h3 className="text-3xl font-semibold">
                Operational Visibility
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Monitoring and observability systems provide the visibility
                required to identify operational risks, reduce downtime, and
                maintain infrastructure reliability.
              </p>

            </div>

            <FadeIn>

              <div className="order-1 lg:order-2">

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Monitoring & Observability
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We implement monitoring and observability systems that provide
                  real-time visibility into infrastructure performance, uptime,
                  operational health, logs, and system metrics.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Grafana dashboards & operational metrics
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Infrastructure health monitoring
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Alerting & incident visibility systems
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Performance tracking & operational analytics
                    </p>
                  </div>

                </div>

              </div>

            </FadeIn>

          </div>

        </Container>
      </Section>

      {/* AUTOMATION */}
      <Section className="bg-brand-light py-28">
        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <FadeIn>

              <div>

                <div className="mb-6 inline-flex rounded-full bg-white p-4 shadow-sm">
                  <Cpu className="h-8 w-8 text-brand-primary" />
                </div>

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Systems Automation
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We automate operational workflows, deployments, and
                  infrastructure processes to reduce manual overhead and improve
                  operational consistency across environments.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Deployment automation workflows
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Infrastructure provisioning automation
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      CI/CD pipeline implementation
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Operational workflow optimization
                    </p>
                  </div>

                </div>

              </div>

            </FadeIn>

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h3 className="text-2xl font-semibold">
                Automation Benefits
              </h3>

              <div className="mt-8 space-y-6">

                <div>
                  <h4 className="font-semibold">
                    Reduced Manual Operations
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Minimize repetitive tasks and improve operational
                    efficiency.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Improved Consistency
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Standardized workflows reduce configuration drift and
                    deployment risk.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Faster Deployments
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Accelerated operational workflows improve delivery speed and
                    reliability.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </Container>
      </Section>

      {/* MANAGED SERVICES */}
      <Section className="py-28">
        <Container>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="order-2 lg:order-1 rounded-3xl bg-brand-light p-10">

              <div className="mb-6 inline-flex rounded-full bg-white p-4 shadow-sm">
                <Settings className="h-8 w-8 text-brand-primary" />
              </div>

              <h3 className="text-3xl font-semibold">
                Ongoing Operational Support
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                Managed operational services help organizations maintain
                infrastructure reliability while reducing operational complexity
                and internal overhead.
              </p>

            </div>

            <FadeIn>

              <div className="order-1 lg:order-2">

                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Managed Infrastructure Services
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We provide ongoing operational monitoring, maintenance,
                  optimization, and infrastructure support for mission-critical
                  operational environments.
                </p>

                <div className="mt-10 space-y-4">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Continuous infrastructure monitoring
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Operational maintenance & optimization
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Incident response & operational support
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 text-brand-primary" />
                    <p className="text-gray-700">
                      Long-term infrastructure operational management
                    </p>
                  </div>

                </div>

              </div>

            </FadeIn>

          </div>

        </Container>
      </Section>

      {/* DELIVERY PROCESS */}
      <Section className="bg-brand-light py-28">
        <Container>

          <FadeIn>

            <div className="mx-auto max-w-3xl text-center">

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Structured Infrastructure Delivery
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our operational process is designed to improve reliability,
                scalability, operational visibility, and infrastructure
                performance.
              </p>

            </div>

          </FadeIn>

          <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-5">

            {[
              "Infrastructure Assessment",
              "Architecture Planning",
              "Deployment & Automation",
              "Monitoring & Visibility",
              "Optimization & Support",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary font-semibold text-white shadow-sm">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold leading-7">
                  {step}
                </h3>

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

              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Improve Infrastructure Reliability & Operational Visibility
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                Schedule an infrastructure assessment to identify operational
                risks, visibility gaps, scaling challenges, and automation
                opportunities across your infrastructure environment.
              </p>

              <div className="mt-12">

                <a
                  href="/contact"
                  className="inline-block rounded-md bg-brand-primary px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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