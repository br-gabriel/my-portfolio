"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Outfit } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import cripto from "../../../public/images/cripto.png";
import habits from "../../../public/images/habits.png";
import todo from "../../../public/images/todo.png";
import dtmoney from "../../../public/images/dtmoney.png";

import "swiper/css";
import { Autoplay } from "swiper/modules";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function NewCarousel() {
  return (
    <div>
      <Swiper
        className="mySwiper rounded-lg"
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <div className="flex w-full flex-col justify-center md:flex-row">
            <div className="h-full md:w-4/6">
              <Image
                src={cripto}
                alt="Banner do aplicativo cripto tracker"
                className="h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            <div className="flex min-h-[250px] flex-col items-center justify-between rounded-b-lg bg-white dark:bg-black/70 md:w-2/6 md:rounded-b-none md:rounded-r-lg">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-3 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Cripto Tracker App
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Aplicativo para acompanhar as principais informações de
                  criptomoedas.
                </p>
              </div>

              <div className="flex w-[90%] flex-row items-center gap-2">
                <Link
                  href={"https://github.com/br-gabriel/cripto-app"}
                  target="blank"
                  className="w-full"
                >
                  <button className="mb-5 flex w-full flex-row items-center justify-center gap-2 rounded border border-[#6e6ad2] bg-[#6e6ad2] px-3 py-1 text-white drop-shadow duration-200 hover:scale-105 hover:bg-[#6e6ad2]/80 hover:ease-in-out">
                    <FaGithub size={19} />
                    Github
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-full flex-col justify-center md:flex-row">
            <div className="h-full md:w-4/6">
              <Image
                src={habits}
                alt="Banner do aplicativo habits"
                className="h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            <div className="flex min-h-[250px] flex-col items-center justify-between rounded-b-lg bg-white dark:bg-black/70 md:w-2/6 md:rounded-b-none md:rounded-r-lg">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-3 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Habit App
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Site e aplicativo de acompanhamento de hábitos, desenvolvida
                  durante a primera NLW da Rocketseat de 2023.
                </p>
              </div>

              <div className="flex w-[90%] flex-row items-center gap-2">
                <Link
                  href={"https://github.com/br-gabriel/NLW-Habit-Tracker"}
                  target="blank"
                  className="w-full"
                >
                  <button className="mb-5 flex w-full flex-row items-center justify-center gap-2 rounded border border-[#6e6ad2] bg-[#6e6ad2] px-3 py-1 text-white drop-shadow duration-200 hover:scale-105 hover:bg-[#6e6ad2]/80 hover:ease-in-out">
                    <FaGithub size={19} />
                    Github
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-full flex-col justify-center md:flex-row">
            <div className="h-full md:w-4/6">
              <Image
                src={todo}
                alt="Banner do projeto to do list"
                className="h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            <div className="flex min-h-[250px] flex-col items-center justify-between rounded-b-lg bg-white dark:bg-black/70 md:w-2/6 md:rounded-b-none md:rounded-r-lg">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-3 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Projeto Fullstack - To Do List
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Este projeto é uma To-Do List full stack feita com React,
                  Node.js, PostgreSQL e Docker, utilizando JWT e cookies para
                  autenticação em uma API RESTful.
                </p>
              </div>

              <div className="mb-6 mt-auto flex w-[90%]  items-center justify-center gap-2">
                <Link
                  href={"https://github.com/br-gabriel/todoPostgres-frontend"}
                  target="blank"
                  className="w-full"
                >
                  <button className="flex w-full flex-row items-center justify-center gap-2 rounded border border-[#6e6ad2] bg-[#6e6ad2] px-3 py-1 text-slate-50 drop-shadow duration-200 hover:scale-105 hover:bg-[#6e6ad2]/80 hover:ease-in-out">
                    <FaGithub size={19} />
                    Github
                  </button>
                </Link>

                <Link
                  href={"https://todo-postgres-frontend.vercel.app/"}
                  target="blank"
                  className="w-full"
                >
                  <button className="flex w-full flex-row items-center justify-center gap-2 rounded border border-[#6e6ad2] bg-white px-3 py-1 text-[#6e6ad2] drop-shadow duration-200 hover:scale-105 hover:border-[#6e6ad2]/80 hover:text-[#6e6ad2]/80 hover:ease-in-out dark:bg-transparent dark:text-white">
                    <GoLinkExternal size={19} />
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-full flex-col justify-center md:flex-row">
            <div className="h-full md:w-4/6">
              <Image
                src={dtmoney}
                alt="Banner do site de gestor de finanças"
                className="h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>

            <div className="flex min-h-[250px] flex-col items-center justify-between rounded-b-lg bg-white dark:bg-black/70 md:w-2/6 md:rounded-b-none md:rounded-r-lg">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-3 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Gestor Financeiro
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Um projeto que armazena o histórico de entrada e saída de
                  valores e calcula o saldo final.
                </p>
              </div>

              <div className="mb-6 mt-auto flex w-[90%]  items-center justify-center gap-2">
                <Link
                  href={"https://github.com/br-gabriel/dtmoney-finance"}
                  target="blank"
                  className="w-full"
                >
                  <button className="flex w-full flex-row items-center justify-center gap-2 rounded border border-[#6e6ad2] bg-[#6e6ad2] px-3 py-1 text-slate-50 drop-shadow duration-200 hover:scale-105 hover:bg-[#6e6ad2]/80 hover:ease-in-out">
                    <FaGithub size={19} />
                    Github
                  </button>
                </Link>

                <Link
                  href={"https://effulgent-crepe-8e024f.netlify.app"}
                  target="blank"
                  className="w-full"
                >
                  <button className="flex w-full flex-row items-center justify-center gap-2 rounded border border-[#6e6ad2] bg-white px-3 py-1 text-[#6e6ad2] drop-shadow duration-200 hover:scale-105 hover:border-[#6e6ad2]/80 hover:text-[#6e6ad2]/80 hover:ease-in-out dark:bg-transparent dark:text-white">
                    <GoLinkExternal size={19} />
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
