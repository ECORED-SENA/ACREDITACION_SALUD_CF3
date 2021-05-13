<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
    p.mb-5 Siguiendo con el proceso de formación, en este componente se deben tener en cuenta los resultados obtenidos y determinar el plan de mejora según estándares para lograr la acreditación. Así, la mejora continua consiste en la disposición para identificar, de manera sistemática, fallas en el proceso de atención que son susceptibles de modificar positivamente con el fin de establecer los ajustes necesarios y superar las expectativas de los clientes-usuarios.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
