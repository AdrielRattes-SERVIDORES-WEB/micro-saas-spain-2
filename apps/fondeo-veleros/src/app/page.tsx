import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'tipos-anclas-veleros-espana',
    title: 'Las Mejores Anclas para Navegar por España: Delta, CQR, Danforth y Rocna',
    content: `<p>El ancla es el sistema de seguridad más importante a bordo. En España, las condiciones de fondeo varían enormemente: fondos arenosos del Mediterráneo, roca de las rías gallegas y posidonia protegida en Baleares requieren anclas con características diferentes.</p><h4>Las anclas más usadas en España</h4><ul><li><strong>Delta (Lewmar Delta):</strong> La favorita del Mediterráneo. Excelente en arena, acepta bien el viraje. Hincha en la proa sin rodar. ~100-200€.</li><li><strong>CQR (Plow):</strong> Clásica articulada. Buena en arena y algas. Puede fallar en fondos duros. Las copias baratas de este diseño son poco fiables.</li><li><strong>Danforth (Fortress):</strong> Excelente en arena y barro. Pliega para guardar. Pésima en roca o posidonia. Ideal como ancla de proa secundaria o para anclar desde popa.</li><li><strong>Rocna/Manson Supreme/SPADE:</strong> Nueva generación. El mejor agarre en la mayoría de fondos. Precio elevado (~300-600€) pero justificado.</li></ul>`,
  },
  {
    slug: 'fondear-correctamente',
    title: 'Cómo Fondear Correctamente: El Procedimiento Paso a Paso',
    content: `<p>Un fondeo mal ejecutado puede resultar en garreo (el ancla arrastra) durante la noche con consecuencias potencialmente graves. El procedimiento correcto es simple pero hay que seguirlo siempre.</p><h4>Procedimiento de fondeo seguro</h4><p><strong>1. Reconocimiento:</strong> Comprueba la carta náutica. Verifica profundidad, tipo de fondo y otras embarcaciones. Calcula el radio de giro necesario.</p><p><strong>2. Posicionamiento:</strong> Avanza al punto elegido, coloca la proa contra el viento o corriente, reduce a velocidad mínima.</p><p><strong>3. Fondeo:</strong> Para el barco, fondea el ancla, y empieza a soltar cadena mientras retrocedes lentamente. No dejes caer toda la cadena en el mismo punto.</p><p><strong>4. Tensado:</strong> Con toda la cadena fuera, da marcha atrás con motor hasta tensar el fondeo. El ancla debe clavarse.</p><p><strong>5. Verificación:</strong> Toma dos marcaciones visuales en tierra. Comprueba cada 30 minutos las primeras 2 horas.</p>`,
  },
  {
    slug: 'escopo-calculo-cadena',
    title: 'El Escopo o Ratio de Fondeo: La Clave para no Garrar',
    content: `<p>El <strong>escopo</strong> (en inglés: scope) es la relación entre la longitud de la cadena/orinque soltada y la profundidad total (profundidad + altura del punto de fondeo en la proa). Es el factor más importante para que el ancla trabaje correctamente.</p><h4>Ratios recomendados por condición</h4><ul><li><strong>Tiempo calmado, ancla de día:</strong> 3:1 mínimo</li><li><strong>Condiciones normales:</strong> 5:1</li><li><strong>Viento 15-25 nudos:</strong> 7:1</li><li><strong>Temporal o fondeo de noche:</strong> 10:1 o más</li></ul><p>El escopo funciona porque cuanta más cadena sueltas, más horizontal es el ángulo de tracción sobre el ancla. Un ángulo horizontal permite que el ancla profundice; un ángulo vertical la arranca.</p><p>Con <strong>solo cadena</strong> (sin orinque de nylon), el peso de la cadena crea un arco catenario que absorbe tirones bruscos. Con orinque, la elasticidad del nylon hace la misma función.</p>`,
  },
  {
    slug: 'fondear-posidonia-baleares',
    title: 'Fondear en Posidonia en Baleares: Normativa y Alternativas Legales',
    content: `<p>La posidonia oceánica (<em>Posidonia oceanica</em>) es una planta marina endémica del Mediterráneo declarada Patrimonio Natural. En España, <strong>fondear sobre posidonia está prohibido en casi todas las zonas de Baleares y el litoral catalán</strong> bajo severas multas.</p><h4>Normativa vigente en España</h4><ul><li>Fondear sobre posidonia puede generar multas de hasta <strong>10.000€</strong> bajo la Ley de Costas y normativas autonómicas de Baleares (BOIB).</li><li>En Cabrera, Ses Salines y Cap de Formentor el fondeo está completamente prohibido excepto en boyas ecológicas.</li></ul><h4>Cómo identificar la posidonia</h4><p>La posidonia aparece en carta náutica como fondo de hierba/alga. En el agua, se ve como una pradera verde oscura continua a 2-40m de profundidad. El ancla que cae sobre ella se clava difícilmente, y si lo hace, destroza la planta.</p><h4>Alternativas</h4><ul><li>Usar las boyas ecológicas instaladas en zonas protegidas (gratuitas o de bajo coste)</li><li>Fondear en arena en las caletas adyacentes</li><li>Usar anclas de menor daño (Fortress o Manson) que penetran más en los huecos de arena</li></ul>`,
  },
  {
    slug: 'garreo-como-detectar',
    title: 'Cómo Detectar que el Ancla está Garrando: Señales y Actuación',
    content: `<p>El garreo nocturno es una de las situaciones más peligrosas en la navegación costera. Detectarlo a tiempo puede evitar una varada o colisión con otra embarcación.</p><h4>Señales de garreo</h4><ul><li><strong>Visual:</strong> Las marcaciones visuales tomadas al fondear han cambiado. El barco no está en la misma posición relativa respecto a tierra.</li><li><strong>GPS:</strong> El rastro del GPS muestra movimiento continuo o circular. Las apps de fondeo (Anchor Watch, AnchorAlarm) alertan automáticamente.</li><li><strong>Táctil:</strong> Se nota vibración o trones en la cadena al bajar la mano por ella — el ancla está rodando por el fondo.</li><li><strong>Sonido:</strong> En silencio total, se puede escuchar el ancla arrastrando por el fondo rocoso.</li></ul><h4>Protocolo de actuación en garreo</h4><p>1. Enciende el motor inmediatamente.<br/>2. Intenta recuperar el ancla y reflondear con más escopo.<br/>3. Si no hay espacio, cambia de posición de fondeo.<br/>4. Como último recurso: el motor trabaja mientras aporreas el garreo.</p>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="fondeo-veleros"
      title="Calculadora Fondeo Veleros"
      emoji="⚓"
      tagline="Escopo exacto para no garrar en ninguna situación"
      description="Guía completa de fondeo para veleros en aguas españolas. Tipos de anclas, normativa de posidonia, escopo correcto y cómo detectar el garreo."
      heroText="¿Cuántos metros de cadena soltar para fondear con 20 nudos de viento a 8 metros de profundidad? Calcula el escopo exacto para dormir tranquilo."
      accentColor="#1E3A5F"
      articles={articles}
    />
  )
}
