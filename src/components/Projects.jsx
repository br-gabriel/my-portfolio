import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Projects() {
    return (
        <section className="bg-blue-200 w-full h-screen flex flex-col items-center justify-start">
            <span className={`${outfit.className} font-semibold text-[#6e6ad2] mb-2`}>
                ESTUDOS DE CASO
            </span>
            <h3 className={`${outfit.className} font-semibold text-blue-950 text-3xl`}>
                Projetos recentes
            </h3>
        </section>
    )
}