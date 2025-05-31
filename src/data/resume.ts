import { Experience, Skill, Education, NavItem, Project } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    company: 'Creonsoft',
    position: 'Software Engineer',
    period: 'JAN 2021 - PRESENT',
    description: [
      'Created web pages using .NET Core and Razor',
      'Integrated payment API with third party services',
      'Implemented web scraping solutions using Selenium',
      'Maintained CI/CD pipelines with Kubernetes and Argo CD',
      'Developed chatbots using Rasa library',
      'Customized chatbot UI using React',
    ],
    skills: ['C#', '.NET Core', 'Kubernetes', 'Docker', 'React', 'Selenium'],
  },
  {
    company: 'Astra International',
    position: 'Software Engineer',
    period: 'JAN 2020 - PRESENT',
    description: [
      'Created REST APIs with .NET Framework',
      'Maintained CI/CD pipelines with Azure DevOps',
      'Developed and optimized database queries',
      'Implemented automated deployment solutions',
    ],
    skills: ['C#', '.NET Framework', 'SQL Query', 'Azure DevOps', 'Automation Deployment'],
  },
  {
    company: 'Bank Indonesia',
    position: 'Software Developer',
    period: 'JUL 2019 - DEC 2019',
    description: [
      'Created web applications with ASP.NET MVC 5 and DevExtreme',
      'Implemented user interface based on business requirements',
      'Handled both front-end and back-end development',
      'Optimized database queries for improved performance',
    ],
    skills: ['C#', '.NET Framework MVC', 'DevExtreme', 'JavaScript', 'HTML', 'CSS', 'SQL Query'],
  },
  {
    company: 'Kharismasoft',
    position: 'Junior Developer',
    period: 'MAR 2018 - JUL 2019',
    description: [
      'Contributed to software development projects',
      'Assisted in implementing software solutions',
      'Participated in code reviews and testing',
    ],
    skills: ['.NET', 'JavaScript', 'SQL'],
  },
  {
    company: 'Qpro Sukses Mandiri',
    position: 'Software Developer Intern',
    period: 'FEB 2017 - FEB 2018',
    description: [
      'Assisted in software development projects',
      'Learned and implemented programming best practices',
      'Collaborated with senior developers on various tasks',
    ],
    skills: ['C#', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const projects: Project[] = [
  {
    name: 'Plong',
    description: 'A mobile application available on Google Play Store that showcases modern Android development practices.',
    period: '2023',
    link: 'https://play.google.com/store/apps/details?id=com.plong.plong',
    highlights: [
      'Developed using Kotlin and Jetpack Compose for modern UI development',
      'Implemented backend services using Golang',
      'Integrated MongoDB for efficient data storage and retrieval',
      'Published on Google Play Store with active user base',
    ],
    skills: ['Kotlin', 'Jetpack Compose', 'Golang', 'MongoDB', 'Android Development'],
  },
];

export const skills: Skill[] = [
  { name: 'C#', proficiency: 5, category: 'backend' },
  { name: '.NET Core/Framework', proficiency: 5, category: 'backend' },
  { name: 'SQL Query', proficiency: 4, category: 'backend' },
  { name: 'React', proficiency: 4, category: 'frontend' },
  { name: 'JavaScript', proficiency: 4, category: 'frontend' },
  { name: 'HTML/CSS', proficiency: 4, category: 'frontend' },
  { name: 'Node.js', proficiency: 3, category: 'backend' },
  { name: 'Kubernetes', proficiency: 3, category: 'devops' },
  { name: 'Docker', proficiency: 3, category: 'devops' },
  { name: 'Azure DevOps', proficiency: 3, category: 'devops' },
  { name: 'Selenium', proficiency: 3, category: 'other' },
  { name: 'Kotlin', proficiency: 4, category: 'frontend' },
  { name: 'Jetpack Compose', proficiency: 4, category: 'frontend' },
  { name: 'Android Development', proficiency: 4, category: 'frontend' },
  { name: 'Golang', proficiency: 3, category: 'backend' },
  { name: 'MongoDB', proficiency: 3, category: 'backend' },
];

export const education: Education[] = [
  {
    institution: 'Bina Nusantara University',
    degree: 'Bachelor in Computer Science',
    period: '2014 - 2018',
    gpa: '3.48',
  },
];

export const personalInfo = {
  name: 'Marcellinus Kristanto',
  title: 'Software Engineer',
  profile: 'I am a software engineer seeking a full-time position in the field of programming for continuous skills improvement.',
  linkedin: '/marcellinus-kristanto-992131176',
  email: 'marcellinus_kristanto@hotmail.com',
  location: 'Indonesia',
};