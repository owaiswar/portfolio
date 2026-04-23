import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 flex items-center justify-center relative">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-futuristic mb-8 text-glow">
            Building Scalable <br />
            <span className="text-primary">Solutions</span>
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              I am a final-year B.Tech CSE student at BIET Jhansi, deeply passionate about 
              Software Development and real-world problem solving. My focus lies in 
              building scalable, reliable applications with a clean architecture.
            </p>
            <p>
              With a strong foundation in Data Structures and Algorithms, I bridge the gap 
              between complex backend logic and modern, responsive frontend experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <motion.div
            whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass p-8 md:p-12 relative z-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">OW</div>
                <div>
                  <h3 className="text-xl font-bold">Owais War</h3>
                  <p className="text-white/40 text-sm">B.Tech CSE Student</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Institution</span>
                  <span>BIET, Jhansi</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">CGPA</span>
                  <span>7.5 / 10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Focus</span>
                  <span className="text-primary">SDE / Web Dev</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-2">
                <p className="text-sm italic text-white/50 italic">
                  "Committed to deepening skills in AI and Cybersecurity."
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full z-0 opacity-20 group-hover:opacity-40 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
