"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    setLoading(false);
    alert("Message sent!");
  };

  return (
    <section className="py-24 px-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Name" className="border p-3" required />
        <input name="email" placeholder="Email" className="border p-3" required />
        <textarea name="message" placeholder="Message" className="border p-3" required />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}