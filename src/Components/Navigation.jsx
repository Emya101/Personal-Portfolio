import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {

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
            className={styles.navigation}
        >
            <div className={styles.container}>
                <div className={styles.navInner}>
                    <Link to="/" className={styles.logo}>
                        Portfolio
                    </Link>

                    <div className={styles.mode}>
                        <Sun color="black"/>
                    </div>

                    <div className={styles.desktopNav}>
                        {navLinks.map((link)=>(
                            <Link
                            key={link.path}
                            to={link.path}
                            className={styles.navLink}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a href= "src/assets/Supreme's Portfolio Resume.pdf"
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