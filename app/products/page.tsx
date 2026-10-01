import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionBadge from "../components/SectionBadge";

export const metadata: Metadata = {
  title: "Slitter Rewinder Machinery Portfolio | 3 Drive, Paper, Film & Foil Slitters",
  description:
    "Explore VIVA Engineering's converting machinery portfolio: 3 Drive Duplex Cantilever Slitters, Paper Slitting Rewinders, Film Slitters, Aluminium Foil Rewinders, BOPP Tape Cutters, and Masking Tape Slicers manufactured in Ahmedabad, Gujarat, India.",
  keywords: [
    "3 Drive Slitting Rewinding Machine",
    "Paper Slitting Rewinding Machine",
    "Film Slitting Rewinding Machine",
    "Aluminium Foil Rewinding Machine",
    "BOPP Tape Cutting Machine",
    "Masking Tape Rewinding Machine",
    "Non-Woven Slitting Rewinding Machine",
    "Rotogravure Printing Machine",
    "Slitter Rewinder Machine Manufacturer Ahmedabad",
    "Cantilever Slitter Rewinder Machine",
    "Jumbo Roll Converting Machine",
    "Slitter Rewinder Machine Price in India",
  ],
  alternates: {
    canonical: "https://vivaengineering.in/products",
  },
  openGraph: {
    title: "Converting & Slitter Rewinder Machinery | VIVA Engineering",
    description:
      "Heavy-duty 3-drive slitter rewinders, film slitters, aluminium foil converters, and paper slitting machines engineered in Ahmedabad, India.",
    url: "https://vivaengineering.in/products",
    images: [{ url: "/categories/slitting_rewinding.jpg", width: 1200, height: 630, alt: "VIVA Engineering Machinery Program" }],
  },
};

const productsList = [
  {
    id: "3-drive-slitter",
    code: "SERIES // 01",
    title: "3 Drive Slitting Rewinding Machine (Duplex Cantilever)",
    subtitle: "Flagship 3-motor converting machine with dedicated AC vector drives for unwinder, top rewind, and bottom rewind.",
    image: "/categories/slitting_rewinding.jpg",
    specs: [
      { label: "Drive Architecture", value: "3-Independent AC Vector Drives" },
      { label: "Working Web Width", value: "600 mm – 2200 mm" },
      { label: "Max Operating Speed", value: "Up to 600 m/min" },
      { label: "Tension Accuracy", value: "±0.5% Closed-Loop Dancer Feedback" },
      { label: "Web Edge Guiding", value: "Ultrasonic EPC (±0.1 mm Alignment)" },
      { label: "Slitting Systems", value: "Rotary Shear & Razor in Groove" },
    ],
    features: [
      "Three independent drive motors ensure perfect tension balance and roll density without web stretch",
      "Heavy-duty solid steel side frames machined in-house for zero-vibration continuous operation",
      "Cantilever duplex rewind shafts for rapid roll unloading within 60 seconds",
      "Siemens / Mitsubishi Smart PLC touchscreen HMI with recipe memory storage and auto-stop counter",
    ],
    targetMaterials: "BOPP, PET, CPP, LDPE, Paper, Aluminium Foil, Laminates, Non-Woven",
  },
  {
    id: "film-slitter",
    code: "SERIES // 02",
    title: "Film Slitting Rewinding Machine (BOPP, PET, CPP, LDPE)",
    subtitle: "Precision roll-to-roll converting machine for thin plastic films, barrier packaging, and slippery substrates.",
    image: "/categories/tape_cutting.jpg",
    specs: [
      { label: "Film Thickness Range", value: "10 Micron – 150 Micron" },
      { label: "Working Web Width", value: "500 mm – 1800 mm" },
      { label: "Max Operating Speed", value: "Up to 500 m/min" },
      { label: "Rewind Shaft Type", value: "Ball-Type Differential Friction Rings" },
      { label: "Trim Extraction", value: "Dual Air Trim Blowers with SS Ducting" },
      { label: "Core Holding", value: "3\" and 6\" Interchangeable Air Shafts" },
    ],
    features: [
      "Individual friction slip rings compensate for cross-web gauge variations across multiple narrow slit rolls",
      "Dual pneumatic dancer rolls ensure ultra-low tension sensitivity for delicate stretch films",
      "Razor-in-groove slitting arrangement produces mirror-smooth edges without polymer dust or fraying",
      "Automatic roll diameter calculation and digital taper tension control curves",
    ],
    targetMaterials: "BOPP, PET, CPP, LDPE, HDPE, PVC, Metallized Barrier Films",
  },
  {
    id: "paper-slitter",
    code: "SERIES // 03",
    title: "Paper Slitting Rewinding Machine (Jumbo Roll Converting)",
    subtitle: "Heavy-duty paper slitter rewinder for kraft paper, thermal paper rolls, duplex board, and paperboard.",
    image: "/categories/slitting_rewinding.jpg",
    specs: [
      { label: "Substrate Caliper", value: "40 GSM – 450 GSM Paper & Board" },
      { label: "Working Web Width", value: "600 mm – 2000 mm" },
      { label: "Max Unwind Diameter", value: "1200 mm / 1500 mm Jumbo Parent Roll" },
      { label: "Max Rewind Diameter", value: "800 mm – 1000 mm Finished Reel" },
      { label: "Blade System", value: "Heavy-Duty Circular Rotary Shear Knives" },
      { label: "Braking System", value: "Pneumatic Multi-Disc Air Brake / AC Motor" },
    ],
    features: [
      "High-torque rewind system designed for dense paper reel formation without telescoping",
      "Hydraulic parent roll pick-up arms for effortless loading of heavy master jumbo rolls from factory floor",
      "Rotary shear knife assembly with micrometer positioning for quick strip width changes",
      "Dynamic electronic balancing of all steel rollers at up to 800 m/min eliminating web flutter",
    ],
    targetMaterials: "Kraft Paper, Thermal Paper, Duplex Board, Art Paper, Coated Paperboard",
  },
  {
    id: "aluminium-foil",
    code: "SERIES // 04",
    title: "Aluminium Foil Rewinding Machine (Household & Pharma Blister)",
    subtitle: "Specialized converting equipment for bare aluminium foil, pharmaceutical blister foil, and confectionery wraps.",
    image: "/categories/foil_rewinding.jpg",
    specs: [
      { label: "Foil Caliper Range", value: "9 Micron – 80 Micron Foil" },
      { label: "Working Web Width", value: "300 mm – 1200 mm" },
      { label: "Max Operating Speed", value: "Up to 350 m/min" },
      { label: "Roller Construction", value: "Mirror-Polished Hard Chrome & Polyurethane" },
      { label: "Tension Sensitivity", value: "Ultra-Light Micro-Pneumatic Low-Friction Dancer" },
      { label: "Edge Quality", value: "Burr-Free Micro-Shear Cut" },
    ],
    features: [
      "Zero-scratch anodized guide rollers prevent pinholes and surface abrasions on ultra-thin foil",
      "Multi-zone closed-loop tension regulation prevents web tears during high-speed acceleration",
      "Ideal for pharmaceutical packaging, cold-form blister foil, and household food packaging rolls",
      "Precision knife holders with micrometric depth adjustment for clean separation without edge curl",
    ],
    targetMaterials: "Pharmaceutical Blister Foil, Household Wrapping Foil, Confectionery Foil",
  },
  {
    id: "bopp-tape",
    code: "SERIES // 05",
    title: "BOPP Tape Cutting & Core Cutting Machine Combo",
    subtitle: "Integrated manufacturing setup for adhesive packaging tape slitting and paper core cutting.",
    image: "/categories/masking_tape.jpg",
    specs: [
      { label: "Tape Width Options", value: "Standard 24mm, 48mm, 72mm (Custom Spacers)" },
      { label: "Working Web Width", value: "500 mm – 1300 mm" },
      { label: "Turret Rewind", value: "4-Shaft Automatic Turret Exchange" },
      { label: "Cycle Speed", value: "Continuous Non-Stop Auto Cut & Transfer" },
      { label: "Core Cutting", value: "Integrated Fiber & Paper Core Slicer" },
      { label: "Core Diameters", value: "1-inch & 3-inch Standard Cores" },
    ],
    features: [
      "4-shaft automatic turret roll swap maximizes hourly throughput for carton sealing tape production",
      "Integrated paper core cutting station prepares accurate core lengths simultaneously",
      "Crown-shaped rubber spreader rolls eliminate web creases and bubble entrapment",
      "Uniform roll tension and clean cutting edge guarantee premium retail roll appearance",
    ],
    targetMaterials: "BOPP Packaging Tape, Pressure-Sensitive Tapes, Paper & Fiber Cores",
  },
  {
    id: "masking-tape",
    code: "SERIES // 06",
    title: "Masking Tape Rewinding Machine & Slicer",
    subtitle: "High-speed 5 HP masking tape rewinder and 2 HP circular blade slicing machine.",
    image: "/categories/masking_tape.jpg",
    specs: [
      { label: "Rewinder Motor", value: "5 HP Heavy-Duty AC Motor with VFD" },
      { label: "Rewinding Speed", value: "Up to 100 meters per minute" },
      { label: "Slicer Motor", value: "2 HP Precision Slicing Motor" },
      { label: "Cutting Mechanism", value: "High-Precision Circular / Razor Slicing Blade" },
      { label: "Auto Stop", value: "Digital Length Meter Counter with Auto Stop" },
      { label: "Frame Build", value: "Heavy-Duty MS Steel Frame with Anti-Rust Coating" },
    ],
    features: [
      "Uniform, tight roll formation for automotive, painting, and industrial masking tape converting",
      "Separate masking tape slicer machine cuts wide master logs into exact custom widths cleanly",
      "User-friendly control panel with variable frequency drive (VFD) speed regulation",
      "Engineered for low maintenance, low noise, and continuous multi-shift factory operation",
    ],
    targetMaterials: "Crepe Paper Masking Tape, Self-Adhesive Tapes, Surface Protection Tapes",
  },
  {
    id: "non-woven",
    code: "SERIES // 07",
    title: "Non-Woven Fabric Slitting Rewinding Machine",
    subtitle: "High-output slitter rewinder for spunbond, meltblown, SMS, and medical-grade hygiene fabrics.",
    image: "/categories/non_woven.jpg",
    specs: [
      { label: "Fabric Caliper", value: "15 GSM – 150 GSM Non-Woven" },
      { label: "Working Web Width", value: "600 mm – 2400 mm" },
      { label: "Max Operating Speed", value: "Up to 400 m/min" },
      { label: "Slitting Knives", value: "Pneumatic Shear Blades / Ultrasonic Slitters" },
      { label: "Unwind Chucks", value: "Pneumatic Safety Chucks with Air Shaft" },
      { label: "Rewind Control", value: "Surface & Center Differential Winding" },
    ],
    features: [
      "Specially designed guide rollers prevent non-woven fabric stretching, pilling, or static build-up",
      "Widely used for medical face mask fabrics, surgical gowns, diapers, sanitary napkins, and geotextiles",
      "Advanced closed-loop tension regulation maintains uniform softness and loft throughout the roll",
      "Rapid knife adjustment system reduces changeover time when slitting multiple widths",
    ],
    targetMaterials: "Spunbond PP, Meltblown, SMS, Medical Fabrics, Agriculture Non-Woven",
  },
  {
    id: "rotogravure-press",
    code: "SERIES // 08",
    title: "Rotogravure Printing Machine (Multicolor Press)",
    subtitle: "High-speed multicolor rotogravure printing line for flexible packaging films, laminates & paper.",
    image: "/categories/roto_printing.jpg",
    specs: [
      { label: "Color Stations", value: "1 to 8 Color Printing Stations" },
      { label: "Printing Width", value: "600 mm – 1400 mm" },
      { label: "Max Production Speed", value: "Up to 250 m/min" },
      { label: "Drying Chambers", value: "High-Velocity Hot Air with PID Temperature Zones" },
      { label: "Color Registration", value: "Electronic Automatic Longitudinal Registration" },
      { label: "Doctor Blade", value: "Pneumatic Oscillating Doctor Blade Assembly" },
    ],
    features: [
      "Rigid cast-iron printing station frames ensure vibration-free registration at full operating speed",
      "Uniform ink circulating pans and explosion-proof pumps maintain stable ink viscosity",
      "Energy-efficient insulated drying hoods with recirculating heated air reduce power consumption",
      "Precision cylinder shafts allow quick sleeve changeover between printing jobs",
    ],
    targetMaterials: "BOPP, PET, CPP, LDPE, Aluminium Foil, Paper, Multi-Layer Laminates",
  },
];

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-dark)", color: "var(--text-main)", minHeight: "100vh" }}>
      <Navbar activePage="products" />

      {/* Page Header Banner */}
      <section
        style={{
          padding: "70px 5% 50px",
          background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-dark) 100%)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}>
          <SectionBadge
            items={["Machinery Program", "Ahmedabad Works", "ISO 9001:2015"]}
            style={{ marginBottom: 18 }}
          />
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: 16 }}>
            CONVERTING &amp; SLITTER REWINDER <span style={{ color: "var(--primary)" }}>MACHINERY</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 960, lineHeight: 1.7 }}>
            Explore VIVA Engineering&apos;s complete machinery catalog: 3-Drive duplex cantilever slitter rewinders,
            jumbo roll paper slitters, barrier film slitters, aluminium foil converters, BOPP tape cutters, and
            rotogravure printing presses manufactured in Ahmedabad, Gujarat, India.
          </p>
        </div>
      </section>

      {/* Machinery Portfolio Cards */}
      <main style={{ maxWidth: "100%", width: "100%", margin: "0 auto", padding: "60px 5% 100px" }}>
        <style>{`
          @media (max-width: 960px) {
            .product-item-card {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              padding: 24px 18px !important;
            }
            .product-item-image {
              order: 1 !important;
              height: clamp(220px, 45vw, 360px) !important;
            }
            .product-item-content {
              order: 2 !important;
            }
          }
          @media (max-width: 500px) {
            .product-specs-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
          {productsList.map((prod, index) => (
            <article
              key={prod.id}
              id={prod.id}
              className="industrial-card product-item-card"
              style={{
                padding: "36px",
                display: "grid",
                gridTemplateColumns: index % 2 === 0 ? "1.1fr 1fr" : "1fr 1.1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              {/* Image Section */}
              <div className="product-item-image" style={{ order: index % 2 === 0 ? 1 : 2, position: "relative", height: 380, width: "100%", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
                <Image
                  src={prod.image}
                  alt={`${prod.title} manufactured by Viva Engineering Ahmedabad`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(10, 11, 13, 0.85)", backdropFilter: "blur(10px)", border: "1px solid var(--border-subtle)", borderRadius: 6, padding: "6px 14px", fontSize: "0.75rem", fontWeight: 800, color: "var(--primary)" }}>
                  {prod.code}
                </div>
              </div>

              {/* Text & Specs Section */}
              <div className="product-item-content" style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                  {prod.code}
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 1.9rem)", fontWeight: 900, color: "var(--text-main)", marginBottom: 12, lineHeight: 1.25 }}>
                  {prod.title}
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.65, marginBottom: 16 }}>
                  {prod.subtitle}
                </p>

                <div style={{ marginBottom: 20, fontSize: "0.82rem", color: "var(--primary)", fontWeight: 700 }}>
                  <i className="fa-solid fa-layer-group" style={{ marginRight: 8 }} />
                  Substrates: <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{prod.targetMaterials}</span>
                </div>

                {/* Key Technical Specs Grid */}
                <div className="product-specs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                  {prod.specs.map((s, idx) => (
                    <div key={idx} style={{ background: "var(--bg-surface)", padding: "10px 14px", borderRadius: 8, border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                        {s.label}
                      </div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "var(--text-main)", marginTop: 2 }}>
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Engineering Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                  {prod.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.86rem", color: "var(--text-muted)" }}>
                      <i className="fa-solid fa-circle-check" style={{ color: "var(--primary)", fontSize: "0.85rem", marginTop: 3 }} aria-hidden="true"></i>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href={`/contact?machine=${encodeURIComponent(prod.title)}`}
                    className="btn-primary"
                    style={{ padding: "10px 20px", fontSize: "0.88rem" }}
                  >
                    <span>Request Quote</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                  <Link
                    href="/catalog"
                    className="btn-secondary"
                    style={{ padding: "10px 20px", fontSize: "0.88rem" }}
                  >
                    <i className="fa-solid fa-file-pdf" style={{ color: "var(--primary)" }} aria-hidden="true"></i>
                    <span>Download Spec PDF</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Technical FAQ & AEO Comparison Section */}
        <section style={{ marginTop: 80, borderTop: "1px solid var(--border-subtle)", paddingTop: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionBadge>ENGINEERING SPECIFICATIONS GUIDE</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3.2vw, 2.3rem)", fontWeight: 900, color: "var(--text-main)", margin: "8px 0 12px" }}>
              FREQUENTLY ASKED CONVERTING MACHINERY QUESTIONS
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: 740, margin: "0 auto", fontSize: "0.98rem" }}>
              Direct technical answers to common queries regarding slitter rewinder selection, knife blade types, HSN codes, and plant commissioning.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: 24 }}>
            <div className="industrial-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)", marginBottom: 10 }}>
                Why choose a 3-Drive Slitting Rewinding Machine over single motor?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                A 3-drive system utilizes separate AC vector motors for the master unwind roll and the upper and lower differential rewind shafts. This eliminates web stretching on heat-sensitive films (like BOPP and CPP) and prevents uneven reel density caused by cross-web caliper variations in paper and laminated foil.
              </p>
            </div>

            <div className="industrial-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)", marginBottom: 10 }}>
                What is the difference between rotary shear and razor slitting?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                <strong>Rotary shear slitting</strong> uses interlocking male and female circular blades, creating clean, burr-free cuts on heavy paper (40–450 GSM), aluminium foil, and thick laminates. <strong>Razor-in-groove slitting</strong> uses ultra-sharp industrial razor blades positioned inside grooved steel rollers, ideal for high-speed cutting of thin plastic films (10–100 Micron) without polymer dust.
              </p>
            </div>

            <div className="industrial-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)", marginBottom: 10 }}>
                What is the HSN Code for export of converting machines from India?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Export classifications generally fall under:
                <br />• <strong>HSN 8441.10</strong> — Paper cutting and slitting rewinding machinery.
                <br />• <strong>HSN 8477.80</strong> — Machinery for working rubber or plastics (plastic film slitters).
                <br />• <strong>HSN 8443.19</strong> — Rotogravure and flexographic printing machinery.
                <br />Viva Engineering provides full export packing, CE/ISO documentation, and commercial invoices.
              </p>
            </div>

            <div className="industrial-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary)", marginBottom: 10 }}>
                What are factory acceptance testing (FAT) procedures at Viva Engineering?
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Before dispatch from our Ahmedabad facility, every machine undergoes a mandatory 48-hour continuous test cycle. Converters are invited to provide trial rolls of their exact substrate to test line speed, slit accuracy (±0.05 mm), tension dancer response, and auto-stop sensors on site.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
