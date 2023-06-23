import { FiMoon } from "react-icons/fi"
import { Outfit } from "next/font/google"
import { Link, animateScroll as scroll } from 'react-scroll'

const outfit = Outfit({
  subsets: ['latin']
})

export default function Menu({ isVisible, onClose }) {
  return (
    <div onClick={onClose} className={`${isVisible ? 'flex' : 'hidden'} fixed bg-black/50 inset-0 w-screen h-screen md:hidden`}>
      <div onClick={(e) => e.stopPropagation()} className="w-[80%] h-screen fixed right-0 shadow-md px-5 py-8 bg-gradient-to-b from-[#E6E7FF] to-[#e6ecffec]">
        <div className="flex items-center justify-center mb-10">
          <span className={`${outfit.className} text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500`}>
            {"<Gabriel.dev />"}
          </span>
        </div>

        <nav className="flex flex-col items-center justify-between">
          <span className="text-slate-800 text-2xl font-light mb-8">
            Navegue
          </span>
          
          <div className="flex flex-col items-center justify-start gap-4">
            <Link to="home" smooth={true} duration={1000} onClick={onClose}>
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Home
              </button>
            </Link>

            <Link to="aboutMe" offset={-70} smooth={true} duration={1000} onClick={onClose}>
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Sobre mim
              </button>
            </Link>

            <Link to="projects" offset={-40} smooth={true} duration={1000} onClick={onClose}>
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Projetos
              </button>
            </Link>

            <Link to="contacts" smooth={true} duration={1000} onClick={onClose}>
              <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2">
                Contatos
              </button>
            </Link>

            {/* <button className="w-60 bg-[#cad2fea2] rounded px-10 py-2 mt-40 flex flex-row items-center justify-center gap-2">
              <FiMoon size={22} />
              Modo escuro
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  )
}