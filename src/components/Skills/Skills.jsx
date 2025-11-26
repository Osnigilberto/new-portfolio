'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Skills.module.css'

const Skills = () => {
  // Ref para detectar quando o componente está visível na tela
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Organização das skills por categoria
  const skillsData = {
    frontend: {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vite", level: 80 },
        { name: "CSS Modules", level: 85 },
        { name: "Framer Motion", level: 75 },
      ]
    },
    mobile: {
      title: "Mobile",
      icon: "📱",
      skills: [
        { name: "Android Studio", level: 80 },
        { name: "Kotlin", level: 75 },
        { name: "Jetpack Compose", level: 70 }
      ]
    },
    backend: {
      title: "Backend & Database",
      icon: "🔧",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Firestore", level: 85 },
        { name: "Express.js", level: 65 }
      ]
    },
    tools: {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Canva", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Figma", level: 75 }
      ]
    }
  }

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    })
  }

  return (
    <section className={styles.skills} id="skills" ref={ref}>
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
            Skills & Technologies
          </motion.h2>

          <motion.p 
            className={styles.sectionDescription}
            variants={itemVariants}
          >
            Here are the technologies and tools I work with
          </motion.p>

          {/* Grid de categorias */}
          <div className={styles.skillsGrid}>
            {Object.entries(skillsData).map(([key, category]) => (
              <motion.div
                key={key}
                className={styles.skillCategory}
                variants={itemVariants}
              >
                {/* Header da categoria */}
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                {/* Lista de skills */}
                <div className={styles.skillsList}>
                  {category.skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                      {/* Nome e porcentagem */}
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>

                      {/* Barra de progresso */}
                      <div className={styles.progressBar}>
                        <motion.div
                          className={styles.progressFill}
                          custom={skill.level}
                          variants={progressVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Seção adicional - Specializing In */}
            <motion.div 
              className={styles.learningSection}
              variants={itemVariants}
            >
              <h3 className={styles.learningTitle}>
                ⚡ Specializing In
              </h3>
              <div className={styles.learningTags}>
                <span className={styles.learningTag}>React Ecosystem</span>
                <span className={styles.learningTag}>Firebase Integration</span>
                <span className={styles.learningTag}>Responsive Design</span>
                <span className={styles.learningTag}>Modern JavaScript</span>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills