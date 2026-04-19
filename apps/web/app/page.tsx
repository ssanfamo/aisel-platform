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
    <main style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>

      {/* HERO */}
      <section>
        <h1>AISEL Technologies</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Building scalable cloud, AI, and data platforms for modern businesses.
        </p>
      </section>

      {/* CORE SERVICES */}
      <section style={{ marginTop: "50px" }}>
        <h2>Core Services</h2>
        <ul>
          <li>Cloud Infrastructure</li>
          <li>AI Automation</li>
          <li>DevOps Engineering</li>
          <li>Platform Engineering</li>
          <li>Managed IT Services</li>
        </ul>
      </section>

      {/* VALUE PROPOSITION */}
      <section style={{ marginTop: "50px" }}>
        <h2>Why AISEL</h2>
        <p>
          We combine cloud engineering, AI capabilities, and platform expertise
          to help organizations scale faster, reduce operational complexity, and
          unlock business value.
        </p>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "50px" }}>
        <h2>Get Started</h2>
        <p>Contact us to design and deploy your next-generation technology platform.</p>
      </section>

      {/* API STATUS */}
      <section style={{ marginTop: "50px", color: "gray" }}>
        API Status: {message}
      </section>

    </main>
  );
}