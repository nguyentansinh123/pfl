"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const headerVariants = {
    top: { 
      backgroundColor: "rgba(10, 10, 20, 0)",
      backdropFilter: "blur(0px)",
      boxShadow: "none"
    },
    scrolled: { 
      backgroundColor: "rgba(10, 10, 20, 0.8)",
      backdropFilter: "blur(20px)",
      boxShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)"
    }
  };
  
  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={headerVariants}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            variants={logoVariants}
            whileHover="hover"
          >
            <Link href="/" className="flex items-center">
              <span className="block relative">
                <span className="relative z-10 text-xl font-bold text-gradient">
                  {"{S}"}
                </span>
                <motion.span 
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary/20 rounded-full blur-sm"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut" 
                  }}
                />
              </span>
              <span className="text-lg font-semibold ml-2">Sinh</span>
            </Link>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              onClick={() => window.open("https://github.com/nguyentansinh123", "_blank")}
              variant="outline"
              size="sm"
              className="group"
            >
              <span className="mr-2">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="transition-transform duration-300 group-hover:translate-x-1">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
            </Button>
          </motion.div>

          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-foreground focus:outline-none"
            >
              <div className="w-7 h-5 flex flex-col justify-between relative">
                <motion.span
                  className="w-full h-0.5 bg-foreground block rounded-full"
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-foreground block rounded-full"
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-foreground block rounded-full"
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-lg pt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4">
              <nav className="flex flex-col items-center">
                <ul className="space-y-6 w-full">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="w-full text-center"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xl font-medium block py-2 w-full border-b border-foreground/10"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    onClick={() => {
                      window.open("https://github.com/yourusername", "_blank");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub Profile
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}