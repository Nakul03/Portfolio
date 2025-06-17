'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'CYBER COMMERCE NEXUS',
    description: 'Full-stack quantum commerce solution with React neural networks, Node.js processing cores, and PostgreSQL data matrices. Features encrypted authentication, payment processing, and admin control panels.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DEVOPS AUTOMATION MATRIX',
    description: 'Containerized microservices deployment with Docker containers, Kubernetes orchestration, and CI/CD automation protocols. Reduced deployment cycles by 80% through quantum optimization.',
    image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'NEURAL CHAT INTERFACE',
    description: 'Scalable real-time communication system with Socket.io neural pathways, Redis memory banks, and MongoDB data storage. Supports quantum messaging, file transmission, and group consciousness.',
    image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Socket.io', 'React', 'MongoDB', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'CLOUD SURVEILLANCE SYSTEM',
    description: 'Advanced monitoring dashboard for cloud infrastructure with real-time metrics, threat detection alerts, and cost optimization algorithms for maximum efficiency.',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AWS CloudWatch', 'React', 'Python', 'Grafana'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'TASK COORDINATION PROTOCOL',
    description: 'Collaborative project management system with team synchronization, temporal tracking, and advanced reporting algorithms for optimal productivity enhancement.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'MICROSERVICES GATEWAY CORE',
    description: 'Scalable API gateway with quantum authentication, rate limiting protocols, and service discovery for advanced microservices architecture management.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Express.js', 'Kong', 'Docker', 'Consul'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 bg-black/50 relative" ref={ref}>
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
              PROJECT.ARCHIVE
            </span>
          </h2>
          <p className="text-cyan-300/80 text-lg max-w-2xl mx-auto font-rajdhani">
            DIGITAL CONSTRUCTS SHOWCASING ADVANCED ENGINEERING PROTOCOLS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}