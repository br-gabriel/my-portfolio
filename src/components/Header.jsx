import Link from "next/link"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Header() {
    return (
        <header className="w-screen flex flex-row justify-center">
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