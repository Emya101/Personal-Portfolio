import { Link } from "react-router-dom"; //Helps to link between pages(web version);
import { Github, Linkedin, Mail, Heart, Store, Instagram } from "lucide-react"//import icons from lucide react package
import styles from "./Footer.module.css"
import { motion } from "framer-motion"

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Navigation: [
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Experience", path: "/experience" },
            { label: "Projects", path: "/project" },
            { label: "Contact", path: "/contact" },
        ],

        Social: [
            { label: "Github", href: "https://github.com/Emya101", icon: Github },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/supreme-emhenya/", icon: Linkedin },
            { label: "Instagram", href: "https://www.instagram.com/_emmy_works/", icon: Instagram },
            { label: "Fiverr", href: "https://www.fiverr.com/emya101?public_mode=true", icon: Store },
            { label: "Email", href: "mailto:emhenyasupreme@gmail.com", icon: Mail },
        ]
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div>
                        <Link to="/" className={styles.logo}>
                            Portfolio
                        </Link>

                        <p className={styles.description}>
                            Building exceptional digital experiences with modern technologies.
                        </p>

                        <motion.div className={styles.socialRow}>
                            {footerLinks.Social.map((social, index) => (
                                <motion.a key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                    whileHover={{scale:1.05 , y:-2}}
                                >
                                    <social.icon className={styles.icon}/>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    <div>
                        <h3 className={styles.heading}>Quick Links</h3>
                        <ul className={styles.list}>
                        {footerLinks.Navigation.map((Nav, index)=>(
                            <li key={index}>
                                <Link to ={Nav.path} className={styles.Nav}>
                                    {Nav.label}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className={styles.heading}>Get in Touch</h3>
                        <ul className={styles.contactList}>
                            <li>Winnipeg, Manitoba</li>
                            
                            <li>
                                <a href="mailto:emhenyasupreme@gmail.com" className={styles.Nav}>
                                    emhenyasupreme@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className ={styles.bottomBar}>
                    <div className={styles.bottomContent}>
                        <p className={styles.copy}>
                            © {currentYear} Supreme Emhenya. All rights reserved.
                        </p>

                        <p className={styles.madeNotice}>
                            Made With
                            <Heart className={styles.heart}/>
                            Using React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}