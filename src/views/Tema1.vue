<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Gestión de la mejora
    p.mb-5 Actualmente, la tendencia tanto en el sector privado como en el público, es la adopción de modelos de gestión que sirvan de referente y guía en los procesos permanentes de mejora de los productos y servicios que ofrecen. Con respecto a ello, “La eficiencia organizacional involucra crear conciencia respecto de la necesidad de implementar mejoras, integrar la mejora de calidad a todas y cada una de las actividades, proporcionar capacitación en relación con los métodos de calidad, establecer resolución de problemas de equipo y reconocer los resultados” (Summers, 2006, p.27).
    #t_1_1.titulo-segundo
      .h4 1.1  Concepto
    p.mb-5 A continuación, se puede revisar el concepto de mejora continua desde la óptica de varios autores.
    TabsA.color-acento-botones.mb-5
     
      .tarjeta.color-acento-botones--borde.p-4(titulo="Berwick (1990)")
        h4 Berwick (1990)
        //- .Tab 1
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/template/t1-i1.svg', alt='imagen de tablero representando Berwick (1990)')
              figcaption Leyenda de la imagen
          .col-xl-6
            p Afirma que el mejoramiento continuo es un método gerencial que busca desarrollar la organización en una nueva manera para que, de una forma ordenada y planeada, todo el mundo desempeñe un papel activo en el entendimiento de los problemas y los procesos que los soportan, recopilando y analizando datos de estos procesos, generando y probando hipótesis acerca de las causas de los errores, y diseñando, implementando y probando soluciones.
      
      //- .Tab 2
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lohr (1990)")
        h4 Lohr (1990)
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/template/t1-i2.svg', alt='imagen de tablero representando Berwick (1990)')
              figcaption Leyenda de la imagen
          .col-xl-6
            p Propone que el mejoramiento continuo es una serie de técnicas que continuamente estudian y mejoran los procesos en la provisión del cuidado médico para cumplir con las expectativas del cliente. Cuenta, entonces, con tres elementos básicos: conocimiento del cliente, enfoque centrado en procesos de atención y enfoques estadísticos para reducir las variaciones de estos procesos.
      //- .Tab 3
      .tarjeta.color-acento-botones--borde.p-4(titulo="Harrigan (2000)")
        h4 Harrigan (2000)
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/template/t1-i3.svg', alt='imagen de tablero representando Harrigan (2000)')
              figcaption Leyenda de la imagen
          .col-xl-6
            p Sostiene que el mejoramiento continuo de la calidad es una filosofía gerencial y un sistema que involucra a la gerencia, los profesionales y el staff en el mejoramiento continuo de los procesos de trabajo para obtener mejores resultados para los clientes; la meta es alcanzar o exceder las necesidades de los pacientes, sus familias, el staff, los profesionales en salud y la comunidad.
      //- .Tab 4
      .tarjeta.color-acento-botones--borde.p-4(titulo="Deming (1998)")
        h4 Deming (1998)
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/template/t1-i4.svg', alt='imagen de tablero representando Deming (1998)')
              figcaption Leyenda de la imagen
          .col-xl-6
            p Impulsor tras la guerra de las técnicas de calidad en Japón y adelantado a su tiempo, afirma que el compromiso de mejora constante y la idea de sustituir la inspección (o control) por la participación de todos, rompiendo barreras y fomentando estilos de liderazgo participativos, son la clave del éxito. Su mayor aportación es el programa de los catorce puntos para la mejora de la gestión de la calidad.
    #t_1_2.titulo-segundo
      .h4 1.2. Integralidad de fuentes de mejora
    #t_1_3.titulo-segundo
      .h4 1.3 Ventajas del plan de mejoramiento
    p.mb-5 Considerando que el plan de mejora es una herramienta que plasma los cambios que se requieren realizar en la institución, a través de las decisiones estratégicas permitiendo el seguimiento y control de las acciones propuestas, es importante identificar los objetivos que se pretenden alcanzar y las tareas que se deben realizar. Y con ello precisar que el plan de mejora permite, entre otras ventajas:
    #t_1_4.titulo-segundo
      .h4 1.4 Fortalezas y oportunidades de mejora
    p.mb-5 Una vez seleccionado un proceso que necesite mejoramiento, es importante lograr una comprensión unificada de cómo funciona el proceso que está en marcha. Para ello, se podría reflexionar en torno a los siguientes interrogantes:
    #t_1_5.titulo-segundo
      .h4 1.5 Registro de las oportunidades de mejora
    p.mb-5 Para llevar a cabo este registro se trabaja el formato experto, que sirve para elaborar el formato del Plan de Mejora con la matriz 5W y 1H y se encuentra en el anexo_formato experto_Plan de mejoramiento integrado.
    #t_1_6.titulo-segundo
      .h4 1.6 Implementación de acciones de mejora
    p.mb-5 Una vez que se ha planeado, determinado y estructurado el plan de mejora, se desarrollan las actividades propuestas completando tareas y tiempos; de esta manera, los indicadores de seguimiento van evaluando el proceso realizado.
    #t_1_6.titulo-segundo
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
