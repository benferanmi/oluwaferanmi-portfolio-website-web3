
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import { Discord, Telegram } from '../assets/svg';

const Footer = () => {
  const socialLinks = [
    { name: 'Github', icon: <Github size={18} />, url: 'https://github.com' },
    { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/classicopa12?s=21' },
    { name: 'Discord', icon: <Discord color={'#c8d2f2'}  size={18} />, url: 'https://discord.gg/Mgb587nU' },
    { name: 'Telegram', icon: <Telegram  color={'#c8d2f2'} size={18} />, url: 'https://t.me/ClassicOpa1234' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
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
    <footer className="w-full py-10 bg-web3-deep-blue border-t border-web3-light-blue border-opacity-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-web3-slate hover:text-web3-aqua transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          <motion.div 
            className="text-center text-web3-slate text-sm"
            variants={itemVariants}
          >
            <p className="flex items-center justify-center mb-2">
              Built with <Heart size={14} className="mx-1 text-web3-aqua animate-pulse-soft" /> by Benjamin
            </p>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </motion.div>
          
          <motion.a 
            href="#top"
            className="mt-8 text-web3-aqua hover:text-web3-light-aqua text-sm underline transition-all duration-300"
            variants={itemVariants}
          >
            Back to top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
