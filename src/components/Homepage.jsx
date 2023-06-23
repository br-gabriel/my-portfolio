import Link from "next/link"
import { Outfit } from "next/font/google"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Homepage() {
    return (
        <div id="home" className="h-screen flex flex-col justify-center items-center relative">
            <div className={outfit.className}>
                <h1 className="text-blue-950 text-5xl md:text-6xl font-semibold text-center">
                    Seu próximo
                </h1>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-500 text-5xl md:text-6xl font-black text-center mt-4">
                    Desenvolvedor Front-end
                </h1>
            </div>

            <p className="text-slate-600 font-light text-center text-sm md:text-base max-w-lg leading-5 mt-8">
                Me chamo Gabriel Feitosa e sou desenvolvedor front-end React, Node e React Native, saiba mais sobre mim.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link href="https://www.linkedin.com/in/gabriel-silva-feitosa/" target="blank">
                    <button className="w-36 flex flex-row justify-center items-center gap-3 bg-slate-500 border border-slate-500  text-slate-50 px-3 py-1 rounded drop-shadow duration-200 hover:bg-slate-500/80 hover:ease-in-out hover:scale-105">
                        <FaLinkedin size={19} />
                        Linkedin
                    </button>
                </Link>
                <Link href="https://github.com/br-gabriel" target="blank">
                    <button className="w-36 flex flex-row justify-center items-center gap-3 bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow duration-200 hover:text-slate-500/80 hover:border-slate-500/80 hover:ease-in-out hover:scale-105">
                        <FaGithub size={19}/>
                        Github
                    </button>
                </Link>
            </div>

            <div className="bg-violet-50 text-slate-500 rounded-3xl w-[24em] md:w-[25em] px-8 py-1 absolute bottom-20 drop-shadow text-sm md:text-base flex flex-row justify-center items-center gap-3">
                <span className="relative w-3 h-3 rounded-xl bg-green-500"></span>
                <span className="absolute left-[2.7em] md:left-[3.3em] opacity-75 animate-ping w-3 h-3 rounded-xl bg-green-500"></span>
                <p>Disponível para trabalhos freelance!</p>
            </div>
        </div>
    )
}