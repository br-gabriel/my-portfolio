import { Outfit } from "next/font/google"
import Carousel from "./CarouselProjects"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Projects() {
    return (
        <section className="pt-20 w-full h-screen flex flex-col items-center justify-start">
            <span className={`${outfit.className} font-semibold text-[#6e6ad2] mb-2`}>
                ESTUDOS DE CASO
            </span>
            <h3 className={`${outfit.className} font-semibold text-blue-950 text-3xl`}>
                Projetos recentes
            </h3>

            <div className="mt-12 w-7xl">
                <Carousel  className="flex flex-row items-center justify-center"/>
            </div>
        </section>
    )
}