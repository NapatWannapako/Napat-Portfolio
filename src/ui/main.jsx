import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Facebook, Linkedin, Github, Mail } from "lucide-react";
import Slider from "react-slick";
import profile from '../assets/profile.jpg';
import healthMe0 from '../assets/healthMe0.png';
import healthMe1 from '../assets/healthMe1.png';
import healthMe2 from '../assets/healthMe2.png';
import hr1 from '../assets/hrvs0.png';
import hr2 from '../assets/hrvs1.png';
import hr3 from '../assets/hrvs2.png';
import hr4 from '../assets/hrvs3.png';
import cdr1 from '../assets/cdr1.png';
import cdr2 from '../assets/cdr2.png';
import cdr3 from '../assets/cdr3.png';
import logo from '../assets/logo.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  { id: 1, title: "CDR", images: [cdr3,cdr2,cdr1], description: "Contributed to the development of a cognitive assessment platform using Beaker Game, implementing game mechanics and assessment features to aid in medical diagnosis, and developed it in Flutter for smooth and accurate functionality." },
  { id: 2, title: "Healt-Me", images: [healthMe0, healthMe1, healthMe2], description: "Developed a real-time queue and patient assessment management system with queue tracking and patient status notifications using Angular and WebSocket for real-time data connections." },
  { id: 3, title: "Mink-HR", images: [hr1,hr2,hr3,hr4], description: "Developed a mobile app for work attendance and online leave management, implementing leave requests, approval systems, and late notifications using Flutter to ensure a fast and user-friendly experience." },
];

// const SkillIcon = ({ src, name }) => (
//   <div className="flex flex-col items-center gap-2">
//     <img src={src} alt={name} className="w-12 h-12" />
//     <span className="text-sm">{name}</span>
//   </div>
// );

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const SkillIcon = ({ src, name, percentage = 85 }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div 
        className="flex flex-col items-center gap-2 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative">
          <img 
            src={src} 
            alt={name} 
            className={`w-12 h-12 transition-all duration-300 ${isHovered ? 'blur filter blur-sm opacity-40' : ''}`} 
          />
          
          {/* Circular progress indicator */}
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#e6e6e6"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="black"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 28}
                  strokeDashoffset={2 * Math.PI * 28 * (1 - percentage / 100)}
                  transform="rotate(-90 32 32)"
                />
              </svg>
              <div className="absolute text-sm font-bold">
                {percentage}%
              </div>
            </motion.div>
          )}
        </div>
        
        <span className="text-sm font-medium">{name}</span>
      </motion.div>
    );
  };
  
  // Updated currentSkills with percentage values
  const currentSkills = [
    { name: "HTML5", src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", percentage: 100 },
    { name: "CSS3", src: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000", percentage: 100 },
    { name: "Bootstrap", src: "https://img.icons8.com/?size=100&id=84710&format=png&color=000000", percentage: 100 },
    { name: "Flutter", src: "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000", percentage: 90 },
    { name: "TypeScript", src: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000", percentage: 70 },
    { name: "Angular", src: "https://img.icons8.com/?size=100&id=l9a5tcSnBwcf&format=png&color=000000", percentage: 70 },
  ];
  
  // Updated otherSkills with percentage values
  const otherSkills = [
    { name: "Git", src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", percentage: 90 },
    { name: "Figma", src: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", percentage: 60 },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
                <a href="#profile">
                  <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
                </a>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-gray-600">About</a>
              <a href="#skills" className="hover:text-gray-600">Skills</a>
              <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
              <a href="#contact" className="block hover:text-gray-300 bg-black text-white px-4 py-2 rounded-full text-center">
                CONTACT ME
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                
                <a
                  href="#about"
                  className="block px-3 py-2 rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About me
                </a>
                <a
                  href="#skills"
                  className="block px-3 py-2 rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#portfolio"
                  className="block px-3 py-2 rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section id="profile" className="min-h-screen relative overflow-hidden"  initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        {/* Diagonal background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-100"></div>
          <div className="hidden md:flex w-1/2 absolute top-0 bottom-0 right-0 bg-black transform -skew-x-6 origin-top-right"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
          {/* Left content */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md text-left">
              <h1 className="text-4xl font-bold mb-4">Hi, I am</h1>
              <h2 className="text-5xl font-bold mb-4">Napat Wannapako</h2>
              <p className="text-xl text-gray-600">Front-end Developer / Mobile Developer</p>
          <div className="flex gap-4 mt-6">
  <a href="https://github.com/NapatWannapako" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 p-2 bg-gray-200 shadow-lg border rounded-lg">
    <Github size={24} />
  </a>
  <a href="https://linkedin.com/in/napat-wannapako-a9354a274" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 p-2 bg-gray-200 shadow-lg border rounded-lg">
    <Linkedin size={24} />
  </a>
  <a href="https://www.facebook.com/profile/Napat%20Wannapako" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 p-2 bg-gray-200 shadow-lg border rounded-lg">
    <Facebook size={24} />
  </a>
</div>
            </div>
          </div>

          {/* Right content with image */}
          <div className="hidden md:flex w-1/2 relative bg-black items-end" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
            <img
              src={profile}
              alt="Napat Wannapako"
              className="w-full h-full object-cover items-end"
            />
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4">
        <motion.h2 
        className="text-3xl font-bold text-center mb-12 border-2 border-black inline-block px-8 py-2 mx-auto block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
            ABOUT ME
          </motion.h2 >
          <motion.p className="max-w-2xl mx-auto text-center"      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
            I am currently a student at Khon Kaen University, pursuing a degree in Digital Media Engineering.
            Throughout my studies in the Faculty of Digital Media Engineering, I have gained a strong foundation
            in various aspects of digital media, including graphic design, web development, multimedia production,
            and interactive technologies.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center"initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
    <div className="container mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 border-2 border-black inline-block px-8 py-2 mx-auto block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        SKILLS
      </motion.h2>
      
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-6 relative inline-block">
        Front-End Development:
          {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div> */}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
          {currentSkills.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-6 relative inline-block">
          OTHER SKILLS:
          {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div> */}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
          {otherSkills.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>

      {/* Portfolio Section */}
      <motion.section id="portfolio" className="min-h-screen flex items-center justify-center bg-gray-100"initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-2 border-black inline-block px-8 py-2 mx-auto block">
            PORTFOLIO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer rounded-lg overflow-hidden shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="min-h-screen flex items-center justify-center"initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 border-2 border-black inline-block px-8 py-2 mx-auto block">
            CONTACT
          </h2>
          <p className="text-center mb-12">
            If you would like to get in touch with me, please feel free to contact me using the information below.
          </p>
          <div className="items-center justify-center flex flex-col md:flex-row gap-8">



          <motion.div className="flex flex-col gap-5"initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
  <div className="flex items-center gap-2">
    <a href="https://www.facebook.com/profile/Napat%20Wannapako" target="_blank" rel="noopener noreferrer" className="p-1 border-2 border-gray-400 hover:border-black text-black hover:text-black">
      <Facebook size={24} />
    </a>
    <span className="text-lg">Napat Wannapako</span>
  </div>
  <div className="flex items-center gap-2">
    <a href="https://Napat.Wa@kkumail.com" className="p-1 border-2 border-gray-400 hover:border-black text-black hover:text-black">
      <Mail size={24} />
    </a>
    <span className="text-lg">Napat.Wa@kkumail.com</span>
  </div>
  <div className="flex items-center gap-2">
    <a href="https://linkedin.com/in/napat-wannapako-a9354a274  " target="_blank" rel="noopener noreferrer" className="p-1 border-2 border-gray-400 hover:border-black text-black hover:text-black">
      <Linkedin size={24} />
    </a>
    <span className="text-lg">Napat Wannapako</span>
  </div>
</motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            <Slider {...sliderSettings}>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${selectedProject.title} image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
            <h3 className="text-2xl font-bold mb-2 mt-8">{selectedProject.title}</h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}