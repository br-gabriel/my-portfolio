"use client"
import Link from "next/link"
import { Outfit } from "next/font/google"
import { BiMenu } from "react-icons/bi"
import { useCallback, useEffect, useState } from "react"
import Menu from "./Menu"

const outfit = Outfit({
    subsets: ['latin']
})

export default function Header() {
    const [scrollPos, setScrollPos] = useState(0)
    const [scrollDir, setScrollDir] = useState('down')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = useCallback(() => {
        setIsMenuOpen(true)
    }, [])

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setScrollDir(currentScrollPos > scrollPos ? 'down' : 'up');
            setScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPos])

    return (
        <header className={`w-screen flex flex-row justify-center fixed z-10 ease-in-out transition-all duration-500 delay-100 ${scrollPos > 0 ? 'bg-gradient-to-r from-[#E4E6FF]/70 via-white/70 to-[#E4EBFF]/70 backdrop-blur drop-shadow-sm' : ''} ${scrollDir === 'down' || scrollPos === 0 ? 'transform translate-y-0' : '-translate-y-full'}`}>
            <div className="w-full max-w-7xl px-5 py-7 flex flex-row justify-between items-center">
                <span className={`${outfit.className} text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500`}>
                    {"<Gabriel.dev />"}
                </span>

                <nav>
                    <ul className="hidden md:flex flex-row gap-8 font-semibold text-slate-700">
                        <li><Link href="" className="hover:opacity-70 transition-all ease-in-out duration-500">Home</Link></li>
                        <li><Link href="" className="hover:opacity-70 transition-all ease-in-out duration-500">Sobre mim</Link></li>
                        <li><Link href="" className="hover:opacity-70 transition-all ease-in-out duration-500">Projetos</Link></li>
                        <li><Link href="" className="hover:opacity-70 transition-all ease-in-out duration-500">Contatos</Link></li>
                    </ul>
                </nav>

                <button className="p-1 md:hidden" onClick={openMenu}>
                    <BiMenu className="fill-[#6e6ad2] w-8 h-8" />
                </button>

                <Menu isVisible={isMenuOpen} onClose={closeMenu} />
            </div>
        </header>
    )
}