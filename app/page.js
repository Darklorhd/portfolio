"use client"
// src/Portfolio.js
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, User, Code, Briefcase, GraduationCap, Globe, Puzzle, ExternalLink, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/xyzjbzln', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    alert('Error sending message. Please try again.');
  }
};

  const sections = {
    home: {
      title: "I'm,",
      name: "Omede Darius",
      description: "A Front-End Developer with a passion for building responsive, accessible, and user-friendly websites using modern technologies like React, JavaScript, Tailwind CSS, and HTML/CSS",
      highlight: "Front-End Developer"
    },
    about: {
      title: "About Me",
      description: "Hi, I’m Darius — a unique blend of Biochemist and Front-End Developer with a passion for both science and technology. With a background in biochemistry, I’ve developed a strong foundation in scientific research, critical thinking, and problem-solving. My interest in molecular biology and chemical processes has trained me to approach challenges with precision and analytical depth. At the same time, I’ve grown into tech as a front-end developer, skilled in React, Tailwind CSS, JavaScript, and HTML. I enjoy transforming ideas into interactive, responsive web experiences — merging creativity with logic, much like in scientific exploration. Now, I’m on a journey to bridge the gap between science and technology, applying my skills in innovative ways — whether it’s creating data-driven web apps, educational platforms, or tools that support research and health innovation.",
      highlight: "Biochemist and Front-End Developer",
      services: [
        {
          icon: "code",
          title: "Front-End Development",
          description: "Building Responsive and scalable application"
        },
        {
          icon: "globe",
          title: "Web Application",
          description: "Building Responsible and user-friendly web applications with modern Technologies"
        },
        {
          icon: "puzzle",
          title: "Problem Solving",
          description: "Building solutions dedicated to solve complex technical challenges"
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Here are some past Projects i've worked on, to show case my skill",
      items: [
        {
          title: "OMEDE'S KITcHEN",
          description: "A  personal kitchen website built for a Company",
          tech: ["ReactJs", "TailwindCss", "Vite"],
          image: "kitchen",
          codeLink: "https://github.com/Darklorhd/kitchen",
          liveLink: "https://kitchen-sigma-beige.vercel.app/"
        },
        {
          title: "Artemia",
          description: "A Business web application project, during my learning",
          tech: ["ReactJs", "TailwindCss", "Javascript"],
          image: "artemia",
          codeLink: "https://github.com/Darklorhd/artemia",
          liveLink: "https://artemia-xi.vercel.app/"
        },
        // {
        //   title: "SquareUp",
        //   description: "A website built for a Marketing Agency Company",
        //   tech: ["ReactJs", "TailwindCss", "Typescript"],
        //   image: "squareup",
        //   codeLink: "https://github.com/yourusername/squareup",
        //   liveLink: "https://squareup-demo.vercel.app"
        // }
      ]
    },
    skills: {
      title: "Skill & Expertise",
      subtitle: "Over the past year, I've developed expertise in these tools and technology",
      categories: [
        {
          name: "Frontend Development",
          skills: ["HTML", "CSS", "Javascript", "ReactJS", "NextJs"]
        },
        {
          name: "Hardware Engineering", 
          skills: ["Troubleshooting", "Testing and Evaluation"]
        },
        // {
        //   name: "Database",
        //   skills: ["MongoDB"]
        // }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to bring your ideas to life? Let's connect and create something amazing together!",
      connectTitle: "Connect with me",
      info: {
        email: "omededarius@gmail.com",
        phone: "+234 811 671 9477",
        location: "Abuja, Nigeria"
      },
      social: [
        { name: "Twitter", icon: "twitter", link: "https://twitter.com/dariusomede" },
        { name: "GitHub", icon: "github", link: "https://github.com/darklordh" },
        { name: "Facebook", icon: "facebook", link: "https://facebook.com/dariusomede" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-gray-900">
            DARIUS
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button className="text-gray-700" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false); // Close menu after click
                }}
                className={`block w-full text-left font-medium px-4 py-2 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {sections.home.title}
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-green-600 mb-8">
                {sections.home.name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {sections.home.description.split(sections.home.highlight).map((part, index) => (
                  <span key={index}>
                    {part}
                    {index === 0 && <span className="font-semibold text-green-600">{sections.home.highlight}</span>}
                  </span>
                ))}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href='https://drive.google.com/file/d/1nvnHIi5QB1q8DXcLzCX5tkmsgTdUqRJb/view?usp=drive_link'>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Check Resume
                </button></a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-4 transform rotate-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Image size={120} className="text-gray-500" 
                      src="/ip.PNG"
                      width={400}
                      height={400}
                      alt='profile image'/>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{sections.about.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {sections.about.description.split(sections.about.highlight).map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && <span className="font-semibold text-green-600">{sections.about.highlight}</span>}
                </span>
              ))}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sections.about.services.map((service, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon === 'code' && <Code className="text-white" size={32} />}
                  {service.icon === 'globe' && <Globe className="text-white" size={32} />}
                  {service.icon === 'puzzle' && <Puzzle className="text-white" size={32} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-green-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{sections.projects.title}</h2>
            <p className="text-green-100 text-lg">{sections.projects.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sections.projects.items.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {project.image === 'kitchen' && (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <Briefcase size={32} />
                        </div>
                        <div className="text-sm opacity-80">Kitchen Platform</div>
                      </div>
                    </div>
                  )}
                  {project.image === 'artemia' && (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <Globe size={32} />
                        </div>
                        <div className="text-sm opacity-80">Business website</div>
                      </div>
                    </div>
                  )}
                  {/* {project.image === 'squareup' && (
                    <div className="w-full h-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <Code size={32} />
                        </div>
                        <div className="text-sm opacity-80">Marketing Agency</div>
                      </div>
                    </div>
                  )} */}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.codeLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Code size={16} />
                      Code
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{sections.skills.title}</h2>
            <p className="text-gray-300 text-lg">{sections.skills.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {sections.skills.categories.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-green-400 mb-6">{category.name}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 text-lg">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{sections.contact.title}</h2>
            <p className="text-gray-600 text-lg">{sections.contact.subtitle}</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{sections.contact.connectTitle}</h3>
              
              <div className="flex justify-start gap-6 mb-12">
                {sections.contact.social.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors group"
                  >
                    {social.icon === 'twitter' && <Twitter className="text-gray-600 group-hover:text-green-600" size={28} />}
                    {social.icon === 'github' && <Github className="text-gray-600 group-hover:text-green-600" size={28} />}
                    {social.icon === 'facebook' && <Facebook className="text-gray-600 group-hover:text-green-600" size={28} />}
                  </a>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">{sections.contact.info.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">{sections.contact.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">{sections.contact.info.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g John Piper"
                      required
                      className="w-full px-4 py-3 border text-black border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Piper@example.com"
                      required
                      className="w-full px-4 py-3 border text-black  border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject Line..."
                    className="w-full px-4 py-3 border border-green-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder="Your message here..."
                    required
                    className="w-full px-4 py-3 border text-black border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Omede Darius. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;