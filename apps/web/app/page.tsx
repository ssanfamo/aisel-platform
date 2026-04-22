"use client";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* HERO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Build scalable digital platforms that drive real business outcomes
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              We help organizations design, deploy, and optimize cloud, AI, and
              data systems that improve performance and unlock growth.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg">
                Get Started
              </button>
              <button className="border px-6 py-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT (visual placeholder) */}
          <div className="h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
            Visual / Graphic Area
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL */}
          <div className="h-[400px] bg-white rounded-2xl border flex items-center justify-center text-gray-400">
            Platform Visualization
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-3xl font-bold">
              End-to-end platform engineering and cloud solutions
            </h2>

            <p className="mt-6 text-gray-600">
              We deliver scalable infrastructure, intelligent automation, and
              modern engineering practices that transform how businesses operate.
            </p>

            <ul className="mt-8 space-y-4">
              <li>Cloud Infrastructure</li>
              <li>AI Automation</li>
              <li>DevOps Engineering</li>
              <li>Platform Engineering</li>
              <li>Managed IT Services</li>
            </ul>
          </div>

        </div>
      </section>

      {/* VALUE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            We focus on outcomes, not just technology
          </h2>

          <p className="mt-6 text-gray-600">
            Our approach combines engineering excellence with business strategy
            to deliver measurable impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">
          Start building your next-generation platform
        </h2>

        <button className="mt-6 bg-white text-black px-8 py-3 rounded-lg">
          Contact Us
        </button>
      </section>

    </main>
  );
}