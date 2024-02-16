import React from "react";
import { motion } from "framer-motion";

const SupportPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1>Support Page</h1>
    </motion.div>
  );
};

export default SupportPage;
