<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente se consolida el material de estudio para que el aprendiz conozca e identifique los tipos de siembra más empleados. Estos son:
    p #[strong Siembra directa:] cuando la semilla se coloca directamente en el lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida, mediante técnicas como al volteo, en línea o chorrillo y a golpe o espaciada.
    p #[strong Siembra indirecta:] que consiste en sembrar la semilla en un lugar provisional para luego las plántulas ya germinadas y con cierto porcentaje de desarrollo y crecimiento ser trasplantada en el terreno definitivo, empleando en muchas ocasiones un material distinto al suelo conocido como sustrato que encargan de sustituirlo y proporcionar el anclaje de la planta por medio del sistema radicular, el cual puede ser de origen orgánico, inorgánico y sintético. 
    p En el proceso de siembra se debe tener en cuenta los requisitos o condiciones para lograr un adecuado germinado y desarrollo de las plantas, es muy importante el marco de plantación, ya que este establece la distancia y distribución requerida entre las plantas, para cual existen diversos sistemas de trazado como son cuadrado, rectángulo, tresbolillo, cinco, oros, etc., 
    p Es importante, el manejo ecológico de plagas y enfermedades, que busca eliminar o minimizar el uso de agroquímicos, teniendo en cuenta los pilares de la agroecología estrategias de control y tácticas de manejo más amigables con la salud y el medio ambiente ya sean de carácter preventiva o correctiva, como por ejemplo control cultural, biológico, etológico, físico y genético. Debido a que día a día crece la cultura y conciencia ambiental como también la tecnología y en el campo de la agricultura está incrementando el uso de maquinaria, equipos y herramientas tecnológicas que brinda mayor optimización y eficiencia de los recursos.
    p.mb-5 Así pues, un resumen del presente componente, podrá ser apreciado en el siguiente mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra la síntesis del mapa conceptual de los diferentes tipos de siembre: Siembra directa Siembra indirecta En el proceso de siembra también es importante: El trazado, MEPE, control y tecnología.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
