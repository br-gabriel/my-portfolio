"use client"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, translations } from "./translations"

const STORAGE_KEY = "language"

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: translations[DEFAULT_LANGUAGE],
})

// Detecta o idioma do sistema/navegador do usuário. Fallback: inglês.
function detectLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved
  } catch {}

  const browserLanguages =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language]

  for (const lang of browserLanguages) {
    const code = (lang || "").toLowerCase().split("-")[0]
    if (SUPPORTED_LANGUAGES.includes(code)) return code
  }

  return DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    setLanguageState(detectLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
  }, [language])

  const setLanguage = useCallback((lang) => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
