"use client"
import Link from 'next/link'
import Image from 'next/image'
import { cards } from '../ProjectsData.json'
import { register } from 'swiper/element/bundle'
import { Outfit } from 'next/font/google'
import { FaGithub } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"

const outfit = Outfit({
    subsets: ['latin']
})

register();

export default function Carousel() {
    return (
        <div className='w-[1120px] h-[500px] flex items-center justify-center'>
            <swiper-container
                space-between="-90"
                slides-per-view="2"
                navigation="true"
                pagination="false"
                loop="true"
                autoplay="true"
                speed="500"
            >
                {cards.map((card) => (
                    <swiper-slide key={card.title}>
                        <div className='flex justify-center'>
                            <div className='flex flex-col items-center h-[500px] w-[26em] p-4 mb-2 rounded-lg bg-white drop-shadow-md relative'>
                                <Image src={card.image.url} alt={card.image.alt} width={400} height={320} className='rounded-lg'/>
                                
                                <div className='bg-white pt-4 h-full flex flex-col justify-between items-center'>
                                    <div>
                                        <h3 className={`${outfit.className} text-blue-950 font-semibold text-xl text-center mb-4`}>
                                            {card.title}
                                        </h3>

                                        <div className='max-h-[5em] w-[100%] overflow-y-auto'>
                                            <span>
                                                {card.description}
                                            </span>
                                        </div>
                                    </div>

                                    {card.links.secondLink === "" ? 
                                        <div className='flex flex-row items-center justify-between w-[100%] mt-4'>
                                            <Link href={card.links.firstLink} target='blank' className='w-full'>
                                                <button className='w-full flex flex-row justify-center items-center gap-3 bg-slate-500 border border-slate-500  text-slate-50 px-3 py-1 rounded drop-shadow duration-200 hover:bg-slate-500/80 hover:ease-in-out hover:scale-105'>
                                                    <FaGithub size={19} />
                                                    Github
                                                </button>
                                            </Link>
                                        </div>
                                    :
                                        <div className='flex flex-row items-center justify-center gap-6 w-[100%] mt-4'>
                                            <Link href={card.links.firstLink} target='blank'>
                                                <button className='w-40 flex flex-row justify-center items-center gap-3 bg-slate-500 border border-slate-500  text-slate-50 px-3 py-1 rounded drop-shadow duration-200 hover:bg-slate-500/80 hover:ease-in-out hover:scale-105'>
                                                    <FaGithub size={19} />
                                                    Github
                                                </button>
                                            </Link>

                                            <Link href={card.links.secondLink} target='blank'>
                                                <button className='w-40 flex flex-row justify-center items-center gap-3 bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow duration-200 hover:text-slate-500/80 hover:border-slate-500/80 hover:ease-in-out hover:scale-105'>
                                                    <GoLinkExternal size={19} />
                                                    Live demo
                                                </button>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
        </div>
  );
};