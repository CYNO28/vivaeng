"use client";

import React from "react";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

const substrateApplications = [
  {
    id: "paper",
    name: "Paper & Paperboard",
    thickness: "40 – 450 GSM",
    speed: "Up to 600 m/min",
    applications: "Kraft paper, thermal receipt paper, silicone release liner, filter paper, and packaging board.",
    recommended: "Duplex Cantilever Slitter Rewinder Series",
  },
  {
    id: "film",
    name: "Flexible Film & BOPP",
    thickness: "10 – 150 Micron",
    speed: "Up to 500 m/min",
    applications: "BOPP, PET, PVC, barrier film, stretch film, shrink wrap, and multi-layer laminates.",
    recommended: "Center Shaft Duplex Film Slitter",
  },
  {
    id: "foil",
    name: "Aluminium & Blister Foil",
    thickness: "9 – 80 Micron",
    speed: "Up to 350 m/min",
    applications: "Pharma blister foil, household foil rolls, chocolate wrap, and flexible pouch foil.",
    recommended: "Aluminium Jumbo Roll Slitter Rewinder",
  },
  {
    id: "tape",
    name: "Adhesive & Masking Tape",
    thickness: "25 – 120 Micron",
    speed: "Up to 400 m/min",
    applications: "Packaging BOPP tape, masking tape, double-sided foam tape, and automotive tapes.",
    recommended: "4-Shaft Automatic Turret Slitter Rewinder",
  },
];

interface SubstratesSectionProps {
  selectedSubstrate: number;
  onSubstrateSelect: (idx: number) => void;
}

export default function SubstratesSection({ selectedSubstrate, onSubstrateSelect }: SubstratesSectionProps) {
  return (
    <section
      id="substrates"
      aria-labelledby="substrates-heading"
      style={{
        padding: "90px 5%",
        backgroundColor: "var(--bg-dark)",
        transition: "background-color 0.25s ease",
      }}
    >
      <style>{`
        @media (max-width: 960px) {
          .substrates-card-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 540px) {
          .substrates-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        <MotionComponent preset="slide-glide" standalone style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionBadge>SUBSTRATE ENGINEERING</SectionBadge>
          <h2
            id="substrates-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.8rem",
              fontWeight: 900,
              color: "var(--text-main)",
              marginBottom: 14,
            }}
          >
            ENGINEERED FOR YOUR MATERIAL
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 680, margin: "0 auto", fontSize: "1.05rem" }}>
            Select your converting substrate below to view verified working gauges, recommended line speeds,
            and optimal slitter rewinder machine configurations.
          </p>
        </MotionComponent>

        {/* Substrate Tabs */}
        <MotionStaggerGroup
          preset="slide-glide"
          role="tablist"
          aria-label="Substrate Material Categories"
          style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 40, flexWrap: "wrap" }}
        >
          {substrateApplications.map((sub, idx) => {
            const isSelected = selectedSubstrate === idx;
            return (
              <MotionComponent key={sub.id} preset="slide-glide">
                <button
                  type="button"
                  role="tab"
                  id={`substrate-tab-${sub.id}`}
                  aria-selected={isSelected}
                  aria-controls={`substrate-panel-${sub.id}`}
                  onClick={() => onSubstrateSelect(idx)}
                  style={{
                    padding: "12px 26px",
                    borderRadius: 6,
                    background: isSelected ? "var(--bg-card)" : "transparent",
                    border: isSelected ? "1px solid var(--primary)" : "1px solid var(--border-subtle)",
                    color: isSelected ? "var(--primary)" : "var(--text-muted)",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>{sub.name}</span>
                </button>
              </MotionComponent>
            );
          })}
        </MotionStaggerGroup>

        {/* Active Substrate Technical Card */}
        {substrateApplications.map((sub, idx) => {
          if (selectedSubstrate !== idx) return null;
          return (
            <MotionComponent
              key={sub.id}
              preset="slide-glide"
              standalone
            >
              <div
                id={`substrate-panel-${sub.id}`}
                role="tabpanel"
                aria-labelledby={`substrate-tab-${sub.id}`}
                className="industrial-card"
                style={{ maxWidth: "100%", width: "100%", margin: "0 auto", padding: "clamp(24px, 4vw, 44px) clamp(18px, 4vw, 48px)" }}
              >
                <div className="substrates-card-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 48, alignItems: "center" }}>
                  <div>
                    <SectionBadge lineWidth={22} style={{ marginBottom: 14 }}>COMPATIBLE CONFIGURATION</SectionBadge>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 900, color: "var(--text-main)", marginBottom: 16 }}>
                      {sub.name}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 28 }}>
                      {sub.applications}
                    </p>

                    <div className="substrates-specs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      <div style={{ padding: "16px", borderRadius: 8, background: "var(--bg-dark)", border: "1px solid var(--border-subtle)" }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                          Working Thickness
                        </div>
                        <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", marginTop: 4 }}>
                          {sub.thickness}
                        </div>
                      </div>
                      <div style={{ padding: "16px", borderRadius: 8, background: "var(--bg-dark)", border: "1px solid var(--border-subtle)" }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                          Maximum Line Speed
                        </div>
                        <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--primary)", marginTop: 4 }}>
                          {sub.speed}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: "var(--bg-dark)", padding: "32px", borderRadius: 12, border: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
                      Recommended Machine Model
                    </div>
                    <strong style={{ color: "var(--text-main)", fontSize: "1.1rem", display: "block", marginBottom: 16 }}>
                      {sub.recommended}
                    </strong>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 24 }}>
                      Equipped with custom unwind pneumatic brake, differential air shafts, and micrometer-adjustable knives.
                    </div>
                    <a href="#contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      <span>Inquire About This Machine</span>
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </MotionComponent>
          );
        })}
      </div>
    </section>
  );
}
