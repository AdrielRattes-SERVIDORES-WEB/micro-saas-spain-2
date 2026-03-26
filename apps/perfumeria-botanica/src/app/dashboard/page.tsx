'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'volumen_ml', label: 'Volumen del frasco final', type: 'number', unit: 'ml', defaultValue: 50, min: 5, step: 5 },
  {
    id: 'concentracion', label: 'Concentración / Tipo', type: 'select',
    options: [
      { value: 'edc',    label: 'Eau de Cologne — EDC (5%)' },
      { value: 'edt',    label: 'Eau de Toilette — EDT (10%)' },
      { value: 'edp',    label: 'Eau de Parfum — EDP (15%)' },
      { value: 'parfum', label: 'Parfum / Extrait (20%)' },
      { value: 'aceite', label: 'Aceite de perfume puro (30%)' },
    ],
    defaultValue: 'edp',
  },
  { id: 'top_pct', label: 'Notas de Tope (%)', type: 'number', unit: '%', defaultValue: 30, min: 10, max: 70, step: 5 },
  { id: 'heart_pct', label: 'Notas de Corazón (%)', type: 'number', unit: '%', defaultValue: 50, min: 10, max: 70, step: 5 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const vol = parseFloat(inputs.volumen_ml) || 50
  const conc = inputs.concentracion || 'edp'
  const topPct = parseFloat(inputs.top_pct) || 30
  const heartPct = parseFloat(inputs.heart_pct) || 50
  const basePct = Math.max(0, 100 - topPct - heartPct)

  const concVal = { edc: 5, edt: 10, edp: 15, parfum: 20, aceite: 30 }[conc] || 15
  const total_aceite_ml = vol * concVal / 100
  const alcohol_ml = vol - total_aceite_ml
  const total_gotas = Math.round(total_aceite_ml * 20)
  const gotas_top = Math.round(total_gotas * topPct / 100)
  const gotas_heart = Math.round(total_gotas * heartPct / 100)
  const gotas_base = total_gotas - gotas_top - gotas_heart

  const maceracion = conc === 'edc' ? 48 : conc === 'edt' ? 72 : conc === 'edp' ? 168 : conc === 'parfum' ? 336 : 720

  return [
    { label: 'Total aceite esencial', value: total_aceite_ml.toFixed(2), unit: 'ml', highlight: true },
    { label: 'Alcohol etílico (96°)', value: alcohol_ml.toFixed(1), unit: 'ml', highlight: true },
    { label: 'Total gotas de aceite', value: total_gotas, unit: 'gotas' },
    { label: 'Notas de Tope', value: gotas_top, unit: `gotas (${topPct}%)` },
    { label: 'Notas de Corazón', value: gotas_heart, unit: `gotas (${heartPct}%)` },
    { label: 'Notas de Base', value: gotas_base, unit: `gotas (${basePct}%)` },
    { label: 'Tiempo de maceración recomendado', value: maceracion >= 168 ? `${maceracion / 24} días` : `${maceracion} horas` },
    { label: '💡 Proporción', value: `${concVal}% aceite esencial + ${(100 - concVal)}% alcohol` },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Perfumería Botánica" emoji="🌸"
      tagline="Formula tus perfumes con aceites esenciales en proporciones exactas"
      accentColor="#9D174D" appSlug="perfumeria-botanica" fields={fields} calculate={calculate}
      description="Calcula ml de aceite esencial, ml de alcohol y distribución exacta de gotas por notas."
    />
  )
}
