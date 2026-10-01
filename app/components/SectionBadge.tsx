import React from "react";

interface SectionBadgeProps {
  /** Single label string or child elements */
  children?: React.ReactNode;
  /** Multiple items separated by subtle amber dots, e.g. ["EST. 2008", "AHMEDABAD, INDIA"] */
  items?: (string | React.ReactNode)[];
  /** Custom line width (default 26px) */
  lineWidth?: number;
  /** Extra inline styles for container */
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Reusable editorial overline badge.
 * Replaces generic boxy badges with an industrial amber accent line and tracked uppercase typography.
 */
export default function SectionBadge({
  children,
  items,
  lineWidth = 26,
  style,
  className,
}: SectionBadgeProps) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
        flexWrap: "wrap",
        ...style,
      }}
    >
      <span
        style={{
          width: lineWidth,
          height: 2,
          backgroundColor: "var(--primary)",
          display: "inline-block",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      {items && items.length > 0 ? (
        items.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            )}
            <span
              style={{
                fontSize: "0.74rem",
                fontWeight: 700,
                color: idx === 0 && items.length > 1 ? "var(--text-dim)" : "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              {item}
            </span>
          </React.Fragment>
        ))
      ) : (
        <span
          style={{
            fontSize: "0.74rem",
            fontWeight: 700,
            color: "var(--primary)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
          }}
        >
          {children}
        </span>
      )}
    </div>
  );
}
