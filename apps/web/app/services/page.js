import Container from "../../components/Container";
import Section from "../../components/Section";

export default function Services() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-brand-dark text-white py-32 text-center">
        <Container>
          <h1 className="text-5xl font-semibold mb-4">
            Our Services
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto">
            Infrastructure, automation, and managed services across cloud,
            on-prem, and hybrid environments.
          </p>
        </Container>
      </section>

      {/* SERVICES */}
      <Section>
        <Container>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Cloud */}
            <div className="border p-6 rounded-lg hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                Cloud Infrastructure
              </h3>
              <p className="text-gray-600 mb-4">
                Build secure, scalable cloud environments tailored to your business needs.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✔ AWS / Azure setup</li>
                <li>✔ Networking & security</li>
                <li>✔ Monitoring & backups</li>
              </ul>
            </div>

            {/* On-Prem */}
            <div className="border p-6 rounded-lg hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                On-Prem Infrastructure
              </h3>
              <p className="text-gray-600 mb-4">
                Design and manage reliable on-site infrastructure and networking systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✔ Server & storage setup</li>
                <li>✔ Network configuration</li>
                <li>✔ Hybrid integration</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="border p-6 rounded-lg hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                DevOps & Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Automate deployments and streamline operations for faster delivery.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✔ CI/CD pipelines</li>
                <li>✔ Infrastructure as Code</li>
                <li>✔ Deployment automation</li>
              </ul>
            </div>

            {/* MSP */}
            <div className="border p-6 rounded-lg hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">
                Managed Services (MSP)
              </h3>
              <p className="text-gray-600 mb-4">
                Ongoing monitoring, support, and optimization of your infrastructure.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✔ 24/7 monitoring</li>
                <li>✔ Incident response</li>
                <li>✔ Performance optimization</li>
              </ul>
            </div>

          </div>

        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-light text-center">
        <Container>
          <h2 className="text-3xl font-semibold mb-4">
            Not sure what you need?
          </h2>

          <p className="text-gray-600 mb-6">
            We’ll assess your current setup and recommend the best solution.
          </p>

          <a
            href="/contact"
            className="bg-brand-primary text-white px-6 py-3 rounded-md hover:shadow-lg"
          >
            Talk to an Expert
          </a>
        </Container>
      </Section>

    </main>
  );
}