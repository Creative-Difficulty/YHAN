'use client'
// chapterpage.tsx
// YHAN – Chapters  ·  Map · Rolling chapter scroll · Apply CTA
// Map rendered via Leaflet (loaded from CDN in a useEffect)

import { useState, useEffect, useRef } from "react";

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

const chapters = [
  {
    id: 1,
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    lead: "Ayra Dhillon",
    schools: 6,
    students: 4200,
    status: "Active",
    color: C.orange,
    lat: 43.7,
    lng: -79.42,
    founded: "2023",
    highlight: "Partnered with Toronto District School Board",
  },
  {
    id: 2,
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    lead: "Ambassador",
    schools: 5,
    students: 3100,
    status: "Active",
    color: C.cyan,
    lat: 51.5,
    lng: -0.12,
    founded: "2023",
    highlight: "Presented to borough council on mental health policy",
  },
  {
    id: 3,
    city: "New Delhi",
    country: "India",
    flag: "🇮🇳",
    lead: "Ambassador",
    schools: 4,
    students: 2800,
    status: "Active",
    color: C.yellow,
    lat: 28.61,
    lng: 77.21,
    founded: "2024",
    highlight: "Survey reached 2,800+ students across 4 schools",
  },
  {
    id: 4,
    city: "Nairobi",
    country: "Kenya",
    flag: "🇰🇪",
    lead: "Ambassador",
    schools: 4,
    students: 2400,
    status: "Active",
    color: C.red,
    lat: -1.29,
    lng: 36.82,
    founded: "2024",
    highlight: "Launched first peer-led wellness survey in the region",
  },
  {
    id: 5,
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    lead: "Ambassador",
    schools: 4,
    students: 1900,
    status: "Active",
    color: C.orange,
    lat: -33.87,
    lng: 151.21,
    founded: "2024",
    highlight: "Collaboration with NSW Department of Education",
  },
  {
    id: 6,
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    lead: "Ambassador",
    schools: 3,
    students: 1300,
    status: "Growing",
    color: C.cyan,
    lat: -23.55,
    lng: -46.63,
    founded: "2024",
    highlight: "Expanding to 3 additional schools in 2025",
  },
  {
    id: 7,
    city: "Helsinki",
    country: "Finland",
    flag: "🇫🇮",
    lead: "Ambassador",
    schools: 2,
    students: 900,
    status: "Growing",
    color: C.yellow,
    lat: 60.17,
    lng: 24.94,
    founded: "2025",
    highlight: "Newest chapter — focused on student mental health data",
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
        zIndex: 1000,
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
          <a key={item} href={`/${item.toLowerCase()}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: item === "Chapters" ? C.orange : C.mid, textDecoration: "none" }}>
            {item}
          </a>
        ))}
        <a href="#apply" style={{ fontFamily: "'DM Sans', sans-serif", background: C.orange, color: "#fff", padding: "10px 22px", borderRadius: 50, fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
          Apply Now
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

/* ─── CHAPTER HERO ─── */
function ChapterHero() {
  return (
    <section
      style={{
        padding: "140px 60px 80px",
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
            radial-gradient(ellipse 60% 80% at -10% 50%, rgba(233,113,50,.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 110% 50%, rgba(41,169,193,.16) 0%, transparent 60%)
          `,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 760 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.yellow, marginBottom: 16 }}>
          Global Chapters
        </p>
        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 5vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 24,
          }}
        >
          Student voices,
          <br />
          <em style={{ fontStyle: "italic", color: C.orange }}>everywhere.</em>
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.08rem", lineHeight: 1.78, color: "rgba(255,255,255,.65)", fontWeight: 500, maxWidth: 560 }}>
          YHAN chapters are active in 7 countries, reaching 15,000+ students
          across 28 schools. Each chapter is led by a local student ambassador
          who drives surveys, data collection, and policy advocacy in their
          community.
        </p>

        {/* mini stats */}
        <div style={{ display: "flex", gap: 0, marginTop: 44, borderRadius: 16, overflow: "hidden", border: "1.5px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.05)", maxWidth: 520 }}>
          {[
            { n: "7", l: "Active Chapters", color: C.orange },
            { n: "28", l: "Schools", color: C.cyan },
            { n: "15K+", l: "Students Reached", color: C.yellow },
          ].map((s, i) => (
            <div key={s.n} style={{ flex: 1, padding: "20px 0", textAlign: "center", borderRight: i < 2 ? "1.5px solid rgba(255,255,255,.12)" : "none" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "2rem", lineHeight: 1, color: s.color }}>{s.n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,.45)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── MAP SECTION ─── */
function MapSection({ onSelect, selectedId }: { onSelect: (id: number) => void; selectedId: number | null }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Load Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    const loadLeaflet = () => {
      return new Promise<void>((resolve) => {
        if ((window as any).L) { resolve(); return; }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    loadLeaflet().then(() => {
      if (!mapRef.current || leafletRef.current) return;
      const L = (window as any).L;

      const map = L.map(mapRef.current, {
        center: [20, 10],
        zoom: 2,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        {
          attribution: '© OpenStreetMap © CARTO',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      leafletRef.current = map;

      chapters.forEach((ch) => {
        const svgIcon = L.divIcon({
          html: `
            <div style="
              width: 36px; height: 36px;
              background: ${ch.color};
              border: 3px solid white;
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              font-size: 16px;
              box-shadow: 0 4px 14px ${ch.color}60;
              cursor: pointer;
            ">${ch.flag}</div>
          `,
          className: "",
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        const marker = L.marker([ch.lat, ch.lng], { icon: svgIcon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family: 'DM Sans', sans-serif; min-width: 160px;">
              <div style="font-weight: 900; font-size: 1rem; color: ${C.navy}; margin-bottom: 4px;">${ch.flag} ${ch.city}</div>
              <div style="font-size: 0.78rem; color: ${C.mid}; margin-bottom: 8px;">${ch.country}</div>
              <div style="font-size: 0.78rem; color: ${C.navy}; font-weight: 700;">${ch.schools} schools · ${ch.students.toLocaleString()} students</div>
            </div>`,
            { closeButton: false }
          )
          .on("click", () => onSelect(ch.id));

        markersRef.current.push(marker);
      });
    });

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
        markersRef.current = [];
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: 480,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(35,44,61,.12)",
        border: `1.5px solid ${C.border}`,
      }}
    />
  );
}

/* ─── ROLLING CHAPTER LIST ─── */
function ChapterList({ selectedId, onSelect }: { selectedId: number | null; onSelect: (id: number) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {chapters.map((ch) => {
        const isSelected = selectedId === ch.id;
        return (
          <div
            key={ch.id}
            onClick={() => onSelect(ch.id)}
            style={{
              background: isSelected ? C.white : C.white,
              border: `1.5px solid ${isSelected ? ch.color : C.border}`,
              borderRadius: 18,
              padding: "22px 24px",
              cursor: "pointer",
              transition: "all .2s",
              boxShadow: isSelected ? `0 4px 24px ${ch.color}22` : "0 2px 10px rgba(35,44,61,.05)",
              transform: isSelected ? "translateX(4px)" : "none",
              borderLeft: `4px solid ${isSelected ? ch.color : C.border}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: "1.6rem" }}>{ch.flag}</span>
                <div>
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1rem", color: C.navy }}>
                    {ch.city}
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.82rem", color: C.mid, marginLeft: 8 }}>{ch.country}</span>
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: C.mid, fontWeight: 600, marginTop: 2 }}>
                    {ch.schools} schools · {ch.students.toLocaleString()} students · Est. {ch.founded}
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 50,
                  background: ch.status === "Active" ? "#eaf9f3" : "#fff8ed",
                  color: ch.status === "Active" ? "#1a7a50" : C.yellow,
                  border: `1px solid ${ch.status === "Active" ? "#b2e6d0" : "#f5d9a3"}`,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {ch.status}
              </span>
            </div>

            {isSelected && (
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: `1px solid ${C.border}`,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: C.mid,
                  lineHeight: 1.65,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <span style={{ color: ch.color, fontSize: "1rem", marginTop: 1 }}>✦</span>
                {ch.highlight}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── MAP + LIST COMBINED ─── */
function ChaptersMapSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section style={{ padding: "90px 60px", background: C.white }}>
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.cyan, marginBottom: 12 }}>
          Where We Are
        </p>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.9rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: C.navy }}>
          7 chapters. One mission.
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: C.mid, fontWeight: 500, marginTop: 14, maxWidth: 560 }}>
          Click a pin on the map or a chapter below to learn more about what
          each team is working on.
        </p>
      </div>

      {/* map */}
      <MapSection onSelect={setSelectedId} selectedId={selectedId} />

      {/* rolling list */}
      <div style={{ marginTop: 48 }}>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", color: C.navy, marginBottom: 20 }}>
          All Chapters
        </h3>
        <ChapterList selectedId={selectedId} onSelect={setSelectedId} />
      </div>
    </section>
  );
}

/* ─── APPLY CTA ─── */
function ApplyCTA() {
  const perks = [
    "Lead student surveys at your school and collect feedback from peers",
    "Share results with principals, school districts, or local government",
    "Help turn student voices into real, lasting policy change",
    "Join a global network of young advocates driving education reform",
  ];

  const whatYouGet = [
    { n: "01", title: "Leadership & Research Experience", body: "Run a real advocacy campaign from start to finish: survey design, data analysis, stakeholder presentations." },
    { n: "02", title: "A Global Student Network", body: "Connect with YHAN ambassadors across 7 chapters worldwide. Share strategies, learn, and grow together." },
    { n: "03", title: "Recognition for Real Impact", body: "Your work won't just look good on a résumé — it will have genuinely changed something at your school." },
  ];

  return (
    <section id="apply" style={{ padding: "90px 60px", background: C.offwhite }}>
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.orange, marginBottom: 12 }}>
          Join the Movement
        </p>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "clamp(1.9rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: C.navy }}>
          Become a Global Ambassador Today
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: C.mid, fontWeight: 500, marginTop: 14, maxWidth: 580 }}>
          Want to change the rules at your own school? YHAN Chapter Ambassadors
          lead student surveys, collect real feedback, and bring data directly to
          the people with the power to act on it.
        </p>
      </div>

      {/* banner */}
      <div
        style={{
          background: `linear-gradient(130deg, ${C.navy} 0%, #2d3a52 100%)`,
          borderRadius: 24,
          padding: "44px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 44,
          alignItems: "center",
          boxShadow: "0 8px 32px rgba(35,44,61,.15)",
          marginBottom: 24,
        }}
      >
        <div>
          <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: "1.5rem", color: "#fff", lineHeight: 1.2, marginBottom: 26 }}>
            As a YHAN Chapter Ambassador, you can:
          </h3>
          <a
            href="mailto:ayra@yhan.org?subject=Ambassador Application"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: C.yellow,
              color: C.navy,
              padding: "13px 24px",
              borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Apply Now →
          </a>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {perks.map((p) => (
            <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,.8)", lineHeight: 1.55, fontWeight: 500 }}>
              <span
                style={{
                  flexShrink: 0,
                  width: 22,
                  height: 22,
                  background: "rgba(41,169,193,.18)",
                  color: C.cyan,
                  borderRadius: "50%",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}
              >
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* what you get */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {whatYouGet.map((w) => (
          <div
            key={w.n}
            style={{
              background: C.white,
              borderRadius: 20,
              padding: "30px 26px",
              boxShadow: "0 2px 16px rgba(35,44,61,.07)",
              border: `1.5px solid ${C.border}`,
            }}
          >
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: C.cyan, marginBottom: 12 }}>
              What you'll get · {w.n}
            </div>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1rem", color: C.navy, marginBottom: 8 }}>
              {w.title}
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.83rem", color: C.mid, lineHeight: 1.65, fontWeight: 500 }}>
              {w.body}
            </div>
          </div>
        ))}
      </div>

      {/* final email nudge */}
      <div
        style={{
          marginTop: 24,
          background: C.light,
          borderRadius: 20,
          padding: "30px 26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: `1.5px dashed ${C.border}`,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: "2rem" }}>📩</span>
          <div>
            <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1rem", color: C.navy }}>Ready to apply?</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: C.mid, fontWeight: 500 }}>Email our founder to get started.</div>
          </div>
        </div>
        <a
          href="mailto:ayra@yhan.org?subject=Ambassador Application"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: C.orange,
            fontWeight: 800,
            fontSize: "0.9rem",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          ayra@yhan.org →
        </a>
      </div>
    </section>
  );
}

export default function ChapterPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Fraunces:ital,wght@0,700;0,900;1,400&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; font-family: 'DM Sans', sans-serif; background: #fff; }
        .leaflet-popup-content-wrapper { border-radius: 14px !important; box-shadow: 0 8px 32px rgba(35,44,61,.15) !important; border: 1.5px solid #e0e7ef !important; }
        .leaflet-popup-tip { display: none !important; }
      `}</style>
      <ColorBar />
      <Nav />
      <ChapterHero />
      <ChaptersMapSection />
      <ApplyCTA />
    </>
  );
}