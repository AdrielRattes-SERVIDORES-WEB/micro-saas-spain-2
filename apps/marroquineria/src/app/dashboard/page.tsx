'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'precio_pie_cuadrado', label: 'Precio del cuero', type: 'number', unit: '€/pie²', placeholder: '15', defaultValue: 15, min: 1, step: 0.5 },
  { id: 'pies_cuadrados_usados', label: 'Pies cuadrados usados', type: 'number', unit: 'pie²', placeholder: '2', defaultValue: 2, min: 0.1, step: 0.1 },
  { id: 'horas_trabajo', label: 'Horas de trabajo', type: 'number', unit: 'h', placeholder: '3', defaultValue: 3, min: 0.5, step: 0.5 },
  { id: 'coste_hora', label: 'Tu tarifa por hora', type: 'number', unit: '€/h', placeholder: '12', defaultValue: 12, min: 5, step: 1 },
  { id: 'coste_herrajes', label: 'Coste de herrajes', type: 'number', unit: '€', placeholder: '5', defaultValue: 5, min: 0, step: 0.5 },
  { id: 'margen_beneficio', label: 'Margen de beneficio', type: 'number', unit: '%', placeholder: '150', defaultValue: 150, min: 10, step: 10 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const precio_pie_cuadrado = parseFloat(inputs.precio_pie_cuadrado) || 0
  const pies_cuadrados_usados = parseFloat(inputs.pies_cuadrados_usados) || 0
  const horas_trabajo = parseFloat(inputs.horas_trabajo) || 0
  const coste_hora = parseFloat(inputs.coste_hora) || 0
  const coste_herrajes = parseFloat(inputs.coste_herrajes) || 0
  const margen_beneficio = parseFloat(inputs.margen_beneficio) || 0

  const coste_cuero = precio_pie_cuadrado * pies_cuadrados_usados
  const coste_mano_obra = horas_trabajo * coste_hora
  const coste_total_produccion = coste_cuero + coste_mano_obra + coste_herrajes
  const precio_venta = coste_total_produccion * (1 + margen_beneficio / 100)
  const beneficio_neto = precio_venta - coste_total_produccion
  const precio_minimo_viable = coste_total_produccion * 1.3

  return [
    { label: 'Coste del cuero', value: coste_cuero.toFixed(2), unit: '€' },
    { label: 'Coste mano de obra', value: coste_mano_obra.toFixed(2), unit: '€' },
    { label: 'Coste total producción', value: coste_total_produccion.toFixed(2), unit: '€' },
    { label: 'Precio de venta recomendado', value: precio_venta.toFixed(2), unit: '€', highlight: true },
    { label: 'Beneficio neto', value: beneficio_neto.toFixed(2), unit: '€' },
    { label: 'Precio mínimo viable', value: precio_minimo_viable.toFixed(2), unit: '€', warning: precio_venta < precio_minimo_viable },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora de Marroquinería"
      emoji="👜"
      tagline="Precio justo para tus artesanías de cuero en España"
      accentColor="#7B4A1E"
      appSlug="marroquineria"
      fields={fields}
      calculate={calculate}
      description="Calcula el precio correcto para tus artículos de cuero incluyendo todos los costes: material, mano de obra y margen de beneficio."
    />
  )
}
