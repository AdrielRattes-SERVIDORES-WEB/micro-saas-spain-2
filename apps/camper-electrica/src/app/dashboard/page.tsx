'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'amperaje', label: 'Intensidad máxima', type: 'number', unit: 'A', placeholder: '10', defaultValue: 10, min: 0.5, step: 0.5 },
  { id: 'distancia', label: 'Distancia batería-carga', type: 'number', unit: 'm', placeholder: '3', defaultValue: 3, min: 0.5, step: 0.5 },
  {
    id: 'voltaje',
    label: 'Sistema de voltaje',
    type: 'select',
    options: [
      { value: '12', label: '12V' },
      { value: '24', label: '24V' },
    ],
    defaultValue: '12',
  },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const amperaje = parseFloat(inputs.amperaje) || 0
  const distancia = parseFloat(inputs.distancia) || 0
  const voltaje_val = inputs.voltaje === '24' ? 24 : 12

  const caida_max = voltaje_val * 0.03
  const seccion_mm2_calc = (2 * distancia * amperaje) / (56 * caida_max)

  const standard_sizes = [0.75, 1, 1.5, 2.5, 4, 6, 10, 16, 25, 35, 50]
  const seccion_recomendada = standard_sizes.find(s => s >= seccion_mm2_calc) || 50

  const fusible_raw = amperaje * 1.25
  const fusible_sizes = [5, 7.5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100]
  const fusible = fusible_sizes.find(f => f >= fusible_raw) || 100

  const perdida_tension = (2 * distancia * amperaje) / (56 * seccion_recomendada)
  const perdida_pct = (perdida_tension / voltaje_val * 100).toFixed(2)

  const outputs: CalculatorOutput[] = [
    { label: 'Sección mínima calculada', value: seccion_mm2_calc.toFixed(2), unit: 'mm²' },
    { label: 'Sección recomendada (normalizada)', value: seccion_recomendada, unit: 'mm²', highlight: true },
    { label: 'Fusible recomendado', value: fusible, unit: 'A', highlight: true },
    { label: 'Pérdida de tensión real', value: perdida_tension.toFixed(3), unit: 'V' },
    { label: 'Pérdida en porcentaje', value: perdida_pct, unit: '%' },
  ]

  if (perdida_tension > voltaje_val * 0.03) {
    outputs.push({ label: '⚠️ AVISO', value: `Caída de tensión superior al 3%. Aumenta la sección del cable.`, warning: true })
  }

  return outputs
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Eléctrica Camper"
      emoji="⚡"
      tagline="Dimensiona tu instalación 12V sin riesgo de incendio"
      accentColor="#E6A817"
      appSlug="camper-electrica"
      fields={fields}
      calculate={calculate}
      description="Calcula la sección correcta de cable y el fusible adecuado para cada circuito de tu camper, cumpliendo la norma de máximo 3% de caída de tensión."
    />
  )
}
