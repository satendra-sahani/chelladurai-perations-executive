'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaMapMarkerAlt, FaGithub, FaTwitter } from 'react-icons/fa';
import { TbWorldShare } from 'react-icons/tb';

const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }} />
  </div>
);

const FloatingElement = ({ children, className }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    }));
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const navItems = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      <BackgroundPattern />
      <nav className="bg-white bg-opacity-90 shadow-md py-4 sticky top-0 z-50 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setActiveSection(item);
                    document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-lg font-medium capitalize ${
                    activeSection === item ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                  } transition-colors`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section id="home" className="min-h-screen flex items-center justify-center mb-20 relative">
          <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
            <FloatingElement className="top-20 left-20">
              <div className="bg-indigo-200 rounded-full w-16 h-16 opacity-50" />
            </FloatingElement>
            <FloatingElement className="top-40 right-40">
              <div className="bg-purple-200 rounded-full w-24 h-24 opacity-50" />
            </FloatingElement>
            <FloatingElement className="bottom-20 left-1/3">
              <div className="bg-blue-200 rounded-full w-20 h-20 opacity-50" />
            </FloatingElement>
          </motion.div>
          <div className="text-center relative z-10">
            <motion.img
              src="https://media.licdn.com/dms/image/v2/D5603AQFKAFZRtRxIHQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707496699786?e=1741824000&v=beta&t=3srNLNYLj3BFsbaW8wJw6LdH7gyqJJxzm-kTOa7EP4E"
              alt="Chelladurai K"
              className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg mb-8 border-4 border-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h1 
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Chelladurai K
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Operations Executive at Samsung Data Systems
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Hire Me
              </a>
              <a
                href="/Resume_Chelladurai.docx"
                download
                className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors text-lg font-medium flex items-center border border-indigo-600 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <FaDownload className="mr-2" /> Resume
              </a>
            </motion.div>
            <motion.div 
              className="mt-12 flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://www.linkedin.com/in/chelladurai-k" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/chelladurai-k" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/chelladurai_k" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaTwitter size={24} />
              </a>
            </motion.div>
          </div>
        </section>

        <motion.section 
          id="about"
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
            <p className="text-lg leading-relaxed mb-6">
              As a dedicated Operations Executive with a passion for optimizing business processes, I bring a unique blend of analytical skills and strategic thinking to every project. My journey in the world of logistics and supply chain management has equipped me with a comprehensive understanding of global trade operations and the ability to navigate complex business environments.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I thrive on challenges and am constantly seeking innovative solutions to streamline operations and drive efficiency. My experience spans across various aspects of the supply chain, including customer support, inventory management, and third-party logistics coordination.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong educational background in Business Administration and IT Logistics, I am well-positioned to leverage technology and data-driven insights to make informed decisions and implement effective strategies. I am excited about the opportunity to bring my expertise to a dynamic team and contribute to the success of ambitious projects in the field of operations and logistics.
            </p>
          </div>
        </motion.section>

        <motion.section 
          id="experience"
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={1}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Experience</h2>
          <div className="space-y-6">
            {[
              {
                title: "Operations Executive",
                company: "Samsung Data System",
                period: "Feb 2022 - May 2024",
                responsibilities: [
                  "Managed end-to-end logistics operations for international shipments",
                  "Optimized supply chain processes, resulting in a 15% reduction in transit times",
                  "Coordinated with cross-functional teams to ensure timely delivery of products",
                  "Implemented new tracking systems, improving visibility and customer satisfaction",
                ],
                skills: "Customer Support, Analytical Skills, Incoterms, Microsoft Excel, Ocean Freight, LCL, Third-Party Logistics (3PL)"
              },
              {
                title: "Junior Officer",
                company: "Avalon Technologies Pvt Ltd",
                period: "Jan 2021 - Feb 2022",
                responsibilities: [
                  "Assisted in managing air and ocean freight operations",
                  "Conducted data analysis to identify areas for process improvement",
                  "Liaised with customs officials to ensure compliance with import/export regulations",
                  "Supported the implementation of new logistics software, enhancing operational efficiency",
                ],
                skills: "Air Operations, Analytical Skills, Incoterms, Ocean Freight, LCL, Query Resolution, SEZ Operations"
              },
              {
                title: "Marketing and Customer Support Executive",
                company: "Cargo Consol India PVT LTD",
                period: "Feb 2019 - Jan 2021",
                responsibilities: [
                  "Developed and executed marketing strategies to attract new clients",
                  "Provided exceptional customer support, maintaining a 98% satisfaction rate",
                  "Managed export documentation and coordinated with shipping lines",
                  "Conducted market research to identify new business opportunities",
                ],
                skills: "Logistics Management, Customer Support, Incoterms, Ocean Freight, Export Operations, LCL, Query Resolution"
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{job.title}</h3>
                <p className="text-xl text-gray-600 mb-4">{job.company} · {job.period}</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-700">{resp}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic">Key skills: {job.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="education"
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Education</h2>
          <div className="space-y-6">
            {[
              {
                school: "University of Madras",
                degree: "Master of Business Administration - MBA",
                specialization: "Logistics, Materials, and Supply Chain Management",
                period: "Aug 2021 - Feb 2024",
                achievements: [
                  "Specialized in advanced supply chain optimization techniques",
                  "Conducted research on the impact of AI in logistics operations",
                  "Participated in inter-university logistics case study competition",
                ]
              },
              {
                school: "Indian Institute of Logistics",
                degree: "B.Sc, IT and Logistics",
                period: "2016 - 2019",
                achievements: [
                  "Graduated with distinction",
                  "Developed a prototype for an IoT-based inventory tracking system",
                  "Active member of the Logistics and Supply Chain Management Club",
                ]
              }
            ].map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-purple-600 mb-2">{edu.school}</h3>
                <p className="text-xl text-gray-600 mb-2">{edu.degree}</p>
                {edu.specialization && <p className="text-lg text-gray-600 mb-2">Specialization: {edu.specialization}</p>}
                <p className="text-lg text-gray-500 mb-4">{edu.period}</p>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="skills"
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={3}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Skills</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { category: "Logistics", skills: ['Supply Chain Management', 'Inventory Management', 'Warehouse Operations', 'Freight Forwarding', 'Customs Clearance'] },
                { category: "Business", skills: ['Project Management', 'Business Analysis', 'Strategic Planning', 'Risk Management', 'Vendor Management'] },
                { category: "Technical", skills: ['Microsoft Office Suite', 'ERP Systems', 'Data Analysis', 'Logistics Software', 'Basic Programming'] },
                { category: "Soft Skills", skills: ['Communication', 'Leadership', 'Problem Solving', 'Teamwork', 'Adaptability'] },
                { category: "Industry Knowledge", skills: ['Incoterms', 'International Trade Regulations', 'Shipping Documentation', 'Cargo Insurance', 'Trade Compliance'] },
                { category: "Languages", skills: ['English (Fluent)', 'Tamil (Native)', 'Hindi (Intermediate)'] }
              ].map((skillSet, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="projects"
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={4}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Supply Chain Optimization",
                description: "Led a team to optimize the supply chain process, resulting in a 20% reduction in lead times and a 15% cost saving.",
                technologies: ["Data Analysis", "Process Mapping", "Lean Six Sigma"],
              },
              {
                title: "Warehouse Management System Implementation",
                description: "Spearheaded the implementation of a new WMS, improving inventory accuracy by 30% and reducing picking times by 25%.",
                technologies: ["ERP Integration", "Barcode Scanning", "Inventory Tracking"],
              },
              {
                title: "Cross-Border Trade Compliance Program",
                description: "Developed and implemented a comprehensive trade compliance program, ensuring 100% adherence to international regulations.",
                technologies: ["Trade Regulations", "Risk Assessment", "Documentation Management"],
              },
              {
                title: "Last-Mile Delivery Optimization",
                description: "Designed and executed a last-mile delivery optimization strategy, improving on-time delivery rates by 18%.",
                technologies: ["Route Optimization", "GPS Tracking", "Performance Analytics"],
              },
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contact"
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          custom={5}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-colors" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-colors" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500 transition-colors" required></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors">
                  Send Message
                </button>
              </div>
            </form>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-4 text-indigo-600" />
                  <a href="mailto:chelladuraik101@gmail.com" className="hover:text-indigo-600 transition-colors">
                    chelladuraik101@gmail.com
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <FaPhone className="mr-4 text-indigo-600" />
                  <a href="tel:+91575676755" className="hover:text-indigo-600 transition-colors">
                    +91 575676755
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-4 text-indigo-600" />
                  Mudichur, Chennai
                </p>
                <p className="flex items-center text-gray-600">
                  <FaLinkedin className="mr-4 text-indigo-600" />
                  <a href="https://www.linkedin.com/in/chelladurai-k" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                    LinkedIn Profile
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <TbWorldShare className="mr-4 text-indigo-600" />
                  <a href="https://chelladurai-k-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                    Personal Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Chelladurai K</h2>
              <p>Operations Executive</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/chelladurai-k" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/chelladurai-k" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/chelladurai_k" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Chelladurai K. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

