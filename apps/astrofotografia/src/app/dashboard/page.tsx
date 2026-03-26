'use client'
import { DashboardTemplate, CalculatorField, CalculatorOutput } from '@saas/ui/src/templates/DashboardTemplate'

const fields: CalculatorField[] = [
  { id: 'focal_mm', label: 'Distancia focal de la lente', type: 'number', unit: 'mm', defaultValue: 24, min: 8, max: 800, step: 1 },
  { id: 'apertura_f', label: 'Apertura (número f/)', type: 'number', unit: 'f/', defaultValue: 2.8, min: 1, max: 22, step: 0.1 },
  {
    id: 'tipo_sensor', label: 'Tamaño del sensor', type: 'select',
    options: [
      { value: 'ff', label: 'Full Frame (35mm)' },
      { value: 'apsc_nikon', label: 'APS-C Nikon/Sony (23,5mm)' },
      { value: 'apsc_canon', label: 'APS-C Canon (22,3mm)' },
      { value: 'm43', label: 'Micro 4/3 (17,3mm)' },
    ],
    defaultValue: 'ff',
  },
  { id: 'megapixeles', label: 'Megapíxeles de la cámara', type: 'number', unit: 'MP', defaultValue: 24, min: 8, max: 100, step: 1 },
]

function calculate(inputs: Record<string, any>): CalculatorOutput[] {
  const focal = parseFloat(inputs.focal_mm) || 24
  const apertura = parseFloat(inputs.apertura_f) || 2.8
  const sensor = inputs.tipo_sensor || 'ff'
  const mp = parseFloat(inputs.megapixeles) || 24

  const sensor_width = { ff: 35, apsc_nikon: 23.5, apsc_canon: 22.3, m43: 17.3 }[sensor] || 35
  // Pixel pitch in microns (assumes 3:2 aspect ratio)
  const pixel_pitch = (sensor_width / Math.sqrt(mp * 1.5)) * 1000

  // NPF Rule: t = (35 * apertura + 30 * pixel_pitch) / focal
  const tiempo_npf = (35 * apertura + 30 * pixel_pitch) / focal
  // Classic 500 rule
  const tiempo_500 = 500 / focal

  const tiempo_recomendado = Math.round(Math.min(tiempo_npf, tiempo_500))
  const iso_sugerido = tiempo_recomendado >= 20 ? 1600 : tiempo_recomendado >= 10 ? 3200 : 6400

  const outputs: CalculatorOutput[] = [
    { label: 'Tiempo NPF (preciso)', value: tiempo_npf.toFixed(1), unit: 's', highlight: true },
    { label: 'Regla de los 500 (clásica)', value: tiempo_500.toFixed(1), unit: 's' },
    { label: 'Tiempo recomendado (conservador)', value: tiempo_recomendado, unit: 's', highlight: true },
    { label: 'ISO sugerido', value: iso_sugerido },
    { label: 'Pixel pitch calculado', value: pixel_pitch.toFixed(2), unit: 'μm' },
    { label: 'Lente equivalente FF', value: sensor === 'ff' ? `${focal}mm` : `${Math.round(focal * (35 / (({ ff: 35, apsc_nikon: 23.5, apsc_canon: 22.3, m43: 17.3 })[sensor] || 35)))}mm eq.` },
  ]

  if (tiempo_recomendado < 6) {
    outputs.push({ label: '⚠️ Focal muy larga', value: 'Con tan poco tiempo de exposición, considera una montura ecuatorial o autoguiado para astrofotografía de campo profundo.', warning: true })
  }

  if (tiempo_npf < tiempo_500 * 0.5) {
    outputs.push({ label: '⚠️ Sensor de alta densidad', value: 'Tu cámara tiene píxeles muy pequeños. La regla de los 500 sobreestima el tiempo seguro — usa siempre el valor NPF.', warning: true })
  }

  return outputs
}

export default function DashboardPage() {
  return (
    <DashboardTemplate
      title="Calculadora Astrofotografía NPF" emoji="🔭"
      tagline="Exposición máxima sin rastros de estrellas"
      accentColor="#1E1B4B" appSlug="astrofotografia" fields={fields} calculate={calculate}
      description="Calcula el tiempo máximo de exposición con la regla NPF para tu combinación de cámara y objetivo."
    />
  )
}
