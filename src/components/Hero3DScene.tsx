import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TowerDef {
  w: number;
  h: number;
  d: number;
  x: number;
  z: number;
  floors: number;
  windowCols: number;
  hasSpire?: boolean;
}

export default function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a1a1a, 0.038);

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 4.2, 12.8);
    camera.lookAt(0, 2.2, 0);

    // 2. Renderer with DPR Cap 1.75
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Cluster Group
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    // Shared Geometries & Materials for cleanup
    const disposables: { dispose: () => void }[] = [];

    // Charcoal Material for Towers
    const charcoalMat = new THREE.MeshStandardMaterial({
      color: 0x181818,
      roughness: 0.35,
      metalness: 0.8,
    });
    disposables.push(charcoalMat);

    // Gold Edge Line Material
    const goldEdgeMat = new THREE.LineBasicMaterial({
      color: 0xe3c27a,
      transparent: true,
      opacity: 0.72,
    });
    disposables.push(goldEdgeMat);

    // Spire Gold Material
    const goldSpireMat = new THREE.MeshStandardMaterial({
      color: 0xe3c27a,
      emissive: 0xa87b34,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2,
    });
    disposables.push(goldSpireMat);

    // 5 Stylised Towers Definitions
    const towers: TowerDef[] = [
      // 1. Center Marquee Tower (Highest icon)
      { w: 1.5, h: 5.6, d: 1.5, x: 0, z: 0, floors: 16, windowCols: 3, hasSpire: true },
      // 2. Left Tower (Soul City)
      { w: 1.35, h: 4.4, d: 1.35, x: -1.9, z: -0.5, floors: 12, windowCols: 3 },
      // 3. Right Tower (Marwa Tower One)
      { w: 1.4, h: 4.8, d: 1.25, x: 1.85, z: 0.3, floors: 14, windowCols: 3, hasSpire: true },
      // 4. Front-Left Accent Tower
      { w: 1.15, h: 3.2, d: 1.15, x: -1.1, z: 1.4, floors: 9, windowCols: 2 },
      // 5. Back-Right Accent Tower
      { w: 1.1, h: 3.8, d: 1.1, x: 1.2, z: -1.6, floors: 11, windowCols: 2 },
    ];

    // Compute total window count across all 5 towers
    let totalWindows = 0;
    towers.forEach((t) => {
      // 4 sides, rhythmic spacing
      totalWindows += t.floors * t.windowCols * 4;
    });

    // Window Geometry & Emissive Material
    const winGeom = new THREE.PlaneGeometry(0.12, 0.07);
    disposables.push(winGeom);

    const winMat = new THREE.MeshBasicMaterial({
      color: 0xf5de9c,
      side: THREE.DoubleSide,
    });
    disposables.push(winMat);

    const winInstMesh = new THREE.InstancedMesh(winGeom, winMat, totalWindows);
    disposables.push(winInstMesh);

    let winIdx = 0;
    const dummyMat4 = new THREE.Matrix4();
    const dummyPos = new THREE.Vector3();
    const dummyQuat = new THREE.Quaternion();
    const dummyScale = new THREE.Vector3(1, 1, 1);
    const euler = new THREE.Euler();

    // Create Towers & Windows
    towers.forEach((t) => {
      const boxGeom = new THREE.BoxGeometry(t.w, t.h, t.d);
      disposables.push(boxGeom);

      const mesh = new THREE.Mesh(boxGeom, charcoalMat);
      mesh.position.set(t.x, t.h / 2, t.z);
      clusterGroup.add(mesh);

      // Gold Edge Lines
      const edgeGeom = new THREE.EdgesGeometry(boxGeom);
      disposables.push(edgeGeom);
      const edgeLines = new THREE.LineSegments(edgeGeom, goldEdgeMat);
      edgeLines.position.copy(mesh.position);
      clusterGroup.add(edgeLines);

      // Optional Spire Crown
      if (t.hasSpire) {
        const crownGeom = new THREE.BoxGeometry(t.w * 0.65, 0.35, t.d * 0.65);
        disposables.push(crownGeom);
        const crown = new THREE.Mesh(crownGeom, charcoalMat);
        crown.position.set(t.x, t.h + 0.175, t.z);
        clusterGroup.add(crown);

        const spireGeom = new THREE.CylinderGeometry(0.02, 0.05, 0.85, 8);
        disposables.push(spireGeom);
        const spire = new THREE.Mesh(spireGeom, goldSpireMat);
        spire.position.set(t.x, t.h + 0.35 + 0.425, t.z);
        clusterGroup.add(spire);
      }

      // Add Emissive Windows
      const floorSpacing = (t.h - 0.5) / t.floors;
      const xSpacing = (t.w - 0.3) / (t.windowCols + 1);
      const zSpacing = (t.d - 0.3) / (t.windowCols + 1);

      for (let f = 0; f < t.floors; f++) {
        const y = 0.4 + f * floorSpacing;

        // Front Face (+Z)
        for (let c = 1; c <= t.windowCols; c++) {
          if ((f + c) % 3 !== 0 && winIdx < totalWindows) {
            const wx = t.x - t.w / 2 + c * xSpacing;
            const wz = t.z + t.d / 2 + 0.005;
            dummyPos.set(wx, y, wz);
            euler.set(0, 0, 0);
            dummyQuat.setFromEuler(euler);
            dummyMat4.compose(dummyPos, dummyQuat, dummyScale);
            winInstMesh.setMatrixAt(winIdx++, dummyMat4);
          }
        }

        // Back Face (-Z)
        for (let c = 1; c <= t.windowCols; c++) {
          if ((f * 2 + c) % 4 !== 0 && winIdx < totalWindows) {
            const wx = t.x - t.w / 2 + c * xSpacing;
            const wz = t.z - t.d / 2 - 0.005;
            dummyPos.set(wx, y, wz);
            euler.set(0, Math.PI, 0);
            dummyQuat.setFromEuler(euler);
            dummyMat4.compose(dummyPos, dummyQuat, dummyScale);
            winInstMesh.setMatrixAt(winIdx++, dummyMat4);
          }
        }

        // Right Face (+X)
        for (let c = 1; c <= t.windowCols; c++) {
          if ((f + c * 3) % 4 !== 0 && winIdx < totalWindows) {
            const wx = t.x + t.w / 2 + 0.005;
            const wz = t.z - t.d / 2 + c * zSpacing;
            dummyPos.set(wx, y, wz);
            euler.set(0, Math.PI / 2, 0);
            dummyQuat.setFromEuler(euler);
            dummyMat4.compose(dummyPos, dummyQuat, dummyScale);
            winInstMesh.setMatrixAt(winIdx++, dummyMat4);
          }
        }

        // Left Face (-X)
        for (let c = 1; c <= t.windowCols; c++) {
          if ((f + c * 2) % 3 !== 0 && winIdx < totalWindows) {
            const wx = t.x - t.w / 2 - 0.005;
            const wz = t.z - t.d / 2 + c * zSpacing;
            dummyPos.set(wx, y, wz);
            euler.set(0, -Math.PI / 2, 0);
            dummyQuat.setFromEuler(euler);
            dummyMat4.compose(dummyPos, dummyQuat, dummyScale);
            winInstMesh.setMatrixAt(winIdx++, dummyMat4);
          }
        }
      }
    });

    winInstMesh.count = winIdx;
    winInstMesh.instanceMatrix.needsUpdate = true;
    winInstMesh.computeBoundingSphere();
    clusterGroup.add(winInstMesh);

    // 4. Dark Reflective Ground
    const groundGeom = new THREE.PlaneGeometry(36, 36);
    disposables.push(groundGeom);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.18,
      metalness: 0.88,
    });
    disposables.push(groundMat);
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    // 5. Faint Gold Grid on Ground
    const grid = new THREE.GridHelper(26, 26, 0xa87b34, 0x4a3618);
    const gridMat = grid.material as THREE.LineBasicMaterial;
    gridMat.transparent = true;
    gridMat.opacity = 0.28;
    grid.position.y = 0.015;
    disposables.push(grid);
    scene.add(grid);

    // 6. Lighting (Warm Key Light, Soft Gold Rim Light, Ambient)
    const warmKeyLight = new THREE.DirectionalLight(0xffecd0, 2.8);
    warmKeyLight.position.set(8, 14, 10);
    scene.add(warmKeyLight);

    const goldRimLight = new THREE.DirectionalLight(0xe3c27a, 2.2);
    goldRimLight.position.set(-10, 8, -8);
    scene.add(goldRimLight);

    const hemiLight = new THREE.HemisphereLight(0xe3c27a, 0x111111, 0.7);
    scene.add(hemiLight);

    const towerGlowLight = new THREE.PointLight(0xe3c27a, 1.2, 12);
    towerGlowLight.position.set(0, 5.2, 0);
    scene.add(towerGlowLight);

    // 7. Mouse Parallax State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = THREE.MathUtils.clamp(x, -1, 1);
      mouseY = THREE.MathUtils.clamp(y, -1, 1);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // 9. Visibility & Intersection Observers (Pause when tab hidden or off-screen)
    let isVisible = true;
    let isIntersecting = true;
    let animationFrameId = 0;
    let clock = new THREE.Clock();

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && isIntersecting && animationFrameId === 0) {
        clock.start();
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (isVisible && isIntersecting && animationFrameId === 0) {
            clock.start();
            animate();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    // 10. Animation Loop (Slow auto-rotation + Gentle mouse parallax)
    const animate = () => {
      if (!isVisible || !isIntersecting) {
        animationFrameId = 0;
        return;
      }

      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);

      // Slow auto-rotation
      clusterGroup.rotation.y += delta * 0.15;

      // Gentle mouse parallax interpolation
      targetX = THREE.MathUtils.damp(targetX, mouseX * 0.35, 3.5, delta);
      targetY = THREE.MathUtils.damp(targetY, mouseY * 0.22, 3.5, delta);

      camera.position.x = targetX * 1.8;
      camera.position.y = 4.2 + targetY * 0.8;
      camera.lookAt(0, 2.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup on Unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();

      disposables.forEach((item) => {
        try {
          item.dispose();
        } catch {
          // Ignore
        }
      });

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[380px] sm:min-h-[460px] cursor-grab active:cursor-grabbing" />;
}
