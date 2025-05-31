import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/resume';

const Education: React.FC = () => {
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
    <section id="education" className="py-20 bg-secondary-50 dark:bg-secondary-800">
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
              Education
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-secondary-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-600"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-4" />
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                      {edu.institution}
                    </h3>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 text-secondary-500 dark:text-secondary-400 mr-2" />
                    <span className="text-sm font-medium text-secondary-500 dark:text-secondary-400">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="ml-12">
                  <h4 className="text-lg font-medium text-secondary-800 dark:text-secondary-200 mb-4">
                    {edu.degree}
                  </h4>

                  {edu.gpa && (
                    <div className="flex items-center mt-4">
                      <Award className="h-5 w-5 text-accent-500 mr-2" />
                      <span className="text-secondary-600 dark:text-secondary-300">
                        GPA: <span className="font-semibold">{edu.gpa}</span>
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;