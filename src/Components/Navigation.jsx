import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import resumePdf from "../assets/Supreme's Portfolio Resume.pdf"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] =useState(false);
    const location= useLocation();

    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>20); //checks for window scroll past 20 pixels
        };

        window.addEventListener("scroll", handleScroll); //causes the function to check everytime user scrolls
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);//effect should only run once
    const navLinks=[
        {path:"/", label: "Home"},
        {path:"/about", label: "About"},
        {path: "/experience", label:"Experience"},
        {path: "/projects", label:"Projects"},
        {path: "/contact", label:"Contact"},
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.navigation} ${isScrolled? styles.scrolled : styles.transparent}`}//Changes state of navigation based on scroll position
        >
            <div className={styles.container}>
                <div className={styles.navInner}>
                    <Link to="/" className={styles.logo}>
                        Portfolio
                    </Link>

                    <div className={styles.mode}>
                        <Sun className={styles.modeSymbol}/>
                    </div>

                    <div className={styles.desktopNav}>
                        {navLinks.map((link)=>(
                            <Link
                            key={link.path}
                            to={link.path}
                            className={`${styles.navLink} ${location.pathname===link.path? styles.activeLink: styles.inactiveLink}`}
                            >
                                {link.label}
                                {location.pathname === link.path &&(
                                    <motion.div layoutId="activeNav"
                                    className={styles.activeUnderline}
                                    />
                                )}
                            </Link>
                        ))}

                        <a href= {resumePdf}
                        download
                        className={styles.cvButton}
                        >
                            <FileText className={styles.cvIcon} />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}