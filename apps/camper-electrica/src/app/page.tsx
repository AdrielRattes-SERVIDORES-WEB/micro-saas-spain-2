import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'instalacion-12v-peligrosa',
    title: 'Por qué la Instalación 12V en una Camper puede ser Peligrosa',
    content: `<p>Las instalaciones eléctricas 12V en furgonetas camper causan decenas de incendios en España cada año. La baja tensión genera una falsa sensación de seguridad: "no puede ser peligroso, es solo 12 voltios". Error grave.</p><p>La intensidad de corriente (amperios) es lo que quema, y un sistema 12V con la misma potencia que uno de 230V lleva <strong>19 veces más amperios</strong>. Un cable mal dimensionado se calienta, derrite su aislamiento y puede iniciar un incendio mientras duermes.</p><h4>Los tres errores más peligrosos</h4><ul><li>Usar cable de autoradio (0.75mm²) para circuitos de más de 5A</li><li>No poner fusibles o ponerlos de calibre excesivo</li><li>Uniones con cinta aislante en lugar de terminales crimpados</li></ul><p>La regla básica: el fusible protege el <strong>cable</strong>, no el aparato. El fusible debe estar lo más cerca posible de la batería y debe ser del tamaño correcto para el cable, no para la carga.</p>`,
  },
  {
    slug: 'tipos-cable-camper',
    title: 'Tipos de Cable para Camper y Cuándo Usar cada uno',
    content: `<p>No todos los cables son iguales. La elección del tipo de cable afecta a la seguridad, la flexibilidad y la duración de la instalación.</p><h4>Cable flexible H07V-K (el más usado)</h4><p>Cable de cobre flexible con aislamiento de PVC. El estándar para instalaciones de camper en España. Disponible desde 0.75mm² hasta 70mm². La letra K indica que es flexible (multifilamento), lo que facilita el tendido en curvas.</p><h4>Cable marino tinned copper</h4><p>Cobre estañado que resiste la oxidación. Ideal para zonas húmedas o para campers que viajan en entornos salinos (costas). Más caro pero dura décadas sin degradarse.</p><h4>Cable solar (doble aislamiento)</h4><p>Para la conexión entre paneles solares y regulador. Tiene doble aislamiento UV-resistente y está diseñado para exteriores. Obligatorio en la parte exterior del techo.</p><h4>Secciones más comunes</h4><ul><li>0.75-1.5mm²: Luces LED, sensores</li><li>2.5-4mm²: Nevera, cargadores USB</li><li>6-10mm²: Inversor pequeño, calefacción</li><li>16-35mm²: Conexión de baterías, inversor grande</li></ul>`,
  },
  {
    slug: 'baterias-litio-agm-camper',
    title: 'Litio vs AGM: Qué Batería Elegir para tu Camper',
    content: `<p>La elección de la batería es la decisión más importante (y cara) de la instalación eléctrica de una camper. En 2024-2025, el precio del litio ha bajado significativamente y la ecuación ha cambiado.</p><h4>Batería AGM (Absorbent Glass Mat)</h4><ul><li>Precio: 150-400€ para 100Ah</li><li>Ciclos de vida: 300-500 ciclos al 50% de descarga</li><li>Profundidad de descarga útil: 50% (no deben descargarse más)</li><li>Peso: 25-30kg para 100Ah</li><li>Sin mantenimiento, resistente a golpes</li></ul><h4>Batería de Litio LiFePO4</h4><ul><li>Precio: 300-700€ para 100Ah</li><li>Ciclos de vida: 2000-5000 ciclos al 80% de descarga</li><li>Profundidad de descarga útil: 80-90%</li><li>Peso: 10-14kg para 100Ah</li><li>Necesita BMS (Battery Management System) incorporado</li></ul><p>Conclusión: para uso intensivo (más de 100 días/año), el litio sale más barato a largo plazo. Para uso ocasional, el AGM es suficiente.</p>`,
  },
  {
    slug: 'dimensionado-alternador-camper',
    title: 'Cómo Dimensionar la Carga desde el Alternador del Coche',
    content: `<p>El alternador del vehículo es la fuente de carga más fiable para la batería auxiliar mientras conduces. Conectarlo correctamente es fundamental para no dañar el sistema eléctrico del vehículo.</p><h4>Métodos de conexión</h4><ul><li><strong>Relé de carga (D+):</strong> El método más simple. Se activa al arrancar el motor. Limitado a 30-50A. No protege contra sobrecarga de la batería de arranque.</li><li><strong>DC-DC Charger (MPPT):</strong> El método recomendado actualmente. Carga la batería auxiliar a su ritmo óptimo sin afectar a la batería de arranque. Permite carga de litio desde alternador de AGM.</li></ul><h4>Cableado desde alternador</h4><p>El cable entre la batería de arranque y la auxiliar debe dimensionarse para la intensidad máxima del relé o DC-DC. Un relé de 50A necesita cable de 10mm² mínimo con fusible de 50-60A cerca de cada batería.</p>`,
  },
  {
    slug: 'normativa-camper-espana',
    title: 'Normativa y Legalidad de Instalaciones Eléctricas en Campers en España',
    content: `<p>En España, las instalaciones eléctricas en vehículos de autocaravana y vehículos vivienda están sujetas a normativas específicas que pocas personas conocen.</p><h4>Marco legal</h4><p>La <strong>ITC-BT-25</strong> del Reglamento Electrotécnico de Baja Tensión establece los requisitos para instalaciones en vehículos. Para homologación como autocaravana, la instalación debe cumplir la norma EN 1648-1 (12V/24V) o EN 1648-2 (230V).</p><h4>¿Necesito inspector?</h4><p>Para uso personal, no es obligatorio. Para homologación de la reforma como vehículo de autocaravana (cambio de categoría en la DGT), sí requiere proyecto técnico firmado por un ingeniero y revisión de la ITV.</p><h4>Seguro y responsabilidad</h4><p>Si tu camper sufre un incendio por instalación deficiente y no está homologada, el seguro puede rechazar la cobertura. Documenta siempre tu instalación con fotos y esquemas.</p>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="camper-electrica"
      title="Calculadora Eléctrica Camper"
      emoji="⚡"
      tagline="Dimensiona tu instalación 12V sin riesgo de incendio"
      description="Guías técnicas sobre instalaciones eléctricas en furgonetas camper. Sección de cable, fusibles, baterías y normativa española."
      heroText="¿Convirtiendo una furgoneta en camper? Un cable mal dimensionado puede provocar un incendio. Calcula la sección correcta y el fusible adecuado."
      accentColor="#E6A817"
      articles={articles}
    />
  )
}
