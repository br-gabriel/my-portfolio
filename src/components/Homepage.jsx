"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Outfit } from "next/font/google"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Homepage() {
  return (
    <div
      id="home"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      <div className={outfit.className}>
        <motion.h1
          className="text-center text-5xl font-semibold text-blue-950 dark:text-slate-50 md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, delay: 0.1 }}
        >
          Seu próximo
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, delay: 0.3 }}
          className="mt-4 bg-gradient-to-r from-blue-500 to-fuchsia-500 bg-clip-text text-center text-5xl font-black text-transparent md:text-6xl"
        >
          Desenvolvedor Full Stack
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15, delay: 0.5 }}
        className="mt-8 max-w-lg text-center text-sm font-light leading-5 text-slate-600 dark:text-slate-100 md:text-base"
      >
        Me chamo Gabriel Feitosa e sou desenvolvedor React, Node e React Native,
        saiba mais sobre mim abaixo.
      </motion.p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Link
          href="https://www.linkedin.com/in/gabriel-silva-feitosa/"
          target="blank"
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.7 }}
            className="flex w-36 flex-row items-center justify-center gap-3 rounded border border-slate-500 bg-slate-600 px-3 py-1 text-slate-50 drop-shadow duration-200 hover:scale-105 hover:bg-slate-500/80 hover:ease-in-out dark:border-slate-50 dark:bg-slate-50 dark:text-slate-600 dark:hover:border-slate-50/80 dark:hover:bg-slate-50/80"
          >
            <FaLinkedin size={19} />
            Linkedin
          </motion.button>
        </Link>
        <Link href="https://github.com/br-gabriel" target="blank">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.9 }}
            className="flex w-36 flex-row items-center justify-center gap-3 rounded border border-slate-500 bg-white px-3 py-1 text-slate-500 drop-shadow duration-200 hover:scale-105 hover:border-slate-500/80 hover:text-slate-500/80 hover:ease-in-out dark:border-slate-50 dark:bg-transparent dark:text-slate-50 dark:hover:border-slate-50/80 dark:hover:text-slate-50/80"
          >
            <FaGithub size={19} />
            Github
          </motion.button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-20 flex w-[24em] flex-row items-center justify-center gap-3 rounded-3xl bg-violet-50 px-8 py-1 text-sm text-slate-500 drop-shadow dark:bg-violet-900/20 dark:text-slate-50 md:w-[25em] md:text-base"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <p>Disponível para trabalhos freelance!</p>
      </motion.div>
    </div>
  );
}