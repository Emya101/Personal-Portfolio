import { motion } from "framer-motion";
import styles from "./About.module.css";
import aboutImage from "../assets/AboutMe.jpg";
import { Code2, Database, Palette, Smartphone, Globe, Cloud, Wrench, Terminal } from "lucide-react";

export function About() {
    const skills = [
        { category: "Programming Languages", icon: Terminal, items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "PHP"], color: "#3b82f6" },
        { category: "Frontend", icon: Code2, items: ["React", "HTML5", "CSS", "TailWind CSS", "jQuery", "Bootstrap"], color: "#a855f7" },
        { category: "Backend", icon: Database, items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "REST APIs", "WebSockets"], color: "#f97316" },
        { category: "Design", icon: Palette, items: ["Figma", "UI/UX", "Prototyping", "Blender"], color: "#22c55e" },
        { category: "Mobile", icon: Smartphone, items: ["React Native", "IOS", "Android"], color: "#16e6f9" },
        { category: "DevOps", icon: Cloud, items: ["AWS", "Docker"], color: "#6366f1" },
        { category: "Tools", icon: Wrench, items: ["Git", "Github", "Postman", "Clerk", "Stripe", "VS Code"], color: "#eab308" },
    ];

    return (
        <div className={styles.aboutPage}>

            <div className={styles.header}>
                <h1 className={styles.title}>
                    About <span className={styles.gradient}>Me</span>
                </h1>

                <p className={styles.subtitle}>
                    Get to know more about my background, skills, and what drives me
                </p>
            </div>

            <div className={styles.introSection}>
                <div className={styles.imageWrapper}>
                    <img src={aboutImage} alt="About me" />
                </div>

                <div className={styles.textContent}>
                    <h2>My Journey</h2>

                    <p>
                        I'm a full-stack developer focused on building modern, responsive web applications
                        that deliver real value. I enjoy solving complex problems and turning ideas into
                        practical, real-world solutions.
                    </p>

                    <p>
                        I specialize in React and backend development, including server creation, API
                        integration, and database management. I'm always learning new technologies to
                        improve my skills and stay current in a fast-moving industry.
                    </p>

                    <div className={styles.tags}>
                        {["Problem Solver", "Team Player", "Fast Learner", "Adaptable", "Collaborative", "Detail-oriented"].map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2>Skills & Expertise</h2>

                    <div className={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <div key={index} className={styles.skillCard}>
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
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}