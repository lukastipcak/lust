"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export const InteractiveCard = ({ 
  children, 
  className = "" 
}: InteractiveCardProps) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Animated left border accent */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-color origin-top"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.2 }}
      />
      <div className="pl-4">
        {children}
      </div>
    </motion.div>
  );
};
