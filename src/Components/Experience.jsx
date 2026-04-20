import { motion } from "framer-motion";
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
            company: "Freelance",
            position: "Full Stack Developer",
            period: "July 2021 - Present",
            location: "Remote",
            type: "Freelance / Self-Employed",
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
        hidden: {opacity:0, x, y},
        visible: {
            opacity:1,
            x:0,
            y:0,
            transition: {duration, delay}
        }
    });

    return (
        <>

        </>
    );
}