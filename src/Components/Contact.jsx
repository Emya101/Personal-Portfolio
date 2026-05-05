import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Store, SendHorizontal } from "lucide-react";
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
            }, 3000)
        }, 1500);
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
        hidden:{opacity:0,y},
        visible:{
            opacity:1,
            y:0,
            transition:{duration, delay},
        },
    });

    return (
        <div> Welcome to my contact page </div>
    );
}