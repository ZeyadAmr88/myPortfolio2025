import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";

import img from "/assets/images/img88.jpg";

const Home = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1 + 0.8,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      boxShadow: "none",
      transition: { duration: 0.1 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <main className="bg-slate-200 transition-colors duration-300">
      {/* Hero Section */}
      <SectionWrapper
        id="hero"
        className="min-h-screen flex items-center pt-20 md:pt-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5 md:space-y-6 order-2 md:order-1 text-center md:text-left px-4 md:px-0">
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 md:mb-4"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-accent block md:inline mb-1 md:mb-0">
                Hi, I'm{" "}
              </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">Zeyad Amr</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-accent-light -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl md:text-3xl text-gray-700"
            >
              Front-End Developer
            </motion.h2>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0"
            >
              I build modern, responsive web applications with cutting-edge
              technologies. Passionate about creating beautiful user
              experiences.
            </motion.p>

            <motion.div
              className="flex space-x-4 justify-center md:justify-start"
              initial="hidden"
              animate="visible"
            >
              <motion.a
                custom={0}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                href="https://github.com/ZeyadAmr88"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 glass-effect text-text-primary rounded-full hover:shadow-button"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 md:h-6 md:w-6" />
              </motion.a>

              <motion.a
                custom={1}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                href="https://www.linkedin.com/in/zeyad-amr-341937244/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 glass-effect text-text-primary rounded-full hover:shadow-button"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 md:h-6 md:w-6" />
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start"
              initial="hidden"
              animate="visible"
            >
              <motion.div
                custom={0}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/projects"
                  className="flex items-center px-6 md:px-8 py-2.5 md:py-3 bg-accent text-white rounded-lg transition-all text-sm md:text-base"
                >
                  View Projects <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>

              <motion.div
                className="flex content-center"
                custom={1}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/contact"
                  className="px-6 md:px-8 py-2.5 md:py-3 border border-accent text-accent rounded-lg transition-all text-sm md:text-base"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center order-1 md:order-2 mb-6 md:mb-0"
          >
            <div className="relative">
              {/* Background decorative element (floating circle) */}
              <motion.div
                className="absolute -z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full opacity-20"
                initial={{ x: 20, y: 20 }}
                animate={{ x: 10, y: 10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "easeInOut",
                }}
              />

              {/* Profile image container with hover scale */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl"
              >
                <img
                  src={img}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Floating decorative small circle with hover scale */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black opacity-60"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.5 },
                }}
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Home;
