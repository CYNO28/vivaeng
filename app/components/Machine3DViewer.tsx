"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

interface Machine3DViewerProps {
  theme?: "dark" | "light";
  height?: number | string;
}

interface RotatingPart {
  object: THREE.Object3D;
  axis: THREE.Vector3;
  speedMultiplier: number;
}

export default function Machine3DViewer({ theme = "dark", height = 520 }: Machine3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const isPlayingRef = useRef<boolean>(true);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rotatingPartsRef = useRef<RotatingPart[]>([]);
  const cyanRingsRef = useRef<THREE.Mesh[]>([]);

  // Default camera & target values for isometric view & reset handler
  const defaultCameraPos = useRef(new THREE.Vector3(3.6, 2.3, 4.6));
  const defaultTarget = useRef(new THREE.Vector3(0, 0.05, 0));

  // Sync isPlaying state with animation ref
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Reset handler to restore camera position and target orientation
  const handleReset = useCallback(() => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.copy(defaultCameraPos.current);
      controlsRef.current.target.copy(defaultTarget.current);
      controlsRef.current.update();
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 700;
    const h = typeof height === "number" ? height : container.clientHeight || 520;
    const isDark = theme === "dark";

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera: Isometric 3/4 perspective
    const camera = new THREE.PerspectiveCamera(36, width / h, 0.1, 100);
    camera.position.copy(defaultCameraPos.current);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.3 : 1.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.replaceChildren(renderer.domElement);

    // 4. OrbitControls: Smooth damping, zoom limits, prevent floor flipping
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2.0;
    controls.maxDistance = 10.0;
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Prevent flipping upside down
    controls.target.copy(defaultTarget.current);
    controls.update();
    controlsRef.current = controls;

    // 5. Studio Environment Map (RoomEnvironment via PMREMGenerator for realistic metal reflections)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    // 6. Studio Lighting Setup (Clean European Machine Aesthetic)
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0xffffff : 0xf8fafc,
      isDark ? 1.1 : 1.5
    );
    scene.add(ambientLight);

    // Key Light (Warm directional light from top front-right)
    const keyLight = new THREE.DirectionalLight(0xffffff, isDark ? 2.4 : 2.8);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Fill Light (Soft cool light from opposite angle)
    const fillLight = new THREE.DirectionalLight(0xe2e8f0, isDark ? 1.2 : 1.4);
    fillLight.position.set(-6, 4, 3);
    scene.add(fillLight);

    // Rim / Contour Light (Cyan/White accent edge light)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, isDark ? 0.9 : 0.6);
    rimLight.position.set(-4, 5, -5);
    scene.add(rimLight);

    // Floor Contact Shadow Disk
    const floorGeo = new THREE.PlaneGeometry(7.5, 7.5);
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
    grad.addColorStop(0, isDark ? "rgba(0,0,0,0.72)" : "rgba(15,23,42,0.24)");
    grad.addColorStop(0.5, isDark ? "rgba(0,0,0,0.28)" : "rgba(15,23,42,0.08)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    const floorTex = new THREE.CanvasTexture(canvas);

    const floorMat = new THREE.MeshBasicMaterial({
      map: floorTex,
      transparent: true,
      depthWrite: false,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.7;
    scene.add(floorMesh);

    // 7. Materials Setup (Clean European Machine Aesthetic)
    // Machine body panels (pCube, polySurface): Smooth industrial off-white / light slate gray
    const bodyPanelMaterial = new THREE.MeshStandardMaterial({
      color: 0xf3f4f6,
      roughness: 0.25,
      metalness: 0.1,
    });

    // Steel rollers & shafts (pCylinder): Chrome / brushed steel finish
    const chromeRollerMaterial = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      metalness: 0.85,
      roughness: 0.2,
    });

    // Slitting blades & brackets: Industrial yellow or safety amber accents (#F59E0B)
    const safetyAmberMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.3,
      metalness: 0.1,
    });

    // Substrate Jumbo Roll: Crisp white paper / film roll
    const paperRollMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.65,
      metalness: 0.02,
    });

    // Motors & Electrical Drives: Dark industrial slate
    const motorMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.55,
    });

    // Cable carriers / Conduits
    const darkTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.5,
      metalness: 0.2,
    });

    // 8. Load GLTF Model & Preserve Hierarchy
    const loader = new GLTFLoader();
    const modelUrl = "/models/scene.gltf";

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;

        // Ensure all roller children maintain relative world transforms:
        // Center and scale the model automatically using Box3
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        // Normalize scale to fit the isometric viewport cleanly
        const targetScale = 3.5 / (maxDim || 1);
        model.scale.setScalar(targetScale);

        // Center model at (0, 0, 0)
        model.position.x = -center.x * targetScale;
        model.position.y = -center.y * targetScale;
        model.position.z = -center.z * targetScale;

        // Traverse all meshes and assign the European machine materials
        const rotatingParts: RotatingPart[] = [];
        let rollMesh: THREE.Object3D | null = null;

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const name = (mesh.name || "").toLowerCase();

            // 1. Jumbo Unwind Roll (Cylinder 81, 82, 83)
            if (name.includes("cylinder81") || name.includes("cylinder82") || name.includes("cylinder83")) {
              mesh.material = paperRollMaterial;
              rollMesh = mesh;
              // Rotate along local cylinder Y axis (centered in X and Z)
              rotatingParts.push({
                object: mesh,
                axis: new THREE.Vector3(0, 1, 0),
                speedMultiplier: 1.0,
              });
            }
            // 2. Rewind Drive Shaft (Cylinder 68)
            else if (name.includes("cylinder68")) {
              mesh.material = chromeRollerMaterial;
              rotatingParts.push({
                object: mesh,
                axis: new THREE.Vector3(0, 1, 0),
                speedMultiplier: 1.6,
              });
            }
            // 3. Slitted Finished Reels / Friction Cores on Rewind Shaft (Cylinder 69, 78-80, 84-87)
            else if (
              name.includes("cylinder69") ||
              name.includes("cylinder78") ||
              name.includes("cylinder79") ||
              name.includes("cylinder80") ||
              name.includes("cylinder84") ||
              name.includes("cylinder85") ||
              name.includes("cylinder86") ||
              name.includes("cylinder87")
            ) {
              mesh.material = chromeRollerMaterial;
              rotatingParts.push({
                object: mesh,
                axis: new THREE.Vector3(0, 1, 0),
                speedMultiplier: 1.6,
              });
            }
            // 4. Slitting Blades & Safety Brackets: Safety amber accents (#F59E0B)
            else if (
              name.includes("cylinder22") ||
              name.includes("cylinder23") ||
              name.includes("cylinder6") ||
              name.includes("cylinder7") ||
              name.includes("cube18") ||
              name.includes("polysurface40") ||
              name.includes("polysurface43")
            ) {
              mesh.material = safetyAmberMaterial;
            }
            // 5. Electric Motors & Drives
            else if (
              name.includes("cylinder4") ||
              name.includes("cylinder32") ||
              name.includes("cylinder34") ||
              name.includes("cylinder35") ||
              name.includes("cylinder36")
            ) {
              mesh.material = motorMaterial;
            }
            // 6. Cable Carriers / Conduits
            else if (name.includes("helix")) {
              mesh.material = darkTrimMaterial;
            }
            // 7. Steel Rollers & Shafts: Chrome/brushed steel finish
            else if (name.includes("cylinder")) {
              mesh.material = chromeRollerMaterial;
            }
            // 8. Body Panels & Machine Frames: Off-white / light slate gray
            else {
              mesh.material = bodyPanelMaterial;
            }
          }
        });

        rotatingPartsRef.current = rotatingParts;
        scene.add(model);

        // 9. Add Animated Electric Cyan Concentric Pulse Rings on Roll Core
        const ringsGroup = new THREE.Group();
        const rings: THREE.Mesh[] = [];

        for (let i = 0; i < 3; i++) {
          const ringGeo = new THREE.RingGeometry(0.18 + i * 0.08, 0.22 + i * 0.08, 36);
          const ringMat = new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            transparent: true,
            opacity: 0.85 - i * 0.22,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
          });
          const ringMesh = new THREE.Mesh(ringGeo, ringMat);
          ringMesh.rotation.y = Math.PI / 2;
          ringMesh.position.set(0.92, -0.05, 0.65);
          ringsGroup.add(ringMesh);
          rings.push(ringMesh);
        }
        scene.add(ringsGroup);
        cyanRingsRef.current = rings;

        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error loading 3D slitter model:", err);
        setLoadError("Unable to load 3D slitter model from /models/scene.gltf.");
        setIsLoading(false);
      }
    );

    // 9. Continuous Runtime Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const elapsedTime = (now - startTime) / 1000;

      // Only advance physics tick when isPlaying is active
      if (isPlayingRef.current) {
        // Line speed = 600 m/min continuous rotation
        const baseSpeed = 2.8;

        rotatingPartsRef.current.forEach((part) => {
          part.object.rotateOnAxis(part.axis, baseSpeed * part.speedMultiplier * delta);
        });

        // Animate cyan concentric pulse rings on roll core
        cyanRingsRef.current.forEach((ring, index) => {
          const phase = (elapsedTime * 1.8 + index * 0.35) % 1;
          const scale = 1.0 + phase * 0.55;
          ring.scale.set(scale, scale, 1);
          (ring.material as THREE.MeshBasicMaterial).opacity = (1 - phase) * 0.85;
        });
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // 10. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 700;
      const newHeight = typeof height === "number" ? height : container.clientHeight || 520;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.dispose();
      controls.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme, height]);

  const isDark = theme === "dark";

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
      aria-label="Interactive 3D digital twin model of VIVA Simple Slitter TRS"
    >
      {/* 3D Canvas Mount Point */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
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
          zIndex: 5,
        }}
      >
        {/* Left Badge: Pulsing orange indicator + Title */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: isDark ? "rgba(10, 12, 16, 0.88)" : "rgba(255, 255, 255, 0.92)",
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
              background: isDark ? "rgba(6, 182, 212, 0.16)" : "rgba(14, 165, 233, 0.12)",
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
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause 3D rotation" : "Resume 3D rotation"}
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.88)" : "rgba(255, 255, 255, 0.92)",
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
            <span>{isPlaying ? "Pause" : "Resume"}</span>
          </button>

          {/* Reset Camera Button */}
          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset 3D camera angle"
            style={{
              background: isDark ? "rgba(10, 12, 16, 0.88)" : "rgba(255, 255, 255, 0.92)",
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
            <span>Reset</span>
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
          zIndex: 5,
        }}
      >
        {/* Left helper note */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: isDark ? "rgba(10, 12, 16, 0.82)" : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid var(--border-subtle)",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "var(--primary)" }}>⊹</span>
          <span>Click &amp; drag 360&deg; &bull; Scroll to zoom &bull; Real-time Physics</span>
        </span>

        {/* Right spec tag */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--primary)",
            fontWeight: 800,
            background: isDark ? "rgba(10, 12, 16, 0.82)" : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid var(--border-subtle)",
            letterSpacing: "0.05em",
          }}
        >
          GLTF 2.0 &bull; 600 M/MIN
        </span>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isDark ? "rgba(10, 11, 13, 0.95)" : "rgba(248, 250, 252, 0.95)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              border: "3px solid var(--border-subtle)",
              borderTopColor: "var(--primary)",
              borderRadius: "50%",
              animation: "viva-spin 0.8s linear infinite",
            }}
          />
          <span style={{ fontSize: "0.85rem", color: "var(--text-main)", fontWeight: 800 }}>
            Initializing 3D Slitter Digital Twin...
          </span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
            Loading /models/scene.gltf &bull; Synchronizing 600 M/MIN line dynamics
          </span>
        </div>
      )}

      {/* Error Fallback */}
      {loadError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "var(--text-muted)",
            background: isDark ? "rgba(10, 11, 13, 0.95)" : "rgba(248, 250, 252, 0.95)",
            zIndex: 10,
          }}
        >
          <i
            className="fa-solid fa-triangle-exclamation"
            style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: 12 }}
            aria-hidden="true"
          />
          <span style={{ fontSize: "0.92rem", fontWeight: 700 }}>{loadError}</span>
        </div>
      )}

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
        @keyframes viva-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
