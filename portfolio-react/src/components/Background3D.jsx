import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleNetwork() {
  const ref = useRef();
  const { mouse, viewport } = useThree();

  // Create random points in 3D space
  const count = 2000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15; // x
      p[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      p[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    return p;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    
    // Slow rotation
    ref.current.rotation.x -= 0.0005;
    ref.current.rotation.y -= 0.0005;
    
    // Interactive mouse parallax effect
    ref.current.position.x += (mouse.x * 0.5 - ref.current.position.x) * 0.05;
    ref.current.position.y += (mouse.y * 0.5 - ref.current.position.y) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00F5FF"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-background overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#050505', 3, 10]} />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
