"use client";

import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

type TProps = {
  children: ReactNode;
}
const AnimatedSwitch: FC<TProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSwitch;