"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTags,
  FaInfoCircle,
} from "react-icons/fa";

// Add a default check at the beginning of the component
const ProjectCard = ({ project = {}, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Add state to control animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure parent component has started its animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 50); // Stagger based on index

    return () => clearTimeout(timer);
  }, [index]);

  // Add a safety check - if project is undefined, return null or a placeholder
  if (!project) {
    return null; // Or return a placeholder component
  }

  const {
    title = "",
    description = "",
    image = "",
    tags = [],
    githubLink = null,
    demoLink = null,
    featured = false,
  } = project;

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Tag animation variants
  const tagVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.05,
        duration: 0.3,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Button animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col transform-gpu"
        layoutId={`project-card-${title}`}
      >
        {/* Project image */}
        <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
          <motion.img
            variants={imageVariants}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlay - visible on hover for desktop, always partially visible on mobile */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 sm:p-4 w-full">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(true);
                }}
                className="w-full py-2 bg-white/90 text-slate-800 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors text-sm sm:text-base"
              >
                <FaInfoCircle className="text-xs sm:text-sm" /> View Details
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                custom={tagIndex}
                variants={tagVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-slate-100 text-gray-800 rounded-full border border-slate-200"
              >
                {tag}
              </motion.span>
            ))}
            {tags.length > 3 && (
              <motion.span
                custom={3}
                variants={tagVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full border border-slate-200"
              >
                +{tags.length - 3} more
              </motion.span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 sm:gap-3">
            {githubLink && (
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors flex-1 justify-center text-xs sm:text-sm"
                aria-label={`View ${title} on GitHub`}
              >
                <FaGithub className="mr-1 sm:mr-2" /> GitHub
              </motion.a>
            )}

            {demoLink && (
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-700 text-white rounded-md hover:bg-slate-800 transition-colors flex-1 justify-center text-xs sm:text-sm"
                aria-label={`View live demo of ${title}`}
              >
                <FaExternalLinkAlt className="mr-1 sm:mr-2" /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      {showDetails && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[95vh] overflow-auto"
            layoutId={`project-modal-${title}`}
          >
            <div className="relative">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
                loading="lazy"
              />
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors shadow-md"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                {description}
              </p>

              <div className="mb-5 sm:mb-6">
                <div className="flex items-center mb-2">
                  <FaTags className="mr-2 text-slate-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 rounded-full border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors text-sm sm:text-base"
                    aria-label={`View ${title} on GitHub`}
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                )}

                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors text-sm sm:text-base"
                    aria-label={`Visit live demo of ${title}`}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Visit Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
