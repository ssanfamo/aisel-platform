"use client";

import { useEffect, useState } from "react";
import Container from "../../../components/Container";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch(() => setLeads([]));
  }, []);

  return (
    <main className="py-20">
      <Container>

        <h1 className="text-3xl font-semibold mb-6">
          Leads Dashboard
        </h1>

        <div className="space-y-4">

          {leads.length === 0 && (
            <p className="text-gray-500">No leads yet.</p>
          )}

          {leads.map((lead, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4"
            >
              <p className="font-semibold">{lead.name}</p>
              <p className="text-sm text-gray-500">{lead.email}</p>
              <p className="text-sm">{lead.company || "-"}</p>
              <p className="text-sm mt-2">{lead.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(lead.createdAt).toLocaleString()}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </main>
  );
}