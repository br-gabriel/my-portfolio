"use client"
import { useLayoutEffect, useRef } from "react"
import { motion } from "framer-motion"

/**
 * Título em linhas. Linhas com `fit: true` têm o tamanho da fonte ajustado
 * para ficarem com a mesma largura da linha mais larga sem `fit`.
 * Se as linhas não couberem na tela, o título inteiro é reduzido proporcionalmente.
 */
export default function FitHeadline({ lines, className = "", ...motionProps }) {
  const ref = useRef(null)
  const hasFit = lines.some((line) => line.fit)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !hasFit) return

    // Mede o texto (span interno) e ajusta a fonte da linha (span externo)
    const lineEls = Array.from(el.querySelectorAll("[data-line]"))
    const width = (line) => line.firstElementChild.getBoundingClientRect().width

    const fit = () => {
      // Volta ao tamanho original definido pelo CSS para medir
      el.style.fontSize = ""
      lineEls.forEach((l) => (l.style.fontSize = ""))

      // Largura disponível: viewport menos o padding da seção (px-6),
      // limitada pela largura máxima do container (max-w-4xl)
      const section = el.closest("section") || el.parentElement
      const cs = getComputedStyle(section)
      const padding = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight)
      const maxWidth = parseFloat(getComputedStyle(el.parentElement).maxWidth) || Infinity
      const available = Math.min(document.documentElement.clientWidth - padding, maxWidth)

      const reference = Math.max(
        ...lineEls.filter((l) => !l.dataset.fit).map(width)
      )
      if (!reference) return

      // Reduz o título todo caso a linha de referência não caiba
      const baseSize = parseFloat(getComputedStyle(el).fontSize)
      const scale = Math.min(1, available / reference)
      if (scale < 1) el.style.fontSize = `${baseSize * scale}px`
      const target = reference * scale

      lineEls
        .filter((l) => l.dataset.fit)
        .forEach((l) => {
          const current = parseFloat(getComputedStyle(l).fontSize)
          l.style.fontSize = `${current * (target / width(l))}px`
        })
    }

    fit()
    document.fonts?.ready.then(fit)
    window.addEventListener("resize", fit)
    return () => window.removeEventListener("resize", fit)
  }, [lines, hasFit])

  return (
    <motion.h1 ref={ref} className={className} {...motionProps}>
      {lines.map((line, i) => (
        <span
          key={`${line.text}-${i}`}
          data-line=""
          data-fit={line.fit ? "true" : undefined}
          className={`block ${hasFit ? "whitespace-nowrap" : ""} ${
            line.highlight ? "text-td-green" : ""
          }`}
        >
          {hasFit ? (
            <span className="inline-block">{line.text}</span>
          ) : (
            line.text
          )}
        </span>
      ))}
    </motion.h1>
  )
}
