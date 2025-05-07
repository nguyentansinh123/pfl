"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Card } from "../ui/card";

interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "design";
  proficiency: number; 
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const allSkills: Skill[] = [
    { name: "React", icon: "📱", category: "frontend", proficiency: 9 },
    { name: "Next.js", icon: "⚡", category: "frontend", proficiency: 9 },
    { name: "TypeScript", icon: "🔷", category: "frontend", proficiency: 8 },
    { name: "JavaScript", icon: "💛", category: "frontend", proficiency: 9 },
    { name: "Redux", icon: "🔄", category: "frontend", proficiency: 8 },
    { name: "Tailwind CSS", icon: "🎨", category: "frontend", proficiency: 9 },
    { name: "HTML/CSS", icon: "🌐", category: "frontend", proficiency: 9 },
    
    // Backend
    { name: "Node.js", icon: "🟢", category: "backend", proficiency: 8 },
    { name: "Express", icon: "🚂", category: "backend", proficiency: 8 },
    { name: "Java", icon: "☕", category: "backend", proficiency: 8 },
    { name: "Python", icon: "🐍", category: "backend", proficiency: 7 },
    { name: "Spring Boot", icon: "🍃", category: "backend", proficiency: 8 },
    { name: "Prisma", icon: "🔺", category: "backend", proficiency: 7 },
    { name: "MongoDB", icon: "🍃", category: "backend", proficiency: 7 },
    { name: "MySQL", icon: "🐬", category: "backend", proficiency: 8 },
    { name: "PostgreSQL", icon: "🐘", category: "backend", proficiency: 7 },
    
    // Tools
    { name: "Git", icon: "🔄", category: "tools", proficiency: 8 },
    { name: "AWS", icon: "☁️", category: "tools", proficiency: 7 },
    { name: "CI/CD", icon: "🔄", category: "tools", proficiency: 7 },
    
    // Design
    { name: "Figma", icon: "🎭", category: "design", proficiency: 8 },
    { name: "UI/UX", icon: "🎨", category: "design", proficiency: 8 },
    { name: "Responsive Design", icon: "📱", category: "design", proficiency: 9 },
  ];

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "design", name: "Design" },
  ];

  const filteredSkills = useMemo(() => {
    return activeCategory === "all" 
      ? allSkills 
      : allSkills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div 
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div key={`${activeCategory}-${skill.name}`} variants={item}>
              <Card className="h-full flex flex-col items-center justify-center py-6 text-center">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
                <div className="w-full max-w-[100px] bg-foreground/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full"
                    style={{ width: `${skill.proficiency * 10}%` }}  
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}