"use client";

import React, { useRef, useState, useEffect } from "react";

interface MachineVideoTwinProps {
  theme?: "dark" | "light";
  height?: number | string;
}

export default function MachineVideoTwin({ theme = "dark", height = 530 }: MachineVideoTwinProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [showTelemetry, setShowTelemetry] = useState<boolean>(true);

  const isDark = theme === "dark";

  // Handle Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Handle Replay
  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Handle Mute Toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle Speed Change
  const cycleSpeed = () => {
    if (!videoRef.current) return;
    const speeds = [1, 1.5, 0.5];
    const nextSpeed = speeds[(speeds.indexOf(playbackSpeed) + 1) % speeds.length];
    videoRef.current.playbackRate = nextSpeed;
    setPlaybackSpeed(nextSpeed);
  };

  // Handle Time Update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 10);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const target = parseFloat(e.target.value);
    videoRef.current.currentTime = target;
    setCurrentTime(target);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        borderRadius: 16,
        background: isDark
          ? "linear-gradient(180deg, #141720 0%, #0D0F14 100%)"
          : "linear-gradient(180deg, #FFFFFF 0%, #EEF2F6 100%)",
        border: "1px solid var(--border-subtle)",
        overflow: "hidden",
        boxShadow: "var(--card-shadow)",
      }}
      role="region"
      aria-label="Interactive Digital Twin Video of VIVA Simple Slitter TRS"
    >
      {/* Video Stream Element */}
      <video
        ref={videoRef}
        src="/slitter_twin_video.mp4"
        poster="/viva_machine_hero_animated.webp"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
        }}
      />

      {/* Top Header Bar */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 16,
          right: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Left Badge: Pulsing orange indicator + Title */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: isDark ? "rgba(10, 12, 16, 0.88)" : "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 8,
            padding: "6px 14px",
            fontSize: "0.78rem",
            fontWeight: 800,
            color: "var(--text-main)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            pointerEvents: "auto",
            boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
              display: "inline-block",
              boxShadow: "0 0 10px #F59E0B",
              animation: "viva-pulse 1.8s infinite ease-in-out",
            }}
            aria-hidden="true"
          />
          <span style={{ color: "var(--primary)" }}>VIVA DIGITAL TWIN</span>
          <span style={{ opacity: 0.4 }}>&bull;</span>
          <span>SIMPLE SLITTER TRS</span>
        </div>

        {/* Right Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, pointerEvents: "auto" }}>
          {/* Active Unwind Status Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: isDark ? "rgba(6, 182, 212, 0.16)" : "rgba(14, 165, 233, 0.14)",
              border: `1px solid ${isDark ? "rgba(6, 182, 212, 0.45)" : "rgba(14, 165, 233, 0.4)"}`,
              color: isDark ? "#22D3EE" : "#0284C7",
              borderRadius: 6,
              padding: "5px 12px",
              fontSize: "0.74rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              boxShadow: isDark ? "0 0 12px rgba(6, 182, 212, 0.15)" : "none",
            }}
          >
            <i className="fa-solid fa-bolt" aria-hidden="true"></i>
            <span>ACTIVE UNWIND</span>
          </div>

          {/* Pause / Resume Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Resume video"}
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.88)" : "rgba(255, 255, 255, 0.94)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-subtle)",
              color: isPlaying ? "var(--primary)" : "var(--text-main)",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: "0.76rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            <span style={{ fontSize: "0.82rem" }}>{isPlaying ? "⏸" : "▶"}</span>
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </button>

          {/* Replay Button */}
          <button
            type="button"
            onClick={handleReplay}
            aria-label="Replay video from beginning"
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.88)" : "rgba(255, 255, 255, 0.94)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-muted)",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: "0.76rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            <span style={{ fontSize: "0.85rem" }}>↺</span>
            <span>Replay</span>
          </button>
        </div>
      </div>

      {/* Floating Real-Time Telemetry HUD Overlay (Top-Right / Middle) */}
      {showTelemetry && (
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 16,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            pointerEvents: "none",
            zIndex: 8,
          }}
        >
          {/* Gauge 1: Operating Line Speed */}
          <div
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.85)" : "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 8,
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(245, 158, 11, 0.15)",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F59E0B",
                fontSize: "0.85rem",
              }}
            >
              <i className="fa-solid fa-gauge-high"></i>
            </div>
            <div>
              <div style={{ fontSize: "0.64rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                Line Speed
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.92rem", fontWeight: 900, color: "var(--text-main)" }}>
                600 <span style={{ fontSize: "0.7rem", color: "var(--primary)", fontWeight: 700 }}>m/min</span>
              </div>
            </div>
          </div>

          {/* Gauge 2: Tension Loadcell */}
          <div
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.85)" : "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 8,
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(6, 182, 212, 0.15)",
                border: "1px solid rgba(6, 182, 212, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#06B6D4",
                fontSize: "0.85rem",
              }}
            >
              <i className="fa-solid fa-wave-square"></i>
            </div>
            <div>
              <div style={{ fontSize: "0.64rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                Web Tension
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.92rem", fontWeight: 900, color: "var(--text-main)" }}>
                120 <span style={{ fontSize: "0.7rem", color: "#06B6D4", fontWeight: 700 }}>N (Constant)</span>
              </div>
            </div>
          </div>

          {/* Gauge 3: Efficiency */}
          <div
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.85)" : "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 8,
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#10B981",
                fontSize: "0.85rem",
              }}
            >
              <i className="fa-solid fa-check"></i>
            </div>
            <div>
              <div style={{ fontSize: "0.64rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
                Converting OEE
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.92rem", fontWeight: 900, color: "var(--text-main)" }}>
                98.4 <span style={{ fontSize: "0.7rem", color: "#10B981", fontWeight: 700 }}>%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Progress Scrubber Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 46,
          left: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: isDark ? "rgba(10, 12, 16, 0.82)" : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(10px)",
            padding: "4px 12px",
            borderRadius: 8,
            border: "1px solid var(--border-subtle)",
          }}
        >
          {/* Play/Pause Mini Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--primary)",
              cursor: "pointer",
              fontSize: "0.85rem",
              padding: "2px 4px",
            }}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          {/* Time Scrubber Slider */}
          <input
            type="range"
            min={0}
            max={duration || 10}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Video seek slider"
            style={{
              flex: 1,
              height: 4,
              accentColor: "var(--primary)",
              cursor: "pointer",
            }}
          />

          {/* Speed Toggle */}
          <button
            type="button"
            onClick={cycleSpeed}
            aria-label={`Playback speed ${playbackSpeed}x`}
            style={{
              background: "transparent",
              border: "1px solid var(--border-subtle)",
              borderRadius: 4,
              color: "var(--text-muted)",
              cursor: "pointer",
              fontSize: "0.68rem",
              fontWeight: 800,
              padding: "2px 6px",
              fontFamily: "var(--font-mono)",
            }}
          >
            {playbackSpeed}x
          </button>

          {/* Audio Mute/Unmute */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-dim)",
              cursor: "pointer",
              fontSize: "0.82rem",
              padding: "2px 4px",
            }}
          >
            <i className={`fa-solid ${isMuted ? "fa-volume-xmark" : "fa-volume-high"}`}></i>
          </button>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 16,
          right: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.75rem",
          color: "var(--text-dim)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Left helper note */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: isDark ? "rgba(10, 12, 16, 0.85)" : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid var(--border-subtle)",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "var(--primary)" }}>⊹</span>
          <span>Dual Rewind Shafts &bull; Rotary Slitting Blades &bull; Live Tension Physics</span>
        </span>

        {/* Right spec tag */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--primary)",
            fontWeight: 800,
            background: isDark ? "rgba(10, 12, 16, 0.85)" : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid var(--border-subtle)",
            letterSpacing: "0.05em",
          }}
        >
          4K UHD &bull; 600 M/MIN
        </span>
      </div>

      <style jsx>{`
        @keyframes viva-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(0.85);
            opacity: 0.55;
          }
        }
      `}</style>
    </div>
  );
}
