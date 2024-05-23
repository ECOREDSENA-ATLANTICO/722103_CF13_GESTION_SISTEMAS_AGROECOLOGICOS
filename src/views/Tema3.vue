<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tecnologías para la siembra
    
    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/1.png', alt='Texto que describa la imagen')
      .col-lg-7
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 Para realizar el proceso de siembra se requiere de maquinaria que se encargue de realizar procesos de remoción de tierra como tractores y en algunas ocasiones sembradoras, también equipos que faciliten la preparación del terreno; además, de herramientas que ayuden a los agricultores a realizar sus labores.
        .row
          .col-lg-8.align-content-center
            p.mb-0 Pero, actualmente con la evolución en el avance de la tecnología se posibilita el desarrollo de la agricultura de precisión, que está enfocada a lograr una eficiencia superior en los cultivos para obtener mayor rentabilidad y calidad en los cultivos con menores costos de producción.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/2.svg', alt='Texto que describa la imagen')
      
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Con las #[strong intervenciones antrópicas] el hombre ha eliminado la vegetación silvestre e introdujo monocultivos en grandes extensiones que causan deterioro al suelo; además, elimina organismos endémicos que son beneficiosos La principal desventaja del monocultivo es el agotamiento y #[strong degradación del suelo], debido a que el cultivo reiterado de la misma especie acaba agotando por completo los #[strong nutrientes requeridos] por ella.
    
    .row.justify-content-center.mb-5
      .col-lg-7.align-content-center
        p El reemplazo de la vegetación para introducir cultivos que alteran el #[strong equilibrio natural], deja la superficie del suelo expuesta a los #[strong agentes erosivos] e interrumpe el aporte de restos vegetales al suelo. El uso intensivo de #[strong fertilizantes químicos], proporciona un desbalance nutricional en tejidos de cultivos y genera problemas de plagas más severos. Ahora, el uso de un plaguicida depende de la #[strong toxicidad] del #[strong pesticida], por lo tanto, se debe minimizar y elegir productos de muy baja toxicidad para evitar problemas de salud por sus bases químicas.
        p.mb-0 Entonces, se deben implementar métodos complementarios que combinen estrategias y prácticas de manejo saludables, basados en principios y pilares claves de la agroecología.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')
      
    .row.justify-content-center.mb-5
      .col-lg-4.align-content-center
        figure
          img(src='@/assets/curso/temas/tema3/4.svg', alt='Texto que describa la imagen')
      .col-lg-6
        .cajon.color-acento-contenido.bgr_4.p-4.mb-3
          p Los #[strong principios agroecológicos] buscan el manejo orgánico del suelo para que los cultivos nutricionalmente sean balanceados y sanos.
          p.mb-0 La #[strong diversificación vegetal] proporciona distintos nutrientes al suelo y crea #[strong hábitats para insectos útiles], los cuales pueden reducir la población de plagas.
        
        p Además, la aplicación del #[strong Control Biológico] reduce la pérdida de producción agrícola, costos para el #[strong control de plagas] y reduce o #[strong elimina los daños a la salud de las personas].
        p Por tanto, con el uso de una metodología informática en la agricultura como se muestra en la siguiente tabla 1, es posible disponer de datos y obtener información de calidad en tiempo real: 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Aportes de la agromática
        
        .tabla-a.mb-5
          table
            caption Nota. Tomado de Grenón, (s. f.). https://www.fca.unl.edu.ar/agromatica/RAdA/Agromatica-Definicion.pdf
            thead
              tr
                th.pst_1 Necesidades del productor del profesional agropecuario
                th Aportes de la agromática
            tbody
              tr
                td.text-center Disponer de la multitud de datos ecológicos, biológicos, tecnológicos y económicos que representan a un agrosistema.
                td.text-center Con base de datos.
              tr.bgr_6
                td.text-center Integrarlos en un único marco conceptual que los formalice y relacione.
                td.text-center Con modelos conceptuales de datos y matemáticos.
              tr
                td.text-center Procesarlos según las leyes y metodologías de las disciplinas agropecuarias que tratan cada uno de los aspectos de los agrosistemas.
                td.text-center Con modelos de simulación y sistemas de información.
              tr.bgr_6
                td.text-center Seleccionar las mejores alternativas de manejo, organización o comercialización a partir de criterios productivos, económicos y ecológicos.
                td.text-center Con sistemas de soporte de decisiones.
              tr
                td.text-center Transmitir la información de tiempo en forma adecuada.
                td.text-center Con ofimática y telemática.
              
          
    




</template>

<script>
export default {
  name: 'Tema3',
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
