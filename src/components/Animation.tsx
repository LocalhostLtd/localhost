"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimationProps {
  children: ReactNode;
}

const Animation: React.FC<AnimationProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
