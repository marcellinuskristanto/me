import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/resume';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-20 bg-secondary-50 dark:bg-secondary-800">
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
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              My professional journey in software development across various companies and projects.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>

            {/* Experience items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-0 md:pb-12 ${
                  index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'
                } md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute h-5 w-5 rounded-full bg-primary-600 border-4 border-white dark:border-secondary-800 z-10 top-5 ${
                    index % 2 === 0
                      ? 'right-0 md:right-0 md:left-auto md:-mr-[0.6rem] md:ml-0'
                      : 'left-0 md:left-0 md:right-auto md:-ml-[0.6rem] md:mr-0'
                  }`}
                ></div>

                {/* Experience card */}
                <div
                  className={`ml-8 md:ml-0 bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-600 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex flex-col md:flex-col items-start md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400">
                      {experience.company}
                    </h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 text-secondary-500 dark:text-secondary-400 mr-2" />
                      <span className="text-sm font-medium text-secondary-500 dark:text-secondary-400">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium text-secondary-800 dark:text-secondary-200 mb-3 text-left">
                    {experience.position}
                  </h4>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-2"></span>
                        <span className="text-secondary-600 dark:text-secondary-300 text-left">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;