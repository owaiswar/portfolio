import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold font-futuristic mb-8"
          >
            Get in <span className="text-primary text-glow">Touch</span>
          </motion.h2>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            I'm currently seeking a Software Developer role. 
            Let's discuss how I can contribute to your team.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm">Email</p>
                <p className="text-xl font-bold">warowais321@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass group-hover:bg-secondary group-hover:text-dark transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm">Phone</p>
                <p className="text-xl font-bold">+91-9797540261</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 glass hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 glass hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Full Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary transition-colors text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
              <textarea 
                rows="4"
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary text-dark font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#00e1eb] transition-colors group">
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
