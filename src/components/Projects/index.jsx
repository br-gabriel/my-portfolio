"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import projectsData from "./ProjectsData.json"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("profissional")

  const categories = [
    { id: "profissional", label: "Profissional" },
    { id: "pessoais", label: "Proj. Pessoais" },
    { id: "estudos", label: "Estudos" }
  ]

  const filteredProjects = projectsData.projectsCards.filter(
    (project) => project.category === selectedCategory
  )

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
          className="mb-12 text-center"
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

        {/* Category Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          <div className="flex gap-2 rounded-full border border-td-border bg-td-bg-secondary/30 p-1.5">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none ${
                    isActive ? "text-td-bg" : "text-td-text-secondary hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-full bg-td-green"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid — UXfolio style 2 columns */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-td-text-secondary">
              Nenhum projeto cadastrado nesta categoria no momento.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
