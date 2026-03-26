'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'peso_pieza', label: 'Peso de la pieza', type: 'number', unit: 'g', placeholder: '50', defaultValue: 50, min: 1, step: 1 },
  { id: 'precio_filamento', label: 'Precio del filamento', type: 'number', unit: '€/kg', placeholder: '20', defaultValue: 20, min: 1, step: 0.5 },
  { id: 'horas_impresion', label: 'Horas de impresión', type: 'number', unit: 'h', placeholder: '3', defaultValue: 3, min: 0.1, step: 0.5 },
  { id: 'consumo_watts', label: 'Consumo de la impresora', type: 'number', unit: 'W', placeholder: '200', defaultValue: 200, min: 50, step: 10 },
  {
    id: 'tramo_luz', label: 'Tramo de luz (PVPC)', type: 'select',
    options: [
      { value: 'punta', label: 'Punta (~0,29€/kWh)' },
      { value: 'llano', label: 'Llano (~0,18€/kWh)' },
      { value: 'valle', label: 'Valle (~0,14€/kWh)' },
    ],
    defaultValue: 'llano',
  },
  { id: 'margen', label: 'Margen de beneficio', type: 'number', unit: '%', placeholder: '200', defaultValue: 200, min: 0, step: 10 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const peso = parseFloat(inputs.peso_pieza) || 0
  const preciofil = parseFloat(inputs.precio_filamento) || 0
  const horas = parseFloat(inputs.horas_impresion) || 0
  const watts = parseFloat(inputs.consumo_watts) || 0
  const tramo = inputs.tramo_luz || 'llano'
  const margen = parseFloat(inputs.margen) || 0

  const precio_kwh = tramo === 'punta' ? 0.29 : tramo === 'valle' ? 0.14 : 0.18
  const coste_material = (peso / 1000) * preciofil
  const coste_electricidad = (watts * horas / 1000) * precio_kwh
  const coste_amortizacion = horas * 0.15
  const coste_total = coste_material + coste_electricidad + coste_amortizacion
  const precio_venta = coste_total * (1 + margen / 100)
  const beneficio = precio_venta - coste_total

  return [
    { label: 'Coste de material', value: coste_material.toFixed(3), unit: '€' },
    { label: 'Coste de electricidad', value: coste_electricidad.toFixed(3), unit: '€' },
    { label: 'Amortización impresora', value: coste_amortizacion.toFixed(3), unit: '€' },
    { label: 'Coste total', value: coste_total.toFixed(3), unit: '€' },
    { label: 'Precio de venta sugerido', value: precio_venta.toFixed(2), unit: '€', highlight: true },
    { label: 'Beneficio neto', value: beneficio.toFixed(2), unit: '€', highlight: true },
    { label: 'Precio kWh aplicado', value: precio_kwh.toFixed(2), unit: '€/kWh' },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Impresión 3D" emoji="🖨️"
      tagline="Precio real con el coste de luz en España incluido"
      accentColor="#2563EB" appSlug="impresion-3d" fields={fields} calculate={calculate}
      description="Calcula el precio real de tus piezas incluyendo material, electricidad según tramos PVPC y amortización de la máquina."
    />
  )
}
