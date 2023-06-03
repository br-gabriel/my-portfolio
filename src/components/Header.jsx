import Link from "next/link";

export default function Header() {
    return (
        <header>
            <p>
                {"<Gabriel.dev />"}
            </p>

            <nav>
                <ul>
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">Sobre mim</Link></li>
                    <li><Link href="">Projetos</Link></li>
                    <li><Link href="">Contatos</Link></li>
                </ul>
            </nav>
        </header>
    )
}