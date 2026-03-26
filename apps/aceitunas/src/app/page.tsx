import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'por-que-aceitunas-amargan',
    title: '¿Por qué las Aceitunas del Árbol son Amargas? La Ciencia detrás',
    content: `<p>Las aceitunas frescas contienen un compuesto llamado <strong>oleuropeína</strong>, un glucósido fenólico que actúa como mecanismo de defensa natural del árbol. Es responsable del amargor intenso que hace imposible comerlas directamente del árbol.</p><p>La oleuropeína representa entre el 1-14% del peso seco de la aceituna verde y disminuye naturalmente durante la maduración, pero nunca desaparece por completo. Por eso el proceso de curado es necesario para hacerlas comestibles.</p><h4>Métodos de curado principales en España</h4><ul><li><strong>Con sosa (NaOH):</strong> El más rápido, hidroliza la oleuropeína en 8-12 horas</li><li><strong>Con sal seca:</strong> El más lento, tarda 2-3 meses pero conserva más matices</li><li><strong>En agua:</strong> Método tradicional, requiere cambios de agua durante 2-4 semanas</li><li><strong>Estilo griego (fermentación):</strong> En salmuera directamente, 6-12 meses</li></ul>`,
  },
  {
    slug: 'sosa-caustica-aceitunas',
    title: 'Cómo Usar la Sosa Cáustica en Aceitunas de Forma Segura',
    content: `<p>La <strong>sosa cáustica</strong> (hidróxido de sodio, NaOH) es el método más eficiente para eliminar el amargor de las aceitunas. Sin embargo, requiere extremo cuidado: es una sustancia altamente corrosiva que puede causar quemaduras graves.</p><h4>Equipamiento de seguridad obligatorio</h4><ul><li>Guantes de goma gruesos (nunca de látex fino)</li><li>Gafas de protección</li><li>Ropa que cubra los brazos</li><li>Recipiente de plástico o inox (NUNCA aluminio)</li></ul><h4>Proceso paso a paso</h4><p>1. Disuelve la sosa EN el agua fría (nunca al revés — genera calor)</p><p>2. Espera que se enfríe a temperatura ambiente</p><p>3. Sumerge las aceitunas completamente</p><p>4. Comprueba la penetración: corta una aceituna, la sosa debe haber penetrado 2/3 de la pulpa</p><p>5. Enjuaga abundantemente con agua durante 24-48 horas</p>`,
  },
  {
    slug: 'salmuera-conservacion',
    title: 'La Salmuera Perfecta para Conservar Aceitunas todo el Año',
    content: `<p>Una vez eliminado el amargor, las aceitunas necesitan conservarse en salmuera para mantenerse frescas hasta 12 meses. La concentración correcta de sal es clave: demasiado poca y se fermentan en exceso; demasiada y quedan incomibles de sal.</p><p>La concentración estándar para aceitunas de mesa en España es de <strong>80-100g de sal por litro de agua</strong>, lo que equivale a una salmuera al 8-10%.</p><h4>Tipos de sal recomendados</h4><ul><li><strong>Sal gruesa marina:</strong> La mejor opción, sin aditivos</li><li><strong>Sal de roca:</strong> Excelente alternativa</li><li><strong>Sal yodada:</strong> No recomendada — el yodo puede oscurecer las aceitunas y alterar la fermentación</li></ul><p>Añade vinagre de vino blanco (50ml por litro) para ajustar el pH y prolongar la conservación.</p>`,
  },
  {
    slug: 'variedades-aceitunas-espana',
    title: 'Variedades de Aceituna en España y su Idoneidad para el Aliño',
    content: `<p>España es el mayor productor mundial de aceitunas de mesa, con variedades muy distintas según la región. Cada variedad tiene diferentes tiempos de curado y concentraciones de oleuropeína.</p><h4>Variedades más comunes para aliño doméstico</h4><ul><li><strong>Manzanilla (Sevilla):</strong> La más popular para mesa. Curado con sosa: 8-10h. Pulpa firme y excelente.</li><li><strong>Gordal (Sevilla):</strong> La más grande. Curado con sosa: 10-14h. Perfecta para rellenos.</li><li><strong>Hojiblanca (Córdoba/Málaga):</strong> Muy aromática. Curado en agua: 3-4 semanas.</li><li><strong>Arbequina (Cataluña/Aragón):</strong> Pequeña y suave. Curado en salmuera directa: 4-6 meses.</li><li><strong>Verdial (Badajoz/Málaga):</strong> Dulce naturalmente. Curado con sosa: 6-8h.</li></ul>`,
  },
  {
    slug: 'aliñado-aceitunas',
    title: 'Recetas de Aliño para Aceitunas: Hierbas, Especias y Marinados',
    content: `<p>Una vez curadas y en salmuera, las aceitunas se pueden aliñar con infinitas combinaciones. El aliño se añade a la salmuera o directamente sobre las aceitunas escurridas.</p><h4>Aliño Andaluz Clásico (por kg de aceitunas)</h4><ul><li>Ajo: 4-6 dientes machacados</li><li>Comino: 1 cucharadita</li><li>Orégano: 1 cucharada</li><li>Pimentón dulce: ½ cucharadita</li><li>Tomillo fresco: 2 ramitas</li><li>Vinagre de Jerez: 50ml</li></ul><h4>Aliño al Estilo Marroquí</h4><ul><li>Limón en conserva: ¼ unidad en tiras</li><li>Cilantro fresco: 1 puñado</li><li>Comino molido: 1 cucharadita</li><li>Pimentón picante: ¼ cucharadita</li><li>Aceite de oliva: 3 cucharadas</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="aceitunas"
      title="Calculadora Cura de Aceitunas"
      emoji="🫒"
      tagline="Elimina el amargor con las proporciones exactas de sosa y sal"
      description="Todo lo que necesitas saber sobre la cura de aceitunas en casa. Desde la ciencia del amargor hasta la salmuera perfecta."
      heroText="¿Tienes aceitunas del árbol o compradas sin tratar? Calcula exactamente cuánta sosa y sal necesitas según el peso de tus aceitunas."
      accentColor="#5B7A3E"
      articles={articles}
    />
  )
}
