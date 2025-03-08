"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image || "/placeholder.svg?height=200&width=400"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex gap-3 px-4 absolute bottom-4 left-0 right-0 justify-center">
                {project.demoUrl && (
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-gray-700 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800 hover:text-primary hover:border-primary/50"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

