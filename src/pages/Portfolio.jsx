
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { assets } from '../assets/assets';

const Portfolio = () => {
  // Categories for filtering
  const categories = ['All', 'DeFi', 'NFT', 'Blockchain', 'Web3'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data - 20 placeholder projects
  const projects = [
    {
      id: 1,
      title: 'BasePay DEX',
      description: 'A decentralized exchange with liquidity pooling and staking mechanisms built on Ethereum.',
      image: assets.projectOne,
      category: 'DeFi',
      technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
      // githubLink: 'https://github.com',
      liveLink: 'https://basepay.link/',
      // demoLink: 'https://example.com/demo'
    },
    {
      id: 2,
      title: 'Dogatoshi',
      description: 'NFT marketplace for digital collectibles with auction and trading features.',
      image: assets.projectTwo,
      category: 'NFT',
      technologies: ['Solidity', 'React', 'IPFS', 'Ethers.js'],
      // githubLink: 'https://github.com',
      liveLink: 'https://dogatoshi.dog/'
    },
    {
      id: 3,
      title: 'Elderwallet',
      description: 'Blockchain-based voting system ensuring transparency and integrity for elections.',
      image: assets.projectThree,
      category: 'Blockchain',
      technologies: ['Solidity', 'React', 'Web3.js', 'Truffle'],
      // githubLink: 'https://github.com',
      liveLink: 'https://elderwallet.jeremy0x.codes/'
    },
    {
      id: 4,
      title: 'DeFi Immutable',
      description: 'Automated yield farming protocol that optimizes returns across various DeFi platforms.',
      image: assets.projectFour,
      category: 'DeFi',
      technologies: ['Solidity', 'React', 'Ethers.js', 'Graph Protocol'],
      // githubLink: 'https://github.com',
      liveLink: 'https://www.immutable.com/'
    },
    {
      id: 5,
      title: 'Defi Exchange website',
      description: 'Web3 application for tracking crypto exchange across multiple chains and wallets.',
      image: assets.projectFive,
      category: 'Web3',
      technologies: ['React', 'Web3.js', 'Chart.js', 'CoinGecko API'],
      // githubLink: 'https://github.com',
      liveLink: 'https://noblocks.xyz/'
    },
    {
      id: 6,
      title: 'NFT Minting Platform',
      description: 'Custom NFT minting platform with royalty management and marketplace features.',
      image: 'https://source.unsplash.com/random/800x600/?digital-art',
      category: 'NFT',
      technologies: ['Solidity', 'React', 'IPFS', 'Ethers.js'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 7,
      title: 'Blockchain Supply Chain',
      description: 'Supply chain tracking system built on blockchain for transparency and traceability.',
      image: 'https://source.unsplash.com/random/800x600/?supply-chain',
      category: 'Blockchain',
      technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 8,
      title: 'DeFi Lending Protocol',
      description: 'Decentralized lending and borrowing platform with variable interest rates.',
      image: 'https://source.unsplash.com/random/800x600/?loan',
      category: 'DeFi',
      technologies: ['Solidity', 'React', 'Web3.js', 'Compound Protocol'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 9,
      title: 'Web3 Authentication',
      description: 'Decentralized authentication system using blockchain identities and verifiable credentials.',
      image: 'https://source.unsplash.com/random/800x600/?security',
      category: 'Web3',
      technologies: ['Solidity', 'React', 'Web3.js', 'DID'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 10,
      title: 'GameFi Platform',
      description: 'Play-to-earn gaming platform with NFT characters and tokens.',
      image: 'https://source.unsplash.com/random/800x600/?gaming',
      category: 'NFT',
      technologies: ['Solidity', 'Unity', 'Web3.js', 'Hardhat'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 11,
      title: 'Cross-Chain Bridge',
      description: 'Bridge for transferring assets between different blockchain networks.',
      image: 'https://source.unsplash.com/random/800x600/?bridge',
      category: 'Blockchain',
      technologies: ['Solidity', 'React', 'Web3.js', 'Polkadot'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 12,
      title: 'Flash Loan Arbitrage',
      description: 'DeFi protocol for executing flash loan arbitrage opportunities across different platforms.',
      image: 'https://source.unsplash.com/random/800x600/?trading',
      category: 'DeFi',
      technologies: ['Solidity', 'React', 'Ethers.js', 'Aave Protocol'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 13,
      title: 'Decentralized Identity',
      description: 'Self-sovereign identity solution built on blockchain technology.',
      image: 'https://source.unsplash.com/random/800x600/?identity',
      category: 'Web3',
      technologies: ['Solidity', 'React', 'Ceramic Network', 'IDX'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 14,
      title: 'NFT Fractional Ownership',
      description: 'Platform for fractionalizing NFT ownership and trading partial shares.',
      image: 'https://source.unsplash.com/random/800x600/?fractional',
      category: 'NFT',
      technologies: ['Solidity', 'React', 'Web3.js', 'OpenZeppelin'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 15,
      title: 'Private Blockchain Network',
      description: 'Custom private blockchain solution for enterprise data management.',
      image: 'https://source.unsplash.com/random/800x600/?network',
      category: 'Blockchain',
      technologies: ['Hyperledger Fabric', 'Node.js', 'Docker', 'Kubernetes'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 16,
      title: 'Synthetic Assets Protocol',
      description: 'DeFi protocol for creating and trading synthetic assets representing real-world assets.',
      image: 'https://source.unsplash.com/random/800x600/?synthetic',
      category: 'DeFi',
      technologies: ['Solidity', 'React', 'Web3.js', 'Chainlink Oracles'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 17,
      title: 'Web3 Social Network',
      description: 'Decentralized social media platform with content ownership and monetization.',
      image: 'https://source.unsplash.com/random/800x600/?social',
      category: 'Web3',
      technologies: ['Solidity', 'React', 'IPFS', 'The Graph'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 18,
      title: 'Generative Art NFTs',
      description: 'Generative art NFT collection with on-chain rendering and provenance.',
      image: 'https://source.unsplash.com/random/800x600/?generative-art',
      category: 'NFT',
      technologies: ['Solidity', 'JavaScript', 'p5.js', 'IPFS'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 19,
      title: 'Zero-Knowledge Proofs Impl',
      description: 'Privacy-focused blockchain application using zero-knowledge proofs.',
      image: 'https://source.unsplash.com/random/800x600/?privacy',
      category: 'Blockchain',
      technologies: ['Solidity', 'ZK-SNARKs', 'Circom', 'React'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 20,
      title: 'Decentralized Insurance',
      description: 'DeFi protocol for decentralized insurance against smart contract risks.',
      image: 'https://source.unsplash.com/random/800x600/?insurance',
      category: 'DeFi',
      technologies: ['Solidity', 'React', 'Web3.js', 'Chainlink'],
      // githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: { scale: 0.95 }
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
          <span className="text-web3-aqua font-mono mb-2 block">My Recent Work</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Portfolio Projects</h2>
          <div className="w-20 h-1 bg-web3-aqua mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                  ? 'bg-web3-aqua text-web3-deep-blue'
                  : 'bg-web3-light-blue bg-opacity-30 text-web3-light-slate hover:bg-opacity-50'
                }`}
              onClick={() => setActiveCategory(category)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Cartoon Character - Absolute Position */}
        <motion.img
          src={assets.nftTwo}
          alt="Robot Helper"
          className="hidden md:block fixed bottom-10 left-10 z-10 w-20 h-20 rounded-full border-2 border-web3-aqua"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
