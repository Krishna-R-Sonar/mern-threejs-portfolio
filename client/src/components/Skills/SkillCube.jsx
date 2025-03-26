// client/src/components/Skills/SkillCube.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";

const Cube = ({ logo }) => {
  const mesh = useRef();
  const texture = useTexture(logo);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export const SkillCube = ({ skill, darkMode }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="w-full aspect-square">
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Cube logo={skill.logo} />
      <OrbitControls enableZoom={false} />
    </Canvas>
    <div
      className={`text-center mt-2 text-sm sm:text-base ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {skill.name}
    </div>
  </motion.div>
);