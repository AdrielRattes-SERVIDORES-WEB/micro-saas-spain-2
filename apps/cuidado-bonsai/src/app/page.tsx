import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'bonsai-diferente-otras-plantas',
    title: 'Por qué el Bonsái es Diferente a Cualquier Otra Planta de Interior',
    content: `<p>El bonsái no es una planta de interior decorativa. Es un árbol en miniatura que replica las mismas necesidades que tendría en la naturaleza: luz solar directa, ciclos estacionales y riegos adaptados al clima.</p><p>El error más común en España es tratar un bonsái como una planta de interior. La mayoría de las especies de bonsái más vendidas (Juniperus, Pinus, Zelkova) son <strong>árboles de exterior que necesitan pleno sol y frío invernal</strong>. Meterlos en casa los mata lentamente.</p><h4>Bonsáis de interior vs exterior en España</h4><ul><li><strong>Interior (temperatura constante):</strong> Ficus retusa, Carmona retusa, Serissa foetida, Schefflera</li><li><strong>Exterior obligatorio:</strong> Juniperus, Pinus, Zelkova, Acer palmatum, Prunus, Olivo</li></ul><p>La regla simple: si la especie da flores o frutos comestibles en la naturaleza (olivo, manzano, granado), necesita el frío invernal para florecer al año siguiente.</p>`,
  },
  {
    slug: 'sustrato-bonsai-espana',
    title: 'El Sustrato Correcto para Bonsái en España: Akadama, Pumita y Kiryu',
    content: `<p>El sustrato es el factor que más impacta en la salud a largo plazo de un bonsái. La tierra de jardín convencional es completamente inadecuada: compacta con los riegos, ahoga las raíces y no permite el drenaje correcto.</p><h4>Componentes del sustrato profesional</h4><ul><li><strong>Akadama:</strong> Arcilla volcánica japonesa. Retiene agua y nutrientes pero drena bien. Precio España: ~15-20€/litro. Se deshace en 2-3 años y hay que reponer.</li><li><strong>Pumita (Pumice):</strong> Roca volcánica triturada. Excelente drenaje y aireación. Inerte, no aporta nutrientes. ~8-12€/litro.</li><li><strong>Kiryu:</strong> Arena volcánica de grano grueso. Similar a pumita. Muy usada en Japón.</li><li><strong>Grava de cuarzo lavada:</strong> Alternativa económica española (~3-5€/kg en viveros).</li></ul><h4>Mezclas según el clima español</h4><ul><li><strong>Zonas secas (Madrid, Castilla, Extremadura):</strong> 60% Akadama + 20% Pumita + 20% Kiryu</li><li><strong>Zonas húmedas (Galicia, Asturias):</strong> 40% Akadama + 40% Pumita + 20% Kiryu</li></ul>`,
  },
  {
    slug: 'riego-bonsai-verano-espana',
    title: 'Riego en Verano en España: El Mayor Reto del Bonsái en Climas Cálidos',
    content: `<p>El verano español es el mayor enemigo del bonsái no aclimatado. En Sevilla, Córdoba o Madrid, las temperaturas de 38-42°C pueden secar completamente un bonsái pequeño en pocas horas de sol directo.</p><h4>Estrategias de supervivencia estival</h4><ul><li><strong>Riego doble:</strong> En pleno verano, algunos bonsáis de exterior necesitan riego mañana y tarde.</li><li><strong>Riel de media sombra:</strong> Protege del sol de mediodía (12h-17h) sin quitar la luz matutina.</li><li><strong>Bandeja de agua:</strong> Poner el bonsái sobre una bandeja con grava húmeda aumenta la humedad local sin encharcar las raíces.</li><li><strong>Microclima:</strong> Agrupa los bonsáis juntos — la evapotranspiración colectiva crea un microclima más fresco.</li></ul><p>Señal de alerta: hojas enrolladas hacia dentro = estrés hídrico severo. Riega inmediatamente sumergiéndolo en agua 2-3 minutos.</p>`,
  },
  {
    slug: 'abonado-bonsai',
    title: 'Calendario de Abonado para Bonsái: Qué, Cuándo y Cuánto',
    content: `<p>El abonado del bonsái sigue el ritmo de su ciclo vegetativo. Abonar en invierno cuando el árbol está dormido es inútil; no abonar en primavera cuando está en pleno crecimiento es perder la mejor oportunidad del año.</p><h4>Calendario general para España</h4><ul><li><strong>Primavera (marzo-mayo):</strong> Abono rico en nitrógeno (N alto). Estimula el crecimiento de hojas y ramas. Ej: NPK 10-5-5</li><li><strong>Verano (junio-agosto):</strong> Abono equilibrado. NPK 6-6-6. Mantiene sin estimular crecimiento excesivo con calor.</li><li><strong>Otoño (septiembre-noviembre):</strong> Abono rico en fósforo y potasio (N bajo). Endurece la madera para el invierno. Ej: NPK 3-10-10</li><li><strong>Invierno (diciembre-febrero):</strong> Sin abono para especies caducifolias. Abono muy reducido para perennifolios en zonas templadas.</li></ul>`,
  },
  {
    slug: 'herramientas-bonsai-basicas',
    title: 'Herramientas Básicas de Bonsái: Qué Comprar Primero en España',
    content: `<p>El mercado de herramientas de bonsái es enorme y puede ser abrumador. Para empezar, necesitas muy pocas herramientas pero deben ser de calidad aceptable.</p><h4>El kit mínimo indispensable</h4><ul><li><strong>Tijeras de poda (concave cutters):</strong> Para cortar ramas dejando una cicatriz cóncava que cierra limpiamente. ~20-40€ en acero inoxidable básico.</li><li><strong>Tijeras de hoja:</strong> Para pinzado de yemas y hojas finas. ~15-25€.</li><li><strong>Alicate de doblado:</strong> Para doblar ramas con alambre. ~20-30€.</li><li><strong>Palita de trasplante:</strong> Para mover tierra en el tiesto. ~10€.</li><li><strong>Alambre de aluminio:</strong> Rollo de 1mm, 2mm y 3mm. ~10-15€ el set.</li></ul><h4>Dónde comprar en España</h4><ul><li><strong>Bonsái Nexus (online):</strong> El mayor especialista español online.</li><li><strong>El Árbol del Maestro (Madrid):</strong> Tienda física con asesoramiento.</li><li><strong>Amazon España:</strong> Marcas Kaneshin y Tinyroots disponibles con envío rápido.</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="cuidado-bonsai"
      title="Guía de Riego Bonsái España"
      emoji="🌳"
      tagline="Frecuencia de riego exacta según tu especie y provincia"
      description="Aprende a cuidar tu bonsái en el clima español. Sustrato, riego estacional, abonado y herramientas para cada especie."
      heroText="¿Con qué frecuencia debes regar tu bonsái en Valencia en verano? ¿Y en Galicia en primavera? El clima español varía enormemente — tu riego también."
      accentColor="#065F46"
      articles={articles}
    />
  )
}
