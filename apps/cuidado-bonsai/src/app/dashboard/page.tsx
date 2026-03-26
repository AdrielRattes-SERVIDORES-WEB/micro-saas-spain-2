'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  {
    id: 'especie', label: 'Especie de bonsái', type: 'select',
    options: [
      { value: 'ficus', label: 'Ficus retusa (interior)' },
      { value: 'olivo', label: 'Olivo (exterior)' },
      { value: 'enebro', label: 'Enebro/Juniperus (exterior)' },
      { value: 'arce', label: 'Arce japonés (exterior)' },
      { value: 'pino', label: 'Pino (exterior)' },
      { value: 'carmona', label: 'Carmona retusa (interior)' },
      { value: 'serissa', label: 'Serissa foetida (interior)' },
    ],
    defaultValue: 'ficus',
  },
  {
    id: 'provincia', label: 'Provincia', type: 'select',
    options: [
      { value: 'seco_calido', label: 'Madrid / Sevilla / Murcia / Extremadura' },
      { value: 'mediterraneo', label: 'Valencia / Barcelona / Alicante / Baleares' },
      { value: 'atlantico', label: 'Galicia / Asturias / Cantabria / País Vasco' },
      { value: 'interior', label: 'Castilla y León / Aragón / Navarra' },
      { value: 'canarias', label: 'Canarias' },
    ],
    defaultValue: 'mediterraneo',
  },
  {
    id: 'estacion', label: 'Estación del año', type: 'select',
    options: [
      { value: 'primavera', label: 'Primavera (Mar-May)' },
      { value: 'verano', label: 'Verano (Jun-Ago)' },
      { value: 'otono', label: 'Otoño (Sep-Nov)' },
      { value: 'invierno', label: 'Invierno (Dic-Feb)' },
    ],
    defaultValue: 'primavera',
  },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const especie = inputs.especie || 'ficus'
  const provincia = inputs.provincia || 'mediterraneo'
  const estacion = inputs.estacion || 'primavera'

  const especieParams: Record<string, { base: number; abono_npk: string; exterior: boolean }> = {
    ficus:   { base: 3,  abono_npk: '10-5-5 primavera, 6-6-6 verano/otoño', exterior: false },
    olivo:   { base: 5,  abono_npk: '10-5-5 primavera, 3-10-10 otoño',      exterior: true },
    enebro:  { base: 4,  abono_npk: '10-5-5 primavera, 3-10-10 otoño',      exterior: true },
    arce:    { base: 2,  abono_npk: '6-6-6 primavera, 3-10-10 otoño',       exterior: true },
    pino:    { base: 6,  abono_npk: '0-10-10 (evitar N en pinos)',           exterior: true },
    carmona: { base: 2,  abono_npk: '6-6-6 todo el año excepto invierno',   exterior: false },
    serissa: { base: 2,  abono_npk: '6-6-6 primavera-verano',               exterior: false },
  }

  const climaMult: Record<string, number> = {
    seco_calido: 0.6, mediterraneo: 0.8, atlantico: 1.4, interior: 1.0, canarias: 0.7,
  }

  const estacionMult: Record<string, number> = {
    primavera: 1.0, verano: 0.5, otono: 1.5, invierno: 3.0,
  }

  const ep = especieParams[especie]
  const diasBase = ep.base * climaMult[provincia] * estacionMult[estacion]
  const dias = Math.max(1, Math.round(diasBase))

  const abono_frecuencia = estacion === 'invierno' ? 'Sin abono en invierno' :
    estacion === 'primavera' ? 'Cada 15 días' :
    estacion === 'verano' ? 'Cada 20 días' : 'Cada 20 días'

  const trasplante = estacion === 'primavera' ? '✅ Época ideal para trasplantar' :
    estacion === 'otono' ? '⚠️ Solo en emergencias, mejor esperar primavera' :
    '❌ No trasplantar en esta época'

  return [
    { label: 'Frecuencia de riego', value: dias === 1 ? 'Cada día' : `Cada ${dias} días`, highlight: true },
    { label: 'Abonado recomendado', value: abono_frecuencia },
    { label: 'Fórmula NPK', value: ep.abono_npk },
    { label: 'Trasplante', value: trasplante },
    { label: 'Tipo de planta', value: ep.exterior ? '🌤️ Exterior — necesita sol directo' : '🏠 Interior — luz indirecta intensa' },
    ...(estacion === 'verano' && (provincia === 'seco_calido' || provincia === 'mediterraneo') ? [{
      label: '⚠️ Verano extremo', value: 'En oleadas de calor >35°C, riega mañana y tarde. Protege del sol de mediodía.', warning: true
    }] : []),
  ]
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Guía de Riego Bonsái España" emoji="🌳"
      tagline="Frecuencia de riego exacta según tu especie y provincia"
      accentColor="#065F46" appSlug="cuidado-bonsai" fields={fields} calculate={calculate}
      description="Selecciona la especie, tu provincia española y la estación para obtener la frecuencia de riego y calendario de abonado."
    />
  )
}
