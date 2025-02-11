import { CameraControls, Environment, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useEffect, useRef } from 'react'
import { Skateboard } from './Skateboard'
import * as THREE from 'three';

const Preview = ({sampleDeck,sampleWheel,sampleTruck,sampleBolt}) => {

    const ENVIRONMENT_COLOR = "#3B3A3A";


    function StageFloor() {
        const normalMap = useTexture('/src/public/concrete-normal.png')
        normalMap.wrapS = THREE.RepeatWrapping;
        normalMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(30, 30);
        normalMap.anisotropy = 8;

        const material = new THREE.MeshStandardMaterial({
            roughness: 0.75,
            color: ENVIRONMENT_COLOR,
            normalMap: normalMap,
        });
        return (
            <mesh
              castShadow
              receiveShadow
              position={[0, -0.005, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              material={material}
            >
              <circleGeometry args={[20, 32]} />
            </mesh>
          );
        
  }
  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(0, 0.3, 0),
      new THREE.Vector3(1.5, 0.8, 0)
    );
  }, [sampleDeck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.12, 0.29, 0.57),
      new THREE.Vector3(0.1, 0.25, 0.9)
    );
  }, [sampleTruck]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.08, 0.54, 0.64),
      new THREE.Vector3(0.09, 1, 0.9)
    );
  }, [sampleWheel]);

  useEffect(() => {
    setCameraControls(
      new THREE.Vector3(-0.25, 0.3, 0.62),
      new THREE.Vector3(-0.5, 0.35, 0.8)
    );
  }, [sampleBolt]);
  function setCameraControls(target, pos) {
    if (!cameraControls.current) return;

    cameraControls.current.setTarget(target.x, target.y, target.z, true);
    cameraControls.current.setPosition(pos.x, pos.y, pos.z, true);
  }

    function onCameraControlStart() {
        if (
          !cameraControls.current ||
          !floorRef.current ||
          cameraControls.current.colliderMeshes.length > 0
        )
          return;
    
        cameraControls.current.colliderMeshes = [floorRef.current];
      }
    const cameraControls = useRef(null);
  const floorRef = useRef(null);
  
  return (
      <Canvas camera={{ position: [2.5, 1, 0], fov: 65 }} shadows>
          <Suspense fallback={null}>
              <Environment files={"/src/public/hdr/warehouse-256.hdr"} environmentIntensity={0.6} />
              <directionalLight castShadow lookAt={[0, 0, 0]} position={[1, 1, 1]} intensity={1.6} />
              <fog attach="fog" args={[ENVIRONMENT_COLOR, 3, 10]} />
        <color attach="background" args={[ENVIRONMENT_COLOR]} />
              <StageFloor />
              <mesh rotation={[-Math.PI / 2, 0, 0]} ref={floorRef}>
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial visible={false} />
        </mesh>
              <Skateboard decktexture={sampleDeck} wheeltexture={sampleWheel} bolt={sampleBolt} truck={sampleTruck}  pose="side" position={[0,0,0]} />
              <CameraControls ref={cameraControls} minDistance={0.2} maxDistance={4} onStart={onCameraControlStart} />
          </Suspense>
          <Preload all/>
      </Canvas>
      
  )
}

export default Preview