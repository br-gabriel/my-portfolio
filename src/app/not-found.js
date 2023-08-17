'use client'
import Link from 'next/link'
import { Outfit } from "next/font/google"
import { useState, useEffect } from 'react'

const outfit = Outfit({
  subsets: ['latin']
})

export default function NotFound() {
  const [theme, setTheme] = useState(null)
  
  useEffect(() => {
    const userPrefersDark = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const savedTheme = localStorage.getItem('theme')

    setTheme(savedTheme || (userPrefersDark ? 'dark' : 'light'))

    document.documentElement.classList.add(savedTheme || (userPrefersDark ? 'dark' : 'light'))
  }, [])
  
  return (
    <>
      <title>Página não encontrada</title>
      <div className="w-full h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-[#E4E6FF] dark:from-[#1F1E3B] via-white dark:via-black to-[#E4EBFF] dark:to-[#1E323B]">
        <div className='max-w-md flex flex-col justify-center items-center'>
          <h2 className={`${outfit.className}  mb-6 text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500`}>
            404
          </h2>

          <h3 className={`${outfit.className} text-blue-950 dark:text-slate-50 text-3xl font-semibold mb-6 text-center`}>
            Ops! página não encontrada
          </h3>

          <p className='text-slate-500 dark:text-slate-50 font-light text-center mb-12'>
            Volte para a página anterior ou clique no botão abaixo para voltar para a página inicial.
          </p>

          <Link href="/">
            <button className='text-white bg-slate-500 px-6 py-2 rounded drop-shadow  duration-200 hover:bg-slate-500/80 hover:ease-in-out hover:scale-105'>
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}