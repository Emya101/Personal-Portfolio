import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Store, SendHorizontal, CircleCheckBig } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        setTimeout(() => {
            setStatus("sent");
            setFormData({ name: "", email: "", subject: "", message: "" });

            setTimeout(() => {
                setStatus("idle");
            }, 1800)
        }, 1300);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "emhenyasupreme@gmail.com",
            href: "mailto:emhenyasupreme@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "431-554-0026",
            href: "tel:+14315540026",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Winnipeg, MB",
            href: "https://www.google.ca/maps/place/Winnipeg,+MB/@49.8533133,-97.4824746,10z/data=!3m1!4b1!4m6!3m5!1s0x52ea73fbf91a2b11:0x2b2a1afac6b9ca64!8m2!3d49.8954221!4d-97.1385145!16zL20vMHBtcTI?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
        },
    ];

    const socialLinks = [
        {
            label: "Github",
            href: "https://github.com/Emya101",
            icon: Github,
            className: styles.github,
        },

        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/supreme-emhenya/",
            icon: Linkedin,
            className: styles.linkedin,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/_emmy_works/",
            icon: Instagram,
            className: styles.Instagram,
        },
        {
            label: "Fiverr",
            href: "https://www.fiverr.com/emya101?public_mode=true",
            icon: Store,
            className: styles.Store,
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

    return (
        <div className={styles.contactPage}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.title}>
                    Get In <span className={styles.gradient}>Touch</span>
                </h1>

                <p className={styles.subtitle}>
                    Have a project in mind, opportunity, or just want to connect? I'd love to hear from you.
                </p>
            </motion.div>

            <div className={styles.contactGrid}>
                <motion.div
                    className={styles.contactInfoSide}
                    variants={containerAnimSettings(0.14)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.div variants={itemAnimSettings()}>
                        <h2 className={styles.sectionHeading}>Let's Connect</h2>
                        <p className={styles.sectionText}>
                            Whether you have a question, an idea you want to come alive, or a role opportunity,
                            feel free to reach out. I'm open to discussing development work, collaboration, and new opportunities.
                        </p>
                    </motion.div>

                    <div className={styles.infoCards}>
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                variants={itemAnimSettings({ y: 24 })}
                                whileHover={{ scale: 1.02, x: 5 }}
                                href={info.href}
                                className={styles.infoCard}
                            >
                                <div className={styles.infoIconBox}>
                                    <info.icon size={24} />
                                </div>

                                <div>
                                    <p className={styles.infoLabel}>{info.label}</p>
                                    <p className={styles.infoValue}>{info.value}</p>
                                </div>
                            </motion.a>
                        )
                        )}
                    </div>


                    <motion.div variants={itemAnimSettings()}>
                        <h3 className={styles.followTitle}>
                            Follow Me
                        </h3>

                        <div className={styles.socials}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.socialIcon} ${social.className}`}
                                    aria-label={social.label}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemAnimSettings()}
                        className={styles.availabilityBox}
                    >
                        <div className={styles.availabilityTop}>
                            <span className={styles.pulseDot}></span>
                            <p>Available for Work</p>
                        </div>

                        <p className={styles.availabilityText}>
                            Currently open to new roles, freelance projects, and collaboration opportunities.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.formSide}
                    variants={containerAnimSettings(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <motion.div
                        variants={itemAnimSettings({ y: 28 })}
                        className={styles.formCard}
                    >
                        <h2 className={styles.formTitle}>Send a Message</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Supreme Emhenya"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Your Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}

                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">
                                    Subject *
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}

                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}

                                    rows={6}
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === "sending"}
                                className={`${styles.submitButton} ${status === "sent" ? styles.sentButton : ""}`}
                            >
                                <AnimatePresence mode="sync" initial={false}>
                                    {/* sync allows animation feel continuous and not pause in between */}
                                    {status === "idle" && (
                                        <motion.span
                                            key="idle"
                                            className={styles.buttonContent}
                                            initial={{ opacity: 0, scale: 0.92 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 360,
                                                damping: 22,
                                            }}
                                        >
                                            <SendHorizontal size={20} />
                                            <span>Send Message</span>
                                        </motion.span>
                                    )}

                                    {status === "sending" && (
                                        <motion.span
                                            key="sending"
                                            className={styles.sendingContent}
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <motion.span
                                                className={styles.sendingText}
                                                initial={{ opacity: 1, y: 0 }}
                                                animate={{ opacity: 0, y: -24 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <SendHorizontal size={20} />
                                                <span>Send Message</span>
                                            </motion.span>

                                            <motion.span
                                                className={styles.launchTrack}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2, duration: 0.15 }}
                                            />

                                            <motion.span
                                                className={styles.launchIcon}
                                                initial={{ x: 0, scale: 1, opacity: 1 }}
                                                animate={{
                                                    x: [0, 500],
                                                    scale: [1, 1.25, 1.6, 0.6],
                                                    opacity: [1, 1, 0, 0],
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: 0.1,
                                                    ease: "easeInOut",
                                                }}>

                                                <SendHorizontal size={22} />
                                            </motion.span>
                                        </motion.span>
                                    )}

                                    {status === "sent" &&
                                        <motion.span
                                            key="sent"
                                            className={styles.buttonContent}
                                            initial={{ opacity: 0, scale: 0.55 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.88 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 420,
                                                damping: 18,
                                            }}
                                        >
                                            <motion.span
                                                initial={{ scale: 0, rotate: -90 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 14,
                                                    delay: 0.05,
                                                }}
                                            >
                                                <CircleCheckBig size={22} />
                                            </motion.span>
                                            <span>Message Sent</span>
                                        </motion.span>
                                    }
                                </AnimatePresence>
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
}