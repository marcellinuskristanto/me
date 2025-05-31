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
      'Developed an automation system using Selenium to crawl and extract bank statements from various bank websites.',
      'Conducted in-depth research to bypass advanced JavaScript bot protection mechanisms (e.g., F5 security) used by banking platforms.',
      'Built a payment gateway aggregator capable of redirecting transactions to multiple third-party payment vendors.',
      'Created automated APK testing workflows using Katalon Studio.',
      'Managed CI/CD pipelines for both Android and web builds using Bitbucket Pipelines, Docker, and Serveo.',
      'Created a chatbot using Rasa chatbot library',
      'Developed a trading platform using Next.js and Tailwind CSS.',
      'Created a web application to manage mobile credit (pulsa) transactions.',
      'Built a mobile bot using Appium to automate data crawling from banking apps.',
      'Developed a middleware system to connect and integrate multiple game vendors.',
      'Automated deployment processes with Terraform and PowerShell scripts.',
      'Managed scalable web deployments using Kubernetes, leveraging tools like Kustomize, Helm, and ArgoCD.',
    ],
    skills: ['C#', '.NET Core', 'Kubernetes', 'Docker', 'Python', 'React', 'Selenium', 'Next.js', 'Tailwind CSS', 'Appium', 'Katalon Studio'],
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
      'Maintained ongoing website',
      'Re-created some ongoing web-app using .NET Core',
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
    period: '2024',
    link: 'https://play.google.com/store/apps/details?id=com.plong.plong',
    highlights: [
      'Developed using Kotlin and Jetpack Compose for modern UI development',
      'Implemented backend services using Typescript and Golang',
      'Integrated MongoDB for efficient data storage and retrieval',
      'Published on Google Play Store with active user base',
    ],
    skills: ['Kotlin', 'Firebase', 'Jetpack Compose', 'Golang', 'Typescript', 'Payload CMS', 'MongoDB', 'Android Development'],
  },
  {
    name: 'Manga Drive',
    description: 'A smart manga reader mobile app (WebView-based) that detects manga sites and renders them natively in Android. Supports infinite scrolling and auto-navigation to the next chapter, offering a seamless reading experience.',
    period: '2023',
    link: '',
    highlights: [],
    skills: ['Kotlin', 'Firebase', 'Jetpack Compose', 'Golang', 'MongoDB', 'Android Development'],
  },
  {
    name: 'Indeks Rumah',
    description: 'A real estate aggregator platform, similar to Zillow, which lets users search listings from multiple Indonesian property websites including Rumah123, Pinhome.id, 99.co, Rumah.com, and more.',
    period: '2023',
    link: '',
    highlights: [],
    skills: ['Vanilla Javascript', 'HTML', 'CSS', 'Bolt DB', 'MongoDB', 'Web Development'],
  },
  {
    name: 'Storilify',
    description: 'A novel-reading and writing mobile app that enables users to publish, read, and explore stories in a community-driven environment.',
    period: '2022',
    link: 'https://play.google.com/store/apps/details?id=com.strlf.storilify',
    highlights: [],
    skills: ['Kotlin', 'Firebase', 'Android XML view', 'Jetpack Compose', 'Golang', 'MySQL', 'Android Development'],
  },
  {
    name: 'Meme World',
    description: 'A meme creation app built with Flutter, offering users a curated collection of meme templates to easily create and share memes.',
    period: '2021',
    link: '',
    highlights: [],
    skills: ['Flutter', 'MySQL', 'Android Development'],
  },
  {
    name: 'Manga World',
    description: 'An online manga reading mobile application that allows users to explore and read manga directly within the app.',
    period: '2020',
    link: '',
    highlights: [],
    skills: ['Flutter', 'Firebase', 'Golang', 'MySQL', 'Android Development'],
  },
];

export const skills: Skill[] = [
  { name: 'C#', proficiency: 5, category: 'backend' },
  { name: '.NET Core/Framework', proficiency: 5, category: 'backend' },
  { name: 'SQL Query', proficiency: 4, category: 'backend' },
  { name: 'Firebase', proficiency: 5, category: 'backend' },
  { name: 'Golang', proficiency: 4, category: 'backend' },
  { name: 'MongoDB', proficiency: 4, category: 'backend' },
  { name: 'React', proficiency: 4, category: 'frontend' },
  { name: 'JavaScript', proficiency: 4, category: 'frontend' },
  { name: 'HTML/CSS', proficiency: 4, category: 'frontend' },
  { name: 'Node.js', proficiency: 5, category: 'backend' },
  { name: 'Kubernetes', proficiency: 5, category: 'devops' },
  { name: 'Docker', proficiency: 5, category: 'devops' },
  { name: 'Azure DevOps', proficiency: 3, category: 'devops' },
  { name: 'Selenium', proficiency: 5, category: 'other' },
  { name: 'Kotlin', proficiency: 5, category: 'frontend' },
  { name: 'Jetpack Compose', proficiency: 5, category: 'frontend' },
  { name: 'Android Development', proficiency: 5, category: 'frontend' },
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
  github: '/marcellinuskristanto',
  location: 'Indonesia',
};