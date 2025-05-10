import { motion } from "framer-motion";

const Loader = () => {
  // Logo text variants
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-secondary dark:bg-primary transition-colors duration-300">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-2xl font-bold text-text-dark dark:text-text-light"
      >
        <span className="relative">
          Welcome !
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-accent dark:bg-accent-light"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </span>
      </motion.div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-light dark:bg-accent opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent dark:bg-accent-light opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
