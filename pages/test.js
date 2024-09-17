import React from "react";
import { motion } from "framer-motion";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const staggerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2, // Delay between child animations
    },
  },
  hidden: { opacity: 0, y: 20 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StaggeredDivs = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerVariants}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          style={{ marginBottom: "10px" }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredDivs;
