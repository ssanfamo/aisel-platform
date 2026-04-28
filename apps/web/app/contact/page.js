"use client";

import { useState } from "react";
import FadeIn from "../../components/FadeIn";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      service: form.service.value,
      message: form.message.value,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setSuccess(true);
      form.reset();
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-brand-dark text-white py-32 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl font-semibold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let’s discuss how we can help you build scalable, intelligent systems.
          </p>
        </FadeIn>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT: VALUE */}
          <FadeIn>
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Start a Conversation
              </h2>

              <p className="text-gray-600 mb-6">
                Tell us about your project, and we’ll get back to you with
                a tailored approach to meet your needs.
              </p>

              <ul className="text-gray-600 space-y-2 text-sm">
                <li>✔ Cloud & Infrastructure Consulting</li>
                <li>✔ AI & Automation Solutions</li>
                <li>✔ DevOps & Platform Engineering</li>
                <li>✔ Managed IT Services</li>
              </ul>
            </div>
          </FadeIn>

          {/* RIGHT: FORM */}
          <FadeIn>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                name="name"
                placeholder="Full Name"
                required
                className="border p-3 rounded-md"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="border p-3 rounded-md"
              />

              <input
                name="company"
                placeholder="Company (optional)"
                className="border p-3 rounded-md"
              />

              <select
                name="service"
                required
                className="border p-3 rounded-md"
              >
                <option value="">Select Service</option>
                <option>Cloud Infrastructure</option>
                <option>AI Automation</option>
                <option>DevOps Engineering</option>
                <option>Platform Engineering</option>
                <option>Managed IT Services</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                required
                className="border p-3 rounded-md h-32"
              />

              <button
                type="submit"
                className="bg-brand-primary text-white py-3 rounded-md"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>

              {success && (
                <p className="text-green-600 text-sm">
                  ✔ Message sent successfully
                </p>
              )}

            </form>
          </FadeIn>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light py-20 text-center">
        <FadeIn>
          <h2 className="text-2xl font-semibold mb-4">
            Prefer direct contact?
          </h2>
          <p className="text-gray-600">
            Reach us at: contact@aiseltechnologies.com
          </p>
        </FadeIn>
      </section>

    </main>
  );
}