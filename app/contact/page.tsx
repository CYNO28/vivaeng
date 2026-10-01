import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Request Machine Quote | Slitter Rewinder Price in India",
  description:
    "Request factory pricing, customized GA drawings, and commercial terms for 3-drive slitter rewinders, film slitters, paper converting machines, and aluminium foil rewinders from VIVA Engineering Ahmedabad.",
  keywords: [
    "Slitter Rewinder Machine Price in India",
    "Slitter Rewinder Machine Price",
    "Slitting and Rewinding Machine Price",
    "Contact Slitter Rewinder Manufacturer",
    "Slitter Rewinder Manufacturer Ahmedabad",
    "VIVA Engineering Contact",
  ],
  alternates: {
    canonical: "https://vivaengineering.in/contact",
  },
  openGraph: {
    title: "Request Machine Specifications & Quote | VIVA Engineering",
    description:
      "Direct technical consultation with VIVA Engineering senior engineers in Ahmedabad, Gujarat. Custom GA drawings and proposals within 24 business hours.",
    url: "https://vivaengineering.in/contact",
    images: [{ url: "/categories/slitting_rewinding.jpg", width: 1200, height: 630, alt: "Contact VIVA Engineering" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
