import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import type { ModelKey } from './Models';
import { models } from './Models';

function PointerParallax({ group }: { group: React.RefObject<THREE.Group | null> }) {
  const { pointer } = useThree();
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += (pointer.y * 0.25 - group.current.rotation.x) * 0.05;
      group.current.rotation.y += (-pointer.x * 0.4 - group.current.rotation.y) * 0.05;
      group.current.position.x += (pointer.x * 0.3 - group.current.position.x) * 0.05;
    }
  });
  return null;
}

type SceneProps = {
  modelKey: ModelKey;
  interactive?: boolean;
  autoRotate?: boolean;
  intensity?: 'hero' | 'card' | 'full';
  className?: string;
  pointerParallax?: boolean;
};

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color="#2f9bff" wireframe />
    </mesh>
  );
}

export function ModelScene({ modelKey, interactive = false, autoRotate = true, intensity = 'card', className, pointerParallax = false }: SceneProps) {
  const controls = useRef(null);
  const Model = models[modelKey];
  const parallaxGroup = useRef<THREE.Group>(null);

  const camDist = intensity === 'hero' ? 4.5 : intensity === 'full' ? 5 : 4;
  const scale = intensity === 'hero' ? 1.05 : intensity === 'full' ? 1.1 : 0.8;
  const dpr: [number, number] = intensity === 'hero' ? [1, 2] : [1, 1.5];

  return (
    <div className={`relative block min-h-0 w-full h-full ${className ?? ''}`} style={{ touchAction: interactive ? 'none' : 'auto' }}>
      <Canvas
      style={{ display: 'block', width: '100%', height: '100%' }}
        dpr={dpr}
        camera={{ position: [0, 1.2, camDist], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        shadows={intensity !== 'card'}
        frameloop={intensity === 'card' ? 'demand' : 'always'}
      >
        <ambientLight intensity={0.35} />
        <hemisphereLight args={['#dceeff', '#182333', 0.8]} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-4, 2, -3]} intensity={0.6} color="#2f9bff" />
        <pointLight position={[3, -2, 3]} intensity={0.5} color="#ffb36b" />
        <Suspense fallback={<Loader />}>
          <group ref={parallaxGroup}>
            <Float speed={1.4} rotationIntensity={interactive ? 0 : 0.3} floatIntensity={0.5} floatingRange={[-0.08, 0.08]}>
              <Model autoRotate={autoRotate} scale={scale} />
            </Float>
            {intensity !== 'card' && (
              <ContactShadows position={[0, -1.3, 0]} opacity={0.5} scale={8} blur={2.4} far={4} color="#000000" />
            )}
          </group>
          {pointerParallax && <PointerParallax group={parallaxGroup} />}
        </Suspense>
        {interactive && (
          <OrbitControls
            ref={controls}
            enablePan={false}
            enableZoom={intensity === 'full'}
            enableRotate
            autoRotate={autoRotate}
            autoRotateSpeed={0.8}
            minDistance={1.2}
            maxDistance={12}
            minPolarAngle={0.05}
            maxPolarAngle={Math.PI - 0.05}
            enableDamping
            dampingFactor={0.08}
          />
        )}
      </Canvas>
    </div>
  );
}

export default ModelScene;
