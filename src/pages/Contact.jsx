
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { Discord, Telegram } from '../assets/svg';
import { assets } from '../assets/assets';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(formData)
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6eqipod', 'template_kgjoleb', formData, 'CqqhX8DgdSYe1IMfL')
      .then((result) => {
        console.log(result.text);
        setIsSubmitting(true);

      }, (error) => {
        console.log(error.text);
      });

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'classicopa96@gmail.com',
      link: 'mailto:classicopa96@gmail.com'
    }
  ];

  // Social links
  const socialLinks = [
    { name: 'Github', icon: <Github size={20} />, url: 'https://github.com/benferanmi' },
    { name: 'Discord', icon: <Discord color={'#c8d2f2'} size={20} />, url: 'https://discord.gg/Mgb587nU' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://x.com/classicopa12?s=21' },
    { name: 'Telegram', icon: <Telegram color={'#c8d2f2'} size={20} />, url: 'https://t.me/ClassicOpa1234' }
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
          <span className="text-web3-aqua font-mono mb-2 block">Get In Touch</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-web3-aqua mx-auto"></div>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-web3-slate mb-8">
              Feel free to reach out if you're looking for a Web3 developer, have a question, or just want to connect.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.title === 'Location' ? '_blank' : ''}
                  rel="noopener noreferrer"
                  className="flex items-start glass-card p-4 hover:border-web3-aqua transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="text-web3-aqua mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-web3-slate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-web3-light-blue bg-opacity-30 text-web3-light-slate hover:bg-web3-aqua hover:text-web3-deep-blue transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-web3-light-slate mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md bg-web3-light-blue bg-opacity-20 border border-web3-light-blue border-opacity-30 text-white focus:outline-none focus:border-web3-aqua transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-web3-light-slate mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md bg-web3-light-blue bg-opacity-20 border border-web3-light-blue border-opacity-30 text-white focus:outline-none focus:border-web3-aqua transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-web3-light-slate mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-web3-light-blue bg-opacity-20 border border-web3-light-blue border-opacity-30 text-white focus:outline-none focus:border-web3-aqua transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-web3-light-slate mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-web3-light-blue bg-opacity-20 border border-web3-light-blue border-opacity-30 text-white focus:outline-none focus:border-web3-aqua transition-all duration-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn-3d bg-web3-aqua hover:bg-web3-light-aqua text-web3-deep-blue px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 w-full md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-web3-deep-blue border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Cartoon Character - Absolute Position */}
        <motion.img
          src={assets.nftTwo}
          alt="Contact Helper"
          className="hidden lg:block fixed bottom-10 right-10 z-10 w-20 h-20 rounded-full border-2 border-web3-aqua"
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
