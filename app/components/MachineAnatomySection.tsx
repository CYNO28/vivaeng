"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

const machineFeatures = [
  {
    id: "drives",
    title: "3-Independent AC Vector Drives",
    summary: "Dedicated motors for unwind, top rewind, and bottom rewind with synchronous torque regulation.",
    tag: "DRIVE SYSTEM",
    spec: "Dual AC Servo · Closed-Loop Speed Matching",
  },
  {
    id: "slitting",
    title: "Rotary Shear & Razor Slitting Unit",
    summary: "Micrometer adjustable knife shafts ensuring clean, burr-free edges on paper, films, and foil.",
    tag: "PRECISION CUT",
    spec: "±0.05mm Knife Runout · Quick-Change Shafts",
  },
  {
    id: "tension",
    title: "Closed-Loop Digital Tension Control",
    summary: "Dual pneumatic dancer rolls with electronic loadcell feedback to prevent web stretch and wrinkles.",
    tag: "TENSION ACCURACY",
    spec: "Ultra-Low Tension Capability · ±0.5% Accuracy",
  },
  {
    id: "guiding",
    title: "Ultrasonic Web Edge Guiding (EPC)",
    summary: "High-frequency ultrasonic sensor compensating master roll edge wander within ±0.1mm at 600 m/min.",
    tag: "ALIGNMENT",
    spec: "Dual Actuator Response · 0.1mm Correction Rate",
  },
  {
    id: "plc",
    title: "Siemens / Mitsubishi Smart PLC HMI",
    summary: "Touchscreen console featuring recipe storage, automatic meter countdown stop, and live diagnostics.",
    tag: "AUTOMATION",
    spec: "Industry 4.0 Telemetry · Recipe Quick-Recall",
  },
];

interface MachineAnatomySectionProps {
  selectedFeature: number;
  onFeatureSelect: React.Dispatch<React.SetStateAction<number>> | ((val: any) => void);
}

export default function MachineAnatomySection({ selectedFeature, onFeatureSelect }: MachineAnatomySectionProps) {
  const activeFeature = machineFeatures[selectedFeature] || machineFeatures[0];

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      onFeatureSelect((prev: number) => (Number(prev) + 1) % machineFeatures.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [onFeatureSelect]);

  return (
    <section
      id="anatomy"
      aria-labelledby="anatomy-heading"
      style={{
        padding: "48px 5%",
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        transition: "background-color 0.25s ease",
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
          padding: 13px 18px;
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
          font-size: 0.98rem;
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

      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        {/* Section Header */}
        <MotionComponent preset="perspective-depth" standalone style={{ textAlign: "center", marginBottom: 30 }}>
          <SectionBadge>ENGINEERING ANATOMY</SectionBadge>
          <h2
            id="anatomy-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
              fontWeight: 900,
              color: "var(--text-main)",
              margin: "6px 0 8px",
            }}
          >
            ANATOMY OF A VIVA SLITTER REWINDER
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
            Built in our Ahmedabad works with heavy-duty solid steel side frames, ground shafts,
            and closed-loop European drive systems for vibration-free 600 m/min continuous slitting.
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
          {/* Left Column: Borderless Machine Visual + Dedicated Readout */}
          <MotionComponent
            preset="perspective-depth"
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
                height: "clamp(240px, 35vw, 420px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/machines/flagship_duplex_anatomy.png"
                alt="VIVA Engineering Flagship Duplex Slitter Rewinder Machine showing 3-Drive Architecture, Web Guiding, and Slitting Knives"
                width={950}
                height={600}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 36px rgba(0,0,0,0.5))",
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
                  ACTIVE COMPONENT · {activeFeature.tag}
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
                {activeFeature.title}
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.83rem",
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                {activeFeature.summary}
              </p>
            </div>
          </MotionComponent>

          {/* Right Column: Sleek Consistent Rows with 2s Progress Bars */}
          <MotionStaggerGroup
            preset="perspective-depth"
            role="tablist"
            aria-label="Machine Feature Points"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {machineFeatures.map((f, idx) => {
              const isActive = selectedFeature === idx;
              return (
                <MotionComponent key={f.id} preset="perspective-depth">
                  <button
                    type="button"
                    role="tab"
                    id={`feature-tab-${f.id}`}
                    aria-selected={isActive}
                    aria-controls={`feature-panel-${f.id}`}
                    onClick={() => onFeatureSelect(idx)}
                    onMouseEnter={() => onFeatureSelect(idx)}
                    className={`ed-row ${isActive ? "ed-active" : ""}`}
                  >
                    <div className="ed-bar" />
                    <div className="ed-body">
                      <div className="ed-header">
                        <span className="ed-tag">{f.tag}</span>
                      </div>
                      <h3 className="ed-title">{f.title}</h3>
                    </div>
                  </button>
                </MotionComponent>
              );
            })}
          </MotionStaggerGroup>
        </div>
      </div>
    </section>
  );
}
