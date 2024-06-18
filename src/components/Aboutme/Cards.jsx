"use client"
import Image from "next/image"
import figmaSVG from "../../../public/figma.svg"
import nextjsSVG from "../../../public/nextjs.svg"
import mobileSVG from "../../../public/mobile.svg"
import { motion } from "framer-motion"

export default function Cards() {
  return (
    <section dra className="w-full flex md:justify-center md:items-center gap-4 p-4 snap-mandatory snap-x overflow-x-scroll md:overflow-hidden drop-shadow-md scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-800">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="bg-white dark:bg-black text-black dark:text-white rounded-md p-4 w-full min-w-[270px] max-w-[300px] md:max-w-[360px] min-h-[120px] flex items-center justify-center snap-center"
      >
        <div className="flex items-center justify-center gap-4">
          <Image src={figmaSVG} alt="logo do Figma" width={50} />
          <span className="md:max-w-[150px]">Criação de design feito com Figma</span>
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 2 }}
        className="bg-white dark:bg-black text-black dark:text-white rounded-md p-4 w-full min-w-[270px] max-w-[300px] md:max-w-[360px] min-h-[120px] flex items-center justify-center snap-center"
      >
        <div className="flex items-center justify-center gap-4">
          <Image src={nextjsSVG} alt="logo do Next js" width={70} />
          <span className="md:max-w-[150px]">Sites performáticos utilizando NextJS</span>
        </div>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 2.5 }}
        className="bg-white dark:bg-black text-black dark:text-white rounded-md p-4 w-full min-w-[270px] max-w-[300px] md:max-w-[360px] min-h-[120px] flex items-center justify-center snap-center"
      >
        <div className="flex items-center justify-center gap-4">
          <Image src={mobileSVG} alt="Icone de smartphone" width={50} />
          <span className="md:max-w-[150px]">Sites responsivos</span>
        </div>
      </motion.div>
    </section>
  )
}