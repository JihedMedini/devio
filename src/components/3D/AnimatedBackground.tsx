'use client';

import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Detect if the device is likely to have performance issues
const isLowPerfDevice = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      typeof navigator !== 'undefined' ? navigator.userAgent : ''
    ) || (typeof window !== 'undefined' && window.innerWidth < 768)
  );
};

// Generate professional-looking particles
const generatePoints = (count, isPerfMode = false) => {
  // Reduce particle count for performance mode
  const actualCount = isPerfMode ? Math.floor(count * 0.3) : count;
  const positions = [];
  const colors = [];
  const sizes = [];

  const color = new THREE.Color();
  // Subtle professional color palette
  const palette = ['#0a4d68', '#088395', '#05bfdb', '#00ffca'];

  // Create a more organized, grid-like distribution with slight randomness
  const spacing = 3;
  const gridSize = Math.ceil(Math.cbrt(actualCount));
  
  for (let i = 0; i < actualCount; i++) {
    // Create grid-like positions with subtle randomness
    const ix = Math.floor(i / (gridSize * gridSize));
    const iy = Math.floor((i % (gridSize * gridSize)) / gridSize);
    const iz = i % gridSize;
    
    const x = (ix - gridSize / 2) * spacing + (Math.random() - 0.5) * spacing * 0.5;
    const y = (iy - gridSize / 2) * spacing + (Math.random() - 0.5) * spacing * 0.5;
    const z = (iz - gridSize / 2) * spacing + (Math.random() - 0.5) * spacing * 0.5;
    
    // Only use points within a spherical boundary for a more cohesive look
    const distance = Math.sqrt(x * x + y * y + z * z);
    if (distance < gridSize * spacing * 0.5) {
      positions.push(x, y, z);
      
      // Choose color based on distance from center for a gradient effect
      const normalizedDistance = distance / (gridSize * spacing * 0.5);
      const colorIndex = Math.min(Math.floor(normalizedDistance * palette.length), palette.length - 1);
      color.set(palette[colorIndex]);
      colors.push(color.r, color.g, color.b);
      
      // Vary size based on distance - smaller particles further away
      const size = 0.08 - normalizedDistance * 0.05;
      sizes.push(size);
    }
  }

  return {
    positions: new Float32Array(positions),
    colors: new Float32Array(colors),
    sizes: new Float32Array(sizes)
  };
};

// Professional particle cloud with subtle animations
const ParticleCloud = React.memo(({ isPerfMode }) => {
  const pointsRef = useRef();
  const particleCount = isPerfMode ? 500 : 1200;
  
  // Memoize the particles data
  const { positions, colors, sizes } = useMemo(() => {
    return generatePoints(particleCount, isPerfMode);
  }, [particleCount, isPerfMode]);

  // Subtle rotation animation
  const animatePoints = useCallback((state) => {
    if (pointsRef.current) {
      // Very slow, subtle rotation for a professional look
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.05;
    }
  }, []);

  useFrame(animatePoints);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
});

ParticleCloud.displayName = 'ParticleCloud';

// Subtle floating elements
const FloatingObjects = React.memo(({ count = 6, isPerfMode }) => {
  // Reduce count for performance mode
  const actualCount = isPerfMode ? Math.floor(count * 0.5) : count;
  
  const objects = useMemo(() => {
    return Array.from({ length: actualCount }).map((_, i) => {
      // More controlled size range for consistency
      const size = 0.3 + Math.random() * 0.2;
      
      // More controlled positioning - keep objects within view and well-distributed
      const theta = (i / actualCount) * Math.PI * 2;
      const radius = 5 + Math.random() * 2;
      const position = [
        Math.cos(theta) * radius,
        (Math.random() - 0.5) * 4,
        Math.sin(theta) * radius
      ];
      
      return { size, position };
    });
  }, [actualCount]);

  return objects.map((object, i) => (
    <Float 
      key={i}
      speed={0.5} // Slower, more subtle motion
      rotationIntensity={0.2} // More subtle rotation
      floatIntensity={0.5} // Reduced floating motion
      position={object.position}
    >
      <mesh>
        <sphereGeometry args={[object.size, 16, 16]} />
        <meshBasicMaterial color="#05bfdb" transparent opacity={0.15} />
      </mesh>
    </Float>
  ));
});

FloatingObjects.displayName = 'FloatingObjects';

const AnimatedBackground = ({ height = '100vh' }) => {
  const [isPerfMode, setIsPerfMode] = useState(false);
  
  // Detect performance mode on first load
  useEffect(() => {
    setIsPerfMode(isLowPerfDevice());
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height,
        zIndex: 0,
        background: 'linear-gradient(to bottom, #041c32, #064663)',
        overflow: 'hidden'
      }}
      className="will-change-transform hardware-accelerated"
    >
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={isPerfMode ? [1, 1.5] : [1, 2]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        <ParticleCloud isPerfMode={isPerfMode} />
        <FloatingObjects isPerfMode={isPerfMode} />
      </Canvas>
      
      {/* Add subtle grid overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default React.memo(AnimatedBackground); 