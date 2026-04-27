"use client";

import FadeIn from "../../components/FadeIn";

export default function About() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-slate-950 text-white py-32 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl font-semibold mb-4">
            About AISEL Technologies
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            We design and deliver scalable cloud and AI solutions that drive real business outcomes.
          </p>
        </FadeIn>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AISEL Technologies is a modern technology consulting firm focused on
              helping organizations leverage cloud computing, artificial intelligence,
              and automation to achieve scalable growth.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We combine deep technical expertise with business understanding to
              deliver solutions that are not only technically sound but also aligned
              with strategic objectives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          <FadeIn>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower businesses with intelligent, scalable technology solutions
                that improve efficiency, reduce costs, and drive innovation.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be a trusted partner for organizations seeking to transform
                their operations through modern cloud and AI technologies.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-3xl font-semibold mb-12">
              Our Core Values
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <FadeIn>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace new technologies and continuously evolve to stay ahead.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We deliver high-quality solutions that meet the highest standards.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We build trust through transparency and accountability.
                </p>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-4">
            Let’s Build Something Great Together
          </h2>

          <p className="text-gray-300 mb-6">
            Partner with us to design and implement scalable solutions.
          </p>

          <a
            href="/contact"
            className="bg-blue-600 px-6 py-3 rounded-md inline-block"
          >
            Contact Us
          </a>
        </FadeIn>
      </section>

    </main>
  );
}