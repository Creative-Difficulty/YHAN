// teampage.tsx
// YHAN – Team Page  ·  3 co-founder cards

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

const founders = [
  {
    name: "Ayra Dhillon",
    role: "Founder & Executive Director",
    bio: "Ayra founded YHAN after watching decisions get made about students, without students. She leads global operations, chapter development, and direct partnerships with school districts and city governments.",
    email: "ayra@yhan.org",
    accentColor: C.orange,
    initials: "AD",
    badges: ["Policy Advocacy", "Chapter Ops", "Partnerships"],
  },
  {
    name: "Co-Founder Two",
    role: "Director of Research & Data",
    bio: "Leads survey design, data collection methodology, and analysis pipelines. Passionate about turning student responses into evidence that policymakers can act on.",
    email: "research@yhan.org",
    accentColor: C.cyan,
    initials: "CF",
    badges: ["Survey Design", "Data Analysis", "Research"],
  },
  {
    name: "Co-Founder Three",
    role: "Director of Community & Growth",
    bio: "Drives ambassador recruitment, ambassador training, and inter-chapter collaboration. Believes every school deserves a student who will speak up.",
    email: "community@yhan.org",
    accentColor: C.yellow,
    initials: "CT",
    badges: ["Recruitment", "Training", "Community"],
  },
];

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
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "1rem", color: C.navy }}>
            <span style={{ color: C.orange }}>Youth Health</span>
            <span style={{ color: C.hyphen, margin: "0 3px" }}>-</span>
            <span>Accountability</span>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: C.mid }}>
            Network
          </div>
        </div>
      </a>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {["Mission", "Team", "Chapters", "Impact"].map((item) => (
          <a key={item} href={`/${item.toLowerCase()}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: item === "Team" ? C.orange : C.mid, textDecoration: "none" }}>
            {item}
          </a>
        ))}
        <a href="#contact" style={{ fontFamily: "'DM Sans', sans-serif", background: C.orange, color: "#fff", padding: "10px 22px", borderRadius: 50, fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
          Get in Touch
        </a>
      </div>
    </nav>
  );
}

const ColorBar = () => (
  <div style={{ height: 5, display: "flex" }}>
    {[C.orange, C.yellow, C.red, C.cyan].map((c) => (
      <div key={c} style={{ flex: 1, background: c }} />
    ))}
  </div>
);

function TeamHero() {
  return (
    <section
      style={{
        padding: "140px 60px 80px",
        background: C.white,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 60% at 50% 0%, rgba(233,113,50,.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 0% 100%, rgba(41,169,193,.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%)
          `,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: C.orange,
            marginBottom: 16,
          }}
        >
          The People Behind YHAN
        </p>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: C.navy,
            marginBottom: 24,
          }}
        >
          Meet the team that
          <br />
          <em style={{ fontStyle: "italic", color: C.orange }}>refuses to be ignored.</em>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.08rem",
            lineHeight: 1.78,
            color: C.mid,
            fontWeight: 500,
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          Three students who believed that youth perspectives deserve a seat at
          the table — and built the organization to make it happen.
        </p>
      </div>
    </section>
  );
}

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  const isFlipped = index % 2 === 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isFlipped ? "1fr 420px" : "420px 1fr",
        gap: 72,
        alignItems: "center",
        padding: "80px 0",
        borderBottom: `1.5px solid ${C.border}`,
      }}
    >
      {/* photo area */}
      {!isFlipped && (
        <div
          style={{
            aspectRatio: "4/5",
            background: C.light,
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 16,
            border: `2px dashed ${C.border}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* decorative corner accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 60,
              height: 60,
              borderBottom: `4px solid ${founder.accentColor}`,
              borderRight: `4px solid ${founder.accentColor}`,
              borderBottomRightRadius: 28,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 60,
              height: 60,
              borderTop: `4px solid ${founder.accentColor}`,
              borderLeft: `4px solid ${founder.accentColor}`,
              borderTopLeftRadius: 28,
            }}
          />
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: founder.accentColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Fraunces', serif",
              fontWeight: 900,
              fontSize: "2rem",
              color: "#fff",
              opacity: 0.85,
            }}
          >
            {founder.initials}
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: C.mid,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Photo Coming Soon
          </p>
        </div>
      )}

      {/* text */}
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: C.light,
            border: `1.5px solid ${C.border}`,
            padding: "6px 14px",
            borderRadius: 50,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: founder.accentColor,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 800,
              color: C.mid,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {founder.role}
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 3vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: C.navy,
            marginBottom: 20,
          }}
        >
          {founder.name}
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.02rem",
            lineHeight: 1.82,
            color: C.mid,
            fontWeight: 500,
            marginBottom: 28,
          }}
        >
          {founder.bio}
        </p>

        {/* badges */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
          {founder.badges.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "5px 14px",
                borderRadius: 50,
                background: `${founder.accentColor}18`,
                color: founder.accentColor,
                border: `1.5px solid ${founder.accentColor}30`,
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <a
          href={`mailto:${founder.email}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 24px",
            borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: "0.9rem",
            textDecoration: "none",
            background: founder.accentColor,
            color: "#fff",
            boxShadow: `0 6px 20px ${founder.accentColor}30`,
          }}
        >
          ✉ {founder.email}
        </a>
      </div>

      {/* photo area (flipped) */}
      {isFlipped && (
        <div
          style={{
            aspectRatio: "4/5",
            background: C.light,
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 16,
            border: `2px dashed ${C.border}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 60,
              height: 60,
              borderBottom: `4px solid ${founder.accentColor}`,
              borderLeft: `4px solid ${founder.accentColor}`,
              borderBottomLeftRadius: 28,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 60,
              height: 60,
              borderTop: `4px solid ${founder.accentColor}`,
              borderRight: `4px solid ${founder.accentColor}`,
              borderTopRightRadius: 28,
            }}
          />
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: founder.accentColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Fraunces', serif",
              fontWeight: 900,
              fontSize: "2rem",
              color: "#fff",
              opacity: 0.85,
            }}
          >
            {founder.initials}
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: C.mid, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Photo Coming Soon
          </p>
        </div>
      )}
    </div>
  );
}

function JoinBanner() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: C.navy,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(233,113,50,.15) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 620, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.yellow, marginBottom: 16 }}>
          Want to join the team?
        </p>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.9rem, 3vw, 2.8rem)", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Become a Chapter Ambassador
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,.6)", lineHeight: 1.75, fontWeight: 500, marginBottom: 32 }}>
          Lead surveys at your school, present findings to your local government,
          and join a global network of young advocates who are actually changing
          things.
        </p>
        <a
          href="mailto:ayra@yhan.org?subject=Ambassador Application"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "15px 32px",
            borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            textDecoration: "none",
            background: C.yellow,
            color: C.navy,
          }}
        >
          Apply Now →
        </a>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Fraunces:ital,wght@0,700;0,900;1,400&display=swap" rel="stylesheet" />
      <style>{`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; } body { overflow-x: hidden; font-family: 'DM Sans', sans-serif; background: #fff; }`}</style>
      <ColorBar />
      <Nav />
      <TeamHero />
      <section style={{ padding: "0 60px" }}>
        {founders.map((f, i) => (
          <FounderCard key={f.name} founder={f} index={i} />
        ))}
      </section>
      <JoinBanner />
    </>
  );
}