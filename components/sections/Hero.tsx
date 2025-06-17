'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Code, Server, Cloud, Zap } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { useEffect, useState } from 'react';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-cyan-900/10" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />
        {/* Scanning lines */}
        {/* <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          //@ts-ignore
          animate={{ y: [0, window.innerHeight || 800] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        /> */}
        {/* <motion.div
          className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          animate={{ x: [0, window.innerWidth || 1200] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
        /> */}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-16 h-16 text-cyan-400 mx-auto animate-pulse-cyan" />
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text animate-flicker">
              NAKUL PISE
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-300 mb-8 font-rajdhani font-medium">
            <AnimatedText text="FULL STACK & DEVOPS ENGINEER" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <motion.div 
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-cyan-400/30 cyber-border"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
          >
            <Code className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-100 font-rajdhani font-medium">FRONTEND</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-purple-400/30 cyber-border"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
          >
            <Server className="w-6 h-6 text-purple-400" />
            <span className="text-cyan-100 font-rajdhani font-medium">BACKEND</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-pink-400/30 cyber-border"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" }}
          >
            <Cloud className="w-6 h-6 text-pink-400" />
            <span className="text-cyan-100 font-rajdhani font-medium">DEVOPS</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-cyan-300/80 max-w-3xl mx-auto mb-12 font-rajdhani"
        >
          ARCHITECTING DIGITAL FUTURES WITH CUTTING-EDGE TECHNOLOGIES. 
          TRANSFORMING IDEAS INTO SCALABLE SOLUTIONS.
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 cyber-border font-rajdhani text-lg"
          whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)" }}
        >
          INITIALIZE SYSTEM
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>

      {/* Cyber scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}