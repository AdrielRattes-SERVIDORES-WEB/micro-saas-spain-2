'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'peso_queso', label: 'Peso del queso', type: 'number', unit: 'kg', defaultValue: 1, min: 0.1, step: 0.1 },
  {
    id: 'tipo_queso', label: 'Tipo de queso', type: 'select',
    options: [
      { value: 'fresco', label: 'Fresco (consumo inmediato)' },
      { value: 'tierno', label: 'Tierno (30 días)' },
      { value: 'semicurado', label: 'Semicurado (60 días)' },
      { value: 'curado', label: 'Curado (6 meses)' },
      { value: 'madurado', label: 'Madurado (+1 año)' },
    ],
    defaultValue: 'tierno',
  },
  { id: 'densidad', label: 'Concentración de sal en salmuera', type: 'number', unit: '%', defaultValue: 20, min: 5, max: 26, step: 1 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const peso = parseFloat(inputs.peso_queso) || 1
  const tipo = inputs.tipo_queso || 'tierno'
  const densidad = parseFloat(inputs.densidad) || 20

  const params: Record<string, { horas_kg: number; sal_g_l: number; conservacion: number; temp: string }> = {
    fresco:     { horas_kg: 0.5, sal_g_l: 80,  conservacion: 7,   temp: '4-8°C' },
    tierno:     { horas_kg: 2,   sal_g_l: 160, conservacion: 30,  temp: '8-12°C' },
    semicurado: { horas_kg: 4,   sal_g_l: 200, conservacion: 60,  temp: '10-14°C' },
    curado:     { horas_kg: 8,   sal_g_l: 220, conservacion: 180, temp: '10-14°C' },
    madurado:   { horas_kg: 12,  sal_g_l: 240, conservacion: 365, temp: '12-16°C' },
  }

  const p = params[tipo]
  const horas = p.horas_kg * peso
  const litros = peso * 1.5
  const sal_g = (densidad / 100) / (1 - densidad / 100) * litros * 1000

  return [
    { label: 'Horas de salado', value: horas.toFixed(1), unit: 'horas', highlight: true },
    { label: 'Litros de salmuera necesarios', value: litros.toFixed(1), unit: 'L' },
    { label: 'Sal necesaria', value: sal_g.toFixed(0), unit: 'g', highlight: true },
    { label: 'Temperatura de curado', value: p.temp },
    { label: 'Conservación estimada', value: p.conservacion, unit: 'días' },
    { label: '⚠️ Usa sal sin yodo', value: 'La sal yodada inhibe los cultivos lácticos y altera el sabor', warning: true },
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Salmuera de Quesos" emoji="🧀"
      tagline="Tiempo y concentración exacta para quesos artesanales perfectos"
      accentColor="#D97706" appSlug="salmuera-quesos" fields={fields} calculate={calculate}
      description="Calcula las horas de salado y la cantidad exacta de sal según el tipo y peso de tu queso artesanal."
    />
  )
}
