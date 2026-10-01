"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

export type AnimationType =
  | "perspective-3d"
  | "slide-horizontal"
  | "curtain-rise"
  | "cyber-bloom"
  | "diagonal-reveal"
  | "cascade-wave"
  | "focus-expand"
  | "magnetic-ground";

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  animationType: AnimationType;
  id?: string;
  className?: string;
}

const variantsMap: Record<AnimationType, Variants> = {
  // 1. Machine Anatomy: 3D Depth & Tilt entry, soft recess exit
  "perspective-3d": {
    hidden: {
      opacity: 0,
      rotateX: 8,
      scale: 0.94,
      y: 40,
      filter: "blur(6px)",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 2. Substrates Section: Smooth horizontal drift entry with subtle shearing
  "slide-horizontal": {
    hidden: {
      opacity: 0,
      x: -45,
      scale: 0.97,
      filter: "blur(4px)",
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 3. Products Showcase: Cinematic vertical rise with scale expansion
  "curtain-rise": {
    hidden: {
      opacity: 0,
      y: 65,
      scale: 0.95,
      filter: "blur(5px)",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 4. Shop by Category (Bento): Cyber-bloom aperture expanding from center
  "cyber-bloom": {
    hidden: {
      opacity: 0,
      scale: 0.93,
      y: 35,
      filter: "blur(8px)",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 5. About Section (Ahmedabad Works): Diagonal architectural split slide
  "diagonal-reveal": {
    hidden: {
      opacity: 0,
      x: 40,
      y: 30,
      scale: 0.96,
      filter: "blur(4px)",
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 6. Testimonials: Floating wave cascade
  "cascade-wave": {
    hidden: {
      opacity: 0,
      y: 50,
      rotateZ: -1,
      scale: 0.96,
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      scale: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 7. FAQ Section: Precision vertical focus
  "focus-expand": {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.97,
      filter: "blur(5px)",
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  },

  // 8. Contact Section: Grounding ascent with solid presence
  "magnetic-ground": {
    hidden: {
      opacity: 0,
      y: 55,
      scale: 0.95,
      filter: "blur(6px)",
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

export default function ScrollRevealSection({
  children,
  animationType,
  id,
  className,
}: ScrollRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const variants = variantsMap[animationType] || variantsMap["curtain-rise"];

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{
        perspective: "1200px",
        willChange: "transform, opacity, filter",
        position: "relative",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{
          once: false, // Animates on entry AND exit when scrolling up & down!
          amount: 0.12, // Triggers when 12% is in viewport
          margin: "0px 0px -40px 0px",
        }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}
