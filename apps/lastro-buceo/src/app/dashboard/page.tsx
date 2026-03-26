'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'peso_kg', label: 'Peso corporal', type: 'number', unit: 'kg', defaultValue: 75, min: 40, max: 150, step: 1 },
  {
    id: 'neoprene_mm', label: 'Grosor del traje', type: 'select',
    options: [
      { value: '3', label: '3mm (aguas templadas)' },
      { value: '5', label: '5mm (Mediterráneo estándar)' },
      { value: '7', label: '7mm (aguas frías / Atlántico)' },
    ],
    defaultValue: '5',
  },
  {
    id: 'tipo_agua', label: 'Tipo de agua', type: 'select',
    options: [
      { value: 'dulce', label: 'Agua dulce (lago, río)' },
      { value: 'mediterraneo', label: 'Mediterráneo / Atlántico español' },
      { value: 'salada', label: 'Agua muy salada (Mar Rojo, Caribe)' },
    ],
    defaultValue: 'mediterraneo',
  },
  {
    id: 'cilindro', label: 'Tipo de botellín', type: 'select',
    options: [
      { value: 'acero_12', label: 'Acero 12L (más común)' },
      { value: 'acero_15', label: 'Acero 15L (grande)' },
      { value: 'aluminio_12', label: 'Aluminio 12L' },
      { value: 'aluminio_80', label: 'Aluminio 80cft (US)' },
    ],
    defaultValue: 'acero_12',
  },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const peso = parseFloat(inputs.peso_kg) || 75
  const neo = inputs.neoprene_mm || '5'
  const agua = inputs.tipo_agua || 'mediterraneo'
  const cil = inputs.cilindro || 'acero_12'

  const neo_flot = { '3': 3, '5': 5, '7': 7 }[neo] || 5
  const agua_extra = { dulce: 0, mediterraneo: 1.5, salada: 2.5 }[agua] || 1.5
  const cil_flot = { acero_12: -2, acero_15: -3, aluminio_12: 1.5, aluminio_80: 1.8 }[cil] || -2

  const base = peso * 0.09
  const plomo_raw = base + neo_flot + agua_extra + cil_flot
  const plomo_total = Math.max(0, Math.round(plomo_raw * 2) / 2)
  const plomo_cinto = Math.round(plomo_total * 0.7 * 2) / 2
  const plomo_trim = Math.round(plomo_total * 0.3 * 2) / 2

  return [
    { label: 'Plomo total recomendado', value: plomo_total, unit: 'kg', highlight: true },
    { label: 'Plomo en cinturón', value: plomo_cinto, unit: 'kg' },
    { label: 'Plomo en trim (BCD/pockets)', value: plomo_trim, unit: 'kg' },
    { label: 'Flotabilidad neoprene', value: `+${neo_flot} kg positivos en superficie` },
    { label: 'Flotabilidad cilindro (vacío)', value: `${cil_flot > 0 ? '+' : ''}${cil_flot} kg` },
    { label: '⚠️ Ajuste fino en el agua', value: 'Este es un punto de partida. Siempre verifica en zona poco profunda antes de la inmersión real.', warning: true },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Lastrado Buceo" emoji="🤿"
      tagline="Flotabilidad neutra perfecta calculada para ti"
      accentColor="#0C4A6E" appSlug="lastro-buceo" fields={fields} calculate={calculate}
      description="Calcula el lastre exacto en kg según tu peso, traje de neoprene, tipo de agua y botellín."
    />
  )
}
