import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Code, Server, GitMerge } from 'lucide-react';
import { skills } from '../data/resume';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              My toolkit of programming languages, frameworks, and technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                <Layers className="h-4 w-4 mr-2" />
                All Skills
              </button>
              <button
                onClick={() => setActiveTab('frontend')}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'frontend'
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                <Code className="h-4 w-4 mr-2" />
                Frontend
              </button>
              <button
                onClick={() => setActiveTab('backend')}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'backend'
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                <Server className="h-4 w-4 mr-2" />
                Backend
              </button>
              <button
                onClick={() => setActiveTab('devops')}
                className={`flex items-center px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'devops'
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                <GitMerge className="h-4 w-4 mr-2" />
                DevOps
              </button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-primary-600 h-2.5 rounded-full"
                      style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-secondary-500 dark:text-secondary-400">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;