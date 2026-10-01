"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  activePage?: "home" | "products" | "about" | "gallery" | "contact" | "catalog";
  isTransparentHero?: boolean;
  /** Optional controlled theme. When provided, Navbar defers to parent state. */
  theme?: "dark" | "light";
  /** Required when `theme` is provided — the parent's toggle handler. */
  onToggleTheme?: () => void;
}

export default function Navbar({
  activePage = "home",
  isTransparentHero = false,
  theme: controlledTheme,
  onToggleTheme,
}: NavbarProps) {
  const [internalTheme, setInternalTheme] = useState<"dark" | "light">("dark");

  // Use controlled theme when provided by parent, otherwise use internal state
  const theme = controlledTheme ?? internalTheme;

  useEffect(() => {
    // Only self-manage theme when running in uncontrolled mode
    if (controlledTheme !== undefined) return;
    const saved = localStorage.getItem("viva-theme");
    if (saved === "light" || saved === "dark") {
      setInternalTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const current = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
      if (current) {
        setInternalTheme(current);
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  }, [controlledTheme]);

  const toggleTheme = () => {
    if (onToggleTheme) {
      // Controlled mode: delegate to parent
      onToggleTheme();
    } else {
      // Uncontrolled mode: self-manage
      const nextTheme = internalTheme === "dark" ? "light" : "dark";
      setInternalTheme(nextTheme);
      localStorage.setItem("viva-theme", nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  };

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Machinery Range", href: "/products", id: "products" },
    { name: "Our Works", href: "/about", id: "about" },
    { name: "Plant Gallery", href: "/gallery", id: "gallery" },
    { name: "Commission", href: "/contact", id: "contact" },
    { name: "Spec Sheets", href: "/catalog", id: "catalog" },
  ];

  return (
    <div style={{ position: "relative", zIndex: 100, width: "100%" }}>
      <style>{`
        @media (max-width: 960px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-hamburger {
            display: flex !important;
          }
        }
        @media (min-width: 961px) {
          .nav-mobile-hamburger {
            display: none !important;
          }
          .nav-mobile-drawer {
            display: none !important;
          }
        }
        @media (max-width: 820px) {
          .telemetry-address {
            display: none !important;
          }
          .telemetry-sep {
            display: none !important;
          }
        }
        @media (max-width: 540px) {
          .telemetry-iso {
            display: none !important;
          }
          .telemetry-container {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .nav-brand-title {
            font-size: 1.05rem !important;
          }
          .nav-brand-subtitle {
            font-size: 0.54rem !important;
            letter-spacing: 0.16em !important;
          }
        }
      `}</style>

      <aside
        aria-label="Corporate Contact & Plant Information"
        style={{
          backgroundColor: theme === "dark" ? "#0B0E14" : "#0F172A",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "6px 5%",
          fontSize: "0.72rem",
          color: "var(--telemetry-text)",
          transition: "background-color 0.25s ease",
          position: "relative",
          zIndex: 110,
        }}
      >
        <div
          className="telemetry-container"
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--primary)", fontWeight: 700 }}>
              <span className="status-dot" aria-hidden="true"></span>
              AHMEDABAD WORKS
            </span>
            <span className="telemetry-sep" style={{ color: "rgba(255, 255, 255, 0.3)" }} aria-hidden="true">|</span>
            <span className="telemetry-address" style={{ color: "var(--telemetry-text)" }}>
              Plot No. 21 K P Industrial Estate, Bakrol Bujrang, Ahmedabad
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="telemetry-iso" style={{ color: "var(--primary)", fontWeight: 700 }}>
              <i className="fa-solid fa-certificate" style={{ marginRight: 6 }} aria-hidden="true"></i>
              ISO 9001:2015
            </span>
            <a
              href="tel:+919265609416"
              aria-label="Call VIVA Engineering Sales Department at +91 92656 09416"
              style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <i className="fa-solid fa-phone" style={{ color: "var(--primary)" }} aria-hidden="true"></i>
              +91 92656 09416
            </a>
            <a
              href="https://wa.me/919265609416"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact VIVA Engineering on WhatsApp"
              style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>

      <header
        role="banner"
        style={{
          position: "relative",
          zIndex: 100,
          backgroundColor:
            theme === "dark" ? "rgba(10, 11, 13, 0.75)" : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "10px 5%",
          transition: "background-color 0.25s ease, border-color 0.25s ease",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {/* Brand Identity — V-mark Logo + Typography */}
          <Link
            href="/"
            aria-label="VIVA Engineering Home"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <Image
              src="/viva-mark.png"
              alt="VIVA Engineering"
              width={42}
              height={42}
              priority
              style={{
                objectFit: "contain",
                width: 42,
                height: 42,
                flexShrink: 0,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span
                className="nav-brand-title"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: "clamp(1.1rem, 2.8vw, 1.3rem)",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                  color: "var(--text-main)",
                  textTransform: "uppercase",
                }}
              >
                VIVA ENGINEERING
              </span>
              <span
                className="nav-brand-subtitle"
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "0.22em",
                  color: "var(--primary)",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                PRECISION ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="nav-desktop-links"
            style={{ display: "flex", alignItems: "center", gap: 28, fontSize: "0.98rem", fontWeight: 600 }}
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              const isHovered = hoveredLink === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    color: isActive || isHovered ? "var(--primary)" : "var(--text-muted)",
                    textDecoration: "none",
                    borderBottom: isActive
                      ? "2px solid var(--primary)"
                      : isHovered
                        ? "2px solid rgba(245,158,11,0.45)"
                        : "2px solid transparent",
                    paddingBottom: 4,
                    transition: "color 0.18s ease, border-color 0.18s ease",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Accessible Theme Switcher & Mobile Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Accessible Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              type="button"
              role="switch"
              aria-checked={theme === "light"}
              className="theme-toggle-btn"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <i className="fa-solid fa-sun" style={{ color: "#F59E0B", fontSize: "0.9rem" }} aria-hidden="true" />
              ) : (
                <i className="fa-solid fa-moon" style={{ color: "#0F172A", fontSize: "0.9rem" }} aria-hidden="true" />
              )}
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-mobile-hamburger"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-main)",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div
            className="nav-mobile-drawer"
            style={{
              padding: "16px 0 20px",
              marginTop: 12,
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              animation: "heroFadeUp 0.25s ease both",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: isActive ? "var(--primary)" : "var(--text-main)",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    padding: "8px 12px",
                    borderRadius: 6,
                    background: isActive ? "rgba(245, 158, 11, 0.12)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{link.name}</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "0.8rem", color: "var(--primary)", opacity: 0.8 }} />
                </Link>
              );
            })}

            <div style={{ paddingTop: 10, display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Request Machine Quote</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>

              <a
                href="https://wa.me/919265609416"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px",
                  borderRadius: 6,
                  background: "rgba(37, 211, 102, 0.12)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  color: "#25D366",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                }}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.1rem" }} />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
