import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeFloatingGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDark = document.documentElement.classList.contains("dark");
    const primaryColor = isDark ? 0x6366f1 : 0x5145e6;
    const accentColor = isDark ? 0x38bdf8 : 0x4f46e5;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 10, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. 3D Floating Wireframe Octahedron
    const octaGeom = new THREE.OctahedronGeometry(4.5, 1);
    const octaMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.28
    });
    const octaMesh = new THREE.Mesh(octaGeom, octaMat);
    octaMesh.position.y = 2;
    group.add(octaMesh);

    // 2. 3D Wave Particle Grid
    const cols = 28;
    const rows = 28;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);

    const step = 1.3;
    let idx = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        positions[idx * 3] = (i - cols / 2) * step;
        positions[idx * 3 + 1] = -4;
        positions[idx * 3 + 2] = (j - rows / 2) * step;
        idx++;
      }
    }

    const gridGeom = new THREE.BufferGeometry();
    gridGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const gridMat = new THREE.PointsMaterial({
      color: accentColor,
      size: 0.18,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4
    });
    const gridPoints = new THREE.Points(gridGeom, gridMat);
    group.add(gridPoints);

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let isVisible = true;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
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

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const time = clock.getElapsedTime();

      // Octahedron rotation & hover
      octaMesh.rotation.y += 0.01;
      octaMesh.rotation.x += 0.006;
      octaMesh.position.y = 2 + Math.sin(time * 2) * 0.6;

      // Dynamic wave on particle grid
      const pos = gridGeom.attributes.position.array;
      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const u = i / cols;
          const v = j / rows;
          pos[pIdx * 3 + 1] = -4 + Math.sin(u * 6 + time * 2) * 0.8 + Math.cos(v * 6 + time * 1.5) * 0.8;
          pIdx++;
        }
      }
      gridGeom.attributes.position.needsUpdate = true;

      // Gentle mouse parallax
      group.rotation.y += (targetX * 0.3 - group.rotation.y) * 0.05;
      group.rotation.x += (targetY * 0.2 - group.rotation.x) * 0.05;

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

      octaGeom.dispose();
      octaMat.dispose();
      gridGeom.dispose();
      gridMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-60 dark:opacity-75"
      aria-hidden="true"
    />
  );
}

