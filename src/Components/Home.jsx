import { Link } from "react-router-dom"; //Helps to link between pages(web version);
import { Github, Linkedin, Mail, Code2, Briefcase, GraduationCap, BadgeCheck } from "lucide-react"//import icons from lucide react package
import styles from "./Home.module.css"
import { motion } from "framer-motion"

export function Home() {
    const containerAnimSettings = (stagger = 0.2) => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: 0.2
            }
        }
    });

    const itemAnimSettings = ({ y = 20, duration = 0.5, delay = 0 } = {}) => ({
        hidden: { opacity: 0, y },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay },
        },
    });
    const details = [
        { icon: Code2, label: "Projects Built", value: "15+" },
        { icon: Briefcase, label: "Years of Experience", value: "2+" },
        { icon: GraduationCap, label: "Bsc Applied Computer Science", value: "2025" },
        { icon: BadgeCheck, label: "Certifications", value: "5+" }
    ];

    return (
        <div className={styles.whole}>
            <section className={styles.heroSection}>
                <div className={styles.Background}>
                    {/* <div>
                        { /* Left content section*/}
                    {/* <img
                            src="https://images.unsplash.com/photo-1772475385529-92037713a057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzI2MTAxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="My Photo"
                        >
                        </img>
                    </div>  */}

                    <div className={styles.firstContainer}>
                        <motion.div
                            className={styles.heroGrid}
                            variants={containerAnimSettings(0.25)}
                            initial="hidden"
                            animate="visible"
                        >

                            {/* Title block */}
                            <motion.div variants={itemAnimSettings({ y: 20, delay: 0.2 })}>
                                Available for hire
                            </motion.div>

                            <motion.h1 variants={itemAnimSettings({ y: 30, delay: 0.4 })}>
                                Hello, I'm <span>[Name]</span>
                            </motion.h1>

                            <motion.p variants={itemAnimSettings({ y: 30, delay: 0.6 })}>Software Developer</motion.p>
                            <motion.p variants={itemAnimSettings({ y: 30, delay: 0.8 })}>Full-Stack Applications • APIs • Cloud Systems • Technical Systems</motion.p>


                            {/* Description */}
                            <motion.p variants={itemAnimSettings({ y: 30, delay: 1.0 })}>

                                I build modern web applications and backend systems using contemporary
                                technologies, creating scalable and user-focused digital solutions.

                            </motion.p>

                            {/* Buttons */}
                            <motion.div variants={itemAnimSettings({ y: 30, delay: 1.2 })}>
                                <Link to="/projects">View my work</Link>
                                <Link to="/contact">Get in touch</Link>
                            </motion.div>

                            {/* Social Icons */}
                            <motion.div variants={itemAnimSettings({ y: 30, delay: 1.4 })}>
                                <a href="https://github.com/Emya101"><Github /></a>
                                <a href="https://linkedin.com"><Linkedin /></a>
                                <a href="mailto:email@example.com"><Mail /></a>
                            </motion.div>





                            <motion.div variants={itemAnimSettings({y:30, delay:1.6})}>
                                {details.map((detail, index) => (
                                    <div key={index}>
                                        <>
                                            <div>
                                                <detail.icon />
                                            </div>
                                            <div>
                                                <div>{detail.value}</div>
                                                <div>{detail.label}</div>
                                            </div>
                                        </>
                                    </div>
                                ))}

                            </motion.div>
                        </motion.div>

                        <div>
                            <div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}