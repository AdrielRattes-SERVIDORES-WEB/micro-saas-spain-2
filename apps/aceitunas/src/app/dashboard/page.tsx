'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  {
    id: 'weight',
    label: 'Peso de aceitunas brutas',
    type: 'number',
    unit: 'kg',
    placeholder: '5',
    defaultValue: 5,
    min: 0.5,
    step: 0.5,
  },
  {
    id: 'variety',
    label: 'Variedad',
    type: 'select',
    options: [
      { value: 'manzanilla', label: 'Manzanilla' },
      { value: 'gordal', label: 'Gordal' },
      { value: 'hojiblanca', label: 'Hojiblanca' },
      { value: 'arbequina', label: 'Arbequina' },
      { value: 'verdial', label: 'Verdial' },
    ],
    defaultValue: 'manzanilla',
  },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const weight = parseFloat(inputs.weight) || 0
  const variety = inputs.variety || 'manzanilla'

  const params: Record<string, { sosaRatio: number; horasSosa: number; aguaSosa: number; salSalmuera: number; aguaSalmuera: number }> = {
    manzanilla: { sosaRatio: 0.020, horasSosa: 9,  aguaSosa: 1.2, salSalmuera: 90, aguaSalmuera: 1.0 },
    gordal:     { sosaRatio: 0.022, horasSosa: 12, aguaSosa: 1.3, salSalmuera: 90, aguaSalmuera: 1.0 },
    hojiblanca: { sosaRatio: 0.018, horasSosa: 8,  aguaSosa: 1.1, salSalmuera: 80, aguaSalmuera: 1.0 },
    arbequina:  { sosaRatio: 0.015, horasSosa: 7,  aguaSosa: 1.0, salSalmuera: 80, aguaSalmuera: 1.0 },
    verdial:    { sosaRatio: 0.016, horasSosa: 7,  aguaSosa: 1.0, salSalmuera: 85, aguaSalmuera: 1.0 },
  }

  const p = params[variety] || params.manzanilla
  const sosaGramos = (weight * p.sosaRatio * 1000).toFixed(1)
  const aguaSosa = (weight * p.aguaSosa).toFixed(1)
  const aguaSalmuera = (weight * p.aguaSalmuera).toFixed(1)
  const salSalmuera = (parseFloat(aguaSalmuera) * p.salSalmuera).toFixed(0)
  const vinagre = (parseFloat(aguaSalmuera) * 50).toFixed(0)

  return [
    { label: 'Sosa Cáustica (NaOH)', value: sosaGramos, unit: 'g', warning: true },
    { label: 'Agua para la sosa', value: aguaSosa, unit: 'litros', highlight: true },
    { label: 'Horas de curado con sosa', value: p.horasSosa, unit: 'horas' },
    { label: 'Agua para salmuera', value: aguaSalmuera, unit: 'litros' },
    { label: 'Sal para salmuera', value: salSalmuera, unit: 'g', highlight: true },
    { label: 'Vinagre de vino blanco', value: vinagre, unit: 'ml' },
    { label: '⚠️ Seguridad', value: 'Usa guantes y gafas al manipular la sosa cáustica', warning: true },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Cura de Aceitunas"
      emoji="🫒"
      tagline="Elimina el amargor con las proporciones exactas"
      accentColor="#5B7A3E"
      appSlug="aceitunas"
      fields={fields}
      calculate={calculate}
      description="Calcula las cantidades exactas de sosa cáustica para eliminar el amargor y sal para la salmuera de conservación."
    />
  )
}
