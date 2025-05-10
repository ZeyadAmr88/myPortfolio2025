import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: (custom) => ({
      scale: 1,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  return (
    <footer className="bg-accent py-8 sm:py-10 md:py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center"
        >
          {/* Left section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left order-2 sm:order-1"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 sm:mb-2">
              Zeyad Amr
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Modern, responsive web development
            </p>
          </motion.div>

          {/* Middle section */}
          <motion.div
            variants={itemVariants}
            className="text-center order-1 sm:order-2 col-span-1 sm:col-span-2 md:col-span-1 mb-4 sm:mb-0"
          >
            <p className="text-sm sm:text-base text-gray-400 flex items-center justify-center">
              Made with{" "}
              <FaHeart className="mx-1 sm:mx-2 text-xs sm:text-sm animate-pulse-subtle text-red-400" />{" "}
              and React
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>

          {/* Right section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end space-x-3 sm:space-x-4 order-3"
          >
            <motion.a
              custom={0}
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              href="https://github.com/ZeyadAmr88"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-gray-800/50 text-slate-300 rounded-full hover:shadow-md transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
            <motion.a
              custom={1}
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
              href="https://www.linkedin.com/in/zeyad-amr-341937244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-gray-800/50 text-slate-300 rounded-full hover:shadow-md transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
