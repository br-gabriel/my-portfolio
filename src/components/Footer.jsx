"use client"
import Link from "next/link"
import { Outfit } from "next/font/google"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { GoLinkExternal } from "react-icons/go"
import { BiCopy } from "react-icons/bi"

const outfit = Outfit({
    subsets: ['latin']
})

export default function Footer() {   
    const handleCopyText = () => {
        navigator.clipboard.writeText("contato.gabrielfeitosa@gmail.com")
    }
    
    return (
        <footer id="contacts" className="w-full flex justify-center bg-black">
            <div className="w-full max-w-7xl px-4 py-5">
                <h3 className={`${outfit.className} text-2xl bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-violet-500`}>
                    Vamos trabalhar juntos!
                </h3>

                <ul className="text-white mt-6 ml-4 flex flex-col gap-2">
                    <li className="flex flex-row gap-4">
                        <Link href="https://wa.me/5568992490473" target="blank" className="flex justify-center items-center gap-2 hover:text-blue-500 transition ease-in-out">
                            <FaWhatsapp size={20} />
                            (68) 99249-0473
                            <GoLinkExternal size={14} />
                        </Link>
                    </li>
                    <li className="flex flex-row gap-4">
                        <button onClick={handleCopyText} className="flex justify-center items-center gap-2 hover:text-blue-500 transition ease-in-out">
                            <MdEmail size={20} />
                            contato.gabrielfeitosa@gmail.com
                            <BiCopy size={14} />
                        </button>
                    </li>
                    <li className="flex flex-row gap-4">
                        <Link href="https://www.linkedin.com/in/gabriel-silva-feitosa/" target="blank" className="flex justify-center items-center gap-2 hover:text-blue-500 transition ease-in-out">
                            <FaLinkedin size={20} />
                            Linkedin
                            <GoLinkExternal size={14} />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}