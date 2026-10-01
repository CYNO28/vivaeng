import React from "react";
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Slitting Rewinding Machine Photos & Factory Gallery | VIVA Engineering",
  description:
    "Explore authentic machinery photos, digital engineering models, and plant floor installations of high-speed slitter rewinders, doctoring inspection lines, and rotogravure presses in Ahmedabad, India.",
  keywords: [
    "Slitting Rewinding Machine Photos",
    "Slitter Rewinder Machine Gallery",
    "Converting Machinery Photos Ahmedabad",
    "Cantilever Slitter Rewinder Images",
    "Tape Slitting Machine Video and Photos",
    "VIVA Engineering Works",
  ],
  alternates: {
    canonical: "https://vivaengineering.in/gallery",
  },
  openGraph: {
    title: "Converting Machinery Photography & Media Gallery | VIVA Engineering",
    description:
      "Photographs and breakdown of VIVA Engineering converting machines, knife shafts, web guiding assemblies, and factory installations.",
    url: "https://vivaengineering.in/gallery",
    images: [{ url: "/categories/slitting_rewinding.jpg", width: 1200, height: 630, alt: "VIVA Engineering Machine Photos" }],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
