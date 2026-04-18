'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("API offline"));
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          AI-Powered Data Systems for Smarter Decisions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          AISEL Technologies builds scalable data platforms, analytics systems, 
          and intelligent solutions that turn complex data into business growth.
        </p>
        <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
            <p className="text-gray-400">
              Build scalable pipelines and data architectures for real-time insights.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Analytics & BI</h3>
            <p className="text-gray-400">
              Transform raw data into dashboards and actionable intelligence.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
            <p className="text-gray-400">
              Leverage AI to automate decisions and unlock predictive insights.
            </p>
          </div>

        </div>
      </section>

      {/* WHY AISEL */}
      <section className="px-6 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Why AISEL?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          We combine deep technical expertise with business understanding to deliver 
          systems that scale, perform, and drive measurable impact.
        </p>
      </section>

      {/* API STATUS (DEV FEATURE) */}
      <section className="text-center py-10 text-gray-500 text-sm">
        API Status: {message}
      </section>

    </main>
  );
}
