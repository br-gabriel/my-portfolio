"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Homepage() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background grid pattern */}
      <div className="hero-grid-pattern absolute inset-0" />

      {/* Radial glow */}
      <div className="glow-bg absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-td-border bg-td-bg-secondary px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-td-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-td-green" />
          </span>
          <span className="text-sm text-td-text-secondary">
            Disponível para novos projetos
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glow-green text-center font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          Eu construo
          <br />
          <span className="text-td-green">experiências</span>
          <br />
          digitais
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 max-w-xl text-center text-base leading-relaxed text-td-text-secondary md:text-lg"
        >
          Desenvolvedor Full Stack apaixonado por transformar ideias em
          interfaces modernas, performáticas e com código limpo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-10 flex flex-row gap-4"
        >
          <Link
            href="https://www.linkedin.com/in/gabriel-silva-feitosa/"
            target="_blank"
            className="group flex items-center gap-2 rounded-full border border-td-border bg-td-bg-secondary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-td-green/50 hover:bg-td-green/10 hover:shadow-lg hover:shadow-td-green/5"
          >
            <FaLinkedin size={18} className="text-td-text-secondary transition-colors group-hover:text-td-green" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/br-gabriel"
            target="_blank"
            className="group flex items-center gap-2 rounded-full border border-td-border bg-td-bg-secondary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-td-green/50 hover:bg-td-green/10 hover:shadow-lg hover:shadow-td-green/5"
          >
            <FaGithub size={18} className="text-td-text-secondary transition-colors group-hover:text-td-green" />
            GitHub
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-td-text-secondary">
            SCROLL
          </span>
          <svg
            className="h-5 w-5 text-td-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}