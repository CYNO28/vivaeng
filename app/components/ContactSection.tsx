"use client";

import React from "react";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

interface ContactSectionProps {
  quoteSent: boolean;
  onQuoteSent: (sent: boolean) => void;
}

export default function ContactSection({ quoteSent, onQuoteSent }: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        padding: "100px 5%",
        backgroundColor: "var(--bg-surface)",
        transition: "background-color 0.25s ease",
        scrollMarginTop: "60px",
      }}
    >
      {/* Catalog anchor */}
      <span id="catalog" style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }} aria-hidden="true" />

      <style>{`
        @media (max-width: 960px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-form-card {
            padding: 28px 20px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        <div className="contact-layout-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          {/* Left: Contact Info */}
          <MotionComponent preset="magnetic-rise" standalone>
            <SectionBadge>DIRECT ENGINEERING INQUIRY</SectionBadge>
            <h2
              id="contact-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                color: "var(--text-main)",
                marginBottom: 20,
              }}
            >
              REQUEST MACHINE SPECIFICATIONS &amp; QUOTE
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.08rem", lineHeight: 1.75, marginBottom: 32 }}>
              Share your substrate type, web width requirements, and target speeds.
              Our senior engineering team in Ahmedabad will prepare custom GA drawings
              and commercial terms within 24 business hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{ width: 48, height: 48, borderRadius: 10, background: "var(--stat-box-bg)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--stat-box-border)" }}
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-phone" style={{ color: "var(--primary)", fontSize: "1.2rem" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Direct Sales Line</div>
                  <a href="tel:+919265609416" style={{ color: "var(--text-main)", fontWeight: 800, fontSize: "1.05rem", textDecoration: "none" }}>
                    +91 92656 09416
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{ width: 48, height: 48, borderRadius: 10, background: "var(--stat-box-bg)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--stat-box-border)" }}
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-location-dot" style={{ color: "var(--primary)", fontSize: "1.2rem" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Works Address</div>
                  <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.95rem" }}>
                    Plot No. 21 K P Industrial Estate, Bakrol Bujrang, Ahmedabad, Gujarat 382430
                  </div>
                </div>
              </div>
            </div>
          </MotionComponent>

          {/* Right: RFQ Form */}
          <MotionComponent preset="magnetic-rise" standalone className="industrial-card contact-form-card" style={{ padding: "44px 40px" }}>
            {quoteSent ? (
              <div role="status" aria-live="polite" style={{ textAlign: "center", padding: "40px 20px" }}>
                <div
                  style={{ width: 68, height: 68, borderRadius: "50%", background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-circle-check" style={{ color: "var(--primary)", fontSize: "2.2rem" }}></i>
                </div>
                <h3 style={{ color: "var(--text-main)", fontSize: "1.7rem", fontWeight: 800, marginBottom: 10 }}>Inquiry Received!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 24px" }}>
                  Thank you for contacting VIVA Engineering. An engineer from our Ahmedabad facility will review your web requirements and call you shortly.
                </p>
                <button type="button" onClick={() => onQuoteSent(false)} className="btn-secondary" style={{ margin: "0 auto" }}>
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onQuoteSent(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h3 style={{ color: "var(--text-main)", fontSize: "1.45rem", fontWeight: 800, margin: 0 }}>
                    Quick RFQ Consultation
                  </h3>
                  <span style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)" }} />
                    FAST RESPONSE
                  </span>
                </div>

                <MotionStaggerGroup preset="magnetic-rise" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <MotionComponent preset="magnetic-rise">
                    <label htmlFor="rfq-name" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Full Name / Company Name <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="rfq-name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      placeholder="e.g. Ramesh Patel, Sun Packaging Ltd"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </MotionComponent>

                  <MotionComponent preset="magnetic-rise">
                    <label htmlFor="rfq-phone" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Phone / WhatsApp Number <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="rfq-phone"
                      name="phone"
                      type="tel"
                      required
                      aria-required="true"
                      placeholder="e.g. +91 98765 43210"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </MotionComponent>

                  <MotionComponent preset="magnetic-rise">
                    <label htmlFor="rfq-material" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Substrate Material &amp; Width (mm) <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="rfq-material"
                      name="material"
                      type="text"
                      required
                      aria-required="true"
                      placeholder="e.g. 50 Micron BOPP Film, 1300mm Width"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </MotionComponent>

                  <MotionComponent preset="magnetic-rise">
                    <label htmlFor="rfq-notes" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Target Line Speed &amp; Requirement Notes
                    </label>
                    <textarea
                      id="rfq-notes"
                      name="notes"
                      rows={3}
                      placeholder="Specify target rewinding diameter, unwinder shaft type, or delivery timelines..."
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none", resize: "none" }}
                    />
                  </MotionComponent>

                  <MotionComponent preset="magnetic-rise">
                    <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px", marginTop: 4 }}>
                      <span>Submit Inquiry to Factory</span>
                      <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </MotionComponent>
                </MotionStaggerGroup>
              </form>
            )}
          </MotionComponent>
        </div>
      </div>
    </section>
  );
}
