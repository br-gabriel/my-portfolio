"use client"
import { register } from 'swiper/element/bundle'
import { Outfit } from 'next/font/google'
import Image from 'next/image'
import criptoTrackerBanner from '../../public/images/criptotracker.png'
import habitsBanner from '../../public/images/habits.png'
import finansBanner from '../../public/images/finans.png'
import dtmoneyBanner from '../../public/images/dtmoney.png'
import { FaGithub } from "react-icons/fa"
import { GoLinkExternal } from "react-icons/go"

const outfit = Outfit({
    subsets: ['latin']
})

register();

export default function Carousel() {
  return (
    <div className='max-w-7xl w-full h-full flex flex-row justify-center items-center'>
        <swiper-container
            slides-per-view="1"
            navigation="true"
            pagination="false"
            loop="true"
            autoplay="true"
            speed="500"
        >
            <swiper-slide>
                  <div className='w-full h-[500px] flex flex-row items-center justify-center'>
                      <div className='max-w-[1150px] w-full h-full flex flex-row'>
                          <Image src={criptoTrackerBanner} alt='banner do app cripto tracker' className='w-full h-full rounded-l-lg' />

                          <div className='max-w-[350px] w-full h-full bg-white p-4 rounded-r-lg flex flex-col items-center justify-between'>
                              <div className='mt-4'>
                                  <h4 className={`${outfit.className} bold mb-4 text-2xl text-blue-950 text-center`}>
                                      Cripto Tracker App
                                  </h4>
                                  <span>
                                      Aplicativo criado com React Native que mostra as principais informações das cripto moedas lançadas no mercado...
                                  </span>
                              </div>

                              <div className="flex gap-2 mb-12">
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-slate-500 text-slate-50 px-3 py-1 rounded  drop-shadow">
                                      <FaGithub size={19} />
                                      Github
                                  </button>
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow">
                                      <GoLinkExternal size={19} />
                                      Live demo
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
            </swiper-slide>

            <swiper-slide>
                  <div className='w-full h-[500px] flex flex-row items-center justify-center'>
                      <div className='max-w-[1150px] w-full h-full flex flex-row'>
                          <Image src={habitsBanner} alt='banner do app de hábitos' className='w-full h-full rounded-l-lg' />

                          <div className='max-w-[350px] w-full h-full bg-white p-4 rounded-r-lg flex flex-col items-center justify-between'>
                              <div className='mt-4'>
                                  <h4 className={`${outfit.className} bold mb-4 text-2xl text-blue-950 text-center`}>
                                      Habit App
                                  </h4>
                                  <span>
                                      Aplicativo criado com React Native que mostra as principais informações das cripto moedas lançadas no mercado...
                                  </span>
                              </div>

                              <div className="flex gap-2 mb-12">
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-slate-500 text-slate-50 px-3 py-1 rounded  drop-shadow">
                                      <FaGithub size={19} />
                                      Github
                                  </button>
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow">
                                      <GoLinkExternal size={19} />
                                      Live demo
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
            </swiper-slide>

            <swiper-slide>
                  <div className='w-full h-[500px] flex flex-row items-center justify-center'>
                      <div className='max-w-[1150px] w-full h-full flex flex-row'>
                          <Image src={finansBanner} alt='banner do site finans - instituição financeira fictícia' className='w-full h-full rounded-l-lg' />

                          <div className='max-w-[350px] w-full h-full bg-white p-4 rounded-r-lg flex flex-col items-center justify-between'>
                              <div className='mt-4'>
                                  <h4 className={`${outfit.className} bold mb-4 text-2xl text-blue-950 text-center`}>
                                      Site Finans
                                  </h4>
                                  <span>
                                      Aplicativo criado com React Native que mostra as principais informações das cripto moedas lançadas no mercado...
                                  </span>
                              </div>

                              <div className="flex gap-2 mb-12">
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-slate-500 text-slate-50 px-3 py-1 rounded  drop-shadow">
                                      <FaGithub size={19} />
                                      Github
                                  </button>
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow">
                                      <GoLinkExternal size={19} />
                                      Live demo
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
            </swiper-slide>

            <swiper-slide>
                  <div className='w-full h-[500px] flex flex-row items-center justify-center'>
                      <div className='max-w-[1150px] w-full h-full flex flex-row'>
                          <Image src={dtmoneyBanner} alt='banner do site dt money - gestor financeiro' className='w-full h-full rounded-l-lg' />

                          <div className='max-w-[350px] w-full h-full bg-white p-4 rounded-r-lg flex flex-col items-center justify-between'>
                              <div className='mt-4'>
                                  <h4 className={`${outfit.className} bold mb-4 text-2xl text-blue-950 text-center`}>
                                      Dt Money
                                  </h4>
                                  <span>
                                      Aplicativo criado com React Native que mostra as principais informações das cripto moedas lançadas no mercado...
                                  </span>
                              </div>

                              <div className="flex gap-2 mb-12">
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-slate-500 text-slate-50 px-3 py-1 rounded  drop-shadow">
                                      <FaGithub size={19} />
                                      Github
                                  </button>
                                  <button className="w-36 flex flex-row justify-center items-center gap-3 bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow">
                                      <GoLinkExternal size={19} />
                                      Live demo
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
            </swiper-slide>
        </swiper-container>
    </div>
  );
};