"use client";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { BiCopy } from "react-icons/bi";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Footer() {
  const handleCopyText = () => {
    navigator.clipboard.writeText("contato.gabrielfeitosa@gmail.com");
    alert("E-mail copiado!");
  };

  return (
    <footer
      id="contacts"
      className="flex w-full items-center justify-center bg-black"
    >
      <div className="w-full max-w-7xl px-4 py-8">
        <h3
          className={`${outfit.className} bg-gradient-to-r from-blue-500 via-violet-500 to-violet-500 bg-clip-text text-2xl font-bold text-transparent`}
        >
          Vamos trabalhar juntos!
        </h3>

        <ul className="ml-4 mt-6 flex flex-col gap-2 text-white">
          <li className="flex flex-row gap-4">
            <Link
              href="https://wa.me/5568992490473"
              target="blank"
              className="flex items-center justify-center gap-2 transition ease-in-out hover:text-blue-500"
            >
              <FaWhatsapp size={20} />
              (68) 99249-0473
              <GoLinkExternal size={14} />
            </Link>
          </li>
          <li className="flex flex-row gap-4">
            <button
              onClick={handleCopyText}
              className="flex items-center justify-center gap-2 transition ease-in-out hover:text-blue-500"
            >
              <MdEmail size={20} />
              contato.gabrielfeitosa@gmail.com
              <BiCopy size={14} />
            </button>
          </li>
          <li className="flex flex-row gap-4">
            <Link
              href="https://www.linkedin.com/in/gabriel-silva-feitosa/"
              target="blank"
              className="flex items-center justify-center gap-2 transition ease-in-out hover:text-blue-500"
            >
              <FaLinkedin size={20} />
              Linkedin
              <GoLinkExternal size={14} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
