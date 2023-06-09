import Image from "next/image"
import mobileSVG from "../../public/mobile.svg"
import nextjsSVG from "../../public/nextjs.svg"
import figmaSVG from "../../public/figma.svg"

export default function Cards() {
    return (
        <section className="max-w-7xl w-full flex flex-row items-center justify-center gap-4 mt-12 px-4">
            <div className="min-w-[350px] h-36 bg-white drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                <Image src={figmaSVG} width={50} />
                <span className="max-w-[150px]">Criação de design feito com Figma</span>
            </div>
            <div className="min-w-[350px] h-36 bg-white drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                <Image src={nextjsSVG} width={70} />
                <span className="max-w-[150px]">Sites performáticos utilizando NextJS</span>
            </div>
            <div className="min-w-[350px] h-36 bg-white drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                <Image src={mobileSVG} width={50} />
                <span className="max-w-[150px]">Sites responsivos</span>
            </div>
        </section>
    )
}