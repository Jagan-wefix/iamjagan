import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

type ModelProps = {
  autoRotate?: boolean;
  spin?: number;
  scale?: number;
};

function useAutoSpin(group: React.RefObject<THREE.Group | null>, spin: number) {
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * spin;
  });
}

function ObjCadModel({ assetName, autoRotate = true, spin = 0.16, scale = 1, flip180 = false }: ModelProps & { assetName: string; flip180?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const [loaded, setLoaded] = useState(false);

  if (autoRotate) useAutoSpin(group, spin);

  useEffect(() => {
    let cancelled = false;
    const materialsLoader = new MTLLoader();
    const loadObject = (materials?: MTLLoader.MaterialCreator) => {
      materials?.preload();
      const loader = new OBJLoader();
      if (materials) loader.setMaterials(materials);
      loader.load(`/models/${assetName}.obj`, (object) => {
        if (cancelled || !group.current) return;
        object.traverse((part) => {
          if (part instanceof THREE.Mesh) {
            part.castShadow = true;
            part.receiveShadow = true;
            const partMaterials = Array.isArray(part.material) ? part.material : [part.material];
            partMaterials.forEach((material) => {
              material.side = THREE.DoubleSide;
              material.needsUpdate = true;
            });
          }
        });
        const bounds = new THREE.Box3().setFromObject(object);
        const center = bounds.getCenter(new THREE.Vector3());
        const size = bounds.getSize(new THREE.Vector3());
        const fit = 2.2 / Math.max(size.x, size.y, size.z || 1);
        object.position.copy(center.multiplyScalar(-fit));
        object.scale.setScalar(fit);
        if (flip180) group.current.rotation.x = Math.PI;
        group.current.add(object);
        setLoaded(true);
      });
    };

    materialsLoader.load(`/models/${assetName}.mtl`, loadObject, undefined, () => loadObject());
    return () => {
      cancelled = true;
      group.current?.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
    };
  }, [assetName, flip180]);

  return (
    <group ref={group} scale={scale}>
      {!loaded && (
        <mesh>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#2f9bff" wireframe />
        </mesh>
      )}
    </group>
  );
}

const QuadcopterModel = (props: ModelProps) => <ObjCadModel {...props} assetName="drone-scout" flip180 />;
const UrinalAssemblyModel = (props: ModelProps) => <ObjCadModel {...props} assetName="urinal-assembly" />;
const EASInternalMechanismModel = (props: ModelProps) => <ObjCadModel {...props} assetName="eas-tag-internal-mechanism" />;

export type ModelKey = 'quadcopter' | 'urinal-assembly' | 'eas-tag-internal-mechanism';

export const models: Record<ModelKey, (props: ModelProps) => React.ReactElement> = {
  quadcopter: QuadcopterModel,
  'urinal-assembly': UrinalAssemblyModel,
  'eas-tag-internal-mechanism': EASInternalMechanismModel,
};
