'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'p1_v', label: 'Pedal 1 — Voltaje', type: 'select', options: [{ value: '0', label: '(vacío)' }, { value: '9', label: '9V' }, { value: '12', label: '12V' }, { value: '18', label: '18V' }], defaultValue: '9' },
  { id: 'p1_ma', label: 'Pedal 1 — mA', type: 'number', unit: 'mA', defaultValue: 50, min: 0, step: 1 },
  { id: 'p2_v', label: 'Pedal 2 — Voltaje', type: 'select', options: [{ value: '0', label: '(vacío)' }, { value: '9', label: '9V' }, { value: '12', label: '12V' }, { value: '18', label: '18V' }], defaultValue: '9' },
  { id: 'p2_ma', label: 'Pedal 2 — mA', type: 'number', unit: 'mA', defaultValue: 100, min: 0, step: 1 },
  { id: 'p3_v', label: 'Pedal 3 — Voltaje', type: 'select', options: [{ value: '0', label: '(vacío)' }, { value: '9', label: '9V' }, { value: '12', label: '12V' }, { value: '18', label: '18V' }], defaultValue: '9' },
  { id: 'p3_ma', label: 'Pedal 3 — mA', type: 'number', unit: 'mA', defaultValue: 300, min: 0, step: 1 },
  { id: 'p4_v', label: 'Pedal 4 — Voltaje', type: 'select', options: [{ value: '0', label: '(vacío)' }, { value: '9', label: '9V' }, { value: '12', label: '12V' }, { value: '18', label: '18V' }], defaultValue: '0' },
  { id: 'p4_ma', label: 'Pedal 4 — mA', type: 'number', unit: 'mA', defaultValue: 0, min: 0, step: 1 },
  { id: 'p5_v', label: 'Pedal 5 — Voltaje', type: 'select', options: [{ value: '0', label: '(vacío)' }, { value: '9', label: '9V' }, { value: '12', label: '12V' }, { value: '18', label: '18V' }], defaultValue: '0' },
  { id: 'p5_ma', label: 'Pedal 5 — mA', type: 'number', unit: 'mA', defaultValue: 0, min: 0, step: 1 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  let total9v = 0, total12v = 0, total18v = 0
  const voltages = new Set<string>()

  for (let i = 1; i <= 5; i++) {
    const v = inputs[`p${i}_v`] || '0'
    const ma = parseFloat(inputs[`p${i}_ma`]) || 0
    if (v === '9' && ma > 0) { total9v += ma; voltages.add('9V') }
    if (v === '12' && ma > 0) { total12v += ma; voltages.add('12V') }
    if (v === '18' && ma > 0) { total18v += ma; voltages.add('18V') }
  }

  const totalAll = total9v + total12v + total18v
  const fuenteMin = Math.ceil(totalAll * 1.2 / 100) * 100
  const necesitaMultivoltaje = voltages.size > 1

  const outputs: CalculatorOutput[] = [
    { label: 'Total consumo 9V', value: total9v, unit: 'mA' },
    { label: 'Total consumo 12V', value: total12v, unit: 'mA' },
    { label: 'Total consumo 18V', value: total18v, unit: 'mA' },
    { label: 'Consumo TOTAL', value: totalAll, unit: 'mA', highlight: true },
    { label: 'Fuente mínima recomendada', value: fuenteMin, unit: 'mA', highlight: true },
  ]

  if (necesitaMultivoltaje) {
    outputs.push({ label: '⚠️ Múltiples voltajes', value: `Necesitas salidas independientes para ${Array.from(voltages).join(', ')}. Usa fuente multi-voltaje con salidas aisladas.`, warning: true })
  }

  if (total18v > 0) {
    outputs.push({ label: '⚠️ Pedales 18V', value: 'Los pedales a 18V necesitan una fuente con salida de 18V o usar dos salidas de 9V en serie (si el pedal lo permite).', warning: true })
  }

  return outputs
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Fuente Pedales Guitarra" emoji="🎸"
      tagline="Evita sobrecargar tu fuente de alimentación en directo"
      accentColor="#1A1A2E" appSlug="pedales-guitarra" fields={fields} calculate={calculate}
      description="Introduce el voltaje y consumo en mA de cada pedal para calcular la fuente mínima necesaria."
    />
  )
}
