'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Error fetching API"));
  }, []);

  return (
    <main>
      <h1>AISEL Technologies</h1>
      <p>API Response: {message}</p>
    </main>
  );
}