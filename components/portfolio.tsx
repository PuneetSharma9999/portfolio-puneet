"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Layers,
  Smartphone,
  Database,
  User,
  Phone,
  Calendar,
  MapPin,
  ExternalLink,
  Moon,
  Sun,
  ChevronRight,
  Star,
  MessageSquare,
} from "lucide-react"

import { GraduationCap, BookOpen, School } from "lucide-react";


import { Award } from "lucide-react";
import { Briefcase } from "lucide-react";
import { ShieldCheck } from "lucide-react";

 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { projects } from "@/data/projects"
import { testimonials } from "@/data/testimonials"
import { skills } from "@/data/skills"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import { useTheme } from "next-themes"

const sections = [
  { id: "hero", label: "Home", icon: <User className="h-4 w-4" /> },
  { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
  { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" /> },
  { id: "projects", label: "Projects", icon: <Layers className="h-4 w-4" /> },
  { id: "certifications", label: "Certifications", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [projectFilter, setProjectFilter] = useState("all")
  const { setTheme, theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => tech.toLowerCase().includes(projectFilter.toLowerCase())),
        )

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    // Set initial theme to dark
    setTheme("dark")
  }, [setTheme])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 transition-colors duration-300 dark">
    {/* Fixed Social Media Links */}
<div className="fixed left-4 bottom-4 z-50 flex flex-col gap-4 items-center md:left-6 md:gap-6 md:bottom-0 after:content-[''] after:w-[1px] after:h-16 md:after:h-24 after:bg-gradient-to-b after:from-primary/50 after:to-transparent">
  <motion.a
    href="https://github.com/PuneetSharma9999"
    target="_blank"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    whileHover={{ y: -4, color: "#f59e0b" }}
    className="text-gray-400 hover:text-primary transition-all duration-300"
    rel="noreferrer"
  >
    <Github className="h-6 w-6 md:h-5 md:w-5" />
  </motion.a>
  <motion.a
    href="https://linkedin.com/in/puneetsharma999"
    target="_blank"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    whileHover={{ y: -4, color: "#f59e0b" }}
    className="text-gray-400 hover:text-primary transition-all duration-300"
    rel="noreferrer"
  >
    <Linkedin className="h-6 w-6 md:h-5 md:w-5" />
  </motion.a>
  <motion.a
    href="mailto:puneetsharma87734@gmail.com"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    whileHover={{ y: -4, color: "#f59e0b" }}
    className="text-gray-400 hover:text-primary transition-all duration-300"
  >
    <Mail className="h-6 w-6 md:h-5 md:w-5" />
  </motion.a>
</div>

{/* Fixed Email on Right */}
<div className="fixed right-4 bottom-4 z-50 flex flex-col items-center md:right-6 md:bottom-0 after:content-[''] after:w-[1px] after:h-16 md:after:h-24 after:bg-gradient-to-b after:from-primary/50 after:to-transparent">
  <motion.a
    href="mailto:puneetsharma87734@gmail.com"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    whileHover={{ y: -4, color: "#f59e0b" }}
    className="text-gray-400 hover:text-primary transition-all duration-300 tracking-widest text-xs md:text-sm mb-4 md:mb-6 [writing-mode:vertical-lr]"
  >
    puneetsharma87734@gmail.com
  </motion.a>
</div>


      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-gray-900 font-bold text-xl">
              PS
            </div>
            <span className="font-semibold text-lg">Puneet Kumar Sharma</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
          >
            <ul className="flex gap-8">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleSectionChange(section.id)}
                    className={cn(
                      "text-sm font-medium relative px-1 py-2 transition-colors",
                      activeSection === section.id ? "text-primary" : "text-gray-400 hover:text-gray-200",
                    )}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
          {/*
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full bg-gray-800/50 text-gray-400 hover:text-primary hover:bg-gray-800"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          */}

            <Button
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 rounded-full px-6 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
              onClick={() => handleSectionChange("contact")}
            >
              Contact Me
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main ref={containerRef} className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[90vh] relative flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 py-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ opacity, scale, y }}
                className="space-y-6"
              >
                <Badge className="px-4 py-1.5 text-sm font-medium bg-gray-800/80 text-primary border-primary/20 backdrop-blur-sm">
                  Full-Stack Developer
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Creating digital{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    experiences
                  </span>{" "}
                  that inspire
                </h1>

                <p className="text-lg text-gray-400 max-w-lg">
                  I design and develop exceptional digital experiences that are fast, accessible, visually appealing,
                  and responsive.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 rounded-full px-8 py-6 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                    onClick={() => handleSectionChange("projects")}
                  >
                    View My Work
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-primary hover:border-primary/50"
                    onClick={() => handleSectionChange("about")}
                  >
                    About Me
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 blur-2xl"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-xl border border-gray-700/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Avatar className="h-72 w-72 rounded-full border-4 border-gray-800 shadow-2xl">
                      <AvatarImage src="puneetavatar.jpg" alt="Puneet Sharma" />
                      <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-900 text-6xl">
                        PS
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>

                  <div className="absolute -top-4 -left-4 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-medium">6+ Months Experience</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <button
              onClick={() => handleSectionChange("about")}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Scroll down</span>
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <Badge className="px-4 py-1.5 text-sm font-medium bg-gray-800/80 text-primary border-primary/20 backdrop-blur-sm mb-4">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate about creating exceptional digital experiences
              </h2>
              <p className="text-gray-400">
                I'm a full-stack developer with a passion for building beautiful, functional, and user-centered digital
                experiences.
              </p>
            </motion.div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Image Section */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    {/* Gradient Background */}
    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 blur-xl"></div>
    
    {/* Image Container */}
    <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-3/4 mx-auto">
      <img
        src="puneet.png"
        alt="Puneet Sharma"
        className="w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

      {/* Badges */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 backdrop-blur-sm">
            React.js
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 backdrop-blur-sm">
            TypeScript
          </Badge>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm">
            JavaScript
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 backdrop-blur-sm">
            Next.js
          </Badge>
        </div>
      </div>
    </div>
  </motion.div>

  {/* About Section */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="space-y-6"
  >
    {/* About Text */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Who am I?</h3>
      <p className="text-gray-400">
        I'm Puneet Kumar Sharma, a versatile Full-Stack Developer specializing in creating dynamic and user-centric
        applications. With a strong foundation in both web and mobile development, I bring a holistic
        approach to digital solutions, ensuring that each project is not only functional and efficient but
        also visually engaging and intuitive.
      </p>
      <p className="text-gray-400">
        My job is to build applications that are user-friendly and aesthetically pleasing. I bring a
        personal touch to each project, ensuring it stands out and effectively communicates your brand's
        identity.
      </p>
    </div>

    {/* Contact Details Grid */}
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          <h4 className="font-medium">Phone</h4>
        </div>
        <p className="text-gray-400">+91 91627 80802</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          <h4 className="font-medium">Email</h4>
        </div>
        <p className="text-gray-400">puneetsharma87734@gmail.com</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h4 className="font-medium">Experience</h4>
        </div>
        <p className="text-gray-400"> Internship at Hackveda Limited (6+ Months) </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <h4 className="font-medium">Location</h4>
        </div>
        <p className="text-gray-400">Gurugram, Haryana, INDIA, 122102</p>
      </div>
    </div>

    {/* Get In Touch Button */}
    <Button
      className="mt-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 rounded-full px-6 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
      onClick={() => handleSectionChange("contact")}
    >
      Get In Touch
    </Button>
  </motion.div>
</div>



{/*education section in about*/}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-24"
>
  {/* Section Title */}
  <h3 className="text-3xl font-bold mb-12 text-center text-primary">Education</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-8">
    {/* 10th Grade */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center flex flex-col items-center justify-center">
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
        <GraduationCap className="h-7 w-7 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Secondary Education (10th)</h4>
      <p className="text-gray-400">High School Barauli, Gopalganj | Passed in 2019</p>
      <p className="text-gray-400">Scored: 80%</p>
    </div>

    {/* 12th Grade */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center flex flex-col items-center justify-center">
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
        <BookOpen className="h-7 w-7 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Higher Secondary (12th)</h4>
      <p className="text-gray-400">Kamla Rai College, Gopalganj | Passed in 2021</p>
      <p className="text-gray-400">Stream: Science (PCMB) | Scored: 70%</p>
    </div>

    {/* Graduation */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center flex flex-col items-center justify-center">
      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
        <School className="h-7 w-7 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications (BCA)</h4>
      <p className="text-gray-400">JK Business School, Gurugram, Haryana | 2022 - Present</p>
    </div>
  </div>
</motion.div>


{/* Service Section in About */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-24"
>
  <h3 className="text-3xl font-extrabold mb-12 text-center text-white tracking-wide">What I'm Doing</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Web Development",
        description: "High-quality and scalable web applications, ensuring performance and responsiveness.",
      },
      {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Web Design",
        description: "Sleek, modern, and user-friendly interfaces that enhance user experience.",
      },
      {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Mobile Apps",
        description: "Building efficient and interactive mobile applications for Android & iOS.",
      },
      {
        icon: <Database className="h-8 w-8 text-primary" />,
        title: "Technology & Development",
        description: "Expertise in Git, Firebase, and cloud solutions for seamless development.",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="relative bg-gray-900/70 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 shadow-lg group hover:scale-[1.05] transition-transform duration-300"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/50 mb-6">
          {service.icon}
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
        <p className="text-gray-400 leading-relaxed">{service.description}</p>
      </div>
    ))}
  </div>
</motion.div>
          </div>
        </section>




        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <Badge className="px-4 py-1.5 text-sm font-medium bg-gray-800/80 text-primary border-primary/20 backdrop-blur-sm mb-4">
                My Skills
              </Badge>
        
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Technical Expertise</h2>
          <p className="text-gray-400">
            I have honed my skills in both frontend and backend development. Here are the technologies I specialize in:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 px-4 md:px-8 lg:px-16">
          {["frontend", "backend"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: category === "frontend" ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-14 text-center"
            >
              <h3 className="text-2xl font-bold text-white text-center">
                {category.charAt(0).toUpperCase() + category.slice(1)} Development
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
                {skills.filter(skill => skill.category === category).map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="w-24 h-24 object-contain mb-2" 
                      whileHover={{ scale: 1.1 }}
                    />
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
        </section>



        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-500/20 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <Badge className="px-4 py-1.5 text-sm font-medium bg-gray-800/80 text-primary border-primary/20 backdrop-blur-sm mb-4">
                My Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured projects</h2>
              <p className="text-gray-400">
                Here are some of my recent projects. Each project is unique and showcases different skills and
                technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                variant={projectFilter === "all" ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  projectFilter === "all"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900"
                    : "border-gray-700 text-gray-400 hover:text-primary hover:border-primary/50",
                )}
                onClick={() => setProjectFilter("all")}
              >
                All Projects
              </Button>

              <Button
                variant={projectFilter === "react" ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  projectFilter === "react"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900"
                    : "border-gray-700 text-gray-400 hover:text-primary hover:border-primary/50",
                )}
                onClick={() => setProjectFilter("react")}
              >
                React
              </Button>

              <Button
                variant={projectFilter === "next" ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  projectFilter === "next"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900"
                    : "border-gray-700 text-gray-400 hover:text-primary hover:border-primary/50",
                )}
                onClick={() => setProjectFilter("next")}
              >
                Next.js
              </Button>

              <Button
                variant={projectFilter === "JavaScript" ? "default" : "outline"}
                className={cn(
                  "rounded-full",
                  projectFilter === "JavaScript"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900"
                    : "border-gray-700 text-gray-400 hover:text-primary hover:border-primary/50",
                )}
                onClick={() => setProjectFilter("JavaScript")}
              >
                JavaScript
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-primary hover:border-primary/50"
              >
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>







{/* Certifications Section */}
              <motion.div
              id="certifications"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <Badge className="px-4 py-1.5 text-sm font-medium bg-gray-800/80 text-primary border-primary/20 backdrop-blur-sm mb-4">
                Certificates
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
              <p className="text-gray-400">
                Here are some of my recent certifications. Each certification is unique and showcases different skills and
                technologies.
              </p>
            </motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-24"
  className="flex flex-wrap justify-center gap-8 mb-12"
>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  px-4 md:px-8 lg:px-16">
    {[
       {
        title: "Full Stack Web Development",
        issuer: "Hackveda Limited",
        link: "Internship-certificate-Hackveda.jpg",
      },
      {
        title: "JavaScript for Beginners",
        issuer: "Simplilearn",
        link: "JavaScript.jpg",
      },
      {
        title: "Introduction to Gen AI",
        issuer: "Google Cloud Skills Boost",
        link: "genai.png",
      },
      {
        title: "Introduction to HTML",
        issuer: "Simplilearn",
        link: "HTML.jpg",
      },
      {
        title: "Prompt Engineering for Gen AI",
        issuer: "LinkedIn",
        link: "promptengineering.jpeg",
      },
      {
        title: "C Programming Language",
        issuer: "Great Learning",
        link: "Clanguage.jpg",
      },
      {
        title: "Operators in My SQL",
        issuer: "Great Learning",
        link: "SQL.jpg",
      },
    ].map((cert, index) => (
      <div
        key={index}
        className="relative bg-gray-900/70 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 shadow-lg group hover:scale-[1.05] transition-transform duration-300"
      >


        <div className="relative z-10 text-center">
          <h4 className="text-xl font-semibold text-white mb-2">{cert.title}</h4>
          <p className="text-gray-400 mb-4">Issued by {cert.issuer}</p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 rounded-lg bg-amber-500 text-gray-900 font-medium hover:bg-amber-600 transition-colors"
          >
            View Certificate
          </a>
        </div>
      </div>
    ))}
  </div>
</motion.div>



        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-amber-500/20 rounded-full filter blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <Badge className="px-4 py-1.5 text-sm font-medium bg-gray-800/80 text-primary border-primary/20 backdrop-blur-sm mb-4">
                Contact Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
              <p className="text-gray-400">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold">Get in touch</h3>
                <p className="text-gray-400">
                  Feel free to reach out if you have any questions or want to work together. I'm always open to
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:contact@example.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        puneetsharma87734@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">
                        +91  91627 80802
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-gray-400">Gurugram, Haryana, INDIA, 122102</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/PuneetSharma9999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/puneetsharma999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:puneetsharma87734@gmail.com"
                    className="h-12 w-12 rounded-full bg-gray-900/80 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 blur-xl"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-300">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-colors"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-300">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      {/* <div className="space-y-2"> 
                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-colors"
                          placeholder="Subject"
                        />
                      </div>*/}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 focus:outline-none transition-colors resize-none"
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                      <Button className="w-full py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-gray-900 font-bold text-xl">
                PS
              </div>
              <span className="font-semibold text-lg">Puneet Kumar Sharma</span>
            </div>

            <p className="text-gray-400 text-center md:text-left mb-6 md:mb-0">
              © {new Date().getFullYear()} <a href="https://linkedin.com/in/puneetsharma999"
                target="_blank"
                className="text-yellow-500 hover:text-yellow-400">Puneet Sharma. </a> 
                All rights reserved.
            </p>
            

            <div className="flex gap-4">
              <a
                href="https://github.com/PuneetSharma9999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/puneetsharma999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:puneetsharma87734@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

