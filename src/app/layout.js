import './globals.css'
import { Space_Grotesk, Outfit } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Gabriel Feitosa — Desenvolvedor Full Stack',
  description: 'Portfólio de Gabriel Feitosa. Desenvolvedor Full Stack apaixonado por criar experiências digitais modernas com React, Next.js, Node.js e mais.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-body bg-td-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
