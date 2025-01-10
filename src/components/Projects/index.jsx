"use client";
import { Outfit } from "next/font/google";
import NewCarousel from "./NewCarousel";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Projects() {
  const baseDelay = 0.2;

  return (
    <section
      className="flex h-full w-full flex-col items-center justify-start pb-36"
    >
      <div className="mt-20 flex flex-col items-center">
        <span
          id="projects"
          className={`${outfit.className} mb-2 font-semibold text-[#6e6ad2]`}
        >
          ESTUDOS DE CASO
        </span>

        <h3
          className={`${outfit.className} text-2xl font-semibold text-blue-950 dark:text-slate-50 md:text-3xl`}
        >
          Projetos recentes
        </h3>
      </div>
      <div className="mt-5 w-full max-w-5xl overflow-hidden p-2 md:mt-16">
        <NewCarousel />
      </div>
    </section>
  );
}
