import { motion } from 'framer-motion';

const skills = [
  { name: 'C / C++', level: 90, color: '#00599C' },
  { name: 'React.js', level: 85, color: '#61DAFB' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'MySQL', level: 85, color: '#4479A1' },
  { name: 'MongoDB', level: 80, color: '#47A248' },
  { name: 'Java', level: 75, color: '#007396' },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotateY: 10 }}
      className="glass p-6 flex flex-col items-center gap-4 group cursor-pointer relative"
    >
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-2"
        style={{ borderColor: skill.color, color: skill.color, boxShadow: `0 0 15px ${skill.color}44` }}
      >
        {skill.name.charAt(0)}
      </div>
      <h3 className="font-bold text-white/90">{skill.name}</h3>
      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-xl"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold font-futuristic mb-4"
          >
            Technical <span className="text-primary text-glow">Arsenal</span>
          </motion.h2>
          <p className="text-white/40">Programming languages and technologies I've mastered.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Orbiting Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
      </div>
    </section>
  );
};

export default Skills;
