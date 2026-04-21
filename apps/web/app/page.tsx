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
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#111827",
      minHeight: "100vh"
    }}>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px",
        background: "linear-gradient(to bottom, #f9fafb, #ffffff)"
      }}>
        <h1 style={{ fontSize: "44px", marginBottom: "20px" }}>
          AISEL Technologies
        </h1>

        <p style={{
          fontSize: "20px",
          fontWeight: "500",
          marginBottom: "15px",
          color: "#1d4ed8"
        }}>
          Helping businesses scale with cloud, AI, and intelligent platforms
        </p>

        <p style={{
          fontSize: "16px",
          color: "#4b5563",
          maxWidth: "700px",
          margin: "auto"
        }}>
          We design, build, and manage modern technology systems that improve performance,
          reduce operational complexity, and accelerate business growth.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "80px 20px",
        maxWidth: "1100px",
        margin: "auto"
      }}>
        <h2 style={{
          fontSize: "30px",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          Core Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>

          {services.map((service) => (
            <div key={service.title} style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 10px rgba(0,0,0,0.04)"
            }}>
              <strong style={{ color: "#1d4ed8" }}>{service.title}</strong>
              <p style={{
                marginTop: "10px",
                color: "#4b5563",
                fontSize: "14px"
              }}>
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY AISEL */}
      <section style={{
        backgroundColor: "#f3f4f6",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Why AISEL
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "auto",
          color: "#4b5563"
        }}>
          We deliver technology solutions that go beyond implementation.
          Our approach focuses on building systems that are scalable, reliable,
          and aligned with your business goals—ensuring long-term value.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Get in Touch
        </h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            const result = await res.json();
            alert(result.message);
            form.reset();
          }}
          style={{
            maxWidth: "500px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >
          <input name="name" placeholder="Your Name" required style={inputStyle} />
          <input name="email" placeholder="Your Email" required style={inputStyle} />
          <textarea name="message" placeholder="Your Message" required style={inputStyle} />

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </section>

      {/* API STATUS */}
      <section style={{
        textAlign: "center",
        padding: "20px",
        color: "#9ca3af",
        fontSize: "14px"
      }}>
        API Status: {message}
      </section>

    </main>
  );
}

const services = [
  {
    title: "Cloud Infrastructure",
    desc: "Design and deploy scalable, secure cloud environments that support business growth."
  },
  {
    title: "AI Automation",
    desc: "Automate processes and decision-making using intelligent, data-driven solutions."
  },
  {
    title: "DevOps Engineering",
    desc: "Accelerate software delivery with reliable automation and pipelines."
  },
  {
    title: "Platform Engineering",
    desc: "Build internal platforms that enable teams to develop and scale efficiently."
  },
  {
    title: "Managed IT Services",
    desc: "Operate and optimize your environment with proactive monitoring and support."
  }
];

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
  fontSize: "14px"
};

const buttonStyle = {
  padding: "14px",
  backgroundColor: "#1d4ed8",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};