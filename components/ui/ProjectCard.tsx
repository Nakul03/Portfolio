'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden cyber-border"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xl font-bold text-cyan-100 font-orbitron group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-cyan-300/80 text-sm leading-relaxed mb-4 font-rajdhani">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-xs bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 font-rajdhani"
              whileHover={{ 
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderColor: "rgba(0, 255, 255, 0.6)"
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-100 font-rajdhani"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={16} />
            Live Link
          </motion.a>
          
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:border-purple-400/60 hover:text-purple-100 font-rajdhani"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 15px rgba(147, 51, 234, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            SOURCE
          </motion.a>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}