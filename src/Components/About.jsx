import { motion } from "framer-motion";
import styles from "./About.module.css";
import aboutImage from "../assets/AboutMe.jpg";
import { Code2, Database, Palette, Smartphone, Globe, Cloud, Wrench, Terminal, BookOpen } from "lucide-react";

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

            </div>

            <div className={styles.skillsSection}>
                <h2 className={styles.skillTitle}>Skills & Expertise</h2>

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

            <div className={styles.bottomSection}>
                <div className={styles.card}>
                    <div className={styles.Heading}>
                        <div
                            className={styles.iconBox}
                            style={{ background: "linear-gradient(to bottom right, #6AA6A6, #D97B73)" }}
                        >
                            <Globe className={styles.Globe} size={22}></Globe>
                        </div>
                        <h3>Education</h3>
                    </div>

                    <div className={styles.timeline}>
                        <div>
                            <p>2021 - 2025</p>
                            <h4>BSc Applied Computer Science</h4>
                            <span>University of Winnipeg</span>
                        </div>
                    </div>
                </div>

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

            </div>
        </div>
    )
}