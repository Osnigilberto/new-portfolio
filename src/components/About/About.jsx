'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

const About = () => {
  // Ref para detectar quando o componente está visível na tela
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay entre cada filho
      }
    }
  }

  // Variantes de animação para os itens individuais
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
    <section className={styles.about} id="about" ref={ref}>
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
            About Me
          </motion.h2>

          {/* Grid com informações - duas colunas */}
          <div className={styles.content}>
            {/* Coluna de texto - lado esquerdo */}
            <motion.div 
              className={styles.textContent}
              variants={itemVariants}
            >
              <h3 className={styles.subtitle}>
                Transforming ideas into powerful digital solutions
              </h3>
              
              <p className={styles.description}>
                I&apos;m a frontend developer specializing in React and Next.js, with a passion 
                for creating modern, responsive web applications. My expertise spans across 
                the entire JavaScript ecosystem, from interactive user interfaces to scalable 
                Firebase backends.
              </p>

              <p className={styles.description}>
                With hands-on experience in mobile development using Kotlin and Android Studio, 
                I bring a comprehensive understanding of cross-platform development. I focus on 
                writing clean, maintainable code while ensuring optimal performance and user 
                experience across all devices.
              </p>

              <p className={styles.description}>
                My approach combines technical excellence with creative problem-solving. Whether 
                it&apos;s building a complex delivery platform, an educational application, or a 
                wellness tool, I&apos;m committed to delivering solutions that make a real impact.
              </p>
            </motion.div>

            {/* Coluna de highlights - lado direito */}
            <motion.div 
              className={styles.highlights}
              variants={itemVariants}
            >
              {/* Card 1: Clean Code */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>💻</div>
                <h4 className={styles.highlightTitle}>Clean Code</h4>
                <p className={styles.highlightText}>
                  Writing maintainable and scalable code following industry best practices 
                  and modern standards
                </p>
              </div>

              {/* Card 2: Modern Stack */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>⚛️</div>
                <h4 className={styles.highlightTitle}>Modern Stack</h4>
                <p className={styles.highlightText}>
                  Proficient in React, Next.js, Firebase, and the latest JavaScript 
                  technologies
                </p>
              </div>

              {/* Card 3: Responsive Design */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>📱</div>
                <h4 className={styles.highlightTitle}>Responsive Design</h4>
                <p className={styles.highlightText}>
                  Building mobile-first, accessible applications that work seamlessly 
                  across all devices
                </p>
              </div>

              {/* Card 4: Full Cycle */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🚀</div>
                <h4 className={styles.highlightTitle}>Full Cycle</h4>
                <p className={styles.highlightText}>
                  From concept to deployment, handling frontend, backend, and mobile 
                  development
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About