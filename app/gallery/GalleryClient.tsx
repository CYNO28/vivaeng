"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionBadge from "../components/SectionBadge";

const galleryItems = [
  {
    id: "gal-1",
    title: "Flagship 3-Drive Duplex Cantilever Slitter Anatomy",
    category: "Slitters",
    image: "/machines/flagship_duplex_anatomy.png",
    caption: "Full digital engineering twin showing dual cantilever rewind shafts, 3-drive vector motors, and closed-loop dancer arms.",
    badge: "ENGINEERING TWIN",
  },
  {
    id: "gal-2",
    title: "High-Speed Film & Paper Slitter Rewinder in Production",
    category: "Slitters",
    image: "/categories/slitting_rewinding.jpg",
    caption: "Heavy-duty paper and barrier film slitter operating at 600 m/min with automatic web tension regulation.",
    badge: "PLANT RUN",
  },
  {
    id: "gal-3",
    title: "BOPP Adhesive Tape Cutting & Core Cutting Line",
    category: "Tape & Coating",
    image: "/categories/tape_cutting.jpg",
    caption: "High-output tape slitter with individual differential air shafts and core exchange system.",
    badge: "TAPE CONVERTING",
  },
  {
    id: "gal-4",
    title: "Non-Woven Fabric & Doctoring Processing Line",
    category: "Inspection",
    image: "/categories/non_woven.jpg",
    caption: "Doctoring rewinder with integrated ultrasonic edge guiding and electronic defect inspection console.",
    badge: "DOCTORING LINE",
  },
  {
    id: "gal-5",
    title: "Aluminium Foil Rewinding Machine (Blister & Household)",
    category: "Foil",
    image: "/categories/foil_rewinding.jpg",
    caption: "Specialized converting equipment for blister and chocolate wrap foil with mirror-polished guide rollers.",
    badge: "FOIL SLITTER",
  },
  {
    id: "gal-6",
    title: "Multicolor Rotogravure Converting Press",
    category: "Printing",
    image: "/categories/roto_printing.jpg",
    caption: "Heavy cast-iron frame printing station for multi-color flexible packaging substrates.",
    badge: "PRINTING PRESS",
  },
  {
    id: "gal-7",
    title: "Masking Tape Rewinding Machine & Slicer Setup",
    category: "Tape & Coating",
    image: "/categories/masking_tape.jpg",
    caption: "5 HP variable speed masking tape rewinder and precision circular blade slicer line.",
    badge: "COATING LINE",
  },
];

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

  const categories = ["All", "Slitters", "Inspection", "Foil", "Tape & Coating", "Printing"];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-main)", minHeight: "100vh" }}>
      <Navbar activePage="gallery" />

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
            items={["Visual Showcase", "Ahmedabad Works", "Machinery Photos"]}
            style={{ marginBottom: 18 }}
          />
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 16 }}>
            MACHINE PHOTOGRAPHY &amp; <span style={{ color: "var(--primary)" }}>MEDIA GALLERY</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 960, lineHeight: 1.7 }}>
            Authentic photography and visual breakdown of VIVA Engineering converting machines,
            rotary knife shafts, web guiding assemblies, and factory installations across India.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <main style={{ maxWidth: "100%", width: "100%", margin: "0 auto", padding: "50px 5% 100px" }}>
        <style>{`
          @media (max-width: 600px) {
            .gallery-lightbox-footer {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 16px !important;
              padding: 16px !important;
            }
            .gallery-lightbox-footer button {
              width: 100% !important;
              justify-content: center !important;
            }
          }
        `}</style>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 6,
                  border: isActive ? "1px solid var(--primary)" : "1px solid var(--border-subtle)",
                  backgroundColor: isActive ? "var(--badge-bg)" : "var(--bg-surface)",
                  color: isActive ? "var(--primary)" : "var(--text-muted)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 30 }}>
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="industrial-card"
              style={{ display: "flex", flexDirection: "column", cursor: "pointer", overflow: "hidden" }}
              onClick={() => setSelectedItem(item)}
            >
              <div style={{ position: "relative", height: 260, width: "100%", overflow: "hidden", backgroundColor: "#000000" }}>
                <Image
                  src={item.image}
                  alt={`${item.title} - Viva Engineering Ahmedabad`}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="gallery-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(10, 11, 13, 0.8)", backdropFilter: "blur(8px)", border: "1px solid var(--border-subtle)", borderRadius: 4, padding: "4px 10px", fontSize: "0.72rem", fontWeight: 800, color: "var(--primary)" }}>
                  {item.badge}
                </div>
              </div>

              <div style={{ padding: "20px" }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", marginBottom: 6 }}>
                  {item.category}
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-main)", marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.86rem", color: "var(--text-dim)", lineHeight: 1.55 }}>
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal Lightbox for item preview */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(12px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(900px, 94vw)",
              width: "100%",
              backgroundColor: "var(--bg-card)",
              borderRadius: 12,
              border: "1px solid var(--border-subtle)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", height: "min(500px, 50vh)", width: "100%" }}>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                style={{ objectFit: "contain", backgroundColor: "#0A0B0D" }}
              />
            </div>
            <div className="gallery-lightbox-footer" style={{ padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20 }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 16, height: 2, background: "var(--primary)", display: "inline-block" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{selectedItem.category}</span>
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-main)", marginTop: 6, marginBottom: 8 }}>
                  {selectedItem.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {selectedItem.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="btn-secondary"
                style={{ padding: "8px 16px" }}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
