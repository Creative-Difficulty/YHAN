// homepage.tsx
// YHAN – Youth Health Accountability Network
// Hero · Mission · Stats · Contact
// Fonts loaded via: https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Fraunces:ital,wght@0,700;0,900;1,400&display=swap

import { useState } from "react";

/* ─── tiny inline-style design tokens ─── */
const C = {
  orange: "#E97132",
  yellow: "#F29C33",
  red: "#E63337",
  cyan: "#29A9C1",
  navy: "#232C3D",
  hyphen: "#D97E43",
  white: "#ffffff",
  offwhite: "#f7f9fc",
  light: "#eef3f7",
  mid: "#5a6478",
  border: "#e0e7ef",
};

/* ─── reusable tiny bits ─── */
const Eyebrow = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => (
  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 800,
      fontSize: "0.72rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
      marginBottom: 12,
    }}
  >
    {children}
  </p>
);

const H2 = ({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => (
  <h2
    style={{
      fontFamily: "'Fraunces', serif",
      fontWeight: 900,
      fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: light ? "#fff" : C.navy,
    }}
  >
    {children}
  </h2>
);

/* ─── NAV ─── */
function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 60px",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: `1.5px solid ${C.border}`,
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "1rem",
              color: C.navy,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: C.orange }}>Youth Health</span>
            <span style={{ color: C.hyphen, margin: "0 3px" }}>-</span>
            <span>Accountability</span>
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C.mid,
            }}
          >
            Network
          </span>
        </div>
      </a>
      <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
        {["Mission", "Team", "Chapters", "Impact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: C.mid,
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: C.orange,
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </a>
        </li>
      </ul>
    </nav>
  );
}

/* ─── COLOR BAR ─── */
const ColorBar = () => (
  <div style={{ height: 5, display: "flex" }}>
    {[C.orange, C.yellow, C.red, C.cyan].map((c) => (
      <div key={c} style={{ flex: 1, background: c }} />
    ))}
  </div>
);

/* ─── HERO ─── */
function Hero() {
  const stats = [
    { n: "10", l: "Student\nAmbassadors" },
    { n: "15K+", l: "Students\nReached" },
    { n: "7", l: "Global\nChapters" },
    { n: "28", l: "Schools\nImpacted" },
  ];
  const statColors = [C.orange, C.cyan, C.red, C.yellow];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 60,
        padding: "120px 60px 80px",
        background: C.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 55% 55% at 0% 0%, rgba(233,113,50,.08) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 0%, rgba(242,156,51,.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 100% 100%, rgba(230,51,55,.06) 0%, transparent 70%),
            radial-gradient(ellipse 55% 55% at 0% 100%, rgba(41,169,193,.07) 0%, transparent 70%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* text side */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: C.light,
            border: `1.5px solid ${C.border}`,
            color: C.mid,
            padding: "7px 16px",
            borderRadius: 50,
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 28,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              background: C.cyan,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          Student-Led · Non-Profit
        </div>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "clamp(2.6rem, 4.5vw, 4.8rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: C.navy,
            marginBottom: 22,
          }}
        >
          Your voice can
          <br />
          <em style={{ fontStyle: "italic", color: C.orange }}>change</em> the rules.
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.08rem",
            lineHeight: 1.78,
            color: C.mid,
            fontWeight: 500,
            marginBottom: 38,
            maxWidth: 500,
          }}
        >
          A global movement using student insight to reshape education systems.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="#chapters"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 30px",
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "0.93rem",
              textDecoration: "none",
              background: C.orange,
              color: "#fff",
              boxShadow: "0 6px 20px rgba(233,113,50,.28)",
            }}
          >
            Become an Ambassador
          </a>
          <a
            href="#mission"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.93rem",
              textDecoration: "none",
              color: C.navy,
              border: `2px solid ${C.border}`,
              background: "transparent",
            }}
          >
            Our Mission →
          </a>
        </div>
      </div>

      {/* visual side */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* logo circle */}
        <div
          style={{
            width: 280,
            height: 280,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: C.white,
            borderRadius: "50%",
            boxShadow: "0 20px 70px rgba(35,44,61,.1), 0 4px 20px rgba(35,44,61,.06)",
            padding: 30,
          }}
        >
          {/* abstract logo placeholder */}
          <svg viewBox="0 0 120 120" width="180" height="180">
            <circle cx="60" cy="60" r="55" fill={C.light} />
            <path
              d="M 60 20 L 90 80 L 30 80 Z"
              fill="none"
              stroke={C.orange}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="60" cy="60" r="12" fill={C.cyan} opacity="0.8" />
            <circle cx="60" cy="20" r="6" fill={C.orange} />
            <circle cx="90" cy="80" r="6" fill={C.yellow} />
            <circle cx="30" cy="80" r="6" fill={C.red} />
            <text
              x="60"
              y="105"
              textAnchor="middle"
              fontFamily="'DM Sans', sans-serif"
              fontWeight="900"
              fontSize="11"
              fill={C.navy}
              letterSpacing="2"
            >
              YHAN
            </text>
          </svg>
        </div>

        {/* stats bar */}
        <div
          style={{
            display: "flex",
            borderRadius: 18,
            overflow: "hidden",
            border: `1.5px solid ${C.border}`,
            background: C.white,
            boxShadow: "0 4px 20px rgba(35,44,61,.06)",
            width: "100%",
            maxWidth: 380,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: "18px 0",
                borderRight: i < 3 ? `1.5px solid ${C.border}` : "none",
                textAlign: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize: "1.8rem",
                  lineHeight: 1,
                  color: statColors[i],
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: C.mid,
                  marginTop: 4,
                  lineHeight: 1.35,
                  whiteSpace: "pre-line",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MISSION ─── */
function Mission() {
  const cards = [
    { icon: "📋", title: "Survey & Research", body: "Large-scale surveys designed and distributed by student leaders to capture authentic peer perspectives at scale." },
    { icon: "📊", title: "Data Analysis", body: "We help students turn raw responses into clear, compelling insights that decision-makers can't ignore." },
    { icon: "🏛️", title: "Policy Advocacy", body: "Results are presented directly to principals, school boards, and city officials to drive real, lasting change." },
    { icon: "🌐", title: "Global Collaboration", body: "Chapters across cities and countries share knowledge, strategies, and wins with one another." },
  ];
  const borderColors = [C.orange, C.yellow, C.cyan, C.red];

  return (
    <section
      id="mission"
      style={{ padding: "90px 60px", background: C.offwhite }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        <div>
          <Eyebrow color={C.orange}>Our Mission</Eyebrow>
          <H2>What we do and how we do it.</H2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.02rem",
              lineHeight: 1.82,
              color: C.mid,
              fontWeight: 500,
              marginTop: 18,
            }}
          >
            We connect students with school and community leaders. We work with
            student leaders to distribute surveys, analyze the data, and present
            results directly to decision-makers who shape your city's school
            policies.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.02rem",
              lineHeight: 1.82,
              color: C.mid,
              fontWeight: 500,
              marginTop: 12,
            }}
          >
            We help schools improve by making sure student voices are heard and
            genuinely acted upon.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          {cards.map((c, i) => (
            <div
              key={c.title}
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "26px 20px",
                boxShadow: "0 2px 16px rgba(35,44,61,.07)",
                borderTop: `4px solid ${borderColors[i]}`,
                marginTop: i % 2 === 1 ? 20 : 0,
              }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>{c.icon}</div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: C.navy,
                  marginBottom: 7,
                }}
              >
                {c.title}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: C.mid,
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── IMPACT ─── */
function Impact() {
  const boxes = [
    { n: "10", l: "Student Ambassadors\nWorldwide", color: C.orange },
    { n: "15K+", l: "Students\nReached", color: C.yellow },
    { n: "7", l: "Global Chapters\nActive", color: C.cyan },
    { n: "28", l: "Schools\nImpacted", color: C.red },
  ];

  return (
    <section
      id="impact"
      style={{
        padding: "90px 60px",
        background: C.navy,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle 500px at 20% 50%, rgba(233,113,50,.12) 0%, transparent 70%),
            radial-gradient(circle 400px at 80% 50%, rgba(41,169,193,.1) 0%, transparent 70%)
          `,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 520,
            margin: "0 auto 56px",
          }}
        >
          <Eyebrow color={C.yellow}>Our Impact</Eyebrow>
          <H2 light>Numbers that tell the story</H2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 16,
              fontSize: "0.96rem",
              color: "rgba(255,255,255,.5)",
              lineHeight: 1.75,
              fontWeight: 500,
            }}
          >
            Every survey distributed, every meeting held, every policy changed:
            tracked and counted because accountability goes both ways.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {boxes.map((b) => (
            <div
              key={b.n}
              style={{
                background: "rgba(255,255,255,.06)",
                border: "1.5px solid rgba(255,255,255,.09)",
                borderRadius: 20,
                padding: "44px 28px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 900,
                  fontSize: "3.2rem",
                  lineHeight: 1,
                  color: b.color,
                }}
              >
                {b.n}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,.45)",
                  marginTop: 10,
                  lineHeight: 1.5,
                  fontWeight: 600,
                  whiteSpace: "pre-line",
                }}
              >
                {b.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleSubmit = () => {
    const mailto = `mailto:ayra@yhan.org?subject=${encodeURIComponent(form.topic || "Inquiry")}&body=${encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    border: `1.5px solid ${C.border}`,
    borderRadius: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: C.navy,
    background: C.offwhite,
    outline: "none",
    fontWeight: 500,
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
      style={{ padding: "90px 60px", background: C.offwhite }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "start",
        }}
      >
        {/* left */}
        <div>
          <Eyebrow color={C.orange}>Get in Touch</Eyebrow>
          <H2>Let's connect.</H2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              marginTop: 18,
              fontSize: "1rem",
              lineHeight: 1.8,
              color: C.mid,
              fontWeight: 500,
            }}
          >
            For quick inquiries, updates, chapter information, or to apply as an
            ambassador — reach out directly to our founder. We'd love to hear
            from you.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 30,
            }}
          >
            {[
              { icon: "✉️", label: "Email our founder", val: "ayra@yhan.org" },
              { icon: "🌍", label: "Active in", val: "7 countries · 28 schools impacted" },
              { icon: "🎓", label: "Open to", val: "Students, schools & partner organizations" },
            ].map((l) => (
              <div
                key={l.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "16px 20px",
                  background: C.white,
                  borderRadius: 16,
                  boxShadow: "0 2px 14px rgba(35,44,61,.06)",
                  border: `1.5px solid ${C.border}`,
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "#edf7fb",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {l.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.74rem",
                      color: C.mid,
                      fontWeight: 600,
                    }}
                  >
                    {l.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 800,
                      color: C.navy,
                    }}
                  >
                    {l.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* form */}
        <div
          style={{
            background: C.white,
            borderRadius: 24,
            padding: "44px 40px",
            boxShadow: "0 4px 36px rgba(35,44,61,.09)",
            border: `1.5px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "1.35rem",
              color: C.navy,
              marginBottom: 5,
            }}
          >
            Send us a message
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.87rem",
              color: C.mid,
              marginBottom: 26,
              fontWeight: 500,
            }}
          >
            We'll get back to you as soon as we can.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
            <div>
              <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mid, marginBottom: 6 }}>
                First Name
              </label>
              <input
                style={inputStyle}
                placeholder="Ayra"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mid, marginBottom: 6 }}>
                Last Name
              </label>
              <input
                style={inputStyle}
                placeholder="Dhillon"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
          </div>

          {[
            { label: "Email", type: "email", key: "email", placeholder: "you@school.com" },
          ].map((f) => (
            <div key={f.key} style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mid, marginBottom: 6 }}>
                {f.label}
              </label>
              <input
                style={inputStyle}
                type={f.type}
                placeholder={f.placeholder}
                value={(form as any)[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              />
            </div>
          ))}

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mid, marginBottom: 6 }}>
              I'm reaching out about
            </label>
            <select
              style={{ ...inputStyle, appearance: "none" as const }}
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            >
              <option value="">Select a topic...</option>
              {["Starting a YHAN Chapter", "Ambassador Application", "School / Organization Partnership", "General Inquiry", "Media & Press"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.07em", textTransform: "uppercase", color: C.mid, marginBottom: 6 }}>
              Message
            </label>
            <textarea
              style={{ ...inputStyle, resize: "vertical" }}
              rows={4}
              placeholder="Tell us about yourself and what you're hoping to do..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: 14,
              background: C.orange,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "0.93rem",
              cursor: "pointer",
              marginTop: 6,
            }}
          >
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer style={{ background: C.navy, padding: "64px 60px 32px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 56,
          marginBottom: 48,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "0.95rem",
              color: "#fff",
              marginBottom: 14,
            }}
          >
            <span style={{ color: C.orange }}>Youth Health</span> - Accountability
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.84rem",
              color: "rgba(255,255,255,.38)",
              lineHeight: 1.7,
              fontWeight: 500,
              maxWidth: 300,
            }}
          >
            A global student-led movement using youth insight to reshape
            education systems, one policy at a time.
          </p>
        </div>
        {[
          {
            heading: "Navigate",
            links: ["Mission", "Team", "Chapters", "Impact", "Contact"],
          },
          {
            heading: "Get Involved",
            links: ["Apply as Ambassador", "Start a Chapter", "Partner with Us"],
          },
        ].map((col) => (
          <div key={col.heading}>
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "0.75rem",
                color: "#fff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {col.heading}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(255,255,255,.4)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          paddingTop: 26,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.76rem",
          color: "rgba(255,255,255,.26)",
          fontWeight: 600,
        }}
      >
        <span>© 2025 Youth Health Accountability Network. All rights reserved.</span>
        <span>Built by students, for students.</span>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Fraunces:ital,wght@0,700;0,900;1,400&display=swap"
        rel="stylesheet"
      />
      <style>{`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; } body { overflow-x: hidden; }`}</style>
      <ColorBar />
      <Nav />
      <Hero />
      <Mission />
      <Impact />
      <Contact />
      <Footer />
    </>
  );
}
