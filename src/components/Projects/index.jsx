"use client"
import { motion } from 'framer-motion'
import { Outfit } from 'next/font/google'
import NewCarousel from './NewCarousel'

const outfit = Outfit({
  subsets: ['latin'],
})

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex h-full w-full flex-col items-center justify-start pb-36"
    >
      <div className="mt-20 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${outfit.className} mb-2 font-semibold text-[#6e6ad2]`}
        >
          ESTUDOS DE CASO
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`${outfit.className} text-2xl font-semibold text-blue-950 dark:text-slate-50 md:text-3xl`}
        >
          Projetos recentes
        </motion.h3>
      </div>
      <div className="mt-5 w-full max-w-5xl overflow-hidden p-2 md:mt-16">
        <NewCarousel />
      </div>
    </section>
  );
}
