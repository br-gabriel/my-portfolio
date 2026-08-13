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
                Sou desenvolvedor <strong className="text-white">Full Stack</strong> com mais de<strong className="text-white"> 2 anos de experiência</strong>, especializado em criar e otimizar soluções digitais de alta performance. Atualmente, atuo no grupo <strong className="text-white">Pneufree.com</strong>, um dos maiores e-commerces do segmento no Brasil, entregando sistemas escaláveis e eficientes.
              </p>

              <p>
                Tenho sólida vivência no desenvolvimento de interfaces modernas e responsivas utilizando <strong className="text-white">React, Next.js, TypeScript e Tailwind</strong>. No back-end, construo arquiteturas robustas com <strong className="text-white">Node.js</strong> e bancos de dados como <strong className="text-white">SQL Server, PostgreSQL e MongoDB</strong>. Além do código, possuo um forte olhar para <strong className="text-white">UI/UX</strong>, utilizando o <strong className="text-white">Figma</strong> para aprimorar a usabilidade das aplicações.
              </p>

              <p>
                Com perfil <strong className="text-white">proativo</strong> e <strong className="text-white">colaborativo</strong>, foco em unir design atraente, código limpo e funcionalidade impecável para resolver problemas reais e trazer melhorias contínuas aos projetos em que atuo.
              </p>
            </div>

            <Link
              href="https://drive.google.com/file/d/1IeRSLgkIs3xAeBRXuYutlHaJB1aJ95hB/view?usp=sharing"
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
