import { motion } from "framer-motion";
import styles from "./Project.module.css";
import { ExternalLink, Github, Star, Clock } from "lucide-react";
import emoticonImage from "../assets/Emoticon.jpg";
import ConcertImage from "../assets/Concert.jpg";
import WeatherImage from "../assets/WeatherApp.jpg";
import TaskManagerImage from "../assets/TaskManager.jpg";
import MyPortfolioImage from "../assets/MyPortfolio.jpg";
import TechStoreImage from "../assets/TechStores.jpg";

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
        },

        {
            title: "Concertix",
            description: "An event tracking platform that helps users search for concerts, artists, and event details using API integration.",
            image: ConcertImage,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Ticketmaster API", "Nunjucks"],
            featured: true,
            github: "https://github.com/Emya101/ConcertFinder",
            demo: "TBA",
            status: "Completed",
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
        },

        {
            title: "Task Management System",
            description:
                "A task management application built to practice REST APIs, state management, and full-stack application structure.",
            image: TaskManagerImage,
            technologies: ["React", "JavaScript", "CSS"],
            featured: true,
            github: "https://github.com/Emya101/Task-Manager-App/",
            demo: "https://emya101.github.io/Task-Manager-App/",
            status: "Completed",
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
        },

        {
            title: "Supreme's Store",
            description:
                "A small project used to test the functionality of usestates and use effects in React",
            image: TechStoreImage,
            technologies: ["React", "JavaScript", "CSS Modules"],
            featured: true,
            github: "https://github.com/Emya101/TechStore",
            demo: "TBA",
            status: "Completed",
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
            transition:{duration, delay},
        },
    });

    const featuredProjects= projects.filter((project)=> project.featured);
    return (
        <div>
            <p>Welcome to my projects</p>
        </div>
    );
}
