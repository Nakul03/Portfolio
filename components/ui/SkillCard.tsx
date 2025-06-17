'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  category: string;
  icon: string;
  skills: Skill[];
}

export function SkillCard({ category, icon, skills }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-white">{category}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              <span className="text-gray-400 text-xs">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? `${skill.level}%` : '0%' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}