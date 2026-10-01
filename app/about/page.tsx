import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionBadge from "../components/SectionBadge";

export const metadata: Metadata = {
  title: "About VIVA Engineering | Slitter Rewinder Machine Manufacturer Ahmedabad Works",
  description:
    "Learn about VIVA Engineering's manufacturing plant in Bakrol Bujrang, Ahmedabad, Gujarat. 16+ years designing and manufacturing high-speed 3-drive slitter rewinders, doctoring inspection lines & foil converters with 500+ installations worldwide.",
  keywords: [
    "Slitter Rewinder Machine Manufacturer Ahmedabad",
    "Slitter Rewinder Machine Manufacturer India",
    "Ahmedabad Converting Machinery",
    "Bakrol Bujrang Engineering Works",
    "ISO 9001:2015 Converting Plant",
    "Duplex Cantilever Slitter Manufacturer",
    "VIVA Engineering Ahmedabad",
  ],
  alternates: {
    canonical: "https://vivaengineering.in/about",
  },
  openGraph: {
    title: "About VIVA Engineering | Ahmedabad Manufacturing Works",
    description:
      "16+ years of specialized converting machine building in Ahmedabad, Gujarat, India. Heavy solid steel side frames, European vector drives & ISO 9001:2015 quality standards.",
    url: "https://vivaengineering.in/about",
    images: [{ url: "/categories/slitting_rewinding.jpg", width: 1200, height: 630, alt: "VIVA Engineering Ahmedabad Works" }],
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: "fa-solid fa-industry",
      title: "In-House Heavy Fabrication",
      desc: "Our plant utilizes heavy solid steel side plate frames up to 40mm thick, precision stress-relieved and CNC machined to guarantee zero resonance vibration during continuous 600 m/min operations.",
    },
    {
      icon: "fa-solid fa-microchip",
      title: "European Motion & Drive Control",
      desc: "We integrate Siemens and Mitsubishi PLCs, vector frequency drives, and closed-loop electronic loadcells with dancer feedback to regulate web tension within ±0.5% tolerance.",
    },
    {
      icon: "fa-solid fa-compass-drafting",
      title: "Dynamic Balancing & Shaft Engineering",
      desc: "Every aluminium guide roller, doctoring roll, and expanding rewind shaft undergoes dynamic electronic balancing at up to 800 m/min to eliminate web flutter and uneven reel build-up.",
    },
    {
      icon: "fa-solid fa-certificate",
      title: "ISO 9001:2015 Registered Plant",
      desc: "Comprehensive quality control checks at every stage: raw metallurgical testing, ultrasonic weld inspection, electrical cabinet wiring verification, and rigorous 48-hour continuous dry-run FAT testing.",
    },
  ];

  const milestones = [
    { year: "2008", title: "Establishment in Ahmedabad", desc: "Founded with the mission to build robust, vibration-free converting machinery in Bakrol Bujrang, Ahmedabad." },
    { year: "2013", title: "First High-Speed Duplex Line", desc: "Launched 500 m/min cantilever duplex slitter series with ultrasonic edge guiding integration." },
    { year: "2017", title: "ISO 9001 Quality Certification", desc: "Formalized standard operating procedures, standardized spare part interchangeability, and certified factory QA." },
    { year: "2020", title: "Global Export Reach", desc: "Delivered customized converting machinery to converting packaging plants across Africa, the Middle East, and Southeast Asia." },
    { year: "2024+", title: "500+ Machines Delivered", desc: "Celebrated over 500 active machine installations with 24/7 onsite technical support and direct factory spares." },
  ];

  return (
    <div style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-main)", minHeight: "100vh" }}>
      <Navbar activePage="about" />

      {/* Header Banner */}
      <section
        style={{
          padding: "70px 5% 50px",
          background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-dark) 100%)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
          <SectionBadge
            items={["Corporate Heritage", "Ahmedabad, Gujarat"]}
            style={{ marginBottom: 18 }}
          />
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 16 }}>
            ABOUT VIVA ENGINEERING &amp; <span style={{ color: "var(--primary)" }}>AHMEDABAD WORKS</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 960, lineHeight: 1.7 }}>
            Over 16+ years of dedicated machine manufacturing expertise. We design, fabricate, and assemble
            heavy-duty slitter rewinder machinery, doctoring inspection lines, and converting equipment in
            K P Industrial Estate, Bakrol Bujrang, Ahmedabad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: "100%", width: "100%", margin: "0 auto", padding: "60px 5% 100px" }}>
        <style>{`
          @media (max-width: 960px) {
            .about-story-grid {
              grid-template-columns: 1fr !important;
              gap: 36px !important;
            }
          }
          @media (max-width: 768px) {
            .about-pillars-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 1080px) {
            .about-milestones-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .about-milestones-grid {
              grid-template-columns: 1fr !important;
            }
            .about-stats-row {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .about-visit-card {
              padding: 28px 18px !important;
            }
            .about-visit-actions {
              flex-direction: column !important;
              width: 100% !important;
            }
            .about-visit-actions a {
              width: 100% !important;
              justify-content: center !important;
            }
          }
        `}</style>

        {/* Intro Story Grid */}
        <section className="about-story-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 50, alignItems: "center", marginBottom: 80 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem, 3vw, 2.2rem)", fontWeight: 900, marginBottom: 18, color: "var(--text-main)" }}>
              ENGINEERED FOR UNCOMPROMISING INDUSTRIAL PERFORMANCE
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 18 }}>
              At VIVA Engineering, we understand that converting plants cannot afford machine downtime or web wrinkling.
              Master rolls of paper, BOPP film, and aluminium foil represent substantial material investment, requiring
              slitter rewinder equipment that operates with micron-level slit width accuracy and flawless tension regulation.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 28 }}>
              From initial structural frame plate machining to precision dynamic balancing and multi-axis PLC programming,
              every phase of machine building happens under one roof at our manufacturing plant in Ahmedabad, Gujarat.
            </p>

            <div className="about-stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, paddingTop: 12, borderTop: "1px solid var(--border-subtle)" }}>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 900, color: "var(--primary)" }}>500+</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginTop: 2 }}>Units Built</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 900, color: "var(--primary)" }}>16+</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginTop: 2 }}>Years in Business</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 900, color: "var(--primary)" }}>100%</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginTop: 2 }}>FAT Tested</div>
              </div>
            </div>
          </div>

          {/* Plant Photography Card */}
          <div className="industrial-card" style={{ padding: "clamp(18px, 3vw, 30px)", position: "relative" }}>
            <div style={{ position: "relative", height: "clamp(220px, 35vw, 360px)", width: "100%", borderRadius: 10, overflow: "hidden" }}>
              <Image
                src="/categories/slitting_rewinding.jpg"
                alt="VIVA Engineering Ahmedabad Manufacturing Plant Floor"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--text-main)" }}>Ahmedabad Works Facility</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>Plot No. 21 K P Industrial Estate, Bakrol Bujrang</div>
              </div>
              <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.15em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                GUJARAT, INDIA
              </span>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section style={{ marginBottom: 90 }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionBadge>ENGINEERING EXCELLENCE</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "var(--text-main)" }}>
              WHY CONVERTERS TRUST VIVA MACHINERY
            </h2>
          </div>

          <div className="about-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {pillars.map((p, i) => (
              <div key={i} className="industrial-card" style={{ padding: "clamp(20px, 3vw, 32px)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }} aria-hidden="true">
                  <i className={p.icon} style={{ color: "var(--primary)", fontSize: "1.3rem" }}></i>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", marginBottom: 10 }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Milestones */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <SectionBadge>GROWTH &amp; MILESTONES</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "var(--text-main)" }}>
              16 YEARS OF CONTINUOUS INNOVATION
            </h2>
          </div>

          <div className="about-milestones-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
            {milestones.map((m, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: "24px 20px" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 900, color: "var(--primary)", marginBottom: 8 }}>
                  {m.year}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-main)", marginBottom: 6 }}>
                  {m.title}
                </div>
                <p style={{ color: "var(--text-dim)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Plant Visit Banner */}
        <section className="industrial-card about-visit-card" style={{ padding: "48px", textAlign: "center", background: "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-card) 100%)" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", fontWeight: 900, marginBottom: 14 }}>
            VISIT OUR AHMEDABAD MANUFACTURING PLANT
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 680, margin: "0 auto 28px", lineHeight: 1.65 }}>
            Witness our slitter rewinder manufacturing in action. Schedule a personalized plant tour
            with our senior engineering team to inspect active machinery builds and test run your trial rolls.
          </p>
          <div className="about-visit-actions" style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "12px 28px" }}>
              <span>Schedule Plant Visit</span>
              <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
            </Link>
            <a href="tel:+919265609416" className="btn-secondary" style={{ padding: "12px 24px" }}>
              <i className="fa-solid fa-phone" style={{ color: "var(--primary)" }} aria-hidden="true"></i>
              <span>Call +91 92656 09416</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
