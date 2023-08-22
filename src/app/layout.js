import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Feitosa - Portfólio',
  description: 'Portfólio de desenvolvedor React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" id="myHtml">
      <body className={`${inter.className} scrollbar-thin scrollbar-track-white dark:scrollbar-track-black scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-800`}>{children}</body>
    </html>
  )
}
