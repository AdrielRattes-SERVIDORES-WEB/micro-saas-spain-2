'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'profundidad', label: 'Profundidad del fondo', type: 'number', unit: 'm', defaultValue: 5, min: 1, step: 0.5 },
  { id: 'viento_nudos', label: 'Velocidad del viento prevista', type: 'number', unit: 'nudos', defaultValue: 20, min: 0, step: 1 },
  { id: 'altura_proa', label: 'Altura del punto de fondeo (proa)', type: 'number', unit: 'm', defaultValue: 1.5, min: 0.5, max: 5, step: 0.1 },
  {
    id: 'tipo_fondo', label: 'Tipo de fondo', type: 'select',
    options: [
      { value: 'arena', label: 'Arena (óptimo)' },
      { value: 'barro', label: 'Barro/fango' },
      { value: 'algas', label: 'Algas / Posidonia' },
      { value: 'roca', label: 'Roca (peor agarre)' },
    ],
    defaultValue: 'arena',
  },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const prof = parseFloat(inputs.profundidad) || 5
  const viento = parseFloat(inputs.viento_nudos) || 20
  const altura = parseFloat(inputs.altura_proa) || 1.5
  const fondo = inputs.tipo_fondo || 'arena'

  const scope_ratio = viento < 15 ? 5 : viento < 25 ? 7 : viento < 35 ? 10 : 12
  const fondo_factor = { arena: 1.0, barro: 0.9, algas: 1.3, roca: 1.5 }[fondo] || 1.0

  const prof_total = prof + altura
  const longitud = prof_total * scope_ratio * fondo_factor
  const radio_giro = longitud + 2 * altura + 5 // approximate

  const outputs: CalculatorOutput[] = [
    { label: 'Ratio de escopo aplicado', value: `${scope_ratio}:1` },
    { label: 'Ajuste por tipo de fondo', value: `×${fondo_factor}` },
    { label: 'Longitud de cadena/orinque', value: longitud.toFixed(1), unit: 'm', highlight: true },
    { label: 'Radio de giro mínimo', value: radio_giro.toFixed(0), unit: 'm' },
    { label: 'Profundidad total (fondo+proa)', value: prof_total.toFixed(1), unit: 'm' },
  ]

  if (viento > 30) {
    outputs.push({ label: '⚠️ Viento fuerte', value: `Con ${viento} nudos, considera un fondeo secundario (ancla de proa + ancla de popa) o buscar abrigo.`, warning: true })
  }

  if (fondo === 'algas') {
    outputs.push({ label: '⚠️ Posidonia protegida', value: 'En zonas de Baleares y Costa Brava fondear en posidonia está prohibido y conlleva multas. Busca fondos de arena.', warning: true })
  }

  if (fondo === 'roca') {
    outputs.push({ label: '⚠️ Fondo de roca', value: 'Riesgo alto de no agarrar. Considera un ancla tipo Danforth o usar una boya ecológica si está disponible.', warning: true })
  }

  return outputs
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Fondeo Veleros" emoji="⚓"
      tagline="Escopo exacto para no garrar en ninguna situación"
      accentColor="#1E3A5F" appSlug="fondeo-veleros" fields={fields} calculate={calculate}
      description="Calcula los metros de cadena necesarios según profundidad, viento previsto y tipo de fondo."
    />
  )
}
