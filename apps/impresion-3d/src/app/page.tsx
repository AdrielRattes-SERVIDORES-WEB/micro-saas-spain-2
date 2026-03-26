import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'tramos-luz-espana-pvpc',
    title: 'Los Tramos de Luz en España (PVPC): Cuándo Imprimir para Pagar Menos',
    content: `<p>En España, el precio de la electricidad varía según la hora del día bajo el sistema <strong>PVPC (Precio Voluntario al Pequeño Consumidor)</strong>. Hay tres tramos horarios con precios muy distintos.</p><h4>Los tres períodos tarifarios</h4><ul><li><strong>Punta (más caro ~0,29€/kWh):</strong> 10h-14h y 18h-22h en días laborables</li><li><strong>Llano (~0,18€/kWh):</strong> 8h-10h, 14h-18h y 22h-24h en laborables</li><li><strong>Valle (más barato ~0,14€/kWh):</strong> 0h-8h todos los días + fines de semana y festivos todo el día</li></ul><p>Para una impresora que consume 200W durante 8 horas, la diferencia entre imprimir en punta vs valle es de <strong>1,20€ por trabajo</strong>. En un mes con 20 impresiones, eso son 24€ de ahorro.</p><p>La conclusión práctica: <strong>programa tus impresiones largas durante la noche</strong> o los fines de semana. Muchas impresoras modernas (Bambu Lab, Prusa) tienen función de inicio programado.</p>`,
  },
  {
    slug: 'materiales-impresion-3d-precio',
    title: 'Coste Real de los Materiales: PLA, PETG, ABS y Resina en España',
    content: `<p>El coste del filamento es solo una parte del precio final. Hay que considerar también el <strong>porcentaje de desperdicio</strong> (purgados, soportes fallidos, cambios de color) que suele ser del 10-15% del consumo total.</p><h4>Precios orientativos 2024 en España</h4><ul><li><strong>PLA genérico:</strong> 15-20€/kg. El más barato y fácil de imprimir.</li><li><strong>PLA+ / PLA Pro:</strong> 22-30€/kg. Más resistente, merece la pena para piezas funcionales.</li><li><strong>PETG:</strong> 20-28€/kg. Resistente a golpes y temperatura, ideal para piezas de uso.</li><li><strong>ABS:</strong> 18-25€/kg. Necesita recinto cerrado. Vapores tóxicos, ventilación obligatoria.</li><li><strong>Resina (SLA/MSLA):</strong> 25-50€/L. Detalle excelente pero manipulación con guantes y mascarilla.</li></ul><p>Factores que elevan el coste real: velocidad de impresión alta (más fallos), temperaturas incorrectas (stringing, warping) y filamentos de mala calidad que atascan el hotend.</p>`,
  },
  {
    slug: 'amortizacion-impresora-3d',
    title: 'Cómo Calcular la Amortización de tu Impresora 3D por Hora',
    content: `<p>Muchos makers olvidan incluir la amortización de la impresora al calcular precios. Si vendes piezas sin contabilizarla, estás subvencionando a tus clientes con el desgaste de tu máquina.</p><h4>Fórmula de amortización por hora</h4><p>Amortización/h = (Precio impresora + repuestos año) / horas_uso_año</p><p>Ejemplo: Impresora de 400€ + 100€/año en repuestos (boquillas, correas, cama) = 500€/año. Si imprimes 1.000 horas al año: <strong>0,50€/hora de amortización</strong>.</p><h4>Repuestos más comunes y su frecuencia</h4><ul><li>Boquilla de latón: cada 200-400h (~3€)</li><li>Boquilla de acero endurecido: cada 800-1200h (~8€)</li><li>Correa GT2: cada 1-2 años (~5€)</li><li>Rodamientos lineales: cada 2-3 años (~15€ el set)</li><li>Sonda BLTouch/CR Touch: 2-4 años (~15€)</li></ul>`,
  },
  {
    slug: 'precio-venta-piezas-3d',
    title: 'Cómo Poner Precio a tus Piezas 3D para Vender en España',
    content: `<p>El error más común al vender piezas 3D es usar solo el coste del material como base. El mercado español tiene sus particularidades: Wallapop y Etsy son los canales principales para makers, y los compradores esperan precios razonables pero no regalados.</p><h4>Fórmula de precio recomendada</h4><p>Precio = (Material + Electricidad + Amortización) × Margen + Tiempo de gestión</p><p>El margen estándar en impresión 3D de servicio es del <strong>200-300%</strong> sobre costes directos. Esto puede parecer mucho, pero incluye: tiempo de configuración, monitoreo, post-procesado (lijado, pintado), embalaje y atención al cliente.</p><h4>Plataformas para vender en España</h4><ul><li><strong>Etsy:</strong> Ideal para piezas decorativas y personalizadas. Comisión 6,5%.</li><li><strong>Wallapop:</strong> Para clientes locales, sin comisión pero sin protección al vendedor.</li><li><strong>Fiverr:</strong> Para servicios de impresión a demanda.</li><li><strong>Tu propia web:</strong> Más trabajo inicial pero sin comisiones.</li></ul>`,
  },
  {
    slug: 'optimizar-tiempo-impresion',
    title: 'Optimizar Velocidad vs Calidad: El Equilibrio que Define tu Beneficio',
    content: `<p>Imprimir más rápido no siempre significa ganar más. Una pieza fallida que hay que reimprimir cuesta el doble: material desperdiciado + electricidad + tiempo de máquina bloqueada.</p><h4>Parámetros clave para el equilibrio velocidad/calidad</h4><ul><li><strong>Altura de capa:</strong> 0,2mm es el estándar. Para detalle usa 0,1mm (doble de tiempo). Para piezas funcionales, 0,3mm puede ser suficiente.</li><li><strong>Velocidad de impresión:</strong> 50-60mm/s es el punto dulce para la mayoría de impresoras FDM básicas. Por encima de 80mm/s empiezan los problemas de calidad en máquinas sin direct drive.</li><li><strong>Relleno (infill):</strong> 15% es suficiente para decorativo. 30-40% para funcional. 100% solo si necesitas máxima resistencia (y casi duplica el tiempo).</li></ul><p>Regla de oro: <strong>la primera impresión de un modelo nuevo siempre a 50% velocidad</strong>. Si sale bien, sube al 80% en la siguiente iteración.</p>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="impresion-3d"
      title="Calculadora Impresión 3D"
      emoji="🖨️"
      tagline="Precio real con el coste de luz en España incluido"
      description="Aprende a calcular el precio correcto de tus impresiones 3D considerando electricidad, material y amortización de la máquina."
      heroText="¿Vendes piezas 3D o imprimes para proyectos? Sin calcular bien el coste eléctrico real en España, estás perdiendo dinero en cada impresión."
      accentColor="#2563EB"
      articles={articles}
    />
  )
}
