import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navbar animation variants
  const navbarVariants = {
    transparent: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    },
    solid: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  // Link hover animation
  const linkHoverVariants = {
    initial: { width: 0 },
    hover: { width: "100%", transition: { duration: 0.3 } },
    exit: { width: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="transparent"
      animate={scrolled ? "solid" : "transparent"}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-20 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-bold text-text-primary">
              <span className="relative">
                Portfolio
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                      location.pathname === link.path
                        ? "text-accent font-semibold"
                        : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                        layoutId="navIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        style={{ width: "100%" }}
                      />
                    )}
                    {location.pathname !== link.path && (
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                        initial="initial"
                        whileHover="hover"
                        exit="exit"
                        variants={linkHoverVariants}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md glass-effect text-text-primary"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: isOpen ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 45 : -45 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <FiX className="h-6 w-6" />
                  ) : (
                    <FiMenu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect shadow-lg">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? "text-accent font-semibold"
                        : "text-text-secondary hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
