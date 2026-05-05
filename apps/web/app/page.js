"use client";

import Container from "../components/Container";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";

export default function Home() {
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
              Build. Automate. Scale.
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
              We design and manage cloud, on-prem, and hybrid infrastructure—
              powered by automation to help your business scale reliably.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <a href="/contact" className="bg-brand-primary px-6 py-3 rounded-md hover:shadow-lg">
                Get a Free Consultation
              </a>

              <a href="/services" className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10">
                View Services
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SERVICES OVERVIEW */}
      <Section>
        <Container>
          <FadeIn>
            <h2 className="text-5xl font-semibold mb-16 tracking-tight">
              Core Capabilities
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div>
              <h3 className="font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Scalable, secure environments on AWS, Azure, and more.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">On-Prem Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Server, network, and local system design & management.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Automation & DevOps</h3>
              <p className="text-gray-600 text-sm">
                CI/CD pipelines and infrastructure automation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Managed Services (MSP)</h3>
              <p className="text-gray-600 text-sm">
                Monitoring, support, and ongoing system optimization.
              </p>
            </div>

          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="bg-brand-light">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-semibold mb-12 text-center">
              How We Work
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h4 className="font-semibold mb-2">1. Discovery</h4>
              <p className="text-sm text-gray-600">
                We assess your infrastructure and business needs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. Design</h4>
              <p className="text-sm text-gray-600">
                We design cloud, on-prem, or hybrid solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Implementation</h4>
              <p className="text-sm text-gray-600">
                We deploy infrastructure and automation systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">4. Management</h4>
              <p className="text-sm text-gray-600">
                We monitor, maintain, and optimize continuously.
              </p>
            </div>

          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-dark text-white text-center">
        <Container>
          <FadeIn>
            <h2 className="text-4xl font-semibold mb-4">
              Let’s Build Your Infrastructure
            </h2>

            <p className="text-gray-300 mb-8">
              Cloud, on-prem, or hybrid—we’ll design the right system for you.
            </p>

            <a href="/contact" className="bg-brand-primary px-6 py-3 rounded-md">
              Talk to an Expert
            </a>
          </FadeIn>
        </Container>
      </Section>

    </main>
  );
}