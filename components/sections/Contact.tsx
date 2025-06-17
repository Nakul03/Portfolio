'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, Terminal, Zap } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nakul03', label: 'GitHub', color: 'text-gray-300' },
    { icon: Linkedin, href: "https://linkedin.com/in/nakul0005", label: 'LinkedIn', color: 'text-blue-400' },
    { icon: Twitter, href: 'https://x.com/Nakul_1381', label: 'Twitter', color: 'text-cyan-400' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'nakulpise831@gmail.com', href: 'mailto:nakulpise831@gmail.com', color: 'text-cyan-400' },
    { icon: Phone, text: '+91 9028032178', href: 'tel:+919028032178', color: 'text-purple-400' },
    // { icon: MapPin, text: 'Digital Realm, Cyberspace', href: '#', color: 'text-pink-400' },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative" ref={ref}>
      {/* Cyber background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        
        {/* Scanning lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          animate={{ y: [0, 800] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
              ESTABLISH.CONNECTION
            </span>
          </h2>
          <p className="text-cyan-300/80 text-lg max-w-2xl mx-auto font-rajdhani">
            INITIATE SECURE COMMUNICATION PROTOCOL - READY TO DEPLOY DIGITAL SOLUTIONS
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-cyan-100 mb-6 font-orbitron">COMMUNICATION CHANNELS</h3>
              <p className="text-cyan-300/80 leading-relaxed mb-8 font-rajdhani text-lg">
                I'm always interfacing with new opportunities, innovative projects, 
                or engaging in technological discourse. Don't hesitate to establish connection!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg hover:border-cyan-400/60 transition-all duration-300 group cyber-border"
                  whileHover={{ x: 5, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300 font-rajdhani">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-cyan-100 mb-4 font-orbitron">NETWORK LINKS</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg flex items-center justify-center hover:border-cyan-400/60 transition-all duration-300 cyber-border"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} className={social.color} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 cyber-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-cyan-100 font-orbitron">MESSAGE.PROTOCOL</h3>
            </div>
            
            <form className="space-y-6" action="https://formcarry.com/s/CG03SflL67D" method="POST" 
  >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2 font-rajdhani">
                    USER.NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-colors duration-200 font-rajdhani"
                    placeholder="Name Please"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2 font-rajdhani ">
                    EMAIL.ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-colors duration-200 font-rajdhani"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cyan-300 mb-2 font-rajdhani">
                  SUBJECT.LINE
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-colors duration-200 font-rajdhani"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2 font-rajdhani">
                  MESSAGE.CONTENT
                </label>
                <textarea
                  id="message"
                  name="description"
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none font-rajdhani"
                  placeholder="Describe your vision..."
                />
              </div>
                
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thanks! I received your message." />
                {/* <input type="hidden" name="_captcha" value="false" /> */}

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group cyber-border font-rajdhani text-lg"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                TRANSMIT MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-16 border-t border-cyan-400/20 mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            <p className="text-cyan-300/80 font-rajdhani">
              © 2024 Nakul Pise. All rights reserved.
            </p>
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}