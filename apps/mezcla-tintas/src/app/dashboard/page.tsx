'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'hex_color', label: 'Color deseado (código HEX)', type: 'text', placeholder: '#8B1A1A', defaultValue: '#8B1A1A' },
  { id: 'total_gotas', label: 'Total de gotas a mezclar', type: 'number', unit: 'gotas', defaultValue: 20, min: 5, step: 1 },
]

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '').padEnd(6, '0')
  const r = parseInt(clean.slice(0, 2), 16) || 0
  const g = parseInt(clean.slice(2, 4), 16) || 0
  const b = parseInt(clean.slice(4, 6), 16) || 0
  return [r, g, b]
}

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const hex = (inputs.hex_color || '#8B1A1A').trim()
  const totalGotas = Math.round(parseFloat(inputs.total_gotas) || 20)

  const [r, g, b] = hexToRgb(hex)
  const r_ = r / 255, g_ = g / 255, b_ = b / 255
  const k = 1 - Math.max(r_, g_, b_)
  const denom = 1 - k

  const c = denom > 0 ? (1 - r_ - k) / denom : 0
  const m = denom > 0 ? (1 - g_ - k) / denom : 0
  const y = denom > 0 ? (1 - b_ - k) / denom : 0

  const lightness = (r + g + b) / (3 * 255)
  const blanco_ratio = Math.max(0, lightness - 0.35)
  const gotas_blanco = Math.round(totalGotas * blanco_ratio)
  const gotas_pigmento = totalGotas - gotas_blanco

  const total_cmyk = c + m + y + k
  const gc = total_cmyk > 0 ? Math.round(c / total_cmyk * gotas_pigmento) : 0
  const gm = total_cmyk > 0 ? Math.round(m / total_cmyk * gotas_pigmento) : 0
  const gy = total_cmyk > 0 ? Math.round(y / total_cmyk * gotas_pigmento) : 0
  const gk = total_cmyk > 0 ? Math.round(k / total_cmyk * gotas_pigmento) : 0
  const verificacion = gc + gm + gy + gk + gotas_blanco

  return [
    { label: 'Color RGB', value: `R:${r} G:${g} B:${b}` },
    { label: 'Gotas Cyan', value: gc, unit: 'gotas', highlight: gc > 0 },
    { label: 'Gotas Magenta', value: gm, unit: 'gotas', highlight: gm > 0 },
    { label: 'Gotas Amarillo', value: gy, unit: 'gotas', highlight: gy > 0 },
    { label: 'Gotas Negro', value: gk, unit: 'gotas', highlight: gk > 0 },
    { label: 'Gotas Blanco', value: gotas_blanco, unit: 'gotas', highlight: gotas_blanco > 0 },
    { label: 'Total gotas (verificación)', value: verificacion, unit: 'gotas' },
    { label: 'Consejo', value: 'Mezcla siempre del color más claro al más oscuro. Prueba en papel antes de aplicar.', highlight: false },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Mezclador de Tintas de Modelismo" emoji="🎨"
      tagline="Consigue cualquier color exacto con tintas de modelismo"
      accentColor="#7C3AED" appSlug="mezcla-tintas" fields={fields} calculate={calculate}
      description="Introduce el código HEX del color deseado para obtener la proporción exacta de gotas en colores primarios de modelismo."
    />
  )
}
