import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'que-es-resina-epoxi-mesas',
    title: '¿Qué es la Resina Epoxi y para qué sirve en Mesas de Río?',
    content: `<p>La <strong>resina epoxi</strong> es un polímero termoestable que se forma mezclando dos componentes: la resina base (parte A) y el endurecedor o catalizador (parte B). Al mezclarse, se produce una reacción química exotérmica que transforma el líquido en un sólido duro y transparente.</p><p>Las <strong>mesas de río</strong> (también llamadas river tables) son el proyecto más popular con epoxi en España. Consisten en dos tablas de madera maciza separadas por un canal de resina que simula un río. El resultado es una pieza única de alto valor decorativo.</p><h4>Tipos de resina según el uso</h4><ul><li><strong>Resina de baja viscosidad:</strong> Ideal para capas finas (menos de 5mm). Fluye perfectamente y elimina burbujas fácilmente.</li><li><strong>Resina de alta viscosidad (deep pour):</strong> Para capas de 20-50mm de una sola vez. Tiene menor exotermia.</li><li><strong>Resina UV:</strong> Se endurece con luz ultravioleta, útil para pequeñas reparaciones.</li></ul><p>Para mesas de río, siempre usa resina de tipo <em>deep pour</em> o diseñada específicamente para coladas gruesas. Una resina estándar puede generar demasiado calor y agrietar la pieza.</p>`,
  },
  {
    slug: 'proporcion-ab-resina',
    title: 'Proporción A:B Correcta y por qué NO puedes aproximarla',
    content: `<p>La proporción entre la resina (parte A) y el endurecedor (parte B) es absolutamente crítica. No es una receta de cocina donde puedes "añadir un poco más". Es una reacción química estequiométrica: los átomos deben encontrarse en proporciones exactas para que la polimerización sea completa.</p><h4>¿Qué pasa si te equivocas?</h4><ul><li><strong>Demasiada parte A:</strong> La resina queda pegajosa permanentemente. No hay solución — debes retirar toda la capa y empezar de nuevo.</li><li><strong>Demasiada parte B:</strong> La resina endurece pero queda frágil y puede tener burbujas internas.</li></ul><h4>Cómo medir correctamente</h4><p>Usa siempre una báscula de cocina, nunca vasos medidores de volumen. Las densidades de A y B son diferentes, por lo que el volumen no es un indicador fiable para proporciones en peso. Si tu resina indica 2:1 en volumen, pesa ambos componentes por separado.</p><p>La temperatura también afecta: a menos de 18°C, la reacción es más lenta y pueden quedar microburbujas. Calienta el local a 20-25°C antes de trabajar.</p>`,
  },
  {
    slug: 'preparacion-molde-epoxi',
    title: 'Preparación del Molde para Mesa de Río: Materiales y Técnica',
    content: `<p>El molde es la parte más infravalorada de un proyecto de resina epoxi. Un mal molde arruina horas de trabajo. La resina se adhiere a casi todo, excepto a algunos plásticos específicos.</p><h4>Materiales para el molde</h4><ul><li><strong>HDPE (polietileno de alta densidad):</strong> El mejor material. La resina no se adhiere en absoluto.</li><li><strong>Melamina:</strong> Muy usada en España, económica y efectiva si se aplica cera desmoldante.</li><li><strong>Plástico transparente tipo PET:</strong> Para moldes simples y de un solo uso.</li><li><strong>Silicona:</strong> Perfecta para formas complejas.</li></ul><h4>Pasos de preparación</h4><p>1. Asegúrate de que el molde esté perfectamente nivelado (usa nivel de burbuja, la resina es completamente horizontal)</p><p>2. Sella todas las juntas con silicona o cinta de carrocero</p><p>3. Aplica dos capas de cera desmoldante (si usas melamina)</p><p>4. Coloca la madera y verifica que no se mueve</p>`,
  },
  {
    slug: 'evitar-burbujas-epoxi',
    title: 'Cómo Eliminar las Burbujas de la Resina Epoxi',
    content: `<p>Las burbujas son el enemigo número uno de la resina epoxi. Aparecen durante la mezcla, al verter y desde la madera porosa. Eliminarlas correctamente es lo que diferencia un acabado profesional de uno amateur.</p><h4>Técnicas para eliminar burbujas</h4><ul><li><strong>Soplete o pistola de calor:</strong> Pasa la llama rápidamente a 10-15cm de la superficie. El calor reduce la viscosidad y las burbujas suben y estallan. No te detengas en un punto o quemarás la resina.</li><li><strong>Pistola de aire caliente:</strong> Más segura que el soplete, pero menos eficiente.</li><li><strong>Cámara de vacío:</strong> El método más profesional. Elimina el 100% de las burbujas antes de verter.</li></ul><h4>Prevención desde el origen</h4><p>Mezcla la resina lentamente (60-90 segundos, sin prisa) raspando las paredes del recipiente. Una mezcla agresiva introduce aire. Vierte también lentamente, desde una altura reducida. Pre-sella la madera con una capa fina de resina para cerrar los poros antes de la colada principal.</p>`,
  },
  {
    slug: 'lijado-pulido-epoxi',
    title: 'Cómo Lijar y Pulir Resina Epoxi hasta conseguir Espejo',
    content: `<p>Una vez curada la resina (mínimo 24-48 horas para desmoldar, 7 días para lijado completo), el proceso de acabado determina el aspecto final. El objetivo es pasar de una superficie opaca a un acabado tipo espejo.</p><h4>Progresión de lijas recomendada</h4><ul><li>Grano 80-120: Eliminación de imperfecciones grandes, niveles, goteos</li><li>Grano 180-240: Refinado de la superficie</li><li>Grano 320-400: Pre-pulido, la superficie empieza a verse</li><li>Grano 600-800: Superficie semi-brillante</li><li>Grano 1000-1500: Casi espejo</li><li>Grano 2000-3000: Espejo</li></ul><p>Usa siempre lija húmeda (waterproof) a partir del grano 400 con agua y una gotita de jabón. Limpia bien entre cada grano. Finaliza con pasta pulidora para coche o compound de cristal. El tiempo total de pulido para una mesa completa: 4-8 horas.</p>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="resina-epoxi"
      title="Calculadora de Resina Epoxi"
      emoji="🧪"
      tagline="Calcula exactamente cuánta resina necesitas para tu mesa de río"
      description="Guías técnicas gratuitas sobre resina epoxi para mesas de río y proyectos DIY. Proporciones, técnicas y acabados profesionales."
      heroText="¿Haciendo una mesa de río o proyecto de resina? Calcula el volumen exacto, las partes A y B y el peso total antes de comprar."
      accentColor="#1B5E7B"
      articles={articles}
    />
  )
}
