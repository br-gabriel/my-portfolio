"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "./LanguageContext"

// Mantém o título da aba sincronizado com o idioma selecionado
export default function DocumentTitle() {
  const { t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") document.title = t.meta.title
  }, [t, pathname])

  return null
}
