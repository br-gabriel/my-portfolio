"use client";
import Image from "next/image";
import figmaSVG from "../../../public/figma.svg";
import nextjsSVG from "../../../public/nextjs.svg";
import mobileSVG from "../../../public/mobile.svg";
import { LayoutGroup, motion } from "framer-motion";

export default function Cards() {
  const baseDelay = 0.2;

  return (
    <section
      dra
      className="flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll p-4 drop-shadow-md will-change-transform scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-800 md:items-center md:justify-center md:overflow-hidden"
    >
      <LayoutGroup>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: baseDelay * 6 }}
          className="flex min-h-[120px] w-full min-w-[270px] max-w-[300px] snap-center items-center justify-center rounded-md bg-white p-4 text-black dark:bg-black dark:text-white md:max-w-[360px]"
        >
          <div className="flex items-center justify-center gap-6">
            <Image src={figmaSVG} alt="logo do Figma" width={50} />
            <span className="md:max-w-[150px]">
              Criação de design feito com Figma
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: baseDelay * 7 }}
          className="flex min-h-[120px] w-full min-w-[270px] max-w-[300px] snap-center items-center justify-center rounded-md bg-white p-4 text-black dark:bg-black dark:text-white md:max-w-[360px]"
        >
          <div className="flex items-center justify-center gap-6">
            <Image src={nextjsSVG} alt="logo do Next js" width={70} />
            <span className="md:max-w-[150px]">
              Sites performáticos utilizando NextJS
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: baseDelay * 8 }}
          className="flex min-h-[120px] w-full min-w-[270px] max-w-[300px] snap-center items-center justify-center rounded-md bg-white p-4 text-black dark:bg-black dark:text-white md:max-w-[360px]"
        >
          <div className="flex items-center justify-center gap-6">
            <Image src={mobileSVG} alt="Icone de smartphone" width={50} />
            <span className="md:max-w-[150px]">Sites responsivos</span>
          </div>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
