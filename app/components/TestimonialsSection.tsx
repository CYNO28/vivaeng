"use client";

import React from "react";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Production Manager, Shakti Packers",
    date: "March 2024",
    text: "VIVA Engineering delivered our slitting rewinding machine ahead of schedule. The build quality is exceptional and the after-sales support has been outstanding. Our production efficiency increased by 35%.",
    stars: 5,
    initials: "RK",
    badge: "Verified Converter",
  },
  {
    name: "Sunil Patel",
    role: "Director, Patel Industries",
    date: "January 2024",
    text: "We've been using VIVA's coating machine for 2 years now. Zero breakdowns, consistent performance, and their team is always available for support. Best decision we made for our manufacturing unit.",
    stars: 5,
    initials: "SP",
    badge: "Verified Converter",
  },
  {
    name: "Meera Sharma",
    role: "Operations Head, Sharma Packaging",
    date: "October 2023",
    text: "The slitting rewinding line from VIVA Engineering transformed our production. Precise cuts, minimal waste, and energy efficient. Their installation team was professional and thorough with training.",
    stars: 5,
    initials: "MS",
    badge: "Verified Converter",
  },
  {
    name: "Amit Jain",
    role: "CEO, Jain Enterprises",
    date: "December 2023",
    text: "Outstanding machinery and even better service. VIVA Engineering provided customized solutions for our specific requirements. The ROI exceeded our expectations within the first 8 months.",
    stars: 5,
    initials: "AJ",
    badge: "Verified Converter",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        padding: "100px 5%",
        backgroundColor: "var(--bg-surface)",
        transition: "background-color 0.25s ease",
      }}
    >
      <style>{`
        @media (max-width: 1080px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        <MotionComponent preset="wave-cascade" standalone style={{ textAlign: "center", marginBottom: 60 }}>
          <SectionBadge>CLIENT SATISFACTION</SectionBadge>
          <h2
            id="testimonials-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "var(--text-main)",
              marginBottom: 12,
            }}
          >
            VERIFIED CUSTOMER REVIEWS
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 660, margin: "0 auto", fontSize: "1.05rem" }}>
            Authentic testimonials from converting plant managers and packaging directors
            relying on VIVA slitting rewinding machinery.
          </p>
        </MotionComponent>

        <MotionStaggerGroup
          preset="wave-cascade"
          className="testimonials-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
        >
          {testimonials.map((t, idx) => (
            <MotionComponent key={idx} preset="wave-cascade" style={{ display: "flex" }}>
              <article
                className="industrial-card"
                style={{ padding: "32px 26px", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}
              >
                <div>
                  <div
                    role="img"
                    aria-label={`${t.stars} out of 5 stars`}
                    style={{ display: "flex", gap: 4, color: "#F59E0B", marginBottom: 16 }}
                  >
                    {[...Array(t.stars)].map((_, sIdx) => (
                      <i key={sIdx} className="fa-solid fa-star" style={{ fontSize: "0.85rem" }} aria-hidden="true"></i>
                    ))}
                  </div>

                  <blockquote style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: 24, margin: 0 }}>
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 18, borderTop: "1px solid var(--border-subtle)" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #222630 0%, #16181F 100%)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 style={{ color: "var(--text-main)", fontWeight: 800, fontSize: "0.98rem", margin: 0 }}>{t.name}</h4>
                    <div style={{ color: "var(--text-dim)", fontSize: "0.78rem" }}>{t.role}</div>
                    <div style={{ color: "var(--primary)", fontSize: "0.72rem", fontWeight: 700, marginTop: 2 }}>{t.badge}</div>
                  </div>
                </div>
              </article>
            </MotionComponent>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}
