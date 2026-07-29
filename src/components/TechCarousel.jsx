"use client"
import { motion } from "framer-motion"
import { flatTechnologies as technologies } from "../data/technologies"

function TechItem({ name, icon: Icon, color }) {
  return (
    <div className="group flex flex-shrink-0 items-center gap-3 rounded-full border border-td-border bg-td-bg-secondary px-5 py-3 transition-all duration-300 hover:border-td-green/30 hover:bg-td-green/5">
      <Icon
        size={22}
        style={{ color }}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="whitespace-nowrap text-sm font-medium text-td-text-secondary transition-colors group-hover:text-white">
        {name}
      </span>
    </div>
  )
}

export default function TechCarousel() {
  // Duplicate the array for infinite scroll effect
  const doubledTech = [...technologies, ...technologies]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full overflow-hidden border-y border-td-border bg-td-bg-secondary/50 py-10"
    >
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-td-text-secondary">
          Tecnologias que domino
        </p>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-td-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-td-bg to-transparent" />

        {/* Scrolling track */}
        <div className="animate-scroll-left flex w-max gap-4">
          {doubledTech.map((tech, index) => (
            <TechItem
              key={`${tech.name}-${index}`}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
