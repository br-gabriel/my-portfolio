'use client'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useEffect, useState } from 'react'

export function ThemeSwitchBtn() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    
  }, [])

  return (
    <button className=''>
      <BiMoon size={22} fill='#525e70'/>
    </button>
  )
}