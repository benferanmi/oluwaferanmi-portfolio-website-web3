
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import ThreeJSHero from '../components/ThreeJSHero';
import AnimatedBackground from '../components/AnimatedBackground';
import { assets } from '../assets/assets';

const Home = () => {
  // Define the phrases for the AnimatedText component
  const phrases = [
    "Benjamin",
    "a Web3 Developer",
    "a Blockchain Enthusiast",
    "a Problem Solver",
    "a Smart Contract Auditor"
  ];

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.2;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="flex-grow flex items-center relative z-10 px-6 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="w-full md:w-1/2 mb-10 md:mb-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-block text-web3-aqua mb-4 font-mono text-md"
                variants={itemVariants}
              >
                Hi there,
              </motion.span>


              <motion.h1
                className="flex flex-row items-center text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight"
                variants={itemVariants}
              >
                <AnimatedText staticText="I am" phrases={phrases} interval={3000} />
              </motion.h1>

              <motion.p
                className="text-web3-slate text-lg md:text-xl max-w-lg mb-8"
                variants={itemVariants}
              >
                A passionate Web3 developer focused on creating decentralized applications
                and smart contracts that bring value to the blockchain ecosystem.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Link to="/portfolio">
                  <motion.button
                    className="btn-3d bg-web3-aqua hover:bg-web3-light-aqua text-web3-deep-blue px-6 py-3 rounded-md font-medium flex items-center"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View My Work
                    <ArrowRight className="ml-2" size={18} />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
              <ThreeJSHero className="absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Cartoon Character - Absolute Position */}
      <motion.img
        src="https://source.unsplash.com/random/200x200/?3d-cartoon"
        alt="Web 3 Developer"
        className="hidden md:block text-center pt-4 absolute bottom-10 right-10 z-10 w-24 h-24 rounded-full border-2 border-web3-aqua"
        animate={{ y: [1, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />

      {/* Decorative Elements */}
      <div className="absolute bottom-5 left-10 w-50 h-50 border-l-2 border-b-2 border-web3-aqua opacity-1 ">
        <img src={assets.nftOne} alt='Oluwaferanmi nftOne'  className='p-2 w-[180px]' />
      </div>
      <div className="absolute top-40 right-10 w-60 h-60 border-t-2 border-r-2 border-web3-lemon opacity-1">
        <img src={assets.nftTwo} alt='Oluwaferanmi nftTwo' className='p-2 w-50'  />
      </div>
    </div>
  );
};

export default Home;
