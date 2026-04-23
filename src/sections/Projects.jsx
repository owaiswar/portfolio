import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Slot Booking Application",
    tech: ["React.js", "Node.js", "MySQL", "REST API"],
    desc: "Built a responsive slot booking system with real-time availability. Managed database for scheduling and handled edge cases like duplicate bookings.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Personal Portfolio",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    desc: "Developed a responsive personal portfolio with modern styling, smooth navigation, and interactive UI components.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI Integration Guide",
    tech: ["AI Concepts", "Python", "Data Science"],
    desc: "A comprehensive guide on AI fundamentals, demonstrating initiative in deepening skills within the AI ecosystem.",
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    let scrollTween = gsap.to(container, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.scrollWidth,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      if (scrollTween) scrollTween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="overflow-hidden bg-[#050505]">
      <div className="h-screen flex items-center relative">
        <div className="absolute top-20 left-20 z-10">
          <h2 className="text-5xl md:text-7xl font-bold font-futuristic text-white/10 uppercase tracking-tighter">
            Featured <br /> Projects
          </h2>
        </div>

        <div ref={containerRef} className="flex gap-10 px-[20vw]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[400px] md:min-w-[600px] h-[500px] glass overflow-hidden relative group"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-dark via-dark/50 to-transparent">
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-white/60">{t}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/60 mb-6 max-w-md">{project.desc}</p>
                <div className="flex gap-4">
                  <a href={project.link} className="p-3 bg-primary text-dark rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
