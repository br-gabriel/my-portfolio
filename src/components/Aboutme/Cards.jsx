"use client";
import Image from "next/image";
import figmaSVG from "../../../public/figma.svg";
import nextjsSVG from "../../../public/nextjs.svg";
import mobileSVG from "../../../public/mobile.svg";

export default function Cards() {
  return (
    <section
      className="flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll py-4 drop-shadow-md scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-800 md:items-center md:justify-center md:overflow-hidden"
    >
      <div className="flex min-h-[120px] w-full min-w-[270px] max-w-[300px] snap-center items-center justify-center rounded-xl bg-white p-4 text-black dark:bg-black dark:text-white md:max-w-[360px]">
        <div className="flex items-center justify-center gap-6">
          <Image src={figmaSVG} alt="logo do Figma" width={50} />
          <span className="md:max-w-[150px]">
            Criação de design feito com Figma
          </span>
        </div>
      </div>

      <div className="flex min-h-[120px] w-full min-w-[270px] max-w-[300px] snap-center items-center justify-center rounded-xl bg-white p-4 text-black dark:bg-black dark:text-white md:max-w-[360px]">
        <div className="flex items-center justify-center gap-6">
          <Image src={nextjsSVG} alt="logo do Next js" width={70} />
          <span className="md:max-w-[150px]">
            Sites performáticos utilizando NextJS
          </span>
        </div>
      </div>

      <div className="flex min-h-[120px] w-full min-w-[270px] max-w-[300px] snap-center items-center justify-center rounded-xl bg-white p-4 text-black dark:bg-black dark:text-white md:max-w-[360px]">
        <div className="flex items-center justify-center gap-6">
          <Image src={mobileSVG} alt="Icone de smartphone" width={50} />
          <span className="md:max-w-[150px]">Sites responsivos</span>
        </div>
      </div>
    </section>
  );
}
