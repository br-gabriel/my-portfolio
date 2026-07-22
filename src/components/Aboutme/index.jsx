"use client"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../../../public/images/profilePic.png"
import { motion } from "framer-motion"
import { IoLocationSharp } from "react-icons/io5"
import { FiExternalLink } from "react-icons/fi"

export default function Aboutme() {
  return (
    <section
      id="aboutMe"
      className="relative w-full py-28 px-6"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-td-green">
            Sobre mim
          </span>
        </motion.div>

        {/* Content grid */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-td-green/25 to-td-purple/25 blur-md" />
              <Image
                src={profilePic}
                alt="Gabriel Feitosa"
                width={220}
                height={220}
                className="relative rounded-full object-cover"
              />
              {/* Location badge */}
              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-td-border bg-td-bg-secondary px-3 py-1.5">
                <IoLocationSharp className="text-td-green" size={14} />
                <span className="whitespace-nowrap text-xs text-td-text-secondary">
                  Curitiba, PR
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Gabriel <span className="text-td-green">Feitosa</span>
            </h2>

            <div className="flex flex-col gap-4 text-base leading-relaxed text-td-text-secondary">
              <p>
                Sou estudante de <strong className="text-white">Ciência da Computação</strong> e
                desenvolvedor Full Stack com foco em criar soluções digitais de
                alta qualidade. Tenho experiência sólida com{" "}
                <strong className="text-white">React, Next.js e Tailwind</strong> no
                front-end, construindo interfaces modernas e responsivas.
              </p>

              <p>
                No back-end, trabalho com{" "}
                <strong className="text-white">
                  Node.js, bancos de dados como PostgreSQL e MongoDB
                </strong>
                , e também desenvolvo aplicações mobile com{" "}
                <strong className="text-white">React Native</strong>. Tenho experiência
                com design em <strong className="text-white">Figma</strong> e otimização{" "}
                <strong className="text-white">SEO</strong>.
              </p>

              <p>
                Busco constantemente aperfeiçoar minhas habilidades e contribuir
                com{" "}
                <strong className="text-white">
                  soluções criativas
                </strong>{" "}
                que unam design atraente e funcionalidade impecável.
              </p>
            </div>

            <Link
              href="https://docs.google.com/document/d/1OfHc0ePblWrNwEngiM6yIGvVz1aM2flbVE4sk0GGfzY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 flex w-fit items-center gap-2 rounded-full border border-td-border bg-td-bg-secondary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-td-green/50 hover:bg-td-green/10"
            >
              <FiExternalLink
                size={16}
                className="text-td-text-secondary transition-colors group-hover:text-td-green"
              />
              Acessar Currículo
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
