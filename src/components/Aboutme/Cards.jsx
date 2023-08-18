import Image from "next/image"
import mobileSVG from "../../../public/mobile.svg"
import nextjsSVG from "../../../public/nextjs.svg"
import figmaSVG from "../../../public/figma.svg"

export default function Cards() {
    return (
        <section className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-2 px-4 py-3">
            <div className="h-40 w-full p-2">
                <div className="min-w-[150px] md:min-w-[230px] h-36 bg-white dark:bg-black/80 dark:text-slate-50 drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                    <Image src={figmaSVG} alt="logo do Figma" width={50} />
                    <span className="max-w-[150px]">Criação de design feito com Figma</span>
                </div>
            </div>

            <div className="h-40 w-full p-2">
                <div className="min-w-[150px] md:min-w-[230px] h-36 bg-white dark:bg-black/80 dark:text-slate-50 drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                    <Image src={nextjsSVG} alt="logo do Next js" width={70} />
                    <span className="max-w-[150px]">Sites performáticos utilizando NextJS</span>
                </div>
            </div>

            <div className="h-40 w-full p-2">
                <div className="min-w-[150px] md:min-w-[230px] h-36 bg-white dark:bg-black/80 dark:text-slate-50 drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                    <Image src={mobileSVG} alt="icone de smartphone" width={50} />
                    <span className="max-w-[150px]">Sites responsivos</span>
                </div>
            </div>
        </section>
    )
}