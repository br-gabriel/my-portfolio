import Link from "next/link"
import { Outfit } from "next/font/google"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const outfit = Outfit({
    subsets: ['latin']
})

export default function Footer() {
    return (
        <footer className="w-full flex justify-center bg-black">
            <div className="w-full max-w-7xl px-4 py-5">
                <h3 className={`${outfit.className} text-2xl bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-violet-500`}>
                    Vamos trabalhar juntos!
                </h3>

                <ul className="text-white mt-6 ml-4 flex flex-col gap-2">
                    <li className="flex flex-row gap-4">
                        <FaWhatsapp size={20}/>
                        (68) 99249-0473
                    </li>
                    <li className="flex flex-row gap-4">
                        <MdEmail size={20}/>
                        contato.gabrielfeitosa@gmail.com
                    </li>
                    <li className="flex flex-row gap-4">
                        <FaLinkedin size={20}/>
                        <Link href="">Linkedin</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}