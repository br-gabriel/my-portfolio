"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FiArrowUpRight } from "react-icons/fi"

export default function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contato.gabrielfeitosa@gmail.com")
    alert("E-mail copiado!")
  }

  return (
    <footer
      id="contacts"
      className="relative w-full border-t border-td-border"
    >
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-td-green">
          Contato
        </span>
        <h2 className="mt-6 font-heading text-4xl font-bold md:text-6xl">
          Vamos construir algo{" "}
          <span className="text-td-green">incrível</span> juntos?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-td-text-secondary">
          Estou sempre aberto a novos projetos e oportunidades. Entre em
          contato e vamos conversar.
        </p>

        {/* Contact links */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://wa.me/5568992490473"
            target="_blank"
            className="group flex items-center gap-2 rounded-full bg-td-green px-7 py-3.5 text-sm font-semibold text-td-bg transition-all duration-300 hover:bg-td-green-dark hover:shadow-lg hover:shadow-td-green/20"
          >
            <FaWhatsapp size={18} />
            WhatsApp
            <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-2 rounded-full border border-td-border bg-td-bg-secondary px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-td-green/50 hover:bg-td-green/10"
          >
            <MdEmail size={18} className="text-td-text-secondary group-hover:text-td-green" />
            contato.gabrielfeitosa@gmail.com
          </button>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-td-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <span className="text-xs text-td-text-secondary">
            © {new Date().getFullYear()} Gabriel Feitosa. Todos os direitos reservados.
          </span>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/br-gabriel"
              target="_blank"
              className="text-td-text-secondary transition-colors hover:text-td-green"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gabriel-silva-feitosa/"
              target="_blank"
              className="text-td-text-secondary transition-colors hover:text-td-green"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
