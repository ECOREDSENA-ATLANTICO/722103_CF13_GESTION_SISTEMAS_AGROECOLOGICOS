<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo Ecológico de Plagas y Enfermedades (MEPE) en siembra

    .row.mb-5
      .col-lg-4.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/1.png', alt='Texto que describa la imagen')      
      .col-lg-8(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-3  
          p.mb-0 Aunque naturalmente los ecosistemas buscan un equilibrio, debido a diversos motivos este equilibrio se pierde, siendo el principal la intervención antrópica, ya que el hombre con la agricultura moderna elimina la vegetación silvestre e introduce monocultivos en grandes extensiones que causan deterioro al suelo, además elimina organismos endémicos que son beneficios por el uso indiscriminado de agroquímicos, lo que permite el ingreso de plagas y enfermedades generando problemas fitosanitarios que conlleva al uso de más químicos para combatirlos.     

        p En el siguiente video se aprecia cómo es el control de plagas:  

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gU2e3DH5yxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Prácticas de manejo  
    
    p.mb-5 Como lo indica Jiménez (2009), existen estrategias de control y tácticas de Manejo Ecológico de Plagas y Enfermedades (MEPE), para disminuir y hasta anular el impacto en las plantas y suelos:

    .row.justify-content-center
      .col-lg-10
        .row.mb-5.tarjeta.bgr_3.p-3
          .col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen')
          .col-md-9.align-content-center(data-aos="fade-left")
            h5 Estrategia de control:
            p.mb-0 Se enfoca en tres pilares: prevención - supresión - erradicación.
      
    .row.justify-content-center
      .col-lg-10
        .row.mb-3.tarjeta.bgr_4.p-3.mb-3
          .col-md-3.mb-3
            figure
              img(src='@/assets/curso/temas/tema2/3.png', alt='Texto que describa la imagen')
          .col-md-9.align-content-center(data-aos="fade-left")
            h5 Tácticas:
            p.mb-0 Preventiva o correctiva - control físico y mecánico - control biológico - control etológico - control genético.
        
        p.mb-5 Sabiendo lo anterior, se puede ver a través del siguiente esquema los tres pilares de prevención y las principales tácticas empleadas:
    
    .row.mb-5 
      .col-auto 
        figure
          img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')
      .col-8.align-content-center(data-aos="fade-right")
        h3.mb-0 Prácticas de manejo.
        span Estrategias de control de plagas y enfermedades 
    
    .tarjeta.bgr.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-lg-5.mb-4.mb-md-3.align-content-center
            h3 Pilares
            p Prevención
            p.mb-0 Evitar una plaga de manera que no se convierte en un problema, ya sea evitando su introducción de otros países o evitando su dispersión a otras zonas del país (cuarentena externa e interna).
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')
        .row.justify-content-around
          .col-lg-5.mb-4.mb-md-3.align-content-center
            h3 Pilares
            p Supresión
            p.mb-0 Reducción del nivel de plaga o de daño a un nivel aceptable, de manera que no ocurran pérdidas económicas para el productor, ejemplos:  la aplicación de sustancias microbiales, el uso de plaguicidas, etc.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')
        .row.justify-content-around
          .col-lg-5.mb-4.mb-md-3.align-content-center
            h3 Pilares
            p Erradicación
            p.mb-0 Destrucción/eliminación plena de una plaga en su área.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')
        .row.justify-content-around
          .col-lg-5.mb-4.mb-md-3.align-content-center
            h4 Manejo ecológico de plagas y enfermedades
            p Control etológico y Control genético
            h5 Control cultural
            p Prácticas de cultivo que pueden ser empleadas de manera que se creen condiciones desfavorables al desarrollo de la plaga, y favorables al desarrollo del cultivo.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/8.png', alt='Texto que describa la imagen')
        .row.justify-content-around
          .col-lg-5.mb-4.mb-md-3.align-content-center
            h4 Manejo ecológico de plagas y enfermedades
            p Control etológico y Control genético
            h5 Control biológico
            p Acción de enemigos naturales contra plagas y malas hierbas; sobre todo el uso de depredadores, insectos parásitos, hongos, bacterias, virus, nematodos etc.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
        .row.justify-content-around
          .col-lg-5.mb-4.mb-md-3.align-content-center
            h4 Manejo ecológico de plagas y enfermedades
            p Control etológico y Control genético
            h5 Control mecánico y físico
            p Colecta manual y destrucción de plagas, tales como: insectos, ratas, malas hierbas. Este método se refiere al uso de factores, tales como: calor, frío, humedad, energía, sonido.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/10.png', alt='Texto que describa la imagen')
 
    separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Criterios de aplicación 

    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El Manejo Ecológico de Plagas y Enfermedades (MEPE), propone una metodología que abarca procedimientos desde la perspectiva ecológica, económica y toxicológica para hacer frente a las poblaciones de organismos que son perjudiciales evitando el uso de productos químicos y empleando mayormente factores naturales y biológicos que reduzcan su propagación. 
    
    .row.mb-5
      .col-lg-9
        .cajon.color-secundario.p-4.mb-3(data-aos="fade-right")
          p.mb-0 Por tanto, los criterios de aplicación de la práctica de manejo ecológico de la plaga o enfermedad requieren como primera medida conocer y analizar los organismos que se encuentran en el cultivo, pero no solo los nocivos, sino que también los benéficos, para luego enfocarse en bajar el nivel poblacional de los dañinos, teniendo muy presente que la estrategia y metodología empleada incluye el ecosistema y todos los efectos que se pueden llegar de forma directa e indirecta; es decir, no solo enfocarse en la plaga o la enfermedad, sino que vea en conjunto, todo el medio que encierra este ecosistema.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')
      
    p.mb-5 Además, como lo establece Brechelt (2008), es fundamental evaluar a la hora de llevar a cabo algún manejo o medida de control, la rentabilidad y el umbral económico o de intervención, porque no puede ser mayor o igual los costos para combatir la plaga o enfermedad a los de la pérdida de la cosecha. Por tanto, existen parámetros como lo muestra la siguiente figura 3, que permiten establecer con exactitud la decisión de llevar a cabo medidas para combatir la infestación desde la perspectiva económica, desde el umbral de intervención.
 
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")  
      h5 Figura 3.
      span Parámetros para determinar el umbral de intervención
    
    figure.mb-5
      img(src='@/assets/curso/temas/tema2/13.svg', alt='Parámetros umbral de intervención, la relación. Infestación perdida, es decir entre población de organismos nocivos y la pérdida de beneficios.')
      figcaption 	Nota. SENA (2022).

    p.mb-5 En conclusión, como lo establece Romero (2004), el modelo y prácticas de manejo ecológico de plagas y enfermedades debe basarse en el conocimiento de la plaga o enfermedad y su dinámica de población, así como los diferentes controles, vistos en la siguiente figura 4:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      h5 Figura 4.
      span Modelo de manejo ecológico 
    
    figure.mb-5
      img.d-none.d-md-flex(src='@/assets/curso/temas/tema2/14.svg', alt='Texto que describa la imagen')
    
    figure.mb-5
      img.d-flex.d-md-none(src='@/assets/curso/temas/tema2/14-1.svg', alt='Texto que describa la imagen')
      
      

      


</template>

<script>
export default {
  name: 'Tema2',
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
