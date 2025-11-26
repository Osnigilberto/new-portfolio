'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './Projects.module.css'

const Projects = () => {
  // Ref para detectar quando o componente está visível na tela
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Array de projetos reais
  const projects = [
    {
      id: 1,
      title: "Turbo Express",
      description: "A modern delivery and logistics platform providing fast and reliable service. Built with cutting-edge technologies to ensure optimal performance and user experience.",
      image: "/turbo_logo.png",
      tags: ["React", "Next.js", "Vercel"],
      github: "https://github.com/Osnigilberto",
      demo: "https://turboexpress.vercel.app/",
      featured: true,
      needsWhiteBg: true // Fundo branco para logo transparente
    },
    {
      id: 2,
      title: "Espaço Muniz",
      description: "A specialized chiropractic and myofascial release clinic website. Features personalized treatments with a highly qualified team and modern equipment, committed to providing the best experience in chiropractic care.",
      image: "/espacomuniz.png",
      tags: ["React", "Next.js", "CSS Modules"],
      github: "https://github.com/Osnigilberto",
      demo: "https://espacomuniz.vercel.app/",
      featured: true,
      needsWhiteBg: true // Fundo branco para logo transparente
    },
    {
      id: 3,
      title: "Code QR Gene",
      description: "A powerful QR code generator application that allows users to create customized QR codes quickly and efficiently. Simple, fast, and user-friendly interface.",
      image: "/codeqrgene.png",
      tags: ["JavaScript", "React", "HTML5"],
      github: "https://github.com/Osnigilberto/codegenerator",
      demo: "https://codeqrgene.netlify.app/",
      featured: true
    },
    {
      id: 4,
      title: "Respira AI",
      description: "An innovative breathing and meditation application powered by AI. Helps users practice mindfulness and relaxation techniques with guided sessions.",
      image: "/logo-resperaai.png",
      tags: ["React", "AI", "Wellness"],
      github: "https://github.com/Osnigilberto/autoajudao",
      demo: "https://respiraai.netlify.app/landing.html",
      featured: true
    },
    {
      id: 5,
      title: "Aprender Comigo",
      description: "An educational platform designed to facilitate learning and knowledge sharing. Interactive and engaging interface for students and educators.",
      image: "/logo-preview.png",
      tags: ["React", "Education", "Firebase"],
      github: "https://github.com/Osnigilberto/aprende-comigo",
      demo: "https://aprendercomigo.netlify.app/",
      featured: true
    }
  ]

  // Filtra apenas projetos em destaque (featured)
  const featuredProjects = projects.filter(project => project.featured)

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Título da seção */}
          <motion.h2 
            className={styles.sectionTitle}
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <motion.p 
            className={styles.sectionDescription}
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>

          {/* Grid de projetos */}
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Imagem do projeto - aplica classe condicional */}
                <div className={project.needsWhiteBg ? styles.projectImageWhite : styles.projectImage}>
                  {/* Imagem otimizada com Next.js Image */}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                  
                  {/* Overlay com links */}
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectLinks}>
                      {/* Link para o código no GitHub */}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          aria-label="View code on GitHub"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      )}
                      {/* Link para a demo ao vivo */}
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          aria-label="View live demo"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  {/* Tags de tecnologias */}
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão para ver todos os projetos */}
          <motion.div 
            className={styles.ctaContainer}
            variants={itemVariants}
          >
            <a 
              href="https://github.com/Osnigilberto" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.viewAllButton}
            >
              View All Projects on GitHub
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects