import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'sal-nitro-charcuteria',
    title: '¿Qué es la Sal de Cura y por qué es Obligatoria en Charcutería?',
    content: `
      <p>La <strong>sal de cura</strong> (también llamada sal nitro o Prague Powder) es la diferencia entre un embutido seguro y uno potencialmente peligroso. Contiene nitrito sódico (NaNO₂) al 6,25%, un conservante que inhibe el crecimiento de <em>Clostridium botulinum</em>, la bacteria responsable del botulismo.</p>
      <p>En España, el uso de nitritos en charcutería artesanal está regulado por el Reglamento (CE) Nº 1333/2008 sobre aditivos alimentarios. Para uso doméstico, la dosis segura es de <strong>2,5 g de sal de cura por kg de carne</strong>, lo que equivale a 156 mg de nitrito sódico por kg, por debajo del límite legal de 175 mg/kg.</p>
      <h4>¿Cuándo NO necesitas sal de cura?</h4>
      <ul>
        <li>Embutidos que se van a consumir frescos y cocidos (como las salchichas frescas)</li>
        <li>Preparaciones que van directamente al congelador</li>
        <li>Productos que se curan menos de 24 horas</li>
      </ul>
      <p>Para cualquier curado en seco que supere las 24 horas (lomo, cecina, jamón), la sal de cura no es opcional: es una medida de seguridad alimentaria crítica.</p>
    `,
  },
  {
    slug: 'proporciones-sal-charcuteria',
    title: 'La Proporción Correcta de Sal para cada Tipo de Embutido',
    content: `
      <p>La cantidad de sal es el factor más importante en la charcutería. Demasiada poca y la carne se echa a perder; demasiada y el resultado es incomible. La clave está en el <strong>porcentaje sobre el peso de la carne</strong>.</p>
      <h4>Guía de proporciones estándar (por kg de carne)</h4>
      <ul>
        <li><strong>Lomo curado:</strong> Sal común 25g + Sal de cura 2.5g + Azúcar 5g</li>
        <li><strong>Jamón serrano (método rápido):</strong> Sal común 30g + Sal de cura 2.5g</li>
        <li><strong>Chorizo (curado en seco):</strong> Sal común 18g + Sal de cura 2.5g + Pimentón 25g</li>
        <li><strong>Panceta:</strong> Sal común 20g + Sal de cura 2.5g + Azúcar 10g</li>
      </ul>
      <p>El azúcar actúa como contrabalance al amargor de los nitritos y favorece el proceso de fermentación beneficiosa. Para piezas grandes como el jamón, se recomienda dejar 1 día por cada kg de peso en la fase de salado.</p>
    `,
  },
  {
    slug: 'tiempos-secado-embutidos',
    title: 'Tiempos de Secado y Maduración según el Tipo de Embutido',
    content: `
      <p>El secado es la fase más delicada de la charcutería. La temperatura, la humedad y el tiempo deben estar perfectamente controlados. En España, las condiciones climáticas varían enormemente entre regiones, lo que afecta directamente al proceso.</p>
      <h4>Condiciones ideales de maduración</h4>
      <ul>
        <li><strong>Temperatura:</strong> 12-16°C (preferiblemente estable)</li>
        <li><strong>Humedad relativa:</strong> 70-80%</li>
        <li><strong>Ventilación:</strong> Ligera circulación de aire, sin corrientes directas</li>
      </ul>
      <h4>Tiempos estimados por producto</h4>
      <ul>
        <li><strong>Lomo (1-1.5 kg):</strong> 30-45 días</li>
        <li><strong>Chorizo (piezas de 250g):</strong> 20-30 días</li>
        <li><strong>Panceta (1 kg):</strong> 21-28 días</li>
        <li><strong>Jamón (8-10 kg):</strong> 12-24 meses</li>
      </ul>
    `,
  },
  {
    slug: 'higiene-charcuteria',
    title: 'Higiene y Seguridad Alimentaria en la Charcutería Doméstica',
    content: `
      <p>La higiene es la base de la charcutería segura. Los patógenos más comunes en carnes curadas son <em>Listeria monocytogenes</em>, <em>Salmonella</em> y <em>Clostridium botulinum</em>. Con las medidas correctas, todos son controlables.</p>
      <h4>Protocolo básico de higiene</h4>
      <ul>
        <li>Trabaja siempre con utensilios y superficies limpias y desinfectadas</li>
        <li>Usa guantes de nitrilo al manipular la carne cruda</li>
        <li>Refrigera la carne a menos de 4°C durante la fase de salado</li>
        <li>Nunca uses carne que haya estado más de 2 horas a temperatura ambiente</li>
        <li>Controla el pH con tiras de prueba: debe estar entre 5.3 y 5.8 al inicio</li>
      </ul>
      <p>Si tienes dudas sobre el estado de un embutido, el olor es tu mejor indicador. Un aroma ácido suave es normal; olores pútridos, amoniacales o sulfurosos son señal de descarte inmediato.</p>
    `,
  },
  {
    slug: 'errores-charcuteria',
    title: 'Los 5 Errores más Comunes al Curar Embutidos en Casa',
    content: `
      <p>La mayoría de los fallos en charcutería doméstica tienen la misma causa: falta de precisión en las medidas. Una báscula de cocina de precisión (0.1g) es la inversión más importante que puedes hacer.</p>
      <h4>Error 1: No pesar los ingredientes</h4>
      <p>Las cucharas y tazas no son suficientemente precisas. 1g de sal de cura de más puede arruinar el sabor; 1g de menos puede comprometer la seguridad.</p>
      <h4>Error 2: Temperatura de secado incorrecta</h4>
      <p>Por encima de 18°C, las bacterias se multiplican demasiado rápido. Por debajo de 10°C, el proceso se ralentiza o no ocurre correctamente.</p>
      <h4>Error 3: Olvidar el equilibrado de sal</h4>
      <p>El método Equilibrium Curing (curado por equilibrio) consiste en aplicar exactamente el porcentaje de sal que quieres en el producto final, sin exceso. El resultado es más predecible y homogéneo.</p>
      <h4>Error 4: No proteger la carne durante el salado</h4>
      <p>La carne debe estar en contacto constante con la sal. Usa bolsas de vacío o voltea la pieza cada 24 horas.</p>
      <h4>Error 5: Impaciente con el secado</h4>
      <p>Un lomo curado correctamente pierde entre el 30-35% de su peso original en agua. Pesa la pieza periódicamente; ese es tu indicador real de maduración.</p>
    `,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="charcuteria"
      title="Calculadora de Charcutería"
      emoji="🥩"
      tagline="Curar embutidos con precisión química y seguridad total"
      description="Guías técnicas gratuitas para charcutería artesanal en España. Aprende las proporciones correctas antes de usar nuestra calculadora profesional."
      heroText="¿Haces charcutería en casa? Las proporciones exactas de sal de cura, sal común y azúcar son la diferencia entre un embutido delicioso y uno peligroso."
      accentColor="#8B1A1A"
      articles={articles}
    />
  )
}
