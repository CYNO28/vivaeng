"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import SectionBadge from "./SectionBadge";

interface HeroSectionProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const stats = [
  {
    value: "500",
    suffix: "+",
    label: "Machines Delivered",
    sub: "Across India & global plants",
    accentValue: true,
  },
  {
    value: "16",
    suffix: "+",
    label: "Years Experience",
    sub: "Converting specialists",
    accentValue: false,
  },
  {
    value: "100",
    suffix: "%",
    label: "Quality Assured",
    sub: "ISO 9001:2015 certified",
    accentValue: false,
  },
  {
    value: "24",
    suffix: "/7",
    label: "Support Available",
    sub: "Onsite service & spares",
    accentValue: false,
  },
];

export default function HeroSection({ theme, onToggleTheme }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Counter animation state — counts from 0 to target on mount
  const targets = [500, 16, 100, 24];
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1600; // ms
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCounts(targets.map((target) => Math.round(eased * target)));
      if (t < 1) requestAnimationFrame(tick);
    };

    // Start after the stats bar animates in (~680ms)
    const raf = setTimeout(() => requestAnimationFrame(tick), 720);
    return () => clearTimeout(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hero-container">
      {/* Video Background */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/slitter_bg_poster.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "right center",
            opacity: theme === "dark" ? 0.88 : 0.82,
            transition: "opacity 0.3s ease",
          }}
        >
          <source src="/slitter_twin_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Theme Gradient Mask */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            theme === "dark"
              ? "linear-gradient(90deg, rgba(10, 11, 13, 0.98) 0%, rgba(10, 11, 13, 0.90) 36%, rgba(10, 11, 13, 0.45) 54%, rgba(10, 11, 13, 0.05) 75%, transparent 100%), linear-gradient(180deg, transparent 0%, transparent 80%, rgba(10, 11, 13, 0.95) 100%)"
              : "linear-gradient(90deg, rgba(248, 250, 252, 0.98) 0%, rgba(248, 250, 252, 0.92) 36%, rgba(248, 250, 252, 0.45) 54%, rgba(248, 250, 252, 0.05) 75%, transparent 100%), linear-gradient(180deg, transparent 0%, transparent 80%, rgba(248, 250, 252, 0.95) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Shared Navbar (telemetry bar + header) */}
      <div style={{ position: "relative", zIndex: 30 }}>
        <Navbar activePage="home" theme={theme} onToggleTheme={onToggleTheme} />
      </div>

      {/* Keyframe & Responsive Definitions */}
      <style>{`
        .hero-container {
          position: relative;
          min-height: 100vh;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          overflow: hidden;
        }

        @media (max-width: 900px) {
          .hero-container {
            height: auto !important;
            min-height: 100svh !important;
            padding-bottom: 24px !important;
            overflow: visible !important;
          }
          .hero-editorial-section {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px 16px !important;
          }
          .hero-stat-card {
            border-left: 2px solid var(--primary) !important;
            padding-left: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px 12px !important;
          }
          .hero-stat-number {
            font-size: 1.65rem !important;
          }
          .hero-stat-label {
            font-size: 0.65rem !important;
          }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes statCardIn {
          0%   { opacity: 0; transform: translateY(36px); }
          55%  { opacity: 1; transform: translateY(-7px); }
          75%  { transform: translateY(3px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes iconPop {
          0%   { transform: scale(0.4); opacity: 0; }
          65%  { transform: scale(1.18); opacity: 1; }
          85%  { transform: scale(0.94); }
          100% { transform: scale(1);    opacity: 1; }
        }


        /* Hero CTA button hover effects */
        .hero-btn-primary {
          transition: box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .hero-btn-primary:hover {
          opacity: 0.88;
          box-shadow: 0 6px 28px rgba(245, 158, 11, 0.35);
        }
        .hero-btn-primary .hero-arrow-tab {
          transition: background 0.2s ease, padding 0.2s ease;
        }
        .hero-btn-primary:hover .hero-arrow-tab {
          background: rgba(245, 158, 11, 0.28);
          padding-left: 22px;
          padding-right: 10px;
        }

        .hero-btn-secondary {
          transition: color 0.2s ease;
        }
        .hero-btn-secondary:hover {
          color: var(--text-main) !important;
        }
        .hero-btn-secondary .hero-circle {
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .hero-btn-secondary:hover .hero-circle {
          border-color: var(--primary) !important;
          background: rgba(245, 158, 11, 0.12);
          transform: translateX(4px);
        }
      `}</style>

      {/* Hero Editorial Copy */}
      <section
        aria-labelledby="hero-title"
        className="hero-editorial-section"
        style={{
          maxWidth: "100%",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          padding: "8px 5% 0",
          display: "flex",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div style={{ maxWidth: 740 }}>
          {/* Reusable Editorial Badge */}
          <SectionBadge
            items={["Est. 2008", "Ahmedabad, India", "ISO 9001:2015"]}
            lineWidth={32}
            style={{
              marginBottom: 22,
              animation: "heroFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both",
            }}
          />

          <h1
            id="hero-title"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.95rem, 2.5vw, 2.75rem)",
              lineHeight: 1.1,
              fontWeight: 900,
              color: "var(--text-main)",
              letterSpacing: "-0.02em",
              marginBottom: 16,
              textTransform: "uppercase",
              animation: "heroFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.22s both",
            }}
          >
            PRECISION ENGINEERING FOR{" "}
            <span
              style={{
                background: "var(--hero-text-glow)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SLITTING, REWINDING
            </span>{" "}
            &amp; COATING.
          </h1>

          <p
            style={{
              fontSize: "0.98rem",
              color: "var(--text-muted)",
              maxWidth: 640,
              lineHeight: 1.7,
              marginBottom: 28,
              fontWeight: 400,
              animation: "heroFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.38s both",
            }}
          >
            Leading 3 Drive Slitter Rewinder Machine Manufacturer in Ahmedabad, Gujarat, India.
            High-speed automatic slitter rewinder machines for BOPP tape, paper, stretch film
            &amp; aluminium foil converting. Engineered for continuous industrial duty cycles,
            micron-level slit accuracy, and zero web flutter.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              animation: "heroFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.52s both",
            }}
          >
            {/* Primary — split panel: label | arrow tab */}
            <Link
              href="/products"
              aria-label="Explore our products"
              className="hero-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "stretch",
                textDecoration: "none",
                border: "1.5px solid var(--primary)",
                borderRadius: 3,
                overflow: "hidden",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  padding: "11px 22px",
                  background: "var(--primary)",
                  color: "#0A0B0D",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Explore Products
              </span>
              <span
                className="hero-arrow-tab"
                style={{
                  padding: "11px 16px",
                  background: "rgba(245,158,11,0.10)",
                  color: "var(--primary)",
                  borderLeft: "1.5px solid var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            {/* Secondary — plain text link with arrow */}
            <Link
              href="/contact"
              aria-label="Get a quote"
              className="hero-btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Get a Quote
              <span
                className="hero-circle"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1.5px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  fontSize: "0.85rem",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing Benchmarks — open editorial row, no icon boxes */}
      <div
        style={{
          maxWidth: "100%",
          width: "100%",
          margin: "0 auto 2.5%",
          padding: "0 5%",
          position: "relative",
          zIndex: 20,
        }}
      >
        {/* Thin amber top-line accent */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background: "linear-gradient(90deg, var(--primary) 0%, rgba(245,158,11,0.15) 60%, transparent 100%)",
            marginBottom: 20,
            animation: "heroLineGrow 0.6s cubic-bezier(0.22,1,0.36,1) 0.65s both",
            transformOrigin: "left",
          }}
        />

        <div
          className="hero-stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="hero-stat-card"
              style={{
                paddingLeft: 20,
                paddingBottom: 4,
                borderLeft: idx === 0
                  ? "2px solid var(--primary)"
                  : "1px solid var(--border-subtle)",
                animation: `statCardIn 0.6s cubic-bezier(0.22,1,0.36,1) ${0.7 + idx * 0.1}s both`,
              }}
            >

              {/* Counted number */}
              <div
                className="hero-stat-number"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.1rem",
                  fontWeight: 900,
                  color: s.accentValue ? "var(--primary)" : "var(--text-main)",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  letterSpacing: "-0.02em",
                }}
              >
                {counts[idx]}
                <span style={{ fontSize: "1.25rem", color: "var(--primary)", letterSpacing: "0" }}>
                  {s.suffix}
                </span>
              </div>

              {/* Label */}
              <div
                className="hero-stat-label"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "var(--text-main)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: 5,
                }}
              >
                {s.label}
              </div>

              {/* Sub label */}
              <div style={{ fontSize: "0.67rem", color: "var(--text-dim)", marginTop: 2 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
