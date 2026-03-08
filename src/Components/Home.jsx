import { Link } from "react-router-dom"; //Helps to link between pages(web version);
import { Github, Linkedin, Mail, Code2, Briefcase, GraduationCap, BadgeCheck, ArrowRight, MessageCircle } from "lucide-react"//import icons from lucide react package
import styles from "./Home.module.css"
import { motion } from "framer-motion"
import myImage from "../assets/MyPicture.jpg"

export function Home() {
    const containerAnimSettings = (stagger = 0.2) => ({ //Parent Container Function
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: 0.2
            }
        }
    });

    const itemAnimSettings = ({ y = 20, duration = 0.5, delay = 0 } = {}) => ({ //Item Container Function
        hidden: { opacity: 0, y },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay },
        },
    });
    const details = [// Stats array, helps to render the stats section
        { icon: Code2, label: "Projects Built", value: "15+" },
        { icon: Briefcase, label: "Years of Experience", value: "2+" },
        { icon: GraduationCap, label: "Bsc Applied Computer Science", value: "2025" },
        { icon: BadgeCheck, label: "Certifications", value: "5+" }
    ];

    return (
        <div className={styles.whole}>
            <section className={styles.heroSection}>
                <div className={styles.Background}>

                    <div className={styles.firstContainer}>
                        <motion.div
                            className={styles.heroGrid}
                            variants={containerAnimSettings(0.25)}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemAnimSettings({ y: 30, delay: 1.8 })} className={styles.imageSide}> 
                                <img
                                    src={myImage}
                                    alt="My Photo"
                                >
                                </img>
                            </motion.div>


                            <div className={styles.textSide}>
                                {/* Title block */}
                                <motion.div variants={itemAnimSettings({ y: 20, delay: 0.2 })} className={styles.badge}>
                                    Available for hire
                                </motion.div>

                                <motion.h1 variants={itemAnimSettings({ y: 30, delay: 0.4 })} className={styles.title}>
                                    Hello, I'm <span className={styles.nameColor}>[Name]</span>
                                </motion.h1>

                                <motion.p variants={itemAnimSettings({ y: 30, delay: 0.6 })} className={styles.subtitle}>Software Developer</motion.p>
                                <motion.p variants={itemAnimSettings({ y: 30, delay: 0.8 })} className={styles.subtitle}>Full-Stack Applications • APIs • Cloud Systems • Technical Systems</motion.p>


                                {/* Description */}
                                <motion.p variants={itemAnimSettings({ y: 30, delay: 1.0 })} className={styles.description}>

                                    I build modern web applications and backend systems using contemporary
                                    technologies, creating scalable and user-focused digital solutions.

                                </motion.p>

                                {/* Buttons */}
                                <motion.div variants={itemAnimSettings({ y: 30, delay: 1.2 })} className={styles.buttonGroup}>
                                    <Link to="/projects" className={styles.primaryButton}>
                                        View my work
                                        <ArrowRight className={styles.rightArrow} />
                                    </Link>

                                    <Link to="/contact" className={styles.secondaryButton}>
                                        Get in touch
                                        <MessageCircle className={styles.messageCircle} />
                                    </Link>

                                </motion.div>

                                {/* Social Icons */}
                                <motion.div variants={itemAnimSettings({ y: 30, delay: 1.4 })} className={styles.socials}>
                                    <a href="https://github.com/Emya101" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.github}`}><Github /></a>
                                    <a href="https://www.linkedin.com/in/supreme-emhenya/" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.linkedin}`}><Linkedin /></a>
                                    <a href="mailto:emhenyasupreme@gmail.com" className={`${styles.socialIcon} ${styles.email}`}><Mail /></a>
                                </motion.div>

                            </div>

                            {/* Stats Section */}
                            <motion.div variants={containerAnimSettings(0.25)} className={styles.statsGrid}>
                                {details.map((detail, index) => (
                                    <motion.div key={index} variants={itemAnimSettings({
                                        y: 30,
                                        delay: 1.6 + index * 0.3
                                    })} className={styles.statCard}>

                                        <div className={styles.statIconBox}>
                                            <detail.icon />
                                        </div>
                                        <div className={styles.statText}>
                                            <div className={styles.statValue}>{detail.value}</div>
                                            <div className={styles.statLabel}>{detail.label}</div>
                                        </div>
                                    </motion.div>

                                ))}

                            </motion.div>
                        </motion.div>
                        {/* Mouse Icon */}
                        <motion.div className={styles.scrollIndicator} initial= {{opacity:0,y:0}} animate={{opacity:1, y:[0,10,0]}} transition={{ opacity: {delay:3.0, duration:0.4}, y:{delay:2.2 , duration: 2, repeat: Infinity, ease:"easeInOut"}}}>
                            <div>
                                <div className={styles.scrollDot} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >
        </div >
    );
}