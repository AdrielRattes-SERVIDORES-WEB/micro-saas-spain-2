import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'sal-maduracion-queso',
    title: 'El Papel de la Sal en la Maduración del Queso: Mucho más que Sabor',
    content: `<p>La sal en la elaboración del queso cumple cuatro funciones críticas que van mucho más allá del sabor: <strong>conservación, control de humedad, desarrollo de corteza y regulación de la fermentación</strong>.</p><h4>Las cuatro funciones de la sal</h4><ul><li><strong>Conservación:</strong> Inhibe el crecimiento de bacterias patógenas como Listeria y Salmonella. La sal crea un entorno osmótico desfavorable para los patógenos.</li><li><strong>Control de humedad:</strong> La sal extrae agua de la masa del queso por ósmosis. Más sal = queso más seco = más concentrado en sabor.</li><li><strong>Formación de corteza:</strong> El salado en superficie endurece la capa exterior, creando la corteza natural protectora.</li><li><strong>Regulación fermentativa:</strong> La sal ralentiza la actividad de las bacterias lácticas, controlando la acidificación y el desarrollo aromático.</li></ul><p>Un queso insuficientemente salado madurará demasiado rápido y tendrá textura pastosa. Un queso sobre-salado bloqueará la maduración y quedará duro y sin carácter.</p>`,
  },
  {
    slug: 'quesos-espana-artesanales',
    title: 'Los Quesos Artesanales más Elaborados en Casa en España',
    content: `<p>La tradición quesera española es extraordinariamente rica. Muchos de los quesos emblemáticos de nuestras regiones pueden elaborarse en casa con equipamiento básico.</p><h4>Quesos más populares para hacer en casa</h4><ul><li><strong>Queso fresco tipo Burgos:</strong> El más fácil. Listo en 24 horas. Sin maduración. Solo cuajo, leche y sal.</li><li><strong>Queso tipo Manchego joven:</strong> 30-60 días de maduración. Necesita prensado y control de humedad.</li><li><strong>Queso de cabra tipo Rulo:</strong> Con moho Penicillium candidum. Maduración 2-3 semanas.</li><li><strong>Idiazábal casero:</strong> Queso ahumado vasco. Técnicamente exigente pero alcanzable.</li><li><strong>Mató catalán:</strong> Requesón fresco. Sin maduración, listo en pocas horas.</li></ul>`,
  },
  {
    slug: 'proceso-basico-queseria',
    title: 'Proceso Básico de Quesería Artesanal: Del Cuajado al Salado',
    content: `<p>Elaborar queso en casa requiere cuatro ingredientes esenciales: leche de calidad, cultivo iniciador, cuajo y sal. El proceso tiene pasos bien definidos que no deben saltarse.</p><h4>Las 6 etapas del queso artesanal</h4><p><strong>1. Pasteurización (opcional):</strong> A 63°C durante 30 minutos (LTLT) o 72°C durante 15 segundos (HTST). Obligatoria si la leche no es certificada.</p><p><strong>2. Adición del cultivo:</strong> Las bacterias lácticas (Lactococcus lactis principalmente) acidifican la leche bajando el pH de 6,5 a ~6,2 en 30-60 minutos.</p><p><strong>3. Cuajado:</strong> El cuajo (enzima quimosina) coagula la caseína. A 32-35°C, en 45-60 minutos.</p><p><strong>4. Corte de la cuajada:</strong> El tamaño del corte determina el contenido de humedad: cortes pequeños = queso seco, cortes grandes = queso húmedo.</p><p><strong>5. Prensado:</strong> Elimina el suero sobrante. De 0 horas (queso fresco) hasta 24 horas (queso duro).</p><p><strong>6. Salado:</strong> En seco o en salmuera. Aquí entra nuestra calculadora.</p>`,
  },
  {
    slug: 'temperatura-humedad-maduración',
    title: 'Temperatura y Humedad en la Cueva de Maduración Casera',
    content: `<p>La cueva de maduración es el corazón del proceso quesero. Sin las condiciones correctas de temperatura y humedad, el queso más cuidadosamente elaborado puede fracasar.</p><h4>Condiciones por tipo de queso</h4><ul><li><strong>Quesos frescos:</strong> 4-8°C, 85-90% HR. Consumo inmediato o hasta 7 días.</li><li><strong>Quesos tiernos/semicurados:</strong> 8-12°C, 80-85% HR.</li><li><strong>Quesos curados:</strong> 10-14°C, 75-80% HR.</li><li><strong>Quesos con moho (azul, Brie):</strong> 10-13°C, 90-95% HR.</li></ul><h4>Soluciones caseras para la cueva</h4><ul><li><strong>Nevera vieja regulada:</strong> Con un controlador de temperatura PID (~20€) puedes fijar la temperatura exacta.</li><li><strong>Bodega de vinos:</strong> Las bodegas eléctricas para vino son perfectas: temperatura y humedad controladas.</li><li><strong>Sótano natural:</strong> En muchas regiones de España, los sótanos mantienen 12-15°C y 75-80% HR de forma natural.</li></ul>`,
  },
  {
    slug: 'errores-queso-casero',
    title: 'Los Errores más Comunes al Hacer Queso en Casa (y Cómo Evitarlos)',
    content: `<p>La mayoría de los fallos en quesería casera se deben a contaminación, temperatura incorrecta o problemas con el cuajado. Identificar el error a tiempo puede salvar el queso.</p><h4>Error 1: Leche UHT</h4><p>La leche UHT (Ultra High Temperature) ha sido calentada a 135°C, lo que destruye las proteínas del suero necesarias para un cuajado firme. Usa siempre <strong>leche pasteurizada fresca</strong> o leche cruda certificada.</p><h4>Error 2: Cuajo insuficiente o temperatura incorrecta</h4><p>El cuajo actúa entre 28-40°C. Por debajo de 20°C o por encima de 45°C se inactiva. Mantén la temperatura constante durante el cuajado.</p><h4>Error 3: Sal yodada</h4><p>El yodo inhibe el crecimiento de los cultivos bacterianos beneficiosos. Usa siempre <strong>sal sin yodo</strong> para queso.</p><h4>Error 4: Recipientes con restos de jabón</h4><p>El jabón residual mata los cultivos lácticos. Esteriliza con agua hirviendo, no con detergente.</p>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="salmuera-quesos"
      title="Calculadora Salmuera de Quesos"
      emoji="🧀"
      tagline="Tiempo y concentración exacta para quesos artesanales perfectos"
      description="Todo lo que necesitas saber sobre quesería artesanal en España. Desde el papel de la sal hasta las condiciones de maduración perfectas."
      heroText="¿Haces queso en casa? El salado es la etapa más técnica: demasiado o muy poco sal arruina meses de trabajo. Calcula la salmuera exacta."
      accentColor="#D97706"
      articles={articles}
    />
  )
}
