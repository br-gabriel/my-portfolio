"use client"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../../../public/images/profilePic.png"
import { motion } from "framer-motion"
import { IoLocationSharp } from "react-icons/io5"
import { FiExternalLink } from "react-icons/fi"
import { useLanguage } from "@/i18n/LanguageContext"
import { useExperience } from "@/data/experience"

const b = (text) => <strong className="text-white">{text}</strong>

export default function Aboutme() {
  const { t } = useLanguage()
  const experience = useExperience()
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
            {t.about.label}
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
              <p>{t.about.p1(b, experience)}</p>

              <p>{t.about.p2(b)}</p>

              <p>{t.about.p3(b)}</p>
            </div>

            <Link
              href={t.about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 flex w-fit items-center gap-2 rounded-full border border-td-border bg-td-bg-secondary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-td-green/50 hover:bg-td-green/10"
            >
              <FiExternalLink
                size={16}
                className="text-td-text-secondary transition-colors group-hover:text-td-green"
              />
              {t.about.resume}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
