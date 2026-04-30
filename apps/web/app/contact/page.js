"use client";

import { useState } from "react";
import FadeIn from "../../components/FadeIn";
import Container from "../../components/Container";
import Section from "../../components/Section";

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      form.reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main>

      {/* HERO */}
      <section className="bg-brand-dark text-white py-32 text-center">
        <Container>
          <FadeIn>
            <h1 className="text-5xl font-semibold mb-4">
              Start Your Project
            </h1>

            <p className="text-gray-300 max-w-xl mx-auto">
              Tell us about your goals—we’ll get back with a clear plan.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* FORM */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">

            <FadeIn>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >

                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />

                <input
                  name="company"
                  placeholder="Company (optional)"
                  className="border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />

                <select
                  name="service"
                  required
                  className="border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
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
                  className="border border-gray-200 p-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />

                <button
                  type="submit"
                  className="bg-brand-primary text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>

                {/* TRUST MESSAGE */}
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours.
                </p>

                {/* SUCCESS MESSAGE */}
                {success && (
                  <p className="text-green-600 text-sm text-center">
                    ✔ Message sent successfully
                  </p>
                )}

              </form>
            </FadeIn>

          </div>
        </Container>
      </Section>

    </main>
  );
}