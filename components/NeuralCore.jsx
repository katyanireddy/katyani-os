import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Stars } from "@react-three/drei";
import { Points, PointMaterial } from "@react-three/drei";

function Sphere() {

  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.002;
    sphereRef.current.rotation.x += 0.001;
  });
  useFrame((state) => {

  const scale =
    1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;

  sphereRef.current.scale.set(
    scale,
    scale,
    scale
  );

  sphereRef.current.rotation.y += 0.002;
});

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3.8,128,128]} />
      <meshStandardMaterial
        wireframe
        color="#8b5cf6"
      />
    </mesh>
  );
}

export default function NeuralCore() {
  return (
    <Canvas camera={{ position:[0,0,15] }} >

      <ambientLight intensity={2} />

      <pointLight
        position={[10,10,10]}
        intensity={80}
      />

      <pointLight
        position={[-10,-10,-10]}
        intensity={50}
        color="#22d3ee"
      />
      <pointLight
 position={[0,0,0]}
 intensity={80}
 color="#22d3ee"
/>

      <mesh>
  <sphereGeometry args={[0.3,32,32]} />
  <meshBasicMaterial color="#22d3ee" />
</mesh>

      <mesh>
        <sphereGeometry args={[4.5,64,64]} />
        <meshStandardMaterial
  wireframe
  color="#8b5cf6"
  emissive="#8b5cf6"
  emissiveIntensity={2}
/>
      </mesh>

       {/* Ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>

      {/* Ring 2 */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[5.5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>

      <mesh>
  <sphereGeometry args={[5.8,64,64]} />
  <meshBasicMaterial
    color="#22d3ee"
    transparent
    opacity={0.03}
  />
</mesh>
<mesh>
  <sphereGeometry args={[0.25, 32, 32]} />
  <meshBasicMaterial color="#22d3ee" />
</mesh>

      <Sphere />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />

      <Stars
 radius={100}
 depth={50}
 count={4000}
 factor={4}
 fade
/>

    </Canvas>
  );
}