"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionBadge from "./SectionBadge";
import { MotionComponent, MotionStaggerGroup } from "./MotionWrappers";

interface ProductCardItem {
  id: string;
  title: string;
  subtitle: string;
  specs: string;
  image: string;
  alt: string;
  tags: string[];
  featured?: boolean;
  badge?: string;
}

const productCards: ProductCardItem[] = [
  {
    id: "slitting-rewinding",
    title: "Slitting Rewinding Applications",
    subtitle: "High-speed slitting for paper, flexible film, BOPP, laminates, and non-woven textiles with dual cantilever winding.",
    specs: "Web Width: 600–2200mm · Speed: Up to 600 m/min · Dual Cantilever",
    image: "/categories/slitting_rewinding.jpg",
    alt: "VIVA Engineering High Speed Slitting Rewinding Applications Machine",
    tags: ["Paper Slitter", "Film Slitter", "Non-Woven", "Mini Slitter"],
    featured: true,
    badge: "FLAGSHIP APPLICATION",
  },
  {
    id: "center-shaft",
    title: "Center Shaft Slitting Rewinding",
    subtitle: "Cantilever and duplex shaft systems for uniform tension winding and narrow width coils.",
    specs: "Differential Air Shafts · Closed-loop Tension · 12mm Min Slit",
    image: "/categories/tape_cutting.jpg",
    alt: "VIVA Engineering Center Shaft Slitting Rewinding Equipment",
    tags: ["Cantilever Slitter", "Paper Shaft", "Plastic Center Shaft"],
  },
  {
    id: "aluminium-foil",
    title: "Aluminium Foil Processing",
    subtitle: "Precision slitting and rewinding for aluminum jumbo rolls, blister foil & household wrap.",
    specs: "Micro-Tension Control · Zero Scratch Rollers · High-tensile Spindles",
    image: "/categories/foil_rewinding.jpg",
    alt: "VIVA Engineering Aluminium Foil Slitting and Rewinding Machinery",
    tags: ["Alu Foil Slitter", "Blister Foil", "Household Foil", "Rewinder"],
  },
  {
    id: "adhesive-tape",
    title: "Adhesive Tape & Coating Processing",
    subtitle: "BOPP tape slitting, masking tape rewinding, and water-based acrylic coating lines with automated turret rewind.",
    specs: "Multi-shaft Turret Rewind · Auto Cut & Transfer · Hot Air Dryers",
    image: "/categories/masking_tape.jpg",
    alt: "VIVA Engineering Adhesive Tape Cutting and Coating Line",
    tags: ["BOPP Tape", "Masking Tape", "Coating Plant", "Turret Rewind"],
    featured: true,
    badge: "COATING & TURRET CONVERTING",
  },
  {
    id: "printing-converting",
    title: "Printing & Converting Lines",
    subtitle: "Heavy-duty rotogravure and flexographic printing machinery for flexible packaging with precision register control.",
    specs: "1–8 Color · Electronic Register Control · High Efficiency Drying",
    image: "/categories/roto_printing.jpg",
    alt: "VIVA Engineering Printing and Converting Rotogravure Machine",
    tags: ["Rotogravure", "Flexographic", "Coating Line", "Converting"],
    featured: true,
    badge: "HEAVY-DUTY CONVERTING",
  },
  {
    id: "roll-to-roll",
    title: "Roll to Roll Processing Lines",
    subtitle: "Doctoring rewinding for batch coding, inspection, bidirectional winding & web guiding.",
    specs: "Ultrasonic Edge Guiding · Inkjet Batch Integration · Reversible Run",
    image: "/categories/non_woven.jpg",
    alt: "VIVA Engineering Roll to Roll Doctoring Rewinding Line",
    tags: ["Doctoring Machine", "Batch Coding", "Winding Rewinding"],
  },
];

export default function ProductsCatalogSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="catalog"
      aria-labelledby="catalog-grid-heading"
      className="bp-catalog-section"
      style={{
        padding: "70px 5% 90px",
        background: "var(--bp-bg-gradient)",
        backgroundColor: "var(--bp-bg)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--bp-section-border)",
        borderBottom: "1px solid var(--bp-section-border)",
        transition: "background 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
        scrollMarginTop: "60px",
      }}
    >
      <style>{`
        /* Dedicated Cyber-Chassis Showcase Theme (Dark Mode Default) */
        .bp-catalog-section {
          --bp-bg: #07090E;
          --bp-bg-gradient: radial-gradient(ellipse at 50% 15%, #101625 0%, #07090E 80%);
          --bp-section-border: rgba(245, 158, 11, 0.35);
          --bp-title-color: #FFFFFF;
          --bp-subtitle-color: rgba(226, 232, 240, 0.85);
          --bp-card-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(11, 15, 24, 0.45);
          --bp-card-hover-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%), rgba(15, 21, 34, 0.55);
          --bp-card-title: #FFFFFF;
          --bp-card-sub: rgba(209, 213, 219, 0.88);
          --bp-border: rgba(255, 255, 255, 0.14);
          --bp-border-hover: #F59E0B;
          --bp-card-divider: rgba(245, 158, 11, 0.20);
          --bp-trace: rgba(245, 158, 11, 0.30);
          --bp-bus: rgba(245, 158, 11, 0.20);
          --bp-pulse: #F59E0B;
          --bp-node: #F59E0B;
          --bp-pin: #F59E0B;
          --bp-glow: rgba(245, 158, 11, 0.45);
          --bp-orb-1: rgba(245, 158, 11, 0.32);
          --bp-orb-2: rgba(251, 191, 36, 0.25);
          --bp-orb-3: rgba(245, 158, 11, 0.28);
          --bp-tag-bg: rgba(245, 158, 11, 0.12);
          --bp-tag-color: #FBBF24;
          --bp-tag-border: rgba(245, 158, 11, 0.35);
          --bp-tag-dot: #F59E0B;
          --bp-badge-bg: rgba(7, 9, 14, 0.80);
          --bp-badge-border: rgba(245, 158, 11, 0.45);
          --bp-badge-color: #F59E0B;
          --bp-img-overlay: linear-gradient(180deg, transparent 70%, rgba(7, 9, 14, 0.45) 100%);
          --bp-featured-overlay: linear-gradient(90deg, transparent 75%, rgba(7, 9, 14, 0.40) 100%);
          --bp-cta-bg: rgba(245, 158, 11, 0.10);
          --bp-cta-hover-bg: #F59E0B;
          --bp-cta-color: #F59E0B;
          --bp-cta-hover-color: #07090E;
          --bp-cta-glow: rgba(245, 158, 11, 0.45);
          --bp-cta-circle-bg: rgba(245, 158, 11, 0.25);
          --bp-cta-circle-color: #F59E0B;
          --bp-spec-color: #F59E0B;
          --bp-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.65), inset 0 1px 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 0 1px rgba(245, 158, 11, 0.18);
          --bp-shadow-hover: 0 24px 55px -10px rgba(0, 0, 0, 0.75), 0 0 35px rgba(245, 158, 11, 0.4), inset 0 1px 2px 0 rgba(255, 255, 255, 0.35);
        }

        /* Light Theme - Authentic Frosted Glass & Diffuse Backlight */
        [data-theme="light"] .bp-catalog-section,
        html[data-theme="light"] .bp-catalog-section {
          --bp-bg: #E6EDF5;
          --bp-bg-gradient: radial-gradient(ellipse at 50% 20%, #EBF1F8 0%, #DDE6F0 100%);
          --bp-section-border: rgba(180, 83, 9, 0.30);
          --bp-title-color: #0F172A;
          --bp-subtitle-color: #334155;
          --bp-card-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.28) 100%);
          --bp-card-hover-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.40) 100%);
          --bp-card-title: #0F172A;
          --bp-card-sub: #334155;
          --bp-border: rgba(255, 255, 255, 0.85);
          --bp-border-hover: #B45309;
          --bp-card-divider: rgba(255, 255, 255, 0.50);
          --bp-trace: rgba(180, 83, 9, 0.25);
          --bp-bus: rgba(180, 83, 9, 0.18);
          --bp-pulse: #D97706;
          --bp-node: #B45309;
          --bp-pin: #B45309;
          --bp-glow: rgba(180, 83, 9, 0.30);
          --bp-orb-1: rgba(245, 158, 11, 0.30);
          --bp-orb-2: rgba(251, 191, 36, 0.25);
          --bp-orb-3: rgba(217, 119, 6, 0.26);
          --bp-tag-bg: rgba(255, 255, 255, 0.60);
          --bp-tag-color: #92400E;
          --bp-tag-border: rgba(180, 83, 9, 0.30);
          --bp-tag-dot: #B45309;
          --bp-badge-bg: rgba(255, 255, 255, 0.85);
          --bp-badge-border: rgba(180, 83, 9, 0.40);
          --bp-badge-color: #92400E;
          --bp-img-overlay: linear-gradient(180deg, transparent 75%, rgba(255, 255, 255, 0.35) 100%);
          --bp-featured-overlay: linear-gradient(90deg, transparent 80%, rgba(255, 255, 255, 0.30) 100%);
          --bp-cta-bg: rgba(255, 255, 255, 0.65);
          --bp-cta-hover-bg: #B45309;
          --bp-cta-color: #92400E;
          --bp-cta-hover-color: #FFFFFF;
          --bp-cta-glow: rgba(180, 83, 9, 0.30);
          --bp-cta-circle-bg: rgba(180, 83, 9, 0.18);
          --bp-cta-circle-color: #92400E;
          --bp-spec-color: #B45309;
          --bp-shadow: 0 16px 40px -10px rgba(15, 23, 42, 0.12), inset 0 1px 2px 0 rgba(255, 255, 255, 0.95), inset 0 0 0 1px rgba(180, 83, 9, 0.14);
          --bp-shadow-hover: 0 22px 50px -10px rgba(15, 23, 42, 0.18), 0 0 30px rgba(180, 83, 9, 0.25), inset 0 1px 2px 0 #FFFFFF;
        }

        /* Animated Technical Drafting Traces */
        @keyframes circuitPulseFlow {
          0% {
            stroke-dashoffset: 1200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes nodeGlow {
          0%, 100% {
            opacity: 0.6;
            r: 3.5;
          }
          50% {
            opacity: 1;
            r: 5;
            filter: drop-shadow(0 0 8px var(--bp-pulse));
          }
        }

        .circuit-pulse-line {
          stroke-dasharray: 140 400;
          animation: circuitPulseFlow 6s linear infinite;
        }
        .circuit-pulse-fast {
          stroke-dasharray: 90 320;
          animation: circuitPulseFlow 4s linear infinite;
        }
        .circuit-pulse-reverse {
          stroke-dasharray: 110 380;
          animation: circuitPulseFlow 5s linear infinite reverse;
        }

        .circuit-node-pulse {
          animation: nodeGlow 3s ease-in-out infinite;
        }

        /* Cyber-Circuit Blueprint Bento Module (Authentic Frosted Glass) */
        .cc-module {
          position: relative;
          background: var(--bp-card-glass);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid var(--bp-border);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--bp-shadow);
        }
        .cc-module:hover {
          background: var(--bp-card-hover-glass);
          border-color: var(--bp-border-hover);
          transform: translateY(-5px);
          box-shadow: var(--bp-shadow-hover);
        }

        /* Corner Specular Glass Accent Pins */
        .cc-module::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 20px;
          width: 10px;
          height: 4px;
          background: var(--bp-pin);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--bp-pin);
          z-index: 5;
        }
        .cc-module::after {
          content: '';
          position: absolute;
          bottom: -2px;
          right: 24px;
          width: 10px;
          height: 4px;
          background: var(--bp-pin);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--bp-pin);
          z-index: 5;
        }

        /* Standard 1-Column Card Image */
        .cc-img-wrap {
          position: relative;
          height: 205px;
          width: 100%;
          overflow: hidden;
          background: transparent;
          border-bottom: 1px solid var(--bp-card-divider);
        }
        .cc-img-wrap img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cc-module:hover .cc-img-wrap img {
          transform: scale(1.05);
        }

        /* Featured 2-Column Bento Card */
        .cc-module-featured {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1.18fr 1fr;
          align-items: stretch;
        }
        .cc-featured-img-wrap {
          position: relative;
          min-height: 295px;
          height: 100%;
          width: 100%;
          overflow: hidden;
          background: transparent;
          border-right: 1px solid var(--bp-card-divider);
        }
        .cc-featured-img-wrap img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cc-module:hover .cc-featured-img-wrap img {
          transform: scale(1.05);
        }
        .cc-featured-overlay {
          position: absolute;
          inset: 0;
          background: var(--bp-featured-overlay);
        }

        .cc-badge-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 11px;
          background: var(--bp-badge-bg);
          border: 1px solid var(--bp-badge-border);
          border-radius: 9999px;
          font-size: 0.66rem;
          font-weight: 800;
          color: var(--bp-badge-color);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .cc-img-overlay {
          position: absolute;
          inset: 0;
          background: var(--bp-img-overlay);
          transition: background 0.25s ease;
        }

        /* Redesigned Sleek Non-Boxy Pill Badges */
        .cc-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 3px 10px;
          border-radius: 9999px;
          background: var(--bp-tag-bg);
          color: var(--bp-tag-color);
          border: 1px solid var(--bp-tag-border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }
        .cc-tag-pill:hover {
          border-color: var(--bp-pulse);
          color: var(--bp-card-title);
          transform: translateY(-1px);
        }
        .cc-tag-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--bp-tag-dot);
          display: inline-block;
          flex-shrink: 0;
        }

        /* High-End Technical CTA Button (Glass Accent) */
        .cc-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 10px 16px;
          border-radius: 8px;
          background: var(--bp-cta-bg);
          color: var(--bp-cta-color) !important;
          font-size: 0.78rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border: 1px solid var(--bp-border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cc-btn:hover {
          background: var(--bp-cta-hover-bg, var(--bp-cta-bg));
          color: var(--bp-cta-hover-color, #07090E) !important;
          border-color: var(--bp-border-hover);
          transform: translateY(-2px);
          box-shadow: 0 0 20px var(--bp-cta-glow);
        }
        .cc-btn-arrow-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--bp-cta-circle-bg);
          color: var(--bp-cta-circle-color);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, background 0.25s ease;
          flex-shrink: 0;
        }
        .cc-btn:hover .cc-btn-arrow-circle {
          transform: translateX(4px);
          background: rgba(0, 0, 0, 0.2);
          color: var(--bp-cta-hover-color, #07090E);
        }

        @media (max-width: 1100px) {
          .cc-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .cc-module-featured {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 800px) {
          .cc-grid {
            grid-template-columns: 1fr !important;
          }
          .cc-module-featured {
            grid-column: span 1 !important;
            grid-template-columns: 1fr !important;
          }
          .cc-featured-img-wrap {
            height: 210px !important;
            min-height: 210px !important;
          }
          .cc-featured-overlay {
            background: var(--bp-img-overlay) !important;
          }
          .circuit-svg-bg {
            display: none !important;
          }
        }
      `}</style>

      {/* Futuristic Background Animated Technical Blueprint Circuit Traces */}
      <svg
        className="circuit-svg-bg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.85,
        }}
        viewBox="0 0 1600 1100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blueprintGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bp-pulse)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="var(--bp-bus)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--bp-trace)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Top Header Circuit Traces (Left & Right of Title) */}
        {/* Left Side Header Traces */}
        <g stroke="var(--bp-trace)" strokeWidth="1.5" fill="none">
          <path d="M 80 90 L 260 90 L 320 50 L 520 50 L 540 70 L 570 70" />
          <path d="M 120 120 L 300 120 L 340 85 L 510 85 L 530 105 L 560 105" />
          <path d="M 60 60 L 220 60 L 270 25 L 480 25 L 510 55" />
          <path d="M 260 90 L 260 160 L 290 190 L 360 190" />
        </g>

        {/* Right Side Header Traces */}
        <g stroke="var(--bp-trace)" strokeWidth="1.5" fill="none">
          <path d="M 1520 90 L 1340 90 L 1280 50 L 1080 50 L 1060 70 L 1030 70" />
          <path d="M 1480 120 L 1300 120 L 1260 85 L 1090 85 L 1070 105 L 1040 105" />
          <path d="M 1540 60 L 1380 60 L 1330 25 L 1120 25 L 1090 55" />
          <path d="M 1340 90 L 1340 160 L 1310 190 L 1240 190" />
        </g>

        {/* Grid Interconnecting Circuit Bus Traces */}
        <g stroke="var(--bp-bus)" strokeWidth="1.5" fill="none">
          {/* Vertical Bus Down Left Column */}
          <path d="M 60 220 L 60 520 L 90 550 L 90 860" />
          <path d="M 520 250 L 540 270 L 540 600 L 560 620 L 560 900" />

          {/* Center Bento Weaving Bus */}
          <path d="M 560 620 L 600 620 L 630 590 L 980 590 L 1010 620 L 1050 620" />
          <path d="M 1050 250 L 1070 270 L 1070 600 L 1090 620 L 1090 900" />

          {/* Vertical Bus Down Right Column */}
          <path d="M 1540 220 L 1540 520 L 1510 550 L 1510 880 L 1460 930 L 1080 930" />
          <path d="M 540 980 L 1060 980" />
        </g>

        {/* Glowing Animated Light Beams running on the Traces */}
        <g stroke="var(--bp-pulse)" strokeWidth="2" fill="none" filter="url(#glow)">
          <path className="circuit-pulse-line" d="M 80 90 L 260 90 L 320 50 L 520 50 L 540 70 L 570 70" />
          <path className="circuit-pulse-fast" d="M 1520 90 L 1340 90 L 1280 50 L 1080 50 L 1060 70 L 1030 70" />
          <path className="circuit-pulse-reverse" d="M 60 220 L 60 520 L 90 550 L 90 860" />
          <path className="circuit-pulse-fast" d="M 1540 220 L 1540 520 L 1510 550 L 1510 880 L 1460 930 L 1080 930" />
          <path className="circuit-pulse-line" d="M 560 620 L 600 620 L 630 590 L 980 590 L 1010 620 L 1050 620" />
        </g>

        {/* Terminal Solder Pads & Circuit Nodes */}
        <g fill="var(--bp-node)" filter="url(#glow)">
          <circle cx="570" cy="70" r="4" className="circuit-node-pulse" />
          <circle cx="560" cy="105" r="3.5" />
          <circle cx="510" cy="55" r="4" className="circuit-node-pulse" />
          <circle cx="360" cy="190" r="3.5" />

          <circle cx="1030" cy="70" r="4" className="circuit-node-pulse" />
          <circle cx="1040" cy="105" r="3.5" />
          <circle cx="1090" cy="55" r="4" className="circuit-node-pulse" />
          <circle cx="1240" cy="190" r="3.5" />

          <circle cx="90" cy="550" r="4" className="circuit-node-pulse" />
          <circle cx="560" cy="620" r="4.5" className="circuit-node-pulse" />
          <circle cx="1050" cy="620" r="4.5" className="circuit-node-pulse" />
          <circle cx="1510" cy="550" r="4.5" className="circuit-node-pulse" />
          <circle cx="1080" cy="930" r="4" className="circuit-node-pulse" />
        </g>
      </svg>

      {/* Ambient Glowing Backlight Orbs diffusing through Frosted Glass */}
      <div
        className="bp-ambient-glow"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "22%",
            left: "8%",
            width: "560px",
            height: "440px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, var(--bp-orb-1) 0%, transparent 70%)",
            filter: "blur(65px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "6%",
            width: "600px",
            height: "460px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, var(--bp-orb-2) 0%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "20%",
            width: "520px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, var(--bp-orb-3) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Main Section Content Container */}
      <div style={{ maxWidth: "100%", width: "100%", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Heading with Glowing Golden Circuit Accents */}
        <MotionComponent preset="bento-bloom" standalone style={{ textAlign: "center", marginBottom: 46, position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 26,
                height: 2,
                backgroundColor: "var(--bp-pulse)",
                display: "inline-block",
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 800,
                color: "var(--bp-pulse)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              OUR SPECIALTIES
            </span>
          </div>
          <h2
            id="catalog-grid-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3.8vw, 2.7rem)",
              fontWeight: 900,
              color: "var(--bp-title-color)",
              letterSpacing: "-0.01em",
              margin: "10px 0 12px",
              textTransform: "uppercase",
            }}
          >
            SHOP BY CATEGORY
          </h2>
          <p
            style={{
              color: "var(--bp-subtitle-color)",
              maxWidth: 740,
              margin: "0 auto",
              fontSize: "0.98rem",
              lineHeight: 1.6,
            }}
          >
            Complete portfolio of slitter rewinders, doctoring inspection rewinders, coating lines,
            and aluminium foil converters built to international specifications.
          </p>
        </MotionComponent>

        {/* Futuristic Asymmetric Cyber-Circuit Bento Grid */}
        <MotionStaggerGroup
          preset="bento-bloom"
          className="cc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 26,
            alignItems: "stretch",
          }}
        >
          {productCards.map((p) => {
            const isFeatured = p.featured === true;

            if (isFeatured) {
              return (
                <MotionComponent
                  key={p.id}
                  preset="bento-bloom"
                  className="cc-module cc-module-featured"
                  onMouseEnter={() => setHoveredCard(p.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Left: Wide Panoramic Machine Photo with Badge */}
                  <div className="cc-featured-img-wrap">
                    {p.badge && (
                      <span className="cc-badge-pill">
                        <span className="cc-tag-dot" />
                        <span>{p.badge}</span>
                      </span>
                    )}
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="cc-featured-overlay" />
                  </div>

                  {/* Right: Featured Technical Specs & Content */}
                  <div
                    style={{
                      padding: "24px 26px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 14,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: "var(--bp-card-title)",
                          margin: "0 0 10px",
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--bp-card-sub)",
                          fontSize: "0.88rem",
                          lineHeight: 1.55,
                          margin: "0 0 14px",
                        }}
                      >
                        {p.subtitle}
                      </p>

                      {/* Golden Circuit Spec Callout */}
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--bp-spec-color)",
                          fontWeight: 600,
                          marginBottom: 16,
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 6,
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: "var(--bp-spec-color)", opacity: 0.8 }}>—</span>
                        <span>{p.specs}</span>
                      </div>

                      {/* Substrate Pill Badges */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="cc-tag-pill">
                            <span className="cc-tag-dot" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Redesigned Tactile Action Button */}
                    <div style={{ paddingTop: 12 }}>
                      <a
                        href="#contact"
                        className="cc-btn"
                        aria-label={`Request Technical Specs for ${p.title}`}
                      >
                        <span>Request Technical Specs</span>
                        <span className="cc-btn-arrow-circle">
                          <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.72rem" }} aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </div>
                </MotionComponent>
              );
            }

            return (
              <MotionComponent
                key={p.id}
                preset="bento-bloom"
                className="cc-module"
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Standard Machine Panoramic Photo Viewport */}
                <div className="cc-img-wrap">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="cc-img-overlay" />
                </div>

                {/* Module Body Content */}
                <div
                  style={{
                    padding: "20px 22px 22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                    gap: 14,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.12rem",
                        fontWeight: 800,
                        color: "var(--bp-card-title)",
                        margin: "0 0 8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--bp-card-sub)",
                        fontSize: "0.85rem",
                        lineHeight: 1.55,
                        margin: "0 0 14px",
                      }}
                    >
                      {p.subtitle}
                    </p>

                    {/* Circuit Spec Indicator Line */}
                    <div
                      style={{
                        fontSize: "0.76rem",
                        color: "var(--bp-spec-color)",
                        fontWeight: 600,
                        marginBottom: 14,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 6,
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ color: "var(--bp-spec-color)", opacity: 0.7 }}>—</span>
                      <span>{p.specs}</span>
                    </div>

                    {/* Substrate Pill Tags (Redesigned Non-Boxy) */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="cc-tag-pill">
                          <span className="cc-tag-dot" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Redesigned Tactile Action Button */}
                  <div style={{ paddingTop: 10 }}>
                    <a
                      href="#contact"
                      className="cc-btn"
                      aria-label={`Request Technical Specs for ${p.title}`}
                    >
                      <span>Request Technical Specs</span>
                      <span className="cc-btn-arrow-circle">
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.72rem" }} aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                </div>
              </MotionComponent>
            );
          })}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}
