"use client"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import projectsData from "./ProjectsData.json"

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-28 px-6"
    >
      {/* Subtle background difference */}
      <div className="absolute inset-0 bg-td-bg-secondary/30" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-td-green">
            Portfólio
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-5xl">
            Projetos <span className="text-td-green">recentes</span>
          </h2>
          <p className="mt-4 text-td-text-secondary">
            Uma seleção dos meus trabalhos mais relevantes
          </p>
        </motion.div>

        {/* Projects Grid — UXfolio style 2 columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.projectsCards.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
