"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

// Add the missing import at the top
import { useState, useEffect } from "react";

// Update the SectionWrapper component to use a more reliable animation trigger
const SectionWrapper = ({
  id,
  children,
  className = "",
  animationVariant = "fadeIn",
}) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6 } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
  };

  // Add useEffect to ensure animations trigger on mount
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={id} className={`py-20 px-4 w-full ${className}`}>
      <motion.div
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={variants[animationVariant]}
        className="container mx-auto max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

// Inline SkillCard Component
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 },
      }}
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-center justify-center"
    >
      <div className="text-accent mb-3 text-2xl">{skill.icon}</div>
      <span className="text-gray-900 font-semibold text-lg mb-1">
        {skill.name}
      </span>
      <span className="text-gray-500 text-sm mb-3">{skill.category}</span>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="bg-gradient-to-r from-slate-500 to-slate-600 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mt-1 self-end">{skill.level}%</div>
    </motion.div>
  );
};

// Inline TimelineItem Component
const TimelineItem = ({ experience, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative pl-8 pb-8 ${
        !isLast ? "mb-8 border-b border-gray-300" : ""
      }`}
    >
      <div className="absolute left-0 top-0 h-full">
        <div className="relative h-full">
          {!isLast && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-500 to-slate-300" />
          )}
          <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 -translate-x-1/2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-100" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>

        <div className="flex flex-wrap items-center text-gray-600 mb-3 mt-1">
          <span className="mr-2 font-medium">{experience.company}</span>
          <span className="text-sm bg-gradient-to-r from-slate-200 to-gray-100 text-slate-800 px-3 py-1 rounded-full">
            {experience.date}
          </span>
          <span className="ml-2 text-sm text-gray-500 flex items-center">
            {experience.location}
          </span>
        </div>

        <ul className="space-y-2 text-gray-600 mt-4">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Inline VolunteerCard Component
const VolunteerCard = ({ volunteer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mr-4 text-white">
          {volunteer.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{volunteer.title}</h3>
          <p className="text-slate-600">{volunteer.organization}</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="inline-block bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 text-xs font-medium px-3 py-1 rounded-full">
          {volunteer.period}
        </span>
      </div>

      <ul className="space-y-2 text-gray-600">
        {volunteer.description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Data
const skills = [
  { name: "HTML", category: "Frontend", icon: <FaCode />, level: 90 },
  { name: "CSS", category: "Frontend", icon: <FaCode />, level: 85 },
  { name: "JavaScript", category: "Frontend", icon: <FaCode />, level: 85 },
  { name: "React.js", category: "Frontend", icon: <FaCode />, level: 90 },
  { name: "SQL", category: "Database", icon: <FaDatabase />, level: 75 },
  { name: "C++", category: "Programming", icon: <FaLaptopCode />, level: 60 },
  {
    name: "Python",
    category: "Programming",
    icon: <FaLaptopCode />,
    level: 80,
  },
  { name: "Git", category: "Tools", icon: <FaTools />, level: 80 },
  { name: "GitHub", category: "Tools", icon: <FaTools />, level: 80 },
];

const experiences = [
  {
    title: "Coding Instructor",
    company: "iSchool",
    location: "Remote",
    date: "6/2024 - Present",
    description: [
      "Teach coding and sketching fundamentals to 4th, 5th, and 6th-grade students.",
      "Utilize tools such as Scratch and basic programming languages to engage young learners.",
      "Developed a curriculum that improved student engagement by 20%.",
    ],
  },
  {
    title: "Data Literacy Intern",
    company: "CIB Egypt",
    location: "Remote",
    date: "7/2024",
    description: [
      "Completed Data Literacy Essentials and Data Literacy in Practice programs, gaining a deep understanding of data interpretation and management.",
      "Collaborated with teams to analyze and present financial data insights using industry-standard tools.",
      "Developed practical skills in data visualization and storytelling with data, improving reporting efficiency by 15%.",
    ],
  },
];

const volunteering = [
  {
    title: "IT Director",
    organization: "IEEE HSB",
    period: "Season 24/25",
    description: [
      "Lead the IT department, managing website development, and digital platforms, and ensuring smooth technical operations for events.",
      "Mentor and coordinate volunteers, organizing workshops to enhance web development skills.",
      "Collaborate with cross-functional teams to support event planning and digital infrastructure needs.",
    ],
    icon: <FaLaptopCode />,
  },
  {
    title: "IT Volunteer",
    organization: "IEEE HSB",
    period: "Season 23/24",
    description: [
      "Developed and maintained the IEEE HSB website, increasing traffic by 15%.",
      "Worked as a front-end developer using ReactJS.",
    ],
    icon: <FaCode />,
  },
  {
    title: "PR Volunteer",
    organization: "ENACTUS ACU",
    period: "Season 22/23",
    description: [
      "Enhanced negotiation skills.",
      "Leveled up teamwork skills.",
    ],
    icon: <FaHandsHelping />,
  },
];

// Main About Component
const About = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* About Me Section */}
      <SectionWrapper id="about" animationVariant="fadeIn">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and my background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mr-4 text-white">
                <FaUserGraduate className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-0">
                My Story
              </h3>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm a passionate front-end developer with expertise in
                HTML, CSS, JavaScript, and React. My journey in web development
                started during my studies in Computer Science and Artificial
                Intelligence at Ahram Canadian University.
              </p>

              <p>
                Currently, I serve as the IT Director at IEEE HSB, where I lead
                website development and digital platform management. I'm also a
                coding instructor for the iSchool DEMI project, teaching young
                students the fundamentals of programming.
              </p>

              <p>
                I enjoy solving complex problems and turning ideas into reality
                through elegant interfaces. My goal is to create web experiences
                that are not only visually appealing but also highly functional
                and user-friendly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mr-4 text-white">
                <FaGraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-0">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-slate-500"
              >
                <h4 className="text-xl font-bold text-gray-900">
                  Computer Science and Artificial Intelligence
                </h4>
                <p className="text-slate-600 font-medium">Software major</p>
                <p className="text-gray-600 mt-2">
                  Ahram Canadian University (ACU)
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper
        id="skills"
        className="bg-gray-50"
        animationVariant="slideUp"
      >
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="mt-12">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mr-4 text-white">
              <FaLaptopCode className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Technical Expertise
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper id="experience" animationVariant="fadeIn">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="mt-12 w-full">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mr-4 text-white">
              <FaBriefcase className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Work History</h3>
          </div>

          <div className="w-full rounded-2xl shadow-xl p-8 border border-gray-100">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                experience={exp}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Volunteering Section */}
      <SectionWrapper
        id="volunteering"
        className="bg-gray-50"
        animationVariant="slideUp"
      >
        <SectionTitle
          title="Volunteering"
          subtitle="My contributions to the community"
        />

        <div className="mt-12">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full mr-4 text-white">
              <FaHandsHelping className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Volunteer Activities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteering.map((volunteer, index) => (
              <VolunteerCard key={index} volunteer={volunteer} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default About;
