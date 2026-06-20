"use client";

import FadeIn from "../../components/FadeIn";
import Container from "../../components/Container";

export default function About() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-brand-dark py-32 px-6 text-white text-center">

        <Container>

          <FadeIn>

            <h1 className="text-5xl font-semibold md:text-6xl">
              About AISEL Technologies
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-300">
              AISEL Technologies is an infrastructure engineering and
              technology consulting company specializing in monitoring,
              observability, systems automation, cloud operations and
              managed infrastructure services.
            </p>

          </FadeIn>

        </Container>

      </section>

      {/* WHO WE ARE */}
      <section className="py-24 px-6">

        <Container>

          <div className="mx-auto max-w-5xl">

            <FadeIn>

              <h2 className="text-4xl font-semibold">
                Who We Are
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                AISEL Technologies is an infrastructure engineering and
                technology consulting company focused on helping
                organizations improve reliability, operational visibility,
                scalability and efficiency through modern infrastructure
                practices.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We specialize in infrastructure engineering, monitoring
                and observability, systems automation, cloud operations
                and managed infrastructure services designed to simplify
                operations and support business growth.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our approach combines deep technical expertise with
                practical operational experience to deliver solutions
                that are reliable, scalable and aligned with business
                objectives.
              </p>

            </FadeIn>

          </div>

        </Container>

      </section>

      {/* MISSION & VISION */}
      <section className="bg-brand-light py-24 px-6">

        <Container>

          <div className="grid gap-12 md:grid-cols-2">

            <FadeIn>

              <div>

                <h3 className="text-3xl font-semibold">
                  Our Mission
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To empower organizations with reliable, scalable and
                  intelligent infrastructure solutions that improve
                  operational efficiency, visibility and long-term
                  resilience.
                </p>

              </div>

            </FadeIn>

            <FadeIn>

              <div>

                <h3 className="text-3xl font-semibold">
                  Our Vision
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  To be a trusted infrastructure engineering and
                  technology partner helping organizations modernize
                  operations through monitoring, automation and cloud
                  technologies.
                </p>

              </div>

            </FadeIn>

          </div>

        </Container>

      </section>

      {/* CORE COMPETENCIES */}
      <section className="py-24 px-6">

        <Container>

          <FadeIn>

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Core Competencies
              </p>

              <h2 className="mt-6 text-4xl font-semibold">
                Infrastructure Engineering & Operational Excellence
              </h2>

            </div>

          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Infrastructure Engineering",
              "Monitoring & Observability",
              "Systems Automation",
              "Cloud Operations",
              "Managed Infrastructure Services",
              "Operational Excellence",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-brand-light p-8"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </Container>

      </section>

      {/* AISEL AT A GLANCE */}
      <section className="bg-brand-light py-24 px-6">

        <Container>

          <FadeIn>

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                AISEL at a Glance
              </p>

              <h2 className="mt-6 text-4xl font-semibold">
                Delivering Infrastructure Excellence
              </h2>

            </div>

          </FadeIn>

          <div className="mt-16 grid gap-10 text-center md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-bold text-brand-primary">
                2+
              </h3>

              <p className="mt-3 text-gray-600">
                Organizations Supported
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-brand-primary">
                24/7
              </h3>

              <p className="mt-3 text-gray-600">
                Infrastructure Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-brand-primary">
                100%
              </h3>

              <p className="mt-3 text-gray-600">
                Commitment to Operational Excellence
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-brand-primary">
                Cloud
              </h3>

              <p className="mt-3 text-gray-600">
                Infrastructure & Automation Expertise
              </p>
            </div>

          </div>

        </Container>

      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6">

        <Container>

          <FadeIn>

            <div className="text-center">

              <h2 className="text-4xl font-semibold">
                Our Core Values
              </h2>

            </div>

          </FadeIn>

          <div className="mt-16 grid gap-10 md:grid-cols-3">

            {[
              {
                title: "Innovation",
                text: "We embrace new technologies and continuously evolve to stay ahead.",
              },
              {
                title: "Excellence",
                text: "We deliver high-quality solutions that meet the highest standards.",
              },
              {
                title: "Integrity",
                text: "We build trust through transparency and accountability.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-brand-light p-10"
              >
                <h3 className="text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-7">
                  {value.text}
                </p>
              </div>
            ))}

          </div>

        </Container>

      </section>

      {/* ORGANIZATIONS WE SUPPORT */}
      <section className="bg-brand-light py-24 px-6">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
              Organizations We Support
            </p>

            <h2 className="mt-6 text-4xl font-semibold">
              Delivering Infrastructure Solutions Across Industries
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              AISEL Technologies supports organizations across logistics
              and engineering sectors through infrastructure engineering,
              monitoring, observability and automation services.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h3 className="text-2xl font-semibold">
                KTI Logistics
              </h3>

              <p className="mt-4 text-gray-600">
                Logistics & Supply Chain Operations
              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">

              <h3 className="text-2xl font-semibold">
                RejiRoma Engineering
              </h3>

              <p className="mt-4 text-gray-600">
                Engineering Services & Infrastructure Projects
              </p>

            </div>

          </div>

        </Container>

      </section>

      {/* OUR APPROACH */}
      <section className="py-24 px-6">

        <Container>

          <div className="mx-auto max-w-5xl text-center">

            <FadeIn>

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Our Approach
              </p>

              <h2 className="mt-6 text-4xl font-semibold">
                Building Reliable and Scalable Infrastructure
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Every engagement begins with understanding operational
                challenges and business objectives. We then design and
                implement practical solutions that improve reliability,
                visibility, scalability and operational efficiency.
              </p>

            </FadeIn>

          </div>

        </Container>

      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20 text-center text-white">

        <Container>

          <FadeIn>

            <h2 className="text-4xl font-semibold">
              Let's Build Something Great Together
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              Partner with AISEL Technologies to design, implement and
              operate scalable infrastructure solutions that support
              your business objectives.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-md bg-brand-primary px-8 py-4 text-white transition hover:opacity-90"
            >
              Schedule a Discovery Discussion
            </a>

          </FadeIn>

        </Container>

      </section>

    </main>
  );
}