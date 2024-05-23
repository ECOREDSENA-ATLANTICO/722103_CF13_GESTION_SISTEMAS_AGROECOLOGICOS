<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p En este componente formativo se abordarán temáticas relacionadas con las técnicas de siembra más empleadas, se debe tener en cuenta el marco de plantación y los diferentes tipos de trazado; además, la realización de buenas prácticas agrícolas, un manejo ecológico de plagas y enfermedades donde minimice el uso de agroquímicos y la inclusión de tecnologías que conlleven a optimizar y lograr la gestión agronómica.
     
    p.mb-5 A continuación se puede observar cómo es el proceso:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
