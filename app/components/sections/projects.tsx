"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import TaskyImg from '../../../public/projects/Tasky.jpg';
import CvBuilder from '../../../public/projects/resume1.png';
import Scrap from '../../../public/projects/scrapinglight.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  liveUrl?: string;
  githubUrl?: string;
  color?: string;
  isExternalImage?: boolean;
}

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  console.log(hoveredProject)

  const projects: Project[] = [
    {
      title: "Tasky",
      description: "A comprehensive task management platform with real-time chat that connects job posters with workers. Features include drag-and-drop task organization, priority setting, and robust admin controls for user management.",
      tags: ["React.js", "Spring Boot", "MySQL", "WebSocket", "Google API", "JWT", "Zustand", "Websocket"],
      image: TaskyImg, 
      githubUrl: "https://github.com/nguyentansinh123/Tasky",
      color: "#00BFFF"
    },
    {
      title: "CV-AI-Builder",
      description: "An AI-powered resume builder that generates professional CVs with intelligent formatting and content suggestions.",
      tags: ["Next.js", "TypeScript", "ShadCN/UI", "Webhooks", "Prisma", "Clerk", "PostgreSQL", "Vercel Blob", "Stripe", "OpenAI API","Tailwindcss"],
      image: CvBuilder,
      githubUrl: "https://github.com/nguyentansinh123/CV-AI-Builder",
      color: "#00BFFF"
    },
    {
      title: "Scrape And Compare Coles, Woolworths, Aldi Price",
      description: "A website that scrapes and compares prices from Coles, Woolworths, and Aldi with interactive charts for easier comparison. Products are stored in a database to track price history over time.",
      tags: ["Three.js", "Puppeteer", "MongoDB", "ReChart","Tailwindcss"],
      image: Scrap,
      githubUrl: "https://github.com/nguyentansinh123/PriceCompare",
      color: "#FF6B6B"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A showcase of my work and technical skills
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="h-full overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex flex-col h-full">
                  <div className="relative w-full h-64 border-b border-primary/10">
                    {typeof project.image === 'string' ? (
                      project.image.startsWith('/') ? (
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      ) : (
                        <div className={`w-full h-full ${project.image}`} />
                      )
                    ) : (
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}40, transparent 50%)`,
                        boxShadow: `inset 0 0 20px ${project.color}30`
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-primary/10 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium shadow"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            View Project
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors text-sm font-medium shadow"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.417 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}