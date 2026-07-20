"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-td-border bg-td-bg-card transition-all duration-500 hover:border-td-green/20 hover:shadow-2xl hover:shadow-td-green/5"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-td-bg-secondary">
        <Image
          src={project.image.url}
          alt={project.image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-td-bg/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          {project.links.firstLink && (
            <Link
              href={project.links.firstLink}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-td-bg transition-transform hover:scale-105"
            >
              <FiGithub size={16} />
              Código
            </Link>
          )}
          {project.links.secondLink && (
            <Link
              href={project.links.secondLink}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-td-green px-5 py-2.5 text-sm font-semibold text-td-bg transition-transform hover:scale-105"
            >
              <FiExternalLink size={16} />
              Demo
            </Link>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-white transition-colors group-hover:text-td-green">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-td-text-secondary">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-td-border bg-td-bg px-3 py-1 text-xs font-medium text-td-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
