"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionBadge from "../components/SectionBadge";

const catalogDownloads = [
  {
    id: "full-catalog",
    title: "VIVA Engineering Master Machine Catalog 2024–2025",
    description: "Complete 28-page comprehensive guide covering our full converting equipment program, technical parameters, and factory capabilities.",
    fileSize: "8.4 MB &bull; PDF Document",
    image: "/categories/slitting_rewinding.jpg",
    badge: "COMPLETE PORTFOLIO",
  },
  {
    id: "3-drive-spec",
    title: "3 Drive Duplex Cantilever Slitter Rewinder Spec Sheet",
    description: "Detailed GA layout drawing, 3 independent AC vector drive ratings, knife geometries, and dancer tension specifications.",
    fileSize: "2.1 MB &bull; PDF Document",
    image: "/machines/flagship_duplex_anatomy.png",
    badge: "SERIES // 01",
  },
  {
    id: "film-spec",
    title: "Film Slitting Rewinding Machine Technical Sheet",
    description: "Ball-type friction ring diagrams, differential rewind calculations, and razor-in-groove slitting arrangements for flexible barrier films.",
    fileSize: "1.9 MB &bull; PDF Document",
    image: "/categories/tape_cutting.jpg",
    badge: "SERIES // 02",
  },
  {
    id: "paper-spec",
    title: "Jumbo Paper Roll Slitter Rewinder Data Sheet",
    description: "Heavy-duty rotary shear knife assembly, 40-450 GSM caliper parameters, and hydraulic parent roll pickup dimensions.",
    fileSize: "2.4 MB &bull; PDF Document",
    image: "/categories/slitting_rewinding.jpg",
    badge: "SERIES // 03",
  },
  {
    id: "foil-spec",
    title: "Aluminium Foil Rewinding Machine Technical Guide",
    description: "Micro-pneumatic dancer tension specs, zero-scratch mirror roller finishes, and blister foil converting recommendations.",
    fileSize: "2.3 MB &bull; PDF Document",
    image: "/categories/foil_rewinding.jpg",
    badge: "SERIES // 04",
  },
  {
    id: "tape-spec",
    title: "BOPP Tape Cutting & Core Cutting Program Brochure",
    description: "4-shaft automatic turret exchange cycle times, core cutting parameters, and adhesive coating application methods.",
    fileSize: "3.2 MB &bull; PDF Document",
    image: "/categories/masking_tape.jpg",
    badge: "SERIES // 05",
  },
  {
    id: "masking-spec",
    title: "Masking Tape Rewinder & Slicer Machine Specifications",
    description: "5 HP heavy-duty motor rewinder schematics and 2 HP circular knife log slicer dimensional drawings.",
    fileSize: "1.8 MB &bull; PDF Document",
    image: "/categories/masking_tape.jpg",
    badge: "SERIES // 06",
  },
  {
    id: "non-woven-spec",
    title: "Non-Woven Fabric Slitter Rewinder Specification Sheet",
    description: "Spunbond, meltblown, and medical fabric converting parameters with pneumatic shear blade drawings.",
    fileSize: "2.0 MB &bull; PDF Document",
    image: "/categories/non_woven.jpg",
    badge: "SERIES // 07",
  },
];

export default function CatalogClient() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [requestSent, setRequestSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleDownload = (id: string, title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  const handleInstantRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
  };

  return (
    <div style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-main)", minHeight: "100vh" }}>
      <Navbar activePage="catalog" />

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
            items={["Technical Documentation", "PDF Downloads", "Engineering GA Layouts"]}
            style={{ marginBottom: 18 }}
          />
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 16 }}>
            MACHINE CATALOGS &amp; <span style={{ color: "var(--primary)" }}>SPECIFICATION SHEETS</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 960, lineHeight: 1.7 }}>
            Download comprehensive machine specification PDF brochures, general arrangement (GA) dimensional layouts,
            and electrical power requirements for VIVA Engineering converting machinery.
          </p>
        </div>
      </section>

      {/* Download Alert Toast */}
      {downloadSuccess && (
        <div
          role="status"
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            background: "var(--bg-card)",
            border: "1px solid var(--primary)",
            padding: "16px 24px",
            borderRadius: 8,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <i className="fa-solid fa-circle-check" style={{ color: "var(--primary)", fontSize: "1.2rem" }}></i>
          <div>
            <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "var(--text-main)" }}>Catalog Download Initiated</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>{downloadSuccess}</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main style={{ maxWidth: "100%", width: "100%", margin: "0 auto", padding: "60px 5% 100px" }}>
        <style>{`
          @media (max-width: 900px) {
            .catalog-dispatch-card {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
              padding: 28px 20px !important;
            }
          }
          @media (max-width: 500px) {
            .catalog-dispatch-form {
              flex-direction: column !important;
            }
            .catalog-dispatch-form button {
              width: 100% !important;
              justify-content: center !important;
            }
          }
        `}</style>

        {/* Instant Digital Delivery Card */}
        <section
          className="industrial-card catalog-dispatch-card"
          style={{
            padding: "40px",
            marginBottom: 60,
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
            alignItems: "center",
            background: "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-card) 100%)",
          }}
        >
          <div>
            <SectionBadge lineWidth={22} style={{ marginBottom: 12 }}>
              INSTANT DISPATCH
            </SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 1.9rem)", fontWeight: 900, marginBottom: 10 }}>
              Receive Complete Catalog on Email or WhatsApp
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.65 }}>
              Enter your corporate email or mobile number to receive our full high-resolution machinery catalog
              with dimensional drawings and pricing guidelines immediately.
            </p>
          </div>

          <div>
            {requestSent ? (
              <div style={{ background: "var(--stat-box-bg)", border: "1px solid var(--stat-box-border)", borderRadius: 8, padding: "20px", textAlign: "center" }}>
                <i className="fa-solid fa-circle-check" style={{ color: "var(--primary)", fontSize: "1.8rem", marginBottom: 8 }}></i>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--text-main)" }}>Catalog Dispatched!</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginTop: 4 }}>
                  Check your inbox at <strong>{email}</strong> for your download link.
                </div>
              </div>
            ) : (
              <form onSubmit={handleInstantRequest} className="catalog-dispatch-form" style={{ display: "flex", gap: 10 }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "14px 18px",
                    borderRadius: 6,
                    background: "var(--input-bg)",
                    border: "1px solid var(--input-border)",
                    color: "var(--text-main)",
                    outline: "none",
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: "14px 24px", flexShrink: 0 }}>
                  <span>Send PDF</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Brochure Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 30 }}>
          {catalogDownloads.map((doc) => (
            <article
              key={doc.id}
              className="industrial-card"
              style={{ padding: "clamp(20px, 3vw, 28px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.12em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 14, height: 2, background: "var(--primary)" }} />
                    {doc.badge}
                  </span>
                  <span style={{ fontSize: "0.74rem", color: "var(--text-dim)" }} dangerouslySetInnerHTML={{ __html: doc.fileSize }} />
                </div>

                <div style={{ position: "relative", height: 180, width: "100%", borderRadius: 8, overflow: "hidden", marginBottom: 20, backgroundColor: "#000000" }}>
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", marginBottom: 8, lineHeight: 1.35 }}>
                  {doc.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 24 }}>
                  {doc.description}
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, paddingTop: 16, borderTop: "1px solid var(--border-subtle)" }}>
                <button
                  type="button"
                  onClick={() => handleDownload(doc.id, doc.title)}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", padding: "10px 16px", fontSize: "0.86rem" }}
                >
                  <i className="fa-solid fa-download" aria-hidden="true"></i>
                  <span>Download PDF</span>
                </button>

                <Link
                  href="/contact"
                  className="btn-secondary"
                  style={{ padding: "10px 16px", fontSize: "0.86rem" }}
                >
                  <span>Inquire</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
