import Link from 'next/link'
import { Outfit } from "next/font/google"
import Head from 'next/head'

const outfit = Outfit({
  subsets: ['latin']
})

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-[#E4E6FF] via-white to-[#E4EBFF]">
      <div className='max-w-md flex flex-col justify-center items-center'>
        <h2 className={`${outfit.className}  mb-6 text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500`}>
          404
        </h2>

        <h3 className={`${outfit.className} text-blue-950 text-3xl font-semibold mb-6`}>
          Ops! página não encontrada
        </h3>

        <p className='text-slate-500 font-light text-center mb-12'>
          Volte para a página anterior ou clique no botão abaixo para voltar para a página inicial.
        </p>

        <Link href="/">
          <button className='text-white bg-slate-500 px-6 py-2 rounded drop-shadow  duration-200 hover:bg-slate-500/80 hover:ease-in-out hover:scale-105'>
            Voltar
          </button>
        </Link>
      </div>
    </div>
  )
}