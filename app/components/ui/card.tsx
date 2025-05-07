"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = "", hoverEffect = true }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "rounded-xl p-6 animated-box",
        hoverEffect && "hover:shadow-lg",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {hoverEffect && hovered && (
        <div className="spotlight animate-spotlight absolute inset-0" />
      )}
    </motion.div>
  );
}