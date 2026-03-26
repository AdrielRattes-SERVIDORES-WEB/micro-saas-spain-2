import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'flotabilidad-neutra-buceo',
    title: 'Por qué la Flotabilidad Neutra es la Habilidad más Importante en Buceo',
    content: `<p>La flotabilidad neutra — la capacidad de quedar suspendido en el agua sin subir ni bajar — es el sello del buceador experimentado. Un buceador sobre-lastrado patalea constantemente para no caer al fondo; uno sub-lastrado lucha para no subir a la superficie.</p><p>Las consecuencias de un lastrado incorrecto van más allá de la incomodidad: <strong>el sobre-lastrado es la principal causa de daños en los arrecifes de coral</strong>, y tanto el sobre como el sub-lastrado aumentan el consumo de aire significativamente.</p><h4>El test de flotabilidad</h4><p>Al final de una inmersión, con el regulador en la boca y el botellín casi vacío, deberías ser capaz de mantenerte en flotabilidad neutra a 3 metros de profundidad con el chaleco BCD completamente vacío. Si subes o bajas, el lastrado no es correcto.</p>`,
  },
  {
    slug: 'agua-dulce-vs-salada-buceo',
    title: 'Diferencia entre Bucear en Agua Dulce y Salada: Cuánto Plomo Más',
    content: `<p>El agua de mar es más densa que el agua dulce porque contiene sales disueltas (~35g/L en el Mediterráneo). Esta diferencia de densidad significa que el empuje de Arquímedes es mayor en agua salada, requiriendo más plomo para compensarlo.</p><h4>Diferencia práctica en kilogramos</h4><p>La diferencia de flotabilidad entre agua dulce (densidad 1.000 kg/m³) y agua del Mediterráneo (~1.027 kg/m³) es de aproximadamente <strong>1,5-2 kg de plomo adicional</strong> para un buceador de 80kg con traje de 5mm.</p><p>El Atlántico español (Canarias, Galicia) tiene salinidad similar al Mediterráneo. Los lagos de interior españoles (Castilla y León, Pirineos) requieren menos lastre.</p><h4>Regla rápida de ajuste</h4><ul><li>Agua dulce → Mar: Añade 2kg</li><li>Mediterráneo → Atlántico: Prácticamente igual</li><li>Mar → Lago de montaña: Quita 2-2,5kg</li></ul>`,
  },
  {
    slug: 'neoprene-flotabilidad',
    title: 'El Neopreno y su Flotabilidad: Por qué el Traje de 7mm Necesita más Plomo',
    content: `<p>El neopreno es un material de células cerradas llenas de gas. Este gas lo hace muy positivo (flotante) en la superficie, pero se comprime con la profundidad, reduciendo su flotabilidad.</p><h4>Flotabilidad del neopreno por grosor (a superficie)</h4><ul><li><strong>3mm:</strong> ~2-3 kg positivos</li><li><strong>5mm:</strong> ~4-5 kg positivos</li><li><strong>7mm:</strong> ~6-8 kg positivos</li><li><strong>Semiseco (7mm con puños):</strong> ~8-10 kg positivos</li><li><strong>Seco (drysuit):</strong> Variable según ropa interior y gas interior</li></ul><p>A 30 metros de profundidad, el neoprene de 5mm tiene solo el 50% de su flotabilidad superficial. Por eso los cálculos de lastrado se hacen siempre para la superficie, donde la flotabilidad positiva es máxima.</p>`,
  },
  {
    slug: 'cinturon-plomos-buceo',
    title: 'Tipos de Cinturones de Plomos y Sistemas de Lastre en Buceo',
    content: `<p>La distribución del lastre afecta a la posición horizontal del buceador. Un lastre mal distribuido crea una posición vertical que aumenta la resistencia hidrodinámica y el consumo de aire.</p><h4>Sistemas de lastre disponibles</h4><ul><li><strong>Cinturón con plomos de rosca:</strong> El clásico. Económico pero puede resbalarse si no está bien ajustado.</li><li><strong>Cinturón de peso integrado en BCD:</strong> Las bolsas de lastre se insertan en el chaleco. Comodísimo y distribución más uniforme.</li><li><strong>Plomos de trim:</strong> Se montan en las correas del botellín o en pockets del BCD. Para ajuste fino de la posición horizontal.</li><li><strong>Cinturón con hebilla de liberación rápida:</strong> Obligatorio en inmersiones con más de 8kg de lastre. En caso de emergencia, soltar el cinturón es más rápido que quitarlo.</li></ul>`,
  },
  {
    slug: 'ajuste-fino-lastrado',
    title: 'Cómo Hacer el Ajuste Fino del Lastrado: El Protocolo Paso a Paso',
    content: `<p>La calculadora da un punto de partida. El ajuste fino siempre se hace en el agua, preferiblemente en una zona poco profunda y segura antes de hacer inmersiones reales.</p><h4>Protocolo de ajuste de lastrado</h4><p><strong>Material:</strong> Traje completo, BCD, regulador, botellín lleno (importante: el peso del gas cuenta).</p><p><strong>Paso 1:</strong> En la superficie, desínflate completamente el BCD. Deberías quedarte en la superficie con el agua al nivel de los ojos al exhalar, y hundirte lentamente al inhalar.</p><p><strong>Paso 2:</strong> Baja a 5-6 metros. Con el BCD vacío, deberías poder mantenerte sin esfuerzo. Si subes, añade 0,5kg. Si caes, quita 0,5kg.</p><p><strong>Paso 3:</strong> Test final al final de la inmersión con botellín casi vacío. Deberías mantenerte en 3m con BCD vacío. El gas vacío pesa menos y el botellín flota más.</p><p>Nota: <strong>los ajustes de 0,5kg en 0,5kg son suficientes</strong>. No hagas cambios de 2kg de golpe.</p>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="lastro-buceo"
      title="Calculadora Lastrado Buceo"
      emoji="🤿"
      tagline="Flotabilidad neutra perfecta calculada para ti"
      description="Todo sobre el lastrado correcto en buceo. Agua dulce vs salada, neoprene, tipos de botellín y cómo hacer el ajuste fino perfecto."
      heroText="¿Cuánto plomo necesitas para tu próxima inmersión en el Mediterráneo? ¿Cambias de traje o de destino? Recalcula siempre antes de bucear."
      accentColor="#0C4A6E"
      articles={articles}
    />
  )
}
