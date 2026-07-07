"use client";

import { useMemo, useState } from "react";
import { DAYS, CITY_ACCENTS } from "@/data/days";

export default function Home() {
  const [dayId, setDayId] = useState<string>(DAYS[0]?.id ?? "");
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo(() => DAYS.find((d) => d.id === dayId), [dayId]);
  const accent = selected ? CITY_ACCENTS[selected.city].color : "#2c6bed";

  async function generate() {
    if (!dayId) return;
    setLoading(true);
    setError(null);
    if (imgUrl) URL.revokeObjectURL(imgUrl);
    setImgUrl(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ dayId }),
      });
      if (!res.ok) {
        const t = await res.text().catch(() => "");
        throw new Error(t || `Server error ${res.status}`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setImgUrl(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function share() {
    if (!imgUrl || !selected) return;
    try {
      const blob = await (await fetch(imgUrl)).blob();
      const file = new File([blob], `${selected.id}.png`, { type: "image/png" });
      const nav = navigator as Navigator & {
        canShare?: (data: ShareData) => boolean;
        share?: (data: ShareData) => Promise<void>;
      };
      if (nav.canShare && nav.canShare({ files: [file] }) && nav.share) {
        await nav.share({ files: [file], title: selected.title });
        return;
      }
    } catch {
      // fall through to download
    }
    const a = document.createElement("a");
    a.href = imgUrl;
    a.download = `${selected.id}.png`;
    a.click();
  }

  return (
    <main
      style={{
        maxWidth: 560,
        margin: "0 auto",
        padding: "28px 20px 60px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          Italy 2026
        </div>
        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 700,
            fontSize: 36,
            letterSpacing: -0.5,
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Trip Sheet Studio
        </h1>
        <div style={{ fontSize: 15, color: "var(--muted)", marginTop: 4 }}>
          Pick a day, tap generate, share to WhatsApp.
        </div>
      </header>

      <section
        style={{
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 18,
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <label
          style={{
            fontSize: 13,
            color: "var(--muted)",
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Day
        </label>
        <select
          value={dayId}
          onChange={(e) => {
            setDayId(e.target.value);
            setImgUrl(null);
            setError(null);
          }}
          style={{
            appearance: "none",
            fontSize: 18,
            padding: "14px 16px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "#fff",
            color: "var(--ink)",
          }}
        >
          {DAYS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.dayNumber === 0
                ? `Countdown · ${d.title}`
                : `Day ${d.dayNumber} · ${CITY_ACCENTS[d.city].label} · ${d.title}`}
            </option>
          ))}
        </select>

        <button
          onClick={generate}
          disabled={loading || !dayId}
          style={{
            appearance: "none",
            border: "none",
            padding: "18px 20px",
            borderRadius: 14,
            background: accent,
            color: "#fff",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 0.3,
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1,
            transition: "opacity 120ms",
          }}
        >
          {loading ? "Generating…" : "Generate ✨"}
        </button>

        {error ? (
          <div
            style={{
              fontSize: 14,
              color: "#b3261e",
              background: "#fdecea",
              border: "1px solid #f3c3bd",
              borderRadius: 10,
              padding: "10px 12px",
            }}
          >
            {error}
          </div>
        ) : null}
      </section>

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            aspectRatio: "800 / 1500",
            background: "#f4f2ee",
            borderRadius: 20,
            color: "var(--muted)",
            fontSize: 15,
          }}
        >
          Drawing your sheet…
        </div>
      ) : imgUrl ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <img
            src={imgUrl}
            alt="Generated trip sheet"
            style={{
              width: "100%",
              borderRadius: 20,
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              border: "1px solid var(--line)",
            }}
          />
          <button
            onClick={share}
            style={{
              appearance: "none",
              border: "1px solid var(--line)",
              padding: "16px 20px",
              borderRadius: 14,
              background: "#fff",
              color: "var(--ink)",
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Share / Download
          </button>
        </div>
      ) : null}
    </main>
  );
}
