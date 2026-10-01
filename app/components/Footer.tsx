import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "70px 5% 30px",
      }}
    >
      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 36px 24px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 50 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image
                src="/viva-mark.png"
                alt="VIVA Engineering Logo"
                width={40}
                height={40}
                style={{ objectFit: "contain", width: 40, height: 40, flexShrink: 0 }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.35rem", color: "#FFFFFF", letterSpacing: "0.04em", lineHeight: 1.1 }}>
                  VIVA ENGINEERING
                </span>
                <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>
                  PRECISION ENGINEERING
                </span>
              </div>
            </div>
            <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: 20 }}>
              Leading manufacturer of high-speed slitter rewinder machines, doctoring inspection lines,
              and aluminium foil converters in Ahmedabad, Gujarat, India.
            </p>
            <div style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: 700 }}>
              ISO 9001:2015 Registered Manufacturing Plant
            </div>
          </div>

          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 18 }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.75)" }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
              <li><Link href="/products" style={{ color: "inherit", textDecoration: "none" }}>Machinery Portfolio</Link></li>
              <li><Link href="/about" style={{ color: "inherit", textDecoration: "none" }}>Ahmedabad Works</Link></li>
              <li><Link href="/gallery" style={{ color: "inherit", textDecoration: "none" }}>Machine Gallery</Link></li>
              <li><Link href="/catalog" style={{ color: "inherit", textDecoration: "none" }}>Specifications &amp; Catalog</Link></li>
              <li><Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>Contact &amp; RFQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 18 }}>
              Converting Substrates
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.75)" }}>
              <li><span style={{ color: "rgba(255, 255, 255, 0.85)" }}>BOPP &amp; Flexible Barrier Films</span></li>
              <li><span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Kraft &amp; Release Liner Paper</span></li>
              <li><span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Pharma Blister Aluminium Foil</span></li>
              <li><span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Self-Adhesive Masking Tape</span></li>
              <li><span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Non-Woven Spunbond Fabrics</span></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 18 }}>
              Plant Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.75)" }}>
              <div>Plot No. 21 K P Industrial Estate, Bakrol Bujrang, Ahmedabad, Gujarat 382430</div>
              <div>Sales: <a href="tel:+919265609416" style={{ color: "#FFFFFF", fontWeight: 700, textDecoration: "none" }}>+91 92656 09416</a></div>
              <div>Factory: 09:00 AM &ndash; 07:00 PM (Mon&ndash;Sat)</div>
              <div>Email: <a href="mailto:info@vivaengineering.in" style={{ color: "var(--primary)", textDecoration: "none" }}>info@vivaengineering.in</a></div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 26, borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.6)" }}>
          <div>
            &copy; {new Date().getFullYear()} VIVA Engineering. All rights reserved. ISO 9001:2015 Registered Manufacturer.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Ahmedabad, Gujarat, India</span>
            <span>&bull;</span>
            <span>Global Export Quality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
