"use client";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/images/profilePic.png";
import { IoLocationSharp } from "react-icons/io5";
import { Outfit } from "next/font/google";
import Cards from "./Cards";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Aboutme() {
  const baseDelay = 0.2;

  return (
    <div id="aboutMe" className="flex h-full w-full flex-col items-center px-2">
      <section className="mt-0 flex h-full w-full max-w-[69.5em] flex-col items-center justify-center rounded-xl bg-white px-5 drop-shadow dark:bg-black/60 md:mt-28">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-8">
          <div className="flex w-full items-center gap-4">
            <Image src={profilePic} alt="foto de perfil" width={80} />
            <div>
              <h3
                className={`${outfit.className} text-xl font-semibold text-gray-800 dark:text-white`}
              >
                Gabriel Feitosa
              </h3>
              <div className="flex items-center gap-1">
                <IoLocationSharp className="text-[#6e6ad2]" />
                <span className="text-sm font-light dark:text-white">
                  Curitiba, PR - Brasil
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3
              className={`${outfit.className} text-center text-3xl font-semibold text-gray-800 dark:text-white md:text-left`}
            >
              Sobre mim
            </h3>

            <p className="text-justify text-sm dark:text-slate-50 md:text-base">
              Meu nome é Gabriel, sou estudante de <b>Ciência da Computação</b>.
              Tenho experiência em desenvolvimento web, com foco no{" "}
              <b>front-end</b>, utilizando ferramentas como{" "}
              <b>React, Tailwind e Styled Components</b> para criar interfaces
              modernas e responsivas.
            </p>

            <p className="text-justify text-sm dark:text-slate-50 md:text-base">
              Atualmente, estou expandindo minha atuação para o desenvolvimento{" "}
              <b>full-stack</b>, aprimorando meus conhecimentos em{" "}
              <b>
                Node.js, React Native e bancos de dados como Postgres e MongoDB.
              </b>{" "}
              Além disso, tenho experiência com design e <b>SEO</b>, usando{" "}
              <b>Figma</b> para projetos visuais.
            </p>

            <p className="text-justify text-sm dark:text-slate-50 md:text-base">
              Busco constantemente aperfeiçoar minhas habilidades e contribuir
              com <b>soluções criativas</b> que unam design atraente e funcionalidade.
            </p>

            <Link href="/Fullstack-Gabriel-Feitosa.pdf" target="blank">
              <button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: baseDelay * 6 }}
                className="flex w-32 flex-row justify-center gap-2 rounded bg-[#6e6ad2] px-4 py-2 text-slate-50 drop-shadow duration-200 hover:scale-105 hover:bg-[#6e6ad2]/80 hover:text-white hover:ease-in-out"
              >
                Currículo
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Cards />
    </div>
  );
}
