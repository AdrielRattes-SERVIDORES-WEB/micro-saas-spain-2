'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'largo', label: 'Largo del molde', type: 'number', unit: 'cm', placeholder: '200', defaultValue: 200, min: 1, step: 1 },
  { id: 'ancho', label: 'Ancho del canal', type: 'number', unit: 'cm', placeholder: '30', defaultValue: 30, min: 1, step: 1 },
  { id: 'espesor', label: 'Espesor de la capa', type: 'number', unit: 'cm', placeholder: '4', defaultValue: 4, min: 0.1, step: 0.1 },
  {
    id: 'proporcion_a',
    label: 'Proporción parte A',
    type: 'select',
    options: [
      { value: '2', label: '2:1 (parte A : parte B)' },
      { value: '1', label: '1:1 (parte A : parte B)' },
      { value: '3', label: '3:1 (parte A : parte B)' },
    ],
    defaultValue: '2',
  },
  { id: 'desperdicio_extra', label: 'Desperdicio extra', type: 'number', unit: '%', placeholder: '10', defaultValue: 10, min: 0, max: 50, step: 1 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const largo = parseFloat(inputs.largo) || 0
  const ancho = parseFloat(inputs.ancho) || 0
  const espesor = parseFloat(inputs.espesor) || 0
  const proporcion_a = parseFloat(inputs.proporcion_a) || 2
  const desperdicio_extra = parseFloat(inputs.desperdicio_extra) || 10

  const volumen_cm3 = largo * ancho * espesor
  const volumen_litros = volumen_cm3 / 1000
  const volumen_con_desperdicio = volumen_litros * (1 + desperdicio_extra / 100)
  const total_ml = volumen_con_desperdicio * 1000
  const parte_a_ml = total_ml * proporcion_a / (proporcion_a + 1)
  const parte_b_ml = total_ml * 1 / (proporcion_a + 1)
  const peso_kg = total_ml * 1.1 / 1000

  return [
    { label: 'Volumen base', value: volumen_litros.toFixed(2), unit: 'L' },
    { label: 'Volumen con desperdicio', value: volumen_con_desperdicio.toFixed(2), unit: 'L', highlight: true },
    { label: `Parte A — Resina (${proporcion_a}:1)`, value: parte_a_ml.toFixed(0), unit: 'ml', highlight: true },
    { label: 'Parte B — Catalizador', value: parte_b_ml.toFixed(0), unit: 'ml', highlight: true },
    { label: 'Peso total estimado', value: peso_kg.toFixed(2), unit: 'kg' },
    { label: 'Nota', value: 'Mide siempre en peso, no en volumen, para mayor precisión' },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora de Resina Epoxi"
      emoji="🧪"
      tagline="Calcula exactamente cuánta resina necesitas para tu mesa de río"
      accentColor="#1B5E7B"
      appSlug="resina-epoxi"
      fields={fields}
      calculate={calculate}
      description="Introduce las dimensiones del molde y la proporción de tu resina para calcular las cantidades exactas de parte A y parte B."
    />
  )
}
