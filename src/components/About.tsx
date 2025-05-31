import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, GitBranch, Smartphone } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent-600 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              I'm a versatile software engineer with expertise in .NET, React, Kotlin, and cloud technologies.
              I specialize in building robust web applications, mobile apps, and services with a focus on performance and user experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Code className="h-10 w-10 text-accent-600 dark:text-accent-400 mr-4" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Frontend Development
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-300">
                I create responsive and interactive user interfaces using modern frameworks like React and traditional technologies like HTML, CSS, and JavaScript.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Server className="h-10 w-10 text-accent-600 dark:text-accent-400 mr-4" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Backend Development
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-300">
                I build robust server-side applications using .NET Core, ASP.NET MVC, Node.js, and Golang. I design RESTful APIs and integrate with third-party services.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Smartphone className="h-10 w-10 text-accent-600 dark:text-accent-400 mr-4" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Mobile Development
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-300">
                I develop modern Android applications using Kotlin and Jetpack Compose, focusing on clean architecture and material design principles.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <GitBranch className="h-10 w-10 text-accent-600 dark:text-accent-400 mr-4" />
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  DevOps & CI/CD
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-300">
                I set up and maintain CI/CD pipelines using Azure DevOps, Kubernetes, and Docker to automate deployment and ensure code quality.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;