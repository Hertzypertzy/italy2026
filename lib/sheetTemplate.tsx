import { CITY_ACCENTS, type Day } from "@/data/days";

export const SHEET_WIDTH = 800;
export const SHEET_HEIGHT = 1500;

const ink = "#1a2238";
const paper = "#fdfcf9";
const card = "#ffffff";
const muted = "#7a8290";
const line = "#eeebe4";

function hexToRgba(hex: string, a: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

type Props = {
  day: Day;
  heroImageUrl?: string | null;
};

export function SheetTemplate({ day, heroImageUrl }: Props) {
  const accent = CITY_ACCENTS[day.city];

  return (
    <div
      style={{
        width: SHEET_WIDTH,
        height: SHEET_HEIGHT,
        display: "flex",
        flexDirection: "column",
        background: paper,
        fontFamily: "Inter, sans-serif",
        color: ink,
      }}
    >
      {/* HERO */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: 620,
          background: accent.color,
          overflow: "hidden",
        }}
      >
        {/* Hero illustration */}
        {heroImageUrl ? (
          <img
            src={heroImageUrl}
            alt=""
            width={SHEET_WIDTH}
            height={620}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: SHEET_WIDTH,
              height: 620,
              objectFit: "cover",
              opacity: 1,
            }}
          />
        ) : null}

        {/* Scrim: darker at top for chips, much darker at bottom for title */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Top meta row */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px 40px 0 40px",
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 0.5,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "8px 16px",
              background: "rgba(255,255,255,0.22)",
              borderRadius: 999,
            }}
          >
            {day.dayNumber === 0 ? "COUNTDOWN" : `DAY ${day.dayNumber} · ${day.totalDays}`}
          </div>
          <div
            style={{
              display: "flex",
              padding: "8px 16px",
              background: "rgba(255,255,255,0.22)",
              borderRadius: 999,
              textTransform: "uppercase",
            }}
          >
            {accent.label}
          </div>
        </div>

        {/* Bottom text stack */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            padding: "0 40px 40px 40px",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              fontSize: 22,
              opacity: 0.9,
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            {day.date}
          </div>
          <div
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              marginBottom: 12,
              textShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}
          >
            {day.title}
          </div>
          <div
            style={{
              fontSize: 30,
              opacity: 0.95,
              fontWeight: 500,
            }}
          >
            {day.subtitle}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "28px 32px 32px 32px",
          gap: 20,
        }}
      >
        {/* Key times */}
        {day.keyTimes && day.keyTimes.length > 0 ? (
          <div
            style={{
              display: "flex",
              gap: 16,
            }}
          >
            {day.keyTimes.map((k) => (
              <div
                key={k.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  background: card,
                  border: `1px solid ${line}`,
                  borderRadius: 18,
                  padding: "18px 22px",
                }}
              >
                <div style={{ fontSize: 16, color: muted, textTransform: "uppercase", letterSpacing: 1 }}>
                  {k.label}
                </div>
                <div
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: 44,
                    fontWeight: 700,
                    color: ink,
                    lineHeight: 1,
                    marginTop: 4,
                  }}
                >
                  {k.value}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Schedule */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: card,
            border: `1px solid ${line}`,
            borderRadius: 18,
            padding: "22px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 16,
              color: muted,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 14,
            }}
          >
            Schedule
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {day.schedule.slice(0, 4).map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 96,
                    fontFamily: "Fraunces, serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: ink,
                  }}
                >
                  {s.time}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 34,
                    width: 46,
                    justifyContent: "center",
                  }}
                >
                  {s.emoji}
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>{s.title}</div>
                  <div style={{ fontSize: 18, color: muted, marginTop: 2 }}>{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: word of day + challenge */}
        <div style={{ display: "flex", gap: 16 }}>
          {day.wordOfDay ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                background: card,
                border: `1px solid ${line}`,
                borderRadius: 18,
                padding: "18px 22px",
              }}
            >
              <div style={{ fontSize: 14, color: muted, textTransform: "uppercase", letterSpacing: 1.2 }}>
                Word of the day
              </div>
              <div
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: 34,
                  fontWeight: 700,
                  color: ink,
                  marginTop: 4,
                }}
              >
                {day.wordOfDay.word}
              </div>
              <div style={{ fontSize: 16, color: muted, marginTop: 2 }}>
                {`${day.wordOfDay.pron} · ${day.wordOfDay.meaning}`}
              </div>
            </div>
          ) : null}

          {day.challenge ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                background: hexToRgba(accent.color, 0.09),
                border: `1px solid ${hexToRgba(accent.color, 0.25)}`,
                borderRadius: 18,
                padding: "18px 22px",
              }}
            >
              <div style={{ fontSize: 14, color: muted, textTransform: "uppercase", letterSpacing: 1.2 }}>
                Today's mission
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                <div style={{ display: "flex", fontSize: 34 }}>{day.challenge.emoji}</div>
                <div style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.25, flex: 1 }}>
                  {day.challenge.text}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Trivia strip (optional, shown only if space) */}
        {day.trivia && day.trivia.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "4px 4px 0 4px",
              gap: 8,
            }}
          >
            {day.trivia.slice(0, 2).map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 18,
                  color: ink,
                }}
              >
                <div style={{ display: "flex", fontSize: 24 }}>{t.emoji}</div>
                <div style={{ display: "flex", color: muted, flex: 1 }}>{t.text}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
