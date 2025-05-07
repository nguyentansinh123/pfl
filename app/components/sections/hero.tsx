"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const phrases = [
    "Full Stack Developer.",
    "Tech Enthusiast.",
    "Problem Solver.",
    "Digital Craftsman."
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        setTypingSpeed(100);
        
        if (typedText === currentPhrase) {
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(50);
        
        if (typedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);
  
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section 
      ref={heroRef}
      className="min-h-screen pt-20 relative flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{ 
              width: `${particle.size}px`, 
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [
                `${Math.random() * 20 - 10}%`,
                `${Math.random() * 20 - 10}%`,
                `${Math.random() * 20 - 10}%`,
              ],
              y: [
                `${Math.random() * 20 - 10}%`,
                `${Math.random() * 20 - 10}%`,
                `${Math.random() * 20 - 10}%`,
              ],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70"
        style={{ opacity }}
      />
      
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 z-10 relative flex flex-col lg:flex-row items-center gap-16"
      >
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-wider">WELCOME TO MY PORTFOLIO</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Sinh</span>
            <br />
            <span className="relative mt-2 inline-block">
              <span>{typedText}</span>
              <span className="absolute ml-1 animate-pulse">|</span>
            </span>
          </motion.h1>
          
          <motion.p
            className="text-foreground/70 text-lg mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming ideas into exceptional digital experiences. 
            I blend technical expertise with creative vision to build 
            innovative solutions that make a difference in the digital landscape.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <span className="relative z-10">View My Projects</span>
              <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="border-primary/30 hover:border-primary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
          
          <motion.div
            className="flex gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: "github", url: "https://github.com/nguyentansinh123" },
              { icon: "twitter", url: "https://x.com/N_Sinh_G" }
            ].map((social, index) => (
              <motion.a 
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <span className="sr-only">{social.icon}</span>
                <SocialIcon name={social.icon} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="hidden md:flex items-center mt-24 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="h-px w-12 bg-foreground/30 mr-4"></div>
            <span className="text-xs font-mono tracking-wider">SCROLL DOWN</span>
            <motion.div
              className="ml-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex-1 relative hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-md"></div>
            <div className="absolute inset-4 border border-primary/20 rounded-full"></div>
            <div className="absolute inset-10 border border-primary/10 rounded-full"></div>
            <div className="absolute inset-20 border border-primary/5 rounded-full"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      );
    default:
      return null;
  }
}