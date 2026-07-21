'use client'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { useCallback, useEffect, useState } from 'react'
import ResponsiveMenu from './ResponsiveMenu'

export default function Header() {
  const [scrollPos, setScrollPos] = useState(0)
  const [scrollDir, setScrollDir] = useState('down')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = useCallback(() => setIsMenuOpen(true), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setScrollDir(currentScrollPos > scrollPos ? 'down' : 'up')
      setScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPos])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 flex w-full justify-center transition-all duration-500 ${
          scrollPos > 50
            ? 'border-b border-td-border/50 bg-td-bg/80 backdrop-blur-xl'
            : 'bg-transparent'
        } ${
          scrollDir === 'down' && scrollPos > 300
            ? 'md:-translate-y-full'
            : 'md:translate-y-0'
        }`}
      >
        <div className="flex w-full max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer font-heading text-xl font-bold tracking-tight"
          >
            <span className="text-td-green">&lt;</span>
            Gabriel
            <span className="text-td-green">.dev</span>
            <span className="text-td-green"> /&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-td-text-secondary">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  className="cursor-pointer transition-colors duration-200 hover:text-td-green"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aboutMe"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="cursor-pointer transition-colors duration-200 hover:text-td-green"
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="cursor-pointer transition-colors duration-200 hover:text-td-green"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  smooth={true}
                  duration={800}
                  className="cursor-pointer rounded-full bg-td-green px-5 py-2 text-sm font-semibold text-td-bg transition-all duration-200 hover:bg-td-green-dark hover:shadow-lg hover:shadow-td-green/20"
                >
                  Fale Comigo
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button className="p-2 md:hidden" onClick={openMenu} aria-label="Abrir menu">
            <svg
              className="h-6 w-6 text-td-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header>

      <ResponsiveMenu isVisible={isMenuOpen} onClose={closeMenu} />
    </>
  )
}