import { useProgress, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-dark">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold font-futuristic text-primary text-glow mb-8 animate-pulse">
            OWAIS.
          </h1>
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-primary"
            />
          </div>
          <p className="mt-4 text-white/30 font-mono text-xs tracking-widest uppercase">
            Initializing Universe {Math.round(progress)}%
          </p>
        </motion.div>
      </div>
    </Html>
  );
};

export default Loader;
