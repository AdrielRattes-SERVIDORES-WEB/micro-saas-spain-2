import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'trailing-estrellas-explicacion',
    title: 'Por qué las Estrellas se Convierten en Trazos: La Rotación Terrestre y tu Cámara',
    content: `<p>La Tierra gira sobre su eje a una velocidad de 15° por hora (360° en 24 horas). Para una cámara fija apuntando al cielo, las estrellas se mueven respecto al sensor a esa velocidad. Si la exposición es demasiado larga, cada estrella dejará un trazo en lugar de un punto.</p><p>Este fenómeno, llamado <strong>trailing o arrastre</strong>, depende de cuatro factores: la longitud focal de la lente, el tamaño de los píxeles del sensor, la declinación a la que apunta la cámara y, por supuesto, el tiempo de exposición.</p><h4>La importancia de la región del cielo</h4><p>Las estrellas cercanas a la Estrella Polar (Polaris) se mueven muy poco — son casi estacionarias. Las estrellas en el ecuador celeste (declinación 0°) se mueven a la velocidad máxima. La regla NPF contempla este factor con la función coseno de la declinación, aunque para simplificar se asume siempre el peor caso (ecuador celeste).</p>`,
  },
  {
    slug: 'regla-500-vs-npf',
    title: 'La Regla de los 500 vs la Regla NPF: Cuál Usar con tu Cámara Moderna',
    content: `<p>Durante décadas, la <strong>Regla de los 500</strong> fue el estándar: divide 500 entre la distancia focal para obtener el tiempo máximo de exposición. Simple y efectiva... para cámaras de 12 megapíxeles.</p><p>Con las cámaras modernas de 24-50 megapíxeles y sensores más pequeños, la regla de los 500 ya no funciona bien. Los píxeles son tan pequeños que el trailing se hace visible antes de lo que la regla predice.</p><h4>Ejemplo comparativo</h4><p>Con una Sony A7 IV (33MP, Full Frame) y un objetivo 24mm f/2.8:</p><ul><li><strong>Regla 500:</strong> 500 / 24 = 20,8 segundos</li><li><strong>Regla NPF:</strong> ~8-10 segundos (según pixel pitch de ~4,3μm)</li></ul><p>Exponer 20 segundos con una cámara de 33MP producirá trailing perfectamente visible al hacer zoom en las estrellas. La regla NPF, desarrollada por investigadores de astrofotografía, da resultados precisos para cualquier combinación de cámara y objetivo.</p>`,
  },
  {
    slug: 'sensores-astrofotografia',
    title: 'Sensores Full Frame, APS-C y Micro 4/3: Cuál es Mejor para Astrofotografía',
    content: `<p>El tamaño del sensor tiene un impacto enorme en la astrofotografía. No solo afecta al campo de visión sino también al rendimiento en alta ISO y al tiempo máximo de exposición antes del trailing.</p><h4>Comparativa de sensores para astrofotografía</h4><ul><li><strong>Full Frame (35mm):</strong> El mejor. Mayor superficie = más luz capturada por píxel. ISO 3200-6400 usable sin demasiado ruido. El pixel pitch más grande = más segundos antes del trailing.</li><li><strong>APS-C:</strong> Buen equilibrio. Factor de recorte 1,5x (Nikon/Sony) o 1,6x (Canon). ISO 1600-3200 usable. El más popular entre aficionados serios por precio/rendimiento.</li><li><strong>Micro 4/3:</strong> Factor 2x. Más trailing visible en menos tiempo. Sin embargo, sus objetivos suelen tener distancias focales equivalentes más cortas, compensando algo la desventaja.</li></ul><h4>La trampa de los megapíxeles</h4><p>Más megapíxeles en el mismo tamaño de sensor = píxeles más pequeños = trailing más visible. Una Nikon D3500 de 24MP en APS-C tiene más restricciones de tiempo que una Nikon D700 de 12MP en Full Frame.</p>`,
  },
  {
    slug: 'mejores-destinos-astrofotografia-espana',
    title: 'Los Mejores Lugares para Astrofotografía en España: Cielos Oscuros Certificados',
    content: `<p>España tiene algunos de los cielos más oscuros de Europa occidental. La baja densidad de población en ciertas zonas, combinada con el clima despejado de la meseta y las islas, crea condiciones excepcionales para la astrofotografía.</p><h4>Los mejores destinos por Bortle Scale</h4><ul><li><strong>Teide (Tenerife, Bortle 1-2):</strong> Reserva Starlight UNESCO. A 2.300m de altitud, sobre las nubes y lejos de la contaminación lumínica. Uno de los mejores del mundo.</li><li><strong>Roque de los Muchachos (La Palma, Bortle 1):</strong> Sede del Observatorio del Roque. El cielo más oscuro de España. Reserva de la Biosfera Starlight.</li><li><strong>Calar Alto (Almería, Bortle 2-3):</strong> Sierra de los Filabres. Observatorio astronómico de la Junta de Andalucía. Cielos excepcionales 200+ noches al año.</li><li><strong>Picos de Europa (Bortle 2-3):</strong> Especialmente Fuente Dé y Potes.</li><li><strong>Bardenas Reales (Navarra, Bortle 3):</strong> Paisaje marciano único para composiciones espectaculares.</li></ul>`,
  },
  {
    slug: 'apilado-imagenes-astrofotografia',
    title: 'Image Stacking para Astrofotografía: Cómo Sumar Fotos para Reducir el Ruido',
    content: `<p>El <strong>apilado o stacking</strong> es la técnica más poderosa en astrofotografía: combinar múltiples exposiciones de la misma escena para promediar el ruido aleatorio y conservar la señal real de las estrellas.</p><h4>La matemática detrás del stacking</h4><p>El ruido en imagen digital es aleatorio (ruido gaussiano). Si apilas N imágenes idénticas, la señal (información real) se suma linealmente mientras el ruido se suma en cuadratura. El resultado: la relación señal/ruido mejora con la raíz cuadrada de N.</p><ul><li>4 imágenes: mejora ×2 (raíz de 4)</li><li>9 imágenes: mejora ×3</li><li>16 imágenes: mejora ×4</li><li>25 imágenes: mejora ×5</li></ul><h4>Software gratuito para stacking</h4><ul><li><strong>DeepSkyStacker (DSS):</strong> Windows. El estándar gratuito. Interfaz anticuada pero muy potente.</li><li><strong>Sequator:</strong> Windows. Más moderno que DSS, excelente para paisajes con estrellas (separa cielo de terreno).</li><li><strong>Siril:</strong> Windows/Mac/Linux. Open source. El más completo para procesado completo.</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="astrofotografia"
      title="Calculadora Astrofotografía NPF"
      emoji="🔭"
      tagline="Exposición máxima sin rastros de estrellas, calculada con la regla NPF"
      description="Domina la astrofotografía en España. La regla NPF explicada, sensores comparados y los mejores cielos oscuros del país."
      heroText="¿Cuántos segundos puedes exponer sin que las estrellas dejen trazos? Depende de tu focal, sensor y megapíxeles. Calcula el tiempo exacto."
      accentColor="#1E1B4B"
      articles={articles}
    />
  )
}
