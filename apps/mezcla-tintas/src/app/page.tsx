import { LandingTemplate } from '@saas/ui/src/templates/LandingTemplate'

const articles = [
  {
    slug: 'teoria-color-cmyk-modelismo',
    title: 'CMYK vs RGB: La Teoría del Color que Todo Modelista Debe Conocer',
    content: `<p>Los monitores usan luz (modelo RGB), pero las pinturas mezclan pigmentos (modelo CMYK). Esta diferencia fundamental explica por qué el color que ves en pantalla nunca es exactamente el que obtienes al mezclar pinturas.</p><p>En el modelo <strong>sustractivo CMYK</strong> (Cyan, Magenta, Yellow, Key/Black), cada color absorbe ciertas longitudes de onda de la luz. Al mezclarlos, vas "restando" luz, lo que da colores más oscuros.</p><h4>La regla de las mezclas básicas</h4><ul><li>Cyan + Magenta = Violeta/Púrpura</li><li>Cyan + Yellow = Verde</li><li>Magenta + Yellow = Naranja/Rojo</li><li>Cyan + Magenta + Yellow = Negro (teórico, en práctica marrón sucio)</li></ul><p>Por eso el negro real (Key) se añade como color separado en CMYK: da negros más profundos y permite reducir el consumo de los tres pigmentos principales.</p>`,
  },
  {
    slug: 'marcas-pintura-modelismo-espana',
    title: 'Vallejo, AK Interactive y Citadel: Guía de Marcas para Modelismo en España',
    content: `<p>España es sede de dos de las marcas de referencia mundial en pintura para modelismo: <strong>Vallejo</strong> (Vallejo Model Color, Game Color) y <strong>AK Interactive</strong>. Entender las diferencias entre sistemas te ayuda a mezclar colores compatibles.</p><h4>Principales marcas y sus características</h4><ul><li><strong>Vallejo Model Color:</strong> Base agua. 200+ colores. El estándar para maquetas militares. Gotas perfectamente medibles gracias al gotero.</li><li><strong>Vallejo Game Color:</strong> Base agua. Formulado para colores vivos de miniaturas de fantasía.</li><li><strong>AK Interactive:</strong> Múltiples líneas (Real Colors, 3rd Gen, AMMO). Excelente para efectos de weathering.</li><li><strong>Citadel (Games Workshop):</strong> Base agua. Tarro en lugar de gotero — dificulta la medición exacta. Sistema propio de capas (Base, Layer, Shade, Highlight).</li><li><strong>Andrea Color:</strong> Española también. Especializada en figuras históricas.</li></ul>`,
  },
  {
    slug: 'tecnicas-mezcla-modelismo',
    title: 'Técnicas de Mezcla para Modelismo: Cómo Conseguir el Tono Exacto',
    content: `<p>Mezclar pinturas de modelismo es parte arte, parte química. La clave está en empezar siempre por el color más claro y añadir el oscuro gota a gota — es mucho más fácil oscurecer que aclarar.</p><h4>Protocolo de mezcla profesional</h4><p>1. <strong>Usa una paleta húmeda</strong> para que las pinturas acrílicas no se sequen mientras trabajas.<br/>2. <strong>Empieza por el blanco</strong> si el color final es claro.<br/>3. <strong>Añade el color saturado gota a gota</strong>, mezclando completamente después de cada gota.<br/>4. <strong>Apunta las proporciones</strong> exactas para poder reproducir el color más adelante.<br/>5. <strong>Haz una prueba en papel</strong> antes de aplicar a la miniatura — el color seco es siempre más oscuro que húmedo.</p><h4>Regla del secado</h4><p>Los acrílicos secan 15-20% más oscuros. Si el color te parece correcto en húmedo, probablemente quedará demasiado oscuro. Ajusta adelantando el tono hacia el claro.</p>`,
  },
  {
    slug: 'colores-militares-modelismo',
    title: 'Cómo Conseguir Colores Militares Exactos: Referencias Ral, Federal Standard y Vallejo',
    content: `<p>Los colores militares históricos tienen referencias estandarizadas internacionalmente. Conocer las equivalencias entre sistemas te permite mezclar o encontrar el color correcto para cada vehículo o uniforme.</p><h4>Sistemas de referencia más usados</h4><ul><li><strong>RAL:</strong> Sistema europeo. RAL 7028 = Dark Yellow Alemán WWII. RAL 6003 = Olive Drab.</li><li><strong>Federal Standard 595:</strong> Sistema americano. FS 33105 = Olive Drab US Army.</li><li><strong>Vallejo Model Color:</strong> Tiene su propia numeración (ej: 70.924 = Russian Uniform).</li></ul><h4>Equivalencias clave WWII</h4><ul><li>Dunkelgelb (Amarillo oscuro alemán): RAL 7028 = Vallejo 70.978</li><li>Panzergrau (Gris panzer): RAL 7021 = Vallejo 70.869</li><li>Rotbraun (Rojo marrón): RAL 8017 = Vallejo 70.985</li><li>Olive Drab US: FS 33105 = Vallejo 70.887</li></ul>`,
  },
  {
    slug: 'almacenaje-pinturas-modelismo',
    title: 'Almacenaje y Conservación de Pinturas de Modelismo: Evita que se Sequen',
    content: `<p>Las pinturas acrílicas para modelismo tienen una vida útil de 2-5 años si se almacenan correctamente. Con malas condiciones, pueden secarse en meses.</p><h4>Factores que arruinan las pinturas</h4><ul><li><strong>Temperatura extrema:</strong> No expongas a más de 30°C ni a menos de 5°C. Los ciclos de congelación-descongelación destruyen los aglutinantes.</li><li><strong>Luz solar directa:</strong> Los pigmentos se degradan y decoloran.</li><li><strong>Tapa sucia:</strong> Los restos de pintura en la rosca o gotero se secan y sellan el bote.</li></ul><h4>Trucos de conservación</h4><ul><li>Guarda los botes boca abajo para que el pigmento no se separe del aglutinante.</li><li>Añade 2-3 gotas de agua destilada si la pintura se espesa, no agua del grifo (el cloro la daña).</li><li>Una bolita de acero inoxidable dentro del bote facilita el mezclado.</li><li>Si una pintura está completamente seca, no la tires: disuélvela con retarder y úsala como wash.</li></ul>`,
  },
]

export default function Page() {
  return (
    <LandingTemplate
      appSlug="mezcla-tintas"
      title="Mezclador de Tintas de Modelismo"
      emoji="🎨"
      tagline="Consigue cualquier color exacto con tintas de modelismo"
      description="Domina la teoría del color para modelismo. Aprende a mezclar Vallejo, AK Interactive y Citadel para obtener cualquier tono con precisión."
      heroText="¿Buscas un color específico para tu miniatura o maqueta? Introduce el código HEX y obtén la proporción exacta de gotas en colores primarios."
      accentColor="#7C3AED"
      articles={articles}
    />
  )
}
