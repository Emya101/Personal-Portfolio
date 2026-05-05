import { motion, AnimatePresence } from "framer-motion";
import styles from "./About.module.css";
import aboutImage from "../assets/AboutMe.jpg";
import degreeImage from "../assets/Certificate.png"
import { Code2, Database, Palette, Smartphone, GraduationCap, Cloud, Wrench, Terminal, BookOpen } from "lucide-react";
import { useState } from "react";

export function About() {
    const skills = [
        { category: "Programming Languages", icon: Terminal, items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "PHP"], color: "#3b82f6" },
        { category: "Frontend", icon: Code2, items: ["React", "HTML5", "CSS", "TailWind CSS", "jQuery", "Bootstrap","Framer Motion"], color: "#a855f7" },
        { category: "Backend", icon: Database, items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "REST APIs", "WebSockets"], color: "#f97316" },
        { category: "Design", icon: Palette, items: ["Figma", "UI/UX", "Prototyping", "Blender"], color: "#22c55e" },
        { category: "Mobile", icon: Smartphone, items: ["React Native", "IOS", "Android"], color: "#16e6f9" },
        { category: "DevOps", icon: Cloud, items: ["AWS", "Docker"], color: "#6366f1" },
        { category: "Tools", icon: Wrench, items: ["Git", "Github", "Postman", "Clerk", "Stripe", "VS Code","Yup"], color: "#eab308" },
    ];

    const containerAnimSettings = (stagger = 0.12) => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: 0.15,
            },
        },
    });

    const itemAnimSettings = ({ y = 24, duration = 0.55, delay = 0 } = {}) => ({
        hidden: { opacity: 0, y },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay },
        },
    });

    const [showDegreeModal, setShowDegreeModal] = useState(false);

    return (
        <div className={styles.aboutPage}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <h1 className={styles.title}>
                    About <span className={styles.gradient}>Me</span>
                </h1>

                <p className={styles.subtitle}>
                    Get to know more about my background, skills, and what drives me
                </p>
            </motion.div>

            <motion.div
                className={styles.introSection}
                variants={containerAnimSettings(0.18)}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className={styles.imageWrapper}
                    variants={itemAnimSettings({ y: 30, duration: 0.65 })}
                >
                    <img src={aboutImage} alt="About me" />
                </motion.div>

                <motion.div
                    className={styles.textContent}
                    variants={containerAnimSettings(0.12)}
                >
                    <motion.h2
                        variants={itemAnimSettings({ y: 20 })}
                    >My Journey</motion.h2>

                    <motion.p
                        variants={itemAnimSettings({ y: 24, delay: 0.05 })}>
                        I'm a full-stack developer focused on building modern, responsive web applications
                        that deliver real value. I enjoy solving complex problems and turning ideas into
                        practical, real-world solutions.
                    </motion.p>

                    <motion.p
                        variants={itemAnimSettings({ y: 24, delay: 0.1 })}>
                        I specialize in React and backend development, including server creation, API
                        integration, and database management. I'm always learning new technologies to
                        improve my skills and stay current in a fast-moving industry.
                    </motion.p>

                    <motion.div
                        className={styles.tags}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.50,
                                }
                            }
                        }}
                        initial="hidden"
                        animate="show"
                    >
                        {["Problem Solver", "Team Player", "Fast Learner", "Adaptable", "Collaborative", "Detail-oriented"].map((tag, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, x: -25 },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.4, ease: "easeOut" },
                                    },
                                }}
                                whileHover={{ scale: 1.05, x: 3 }}>
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>

            <motion.div
                className={styles.skillsSection}
                variants={containerAnimSettings(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2
                    className={styles.skillTitle}
                    variants={itemAnimSettings({ y: 24 })}
                >Skills & Expertise
                </motion.h2>

                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillCard}
                            variants={itemAnimSettings({ y: 28, duration: 0.5 })}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className={styles.skillHeader}>
                                <div
                                    className={styles.iconBox}
                                    style={{ background: skill.color }}
                                >
                                    <skill.icon size={22} />
                                </div>
                                <h3>{skill.category}</h3>
                            </div>


                            <div className={styles.skillItems}>
                                {skill.items.map((item, i) => (
                                    <span key={i}>{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className={styles.bottomSection}
                variants={containerAnimSettings(0.16)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.div
                    className={styles.card}
                    variants={itemAnimSettings({ y: 28 })}>
                    <div className={styles.Heading}>
                        <div
                            className={styles.iconBox}
                            style={{ background: "linear-gradient(to bottom right, #6AA6A6, #D97B73)" }}
                        >
                            <GraduationCap className={styles.Globe} size={22}></GraduationCap>
                        </div>
                        <h3>Education</h3>
                    </div>

                    <div className={styles.timeline}>
                        <div>
                            <div className={styles.cover}>
                                <p>2021 - 2025</p>
                            </div>
                            <h4>BSc Applied Computer Science</h4>
                            <span>
                                University of Winnipeg{" "}
                                <button
                                    type="button"
                                    onClick={() => setShowDegreeModal(true)}
                                    className={styles.degreeButton}>
                                    View Degree
                                </button>

                                <AnimatePresence>
                                    {showDegreeModal && (
                                        <motion.div
                                            className={styles.modalOverlay}
                                            onClick={() => setShowDegreeModal(false)}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <motion.div
                                                className={styles.modalContent}
                                                onClick={(e) => e.stopPropagation()}
                                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <button
                                                    className={styles.closeButton}
                                                    onClick={() => setShowDegreeModal(false)}
                                                >
                                                    ❌
                                                </button>

                                                <img
                                                    src={degreeImage}
                                                    alt="Bachelor of Science in Applied Computer Science certificate"
                                                    className={styles.degreePreview}
                                                />

                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.card}>
                    <div className={styles.Heading}>
                        <div
                            className={styles.iconBox}
                            style={{ background: "linear-gradient(to bottom right, #6AA6A6, #D97B73)" }}
                        >
                            <BookOpen className={styles.Globe} size={22}></BookOpen>
                        </div>
                        <h3>Certifications</h3>
                    </div>

                    <ul>
                        <li>AWS Cloud Practitioner</li>
                        <li>Mastering JavaScript and jQuery Course Beginners to Advanced</li>
                        <li>Web Design Course with HTML,CSS and Wordpress</li>
                        <li>JavaScript Fundamentals to Advanced: Full Stack Development</li>
                        <li>The Data Science Course: Complete Data Science Bootcamp</li>
                    </ul>
                </div>

            </motion.div>
        </div>
    )
}