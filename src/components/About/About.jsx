'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className={styles.sectionTitle}
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className={styles.content}>
            {/* Texto atualizado ✅ */}
            <motion.div 
              className={styles.textContent}
              variants={itemVariants}
            >
              <h3 className={styles.subtitle}>
                Building complete digital experiences across web and mobile
              </h3>
              
              <p className={styles.description}>
                I&apos;m a web and mobile developer who builds end-to-end digital solutions. 
                From responsive web applications using React and Next.js to native Android apps 
                with Kotlin, I handle the complete development cycle of modern applications.
              </p>

              <p className={styles.description}>
                My expertise spans frontend interfaces, Firebase backends, mobile development, 
                and cloud deployment. I&apos;ve built delivery platforms, educational apps, wellness 
                tools, and clinic management systems - all from concept to production, independently 
                managing both design and implementation.
              </p>

              <p className={styles.description}>
                I focus on creating scalable, performant solutions that work seamlessly across 
                all platforms. Whether it&apos;s a complex web application or a native mobile app, 
                I deliver professional-grade products that solve real problems.
              </p>
            </motion.div>

            <motion.div 
              className={styles.highlights}
              variants={itemVariants}
            >
              {/* Card 1: Full Stack Web */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🌐</div>
                <h4 className={styles.highlightTitle}>Full Stack Web</h4>
                <p className={styles.highlightText}>
                  React, Next.js, Firebase - building complete web applications from 
                  UI to database
                </p>
              </div>

              {/* Card 2: Mobile Development */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>📱</div>
                <h4 className={styles.highlightTitle}>Mobile Development</h4>
                <p className={styles.highlightText}>
                  Native Android apps with Kotlin and Jetpack Compose for modern 
                  mobile experiences
                </p>
              </div>

              {/* Card 3: End-to-End */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🚀</div>
                <h4 className={styles.highlightTitle}>End-to-End</h4>
                <p className={styles.highlightText}>
                  From concept to deployment - handling design, development, and 
                  production independently
                </p>
              </div>

              {/* Card 4: Production Ready */}
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>✨</div>
                <h4 className={styles.highlightTitle}>Production Ready</h4>
                <p className={styles.highlightText}>
                  Delivering professional, scalable solutions with clean code and 
                  best practices
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