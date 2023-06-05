"use client"
import Link from "next/link"
import { Outfit } from "next/font/google"
import { useEffect, useState } from "react"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <header className={`w-screen flex flex-row justify-centerf fixed z-10 transition-all ease-in-out duration-500 delay-100 ${ scrolled ? 'bg-slate-200/70 backdrop-blur drop-shadow-sm': ''}`}>
            <div className="w-full max-w-7xl px-4 py-7 flex flex-row justify-between items-center">
                <p className={`${outfit.className} text-2xl bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500`}>
                    {"<Gabriel.dev />"}
                </p>

                <nav>
                    <ul className="flex flex-row gap-8 font-semibold text-slate-700">
                        <li><Link href="">Home</Link></li>
                        <li><Link href="">Sobre mim</Link></li>
                        <li><Link href="">Projetos</Link></li>
                        <li><Link href="">Contatos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}