'use client'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useEffect, useState } from 'react'

export default function ThemeSwitchBtn() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const userPrefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

    const savedTheme = localStorage.getItem('theme')

    setTheme(savedTheme || (userPrefersDark ? 'dark' : 'light'))

    document.documentElement.classList.add(savedTheme || (userPrefersDark ? 'dark' : 'light'))
  }, [])

  function toogleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    localStorage.setItem('theme', newTheme)

    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
  }

  return (
    <button onClick={toogleTheme}>
      {theme === 'dark' ? 
        <div className='w-60 md:w-auto bg-[#6e6ad2b0] md:bg-transparent rounded px-10 md:px-2 py-2 md:py-0 cursor-pointer flex flex-row items-center justify-center gap-2'>
          <BiSun size={22} fill='#f8fafc' />
          <span className='dark:text-white md:hidden'>
            Modo claro
          </span> 
        </div>
        : 
        <div className='w-60 md:w-auto bg-[#cad2fea2] md:bg-transparent rounded px-10 md:px-2 py-2 md:py-0 cursor-pointer flex flex-row items-center justify-center gap-2'>
          <BiMoon size={22} fill='#525e70 ' />
          <span className='md:hidden'>
            Modo escuro
          </span>
        </div>
      }
    </button>
  )
}