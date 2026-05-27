import { motion } from "framer-motion";
import styles from "./Project.module.css";
import { ExternalLink, Github, Star, Clock } from "lucide-react";
import emoticonImage from "../assets/Emoticon.webp";
import ConcertImage from "../assets/Concert.webp";
import WeatherImage from "../assets/WeatherApp.webp";
import TaskManagerImage from "../assets/TaskManager.webp";
import MyPortfolioImage from "../assets/MyPortfolio.webp";
import TechStoreImage from "../assets/TechStores.webp";

export function Project() {
    const projects = [
        {
            title: "Emoticonquotes",
            description: "A mood-aware quote discovery platform using full-stack development, semantic search, and AI-assisted quote matching.",
            image: emoticonImage,
            technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Express"],
            featured: false,
            github: "https://github.com/Emya101/emoticonquotes",
            demo: "TBA",
            status: "In Progress",
            availableDemo: false,
        },

        {
            title: "Concertix",
            description: "An event tracking platform that helps users search for concerts, artists, and event details using API integration.",
            image: ConcertImage,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Ticketmaster API", "Nunjucks"],
            featured: true,
            github: "https://github.com/Emya101/ConcertFinder",
            status: "Completed",
            demo: "TBA",
            availableDemo: false,
        },

        {
            title: "WeatherMass",
            description:
                "A dynamic weather platform with forecasts, weather-based recommendations, and API-powered data views.",
            image: WeatherImage,
            technologies: ["JavaScript", "Node.js", "Weather API", "CSS"],
            featured: false,
            github: "https://github.com/Emya101/Weathermass-Weather-Website-Project-1",
            demo: "TBA",
            status: "In Progress",
            availableDemo: false,
        },

        {
            title: "Task Management System",
            description:
                "A task management application built to practice REST APIs, state management, and full-stack application structure.",
            image: TaskManagerImage,
            technologies: ["React", "JavaScript", "CSS", "Yup"],
            featured: true,
            github: "https://github.com/Emya101/Task-Manager-App/",
            demo: "https://emya101.github.io/Task-Manager-App/",
            status: "Completed",
            availableDemo: true,
        },

        {
            title: "Personal Portfolio Website",
            description:
                "A responsive and animated portfolio website showcasing my projects, experience, and skills. Built with modern React, CSS Modules, and Framer Motion for smooth UI interactions.",
            image: MyPortfolioImage,
            technologies: ["React", "JavaScript", "CSS Modules", "Framer Motion"],
            featured: false,
            github: "https://github.com/Emya101/Personal-Portfolio",
            demo: "TBA",
            status: "In-Progress",
            availableDemo: true,
        },

        {
            title: "Supreme's Store",
            description:
                "A small project used to test the functionality of usestates and use effects in React",
            image: TechStoreImage,
            technologies: ["React", "JavaScript", "CSS Modules"],
            featured: true,
            github: "https://github.com/Emya101/TechStore",
            demo: "https://emya101.github.io/TechStore/",
            status: "Completed",
            availableDemo: true,
        },
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

    const itemAnimSettings = ({ y = 24, duration = 0.5, delay = 0 } = {}) => ({
        hidden: { opacity: 0, y },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay },
        },
    });

    const featuredProjects = projects.filter((project) => project.featured);
    return (
        <div className={styles.projectsPage}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.title}>
                    My <span className={styles.gradient}>Projects</span>
                </h1>

                <p className={styles.subtitle}>
                    A showcase of my recent work and side projects demonstrating my skills and creativity
                </p>
            </motion.div>

            <motion.section
                className={styles.featuredSection}
                variants={containerAnimSettings(0.14)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2
                    className={styles.sectionTitle}
                    variants={itemAnimSettings()}
                >
                    <Star className={styles.starIcon} />
                    <span className={styles.featuredTitle}>Featured Projects</span>
                </motion.h2>

                <div className={styles.featuredGrid}>
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.featuredCard}
                            variants={itemAnimSettings({ y: 28 })}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.featuredImageBox}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />

                                <div className={styles.statusWrap}>
                                    <span
                                        className={`${styles.statusBadge} 
                                            ${project.status === "Completed" ? styles.completed : styles.inProgress}`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>

                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>

                                <div className={styles.techList}>
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.buttonRow}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.outlineButton}
                                    >
                                        <Github size={16}></Github>
                                        Code
                                    </a>

                                    {project.availableDemo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.primaryButton}
                                        >
                                            <ExternalLink size={16}></ExternalLink>
                                            Live Demo
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            className={styles.unavailableAction}
                                            disabled
                                        >
                                            <ExternalLink size={16}></ExternalLink>
                                            No Demo
                                        </button>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                className={styles.allProjectsSection}
                variants={containerAnimSettings(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.h2
                    className={styles.allProjectsTitle}
                    variants={itemAnimSettings()}>
                    All Projects
                </motion.h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemAnimSettings({ y: 24 })}
                            whileHover={{ scale: 1.04, y: -4 }}
                            className={styles.projectCard}
                        >
                            <div className={styles.smallImageBox}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.projectImage}
                                />

                                {project.featured && (
                                    <div className={styles.featuredIconWrap}>
                                        <Star className={styles.smallStarIcon} />
                                    </div>
                                )}

                                <div className={styles.smallStatusWrap}>
                                    <span
                                        className={`${styles.smallStatusBadge} ${project.status === "Completed" ? styles.completed : styles.inProgress}`}>
                                        <Clock size={12} />
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.smallCardContent}>
                                <h3 className={styles.smallProjectTitle}>{project.title}</h3>
                                <p className={styles.smallDescription}>{project.description}</p>

                                <div className={styles.smallTechList}>
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className={styles.smallTechTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.smallButtonRow}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.smallOutlineButton}>
                                        <Github size={16} />
                                        Code
                                    </a>

                                    {project.availableDemo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.smallPrimaryButton}
                                        >
                                            <ExternalLink size={16}></ExternalLink>
                                            Live Demo
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            className={styles.smallUnavailableAction}
                                            disabled
                                        >
                                            <ExternalLink size={16}></ExternalLink>
                                            No Demo
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
