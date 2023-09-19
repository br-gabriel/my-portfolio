'use client'
import Link from 'next/link'
import Image from 'next/image'
import { projectsCards } from './ProjectsData.json'
import { Outfit } from 'next/font/google'
import { FaGithub } from 'react-icons/fa'
import { GoLinkExternal } from 'react-icons/go'
import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import cripto from '../../../public/images/cripto.png'
import habits from '../../../public/images/habits.png'
import finans from '../../../public/images/finans.png'
import dtmoney from '../../../public/images/dtmoney.png'

const outfit = Outfit({
  subsets: ['latin'],
})

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectsCards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projectsCards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const selectImage = (index) => {
    const images = [
      cripto,
      habits,
      finans,
      dtmoney
    ];

    return images[index]
  }

  return(
    <div className='w-[22em] md:w-[26em] lg:w-[64em] h-[27em] md:h-[35em] lg:h-[25em] flex items-center justify-center relative group'>
      <div className='w-[87%] bg-white dark:bg-black/80 h-[97%] rounded-md drop-shadow-md flex flex-col lg:flex-row items-center lg:justify-between'>
        <div className='relative mt-4 w-[90%] h-[80%] md:h-[60%] lg:mt-0 lg:w-full lg:h-full'>
          <Image src={selectImage(currentIndex)} alt={projectsCards[currentIndex].image.alt} fill={true} className='rounded-md lg:rounded-r-none' />
        </div>
        <div className='flex flex-col items-center justify-center h-full md:w-[320px] lg:w-[445px]'>
          <h3 className={`${outfit.className} text-blue-950 dark:text-slate-100 font-semibold text-xl text-center my-2 md:my-4`}>{projectsCards[currentIndex].title}</h3>
          <span className='w-[90%] max-h-[7em] md:max-h-[9em] overflow-hidden dark:text-slate-50'>
            {projectsCards[currentIndex].description}
          </span>

          {projectsCards[currentIndex].links.secondLink === "" ?
            <div className='flex items-center justify-center w-[90%] mt-auto mb-6'>
              <Link href={projectsCards[currentIndex].links.firstLink} target='blank' className='w-full'>
                <button className='w-full flex flex-row justify-center items-center gap-2 bg-[#6e6ad2] border border-[#6e6ad2] text-white px-3 py-1 rounded drop-shadow duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out hover:scale-105'>
                  <FaGithub size={19} />
                  Github
                </button>
              </Link>
            </div>
            :
            <div className='flex items-center justify-center w-[90%] mt-auto mb-6 gap-4 md:gap-2'>
              <Link href={projectsCards[currentIndex].links.firstLink} target='blank'>
                <button className='w-full min-w-[135px] flex flex-row justify-center items-center gap-2 bg-[#6e6ad2] border border-[#6e6ad2] text-slate-50 px-3 py-1 rounded drop-shadow duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out hover:scale-105'>
                  <FaGithub size={19} />
                  Github
                </button>
              </Link>

              <Link href={projectsCards[currentIndex].links.secondLink} target='blank'>
                <button className='w-full min-w-[135px] md:min-w flex flex-row justify-center items-center gap-2 bg-white dark:bg-transparent text-[#6e6ad2] dark:text-white px-3 py-1 rounded border border-[#6e6ad2] drop-shadow duration-200 hover:text-[#6e6ad2]/80 hover:border-[#6e6ad2]/80 hover:ease-in-out hover:scale-105'>
                  <GoLinkExternal size={19} />
                  Live demo
                </button>
              </Link>
            </div>
          }
        </div>
      </div>

      <div className='group:block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-4 lg:left-4 text-xl p-2 text-[#6e6ad2] cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='group:block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-4 lg:right-4 text-xl p-2 text-[#6e6ad2] cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  )
}