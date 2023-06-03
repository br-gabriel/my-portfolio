import { Outfit } from "next/font/google"
import { LinkedinIcon } from "./Icons/Linkedin"

const outfit = Outfit({
  subsets: ['latin']
})


export default function Homepage() {
    return (
        <main className="w-screen h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-violet-200 from-0% via-white from-30% to-sky-100 from-80%">
            <div className={outfit.className}>
                <h1 className="text-blue-950 text-7xl font-semibold text-center">Seu próximo desenvolvedor</h1>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-500 text-7xl font-black text-center mt-4">Fullstack ;)</h1>
            </div>

            <p className="text-slate-600 font-light text-center max-w-lg leading-5 mt-8">
                Me chamo Gabriel Feitosa e sou desenvolvedor fullstack React, Node e React Native, saiba mais sobre mim.
            </p>

            <div className="flex gap-4 mt-8">
                <button className="bg-slate-500 text-slate-50 px-3 py-1 rounded drop-shadow">Linked In</button>
                <button className="bg-white text-slate-500 px-3 py-1 rounded border border-slate-500 drop-shadow">Github</button>
            </div>

            <div className="bg-violet-50 text-slate-500 rounded-3xl w-full min-w-sm max-w-sm px-8 py-1 flex flex-row justify-center items-center gap-3 absolute bottom-20 drop-shadow-sm">
                <div className="w-3 h-3 rounded-xl bg-green-500"></div>
                <p>Disponível para trabalhos freelance!</p>
            </div>
        </main>
    )
}