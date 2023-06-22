import Link from "next/link"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Menu({ isVisible, onClose }) {
  return (
    <div className={`${isVisible ? 'flex' : 'hidden'} fixed inset-0 w-screen h-screen md:hidden`}>
      <div onClick={onClose} className="bg-black/40 w-[20%] h-screen"></div>
      <div className="w-[80%] h-screen fixed right-0 shadow-md px-5 py-8 bg-gradient-to-b from-[#E6E7FF] to-[#e6ecffec]">
        <div className="flex items-center justify-center mb-10">
          <span className={`${outfit.className} text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500`}>
            {"<Gabriel.dev />"}
          </span>
        </div>

        <nav className="flex flex-col items-center justify-between">
          <span className="text-blue-900 text-2xl font-light mb-8">
            Navegue
          </span>
          
          <div className="flex flex-col items-center justify-start gap-4">
            <Link href="">
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Home
              </button>
            </Link>

            <Link href="">
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Sobre mim
              </button>
            </Link>

            <Link href="">
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Projetos
              </button>
            </Link>

            <Link href="">
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Contatos
              </button>
            </Link>

            {/* <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2 mt-40">
              Modo escuro
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  )
}