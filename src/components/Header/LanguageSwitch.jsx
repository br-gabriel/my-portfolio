"use client"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/i18n/LanguageContext"

function BrazilFlag() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect width="64" height="64" fill="#009C3B" />
      <polygon points="32,10 58,32 32,54 6,32" fill="#FFDF00" />
      <circle cx="32" cy="32" r="11" fill="#002776" />
      <path d="M21.5 29.5 Q32 26 42.6 33" stroke="#fff" strokeWidth="2" fill="none" />
    </svg>
  )
}

function USFlag() {
  const stripes = Array.from({ length: 7 }, (_, i) => (
    <rect key={i} y={i * (64 / 6.5)} width="64" height={64 / 13} fill="#B22234" />
  ))
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect width="64" height="64" fill="#fff" />
      {stripes}
      <rect width="30" height={(64 / 13) * 7} fill="#3C3B6E" />
      {[6, 13, 20, 27].map((y) =>
        [5, 12, 19, 26].map((x) => (
          <circle key={`${x}-${y}`} cx={x - 1} cy={y} r="1.3" fill="#fff" />
        ))
      )}
    </svg>
  )
}

const FLAGS = { pt: BrazilFlag, en: USFlag }

export default function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const handleKey = (e) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  const CurrentFlag = FLAGS[language]

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`${t.language.label}: ${t.language[language]}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        title={t.language[language]}
        className="block h-8 w-8 overflow-hidden rounded-full border-2 border-td-border transition-all duration-200 hover:scale-110 hover:border-td-green focus:outline-none focus-visible:border-td-green"
      >
        <CurrentFlag />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute right-0 top-full mt-3 w-44 overflow-hidden rounded-xl border border-td-border bg-td-bg-secondary p-1.5 shadow-2xl"
        >
          {Object.entries(FLAGS).map(([code, Flag]) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={language === code}
                onClick={() => {
                  setLanguage(code)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  language === code
                    ? "bg-td-green/10 text-td-green"
                    : "text-td-text-secondary hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="block h-5 w-5 flex-shrink-0 overflow-hidden rounded-full border border-td-border">
                  <Flag />
                </span>
                {code === "pt" ? "Português" : "English"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
