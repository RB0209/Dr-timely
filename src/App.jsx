import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <section className="hero">
      <motion.div
        className="hero-logo"
        whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src="/logo.png" alt="CARE Foundation Logo" />
      </motion.div>

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Empowering Communities Since 2011</h1>
        <p>
          CARE Foundation works towards social awareness, education, and women
          empowerment with innovative programs and community engagement.
        </p>
      </motion.div>
    </section>
  );
}
