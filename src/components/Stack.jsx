"use client"
import { motion } from "framer-motion"
import { stackData } from "../data/technologies"

export default function Stack() {
  return (
    <section className="relative w-full overflow-hidden border-t border-td-border bg-td-bg-secondary/30 px-6 py-24">
      <div className="hero-grid-pattern absolute inset-0 opacity-40" />
      
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-td-green">
            {'// Stack'}
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-wide md:text-5xl">
            Com o que eu trabalho
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {stackData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
              className="flex flex-col gap-4 md:flex-row md:items-center md:gap-12"
            >
              <div className="w-36 flex-shrink-0">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-td-green/80">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {group.items.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-2.5 rounded-full border border-td-border bg-td-bg-card px-5 py-2.5 transition-all duration-300 hover:border-td-green/30 hover:bg-td-green/5 hover:shadow-lg hover:shadow-td-green/5"
                  >
                    <tech.icon
                      size={18}
                      style={{ color: tech.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm font-medium text-td-text-secondary transition-colors group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
