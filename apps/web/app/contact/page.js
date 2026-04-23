"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent");
  };

  return (
    <main className="bg-white text-gray-900">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="text-xl font-semibold">
            AISEL Technologies
          </Link>
        </div>
      </header>

      <section className="py-24 px-6 max-w-xl mx-auto">
        <h1 className="text-5xl font-semibold mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-md"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded-md"
            rows={5}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}