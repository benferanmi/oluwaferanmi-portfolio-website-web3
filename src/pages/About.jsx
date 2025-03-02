
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Lock, Cpu, PenTool, Zap } from 'lucide-react';
import { assets } from '../assets/assets';

const About = () => {
  // Skills data
  const skills = [
    { name: 'Solidity', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Web3.js', level: 80 },
    { name: 'Ethers.js', level: 75 },
    { name: 'Smart Contract Auditing', level: 70 },
    { name: 'DeFi Protocols', level: 65 },
  ];

  // Services data
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Smart Contract Development',
      description: 'Design and implementation of secure and efficient smart contracts for various blockchain platforms.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Security Audits',
      description: 'Comprehensive security reviews and audits of smart contracts to identify and fix vulnerabilities.'
    },
    {
      icon: <Database size={24} />,
      title: 'dApp Development',
      description: 'Building decentralized applications with intuitive UIs that interact seamlessly with blockchain technology.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Blockchain Integration',
      description: 'Integrating blockchain technology into existing systems and applications.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Technical Documentation',
      description: 'Creating detailed technical documentation for blockchain projects and smart contracts.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Web3 Consulting',
      description: 'Strategic consulting for businesses looking to leverage blockchain technology and Web3.'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-web3-aqua font-mono mb-2 block">Who I Am</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-web3-aqua mx-auto"></div>
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Image Column */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="glass-card overflow-hidden">
                <img
                  src={assets.about}
                  alt="Benjamin - Web3 Developer"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-web3-aqua rounded-lg -z-10"></div>

              {/* Cartoon Character */}
              <motion.img
                src={assets.avater}
                alt="Developer Avatar"
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full border-2 border-web3-deep-blue"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Web3 Developer & Blockchain Enthusiast
            </h3>

            <p className="text-web3-slate mb-6">
              I'm a passionate Web3 developer with a deep interest in blockchain technology and its potential to reshape
              our digital landscape. With over 5 years of experience in software development and 3 years specifically
              focused on blockchain, I've developed a strong understanding of decentralized systems and how to build secure,
              user-friendly applications on top of them.
            </p>

            <p className="text-web3-slate mb-8">
              My journey in blockchain began with Bitcoin and Ethereum, but quickly expanded to exploring the possibilities
              of smart contracts, DeFi protocols, and NFTs. I enjoy solving complex problems and creating innovative solutions
              that leverage the unique properties of blockchain technology.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-4 text-white">My Skills</h4>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {skills.map((skill, index) => (
                  <motion.div key={index} className="mb-3" variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="text-web3-light-slate">{skill.name}</span>
                      <span className="text-web3-aqua">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-web3-light-blue bg-opacity-20 rounded-full h-2.5">
                      <motion.div
                        className="bg-web3-aqua h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center text-white">
                  <span className="text-web3-aqua mr-2">
                    <Code size={20} />
                  </span>
                  Experience
                </h4>
                <ul className="space-y-4">
                  <li className="glass-card p-4">
                    <span className="text-web3-aqua text-sm">2021 - Present</span>
                    <h5 className="text-white font-bold">Senior Blockchain Developer</h5>
                    <p className="text-web3-slate text-sm">Web3 Innovations Inc.</p>
                  </li>
                  <li className="glass-card p-4">
                    <span className="text-web3-aqua text-sm">2019 - 2021</span>
                    <h5 className="text-white font-bold">Smart Contract Engineer</h5>
                    <p className="text-web3-slate text-sm">DeFi Protocol Labs</p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center text-white">
                  <span className="text-web3-aqua mr-2">
                    <Database size={20} />
                  </span>
                  Education
                </h4>
                <ul className="space-y-4">
                  <li className="glass-card p-4">
                    <span className="text-web3-aqua text-sm">2018 - 2019</span>
                    <h5 className="text-white font-bold">Blockchain Certification</h5>
                    <p className="text-web3-slate text-sm">Ethereum Developer Academy</p>
                  </li>
                  <li className="glass-card p-4">
                    <span className="text-web3-aqua text-sm">2014 - 2018</span>
                    <h5 className="text-white font-bold">BSc Computer Science</h5>
                    <p className="text-web3-slate text-sm">Tech University</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-12">
            <span className="text-web3-aqua font-mono mb-2 block">What I Offer</span>
            <h2 className="text-4xl font-bold gradient-text mb-4">My Services</h2>
            <div className="w-20 h-1 bg-web3-aqua mx-auto"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-web3-aqua"
                variants={itemVariants}
              >
                <div className="text-web3-aqua mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-web3-slate">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
