"use client";

import FadeIn from "../../components/FadeIn";

export default function CaseStudies() {
  const cases = [
    {
      title: "Cloud Migration for Financial Services Firm",
      problem: "Legacy infrastructure causing downtime and scaling issues.",
      solution: "Migrated workloads to AWS with automated scaling and monitoring.",
      outcome: "Reduced downtime by 70% and improved system performance.",
      image: "/images/cloud.jpg",
    },
    {
      title: "AI Automation for Operations",
      problem: "Manual workflows slowing business operations.",
      solution: "Implemented AI-driven automation tools.",
      outcome: "Increased efficiency by 50% and reduced operational costs.",
      image: "/images/ai.jpg",
    },
    {
      title: "DevOps Transformation",
      problem: "Slow deployment cycles and high failure rates.",
      solution: "Introduced CI/CD pipelines and infrastructure automation.",
      outcome: "Deployment speed improved by 3x with fewer errors.",
      image: "/images/devops.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-slate-950 text-white py-32 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl font-semibold mb-4">
            Case Studies
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Real-world solutions delivering measurable business impact.
          </p>
        </FadeIn>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">

          {cases.map((c, i) => (
            <FadeIn key={i}>
              <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* IMAGE */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    {c.title}
                  </h2>

                  <p className="mb-2">
                    <strong>Problem:</strong> {c.problem}
                  </p>

                  <p className="mb-2">
                    <strong>Solution:</strong> {c.solution}
                  </p>

                  <p className="text-blue-600 font-medium">
                    <strong>Outcome:</strong> {c.outcome}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 text-center">
        <FadeIn>
          <h2 className="text-3xl font-semibold mb-4">
            Want Similar Results?
          </h2>

          <p className="text-gray-600 mb-6">
            Let’s discuss how we can deliver value for your business.
          </p>

          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
          >
            Get in Touch
          </a>
        </FadeIn>
      </section>

    </main>
  );
}