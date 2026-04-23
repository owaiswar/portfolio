import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CodeSnippet = ({ position, text }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <Text
        position={position}
        fontSize={0.15}
        color="#00F5FF"
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.2}
      >
        {text}
      </Text>
    </Float>
  );
};

const Scene = () => {
  const { mouse } = useThree();
  const groupRef = useRef();

  const snippets = [
    "const portfolio = new Experience();",
    "async function fetchData() { ... }",
    "git commit -m 'initial commit'",
    "while(true) { coding(); }",
    "010101010101",
    "<div>Hello World</div>",
  ];

  // Reduced snippet count for better performance
  const snippetData = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8,
      ],
      text: snippets[Math.floor(Math.random() * snippets.length)],
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Smoother parallax with lower lerp factor
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.05, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.05, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {snippetData.map((data, i) => (
        <CodeSnippet key={i} {...data} />
      ))}
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#7B61FF"
            speed={1.5}
            distort={0.3}
            radius={1}
            emissive="#7B61FF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default Scene;
