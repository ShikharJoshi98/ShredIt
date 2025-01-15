import * as THREE from "three";
import { ContactShadows, Environment, Html, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import { Skateboard } from './Skateboard'
import gsap from 'gsap'


const INITIAL_CAMERA_POSITION = [2,1.1,2.695] ;

const InteractiveSkateboard = ({decktexture,wheeltexture,boltcolor,truckColor}) => {
  function Scene() {
    const containerRef = useRef(null);
    const originRef = useRef(null);
    
    const { camera } = useThree();

    useEffect(() => {
      if (!containerRef.current || !originRef.current) return;
  
      gsap.to(containerRef.current.position, {
        x: 0.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
  
      gsap.to(originRef.current.rotation, {
        y: Math.PI / 64,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, []);

    useEffect(() => {
      camera.lookAt(new THREE.Vector3(-0.2, 0.15, 0));
  
      setZoom();
  
      window.addEventListener("resize", setZoom);
  
      function setZoom() {
        const scale = Math.max(Math.min(1000 / window.innerWidth, 2.2), 1);
  
        camera.position.x = INITIAL_CAMERA_POSITION[0] * scale;
        camera.position.y = INITIAL_CAMERA_POSITION[1] * scale;
        camera.position.z = INITIAL_CAMERA_POSITION[2] * scale;
      }
  
      return () => window.removeEventListener("resize", setZoom);
    }, [camera]);

    function onClick(event) {
      event.stopPropagation();
  
      const board = containerRef.current;
      const origin = originRef.current;
  
      if (!board || !origin  ) return;
  
      const {name} = event.object;
  
      if (name === "back") {
        ollie(board);
      } else if (name === "middle") {
        kickflip(board);
      } else if (name === "front") {
        frontside360(board, origin);
      }
    }
    function ollie(board) {
      jumpBoard(board);
  
      gsap
        .timeline()
        .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
        .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
        .to(board.rotation, { x: 0, duration: 0.12, ease: "none" });
    }
    function kickflip(board) {
      jumpBoard(board);
  
      gsap
        .timeline()
        .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
        .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
        .to(
          board.rotation,
          {
            z: `+=${Math.PI * 2}`,
            duration: 0.78,
            ease: "none",
          },
          0.3
        )
        .to(board.rotation, { x: 0, duration: 0.12, ease: "none" });
    }

    function frontside360(board, origin) {
      jumpBoard(board);
  
      gsap
        .timeline()
        .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
        .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
        .to(
          origin.rotation,
          {
            y: `+=${Math.PI * 2}`,
            duration: 0.77,
            ease: "none",
          },
          0.3
        )
        .to(board.rotation, { x: 0, duration: 0.14, ease: "none" });
    }

    function frontside360(board, origin) {
      jumpBoard(board);
  
      gsap
        .timeline()
        .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
        .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
        .to(
          origin.rotation,
          {
            y: `+=${Math.PI * 2}`,
            duration: 0.77,
            ease: "none",
          },
          0.3
        )
        .to(board.rotation, { x: 0, duration: 0.14, ease: "none" });
    }
    function jumpBoard(board) {
     
  
      gsap
        .timeline()
        .to(board.position, {
          y: 0.8,
          duration: 0.51,
          ease: "power2.out",
          delay: 0.26,
        })
        .to(board.position, {
          y: 0,
          duration: 0.43,
          ease: "power2.in",
        });
    }
  

    return (
      < group >
        
        <Environment files={"/src/public/hdr/warehouse-256.hdr"} /> 
        <group ref={originRef}>
        <group ref={containerRef} position={[-0.25, 0, -0.635]}>
            <group position={[0, -0.086, 0.635]}>
            <Skateboard decktexture={decktexture} wheeltexture={wheeltexture} bolt={boltcolor} truck={truckColor} constantWheelSpin  />
            <mesh position={[0, 0.27, 0.9]} name="front" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
              </mesh>
              <mesh position={[0, 0.27, 0]} name="middle" onClick={onClick}>
              <boxGeometry args={[0.6, 0.1, 1.2]} />
              <meshStandardMaterial visible={false} />
              </mesh>
              <mesh position={[0, 0.27, -0.9]} name="back" onClick={onClick}>
              <boxGeometry args={[0.6, 0.2, 0.58]} />
              <meshStandardMaterial visible={false} />
            </mesh>
            </group>
          </group>
        </group>
        <ContactShadows opacity={0.38} position={[0, -0.08, 0]} />
        
        

        
        </group>
    )
  }
  return (
    
    <div className="absolute inset-0 flex items-center pl-[22rem] ">
      
      <Canvas className="w-full min-h-[50rem]" camera={{ position: INITIAL_CAMERA_POSITION, fov: 40 }}>
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
    
    
  )
}



export default InteractiveSkateboard