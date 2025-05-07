"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";

interface Journey {
  title: string;
  organization: string;
  period: string;
  description: string[];
  skills: string[];
}

export function Experience() {
  const journeyItems: Journey[] = [
    {
      title: "Computer Science Student",
      organization: "University of Wollongong",
      period: "2022 - Present",
      description: [
        "Studying fundamental concepts in software development and computer science",
        "Focused on web development, databases, and system design",
        "Learning best practices in software development"
      ],
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Team Collaboration"]
    },
    {
        title: "Intern Developer",
        organization: "Sample Assist",
        period: "2024 - Present",
        description: [
          "Completing an internship at Sample Assist as part of a school project",
          "Collaborating with a development team to build and improve software solutions",
          "Applying academic knowledge to practical, real-world projects",
          "Learning industry standards, workflow tools, and project management techniques"
        ],
        skills: ["Software Development", "Team Collaboration", "Problem Solving", "Project Management"]
      }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 grid-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The path I've taken to build my skills and knowledge
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block" />
          
          {journeyItems.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-1'}`}>
                  <Card className="h-full">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex items-center justify-between md:justify-end mt-1 mb-4">
                      <p className="text-primary font-medium">{item.organization}</p>
                      <span className="mx-2 text-foreground/30">•</span>
                      <p className="text-foreground/50 text-sm">{item.period}</p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-foreground/80 flex">
                          <span className="text-primary mr-2">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
                
                <div className="hidden md:block md:w-0">
                  <div className={`w-5 h-5 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2 border-4 border-background`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}