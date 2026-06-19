"use client";

import { useState } from "react";

import Container from "../../components/Container";
import Section from "../../components/Section";
import FadeIn from "../../components/FadeIn";

import {
  Mail,
  Phone,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    environment: "",
    challenges: "",
    goals: "",
  });

  // HANDLE INPUT CHANGES
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setErrorMessage("");

    setSuccess(false);

    try {

      console.log("Submitting Form:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      console.log("Response Status:", response.status);

      const result = await response.json();

      console.log("API Result:", result);

      if (response.ok) {

        setSuccess(true);

        setFormData({
          name: "",
          company: "",
          email: "",
          environment: "",
          challenges: "",
          goals: "",
        });

      } else {

        setErrorMessage(
          result.error || "Something went wrong."
        );
      }

    } catch (error) {

      console.error("Submit Error:", error);

      setErrorMessage(
        "Unable to submit form. Please try again."
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark py-40 text-white">

        <Container>

          <FadeIn>

            <div className="max-w-5xl">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Contact AISEL Technologies
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Discuss Your Infrastructure Challenges With AISEL Technologies
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                Whether you're improving visibility, scaling infrastructure,
                implementing automation, or modernizing operations,
                AISEL can help identify practical next steps.
              </p>

            </div>

          </FadeIn>

        </Container>

      </section>

      {/* CONTACT SECTION */}
      <Section className="py-28">

        <Container>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <FadeIn>

              <div>

                <h2 className="text-4xl font-semibold tracking-tight">
                  Infrastructure Consultation
                </h2>

                <p className="mt-8 text-lg leading-8 text-gray-600">
                  Schedule an operational infrastructure assessment
                  to identify reliability risks, visibility gaps,
                  scalability limitations, and automation opportunities.
                </p>

                <div className="mt-12 space-y-8">

                  <div className="flex gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                      <Mail className="h-6 w-6 text-brand-primary" />
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        Email
                      </h3>

                      <p className="mt-2 text-gray-600">
                        info@aiseltechnologies.com
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                      <Phone className="h-6 w-6 text-brand-primary" />
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        Consultation
                      </h3>

                      <p className="mt-2 text-gray-600">
                        Infrastructure engineering and operational discussions.
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light">
                      <Building2 className="h-6 w-6 text-brand-primary" />
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold">
                        Managed Services
                      </h3>

                      <p className="mt-2 text-gray-600">
                        Ongoing monitoring and operational support.
                      </p>

                    </div>

                  </div>

                </div>

                {/* CHALLENGES */}
                <div className="mt-16 rounded-3xl bg-brand-light p-8">

                  <h3 className="text-2xl font-semibold">
                    Common Infrastructure Challenges
                  </h3>

                  <div className="mt-8 space-y-5">

                    {[
                      "Infrastructure downtime & instability",
                      "Limited operational visibility",
                      "Scaling complexity",
                      "Manual operational workflows",
                      "Monitoring & observability gaps",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />

                        <p className="text-gray-700">
                          {item}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </FadeIn>

            {/* ENGAGEMENT PROCESS */}

            <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-8">

              <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
                Engagement Process
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                What Happens Next
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "Discovery Call",
                  "Infrastructure Assessment",
                  "Solution Design",
                  "Implementation Roadmap",
                  "Delivery & Operational Support",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-white">
                      {index + 1}
                    </div>

                    <span className="text-gray-700">
                      {step}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Infrastructure Engineering",
                "Monitoring & Observability",
                "Systems Automation",
                "Managed Services",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* FORM */}
            <FadeIn>

              <div className="rounded-3xl bg-brand-light p-10 shadow-sm">

                <h2 className="text-3xl font-semibold">
                  Request Infrastructure Assessment
                </h2>

                <p className="mt-4 leading-8 text-gray-600">
                  Share information about your operational environment and goals.

                  We typically respond within one business day to schedule an initial discovery discussion.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10 grid gap-8"
                >

                  {/* NAME */}
                  <div>

                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-brand-primary"
                      placeholder="Your full name"
                    />

                  </div>

                  {/* COMPANY */}
                  <div>

                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-brand-primary"
                      placeholder="Organization name"
                    />

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-brand-primary"
                      placeholder="you@company.com"
                    />

                  </div>

                  {/* ENVIRONMENT */}
                  <div>

                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Current Environment
                    </label>

                    <input
                      type="text"
                      name="environment"
                      value={formData.environment}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-brand-primary"
                      placeholder="Cloud, Hybrid, On-Prem"
                    />

                  </div>

                  {/* CHALLENGES */}
                  <div>

                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Infrastructure Challenges
                    </label>

                    <textarea
                      rows={5}
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-brand-primary"
                      placeholder="Describe your infrastructure or operational challenges."
                    />

                  </div>

                  {/* GOALS */}
                  <div>

                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Project Goals
                    </label>

                    <textarea
                      rows={5}
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-brand-primary"
                      placeholder="Describe your infrastructure goals."
                    />

                  </div>

                  {/* BUTTON */}
                  <div>

                    <button
                      type="Schedule Discovery Call"
                      disabled={loading}
                      className="inline-flex items-center gap-3 rounded-md bg-brand-primary px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50"
                    >

                      {loading
                        ? "Sending..."
                        : "Schedule Infrastructure Assessment"}

                      <ArrowRight className="h-5 w-5" />

                    </button>

                  </div>

                  {/* SUCCESS */}
                  {success && (
                    <div className="rounded-xl bg-green-50 p-5 text-green-700">
                      Infrastructure assessment request submitted successfully.
                    </div>
                  )}

                  {/* ERROR */}
                  {errorMessage && (
                    <div className="rounded-xl bg-red-50 p-5 text-red-700">
                      {errorMessage}
                    </div>
                  )}

                </form>

              </div>

            </FadeIn>

          </div>

        </Container>

      </Section>

    </main>
  );
}