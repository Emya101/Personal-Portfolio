import { Link } from "react-router-dom"; //Helps to link between pages(web version);
import { Github, Linkedin, Mail, Code2, Briefcase, GraduationCap, BadgeCheck } from "lucide-react"//import icons from lucide react package


export function Home() {
    const details = [
        { icon: Code2, label: "Projects Built", value: "15+" },
        { icon: Briefcase, label: "Years of Experience", value: "2+" },
        { icon: GraduationCap, label: "Bsc Applied Computer Science", value: "2025" },
        { icon: BadgeCheck, label: "Certifications", value: "5+" }
    ];

    return (
        <>
            <div>
                { /* Left content section*/}
                <img
                    src="https://images.unsplash.com/photo-1772475385529-92037713a057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3NzI2MTAxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="My Photo"
                >
                </img>
            </div>

            <div>
                <span>Available for hire</span>
                <h1>
                    Hello, I'm <span> [Name]</span> {/* for later*/}
                </h1>
                <p>Software Developer </p>
                <p>Full-Stack Applications • APIs • Cloud Systems • Technical Systems</p>
                <p>
                    {/* Role Description */} 
                    I build modern web applications and backend systems using contemporary technologies,
                    creating scalable and user-focused digital solutions.
                
                </p>

                <div>
                    <Link to="/projects">View my work</Link>
                    <Link to="/contact">Get in touch</Link>
                </div>

                <div>
                    <a href= "https://github.com/Emya101" target="_blank" rel="noopener noreferrer"><Github/></a>
                    <a href= "https://www.linkedin.com/in/supreme-emhenya/" target="_blank" rel="noopener noreferrer"><Linkedin></Linkedin></a>
                    <a href= "mailto:emhenyasupreme@gmail.com"><Mail/></a>
                </div>

                <div>
                    {details.map((detail,index)=>(
                        <div key={index}>
                            <>
                        <div>
                            <detail.icon/>
                        </div>
                        <div>
                            <div>{detail.value}</div>
                            <div>{detail.label}</div>
                        </div>
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}