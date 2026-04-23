import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-futuristic tracking-[0.3em] mb-4 text-sm md:text-base"
        >
          WELCOME TO MY UNIVERSE
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-extrabold font-futuristic mb-6"
        >
          Hi, I'm <span className="text-glow text-primary">Owais War</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
        >
          B.Tech Computer Science | <span className="text-secondary">Full Stack Developer</span> | DSA Enthusiast
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary/50"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.1),transparent_50%)] pointer-events-none" />
    </section>
  );
};

export default Hero;
