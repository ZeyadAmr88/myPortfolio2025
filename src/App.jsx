"use client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// Route change loading indicator component
const RouteChangeLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
    <div className="w-16 h-16 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Handle initial load - only runs once
  useEffect(() => {
    // Mark that initial load is complete after a delay
    const initialLoadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 50); // Wait for welcome loader to complete

    return () => clearTimeout(initialLoadTimer);
  }, []);

  // Handle route changes with visibility control
  useEffect(() => {
    // Skip showing loader on initial page load
    if (isInitialLoad) {
      return;
    }

    // When route changes, briefly hide content and show loader
    setIsVisible(false);
    setIsRouteChanging(true);

    // Force scroll to top on route change
    window.scrollTo(0, 0);

    // First timer: keep the loader visible for a minimum time
    const loaderTimer = setTimeout(() => {
      // Second timer: show content after loader is done
      const contentTimer = setTimeout(() => {
        setIsVisible(true);
        setIsRouteChanging(false);
      }, 50);

      return () => clearTimeout(contentTimer);
    }, 300);

    return () => clearTimeout(loaderTimer);
  }, [location.pathname, isInitialLoad]);

  // Modified page variants with immediate visibility
  const routePageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <>
      {/* Only show route change loader if not initial load and route is changing */}
      {!isInitialLoad && isRouteChanging && <RouteChangeLoader />}
      <AnimatePresence mode="wait" initial={false}>
        {isVisible && (
          <>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={routePageVariants}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    key="about"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={routePageVariants}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    key="projects"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={routePageVariants}
                  >
                    <Projects />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    key="contact"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={routePageVariants}
                  >
                    <Contact />
                  </motion.div>
                }
              />
            </Routes>
            {/* Footer is now part of the visibility condition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Footer />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading time to allow welcome loader animation to complete
    // The Z animation takes about 1s, and the welcome text appears after 1.2s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds gives enough time for the welcome animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <div className="relative z-0 bg-secondary transition-colors duration-300">
            <Navbar />
            <AnimatedRoutes />
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
