import './globals.css'
import { Space_Grotesk, Outfit } from 'next/font/google'
import { LanguageProvider } from '@/i18n/LanguageContext'
import DocumentTitle from '@/i18n/DocumentTitle'

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
  title: 'Gabriel Feitosa — Full Stack Developer',
  description: 'Portfolio of Gabriel Feitosa. Full Stack Developer passionate about building modern digital experiences with React, Next.js, Node.js and more. | Portfólio de Gabriel Feitosa, Desenvolvedor Full Stack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-body bg-td-bg text-white antialiased">
        <LanguageProvider>
          <DocumentTitle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
