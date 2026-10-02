"use client"
import { useEffect, useState } from "react"

// Experiência profissional
// 1º período: 1 ano e 3 meses (15 meses)
// 2º período: desde janeiro de 2025 até hoje
const PREVIOUS_EXPERIENCE_MONTHS = 15
const CURRENT_JOB_START = new Date(2025, 0, 1) // janeiro/2025 (mês começa em 0)

function monthsBetween(start, end) {
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (end.getDate() < start.getDate()) months -= 1
  return Math.max(0, months)
}

export function getExperience(now = new Date()) {
  const totalMonths = PREVIOUS_EXPERIENCE_MONTHS + monthsBetween(CURRENT_JOB_START, now)
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  }
}

// Recalcula no navegador (o HTML estático é gerado no build)
export function useExperience() {
  const [experience, setExperience] = useState(() => getExperience())
  useEffect(() => {
    setExperience(getExperience())
  }, [])
  return experience
}
