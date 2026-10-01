import React from "react";
import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Slitter Rewinder Machine PDF Catalogs & Specification Sheets",
  description:
    "Download machine specification PDFs, GA dimensional drawings, motor power ratings, and wiring schematics for 3-drive slitter rewinders, paper slitters, film slitters, and foil rewinders by VIVA Engineering Ahmedabad.",
  keywords: [
    "Slitter Rewinder Machine PDF",
    "Slitter Rewinder Machine Specification Sheet",
    "Paper Slitter Rewinder Machine PDF",
    "Aluminium Foil Rewinding Machine Catalog",
    "Slitting Rewinding Machine Photos",
    "Converting Machinery India PDF",
    "VIVA Engineering Catalog",
  ],
  alternates: {
    canonical: "https://vivaengineering.in/catalog",
  },
  openGraph: {
    title: "Machine Catalogs & Specification Sheets | VIVA Engineering",
    description:
      "Instant PDF downloads for 3-drive slitter rewinders, film converting machines, and paper slitter rewinders manufactured in Ahmedabad, India.",
    url: "https://vivaengineering.in/catalog",
    images: [{ url: "/categories/slitting_rewinding.jpg", width: 1200, height: 630, alt: "VIVA Engineering Machine Catalogs" }],
  },
};

export default function CatalogPage() {
  return <CatalogClient />;
}
