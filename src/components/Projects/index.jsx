import { Outfit } from 'next/font/google'
import NewCarousel from './NewCarousel'

const outfit = Outfit({
  subsets: ['latin'],
})

export default function Projects() {
  return (
    <section id="projects" className="w-full h-full flex flex-col items-center justify-start pb-36">
      <div className="mt-20 flex flex-col items-center">
        <span
          className={`${outfit.className} font-semibold text-[#6e6ad2] mb-2`}
        >
          ESTUDOS DE CASO
        </span>

        <h3
          className={`${outfit.className} font-semibold text-blue-950 dark:text-slate-50 text-2xl md:text-3xl`}
        >
          Projetos recentes
        </h3>
      </div>
      <div className="mt-5 md:mt-16 w-full max-w-5xl p-2 overflow-hidden">
        <NewCarousel />
      </div>
    </section>
  )
}
