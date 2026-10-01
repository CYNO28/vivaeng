"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

const categories = [
  {
    id: "slitting-rewinding",
    tag: "SLITTING & REWINDING",
    title: "Slitting Rewinding Applications",
    subtitle: "High-speed slitting for paper, flexible film, BOPP, laminates, and non-woven textiles.",
    image: "/categories/slitting_rewinding.jpg",
    specs: "600–2200mm Width · Up to 600 m/min · Dual Cantilever",
    alt: "VIVA Engineering High Speed Slitting Rewinding Applications Machine",
  },
  {
    id: "center-shaft",
    tag: "CENTER SHAFT",
    title: "Center Shaft Slitting Rewinding",
    subtitle: "Cantilever and duplex shaft systems for uniform tension winding and narrow width coils.",
    image: "/categories/tape_cutting.jpg",
    specs: "Differential Air Shafts · Closed-loop Tension · 12mm Min Slit",
    alt: "VIVA Engineering Center Shaft Slitting Rewinding Equipment",
  },
  {
    id: "roll-to-roll",
    tag: "ROLL TO ROLL",
    title: "Roll to Roll Processing Lines",
    subtitle: "Doctoring rewinding for batch coding, inspection, bidirectional winding & web guiding.",
    image: "/categories/non_woven.jpg",
    specs: "Ultrasonic Edge Guiding · Inkjet Integration · Reversible Run",
    alt: "VIVA Engineering Roll to Roll Doctoring Rewinding Line",
  },
  {
    id: "aluminium-foil",
    tag: "FOIL PROCESSING",
    title: "Aluminium Foil Processing",
    subtitle: "Precision slitting and rewinding for aluminum jumbo rolls, blister foil & household wrap.",
    image: "/categories/foil_rewinding.jpg",
    specs: "Micro-Tension Control · Zero Scratch Rollers · High-tensile Spindles",
    alt: "VIVA Engineering Aluminium Foil Slitting and Rewinding Machinery",
  },
  {
    id: "printing-converting",
    tag: "PRINTING & CONVERTING",
    title: "Printing & Converting Lines",
    subtitle: "Heavy-duty rotogravure and flexographic printing machinery for flexible packaging.",
    image: "/categories/roto_printing.jpg",
    specs: "1–8 Color · Electronic Register Control · High Efficiency Drying",
    alt: "VIVA Engineering Printing and Converting Rotogravure Machine",
  },
  {
    id: "adhesive-tape",
    tag: "TAPE & COATING",
    title: "Adhesive Tape & Coating Lines",
    subtitle: "BOPP tape slitting, masking tape rewinding, and water-based acrylic coating lines.",
    image: "/categories/masking_tape.jpg",
    specs: "Multi-shaft Turret Rewind · Auto Cut & Transfer · Hot Air Dryers",
    alt: "VIVA Engineering Adhesive Tape Cutting and Coating Line",
  },
];

export default function ProductsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = categories[selectedIdx] || categories[0];

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="products"
      aria-labelledby="specialties-heading"
      style={{
        padding: "48px 5%",
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "background-color 0.25s ease",
        scrollMarginTop: "60px",
      }}
    >
      <style>{`
        @keyframes edBarFill2s {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
        .ed-row {
          display: flex;
          align-items: stretch;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-subtle);
          padding: 0;
          text-align: left;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.18s ease;
        }
        .ed-row:first-of-type {
          border-top: 1px solid var(--border-subtle);
        }
        .ed-row:hover {
          background: rgba(245, 158, 11, 0.04);
        }
        .ed-row.ed-active {
          background: rgba(245, 158, 11, 0.07);
        }
        .ed-bar {
          width: 3px;
          flex-shrink: 0;
          background: var(--border-subtle);
          position: relative;
          overflow: hidden;
        }
        .ed-row.ed-active .ed-bar::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--primary);
          transform-origin: top;
          animation: edBarFill2s 2s linear infinite;
        }
        .ed-body {
          padding: 10px 18px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .ed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .ed-tag {
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--primary);
        }
        .ed-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-dim);
          font-weight: 600;
        }
        .ed-title {
          font-family: var(--font-heading);
          font-size: 0.96rem;
          font-weight: 800;
          color: var(--text-dim);
          transition: color 0.18s ease;
          margin: 0;
          line-height: 1.25;
        }
        .ed-row:hover .ed-title {
          color: var(--text-muted);
        }
        .ed-row.ed-active .ed-title {
          color: var(--text-main);
        }
        @media (max-width: 900px) {
          .ed-layout {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>

      <span id="gallery" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} aria-hidden="true" />
      <span id="specialties" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} aria-hidden="true" />

      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        {/* Section Header */}
        <MotionComponent preset="vertical-lift" standalone style={{ textAlign: "center", marginBottom: 30 }}>
          <SectionBadge>MANUFACTURING PORTFOLIO</SectionBadge>
          <h2
            id="specialties-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
              fontWeight: 900,
              color: "var(--text-main)",
              margin: "6px 0 8px",
            }}
          >
            PRECISION ENGINEERED MACHINERY
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: 720,
              margin: "0 auto",
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            Complete portfolio of slitter rewinders, doctoring inspection rewinders, coating lines,
            and aluminium foil converters built to international specifications.
          </p>
        </MotionComponent>

        {/* Minimalist Editorial Split - Non-collapsing Rows & 2s Auto-Rotation */}
        <div
          className="ed-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left Column: Borderless Category Image + Dedicated Readout */}
          <MotionComponent
            preset="vertical-lift"
            standalone
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(240px, 35vw, 400px)",
                borderRadius: 10,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                key={active.id}
                src={active.image}
                alt={active.alt}
                fill
                style={{
                  objectFit: "contain",
                  transition: "opacity 0.25s ease, transform 0.35s ease",
                  filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.45))",
                }}
                priority
              />
            </div>

            {/* Dedicated Focal Readout (Zero Jumping, Smooth Transition) */}
            <div
              style={{
                width: "100%",
                padding: "14px 0 0",
                borderTop: "1px solid var(--border-subtle)",
                marginTop: 6,
                minHeight: 88,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--primary)",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                  }}
                >
                  PORTFOLIO SPECIFICATION · {active.tag}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-dim)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  AUTO-ROTATING · 2s
                </span>
              </div>

              <div
                style={{
                  color: "var(--text-main)",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                {active.title}
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.83rem",
                  lineHeight: 1.45,
                  margin: "0 0 3px",
                }}
              >
                {active.subtitle}
              </p>

              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--primary)",
                  fontWeight: 600,
                }}
              >
                <i className="fa-solid fa-gauge-high" style={{ marginRight: 5 }} aria-hidden="true" />
                {active.specs}
              </div>
            </div>
          </MotionComponent>

          {/* Right Column: Sleek Consistent Rows with 2s Progress Bars */}
          <MotionStaggerGroup
            preset="vertical-lift"
            role="tablist"
            aria-label="Product Categories"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {categories.map((cat, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <MotionComponent key={cat.id} preset="vertical-lift">
                  <button
                    type="button"
                    role="tab"
                    id={`prod-tab-${cat.id}`}
                    aria-selected={isActive}
                    aria-controls={`prod-panel-${cat.id}`}
                    onClick={() => setSelectedIdx(idx)}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={`ed-row ${isActive ? "ed-active" : ""}`}
                  >
                    <div className="ed-bar" />
                    <div className="ed-body">
                      <div className="ed-header">
                        <span className="ed-tag">{cat.tag}</span>
                      </div>
                      <h3 className="ed-title">{cat.title}</h3>
                    </div>
                  </button>
                </MotionComponent>
              );
            })}

            <MotionComponent preset="vertical-lift">
              <div style={{ paddingTop: 8, display: "flex", justifyContent: "flex-end" }}>
                <a
                  href="#contact"
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>Request Technical Specifications</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.7rem" }} aria-hidden="true" />
                </a>
              </div>
            </MotionComponent>
          </MotionStaggerGroup>
        </div>
      </div>
    </section>
  );
}
