"use client";

import React from "react";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

const faqs = [
  {
    q: "What is a slitter rewinder machine?",
    a: "A slitter rewinder machine is industrial equipment that unrolls wide master jumbo rolls of material (such as BOPP film, kraft paper, aluminium foil, or tape), slits the continuous web into multiple narrower strips using rotary shear or razor blades, and rewinds them onto individual cores under strictly controlled tension to avoid web distortion, wrinkling, or gauge unevenness.",
  },
  {
    q: "How does a 3-drive slitting rewinding machine work?",
    a: "A 3-drive slitting rewinder features three independent electric AC vector motors: one motor for the unwind brake tension, and two separate motors driving the upper and lower differential rewind shafts. Combined with dancer feedback and electronic loadcells, this 3-motor architecture ensures synchronized speed matching, eliminating web stretching on heat-sensitive barrier films and maintaining uniform roll density across variable slit widths.",
  },
  {
    q: "Who manufactures slitter rewinder machines in Ahmedabad?",
    a: "Viva Engineering is a premier slitter rewinder machine manufacturer based in Ahmedabad, Gujarat, India (Plot No. 21 K P Industrial Estate, Bakrol Bujrang). With 16+ years of specialized engineering experience and 500+ machine installations worldwide, Viva Engineering manufactures heavy-duty duplex cantilever slitters, paper slitters, film slitters, and foil rewinders.",
  },
  {
    q: "What is the HSN code for a slitting and rewinding machine?",
    a: "HSN/HS classifications for converting machinery fall under Chapter 84 of the Customs Tariff: HSN 8441 (such as 8441.10 for paper and paperboard slitting & cutting machines); HSN 8477 (such as 8477.80 for plastics and plastic film slitting equipment); and HSN 8420 / 8443 for coating and rotogravure printing machinery. Viva Engineering provides complete commercial and export documentation tailored to each machine.",
  },
  {
    q: "What materials can a Viva Engineering slitter rewinder convert?",
    a: "Viva Engineering machines process a wide spectrum of flexible packaging and industrial substrates: plastic films (BOPP, PET, CPP, LDPE, HDPE, PVC, metallized barrier film 10–150 Micron); paper and board (kraft paper, thermal paper, duplex board, art paper 40–450 GSM); aluminium foil (bare, pharmaceutical blister, and confectionery foil 9–80 Micron); BOPP and masking tapes; and non-woven spunbond/meltblown fabrics.",
  },
  {
    q: "What is the price of a slitter rewinder machine in India?",
    a: "Slitter rewinder machine prices in India typically vary depending on operating web width (600mm to 2200mm), maximum line speed (up to 600 m/min), drive architecture (3-drive AC vector vs. standard mechanical), and custom automation features (such as ultrasonic EPC web guiding and automatic turret exchange). Contact Viva Engineering (+91 92656 09416) for custom factory GA drawings and commercial pricing proposals within 24 business hours.",
  },
  {
    q: "Can I get a slitter rewinder machine specification PDF or layout drawing?",
    a: "Yes, Viva Engineering provides comprehensive specification sheets, dimensional GA drawings, electrical power ratings, and full-color machine catalogs in PDF format. You can download them directly from the Viva Engineering catalog page or request them via WhatsApp at +91 92656 09416.",
  },
];

interface FaqSectionProps {
  activeFaq: number | null;
  onFaqToggle: (idx: number | null) => void;
}

export default function FaqSection({ activeFaq, onFaqToggle }: FaqSectionProps) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        padding: "90px 5%",
        backgroundColor: "var(--bg-dark)",
        transition: "background-color 0.25s ease",
      }}
    >
      <style>{`
        @media (max-width: 600px) {
          .faq-button {
            padding: 16px 18px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <MotionComponent preset="focus-unfold" standalone style={{ textAlign: "center", marginBottom: 54 }}>
          <SectionBadge>FREQUENTLY ASKED QUESTIONS</SectionBadge>
          <h2
            id="faq-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              color: "var(--text-main)",
              marginBottom: 12,
            }}
          >
            FREQUENTLY ASKED TECHNICAL QUESTIONS
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Everything you need to know about slitter rewinder selection, knife configurations, and HSN codes.
          </p>
        </MotionComponent>

        <MotionStaggerGroup
          preset="focus-unfold"
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {faqs.map((f, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <MotionComponent key={idx} preset="focus-unfold">
                <div className="industrial-card" style={{ overflow: "hidden" }}>
                  <button
                    type="button"
                    id={`faq-question-${idx}`}
                    className="faq-button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    onClick={() => onFaqToggle(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "22px 28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      color: "inherit",
                      textAlign: "left",
                      gap: 16,
                    }}
                  >
                    <h3 style={{ fontSize: "1.08rem", fontWeight: 800, color: isOpen ? "var(--primary)" : "var(--text-main)", margin: 0 }}>
                      {f.q}
                    </h3>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: isOpen ? "var(--primary)" : "var(--stat-box-bg)",
                        color: isOpen ? "var(--btn-primary-color)" : "var(--primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                      aria-hidden="true"
                    >
                      <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      style={{ padding: "0 28px 24px", color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.7 }}
                    >
                      {f.a}
                    </div>
                  )}
                </div>
              </MotionComponent>
            );
          })}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}
