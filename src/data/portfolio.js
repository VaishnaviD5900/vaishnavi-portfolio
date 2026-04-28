export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Education',    href: '#education' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export const STATS = [
  { value: '4+',  label: 'Years of experience' },
  { value: '3',   label: 'Major frameworks mastered' },
  { value: 'MSc', label: 'Distinction — Southampton' },
]

export const SKILLS = [
  {
    category: 'Languages',
    color: 'rose',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS / SCSS', 'Python', 'SQL', 'Core Java'],
  },
  {
    category: 'Frameworks',
    color: 'sage',
    items: ['Vue.js', 'React', 'Angular', 'Node.js', 'Vuetify', 'PrimeVue', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    category: 'Tools & Cloud',
    color: 'lavender',
    items: ['Git / GitHub', 'Azure ADO', 'Docker', 'Figma', 'Render', 'Linux'],
  },
  {
    category: 'Databases',
    color: 'peach',
    items: ['PostgreSQL', 'MySQL'],
  },
]

export const EXPERIENCE = [
  {
    role: 'Frontend Engineer',
    company: 'SLB',
    location: 'London, UK',
    period: 'Sep 2025 – Present',
    color: 'rose',
    description:
      'Working on enterprise data dashboards used by internal teams and external clients for critical engineering decisions. Led the upgrade of a shared Design Library System (DLS) on Angular Material, migrating multiple services from Angular 19 to 21. Introduced Bootstrap and removed redundant SCSS to improve UI consistency.',
    tech: ['Angular', 'TypeScript', 'Angular Material', 'Azure ADO', 'Bootstrap'],
  },
  {
    role: 'Software Engineer',
    company: 'Soter Safety Consulting',
    location: 'Southampton, UK',
    period: 'Jan 2025 – Sep 2025',
    color: 'lavender',
    description:
      'Designed and developed responsive web interfaces focused on data analytics and reporting, including interactive dashboards and export features. Built full-stack applications with Docker and Render, implementing secure authentication and CI/CD workflows.',
    tech: ['React', 'Chart.js', 'SpringBoot', 'Docker', 'PostgreSQL', 'Figma'],
  },
  {
    role: 'Software Engineer',
    company: 'Dassault Systèmes',
    location: 'Pune, India',
    period: 'Jul 2022 – Aug 2024',
    color: 'sage',
    description:
      'Developed and optimised frontend components for a Digital Claims Management platform for Procter & Gamble. Led migration from Vue 2 to Vue 3 with Composition API enhancements. Developed wizard screens enabling Excel and PDF export. Nominated for the Genius Award for excellence in UI implementation.',
    tech: ['Vue.js', 'Vuetify', 'PrimeVue', 'JavaScript', 'Azure', 'Git'],
  },
  {
    role: 'Software Developer Intern',
    company: 'DocketRun Tech',
    location: 'Hubli, India',
    period: 'Jan 2022 – May 2022',
    color: 'peach',
    description:
      'Developed an analytics dashboard tracking UCAM device data for a global automobile manufacturer. Designed responsive UIs using AngularJS, Bootstrap, TypeScript, and Node.js.',
    tech: ['AngularJS', 'Bootstrap', 'Node.js', 'TypeScript'],
  },
]

export const EDUCATION = [
  {
    degree: 'MSc in Computer Science',
    university: 'University of Southampton',
    period: 'Sept 2024 - Sept 2025',
    badge: 'Distinction',
    modules: 'Software Project Management · Data Visualisation · Mobile & Web Development · Advanced Databases · Software Security',
    highlight: 'Dissertation: Query Repair Engine Simulator — interactive dashboard using React & TypeScript to visualise query optimisation algorithms on large datasets.',
  },
  {
    degree: 'BE in Computer Science',
    university: 'KLE Technological University',
    period: 'Jul 2018 - Jun 2022',
    badge: 'CGPA 8.13 / 10',
    modules: 'Web Technologies · Data Structures & Algorithms · DBMS · Computer Networks · OOPS · Internet of Things',
    highlight: 'Projects: Food Delivery System (MEAN stack) and Flight Management System (React + Node.js).',
  },
]

export const PROJECTS = [
  {
    icon: '🔬',
    title: 'Query Repair Engine Simulator',
    description:
      'Interactive analytics dashboard to visualise and simulate query optimisation algorithms on large datasets. Includes A/B testing, client-side caching, REST API integration, and a Figma-designed UI validated through user research sessions.',
    tech: ['React', 'TypeScript', 'REST API', 'Figma'],
    github: '#',
    live: '#',
  },
  {
    icon: '✈️',
    title: 'Flight Management System',
    description:
      'Full-stack system for flight search, booking, cancellation, and email invoice generation. Built with RESTful APIs for scalable scheduling and seamless data flow.',
    tech: ['React', 'Node.js', 'HTML/CSS', 'REST API'],
    github: '#',
    live: '#',
  },
  {
    icon: '📝',
    title: 'Console Blog',
    description:
      'A frontend developer blog featuring interactive code editors powered by Monaco (VS Code\'s engine), live CSS/HTML/JS playgrounds, and persistent likes via Upstash Redis. Fully SEO optimised with Open Graph tags, sitemaps, per-post meta tags, and Google Search Console integration.',
    tech: ['React', 'Vite', 'React Router', 'CSS Modules', 'Monaco Editor', 'Upstash Redis', 'Vercel'],
    github: 'https://github.com/VaishnaviD5900/console-blog',
    live: 'https://console-blog.vaishnavi-deshpande.com/',
  },
]

export const LINKEDIN_RECOMMENDATIONS_URL =
  'https://www.linkedin.com/in/vaishnavi-p-deshpande/details/recommendations/'

export const TESTIMONIALS = [
  {
    quote:
  'I had the pleasure of working closely with Vaishnavi at Dassault Systèmes on a project for a major CPG giant. Vaishnavi consistently demonstrated strong problem-solving abilities, excelling in software engineering tasks. She played a crucial role in building and optimizing key modules using cutting-edge technologies, showcasing her deep understanding of front-end frameworks and development principles.',
    name: 'Srinivasarao Medam',
    role: 'Expert Solutions Architect · Dassault Systèmes',
    initials: 'SM',
    date: 'September 2024',
  },
  {
    quote:
      'I can confidently say she is an outstanding front-end developer. Her expertise in front-end technologies is evident in the high-quality work she consistently delivers. Vaishnavi has an incredible ability to translate design concepts into fully functional, responsive, and visually appealing interfaces. Beyond her technical skills, Vaishnavi possesses excellent communication skills and is a natural problem solver.',
    name: 'Yugandhar Prashant Indurkar',
    role: 'Services Software Architect · Dassault Systèmes DSGS',
    initials: 'YI',
    date: 'August 2024',
  },
  {
    quote:
      'I was truly impressed by her rapid ability to grasp new concepts and apply them effectively in her work. Her dedication to learning and continuous improvement is evident in her work. Vaishnavi is not only a hard worker but also a team player. She consistently demonstrates a positive attitude and a willingness to collaborate with others.',
    name: 'Abhishek Alevoor',
    role: 'Technical Architect · 3DEXPERIENCE Enovia',
    initials: 'AA',
    date: 'August 2024',
  },
]
