import { color, motion } from "framer-motion";
import styles from "./Experience.module.css";
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";


export function Experience() {
    const experience = [
        {
            company: "Helcim",
            position: "Project Team Lead / Software Development Intern",
            period: "Jan 2023 - Dec 2023",
            location: "Winnipeg, MB",
            type: "Internship",
            achievements: [
                "Developed, tested and maintained backend services integrating 5 + external APIs and relational databases supporting production applications used by 1,000 + users.",
                "Documented 10 + API workflows and technical integrations, improving onboarding efficiency for new developers.",
                "Analyzed and validated thousands of database records to troubleshoot production issues and maintain data integrity.",
                "Debugged backend services through log analysis and issue tracing, helping reduce resolution time for production incidents.",
                "Prepared technical documentation and API integration reports to support developer onboarding and maintenance of production systems.",
                "Collaborated with cross - functional teams to identify technical problems and deliver reliable software solutions."
            ],
            technologies: ["JavaScript", "React", "Node.js", "Python", "SQL", "MongoDB", "Git"]
        },
        {
            company: "Freelance / Self-Employed",
            position: "Full Stack Developer",
            period: "July 2021 - Present",
            location: "Remote",
            type: "Freelance",
            achievements: [
                "Developed backend services integrating 4+ external APIs and relational databases, supporting production web applications used by 1,000+ users.",
                "Designed 5+ relational database schemas, improving query performance and enabling reliable data storage and retrieval.",
                "Optimized SQL queries and data validation workflows, improving application response time and data accuracy across multiple projects.",
                "Developed 10 + responsive React UI components and application pages, ensuring cross - device compatibility and improved front - end performance."
            ],
            technologies: ["React", "Express", "MongoDB", "REST APIs", "TypeScript", "Angular", "React Native"]
        }
    ];

    const achievements = [
        {
            icon: Award,
            title: "Project Team Lead",
            year: "2023",
            description: "Company Promotion"
        },

        {
            icon: TrendingUp,
            title: "30+ Satisfied Clients",
            year: "2025",
            description: "Achieved peak satisfied client numbers"
        },

        {
            icon: Award,
            title: "Applied Computer Science Degree",
            year: "2025",
            description: "From the University of Winnipeg"
        },

        {
            icon: Award,
            title: "Dean's Honour List",
            year: "2023",
            description: "Student of Highest Distinction"
        }
    ];

    const containerAnimSettings = (stagger = 0.12) => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: 0.15
            }
        }
    })

    const itemAnimSettings = ({ x = -24, y = 0, duration = 0.55, delay = 0 } = {}) =>
    ({
        hidden: { opacity: 0, x, y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay }
        }
    });

    return (
        <div className={styles.experiencePage}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.title}>
                    Work <span className={styles.gradient}>
                        Experience
                    </span>
                </h1>

                <p className={styles.subtitle}>
                    A detailed overview of my professional journey and achievements
                </p>

            </motion.div>

            <motion.div
                className={styles.timelineSection}
                variants={containerAnimSettings(0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <div className={styles.verticalLine}></div>

                <div className={styles.timelineList}>
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnimSettings({ x: -26, duration: 0.55 })}
                            whileHover={{ scale: 1.01, y: -4 }}
                            className={styles.timelineItem}
                        >
                            <div className={styles.timelineDot}></div>

                            <div className={styles.experienceCard}>
                                <div className={styles.cardTop}>
                                    <div className={styles.sectionTop}>
                                        <h3 className={styles.position}>{exp.position}</h3>

                                        <p className={styles.company}>{exp.company}</p>
                                    </div>

                                    <span className={styles.typeBadge}>
                                        {exp.type}
                                    </span>
                                </div>

                                <div className={styles.metaRow}>
                                    <div className={styles.metaItem}>
                                        <Calendar size={26} />
                                        <span style={{ fontSize: 16 }}>{exp.period}</span>
                                    </div>

                                    <div className={styles.metaItem}>
                                        <MapPin size={26} />
                                        <span >{exp.location}</span>
                                    </div>
                                </div>

                                <div className={styles.achievementSection}>
                                    <h4 className={styles.achievementTitle}>
                                        <Briefcase size={28} className={styles.BriefcaseIcon} />
                                        Key Achievements
                                    </h4>

                                    <ul className={styles.achievementList}>
                                        {exp.achievements.map((award, index) => (
                                            <li key={index}>
                                                <span className={styles.achievementDot}></span>
                                                <span>{award}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.techSection}>
                                    <h4 className={styles.techHeading}>
                                        Technologies Used
                                    </h4>

                                    <div className={styles.techTags}>
                                        {exp.technologies.map((tech, index) => (
                                            <span key={index} className={styles.techTag}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className={styles.awardSection}
                variants={containerAnimSettings(0.14)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2
                    variants={itemAnimSettings({ x: 0, y: 20 })}
                    className={styles.awardsTitle}>
                    Awards & Recognition
                </motion.h2>

                <div className={styles.awardsGrid}>
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnimSettings({ x: 0, y: 24, duration: 0.5 })}
                            whileHover={{ y: -8 }}
                            className={styles.awardCard}
                        >
                            <div className={styles.awardIconWrap}>
                                <achievement.icon size={30}/>
                            </div>

                            <h3 className={styles.awardName}>{achievement.title}</h3>
                            <p className={styles.awardYear}>{achievement.year}</p>
                            <p className={styles.awardDescription}>{achievement.description}</p>

                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}