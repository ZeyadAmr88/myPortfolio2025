"use client"

import { motion } from "framer-motion"

const SectionWrapper = ({ children, id, className = "", animate = true, animationVariant = "default" }) => {
  // Animation variants
  const variants = {
    default: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    },
  }

  // Get the selected variant
  const selectedVariant = variants[animationVariant] || variants.default

  return (
    <section id={id} className={`relative w-full mx-auto py-16 md:py-24 ${className}`}>
      <span className="hash-span" id={`#${id}`}>
        &nbsp;
      </span>

      {animate ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Change amount from 0.25 to 0.1 to trigger earlier
          variants={selectedVariant}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {children}
        </motion.div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      )}
    </section>
  )
}

export default SectionWrapper
