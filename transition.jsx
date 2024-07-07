import { motion } from "framer-motion";
import React from "react";
import hunterlogo from "./src/assets/hunterlogo.png";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in flex items-center justify-center h-[100%] "
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
        
      </motion.div>

      <motion.div
        className="slide-out flex items-center justify-center h-[100%] "
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.1, 1, 0.36, 1] }}>
        
      </motion.div>
    </>
  );
};
export default transition;
