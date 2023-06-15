"use client"
import Image from "next/image"
import mobileSVG from "../../public/mobile.svg"
import nextjsSVG from "../../public/nextjs.svg"
import figmaSVG from "../../public/figma.svg"
import { register } from "swiper/element"
import { useState, useEffect } from "react"

register()

export default function Cards() {   
    const [largura, setLargura] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setLargura(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="max-w-7xl w-full flex flex-row items-center justify-center gap-4 mt-12 px-4 py-3">
            {console.log(largura)}
            <swiper-container
                space-between="10"
                slides-per-view={largura > 800 ? 3 : 1}
                loop="true"
                autoplay="true"
                speed="500"
            >
                <swiper-slide>
                    <div className="h-40">
                        <div className="min-w-[350px] md:min-w-[250px] h-36 bg-white drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                            <Image src={figmaSVG} width={50} />
                            <span className="max-w-[150px]">Criação de design feito com Figma</span>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="min-w-[350px] md:min-w-[250px] h-36 bg-white drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                        <Image src={nextjsSVG} width={70} />
                        <span className="max-w-[150px]">Sites performáticos utilizando NextJS</span>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="min-w-[350px] md:min-w-[250px] sm:min-w-[150px] h-36 bg-white drop-shadow-md rounded-md flex flex-row items-center justify-center gap-5">
                        <Image src={mobileSVG} width={50} />
                        <span className="max-w-[150px]">Sites responsivos</span>
                    </div>
                </swiper-slide>
            </swiper-container>
        </section>
    )
}