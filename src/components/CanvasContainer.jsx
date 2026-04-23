import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars, PerspectiveCamera, Preload, AdaptiveEvents } from '@react-three/drei';
import Scene from './Scene';
import Loader from './Loader';

const CanvasContainer = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Suspense fallback={<Loader />}>
          <Scene />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Preload all />
          <AdaptiveEvents />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
