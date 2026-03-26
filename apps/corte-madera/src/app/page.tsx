import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'tipos-tableros-mdf-carpinteria',
    title: 'MDF, DM, Contrachapado y Melamina: Cuál Elegir para cada Proyecto',
    content: `<p>Elegir el tablero incorrecto es uno de los errores más costosos en carpintería. Cada material tiene propiedades muy distintas de precio, resistencia y trabajabilidad.</p><h4>Comparativa de los tableros más usados en España</h4><ul><li><strong>MDF (Medium Density Fiberboard):</strong> El más homogéneo. Perfecto para pintar y fresar. Absorbe humedad, no apto para exterior. Precio: 20-35€/chapa 244×122cm.</li><li><strong>DM (igual que MDF en España):</strong> Mismo material, diferente nombre regional.</li><li><strong>Contrachapado (plywood):</strong> Capas cruzadas de madera. Más resistente a la humedad. Cantos irregulares difíciles de tapar. Precio: 25-50€/chapa según calidad.</li><li><strong>Melamina:</strong> MDF con recubrimiento decorativo. No necesita pintura. Cantos requieren canto de PVC. Precio: 30-50€/chapa.</li><li><strong>OSB (tablero de virutas):</strong> El más barato. Solo para estructuras y embalaje. Precio: 15-20€/chapa.</li></ul>`,
  },
  {
    slug: 'medidas-estandar-chapas-espana',
    title: 'Medidas Estándar de Chapas en España: Lo que Venden en Leroy Merlín y Bricomart',
    content: `<p>Conocer las medidas estándar te permite planificar los cortes antes de ir a la tienda y calcular exactamente cuántas chapas necesitas sin desperdicio innecesario.</p><h4>Medidas más comunes en España</h4><ul><li><strong>2440 × 1220mm (244 × 122cm):</strong> La más estándar. Encontrada en todos los proveedores.</li><li><strong>2800 × 2070mm:</strong> Formato grande, solo en carpinterías mayoristas.</li><li><strong>2070 × 1220mm:</strong> Formato reducido disponible en Leroy Merlín.</li><li><strong>Personalizadas:</strong> Bricomart y Bauhaus ofrecen servicio de corte in situ.</li></ul><p>Consejo: Los grandes distribuidores (Tableros Urales, Finsa, Sonae) venden en palés mínimos. Para pequeñas cantidades, Leroy Merlín o Bricomart con servicio de corte es la opción más económica.</p>`,
  },
  {
    slug: 'optimizar-cortes-manualmente',
    title: 'Cómo Optimizar Cortes a Mano: El Método del Papel Cuadriculado',
    content: `<p>Antes de los optimizadores digitales, los carpinteros usaban papel cuadriculado a escala para distribuir las piezas. Este método sigue siendo válido y te da intuición sobre el desperdicio.</p><h4>Técnica del mapa de corte en papel</h4><p>1. Dibuja la chapa en papel cuadriculado (1 cuadrado = 10cm).<br/>2. Recorta las piezas que necesitas a escala.<br/>3. Distribúyelas dentro de la chapa intentando que quepan juntas.<br/>4. Las piezas rectangulares se pueden rotar 90° libremente.<br/>5. Deja 3-4mm entre cortes para el grosor de la sierra (kerf).</p><h4>El truco del primer corte largo</h4><p>Siempre empieza con el corte más largo primero. Esto deja piezas grandes que son más fáciles de gestionar en los cortes siguientes. Cortar en el orden inverso genera piezas pequeñas difíciles de sujetar con seguridad.</p>`,
  },
  {
    slug: 'software-optimizacion-corte',
    title: 'Software Gratuito para Optimizar Cortes de Madera',
    content: `<p>Existen herramientas digitales especializadas que resuelven el problema de empaquetado (bin packing) de forma óptima, algo que nuestra calculadora también hace de forma simplificada.</p><h4>Opciones gratuitas más usadas</h4><ul><li><strong>CutList Plus (versión gratuita limitada):</strong> El estándar del sector. Genera listas de corte detalladas con etiquetas.</li><li><strong>OpenCutList (extensión SketchUp):</strong> Completamente gratuito y open source. Ideal si ya usas SketchUp para diseño.</li><li><strong>Cut Planner (web):</strong> Sencillo y online, sin instalación.</li><li><strong>Hoja de cálculo personalizada:</strong> Con las fórmulas correctas, Excel o Google Sheets pueden hacer una optimización básica.</li></ul><p>Para proyectos grandes (cocinas, armarios completos), vale la pena invertir en el CutList Plus completo (~100€) — se paga solo en la primera obra por el ahorro de material.</p>`,
  },
  {
    slug: 'calcular-desperdicio-madera',
    title: 'El Desperdicio en Carpintería: Cómo Calcularlo y Reducirlo al Mínimo',
    content: `<p>Un porcentaje de desperdicio del 15-20% es normal en proyectos bien optimizados. Por encima del 30%, hay margen de mejora significativo en la planificación.</p><h4>Factores que aumentan el desperdicio</h4><ul><li><strong>Kerf (grosor de sierra):</strong> Una sierra circular quita 2,5-3,5mm por corte. En una chapa con muchos cortes, esto suma varios cm² de material perdido.</li><li><strong>Piezas no rectangulares:</strong> Formas curvas o trapezoidales aumentan inevitablemente el desperdicio.</li><li><strong>Diferencia de orientación:</strong> Veta de madera o melamina que obliga a orientar todas las piezas en el mismo sentido.</li></ul><h4>Estrategias para reducir desperdicio</h4><ul><li>Agrupa piezas del mismo ancho en filas continuas</li><li>Los recortes grandes (más de 30cm) guárdalos para proyectos pequeños futuros</li><li>Compra chapas de medidas distintas si el proveedor las tiene — a veces un formato más pequeño da menos desperdicio</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="corte-madera"
      title="Optimizador de Corte de Madera"
      emoji="🪵"
      tagline="Aprovecha al máximo cada chapa de MDF y minimiza el desperdicio"
      description="Guías técnicas para carpintería y bricolaje: tipos de tableros, medidas estándar y cómo planificar tus cortes para no desperdiciar nada."
      heroText="¿Cuántas chapas de MDF necesitas? ¿Cómo distribuir los cortes para desperdiciar lo mínimo? Nuestra calculadora hace el bin packing por ti."
      accentColor="#92400E"
      articles={articles}
    />
  )
}
