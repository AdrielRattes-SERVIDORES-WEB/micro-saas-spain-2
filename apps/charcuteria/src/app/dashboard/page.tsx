'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  {
    id: 'weight',
    label: 'Peso de la carne',
    type: 'number',
    unit: 'gramos',
    placeholder: '1000',
    defaultValue: 1000,
    min: 100,
    step: 10,
  },
  {
    id: 'type',
    label: 'Tipo de embutido',
    type: 'select',
    options: [
      { value: 'lomo', label: 'Lomo Curado' },
      { value: 'jamon', label: 'Jamón Serrano' },
      { value: 'chorizo', label: 'Chorizo (Curado en seco)' },
      { value: 'panceta', label: 'Panceta' },
      { value: 'cecina', label: 'Cecina de Ternera' },
    ],
    defaultValue: 'lomo',
  },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const weight = parseFloat(inputs.weight) || 0
  const type = inputs.type || 'lomo'

  const recipes: Record<string, { sal: number; cura: number; azucar: number; dias: [number, number]; temp: string }> = {
    lomo:    { sal: 0.025, cura: 0.0025, azucar: 0.005, dias: [30, 45], temp: '12-16°C' },
    jamon:   { sal: 0.030, cura: 0.0025, azucar: 0,     dias: [60, 90], temp: '8-14°C' },
    chorizo: { sal: 0.018, cura: 0.0025, azucar: 0.003, dias: [20, 30], temp: '12-18°C' },
    panceta: { sal: 0.020, cura: 0.0025, azucar: 0.010, dias: [21, 28], temp: '12-16°C' },
    cecina:  { sal: 0.028, cura: 0.0025, azucar: 0,     dias: [45, 90], temp: '8-14°C' },
  }

  const r = recipes[type] || recipes.lomo
  const salComun = (weight * r.sal).toFixed(1)
  const salCura = (weight * r.cura).toFixed(2)
  const azucar = (weight * r.azucar).toFixed(1)
  const perdidaAgua = (weight * 0.325).toFixed(0)
  const pesoFinal = (weight - parseFloat(perdidaAgua)).toFixed(0)

  const outputs: CalculatorOutput[] = [
    { label: 'Sal Común', value: salComun, unit: 'g', highlight: true },
    { label: 'Sal de Cura (Nitro)', value: salCura, unit: 'g', warning: false },
    { label: 'Azúcar', value: azucar, unit: 'g' },
    { label: 'Días de Secado (mín)', value: r.dias[0], unit: 'días' },
    { label: 'Días de Secado (máx)', value: r.dias[1], unit: 'días' },
    { label: 'Temperatura ideal', value: r.temp, highlight: false },
    { label: 'Pérdida de agua esperada', value: perdidaAgua, unit: 'g' },
    { label: 'Peso final estimado', value: pesoFinal, unit: 'g' },
  ]

  if (parseFloat(salCura) > 3.5) {
    outputs.push({ label: '⚠️ AVISO', value: 'Verifica la dosis de sal de cura con una báscula de precisión 0.1g', warning: true })
  }

  return outputs
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora de Charcutería"
      emoji="🥩"
      tagline="Curar embutidos con precisión química y seguridad total"
      accentColor="#8B1A1A"
      appSlug="charcuteria"
      fields={fields}
      calculate={calculate}
      description="Introduce el peso y el tipo de embutido para obtener las cantidades exactas de ingredientes de curado."
    />
  )
}
