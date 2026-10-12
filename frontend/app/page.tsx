"use client";

import { FormEvent, useState } from "react";

export default function HomePage() {
  const [expression, setExpression] = useState("x**2 + 5*x + 6 = 0");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("expression", expression);

    try {
      const res = await fetch("http://localhost:8000/api/problems/solve", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Unable to connect to backend." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="card">
        <p className="eyebrow">Synthetic Intelligence</p>
        <h1>Education Assistant</h1>
        <p className="subtitle">
          Type a math problem, and the system will suggest a topic and solve it.
        </p>

        <form onSubmit={handleSubmit} className="form-panel">
          <textarea
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Example: x**2 + 5*x + 6 = 0"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Solving..." : "Solve"}
          </button>
        </form>

        {result && (
          <div className="result-card">
            <h2>Result</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </section>
    </main>
  );
}
