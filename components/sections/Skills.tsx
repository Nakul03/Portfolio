'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Terminal,
  FileCode,
  Palette,
  Layers,
  Server,
  GitBranch,
  Github,
  Cpu,
  Container,
  Settings,
  Zap,
  Globe,
  Shield,
  Plug,
  SquareTerminal,
  Pyramid
} from 'lucide-react';

const techStack = [
  // Frontend
  { name: 'HTML5', icon: FileCode, color: 'text-orange-400', category: 'frontend' },
  { name: 'CSS3', icon: Palette, color: 'text-blue-400', category: 'frontend' },
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400', category: 'frontend' },
  { name: 'TypeScript', icon: Code, color: 'text-blue-500', category: 'frontend' },
  { name: 'React', icon: Layers, color: 'text-cyan-400', category: 'frontend' },
  { name: 'Next.js', icon: Globe, color: 'text-white', category: 'frontend' },
  { name: 'Tailwind', icon: Palette, color: 'text-teal-400', category: 'frontend' },
  
  // Backend & Database
  { name: 'Node.js', icon: Server, color: 'text-green-400', category: 'backend' },
  { name: 'Express', icon: Server, color: 'text-gray-400', category: 'backend' },
  { name: 'MongoDB', icon: Database, color: 'text-green-500', category: 'backend' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-600', category: 'backend' },
  { name: 'JWT', icon: Shield, color: 'text-purple-400', category: 'backend' },
  { name: 'Zod', icon: Shield, color: 'text-indigo-400', category: 'backend' },
  { name: 'WebSocket', icon: Plug, color: 'text-indigo-400', category: 'backend' },
  { name: 'Prisma', icon: Pyramid, color: 'text-indigo-400', category: 'backend' },
  
  // DevOps & Tools
  { name: 'AWS', icon: Cloud, color: 'text-orange-500', category: 'devops' },
  { name: 'Docker', icon: Container, color: 'text-blue-500', category: 'devops' },
  { name: 'Kubernetes', icon: Settings, color: 'text-blue-400', category: 'devops' },
  { name: 'CI/CD', icon: Zap, color: 'text-yellow-500', category: 'devops' },
  { name: 'Git', icon: GitBranch, color: 'text-red-400', category: 'tools' },
  { name: 'GitHub', icon: Github, color: 'text-gray-300', category: 'tools' },
  { name: 'VS Code', icon: Terminal, color: 'text-blue-400', category: 'tools' },
  { name: 'Postman', icon: Cpu, color: 'text-orange-400', category: 'tools' },
  { name: 'Turborepo', icon: Layers, color: 'text-cyan-400', category: 'tools' },
  { name: 'Ubuntu', icon: SquareTerminal, color: 'text-cyan-400', category: 'tools' },
  { name: 'AWS', icon: Cloud, color: 'text-cyan-400', category: 'tools' },
];

const categories = [
  { name: 'FRONTEND', color: 'cyan', icon: Code },
  { name: 'BACKEND', color: 'purple', icon: Server },
  { name: 'DEVOPS', color: 'pink', icon: Cloud },
  { name: 'TOOLS', color: 'yellow', icon: Terminal },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: 'border-cyan-400/30 bg-cyan-400/5 hover:border-cyan-400/60',
      purple: 'border-purple-400/30 bg-purple-400/5 hover:border-purple-400/60',
      pink: 'border-pink-400/30 bg-pink-400/5 hover:border-pink-400/60',
      yellow: 'border-yellow-400/30 bg-yellow-400/5 hover:border-yellow-400/60',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  const getGlowColor = (color: string) => {
    const glowMap = {
      cyan: 'rgba(0, 255, 255, 0.3)',
      purple: 'rgba(147, 51, 234, 0.3)',
      pink: 'rgba(236, 72, 153, 0.3)',
      yellow: 'rgba(250, 204, 21, 0.3)',
    };
    return glowMap[color as keyof typeof glowMap] || glowMap.cyan;
  };

  return (
    <section id="skills" className="py-20 bg-black relative" ref={ref}>
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
              TECH.ARSENAL
            </span>
          </h2>
          <p className="text-cyan-300/80 text-lg max-w-2xl mx-auto font-rajdhani">
            ADVANCED WEAPONRY FOR DIGITAL WARFARE
          </p>
        </motion.div>

        {/* Category Headers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`text-center p-6 rounded-xl border ${getColorClasses(category.color)} backdrop-blur-sm transition-all duration-300`}
            >
              <category.icon className={`w-12 h-12 mx-auto mb-4 text-${category.color}-400`} />
              <h3 className="text-xl font-bold font-orbitron text-cyan-100">{category.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <motion.div
                className="bg-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 text-center transition-all duration-300 hover:border-cyan-400/60 cyber-border"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 20px ${getGlowColor('cyan')}`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon className={`w-8 h-8 mx-auto mb-2 ${tech.color} group-hover:animate-pulse`} />
                <span className="text-sm font-rajdhani text-cyan-100 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
                
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
              
              {/* Floating particles on hover */}
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Cyber Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600/10 to-purple-600/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 cyber-border">
            <h3 className="text-2xl font-bold font-orbitron text-cyan-100 mb-6">
              SYSTEM STATUS: <span className="text-green-400">OPERATIONAL</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 font-orbitron neon-text">{techStack.length}</div>
                <div className="text-cyan-300/80 font-rajdhani">TECHNOLOGIES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 font-orbitron neon-text">100%</div>
                <div className="text-cyan-300/80 font-rajdhani">UPTIME</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 font-orbitron neon-text">∞</div>
                <div className="text-cyan-300/80 font-rajdhani">LEARNING</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 font-orbitron neon-text">24/7</div>
                <div className="text-cyan-300/80 font-rajdhani">READY</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}