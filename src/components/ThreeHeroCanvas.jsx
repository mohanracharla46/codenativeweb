import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect dark mode
    const isDark = document.documentElement.classList.contains("dark");

    // Colors
    const primaryColor = isDark ? 0x6366f1 : 0x5145e6;
    const accentColor = isDark ? 0x38bdf8 : 0x4f46e5;
    const particleColor = isDark ? 0x818cf8 : 0x6366f1;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Group for 3D System Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Icosahedron Wireframe
    const innerGeom = new THREE.IcosahedronGeometry(6.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.28,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // 2. Outer Geodesic Lattice
    const outerGeom = new THREE.IcosahedronGeometry(8.6, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.22 : 0.14,
    });
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    coreGroup.add(outerMesh);

    // 3. Floating 3D Data Node Particles
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    const radius = 10.5;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = radius * (0.8 + Math.random() * 0.4);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.28,
      transparent: true,
      opacity: isDark ? 0.85 : 0.65,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    coreGroup.add(particles);

    // 4. Orbital System Rings
    const ring1Geom = new THREE.RingGeometry(8.2, 8.28, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDark ? 0.35 : 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geom = new THREE.RingGeometry(9.6, 9.68, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: accentColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDark ? 0.25 : 0.15,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    coreGroup.add(ring2);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isVisible = true;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.45;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // IntersectionObserver to pause rendering when offscreen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Continuous ambient rotation
      coreGroup.rotation.y += 0.2 * delta;
      innerMesh.rotation.x += 0.15 * delta;
      innerMesh.rotation.z += 0.1 * delta;
      outerMesh.rotation.y -= 0.12 * delta;

      ring1.rotation.z += 0.15 * delta;
      ring2.rotation.z -= 0.18 * delta;

      // Subtle breathing scale
      const scale = 1 + Math.sin(time * 1.5) * 0.03;
      coreGroup.scale.set(scale, scale, scale);

      // Smooth mouse follow lerp
      coreGroup.rotation.y += (targetRotationY - (coreGroup.rotation.y % (Math.PI * 2))) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      innerGeom.dispose();
      innerMat.dispose();
      outerGeom.dispose();
      outerMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-75 dark:opacity-90"
      style={{ perspective: "1000px" }}
      aria-hidden="true"
    />
  );
}

