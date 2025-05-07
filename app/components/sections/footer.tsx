"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link href="/" className="text-lg font-bold text-gradient">
              Sinh
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/60 text-sm"
          >
            <p>© {currentYear} All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-foreground/60 text-sm">
              Built with <span className="text-primary">♥</span> using Next.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}