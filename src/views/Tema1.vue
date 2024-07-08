<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de siembra

    .bg_grad-01
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 La siembra es el proceso en el que se coloca la semilla en la tierra, suelo o por medio del cultivo con la finalidad de obtener una nueva planta y así generar su propagación, se requiere de conocimientos y cuidados para que las plantas crezcan y se desarrollen de forma adecuada. Hay plantas en las que las semillas son diseminadas por el aire o a través del agua mediante canales de riego y drenaje o afluentes naturales.
    
      p.text-center.mb-5 Las características y condiciones para la germinación son las siguientes:

      .tarjeta.bgr.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Definición de siembra
              p.mb-0 La siembra es el proceso por medio del cual se coloca la semilla en la tierra, suelo o medio de cultivo con la finalidad de obtener una nueva planta y así generar su propagación.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/2.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Características de las semillas de buena calidad
              p.mb-0 La pureza física de la semilla no debe estar mezclada con basuras, otras semillas o cualquier objeto extraño.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Pureza varietal
              p.mb-0 Deben ser de la misma especie o variedad.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')               
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Vigor
              p.mb-0 Se refiere a la germinación en el tiempo adecuado (aprox. entre 5 y 10 días) y una vez germinadas las plantas deben crecer sin problemas.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')                
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Sanidad y Luz
              p.mb-0 Las semillas deben estar libres de insectos y enfermedades, igualmente la luz para formar tallos y hojas fuertes. Lo recomendable es que las semillas reciban al menos entre 3 y 6 horas de luz al día.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')                
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Poder germinativo
              p.mb-0 Determina el potencial de germinación de un lote de semillas bajo condiciones controladas,  por lo tanto, gran parte de las semillas deben germinar.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')               
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Temperatura  para la germinación
              p.mb-0 La temperatura determina si las semillas germinarán  de forma rápida o lenta. Si es muy fría el tiempo de germinación demorará el doble o el triple de lo regular. Si es muy caliente pueden germinar muy rápido, pero se corre el riesgo que estas pierdan su poder germinativo o se enfermen con hongos.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')                
          .row.justify-content-around
            .col-lg-4.mb-4.mb-md-3.align-content-center
              h4.mb-5 Humedad
              p.mb-0 La humedad del suelo o sustrato debe ser suficiente como para no regar las semillas, durante 7 a 10 días. Si despúes de este tiempo, las semillas aún no han germinado, se deben regar con cuidado.
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
                
    separador 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1  Siembra directa

    .row.mb-5
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
      .col-lg-8.align-content-center
        .cajon.color-acento-contenido.bgr_2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La siembra directa es cuando la semilla se coloca directamente en el lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida, requiriéndose de una previa preparación del suelo y existiendo factores que se deben considerar a la hora de realizar este tipo de siembra, los cuales son necesarios para lograr resultados esperados, como son variedad, tamaño y calidad de la semilla, disponibilidad de agua y marco de plantación (distancia y forma de distribución), también se requiere tener la profundidad de siembra, ya que la semilla no puede quedar demasiado profunda por que se dificulta el proceso de germinación.
        p.mb-0 Existen diferentes tipos de siembra directa, siendo tres los más empleados, a continuación se pueden conocer:

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta(titulo="Al Volteo")
        .row
          .col-lg-8.bgr_7.tarjeta.p-4.mb-3
            p.mb-0 Las semillas se intentan distribuír de forma uniforme, por toda la parcela de cultivo. Puede realizar de forma manual y mecanizada mediante sembradoras que cuentan con una tolva y elementos de dosificación que garantizan la salida de semillas constante.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
      .tarjeta(titulo="El Linea o Chorrillo")
        .row
          .col-lg-8.bgr_7.tarjeta.p-4.mb-3
            p.mb-0 La siembra se realiza en surcos rectilíneos depositando en ellos la semilla de manera contínua. Tienen la ventaja de facilitar y hacer más rápidas las labores culturales.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
      .tarjeta(titulo="Al Golpe, Espaciada o mateada")
        .row
          .col-lg-8.bgr_7.tarjeta.p-4.mb-3
            p.mb-0 La siembra a golpes también se realiza en surcos, pero en este caso, dejando una determinada distancia, entre una semilla y la siguiente. Al igual que la siembra a chorrillo, tiene la desventaja de facilitar las labores culturales.
          .col-lg-(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')
    
    separador 

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2. Trasplante o siembra indirecta
    
    .row.mb-5 
      .col-lg-3.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/14.png', alt='Texto que describa la imagen')
      .col-lg-9
        .cajon.color-secundario.bgr_8.p-4
          p.mb-0 La siembra indirecta es cuando la semilla se siembra en un lugar provisional (donde no se tiene en cuenta el marco de plantación) para luego las plántulas ya germinadas y con cierto porcentaje de desarrollo y crecimiento ser trasplantada en el terreno definitivo, de acuerdo a la distancia y forma de distribución ideal para cada cultivo.  

    p.mb-5 Las ventajas que tienen este tipo de siembra son el uso eficiente de las semillas, mejor control de las condiciones ambientales (luz, humedad y temperatura) no solo durante el proceso de crecimiento de las plantas, sino también en su germinación. Además, este método de siembra puede llevarse a cabo de forma manual o mecanizada, mediante semilleros que se pueden realizar en el suelo, al aire libre o en invernaderos que emplean sustratos que se encargan de sustituir el suelo y proporcionar el anclaje de la planta por medio del sistema radicular. 

    
    p.mb-5 Existiendo sustratos de origen orgánico, inorgánico y sintético como se puede apreciar en la siguiente figura 1: 

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Tipos de sustratos

        figure
          img.mb-3(src='@/assets/curso/temas/tema1/15.svg', alt='Muestra los diferentes tipos de sustratos: SINTÉTICOS: sustratos que han pasado por procesos industriales para su creación. Con la ventaja de brindar mayor protección frente a agentes patógenos. Además, del Gel, Espumas sintéticas. INORGÁNICOS: en este grupo se incluyen los que presentan partículas mayores a 2 mm de diámetro. Piedra pómez Grava, Roca volcánica Arena del río Arcillas ORGÁNICOS: en este grupo se encuentran productos de desecho recuperados de alguna actividad agropecuaria o industrial, o productos importados. Aserrín, Cascarilla de arroz, Cascarilla de café, Fibra de coco, Peat moss')
          figcaption 	Nota. SENA (2022).
    
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop')
          .tarjeta.bgr_9
            .p-4
              p.mb-0 Siendo importante a la hora de seleccionar el sustrato, este material distinto al suelo que es donde se va a realizar la siembra inicial, para luego llevar a cabo el proceso de trasplante, donde no solo se conocen sus propiedades físicas, químicas y biológicas propias del sustrato, sino que también el tipo y especie de material vegetal que se va sembrar; al igual que las condiciones climáticas existentes en el lugar y las condiciones ideales esperadas para el adecuado desarrollo del cultivo; como también las labores culturales (riego, fertilización, manejo de plagas y enfermedades, manejo de arvenses, etc.)(figura 2).
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 2.
          span Propiedades del sustrato
        
        figure
          img.mb-3.d-none.d-md-flex(data-aos="fade-up")(src='@/assets/curso/temas/tema1/17.svg', alt='Muestra las propiedades del sustrato: Física: Buena aireación.  Elevada capacidad de retención de agua. Adecuada distribución del tamaño de las partículas. Buen soporte para el desarrollo. Baja densidad aparente. Elevada porosidad, que facilite el drenaje. Estructura estable, que impida la contracción o hinchazón del medio. Química: Baja o moderada capacidad de intercambio catiónica. Baja salinidad para evitar el estrés a las raíces por el efecto osmótico. Elevada capacidad tampón. Capacidad para mantener constante el pH de la solución nutritiva. Mínima velocidad de descomposición. -Suficiente nivel de nutrientes asimilables.Biológicas. Libe de partículas que afecten al normal desarrollo de los cultivos. Sin presencia de semillas de malas hierbas ni otros organismos para las plantas (hongos, nematodos, etc.). Fácil de desinfectar y estabilidad frente a la desinfección. Otros. Disponibilidad. Bajo coste. Fácil de preparar y mezclar. Resistencia a cambios externos físicos, químicos y ambientales. De manejo conocido.')
          img.mb-3.d-flex.d-md-none(src='@/assets/curso/temas/tema1/17-1.svg', alt='Muestra las propiedades del sustrato: Física: Buena aireación.  Elevada capacidad de retención de agua. Adecuada distribución del tamaño de las partículas. Buen soporte para el desarrollo. Baja densidad aparente. Elevada porosidad, que facilite el drenaje. Estructura estable, que impida la contracción o hinchazón del medio. Química: Baja o moderada capacidad de intercambio catiónica. Baja salinidad para evitar el estrés a las raíces por el efecto osmótico. Elevada capacidad tampón. Capacidad para mantener constante el pH de la solución nutritiva. Mínima velocidad de descomposición. -Suficiente nivel de nutrientes asimilables.Biológicas. Libe de partículas que afecten al normal desarrollo de los cultivos. Sin presencia de semillas de malas hierbas ni otros organismos para las plantas (hongos, nematodos, etc.). Fácil de desinfectar y estabilidad frente a la desinfección. Otros. Disponibilidad. Bajo coste. Fácil de preparar y mezclar. Resistencia a cambios externos físicos, químicos y ambientales. De manejo conocido.')
          figcaption 	Nota. SENA (2022).
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3. Tipos de trazado	

    .bg_grad-02
      .row.mb-5
        .col-lg-4(data-aos="fade-right")
          figure
            img.mb-3(src='@/assets/curso/temas/tema1/17.png', alt='Texto que describa la imagen')
        .col-lg-8
          .cajon.color-acento-contenido.bgr_2.p-5.mb-3(data-aos="fade-left")
            p.mb-0 En la siembra cuando se habla de marco de plantación se hace referencia a la separación o distancia requerida entre las plantas para su adecuado desarrollo y crecimiento y a la forma de distribución, debido a que existen diversos sistemas de trazado que varían de acuerdo al grado de inclinación del terreno. 
          p Según Nova Gonzales & Caro Vargas (1991), con el trazado se logra determinar la cantidad de plantas que se requieren, la forma como va a ser distribuidas y así lograr controlar la erosión del terreno, por tanto, la selección del tipo de trazado se da principalmente de acuerdo a la topografía del terreno. 
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/18.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Así como lo indica Baíza Avelar (2004), existen diversas formas de ordenar las plantas, entre las que se encuentran el sistema cuadro o también conocido como marco real que es el trazado más simple e implementado 
    
    p.text-center.mb-5 El tipo de trazado más implementado es el siguiente:
    
    .bg_grad-03
      .row.justify-content-center.d-none.d-md-flex 
        .col-lg-6
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/19.svg', alt='Texto que describa la imagen')
            .tarjeta.bgr_6.p-3(x="33%" y="6%" numero="+")
              p.mb-0 Cada planta va situada en el vértice de un cuadrado. Permite el paso de la maquinaria (tratamientos, etc) en dos direcciones perpendiculares, entre filas y entre plantas.
            .tarjeta.bgr_6.p-3(x="69%" y="6%" numero="+")
              p.mb-0 Cada planta va situada en el vértice de un rectángulo, las plantas se colocan algo más cercanas entre sí, formando filas; estas filas están separadas entre ellas a una distancia mayor formando calles.
            .tarjeta.bgr_6.p-3(x="33%" y="94%" numero="+")
              p.mb-0 Cada pie está situado en el vértice de un triángulo equilátero, guardando siempre las mismas distancias entre plantas que entre filas. La distribución es óptima con este sistema.
            .tarjeta.bgr_6.p-3(x="68%" y="94%" numero="+")
              p.mb-0 Muy similar al marco real, pero con un árbol en el centro de cada cuadrado. Dificulta la mecanización.

      figure
        img.d-flex.d-md-none(src='@/assets/curso/temas/tema1/19-1.svg', alt='Texto que describa la imagen')



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
