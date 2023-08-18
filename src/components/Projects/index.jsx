import { Outfit } from 'next/font/google'
import Carousel from './Carousel'

const outfit = Outfit({
  subsets: ['latin'],
})

export default function Projects() {
  return (
    <section id="projects" className="mt-40 md:mt-10 w-full h-screen flex flex-col items-center justify-start">
      <div className="mt-20 md:mt-12 flex flex-col items-center">
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
      <div className="mt-5 md:mt-20 w-7xl overflow-x-hidden">
        <Carousel className="flex flex-row items-center justify-center" />
      </div>
    </section>
  )
}
