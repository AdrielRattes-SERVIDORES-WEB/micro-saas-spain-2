'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'chapa_largo', label: 'Largo de la chapa', type: 'number', unit: 'cm', defaultValue: 244, min: 50, step: 1 },
  { id: 'chapa_ancho', label: 'Ancho de la chapa', type: 'number', unit: 'cm', defaultValue: 122, min: 50, step: 1 },
  { id: 'pieza_largo', label: 'Largo de la pieza', type: 'number', unit: 'cm', defaultValue: 60, min: 5, step: 1 },
  { id: 'pieza_ancho', label: 'Ancho de la pieza', type: 'number', unit: 'cm', defaultValue: 30, min: 5, step: 1 },
  { id: 'cantidad_piezas', label: 'Cantidad de piezas', type: 'number', unit: 'uds', defaultValue: 6, min: 1, step: 1 },
  { id: 'kerf_mm', label: 'Grosor del corte de sierra', type: 'number', unit: 'mm', defaultValue: 3, min: 1, step: 0.5 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const cL = parseFloat(inputs.chapa_largo) || 244
  const cA = parseFloat(inputs.chapa_ancho) || 122
  const pL = parseFloat(inputs.pieza_largo) || 60
  const pA = parseFloat(inputs.pieza_ancho) || 30
  const qty = Math.round(parseFloat(inputs.cantidad_piezas) || 6)
  const kerf = (parseFloat(inputs.kerf_mm) || 3) / 10

  // Normal orientation
  const filas_n = Math.floor(cL / (pL + kerf))
  const cols_n = Math.floor(cA / (pA + kerf))
  const por_chapa_n = filas_n * cols_n

  // Rotated orientation
  const filas_r = Math.floor(cL / (pA + kerf))
  const cols_r = Math.floor(cA / (pL + kerf))
  const por_chapa_r = filas_r * cols_r

  const mejor = Math.max(por_chapa_n, por_chapa_r)
  const orientacion = por_chapa_r > por_chapa_n ? 'Girada 90°' : 'Normal'
  const chapas = mejor > 0 ? Math.ceil(qty / mejor) : 999

  const area_piezas = qty * pL * pA
  const area_chapas = chapas * cL * cA
  const desperdicio_pct = area_chapas > 0 ? ((area_chapas - area_piezas) / area_chapas * 100) : 0

  return [
    { label: 'Piezas por chapa', value: mejor, unit: 'piezas/chapa', highlight: true },
    { label: 'Orientación óptima', value: orientacion },
    { label: 'Chapas necesarias', value: chapas, unit: 'chapas', highlight: true },
    { label: 'Desperdicio estimado', value: desperdicio_pct.toFixed(1), unit: '%', warning: desperdicio_pct > 30 },
    { label: 'Área útil total', value: (area_piezas / 10000).toFixed(2), unit: 'm²' },
    { label: 'Área total de chapas', value: (area_chapas / 10000).toFixed(2), unit: 'm²' },
    { label: 'Área desperdiciada', value: ((area_chapas - area_piezas) / 10000).toFixed(2), unit: 'm²' },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Optimizador de Corte de Madera" emoji="🪵"
      tagline="Aprovecha al máximo cada chapa de MDF"
      accentColor="#92400E" appSlug="corte-madera" fields={fields} calculate={calculate}
      description="Introduce las dimensiones de la chapa y las piezas para obtener el plan de corte óptimo con el mínimo desperdicio."
    />
  )
}
