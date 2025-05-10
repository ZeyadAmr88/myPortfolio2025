"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Tala Brand",
    description:
      "Modern, responsive fashion e-commerce website built to showcase and sell stylish clothing products. I developed the frontend and integrated it with an existing backend (not built by me) to provide users with a seamless shopping experience. The source code cannot be shared as this is a paid project for a client.",
    image: "/assets/images/tala.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "API Integration",
      "Axios",
    ],
    githubLink: null,
    demoLink: "https://tala8brand.netlify.app/",
  },
  {
    title: "Zshop E-commerce",
    description:
      "E-commerce platform with user-friendly features, including password reset functionality. Utilized Firebase for authentication and real-time database for efficient data handling.",
    image: "/assets/images/zshop.png",
    tags: ["ReactJS", "Firebase", "Sass", "Bootstrap"],
    githubLink: "https://github.com/ZeyadAmr88/Z-shop-React-Ecommerce",
    demoLink: "https://z-shop-41095.web.app/",
  },
  {
    title: "Portfolio Website (Current)",
    description:
      "A responsive portfolio website built with React and Tailwind CSS, featuring animations and contact form.",
    image: "/assets/images/myportfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/ZeyadAmr88/myPortfolio2025",
    demoLink: "https://zeyadamr.netlify.app/",
    featured: false,
  },
  {
    title: "Snake Game",
    description:
      "A classic snake game recreated using HTML, CSS, and JavaScript. This browser-based game features responsive controls, collision detection, and a clean interface, offering a nostalgic yet smooth gaming experience.",
    image: "/assets/images/snakegame.png",
    tags: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/ZeyadAmr88/ZozSnakeGame.github.io",
    demoLink:
      "https://zeyadamr88.github.io/ZozSnakeGame.github.io/snakeGame.html",
  },
  {
    title: "My Old Portfolio",
    description:
      "A clean and simple portfolio website showcasing my earlier work and skills.",
    image: "/assets/images/myoldportfolio.jpg",
    tags: ["HTML", "CSS"],
    githubLink: "https://github.com/ZeyadAmr88/zeyadamr88.github.io",
    demoLink: "https://zeyadamr88.github.io/portfolio.html",
    featured: false,
  },
  {
    title: "Portfolio 1",
    description:
      "A portfolio website with interactive elements and responsive design.",
    image: "/assets/images/portfolio1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "http://github.com/ZeyadAmr88/amrnoufl.github.io",
    demoLink:
      "https://zeyadamr88.github.io/amrnoufl.github.io/Amr_portfolio.html",
    featured: false,
  },
  {
    title: "Portfolio 2",
    description:
      "Another portfolio design with different layout and styling approach.",
    image: "/assets/images/portfolio2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/ZeyadAmr88/abdelghany.github.io",
    demoLink:
      "https://zeyadamr88.github.io/abdelghany.github.io/3b8anii-potfolio-2.html",
    featured: false,
  },
];

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Add state to control animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-16 min-h-screen">
      <SectionWrapper id="projects">
        <SectionTitle
          title="Projects"
          subtitle="Check out some of my recent work"
        />

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 px-2 sm:px-0"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} project={project} />
          ))}
        </motion.div>
      </SectionWrapper>
    </main>
  );
};

export default Projects;
