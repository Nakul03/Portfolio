'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { User, MapPin, Calendar, Cpu, Terminal, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [windowHeight, setWindowHeight] = useState(800); // fallback default

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-black/50 relative" ref={ref}>
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
              SYSTEM.PROFILE
            </span>
          </h2>
          <p className="text-cyan-300/80 text-lg max-w-2xl mx-auto font-rajdhani">
            NEURAL INTERFACE ACTIVATED - ACCESSING DEVELOPER MATRIX
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-cyan-100/90 leading-relaxed font-rajdhani text-lg">
                I'm a Passionate Full Stack and DevOps Engineer interfacing with cutting-edge web technologies 
                and cloud infrastructure. My neural pathways are optimized for creating seamless user 
                experiences while maintaining robust, scalable backend systems and efficient deployment protocols.
              </p>
              
              <p className="text-cyan-100/90 leading-relaxed font-rajdhani text-lg">
                My journey through the digital matrix has been driven by algorithmic curiosity and a desire to 
                solve complex computational problems. I thrive on working with bleeding-edge technologies and 
                continuously upgrade my capabilities to adapt to new challenges in the ever-evolving technological landscape.
              </p>
              
              <p className="text-cyan-100/90 leading-relaxed font-rajdhani text-lg">
                When not compiling code, you'll find me exploring new technological frontiers, contributing to 
                open-source repositories, or sharing knowledge with the global developer network.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <motion.div 
                className="flex items-center gap-3 text-cyan-300 p-3 bg-black/30 rounded-lg border border-cyan-400/20"
                whileHover={{ borderColor: "rgba(0, 255, 255, 0.6)", boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)" }}
              >
                <User className="w-5 h-5 text-cyan-400" />
                <span className="font-rajdhani">ENGINEER</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-cyan-300 p-3 bg-black/30 rounded-lg border border-purple-400/20"
                whileHover={{ borderColor: "rgba(147, 51, 234, 0.6)", boxShadow: "0 0 15px rgba(147, 51, 234, 0.3)" }}
              >
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="font-rajdhani">REMOTE</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-cyan-300 p-3 bg-black/30 rounded-lg border border-pink-400/20"
                whileHover={{ borderColor: "rgba(236, 72, 153, 0.6)", boxShadow: "0 0 15px rgba(236, 72, 153, 0.3)" }}
              >
                <Calendar className="w-5 h-5 text-pink-400" />
                <span className="font-rajdhani">ONLINE</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-cyan-300 p-3 bg-black/30 rounded-lg border border-yellow-400/20"
                whileHover={{ borderColor: "rgba(250, 204, 21, 0.6)", boxShadow: "0 0 15px rgba(250, 204, 21, 0.3)" }}
              >
                <Terminal className="w-5 h-5 text-yellow-400" />
                <span className="font-rajdhani">OPEN SOURCE</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-600/10 to-purple-600/10 p-8 rounded-2xl border border-cyan-400/30 cyber-border backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-4 bg-black/30 rounded-lg border border-cyan-400/20"
                  whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 255, 0.6)" }}
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2 font-orbitron neon-text">1+</div>
                  <div className="text-cyan-300/80 font-rajdhani">YEARS ACTIVE</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-black/30 rounded-lg border border-purple-400/20"
                  whileHover={{ scale: 1.05, borderColor: "rgba(147, 51, 234, 0.6)" }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2 font-orbitron neon-text">2+</div>
                  <div className="text-cyan-300/80 font-rajdhani">PROJECTS DEPLOYED</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-black/30 rounded-lg border border-pink-400/20"
                  whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.6)" }}
                >
                  <div className="text-4xl font-bold text-pink-400 mb-2 font-orbitron neon-text">25+</div>
                  <div className="text-cyan-300/80 font-rajdhani">TECH STACK</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-black/30 rounded-lg border border-yellow-400/20"
                  whileHover={{ scale: 1.05, borderColor: "rgba(250, 204, 21, 0.6)" }}
                >
                  <div className="text-4xl font-bold text-yellow-400 mb-2 font-orbitron neon-text">∞</div>
                  <div className="text-cyan-300/80 font-rajdhani">LEARNING MODE</div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating cyber elements */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center"
            >
              <Cpu className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-400/50 flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}