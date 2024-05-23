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
        .bloque-texto-g__texto.p-4
          p.mb-0 La siembra es el proceso en el que se coloca la semilla en la tierra, suelo o por medio del cultivo con la finalidad de obtener una nueva planta y así generar su propagación, se requiere de conocimientos y cuidados para que las plantas crezcan y se desarrollen de forma adecuada. Hay plantas en las que las semillas son diseminadas por el aire o a través del agua mediante canales de riego y drenaje o afluentes naturales.
    
      p.text-center.mb-5 Las características y condiciones para la germinación son las siguientes:

      .tarjeta.bgr.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Definición de siembra
              p.mb-0 La siembra es el proceso por medio del cual se coloca la semilla en la tierra, suelo o medio de cultivo con la finalidad de obtener una nueva planta y así generar su propagación.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/2.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Características de las semillas de buena calidad
              p.mb-0 La pureza física de la semilla no debe estar mezclada con basuras, otras semillas o cualquier objeto extraño.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Pureza varietal
              p.mb-0 LDeben ser de la misma especie o variedad
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')               
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Vigor
              p.mb-0 Se refiere a la germinación en el tiempo adecuado (aprox. entre 5 y 10 días) y una vez germinadas las plantas deben crecer sin problemas.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')                
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Sanidad y Luz
              p.mb-0 Las semillas deben estar libres de insectos y enfermedades, igualmente la luz para formar tallos y hojas fuertes. Lo recomendable es que las semillas reciban al menos entre 3 y 6 horas de luz al día.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')                
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Poder germinativo
              p.mb-0 Determina el potencial de germinación de un lote de semillas bajo condiciones controladas,  por lo tanto, gran parte de las semillas deben germinar.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')               
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Temperatura  para la germinación
              p.mb-0 La temperatura determina si las semillas germinarán  de forma rápida o lenta. Si es muy fría el tiempo de germinación demorará el doble o el triple de lo regular. Si es muy caliente pueden germinar muy rápido, pero se corre el riesgo que estas pierdan su poder germinativo o se enfermen con hongos.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')                
          .row.justify-content-around
            .col-md-4.mb-4.mb-md-0.align-content-center
              h4.mb-5 Humedad
              p.mb-0 La humedad del suelo o sustrato debe ser suficiente como para no regar las semillas, durante 7 a 10 días. Si despúes de este tiempo, las semillas aún no han germinado, se deben regar con cuidado.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
                
    separador 

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Siembra directa

    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
      .col-lg-8.align-content-center
        .cajon.color-acento-contenido.bgr_2.p-4.mb-3
          p.mb-0 La siembra directa es cuando la semilla se coloca directamente en el lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida, requiriéndose de una previa preparación del suelo y existiendo factores que se deben considerar a la hora de realizar este tipo de siembra, los cuales son necesarios para lograr resultados esperados, como son variedad, tamaño y calidad de la semilla, disponibilidad de agua y marco de plantación (distancia y forma de distribución), también se requiere tener la profundidad de siembra, ya que la semilla no puede quedar demasiado profunda por que se dificulta el proceso de germinación.
        p.mb-0 Existen diferentes tipos de siembra directa, siendo tres los más empleados, a continuación se pueden conocer:

                
      
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
