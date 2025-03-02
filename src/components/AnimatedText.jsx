
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ staticText, phrases, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Handle the cycling of phrases
    const phraseInterval = setInterval(() => {
      setIsTyping(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setDisplayText('');
        setIsTyping(true);
      }, 500);

    }, interval);

    return () => clearInterval(phraseInterval);
  }, [phrases.length, interval]);

  // Handle the typewriter effect
  useEffect(() => {
    if (!isTyping) return;

    const currentPhrase = phrases[currentIndex];

    if (displayText.length < currentPhrase.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }, 70); // Speed of typing

      return () => clearTimeout(typingTimeout);
    }
  }, [displayText, currentIndex, phrases, isTyping]);

  return (
    <div className="inline-flex items-center">
      <span className="mr-2 text-web3-aqua">{staticText}</span>
      <div className="relative h-[1.1em] min-w-[180px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className="absolute inline-block text-web3-lemon whitespace-nowrap"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayText}
            {isTyping && displayText.length < phrases[currentIndex].length && (
              <span className="inline-block w-1 h-[1em] bg-web3-lemon animate-pulse ml-0.5"></span>
            )}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedText;