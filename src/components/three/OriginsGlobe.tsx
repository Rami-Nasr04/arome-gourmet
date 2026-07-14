import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import { ORIGINS } from '@/lib/data/origins';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface OriginsGlobeProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const RADIUS = 1;
const PIN_RADIUS = 0.035;
const HIT_RADIUS = 0.11; // generous invisible hit area (≥44px on typical layouts)

// three.js needs raw colors; values mirror the design tokens.
const GLOBE_COLOR = '#3C4A33';
const WIRE_COLOR = '#C9B48E';
const PIN_COLOR = new THREE.Color('#C9A227');
const PIN_SELECTED_COLOR = new THREE.Color('#E7CE8A');

// Imperative canvas styling lives outside the component so the react-hooks
// compiler analysis doesn't treat the three.js-owned DOM node as React state.
function styleCanvas(el: HTMLCanvasElement, cursor: string): void {
  el.style.touchAction = 'pan-y';
  el.style.cursor = cursor;
}

function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

export default function OriginsGlobe({ selectedId, onSelect }: OriginsGlobeProps) {
  const reduced = usePrefersReducedMotion();
  const group = useRef<THREE.Group>(null);
  const pins = useRef<THREE.InstancedMesh>(null);
  const hits = useRef<THREE.InstancedMesh>(null);
  const invalidate = useThree((s) => s.invalidate);
  const gl = useThree((s) => s.gl);

  const rotation = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const positions = useMemo(
    () => ORIGINS.map((o) => latLngToVec3(o.lat, o.lng, RADIUS * 1.01)),
    [],
  );

  // Horizontal-only drag: vertical swipes keep scrolling the page.
  useEffect(() => {
    const el = gl.domElement;
    styleCanvas(el, 'grab');

    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      lastX.current = e.clientX;
      styleCanvas(el, 'grabbing');
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      rotation.current += (e.clientX - lastX.current) * 0.005;
      lastX.current = e.clientX;
      invalidate();
    };
    const onUp = () => {
      dragging.current = false;
      styleCanvas(el, 'grab');
    };

    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [gl, invalidate]);

  // Instance matrices + colors.
  useEffect(() => {
    const m = new THREE.Matrix4();
    const s = new THREE.Vector3();
    positions.forEach((pos, i) => {
      const selected = ORIGINS[i].id === selectedId;
      s.setScalar(selected ? 1.8 : 1);
      m.compose(pos, new THREE.Quaternion(), s);
      pins.current?.setMatrixAt(i, m);
      hits.current?.setMatrixAt(i, m);
      pins.current?.setColorAt(i, selected ? PIN_SELECTED_COLOR : PIN_COLOR);
    });
    if (pins.current) {
      pins.current.instanceMatrix.needsUpdate = true;
      if (pins.current.instanceColor) pins.current.instanceColor.needsUpdate = true;
    }
    if (hits.current) hits.current.instanceMatrix.needsUpdate = true;
    invalidate();
  }, [positions, selectedId, invalidate]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y = rotation.current;
    if (!reduced && !dragging.current) {
      rotation.current += delta * 0.08;
      invalidate(); // keeps the demand loop spinning while mounted (in view)
    }
  });

  const onPinClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (e.instanceId !== undefined) onSelect(ORIGINS[e.instanceId].id);
  };

  return (
    <>
      <ambientLight intensity={0.9} color="#F0E7D6" />
      <directionalLight position={[4, 3, 5]} intensity={1.1} color="#E7CE8A" />
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[RADIUS, 5]} />
          <meshStandardMaterial color={GLOBE_COLOR} roughness={0.85} flatShading />
        </mesh>
        <mesh>
          <sphereGeometry args={[RADIUS * 1.002, 24, 16]} />
          <meshBasicMaterial color={WIRE_COLOR} wireframe transparent opacity={0.12} />
        </mesh>
        <instancedMesh ref={pins} args={[undefined, undefined, ORIGINS.length]}>
          <sphereGeometry args={[PIN_RADIUS, 12, 12]} />
          <meshStandardMaterial emissive={PIN_COLOR} emissiveIntensity={0.9} color={PIN_COLOR} />
        </instancedMesh>
        <instancedMesh
          ref={hits}
          args={[undefined, undefined, ORIGINS.length]}
          onClick={onPinClick}
          visible
        >
          <sphereGeometry args={[HIT_RADIUS, 8, 8]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </instancedMesh>
      </group>
    </>
  );
}
