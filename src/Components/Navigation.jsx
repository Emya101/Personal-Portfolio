import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import resumePdf from "../assets/Supreme's Portfolio Resume.pdf";
import myLogo from "../assets/logo.png";
import DarkLogo from "../assets/S3Dark.png";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20); //checks for window scroll past 20 pixels
        };

        window.addEventListener("scroll", handleScroll); //causes the function to check everytime user scrolls
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);//effect should only run once

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/experience", label: "Experience" },
        { path: "/project", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav
            ref={navRef}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.navigation} ${isScrolled ? styles.scrolled : styles.transparent}`}//Changes state of navigation based on scroll position
        >
            <div className={styles.container}>
                <div className={styles.navInner}>
                    <Link to="/" className={styles.logoLink} aria-label="Go to homepage">
                        {theme === "dark" ? (
                            <img src={DarkLogo} alt="Portfolio Logo" className={styles.logo} />
                        ) : (
                            <img src={myLogo} alt="Portfolio Logo" className={styles.logo} />
                        )}
                    </Link>

                    <motion.button
                        className={styles.mode}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <motion.span
                            key={theme}
                            className={styles.themeIconWrap}
                            initial={{ rotateY: 180, opacity: 0, scale: 0.6 }}
                            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                            exit={{ rotateY: -180, opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                            {theme === "dark" ? (
                                <Moon className={styles.modeSymbol} />
                            ) : (
                                <Sun className={styles.modeSymbol} />
                            )}
                        </motion.span>

                    </motion.button>

                    <div className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`${styles.navLink} ${location.pathname === link.path ? styles.activeLink : styles.inactiveLink}`}
                            >
                                {link.label}
                                {location.pathname === link.path && ( //if location.pathname is equal to link path, the animated undeline appears under specific location
                                    <motion.div layoutId="activeNav"
                                        className={styles.activeUnderline}
                                    />
                                )}
                            </Link>
                        ))}

                        <a href={resumePdf}
                            download
                            className={styles.cvButton}
                        >
                            <FileText className={styles.cvIcon} />
                            Download CV
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.mobileMenuButton}
                    >
                        {isOpen ? (
                            <X className={styles.menuX} />
                        ) : (
                            <Menu className={styles.menuIcon} />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.mobileNav}
                    >
                        <div className={styles.mobileNavInner}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`${styles.mobileLink} ${location.pathname === link.path ? styles.mobileActiveLink : styles.mobileInactiveLink}`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <a href={resumePdf}
                                download
                                onClick={() => setIsOpen(false)}
                                className={styles.mobileCvButton}
                            >
                                <FileText className={styles.cvIcon} />
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}