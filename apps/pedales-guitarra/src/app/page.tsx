import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'ruido-señal-guitarra-pedales',
    title: 'El Ruido en la Señal de Guitarra: Por qué Ocurre y Cómo Eliminarlo',
    content: `<p>El ruido en una cadena de pedales tiene dos causas principales: <strong>fuentes de alimentación deficientes</strong> y <strong>bucles de tierra</strong> (ground loops). La mayoría de los guitarristas culpan a los pedales cuando el problema real está en la fuente.</p><h4>Tipos de ruido y su origen</h4><ul><li><strong>Zumbido de 50Hz (hum):</strong> Bucle de tierra. El cable de señal está recogiendo la frecuencia de la red eléctrica española.</li><li><strong>Silbido agudo:</strong> Interferencias de radiofrecuencia. Común cerca de fluorescentes o transformadores.</li><li><strong>Ruido de alta frecuencia (hiss):</strong> Ganancia excesiva en la cadena o pedales de baja calidad.</li><li><strong>Ruido pulsante:</strong> Fuente de alimentación con ripple excesivo — el transformador de la fuente no filtra bien la corriente alterna.</li></ul><p>La regla de oro: <strong>una fuente de alimentación de calidad con salidas aisladas elimina el 90% de los problemas de ruido</strong>.</p>`,
  },
  {
    slug: 'fuentes-alimentacion-pedales',
    title: 'Fuentes de Alimentación para Pedales: Diferencias entre Salidas Aisladas y No Aisladas',
    content: `<p>No todas las fuentes de pedales son iguales. La diferencia entre salidas aisladas y compartidas es enorme en términos de ruido.</p><h4>Fuentes con salidas NO aisladas (daisy chain)</h4><p>El cable daisy chain conecta varios pedales al mismo cable de alimentación. Económico pero problemático: cualquier interferencia en un pedal se transmite a todos los demás. Funciona aceptablemente solo con pedales analógicos sencillos de bajo consumo.</p><h4>Fuentes con salidas AISLADAS</h4><p>Cada salida tiene su propio transformador independiente. El ruido de un pedal no afecta a los demás. <strong>Obligatorio si tienes pedales digitales (delay, reverb, looper) combinados con analógicos</strong>.</p><h4>Fuentes recomendadas en España (con IVA incluido)</h4><ul><li>Truetone 1 Spot Pro CS7: ~120€. 7 salidas aisladas.</li><li>MXR DC Brick: ~80€. 10 salidas, 4 aisladas.</li><li>Strymon Zuma: ~250€. El premium. 9 salidas completamente aisladas.</li><li>Harley Benton PowerPlant ISO-2: ~35€. Económica con 2 salidas aisladas.</li></ul>`,
  },
  {
    slug: 'pedales-mayor-consumo',
    title: 'Los Pedales que más Consumen: Digitales, Reverbs y Polyphonic',
    content: `<p>El consumo en mA varía enormemente según el tipo de pedal. Conocer los consumos típicos te ayuda a dimensionar la fuente antes de comprarla.</p><h4>Consumos típicos por tipo</h4><ul><li><strong>Overdrive/Distorsión analógico:</strong> 5-15mA (Boss DS-1: 3mA, Tube Screamer: 6mA)</li><li><strong>Compresor:</strong> 5-20mA</li><li><strong>Chorus/Flanger/Phaser analógico:</strong> 10-30mA</li><li><strong>Delay digital:</strong> 50-200mA (Boss DD-8: 85mA, Strymon Timeline: 300mA)</li><li><strong>Reverb digital:</strong> 100-300mA (Boss RV-6: 120mA, Strymon BigSky: 300mA)</li><li><strong>Looper:</strong> 100-400mA</li><li><strong>Pedales a 18V (Timmy, algunos Klon clones):</strong> El mismo consumo en mA pero el voltaje importa</li></ul><p>Los pedales Strymon son los reyes del consumo: BigSky, Timeline y Mobius cada uno consume ~300mA. Un pedalboard con los tres necesita al menos 1.000mA solo para ellos.</p>`,
  },
  {
    slug: 'polaridad-invertida-pedales',
    title: 'Polaridad Invertida en Pedales: El Error que Destruye tu Equipo',
    content: `<p>La mayoría de los pedales modernos usan <strong>centro negativo</strong> (barrel connector con positivo en el exterior y negativo en el interior). Pero algunos pedales, especialmente vintage y algunas marcas específicas, usan <strong>centro positivo</strong>.</p><h4>Pedales conocidos con polaridad invertida (centro positivo)</h4><ul><li>BOSS pedales vintage (hasta mediados de los 80)</li><li>Algunos pedales Ibanez vintage</li><li>DOD pedales vintage</li><li>Zvex (algunos modelos)</li></ul><h4>Consecuencias de conectar con polaridad incorrecta</h4><p>En el mejor caso, el pedal simplemente no funcionará. En el peor caso, si el pedal no tiene protección de polaridad, el circuito puede quemarse instantáneamente. Siempre verifica el manual antes de conectar un pedal de segunda mano.</p><p>Los adaptadores de polaridad son baratos (~3€) y salvan equipos caros. Tenlos siempre en el maletín.</p>`,
  },
  {
    slug: 'pedalboard-compacto',
    title: 'Construir un Pedalboard Compacto y Silencioso: Guía Práctica',
    content: `<p>El pedalboard perfecto no es el que tiene más pedales, sino el que tiene los correctos, bien organizados y sin ruido. La planificación previa evita rediseños costosos.</p><h4>Orden estándar de la cadena de señal</h4><p>Guitarra → <strong>1. Afinador</strong> → 2. Filtros/Wah → 3. Compresores → 4. Overdrive/Distorsión → 5. Modulación (chorus, flanger) → 6. Delay/Echo → 7. Reverb → Amplificador</p><h4>Reglas de cableado silencioso</h4><ul><li>Cables lo más cortos posible (cada 30cm de cable añade capacitancia que roba agudos)</li><li>El cable de guitarra al primer pedal puede ser más largo, los inter-pedales deben ser cortos</li><li>Cables en ángulo recto (L-shaped) entre pedales adyacentes</li><li>Nunca cruzar cables de señal con cables de alimentación en paralelo — cruces en perpendicular son aceptables</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="pedales-guitarra"
      title="Calculadora Fuente Pedales Guitarra"
      emoji="🎸"
      tagline="Evita sobrecargar tu fuente de alimentación en directo"
      description="Todo lo que necesitas saber sobre fuentes de alimentación para pedales. Elimina el ruido y dimensiona tu pedalboard correctamente."
      heroText="¿Cuántos mA consume tu pedalboard? Una fuente insuficiente provoca ruido y apagones en directo. Calcula el consumo total antes de comprar."
      accentColor="#1A1A2E"
      articles={articles}
    />
  )
}
