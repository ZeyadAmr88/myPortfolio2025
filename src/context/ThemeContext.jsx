import { createContext } from "react";
import { motion } from "framer-motion";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Fixed light theme only
  const theme = "light";

  return (
    <ThemeContext.Provider value={{ theme }}>
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </ThemeContext.Provider>
  );
};
