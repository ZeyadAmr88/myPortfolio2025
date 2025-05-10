// Navigation links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

// Skills
export const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Git', level: 80 },
  { name: 'Figma', level: 65 },
];

// Experience
export const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    date: '2021 - Present',
    description: 'Led the development of responsive web applications using React, Redux, and Tailwind CSS. Implemented CI/CD pipelines and improved performance by 40%.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    date: '2018 - 2021',
    description: 'Developed and maintained multiple client websites and web applications using the MERN stack. Collaborated with designers to implement pixel-perfect UIs.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Startup',
    date: '2016 - 2018',
    description: 'Built responsive websites and implemented features using HTML, CSS, JavaScript, and jQuery. Worked in an agile environment with daily stand-ups.',
  },
];

// Projects
export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.',
    image: '/src/assets/images/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    category: 'fullstack',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates.',
    image: '/src/assets/images/project2.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    category: 'frontend',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations using a third-party API.',
    image: '/src/assets/images/project3.jpg',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    category: 'frontend',
  },
  {
    title: 'Blog API',
    description: 'A RESTful API for a blog platform with user authentication, post creation, comments, and category filtering.',
    image: '/src/assets/images/project1.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com',
    demoLink: null,
    category: 'backend',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS, featuring dark mode, animations, and contact form.',
    image: '/src/assets/images/project2.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    category: 'frontend',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with private messaging, group chats, and online status indicators.',
    image: '/src/assets/images/project3.jpg',
    tags: ['React', 'Socket.io', 'Node.js', 'Express'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    category: 'fullstack',
  },
];

// Project categories
export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
];

// Contact information
export const contactInfo = [
  {
    title: 'Email',
    content: 'contact@example.com',
    link: 'mailto:contact@example.com',
  },
  {
    title: 'Phone',
    content: '+1 (123) 456-7890',
    link: 'tel:+11234567890',
  },
  {
    title: 'Location',
    content: 'New York, NY, USA',
    link: null,
  },
];
