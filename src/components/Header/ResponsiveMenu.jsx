'use client'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

export default function ResponsiveMenu({ isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-td-bg-secondary border-l border-td-border p-8"
          >
            {/* Close button */}
            <button onClick={onClose} className="mb-10 self-end">
              <svg
                className="h-6 w-6 text-td-text-secondary hover:text-td-green transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6">
              <Link
                to="home"
                smooth={true}
                duration={800}
                onClick={onClose}
                className="cursor-pointer font-heading text-2xl font-semibold text-white transition-colors hover:text-td-green"
              >
                Home
              </Link>
              <Link
                to="aboutMe"
                smooth={true}
                offset={-80}
                duration={800}
                onClick={onClose}
                className="cursor-pointer font-heading text-2xl font-semibold text-white transition-colors hover:text-td-green"
              >
                Sobre mim
              </Link>
              <Link
                to="projects"
                smooth={true}
                offset={-80}
                duration={800}
                onClick={onClose}
                className="cursor-pointer font-heading text-2xl font-semibold text-white transition-colors hover:text-td-green"
              >
                Projetos
              </Link>

              <div className="my-4 h-px bg-td-border" />

              <Link
                to="contacts"
                smooth={true}
                duration={800}
                onClick={onClose}
                className="cursor-pointer rounded-full bg-td-green px-6 py-3 text-center font-heading text-base font-bold text-td-bg transition-all hover:bg-td-green-dark"
              >
                Fale Comigo
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}