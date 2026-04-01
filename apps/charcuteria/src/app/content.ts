export const appConfig = {
  appSlug: 'charcuteria',
  title: 'Calculadora de Charcutería',
  emoji: '🥩',
  tagline: 'Curar embutidos con precisión química y seguridad total',
  description: 'Guías técnicas gratuitas para charcutería artesanal en España. Aprende las proporciones correctas antes de usar nuestra calculadora profesional.',
  heroText: '¿Haces charcutería en casa? Las proporciones exactas de sal de cura, sal común y azúcar son la diferencia entre un embutido delicioso y uno peligroso.',
  accentColor: '#8B1A1A',
  nicheLabel: 'charcutería artesanal',
}

export const articles = [
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
  {
    slug: 'control-ph-fermentacion-cultivos-iniciadores-bactoferm-salami',
    title: 'Control de pH en Charcutería: Por Qué Necesitas Cultivos Iniciadores (Bactoferm)',
    content: `<p>Llevo media vida estudiando la microbiología de la carne curada, y hay un mito tradicional que me aterra profundamente: el "Curado Salvaje". Muchos aficionados a la charcutería casera hacen su masa de chorizo o salami, le echan sal, lo cuelgan en el garaje y confían en que las bacterias del ambiente hagan el trabajo de fermentación, como hacían sus abuelos. Lo que olvidan es que sus abuelos tenían cerdos criados en su propia granja, sacrificados en un entorno específico y curados en bodegas subterráneas centenarias con un ecosistema microbiano adaptado durante generaciones. Hoy en día, si compras carne en un supermercado y la cuelgas en un garaje moderno, las bacterias salvajes que atrapará serán, con casi total seguridad, bacterias de la putrefacción, estafilococos o listeria.</p><p>Hacer salami no es secar carne; es una fermentación bacteriana controlada. Para que la carne picada cruda sea segura a temperatura ambiente, debemos crear un entorno ácido (un pH por debajo de 5.3) lo más rápido posible. Este ácido láctico es el que da al salami ese delicioso toque picante y ácido tradicional. Si el pH no baja rápido en las primeras 48 horas, las bacterias patógenas ganan la carrera, la carne se pudre por dentro y se vuelve mortalmente tóxica. Para asegurar que ganamos esta carrera contra reloj, la charcutería moderna e industrial utiliza un arma secreta: los Cultivos Iniciadores (Starter Cultures).</p><p>En este artículo vamos a desglosar qué es un cultivo iniciador (como el famoso Bactoferm), por qué la dextrosa es su combustible vital, cómo medir el pH de tu embutido de forma profesional y por qué la incubación en caliente es el paso que nunca debes saltarte.</p><h2>La Biología de los Cultivos Iniciadores (Starter Cultures)</h2><p>Un cultivo iniciador es un polvo liofilizado que contiene miles de millones de bacterias beneficiosas (generalmente Pediococcus y Lactobacillus) criadas en laboratorio. Cuando las añades a tu carne, colonizan todo el embutido instantáneamente. Al haber millones de ellas, abruman a cualquier bacteria mala por pura superioridad numérica. Estas bacterias buenas no se comen la carne; se comen los azúcares simples y defecan ácido láctico. Ese ácido baja el pH.</p><p>Sin embargo, la carne de cerdo cruda casi no tiene azúcar. Si echas las bacterias pero no les das de comer, morirán de hambre y el pH no bajará. Por eso es OBLIGATORIO añadir Dextrosa (un azúcar simple de absorción rápida) a la receta. Las bacterias lácticas no pueden procesar bien el azúcar de mesa normal (sacarosa) porque es un azúcar complejo. Solo la Dextrosa (glucosa) garantiza un banquete rápido y una caída de pH en picado en las primeras 48 horas.</p><p><strong>🧮 ¿No sabes cuántos gramos de Dextrosa y Cultivo Iniciador necesita tu receta? Usa nuestra Calculadora de Charcutería Segura. Acceso de por vida por solo 4,99€. Sin suscripción. Pago único vía PayPal. <a href="/checkout">Obtener Acceso Pro →</a></strong></p><h2>Tabla de Cultivos Iniciadores Comerciales (Bactoferm)</h2><p>No todas las bacterias trabajan a la misma temperatura. Elegir el cultivo equivocado para tu clima arruinará la fermentación.</p><table><thead><tr><th>Tipo de Cultivo (Ej: Bactoferm)</th><th>Temperatura de Fermentación Ideal</th><th>Velocidad de caída del pH</th><th>Perfil de Sabor del Embutido</th></tr></thead><tbody><tr><td><strong>F-RM-52 (Fermentación Rápida)</strong></td><td>22°C a 32°C</td><td>Muy Rápida (1 a 2 días)</td><td>Muy ácido y punzante (Estilo Salami americano o Pepperoni). Mayor seguridad alimentaria.</td></tr><tr><td><strong>T-SPX (Fermentación Lenta)</strong></td><td>18°C a 24°C</td><td>Lenta (3 a 4 días)</td><td>Suave, complejo y tradicional (Estilo Milano o Salami Europeo clásico). Requiere control estricto.</td></tr><tr><td><strong>Mold 600 (Penicillium nalgiovense)</strong></td><td>20°C (Solo para aplicación exterior)</td><td>No baja el pH</td><td>Es el moho blanco que cubre el exterior del fuet o salami. Evita mohos tóxicos negros y regula el secado.</td></tr></tbody></table><h2>El Protocolo de Incubación y Medición de pH</h2><p>Una vez embutido tu salami, no va directamente a la cámara de secado en frío. Tiene que pasar por la "Incubación":</p><ul><li><strong>1. El Despertar:</strong> Disuelve la pizca de cultivo iniciador calculada (suelen ser 0.25g por Kilo) en 30 ml de agua destilada a temperatura ambiente. Déjalo reposar 20 minutos para que las bacterias "despierten" del estado liofilizado antes de verterlo sobre la carne picada.</li><li><strong>2. La Incubación (Alta Humedad y Calor):</strong> Cuelga los salamis en un espacio cálido (según la temperatura de tu cultivo, ej: 25°C) y con una humedad altísima (90% HR). Este calor acelera el metabolismo de las bacterias para que coman la dextrosa rápidamente.</li><li><strong>3. La Medición del pH:</strong> A las 48 horas, usa un medidor de pH para carnes (con sonda de penetración) o tiras reactivas. Pincha el centro del salami. Si el pH marca por encima de 5.3, déjalo un día más en calor. Si marca entre 4.9 y 5.2, ¡Misión Cumplida!</li><li><strong>4. El Secado en Frío:</strong> Solo cuando el pH ha caído por debajo de 5.3, el salami es biológicamente seguro para pasar a la cámara de maduración en frío (a 12°C - 15°C) durante los próximos meses de secado lento.</li></ul><h2>Preguntas Frecuentes</h2><h3>¿Qué pasa si el pH baja demasiado, por ejemplo a 4.5?</h3><p>Estéticamente, el embutido sufrirá. Si añades demasiada dextrosa (más de 5 gramos por kilo) o dejas el embutido fermentando a 30°C durante 5 días, las bacterias crearán tanto ácido láctico que el pH caerá a 4.5. A ese nivel de acidez extrema, la proteína de la carne se desnaturaliza y se "cocina" con el ácido (como un ceviche). El salami quedará quebradizo, pálido y tendrá un sabor agrio tan potente que ocultará el sabor del cerdo y de las especias.</p><h3>¿Puedo usar yogur natural o kéfir como cultivo iniciador barato?</h3><p>Aunque el yogur contiene bacterias Lactobacillus, están adaptadas para fermentar lactosa (azúcar de la leche) en un entorno líquido, no dextrosa en un entorno cárnico denso y salado. Usar yogur en charcutería casera es una práctica extremadamente inconsistente que suele derivar en sabores extraños a queso rancio y fermentaciones estancadas que permiten la entrada del botulismo. Usa siempre cultivos estandarizados para carne.</p><h3>¿El vino tinto que añado a la receta baja el pH?</h3><p>El vino tiene un pH ácido (alrededor de 3.5), y añadir un chorrito a tu masa de carne bajará el pH general unas décimas al principio. Sin embargo, no es suficiente volumen para crear un entorno seguro por sí solo frente a kilos de carne de pH neutro. El vino aporta un sabor fantástico y algo de acidez inicial que ayuda al cultivo iniciador a arrancar más cómodo, pero jamás sustituye la necesidad de la fermentación bacteriana con dextrosa.</p>`,
  },
  {
    slug: 'parametros-camara-maduracion-embutidos-temperatura-humedad',
    title: 'Temperatura y Humedad Ideal para Curar Embutidos: El Secado en Anillo',
    content: `<p>He visitado decenas de bodegas caseras de aficionados que, orgullosos, me enseñan sus lomos y salamis colgados. Abro uno de los salamis con mi cuchillo y la decepción inunda la sala: el borde exterior (la capa pegada a la tripa) es un anillo negro, duro como la piedra y cristalizado. El centro del salami, sin embargo, es una pasta cruda, grisácea, blanda y que huele a amoniaco. Este desastre industrial se conoce como "Case Hardening" (Endurecimiento de Superficie o Secado en Anillo). Han tirado meses de espera a la basura porque no entendieron que secar carne no es colgar ropa al sol.</p><p>El curado en seco (Dry Curing) de la charcutería es un baile microscópico de humedad. La carne fresca tiene un 70% de agua. Nuestro objetivo es que pierda aproximadamente un 35% de su peso total en agua de forma extremadamente lenta. Si el aire del exterior del embutido es demasiado seco o hay un ventilador soplando aire directamente sobre la tripa, la superficie de la carne se secará de golpe. Esa capa seca se convierte en una armadura de cuero impermeable. Una vez que el anillo duro se forma, el agua que todavía está en el centro húmedo del salami ya no puede escapar hacia el exterior. Se queda atrapada bajo esa armadura, creando un pantano tibio donde las bacterias de la putrefacción hacen una fiesta. La pieza se pudre por dentro mientras parece perfectamente curada por fuera.</p><p>En este artículo vamos a desterrar el "lo cuelgo en cualquier sitio". Analizaremos los rangos matemáticos de temperatura y humedad relativa (RH) que exige la charcutería, cómo dominar el déficit de presión de vapor, y cómo convertir una nevera vieja en una cámara de maduración profesional (Curing Chamber) usando controladores de enchufes baratos.</p><h2>La Física del Secado: El Déficit de Presión de Vapor (VPD)</h2><p>El agua se mueve de áreas de mayor humedad a áreas de menor humedad. Para que un salami se seque, el aire que lo rodea debe estar ligeramente más seco que el propio salami. A esto se le llama Déficit de Presión de Vapor. Si el aire está al 30% de humedad (muy seco), el agua sale del salami como un Ferrari, colapsando la superficie y creando el fatídico anillo duro.</p><p>Para que el agua viaje desde el centro del salami hasta el exterior a una velocidad segura y continua, la diferencia de humedad debe ser pequeña y constante. Por eso las bodegas tradicionales italianas y españolas son subterráneas: porque mantienen una humedad muy alta (alrededor del 80%) durante todo el año. En un entorno del 80% de humedad, el salami se secará milímetro a milímetro durante meses, permitiendo que la sal y las enzimas de la carne desarrollen ese sabor umami profundo e inconfundible.</p><p><strong>🧮 ¿Quieres calcular qué día exacto tu embutido alcanzará el 35% de pérdida de peso segura? Usa nuestra Calculadora de Charcutería Segura. Acceso de por vida por solo 4,99€. Sin suscripción. Pago único vía PayPal. <a href="/checkout">Obtener Acceso Pro →</a></strong></p><h2>La Tabla de Parámetros de la Cámara de Maduración</h2><p>Estos son los números inquebrantables que tu cámara debe mantener las 24 horas del día. Si te sales de estos rangos, estás jugando a la lotería con la carne.</p><table><thead><tr><th>Parámetro de la Cámara</th><th>Rango de Seguridad Ideal</th><th>Peligro por Exceso (Alto)</th><th>Peligro por Defecto (Bajo)</th></tr></thead><tbody><tr><td><strong>Temperatura</strong></td><td><strong>12°C a 15°C</strong></td><td>(> 18°C) La grasa se derrite y se enrancia (oxida). Proliferación bacteriana tóxica severa.</td><td>(< 10°C) El proceso de secado y curado se detiene casi por completo.</td></tr><tr><td><strong>Humedad Relativa (HR%)</strong></td><td><strong>75% a 85%</strong></td><td>(> 90%) El embutido no pierde peso. Crecimiento descontrolado de moho verde/negro tóxico.</td><td>(< 70%) Aparición fulminante del anillo duro exterior (Case Hardening) y pudrición interior.</td></tr><tr><td><strong>Flujo de Aire (Ventilación)</strong></td><td>Renovación suave diaria, aire indirecto</td><td>Aire directo soplando sobre la tripa deshidrata el embutido en 3 días.</td><td>Aire completamente estancado fomenta colonias de moho pegajoso y malos olores.</td></tr></tbody></table><h2>El Protocolo de Construcción de una Cámara Casera</h2><p>Construir una Curing Chamber profesional no cuesta miles de euros. Puedes hacerlo con equipo de segunda mano:</p><ul><li><strong>1. El Contenedor:</strong> Consigue una nevera sin congelador de segunda mano (las neveras de vinos con puerta de cristal son perfectas). Límpiala con lejía a fondo.</li><li><strong>2. El Controlador Cerebral:</strong> Compra un controlador dual de temperatura y humedad (como el famoso Inkbird ITC-608T). Este aparato tiene sondas que metes dentro de la nevera y enchufes externos`,
  },
]