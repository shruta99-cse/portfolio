import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function TechGlobe({ isVisible }) {
  const sphereRef = useRef();
  const ring1Ref = useRef();

  useFrame((state) => {
    if (!isVisible) return;
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group scale={1.1}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Core Wireframe Sphere */}
        <mesh ref={sphereRef}>
          <sphereGeometry args={[1.8, 20, 20]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.4} />
        </mesh>

        {/* Outer Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.4, 0.015, 12, 60]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DGlobe() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[400px] sm:h-[450px] relative pointer-events-none">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <TechGlobe isVisible={isVisible} />
        </Canvas>
      )}
    </div>
  );
}
