'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Nodes() {
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const linesRef = useRef<THREE.LineSegments>(null);

  const nodePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 15; i++) {
      positions.push([
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
      ]);
    }
    return positions;
  }, []);

  const linePositions = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodePositions[i][0] - nodePositions[j][0], 2) +
          Math.pow(nodePositions[i][1] - nodePositions[j][1], 2) +
          Math.pow(nodePositions[i][2] - nodePositions[j][2], 2)
        );
        if (dist < 3) {
          positions.push(...nodePositions[i], ...nodePositions[j]);
        }
      }
    }
    return new Float32Array(positions);
  }, [nodePositions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    nodesRef.current.forEach((node, i) => {
      if (node) {
        const scale = 1 + Math.sin(time + i) * 0.2;
        node.scale.set(scale, scale, scale);
        const material = node.material as THREE.MeshBasicMaterial;
        material.opacity = 0.6 + Math.sin(time + i) * 0.4;
      }
    });
  });

  return (
    <>
      {nodePositions.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => {
            if (el) nodesRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.8} />
        </mesh>
      ))}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" opacity={0.3} transparent />
      </lineSegments>
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Nodes />
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
    </Canvas>
  );
}
