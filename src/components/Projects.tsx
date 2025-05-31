import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, ExternalLink } from 'lucide-react';
import { projects } from '../data/resume';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-900">
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
              Personal Projects
            </h2>
            <div className="w-20 h-1 bg-accent-600 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Showcasing my passion for development through personal projects
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary-50 dark:bg-secondary-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Smartphone className="h-6 w-6 text-accent-600 mr-3" />
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {project.name}
                    </h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-accent-600 hover:text-accent-700 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="ml-1 text-sm">View Project</span>
                    </a>
                  )}
                </div>

                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {project.description}
                </p>
                
                {
                  (project.highlights.length > 0) && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-600 mt-2 mr-2"></span>
                            <span className="text-secondary-600 dark:text-secondary-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;