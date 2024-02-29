"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Outfit } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import cripto from "../../../public/images/cripto.png";
import habits from "../../../public/images/habits.png";
import finans from "../../../public/images/finans.png";
import dtmoney from "../../../public/images/dtmoney.png";

import "swiper/css";
import { Autoplay } from 'swiper/modules';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function NewCarousel() {
  return (
    <>
      <Swiper className="mySwiper rounded-lg" modules={[Autoplay]} loop={true} slidesPerView={1} spaceBetween={30} autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}>

        <SwiperSlide>
          <div className="w-full min-h-[359px] flex flex-row items-center justify-center">
            <div className="w-4/6 min-h-[359px]">
              <Image src={cripto} alt="Banner do aplicativo cripto tracker" className="rounded-l-lg" />
            </div>

            <div className="w-2/6 flex flex-col items-center justify-between min-h-[359px] rounded-r-lg bg-white dark:bg-black/70">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-2 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Cripto Tracker App
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Aplicativo para acompanhar as principais informações de
                  criptomoedas.
                </p>
              </div>

              <div className="w-[90%] flex flex-row items-center gap-2">
                <Link href={"https://github.com/br-gabriel/cripto-app"} target='blank' className="w-full">
                <button className="w-full flex flex-row justify-center items-center gap-2 bg-[#6e6ad2] border border-[#6e6ad2] text-white px-3 py-1 mb-5 rounded drop-shadow duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out hover:scale-105">
                  <FaGithub size={19} />
                  Github
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full min-h-[359px] flex flex-row items-center justify-center">
            <div className="w-4/6 min-h-[359px]">
              <Image src={habits} alt="Banner do aplicativo habits" className="rounded-l-lg" />
            </div>

            <div className="w-2/6 flex flex-col items-center justify-between min-h-[359px] rounded-r-lg bg-white dark:bg-black/70">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-2 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Habit App
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Site e aplicativo de acompanhamento de hábitos, desenvolvida durante a primera NLW da Rocketseat de 2023.
                </p>
              </div>

              <div className="w-[90%] flex flex-row items-center gap-2">
                <Link href={"https://github.com/br-gabriel/NLW-Habit-Tracker"} target='blank' className="w-full">
                <button className="w-full flex flex-row justify-center items-center gap-2 bg-[#6e6ad2] border border-[#6e6ad2] text-white px-3 py-1 mb-5 rounded drop-shadow duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out hover:scale-105">
                  <FaGithub size={19} />
                  Github
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full min-h-[359px] flex flex-row items-center justify-center">
            <div className="w-4/6 min-h-[359px]">
              <Image src={finans} alt="Banner do site finans" className="rounded-l-lg" />
            </div>

            <div className="w-2/6 flex flex-col items-center justify-between min-h-[359px] rounded-r-lg bg-white dark:bg-black/70">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-2 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Site Finans
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Site de uma instituição financeira fictícia, criada para treinar os conceitos aprendidos com Bootstrap
                </p>
              </div>

              <div className="flex items-center justify-center w-[90%] mt-auto mb-6 gap-4 md:gap-2">
                <Link href={"https://github.com/br-gabriel/Site-com-bootstrap-4"} target='blank' className="w-full">
                <button className="w-full min-w-[135px] flex flex-row justify-center items-center gap-2 bg-[#6e6ad2] border border-[#6e6ad2] text-slate-50 px-3 py-1 rounded drop-shadow duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out hover:scale-105">
                  <FaGithub size={19} />
                  Github
                </button>
                </Link>

                <Link href={"https://br-gabriel.github.io/Site-com-bootstrap-4/"} target='blank' className="w-full">
                <button className="w-full min-w-[135px] md:min-w flex flex-row justify-center items-center gap-2 bg-white dark:bg-transparent text-[#6e6ad2] dark:text-white px-3 py-1 rounded border border-[#6e6ad2] drop-shadow duration-200 hover:text-[#6e6ad2]/80 hover:border-[#6e6ad2]/80 hover:ease-in-out hover:scale-105">
                  <GoLinkExternal size={19} />
                  Live demo
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full min-h-[359px] flex flex-row items-center justify-center">
            <div className="w-4/6 min-h-[359px]">
              <Image src={dtmoney} alt="Banner do site de gestor de finanças" className="rounded-l-lg" />
            </div>

            <div className="w-2/6 flex flex-col items-center justify-between min-h-[359px] rounded-r-lg bg-white dark:bg-black/70">
              <div className="flex flex-col items-center">
                <h3
                  className={`${outfit.className} my-2 text-center text-xl font-semibold text-blue-950 dark:text-slate-100 md:my-4`}
                >
                  Gestor Financeiro
                </h3>
                <p className="max-h-[7em] w-[93%] overflow-hidden dark:text-slate-50 md:max-h-[9em]">
                  Um projeto que armazena o histórico de entrada e saída de valores e calcula o saldo final.
                </p>
              </div>

              <div className="flex items-center justify-center w-[90%] mt-auto mb-6 gap-4 md:gap-2">
                <Link href={"https://github.com/br-gabriel/dtmoney-finance"} target='blank' className="w-full">
                <button className="w-full min-w-[135px] flex flex-row justify-center items-center gap-2 bg-[#6e6ad2] border border-[#6e6ad2] text-slate-50 px-3 py-1 rounded drop-shadow duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out hover:scale-105">
                  <FaGithub size={19} />
                  Github
                </button>
                </Link>

                <Link href={"https://effulgent-crepe-8e024f.netlify.app"} target='blank' className="w-full">
                <button className="w-full min-w-[135px] md:min-w flex flex-row justify-center items-center gap-2 bg-white dark:bg-transparent text-[#6e6ad2] dark:text-white px-3 py-1 rounded border border-[#6e6ad2] drop-shadow duration-200 hover:text-[#6e6ad2]/80 hover:border-[#6e6ad2]/80 hover:ease-in-out hover:scale-105">
                  <GoLinkExternal size={19} />
                  Live demo
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
