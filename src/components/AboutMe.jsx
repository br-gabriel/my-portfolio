import { Outfit } from "next/font/google"
import { BsDownload } from "react-icons/bs"

const outfit = Outfit({
  subsets: ['latin']
})

export default function Aboutme() {
    return (
        <div className="w-screen h-screen">
            <section className="bg-white/90 h-3/5 w-screen mt-36 flex flex-col items-center justify-center drop-shadow">
                <div className="max-w-7xl w-full px-4 py-8 flex flex-row items-center justify-center gap-10 ">
                    {/* avatar */}
                    <div className="h-1/3 w-1/3 bg-gray-500 rounded-full"></div>
                    {/* texto */}
                    <div className="flex flex-col max-w-2xl pr-4 gap-5">
                        <h3 className={`${outfit.className} text-violet-700 font-semibold text-3xl`}>
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

                        <button className="w-32 px-4 py-2 bg-violet-700 text-slate-50 rounded drop-shadow flex flex-row justify-center gap-2">
                            Currículo
                            <BsDownload size={20}/>
                        </button>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}