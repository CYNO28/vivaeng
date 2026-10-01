"use client";

import React from "react";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        padding: "100px 5%",
        backgroundColor: "var(--bg-dark)",
        transition: "background-color 0.25s ease",
      }}
    >
      <style>{`
        @media (max-width: 960px) {
          .about-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 500px) {
          .about-plant-metrics {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        <div className="about-layout-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <MotionComponent preset="diagonal-float" standalone>
            <SectionBadge>AHMEDABAD WORKS</SectionBadge>
            <h2
              id="about-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "var(--text-main)",
                lineHeight: 1.15,
                marginBottom: 22,
              }}
            >
              ENGINEERING LEADERSHIP ROOTED IN AHMEDABAD, GUJARAT.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.08rem", lineHeight: 1.75, marginBottom: 24 }}>
              Since 2008, VIVA Engineering has manufactured heavy-duty converting machinery
              from our manufacturing facility in K P Industrial Estate, Bakrol Bujrang, Ahmedabad.
              With over 16+ years of dedicated expertise, we engineer turnkey slitting rewinding solutions
              for converters across India and international markets.
            </p>

            <MotionStaggerGroup
              preset="diagonal-float"
              style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}
            >
              {[
                {
                  title: "In-House Design and Heavy Fabrication",
                  desc: "Solid plate frames machined in-house for vibration-free continuous 24/7 converting.",
                },
                {
                  title: "Custom-Tailored Web Width & Core Diameter Chucks",
                  desc: "Custom 3-inch and 6-inch differential friction rings and cantilever air chucks.",
                },
                {
                  title: "Dedicated After-Sales & Lifetime Spare Parts",
                  desc: "Direct factory dispatch for rotary blades, circular knives, loadcells, and dancer sensors.",
                },
              ].map((item, idx) => (
                <MotionComponent key={idx} preset="diagonal-float">
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: "var(--stat-box-bg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                      aria-hidden="true"
                    >
                      <i className="fa-solid fa-check" style={{ color: "var(--primary)", fontSize: "0.85rem" }}></i>
                    </div>
                    <div>
                      <strong style={{ color: "var(--text-main)", fontSize: "0.98rem" }}>{item.title}</strong>
                      <div style={{ color: "var(--text-dim)", fontSize: "0.88rem" }}>{item.desc}</div>
                    </div>
                  </div>
                </MotionComponent>
              ))}
            </MotionStaggerGroup>

            <div style={{ display: "flex", gap: 16 }}>
              <a href="#contact" className="btn-primary" aria-label="Schedule a visit to Ahmedabad works">
                <span>Schedule Plant Visit</span>
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              </a>
            </div>
          </MotionComponent>

          {/* Plant Stats & Certification Box */}
          <MotionComponent preset="diagonal-float" standalone className="glass-panel" style={{ padding: "48px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 12,
                  background: "var(--btn-primary-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 15px 40px rgba(180, 83, 9, 0.3)",
                }}
                aria-hidden="true"
              >
                <i className="fa-solid fa-award" style={{ color: "var(--btn-primary-color)", fontSize: "1.8rem" }}></i>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", margin: 0 }}>
                  ISO 9001:2015 REGISTERED
                </h3>
                <div style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700 }}>Ahmedabad Works Standard</div>
              </div>
            </div>

            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 30 }}>
              Every slitter rewinder undergoes rigorous 72-hour trial runs and dynamic web balancing
              before factory acceptance testing (FAT) and dispatch to clients worldwide.
            </div>

            <div className="about-plant-metrics" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border-subtle)" }}>
              <div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                  Facility Location
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", marginTop: 2 }}>
                  Bakrol Bujrang, Ahmedabad
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                  Active Support
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary)", marginTop: 2 }}>
                  24/7 Engineers On-Call
                </div>
              </div>
            </div>
          </MotionComponent>
        </div>
      </div>
    </section>
  );
}
