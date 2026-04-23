import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Camera, FileText } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const fileInputRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Load image from localStorage on mount
  useEffect(() => {
    try {
      const savedImg = localStorage.getItem('owais_profile_img');
      if (savedImg) {
        setProfileImg(savedImg);
      }
    } catch (e) {
      console.error("Failed to load image from localStorage:", e);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image is too large! Please choose an image smaller than 2MB for persistence.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfileImg(base64String);
        try {
          localStorage.setItem('owais_profile_img', base64String);
        } catch (err) {
          console.error("Storage error:", err);
          alert("Storage full! The image will only stay until you refresh.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 bg-gradient-to-b from-dark/80 to-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div 
            onClick={() => fileInputRef.current.click()}
            className="relative w-20 h-20 rounded-full border-2 border-primary overflow-hidden cursor-pointer group flex items-center justify-center bg-white/5 hover:border-primary transition-all duration-300 shadow-[0_0_25px_rgba(0,245,255,0.3)]"
          >
            {profileImg ? (
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <Camera size={32} className="text-white/40 group-hover:text-primary transition-colors" />
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <Camera size={24} className="text-white" />
            </div>
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
            accept="image/*"
          />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold font-futuristic text-glow text-primary hidden sm:block"
          >
            OWAIS.
          </motion.div>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-6 border-l border-white/10 pl-10">
            <a 
              href="/portfolio/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass border-primary/30 text-primary hover:bg-primary hover:text-dark transition-all duration-300 rounded-lg text-xs font-bold uppercase tracking-widest"
            >
              <FileText size={14} />
              Resume
            </a>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/50 hover:text-white transition-colors hover:scale-120 duration-300"><Github size={20} /></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors hover:scale-120 duration-300"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-4 p-8 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-4 bg-primary text-dark rounded-lg font-bold"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
