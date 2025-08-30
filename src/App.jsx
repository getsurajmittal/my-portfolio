import React, { useState, useEffect } from 'react';

// --- SVG ICONS --- //
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 9.7 0 7.2-4.3 11-11 11-1.6 0-3.1-.4-4.6-1.2 2.3.4 4.5.2 6.5-.8-3.4-.6-5.6-3.4-6.4-6.2 1.2.3 2.4.2 3.5-.2-4.1-1.2-5.9-4.9-5.9-9.5 1.3.6 2.7.9 4.1.9-3.4-2.5-3-7.5 1.4-9.5C9.8 5.6 13.1 8 16.8 8.4c-.2-1.3.4-2.8 1.8-3.8 1.5-1.1 3.5-1.1 5.1-.1z"/></svg>
);

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 6h20"/><path d="M14 12a2 2 0 1 0-4 0"/><path d="M2 12.1A2 2 0 0 1 4 11h16a2 2 0 0 1 2 1.9v4.2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/></svg>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
);


// --- PORTFOLIO DATA --- //
const portfolioData = {
    name: "Suraj Mittal",
    title: "Software Developer",
    resumeUrl: "/suraj-mittal-resume.pdf", // Place your resume in the 'public' folder
    socials: {
        github: "https://github.com/getsurajmittal",
        linkedin: "https://linkedin.com/in/suraj-mittal-58a86a20b",
        twitter: "https://twitter.com/suraj-mittal"
    },
    about: {
        intro: "Software Engineer with hands-on experience in building CI/CD pipelines, automating developer workflows, and driving platform migrations. Passionate about improving developer productivity through tooling, documentation automation, and scalable infrastructure solutions.",
    },
    timeline: [
        {
            type: 'experience',
            icon: <BriefcaseIcon />,
            date: '2024 - Present',
            title: 'Software Engineer',
            company: 'Adtran, Bangalore',
            description: 'Automated developer documentation with Docusaurus, reducing manual effort by 50%. Engineered CI/CD pipelines with Jenkins & Docker, cutting release times and improving reliability. Led Ubuntu 22.04 platform migration for core products, debugging system-level issues and ensuring 100% service compatibility.'
        },
        {
            type: 'experience',
            icon: <BriefcaseIcon />,
            date: '2023 - 2024',
            title: 'DevOps Intern',
            company: 'Brane Enterprises, Hyderabad',
            description: 'Deployed and managed applications on AWS, improving infrastructure setup time and set up CI/CD pipelines, reducing manual deployment effort by 20. Containerized services with Docker and Kubernetes simplifying staging/test deployments'
        },
        {
            type: 'education',
            icon: <GraduationCapIcon />,
            date: '2020 - 2024',
            title: 'Bachelor of Engineering in Computer Science Engineering',
            company: 'Dayananda Sagar College of Engineering, Bangalore',
            description: 'Graduated with honors. Focused on algorithms, data structures, and web development. Actively participated in coding clubs and hackathons.'
        }
    ],
    projects: [
        {
            title: 'OPay',
            description: 'A full-featured e-commerce website built with the MERN stack, featuring product listings, search, cart, user authentication, and a payment gateway.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
            liveLink: '#',
            repoLink: '#',
        },
        {
            title: 'Real-time Chat Application',
            description: 'A chat application using WebSockets for real-time communication. Features include private messaging, group chats, and online status indicators.',
            tags: ['React', 'Node.js', 'Socket.IO', 'Tailwind CSS'],
            liveLink: '#',
            repoLink: '#',
        },
        {
            title: 'Project Management Tool',
            description: 'A Kanban-style project management tool with drag-and-drop functionality for task management, user assignments, and project progress tracking.',
            tags: ['React', 'Firebase', 'React DnD', 'Styled Components'],
            liveLink: '#',
            repoLink: '#',
        }
    ],
    certifications: [
        { name: 'AWS Certified Solutions Architect - Associate', issuer: 'Amazon Web Services', date: '2023' },
        { name: 'MongoDB Certified Developer, Associate Level', issuer: 'MongoDB Inc.', date: '2022' },
        { name: 'Full-Stack Web Development', issuer: 'Coursera', date: '2021' },
    ]
};

// --- COMPONENTS --- //

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark' || 
                       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
    ];
    
    const linkClasses = "text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors py-2";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg shadow-sm' : ''}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white">{portfolioData.name}</a>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map(link => <a key={link.href} href={link.href} className={linkClasses}>{link.label}</a>)}
                    <ThemeSwitcher />
                </div>
                <div className="md:hidden flex items-center">
                    <ThemeSwitcher />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2 p-2 rounded-md text-slate-500 dark:text-slate-400">
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900">
                     <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
                        {navLinks.map(link => <a key={link.href} href={link.href} className={linkClasses} onClick={() => setIsMenuOpen(false)}>{link.label}</a>)}
                    </div>
                </div>
            )}
        </header>
    );
};


const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
                    Hi, I'm {portfolioData.name}
                </h1>
                <p className="text-2xl md:text-3xl text-sky-600 dark:text-sky-400 mb-8">
                    {portfolioData.title}
                </p>
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"><GithubIcon /></a>
                    <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"><LinkedinIcon /></a>
                    {/* <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"><TwitterIcon /></a> */}
                </div>
                <div className="flex justify-center space-x-4">
                    <a href={portfolioData.resumeUrl} download className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Download Resume
                    </a>
                    <a href="#contact" className="bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 font-semibold px-8 py-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

const SectionWrapper = ({ id, title, children }) => (
    <section id={id} className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">{title}</h2>
            {children}
        </div>
    </section>
);

const About = () => {
    return (
        <SectionWrapper id="about" title="About Me">
            <div className="max-w-4xl mx-auto">
                <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12">
                    {portfolioData.about.intro}
                </p>
                <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8">
                    {portfolioData.timeline.map((item, index) => (
                        <div key={index} className="mb-12 relative">
                            <div className="absolute -left-11 top-1.5 h-6 w-6 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-sky-500 dark:text-sky-400">
                                {item.icon}
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">{item.title}</h3>
                            <h4 className="text-md font-medium text-slate-600 dark:text-slate-300">{item.company}</h4>
                            <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

const Projects = () => {
    return (
        <SectionWrapper id="projects" title="My Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center space-x-4 mt-auto">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 font-medium flex items-center">
                                    Live Demo <ExternalLinkIcon />
                                </a>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 font-medium flex items-center">
                                    GitHub <GithubIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" title="Certifications">
            <div className="max-w-4xl mx-auto">
                <ul className="space-y-6">
                    {portfolioData.certifications.map((cert, index) => (
                        <li key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                            <p className="text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionWrapper>
    );
};

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xandongv", { // <-- Replace with your Formspree ID
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Thank you for your message!');
                form.reset();
            } else {
                setStatus('Oops! Something went wrong.');
            }
        } catch (error) {
            setStatus('Oops! Something went wrong.');
            console.error('Error submitting form:', error);
        }
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <SectionWrapper id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto">
                <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
                    I'm currently open to new opportunities. Feel free to send me a message!
                </p>
                <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border-transparent focus:border-sky-500 focus:ring-sky-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border-transparent focus:border-sky-500 focus:ring-sky-500"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                        <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-700 border-transparent focus:border-sky-500 focus:ring-sky-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors duration-300">
                        Send Message
                    </button>
                    {status && <p className="text-center mt-4 text-green-600 dark:text-green-400">{status}</p>}
                </form>
            </div>
        </SectionWrapper>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate-100 dark:bg-slate-800 py-6">
            <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// --- MAIN APP --- //

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-500">
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
            <Certifications />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}
