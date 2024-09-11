"use client";
import Image from "next/image";
import Link from "next/link";
import profilePicLight from "../../../public/images/lightmode-avatar.png";
import profilePicDark from "../../../public/images/darkmode-avatar.png";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";
import Cards from "./Cards";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Aboutme() {
  const baseDelay = 0.2;
  
  return (
    <div id="aboutMe" className="flex h-full w-full flex-col items-center">
      <section className="mt-0 flex h-full w-full flex-col items-center justify-center bg-white drop-shadow dark:bg-black/60 md:mt-28 md:h-[55vh]">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.15 }}
          >
            <div className="w-[235px] inline-flex dark:hidden md:max-w-[335px] md:w-full">
              <Image src={profilePicLight} alt="foto de perfil" width={335} />
            </div>

            <div className="hidden w-[235px] dark:inline-flex md:max-w-[335px] md:w-full">
              <Image src={profilePicDark} alt="foto de perfil" width={335} />
            </div>
          </motion.div>

          <div className="flex max-w-2xl flex-col gap-5 pr-4 will-change-transform">
            <motion.h3
              className={`${outfit.className} text-center text-3xl font-semibold text-[#6e6ad2] md:text-left`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: baseDelay * 2 }}
            >
              Sobre mim
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: baseDelay * 3 }}
              className="text-justify text-sm dark:text-slate-50 md:text-base"
            >
              Meu nome é Gabriel Silva Feitosa, sou apaixonado por tecnologia e
              programação. Atualmente estou me formando em <b>Ciência da
              Computação.</b>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: baseDelay * 4 }}
              className="text-justify text-sm dark:text-slate-50 md:text-base"
            >
              Sou <b>Desenvolvedor Web</b> com foco em <b>front-end.</b> Gosto de criar
              interfaces e transforma-las em código, buscando sempre um
              equilíbrio entre beleza e boa performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: baseDelay * 5 }}
              className="text-justify text-sm dark:text-slate-50 md:text-base"
            >
              Além disso, estou expandindo meus conhecimentos para o mundo <b>back-end</b> e <b>mobile</b> por meio do <b>NodeJS</b> e <b>React Native.</b>
            </motion.p>

            <Link href="/Fullstack-Gabriel-Feitosa.pdf" target="blank">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: baseDelay * 6 }}
                className="flex w-32 flex-row justify-center gap-2 rounded bg-[#6e6ad2] px-4 py-2 text-slate-50 drop-shadow duration-200 hover:scale-105 hover:bg-[#6e6ad2]/80 hover:text-white hover:ease-in-out"
              >
                Currículo
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      <Cards />
    </div>
  );
}
