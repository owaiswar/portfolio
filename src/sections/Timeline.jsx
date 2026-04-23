import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: "Aug 2025",
    title: "Cybersecurity Virtual Intern",
    company: "Deloitte (Forage)",
    desc: "Completed practical tasks in cybersecurity, including risk assessment, threat analysis, and security best practices."
  },
  {
    year: "2022 - 2026",
    title: "B.Tech - Computer Science",
    company: "BIET, Jhansi (AKTU)",
    desc: "Focusing on Software Development, DSA, and Web Technologies. Current CGPA: 7.5 / 10."
  },
  {
    year: "2020 - 2021",
    title: "Intermediate - Science",
    company: "Govt. Higher Secondary School Qalamabad",
    desc: "Completed higher secondary education with a focus on science subjects. Percentage: 89.9%."
  },
  {
    year: "2018 - 2019",
    title: "High School",
    company: "Govt. High School Sanzipura",
    desc: "Secondary education completed with a strong academic record. Percentage: 87%."
  }
];

const TimelineItem = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex w-full mb-20 items-center justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="hidden md:block w-5/12" />
      
      <div className="z-20">
        <div className="w-6 h-6 rounded-full bg-dark border-4 border-primary shadow-[0_0_15px_#00F5FF]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-5/12 glass p-8"
      >
        <span className="text-primary font-bold text-sm tracking-widest">{exp.year}</span>
        <h3 className="text-2xl font-bold mt-2 mb-1">{exp.title}</h3>
        <p className="text-secondary text-sm font-medium mb-4">{exp.company}</p>
        <p className="text-white/60 leading-relaxed">{exp.desc}</p>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-futuristic">Academic <span className="text-secondary">& Career</span></h2>
        </div>

        <div className="relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent h-full origin-top z-10 hidden md:block"
          />
          
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-white/5 h-full z-0 hidden md:block" />

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
