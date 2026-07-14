import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

// Roast journey (design tokens' values — three.js needs raw colors, not CSS vars):
// raw green -> espresso brown -> roasted gold highlight.
const ROAST_GREEN = new THREE.Color('#5E6B47');
const ROAST_BROWN = new THREE.Color('#241C18');
const ROAST_GOLD = new THREE.Color('#A16207');

/** Scroll progress across the first viewport height, 0..1. */
function heroScrollProgress(): number {
  if (typeof window === 'undefined') return 0;
  const max = window.innerHeight || 1;
  return Math.min(1, Math.max(0, window.scrollY / max));
}

function roastColor(p: number, out: THREE.Color): THREE.Color {
  if (p < 0.6) {
    return out.copy(ROAST_GREEN).lerp(ROAST_BROWN, p / 0.6);
  }
  return out.copy(ROAST_BROWN).lerp(ROAST_GOLD, ((p - 0.6) / 0.4) * 0.45);
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.MeshStandardMaterial>(null);
  const invalidate = useThree((s) => s.invalidate);

  const scroll = useRef(reduced ? 1 : heroScrollProgress());
  const pointer = useRef({ x: 0, y: 0 });
  const color = useMemo(() => new THREE.Color(), []);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      scroll.current = heroScrollProgress();
      invalidate();
    };
    const onPointer = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
      invalidate();
    };
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      pointer.current.x = Math.max(-1, Math.min(1, e.gamma / 30));
      pointer.current.y = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
      invalidate();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('deviceorientation', onTilt);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('deviceorientation', onTilt);
    };
  }, [reduced, invalidate]);

  useFrame(() => {
    const p = reduced ? 1 : scroll.current;
    if (material.current) {
      material.current.color = roastColor(p, color);
    }
    if (group.current) {
      const g = group.current;
      g.rotation.y = -0.4 + p * 1.2 + pointer.current.x * 0.15;
      g.rotation.x = 0.15 + pointer.current.y * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} color="#F0E7D6" />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#E7CE8A" />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#8A996E" />
      <group ref={group} rotation={[0.15, -0.4, -0.35]}>
        {/* Bean body: low-poly flattened sphere */}
        <mesh scale={[1, 1.4, 0.82]}>
          <icosahedronGeometry args={[1, 4]} />
          <meshStandardMaterial ref={material} roughness={0.55} metalness={0.08} flatShading />
        </mesh>
        {/* Center crease */}
        <mesh scale={[0.16, 1.42, 0.7]} position={[0, 0, 0.18]}>
          <sphereGeometry args={[1, 16, 24]} />
          <meshStandardMaterial color="#161210" roughness={0.9} />
        </mesh>
      </group>
    </>
  );
}
