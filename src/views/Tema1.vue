<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Gestión de la mejora
    p.mb-5 Actualmente, la tendencia tanto en el sector privado como en el público, es la adopción de modelos de gestión que sirvan de referente y guía en los procesos permanentes de mejora de los productos y servicios que ofrecen. Con respecto a ello, “La eficiencia organizacional involucra crear conciencia respecto de la necesidad de implementar mejoras, integrar la mejora de calidad a todas y cada una de las actividades, proporcionar capacitación en relación con los métodos de calidad, establecer resolución de problemas de equipo y reconocer los resultados” (Summers, 2006, p.27).

    .titulo-segundo
      .h4 1.1  Concepto
    p.mb-5 A continuación, se puede revisar el concepto de mejora continua desde la óptica de varios autores.


    .titulo-segundo
      .h4 1.2. Integralidad de fuentes de mejora
    
    .titulo-segundo
      .h4 1.3 Ventajas del plan de mejoramiento
    p.mb-5 Considerando que el plan de mejora es una herramienta que plasma los cambios que se requieren realizar en la institución, a través de las decisiones estratégicas permitiendo el seguimiento y control de las acciones propuestas, es importante identificar los objetivos que se pretenden alcanzar y las tareas que se deben realizar. Y con ello precisar que el plan de mejora permite, entre otras ventajas:
    
    .titulo-segundo
      .h4 1.4 Fortalezas y oportunidades de mejora
    p.mb-5 Una vez seleccionado un proceso que necesite mejoramiento, es importante lograr una comprensión unificada de cómo funciona el proceso que está en marcha. Para ello, se podría reflexionar en torno a los siguientes interrogantes:

    .titulo-segundo
      .h4 1.5 Registro de las oportunidades de mejora
    p.mb-5 Para llevar a cabo este registro se trabaja el formato experto, que sirve para elaborar el formato del Plan de Mejora con la matriz 5W y 1H y se encuentra en el anexo_formato experto_Plan de mejoramiento integrado.

    .titulo-segundo
      .h4 1.6 Implementación de acciones de mejora
    p.mb-5 Una vez que se ha planeado, determinado y estructurado el plan de mejora, se desarrollan las actividades propuestas completando tareas y tiempos; de esta manera, los indicadores de seguimiento van evaluando el proceso realizado.

    .titulo-segundo
      .h4 1.7 Herramientas para el mejoramiento continuo
    p.mb-5 Para trabajar en el mejoramiento continuo se consideran algunas herramientas que facilitan esta tarea, para lo cual se recomienda seguir el siguiente procedimiento:
    .row
      .col-lg-4

      .col-lg-8


    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
