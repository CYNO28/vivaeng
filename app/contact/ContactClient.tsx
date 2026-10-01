"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionBadge from "../components/SectionBadge";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    substrate: "Paper & Board",
    webWidth: "",
    speed: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-main)", minHeight: "100vh" }}>
      <Navbar activePage="contact" />

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
            items={["Direct Factory Inquiry", "Ahmedabad Works", "24-Hour Proposal Response"]}
            style={{ marginBottom: 18 }}
          />
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 16 }}>
            CONTACT US &amp; <span style={{ color: "var(--primary)" }}>REQUEST A QUOTE</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 960, lineHeight: 1.7 }}>
            Speak directly with our senior application engineers in Ahmedabad. Submit your roll specifications
            below for custom dimensional drawings, cycle speed calculations, and commercial machine pricing.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Details + RFQ Form */}
      <main style={{ maxWidth: "100%", width: "100%", margin: "0 auto", padding: "60px 5% 100px" }}>
        <style>{`
          @media (max-width: 960px) {
            .contact-page-layout {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
          @media (max-width: 600px) {
            .contact-page-form-card {
              padding: 24px 16px !important;
            }
            .contact-form-row {
              grid-template-columns: 1fr !important;
              gap: 14px !important;
            }
          }
        `}</style>
        <div className="contact-page-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 64, alignItems: "flex-start" }}>
          {/* Left Column: Direct Plant Information */}
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 1.9rem)", fontWeight: 900, marginBottom: 16 }}>
              AHMEDABAD MANUFACTURING WORKS
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: 32 }}>
              Our engineering works is conveniently located in the industrial corridor of Bakrol Bujrang, Ahmedabad.
              Plant inspections, trail runs, and trial roll converting sessions are welcomed by appointment.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
              <div className="glass-panel" style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">
                  <i className="fa-solid fa-location-dot" style={{ color: "var(--primary)", fontSize: "1.15rem" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Factory Location</div>
                  <div style={{ color: "var(--text-main)", fontWeight: 700, fontSize: "0.96rem", marginTop: 2, lineHeight: 1.5 }}>
                    Plot No. 21 K P Industrial Estate, Bakrol Bujrang, Ahmedabad, Gujarat 382430, India
                  </div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">
                  <i className="fa-solid fa-phone" style={{ color: "var(--primary)", fontSize: "1.15rem" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Direct Sales &amp; Technical Line</div>
                  <a href="tel:+919265609416" style={{ color: "var(--text-main)", fontWeight: 800, fontSize: "1.1rem", textDecoration: "none", display: "block", marginTop: 2 }}>
                    +91 92656 09416
                  </a>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: 2 }}>Monday – Saturday: 09:00 AM – 07:00 PM IST</div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">
                  <i className="fa-brands fa-whatsapp" style={{ color: "var(--primary)", fontSize: "1.25rem" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Instant WhatsApp Support</div>
                  <a href="https://wa.me/919265609416" target="_blank" rel="noreferrer" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.96rem", textDecoration: "none", display: "block", marginTop: 2 }}>
                    Chat directly with an engineer &rarr;
                  </a>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} aria-hidden="true">
                  <i className="fa-solid fa-envelope" style={{ color: "var(--primary)", fontSize: "1.15rem" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>Official Email</div>
                  <a href="mailto:info@vivaengineering.in" style={{ color: "var(--text-main)", fontWeight: 700, fontSize: "0.96rem", textDecoration: "none", display: "block", marginTop: 2 }}>
                    info@vivaengineering.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom RFQ Quote Form */}
          <div className="industrial-card contact-page-form-card" style={{ padding: "40px" }}>
            {submitted ? (
              <div role="status" style={{ textAlign: "center", padding: "50px 20px" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }} aria-hidden="true">
                  <i className="fa-solid fa-check" style={{ color: "var(--primary)", fontSize: "2rem" }}></i>
                </div>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-main)", marginBottom: 12 }}>
                  Inquiry Received Successfully!
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 24px" }}>
                  Thank you, <strong>{formData.name || "Converter"}</strong>. Our technical engineering division in Ahmedabad has received your specifications and will respond with a preliminary proposal within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ margin: "0 auto" }}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-main)", marginBottom: 6 }}>
                    Request Machine Specifications &amp; Pricing
                  </h3>
                  <p style={{ color: "var(--text-dim)", fontSize: "0.88rem" }}>
                    Fill out the technical requirements below for custom engineering recommendations.
                  </p>
                </div>

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Full Name <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Shah"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Company Name <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Packaging Ltd"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </div>
                </div>

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="contact-phone" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Phone / Mobile Number <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Corporate Email <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. info@apexpack.com"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </div>
                </div>

                <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 16 }}>
                  <div>
                    <label htmlFor="contact-substrate" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Substrate Material <span style={{ color: "var(--primary)" }}>*</span>
                    </label>
                    <select
                      id="contact-substrate"
                      name="substrate"
                      value={formData.substrate}
                      onChange={handleChange}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    >
                      <option value="Paper & Board">Paper &amp; Paperboard (40–450 GSM)</option>
                      <option value="BOPP & Barrier Film">Flexible Film &amp; BOPP (10–150 Micron)</option>
                      <option value="Aluminium Foil">Aluminium Foil (9–80 Micron)</option>
                      <option value="Adhesive Tape">BOPP &amp; Masking Tape</option>
                      <option value="Non-Woven">Non-Woven Fabric &amp; Textiles</option>
                      <option value="Other">Other Custom Substrate</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-width" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                      Web Width (mm)
                    </label>
                    <input
                      id="contact-width"
                      name="webWidth"
                      type="text"
                      value={formData.webWidth}
                      onChange={handleChange}
                      placeholder="e.g. 1300 mm"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none" }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-notes" style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--text-main)", marginBottom: 6 }}>
                    Additional Specifications &amp; Requirements
                  </label>
                  <textarea
                    id="contact-notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Enter maximum roll weight, core chuck diameter (3&quot; or 6&quot;), target speed, or any special tension needs..."
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 6, background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-main)", outline: "none", resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "16px", marginTop: 8 }}
                >
                  <span>Submit Inquiry to Factory Engineers</span>
                  <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
