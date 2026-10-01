"use client";

import React from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

export type ComponentAnimationPreset =
  | "perspective-depth"
  | "slide-glide"
  | "vertical-lift"
  | "bento-bloom"
  | "diagonal-float"
  | "wave-cascade"
  | "focus-unfold"
  | "magnetic-rise";

export const presetVariants: Record<
  ComponentAnimationPreset,
  { container: Variants; item: Variants }
> = {
  // 1. Machine Anatomy: 3D Perspective Tilt and Depth
  "perspective-depth": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 30,
        rotateX: 10,
        scale: 0.96,
        filter: "blur(4px)",
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 2. Substrates Section: Horizontal Material Sheet Glide
  "slide-glide": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.09, delayChildren: 0.04 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        x: -35,
        scale: 0.97,
        filter: "blur(4px)",
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 3. Products Flagship: Vertical Lift and Unfold
  "vertical-lift": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.14, delayChildren: 0.06 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 45,
        scale: 0.95,
        filter: "blur(5px)",
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 4. Bento Catalog: Cyber-Bloom Aperture Expansion
  "bento-bloom": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.11, delayChildren: 0.05 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        scale: 0.92,
        y: 25,
        filter: "blur(6px)",
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 5. About Heritage: Diagonal Architectural Split
  "diagonal-float": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.04 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        x: 30,
        y: 25,
        scale: 0.97,
        filter: "blur(4px)",
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 6. Testimonials: Wave Cascade Floating
  "wave-cascade": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 40,
        rotateZ: -1.5,
        scale: 0.96,
        transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        y: 0,
        rotateZ: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 7. FAQ Accordion: Focus Unfold
  "focus-unfold": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.03 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 25,
        scale: 0.98,
        filter: "blur(4px)",
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },

  // 8. Contact Form: Grounded Magnetic Rise
  "magnetic-rise": {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
    },
    item: {
      hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
        filter: "blur(5px)",
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },
};

interface MotionStaggerGroupProps extends HTMLMotionProps<"div"> {
  preset?: ComponentAnimationPreset;
  children: React.ReactNode;
  viewportAmount?: number;
}

/**
 * Wraps a group of components (like cards or list items) and coordinates their
 * staggered entry and exit animations seamlessly when scrolling in and out.
 */
export function MotionStaggerGroup({
  preset = "vertical-lift",
  children,
  viewportAmount = 0.1,
  className,
  style,
  ...rest
}: MotionStaggerGroupProps) {
  const variants = presetVariants[preset] || presetVariants["vertical-lift"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: viewportAmount, margin: "0px 0px -30px 0px" }}
      variants={variants.container}
      className={className}
      style={{
        perspective: "1000px",
        willChange: "transform, opacity",
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface MotionComponentProps extends HTMLMotionProps<"div"> {
  preset?: ComponentAnimationPreset;
  customVariants?: Variants;
  children: React.ReactNode;
  standalone?: boolean;
  viewportAmount?: number;
}

/**
 * Individual animated component item. Can be used inside a MotionStaggerGroup
 * (inheriting stagger timing) or standalone (with its own viewport observer).
 */
export function MotionComponent({
  preset = "vertical-lift",
  customVariants,
  children,
  standalone = false,
  viewportAmount = 0.12,
  className,
  style,
  ...rest
}: MotionComponentProps) {
  const variants = customVariants || (presetVariants[preset]?.item ?? presetVariants["vertical-lift"].item);

  if (standalone) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: viewportAmount, margin: "0px 0px -30px 0px" }}
        variants={variants}
        className={className}
        style={{
          willChange: "transform, opacity, filter",
          ...style,
        }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      className={className}
      style={{
        willChange: "transform, opacity, filter",
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
