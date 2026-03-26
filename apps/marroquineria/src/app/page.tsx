import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'tipos-cuero-vegetal-cromo',
    title: 'Cuero Vegetal vs Curtido al Cromo: Diferencias que Afectan al Precio',
    content: `<p>El tipo de cuero que usas determina no solo la calidad del producto final, sino también el precio que puedes cobrar. Hay dos grandes familias de cuero en el mercado artesanal español:</p><h4>Cuero curtido vegetalmente (Full Grain Veg Tan)</h4><p>Curtido con taninos naturales de corteza de árbol. El proceso dura entre 30 y 60 días. Es el preferido por los marroquineros artesanales porque:</p><ul><li>Envejece con gracia (patina natural con el uso)</li><li>Acepta tintes de agua perfectamente</li><li>Es más rígido, ideal para cinturones y fundas</li><li>Precio: 30-60€ por pie cuadrado en calidad premium</li></ul><h4>Cuero curtido al cromo</h4><p>Curtido con sales de cromo en 24-48 horas. Más suave, flexible y resistente al agua. Usado en bolsos, ropa y tapicería. Precio: 10-25€ por pie cuadrado. Menos valorado por los coleccionistas pero más práctico para ciertos artículos.</p>`,
  },
  {
    slug: 'herramientas-basicas-marroquineria',
    title: 'Herramientas Básicas para Empezar en Marroquinería',
    content: `<p>Para empezar en marroquinería no necesitas invertir 500€ desde el primer día. Hay un kit mínimo que cubre el 80% de los proyectos básicos:</p><h4>Kit inicial (inversión: 80-120€)</h4><ul><li><strong>Tabla de corte:</strong> HDPE o mármol, imprescindible</li><li><strong>Cúter rotativo + regla metálica:</strong> Para cortes rectos perfectos</li><li><strong>Punzón de agujeros (pricking iron):</strong> 3-4mm de separación, el más versátil</li><li><strong>Agujas para cuero x2:</strong> Siempre trabaja con dos para costuras tipo sellero</li><li><strong>Hilo encerado:</strong> Lin-Cable o Tiger Thread, grosor 0.8mm</li><li><strong>Pegamento de contacto (Renia Colle de Cologne):</strong> El estándar en España</li><li><strong>Biselador de bordes n°2:</strong> Para acabados limpios</li></ul>`,
  },
  {
    slug: 'precios-cuero-espana',
    title: 'Dónde Comprar Cuero en España y Precios Actuales del Mercado',
    content: `<p>El abastecimiento de cuero en España se concentra en Ubrique (Cádiz) — la capital española de la marroquinería — y en Barcelona. Conocer los precios del mercado es esencial para calcular correctamente tus costes.</p><h4>Proveedores principales en España</h4><ul><li><strong>Curtidos Badalona / Pielcolor (Barcelona):</strong> Excelente selección de veg tan y cuero de vacuno. Venta al público desde 2 pies cuadrados.</li><li><strong>Marroquinería Ubrique:</strong> Precio de origen, especialmente para cuero de primera calidad.</li><li><strong>Tandy Leather (online):</strong> Referencia mundial para veg tan, envíos desde EE.UU. con IVA en frontera.</li><li><strong>Springfield Leather (online):</strong> Alternativa americana con buen rango de precios.</li></ul><h4>Precios orientativos 2024-2025</h4><ul><li>Veg tan 3-4mm (suela): 20-35€/pie²</li><li>Veg tan 1-2mm (marroquinería fina): 15-25€/pie²</li><li>Cromo-curtido suave (bolsos): 8-18€/pie²</li></ul>`,
  },
  {
    slug: 'como-poner-precio-artesania',
    title: 'Fórmula para Poner Precio Justo a tus Artesanías de Cuero',
    content: `<p>El error más común de los artesanos principiantes es calcular el precio solo con el coste del material. Esto lleva invariablemente a vender por debajo del coste real y terminar frustrándose con el negocio.</p><h4>La fórmula correcta</h4><p><strong>Precio de venta = (Material + Mano de obra + Costes indirectos) × Factor de margen</strong></p><ul><li><strong>Material:</strong> Cuero + herrajes + hilo + consumibles (pegamento, tinte, etc.)</li><li><strong>Mano de obra:</strong> Tus horas × tu tarifa por hora. La tarifa mínima recomendada es el Salario Mínimo Interprofesional de España dividido entre las horas mensuales (~8€/h bruto). Para artesanía de calidad, 15-25€/h es más realista.</li><li><strong>Costes indirectos:</strong> Amortización de herramientas, alquiler del espacio, electricidad. Normalmente un 15-20% adicional.</li><li><strong>Factor de margen:</strong> Para venta directa: 2-3x. Para venta a tiendas (precio mayorista): el margen debe ser mayor para que la tienda pueda recargar su 50-100%.</li></ul>`,
  },
  {
    slug: 'plataformas-vender-artesania',
    title: 'Dónde Vender tu Marroquinería Artesanal en España',
    content: `<p>Vender artesanía en España tiene varias vías, cada una con sus ventajas e inconvenientes desde el punto de vista del precio y del margen:</p><h4>Plataformas online</h4><ul><li><strong>Etsy:</strong> La referencia mundial para artesanía. Audiencia internacional que valora y paga por lo artesanal. Comisión: 6.5% + cuota de publicación.</li><li><strong>Artesanio (España):</strong> Plataforma española especializada en artesanía. Comisión más baja, audiencia más local.</li><li><strong>Instagram + tienda propia:</strong> El combo más rentable a largo plazo. Sin comisiones, pero requiere construir audiencia.</li></ul><h4>Venta presencial</h4><ul><li><strong>Mercados de artesanía:</strong> Alta conversión, contacto directo. Busca los mercados de artesanos en tu municipio o comunidad.</li><li><strong>Tiendas concept store:</strong> Consignación (30-40% para la tienda) o precio mayorista.</li><li><strong>Ferias de artesanía:</strong> FIMART (Madrid), Feria de Artesanía de Sevilla, etc.</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="marroquineria"
      title="Calculadora de Marroquinería"
      emoji="👜"
      tagline="Precio justo para tus artesanías de cuero en España"
      description="Guías completas para marroquineros artesanales: tipos de cuero, herramientas, precios del mercado y cómo valorar correctamente tu trabajo."
      heroText="¿Vendes artículos de cuero artesanal y no sabes si estás ganando o perdiendo dinero? Calcula el precio correcto con todos los costes incluidos."
      accentColor="#7B4A1E"
      articles={articles}
    />
  )
}
