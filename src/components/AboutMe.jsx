import Image from "next/image"
import profilePicLight from "../../public/images/lightmode-avatar.png"
import profilePicDark from "../../public/images/darkmode-avatar.png"
import { Outfit } from "next/font/google"
import { BsDownload } from "react-icons/bs"
import Cards from "./Cards"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Aboutme() {
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <section className="bg-white h-3/5 w-full mt-36 flex flex-col items-center justify-center drop-shadow">
                <div className="max-w-7xl w-full px-4 py-8 flex flex-row items-center justify-center gap-12">
                    
                    <Image src={profilePicLight} alt="foto de perfil" width={335}/>

                    <div className="flex flex-col max-w-2xl pr-4 gap-5">
                        <h3 className={`${outfit.className} text-[#6e6ad2] font-semibold text-3xl`}>
                            Sobre mim
                        </h3>

                        <p>
                            Meu nome é Gabriel Silva Feitosa, tenho 25 anos e sou apaixonado por tecnologia e programação.
                        </p>

                        <p>
                            Sou um Desenvolvedor Web com foco em desenvolvimento frontend. Gosto de criar interfaces e transforma-las em código, buscando sempre deixar o mais fíel possível ao design original e com boa performance.
                        </p>

                        <p>
                            Além disso, estou expandindo meus conhecimentos para o mundo backend e mobile por meio do NodeJS e React Native.
                        </p>

                        <button className="w-32 px-4 py-2 bg-[#6e6ad2] text-slate-50 rounded drop-shadow flex flex-row justify-center gap-2 duration-200 hover:bg-[#6e6ad2]/80 hover:ease-in-out  hover:scale-105">
                            Currículo
                            <BsDownload size={20}/>
                        </button>
                    </div>
                </div>
            </section>

            <Cards />
        </div>
    )
}