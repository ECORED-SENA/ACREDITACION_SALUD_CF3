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
    TabsC.color-primario.mb-5
      .tarjeta.p-4(titulo="Berwick (1990)")
        //- .Tab 1
        .row.align-items-center
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/t1-i1.svg', alt='imagen de tablero representando Berwick (1990)')
              
          .col-xl-6
            p.m-5 Afirma que el mejoramiento continuo es un método gerencial que busca desarrollar la organización en una nueva manera para que, de una forma ordenada y planeada, todo el mundo desempeñe un papel activo en el entendimiento de los problemas y los procesos que los soportan, recopilando y analizando datos de estos procesos, generando y probando hipótesis acerca de las causas de los errores, y diseñando, implementando y probando soluciones.
      
      //- .Tab 2
      .tarjeta.p-4(titulo="Lohr (1990)")
        .row.align-items-center
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='imagen de tablero representando Berwick (1990)')
              
          .col-xl-6
            p.m-5 Propone que el mejoramiento continuo es una serie de técnicas que continuamente estudian y mejoran los procesos en la provisión del cuidado médico para cumplir con las expectativas del cliente. Cuenta, entonces, con tres elementos básicos: conocimiento del cliente, enfoque centrado en procesos de atención y enfoques estadísticos para reducir las variaciones de estos procesos.
      //- .Tab 3
      .tarjeta.p-4(titulo="Harrigan (2000)")
        .row.align-items-center
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/t1-i3.svg', alt='imagen de tablero representando Harrigan (2000)')
              
          .col-xl-6
            p.m-5 Sostiene que el mejoramiento continuo de la calidad es una filosofía gerencial y un sistema que involucra a la gerencia, los profesionales y el staff en el mejoramiento continuo de los procesos de trabajo para obtener mejores resultados para los clientes; la meta es alcanzar o exceder las necesidades de los pacientes, sus familias, el staff, los profesionales en salud y la comunidad.
      //- .Tab 4
      .tarjeta.p-4(titulo="Deming (1998)")
        .row.align-items-center
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/t1-i4.svg', alt='imagen de tablero representando Deming (1998)')
          .col-xl-6
            p.m-5 Impulsor tras la guerra de las técnicas de calidad en Japón y adelantado a su tiempo, afirma que el compromiso de mejora constante y la idea de sustituir la inspección (o control) por la participación de todos, rompiendo barreras y fomentando estilos de liderazgo participativos, son la clave del éxito. Su mayor aportación es el programa de los catorce puntos para la mejora de la gestión de la calidad.
    p.mb-3 De acuerdo con los conceptos vistos, la gestión de mejora:
    ul.lista-ul--color
      li 
        i.fas.fa-check
        | Debe involucrar a todas las personas en la institución.
      li
        i.fas.fa-check
        | Implica una filosofía de vida laboral, personal y social, centrada en esfuerzos de mejoramiento constante.
      li 
        i.fas.fa-check
        | Realiza esfuerzos para trabajar en las personas, en su estado de ánimo, en la comunicación, en el trabajo en equipo, el compromiso y la disciplina.
      li 
        i.fas.fa-check
        | Procura convertir en cultura organizacional el mejoramiento de los procesos.
      li 
        i.fas.fa-check
        | Es un enfoque de sentido común que fomenta el pensamiento orientado a procesos, ya que estos deben perfeccionarse para que mejoren los resultados.
    br
    p.mb-3 Y en ese sentido, el mejoramiento continuo implica: 
    ol.lista-ol--cuadro
        li
          .lista-ol--cuadro__vineta
            span 1
          | Crear un compromiso de mejorar continuamente el producto o servicio.
        li
          .lista-ol--cuadro__vineta
            span 2
          | Adoptar la nueva filosofía en todos los ámbitos de trabajo. 
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Eliminar la inspección como forma de conseguir calidad, pasando a «construir» calidad.
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Dejar de pensar solo en el costo.
        li 
          .lista-ol--cuadro__vineta
            span 5
          | El objetivo es minimizar el costo final, no el inicial.
        li 
          .lista-ol--cuadro__vineta
            span 6
          | Mejora continua de cada proceso de planificación, producción y servicio.
        li
          .lista-ol--cuadro__vineta
            span 7
          | Adoptar la nueva filosofía en todos los ámbitos de trabajo. 
        li 
          .lista-ol--cuadro__vineta
            span 8
          | Adoptar un estilo de liderazgo basado en ayudar a la gente a trabajar mejor.
        li 
          .lista-ol--cuadro__vineta
            span 9
          | Alejar el miedo de la organización.
        li 
          .lista-ol--cuadro__vineta
            span 10
          | Romper barreras entre departamentos y estamentos.
        li 
          .lista-ol--cuadro__vineta
            span 11
          | Eliminar eslóganes que reclamen mejoras de calidad sin que se acompañen de métodos útiles para conseguirlas.
        li
          .lista-ol--cuadro__vineta
            span 12
          | Eliminar cuotas numéricas para la producción de los trabajadores y la gestión por objetivos. 
        li 
          .lista-ol--cuadro__vineta
            span 13
          | Eliminar las barreras que impiden que los individuos se sientan orgullosos de su trabajo.
        li 
          .lista-ol--cuadro__vineta
            span 14
          | Implantar un programa vigoroso de formación y automejora y poner a todo el mundo a trabajar en la transformación de la organización.
    br
    p.mb-5 Una forma de representar el enfoque del mejoramiento continuo de la calidad es el ciclo PHVA.
    .row
      .col-lg-5
        figure
          img(src='@/assets/curso/t1-i5.svg', alt='mejoramiento continuo de la calidad es el ciclo PHVA')
      .col-lg-7
        .h6 Planear
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Qué: identificar las metas.
          li
            i.fas.fa-check
            | Cómo: identificar los medios.
        .h6 Hacer
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Fase de ejecución de los medios establecidos en la fase inicial.
          li
            i.fas.fa-check
            | Se orienta a la formación de las personas en la manera que se defina para cumplir la meta.
        .h6 Verificar
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | La evaluación del comportamiento de los indicadores que se han construido.
          li
            i.fas.fa-check
            | La aplicación de los métodos de evaluación de la calidad, incluidos aquellos que forman parte de la auditoría para el mejoramiento de la calidad.
        .h6 Actuar
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | En el caso que la meta haya sido conseguida, es necesario estandarizar la ejecución con el ánimo de mantener los resultados del proceso.
    p.mb-5 Con respecto a este ciclo, se hace necesario corregir y ajustar el proceso, y repetirlo hasta que la meta sea alcanzada.
    .tarjeta.tarjeta--azul.p-4.mb-5
      p.mb-2 Ahora bien, también es necesario considerar algunas barreras que pueden afectar el logro del mejoramiento. El hecho de NO lograr los resultados indica que hay una falla en el proceso, por lo que es responsabilidad de la gerencia identificar y corregir los errores debidos al proceso, como:
      ul.lista-ul--color
        li 
          i.fas.fa-check
          | Carencia de recursos.
        li
          i.fas.fa-check
          | No experticia en el proyecto designado y en las herramientas de análisis.
        li
          i.fas.fa-check
          | Pobre relación entre los grupos de profesionales.
        li
          i.fas.fa-check
          | Problemas organizacionales, entre los clínicos y los administrativos.
        
        
    
    
    #t_1_2.titulo-segundo
      .h4 1.2. Integralidad de fuentes de mejora
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.w160(src='@/assets/curso/t1-i6.svg', alt='mejoramiento continuo de la calidad es el ciclo PHVA')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Esta integralidad consiste en considerar todas las posibles fuentes de problemas de calidad en un solo formato para realizar el seguimiento y ser más eficientes. Los planes de mejoramiento deben incluir acciones preventivas, de seguimiento y coyunturales. Además, en la medida que se desarrollen planes preventivos, se minimiza el riesgo del usuario y, en especial, en la seguridad del paciente.
    .h6 Incorporar todas las oportunidades de mejora de las diferentes fuentes de mejoramiento
    p.mb-5  En el plan de mejora se pueden incluir las diferentes fuentes de problemas para que sea integral:
    .row.mb-4
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/t1-i7.svg', alt='Ilustración plan de mejora')
      .col-lg-8
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Acreditación o sistemas de gestión de calidad.
          li
            i.fas.fa-check
            | Indicadores trazadores de calidad.
          li
            i.fas.fa-check
            | Oficinas de quejas y reclamos.
          li
            i.fas.fa-check
            | Informes de aseguradores.
          li 
            i.fas.fa-check
            | Informes de entes de control.
          li
            i.fas.fa-check
            | Satisfacción del cliente.
          li
            i.fas.fa-check
            | Indicadores históricos de gestión.
          li
            i.fas.fa-check
            | Las mejores prácticas (bench marking).
          li
            i.fas.fa-check
            | La voz del cliente.
      .h6 Selección de procesos por mejorar
      p.mb-4  En la selección de procesos a mejorar, es necesario tener en cuenta:
      ul.lista-ul--color.mb-4
        li 
          i.fas.fa-check
          | Presentación del informe de autoevaluación.
        li
          i.fas.fa-check
          | Presentación de los procesos de la institución (mapa de procesos).
        li
          i.fas.fa-check
          | Clasificación de oportunidades de mejora en procesos.
        li
          i.fas.fa-check
          | Listado de consolidación de procesos por mejorar.
      br
      p.mb-4 Además, deben estar incluidos dos procesos:
      ul.lista-ul--color.mb-4
        li 
          i.fas.fa-check
          | Atención centrada en el usuario: asistencial.
        li
          i.fas.fa-check
          | Satisfacción del usuario.
    .h6 Priorización de procesos por mejorar 
    p.mb-4  Aquí se deben revisar los pasos que priorizan los procesos a mejorar:
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t1-i8.svg', alt='Ilustración priorización de procesos')
      .col-lg-8
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Seleccionar en el equipo un moderador.
          li
            i.fas.fa-check
            | La forma de realizar la pregunta debe reflejar cuál es la incidencia o impacto que el proceso tiene en el factor crítico de éxito.
          li
            i.fas.fa-check
            | Utilizar una escala de calificación que permita una ponderación. 
          li
            i.fas.fa-check
            | Cada uno de los miembros del equipo realiza su calificación.
          li 
            i.fas.fa-check
            | Consolidar los valores, para esto se multiplican los valores en forma horizontal.
          li
            i.fas.fa-check
            | Ordenar los resultados de mayor a menor, la cantidad de procesos depende de capacidad institucional.
    .h6 Evaluar el mejoramiento es el mejor mecanismo para sostener el mejoramiento
    p.mb-5 Para llevar a cabo esta evaluación, se debe:
    .row
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i9.svg', alt='Ilustración procesos a mejorar')
      .col-lg-10
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Realizar seguimiento a los planes de mejoramiento formulados.
          li
            i.fas.fa-check
            | Realizar seguimiento a los resultados de los indicadores propuestos.
          li
            i.fas.fa-check
            | Realizar seguimiento a la cantidad de eventos adversos. 
          li
            i.fas.fa-check
            | Evaluar la calidad del programa de auditoría.
          li 
            i.fas.fa-check
            | Definir la estrategia para comunicar los resultados a los clientes internos.
          li
            i.fas.fa-check
            | Definir la estrategia para comunicar a los usuarios y sus familias y a otros clientes.
    br

    #t_1_3.titulo-segundo
      .h4 1.3 Ventajas del plan de mejoramiento
    p.mb-5 Considerando que el plan de mejora es una herramienta que plasma los cambios que se requieren realizar en la institución, a través de las decisiones estratégicas permitiendo el seguimiento y control de las acciones propuestas, es importante identificar los objetivos que se pretenden alcanzar y las tareas que se deben realizar. Y con ello precisar que el plan de mejora permite, entre otras ventajas:
    figure
      img(src='@/assets/curso/t1-i14.svg', alt='Ilustración ventajas del plan de mejoramiento')
      figcaption Figura 1: Ventajas del plan de mejora
    br
    p.mb-5 Así, se logra la evaluación del mejoramiento como el mejor mecanismo para sostener el mejoramiento.
    p.mb-5 Ahora bien, después de probar el éxito de las acciones formuladas se recomienda estandarizar de nuevo y, así mismo, documentar las experiencias y las conclusiones obtenidas con la evaluación del mejoramiento, por ello, cabe preguntarse:
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i10.svg', alt='Acciones a considerar')
      .col-lg-10
        br
        ul.lista-ul--color.text-bold
          li 
            i.fas.fa-check
            | ¿Cuáles fueron los éxitos?
          li
            i.fas.fa-check
            | ¿Cuáles fueron las dificultades?
          li
            i.fas.fa-check
            | ¿Qué no funcionó?
    br
    p.mb-5 Por otra parte, es necesario definir la estrategia para comunicar los resultados a los clientes internos, así como la definir la estrategia para comunicar a los usuarios, sus familias y a otros clientes.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-2.mb-4
          .row
            .col.col-lg-2
              figure
                img(src='@/assets/curso/t1-i11.svg', alt='importante: definir la estrategia')
            .col.col-lg-10
              br
              p.mb-3 
                span.text-bold Para recordar: 
                | el plan de mejora elaborado permite tener la información organizada, priorizada y planificada, así como las acciones de mejora, ya que su formulación responde a la detección de las causas de los principales problemas identificados.
    p.mb-5 
      | Además, 
      span.text-bold cerrar brechas 
      | es la presencia de un problema que se debe analizar para encontrar las causas de su ocurrencia. Identificadas las causas que generan los fallos se formulan los planes de mejoramiento que pueden ser evaluados por los profesionales clínicos; y los planes se relacionan con la actividad asistencial y permiten detectar problemas que pueden ser remediables sobre la marcha.
    p.mb-5
      | Ahora, se debe revisar en qué consiste el 
      span.text-bold ciclo de mejora, 
      | para ello se contemplan las siguientes fases: 
    .row.justify-content-center
      .col-lg-8
        PasosA.color-primario.mb-5(tipo="n" :datos="datosPasosA")
    figcaption.mb-5 Figura 2: Ciclo de mejora

    #t_1_4.titulo-segundo
      .h4 1.4 Fortalezas y oportunidades de mejora
    p.mb-5 Una vez seleccionado un proceso que necesite mejoramiento, es importante lograr una comprensión unificada de cómo funciona el proceso que está en marcha. Para ello, se podría reflexionar en torno a los siguientes interrogantes:
    .row
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i10.svg', alt='Aspecto a considerar')
      .col-lg-8
        ul.lista-ul--color.text-bold
          li 
            i.fas.fa-check
            | ¿Quiénes son los proveedores y cuáles son las entradas?
          li
            i.fas.fa-check
            | ¿Qué se hace ahora? 
          li
            i.fas.fa-check
            | ¿Cuáles son sus actividades?
          li
            i.fas.fa-check
            | ¿En qué orden?
          li
            i.fas.fa-check
            | ¿Qué pasa cuando las cosas no marchan bien?
    br
    br
    figure
      img(src='@/assets/curso/t1-i15.svg', alt='Comprensión del proceso en marcha')
    figcaption.mb-5 Figura 3: Comprensión del proceso en marcha

    #t_1_5.titulo-segundo
      .h4 1.5 Registro de las oportunidades de mejora
    p.mb-5 Para llevar a cabo este registro se trabaja el formato experto, que sirve para elaborar el formato del Plan de Mejora con la matriz 5W y 1H y se encuentra en el anexo_formato experto_Plan de mejoramiento integrado.
    figure
      img(src='@/assets/curso/t1-i16.svg', alt='Registro de oportunidades de mejora')
    figcaption.mb-5 Figura 4: Registro de oportunidades de mejora
    #t_1_6.titulo-segundo
      .h4 1.6 Implementación de acciones de mejora
    p.mb-5 Una vez que se ha planeado, determinado y estructurado el plan de mejora, se desarrollan las actividades propuestas completando tareas y tiempos; de esta manera, los indicadores de seguimiento van evaluando el proceso realizado.
    figure
      img(src='@/assets/curso/t1-i17.svg', alt='Registro de oportunidades de mejora')
    figcaption.mb-5 Figura 5: Actividades priorizadas
    p.mb-5 Para priorizar las actividades, se recomienda:
    .row
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i12.svg', alt='Ilustración procesos a mejorar')
      .col-lg-10
        ul.lista-ul--color
          li 
            i.fas.fa-check
            |  Durante la ejecución verificar físicamente en el lugar donde se están efectuando las acciones.
          li
            i.fas.fa-check
            | Todas las acciones y los resultados, buenos o malos, deben ser registrados con la fecha en que fueron tomados.
          li
            i.fas.fa-check
            | Se deben utilizar los datos recopilados antes y después del bloqueo para verificar la efectividad de la acción y el grado de reducción de los resultados no deseados.
          li
            i.fas.fa-check
            | Los formatos utilizados en la comparación deben ser los mismos antes y después de la acción.
          li 
            i.fas.fa-check
            | Convertir y comparar los efectos, también en términos monetarios. 
    br
    p.mb-5 Para priorizar las actividades, se recomienda:
    .row
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i9.svg', alt='Ilustración procesos a mejorar')
      .col-lg-10
        ul.lista-ul--color
          li 
            i.fas.fa-check
            |  Garantizar una atención sanitaria segura y de calidad acorde con la evidencia científica disponible.
          li
            i.fas.fa-check
            | Aportar a los profesionales una metodología útil en la búsqueda de las soluciones más adecuadas a los problemas de salud de la población.
          li
            i.fas.fa-check
            | Conseguir la satisfacción del paciente o el usuario con el servicio recibido.
          li
            i.fas.fa-check
            | Las deficiencias que provocan la insatisfacción de los clientes constituyen un elemento distorsionador importante en la prestación de servicio.
          li 
            i.fas.fa-check
            | Realizar las actividades del modo más eficiente posible con el fin de obtener resultados adecuados evitando costos superfluos.
    br

    #t_1_7.titulo-segundo
      .h4 1.7 Herramientas para el mejoramiento continuo
    p.mb-5 Para trabajar en el mejoramiento continuo se consideran algunas herramientas que facilitan esta tarea, para lo cual se recomienda seguir el siguiente procedimiento:
    .row
      .col-lg-4
        figure
          img(src='@/assets/curso/t1-i14_1.svg', alt='Ilustración: mujer sentada explorando datos y graficos')
      .col-lg-8
        ul.lista-ul--color
          li 
            i.fas.fa-check
            |  Resumir la formulación del problema en el rectángulo ubicado en la punta de la llamada espina dorsal.
          li
            i.fas.fa-check
            | Asegurarse de que todas las personas en el grupo estén de acuerdo con el problema formulado; generalmente el problema se asocia con un incumplimiento de una característica de calidad.
          li
            i.fas.fa-check
            | Determinar los encabezamientos de las categorías que se quieren utilizar para buscar las posibles causas (tres a seis categorías: mano de obra, maquinaria, materiales, medio, money, método). 
          li
            i.fas.fa-check
            | Realizar una lluvia de ideas de las causas del problema.
          li 
            i.fas.fa-check
            | Determinar cuáles elementos de cada categoría están contribuyendo al efecto (problema) preguntando por qué; esta son las causas subsidiarias y escribirlas sobre las líneas que se ramifican de las líneas o categorías.
          li
            i.fas.fa-check
            | Continuar en busca de causas preguntando por qué. Recordar que el diagrama causa-efecto únicamente identifica causas posibles y solamente los datos apuntarán a sus causas.
          li
            i.fas.fa-check
            | Eliminar las causas que se considere no son receptivas al cambio, es decir aquellas sobre las cuales no se ejerce control.
          li 
            i.fas.fa-check
            | Una vez que se han reducido las causas a un número manejable, recopilar datos para probar la teoría sobre estas causas.
    br
    p.mb-5.text-bold Se recomienda expresar el resultado en una gráfica de Pareto. 

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosPasosA: [
      {
        titulo: '1ª. Fase identificación del problema u OM:',
        texto: 'Problema en la estructura, en el proceso o en el resultado.',
      },
      {
        titulo: '2ª. Fase análisis del problema identificado:',
        texto:
          'Se instaura la técnica de identificación de causas ejemplo: grupo nominal, lluvia de ideas, etc.',
      },
      {
        titulo: '3ª. Fase construcción de criterios: ',
        texto:
          'Establecer el nivel de calidad de aquello que se está evaluando.',
      },
      {
        titulo: '4ª. Fase diseño del estudio:',
        texto:
          'Se decide cuándo un criterio, tras su evaluación, se cumple, no se cumple o es susceptible de mejora.',
      },
      {
        titulo: '5ª. Fase análisis de datos:',
        texto:
          'Medición de resultados en lo que a cumplimiento o no se refiere.',
      },
      {
        titulo: '6ª. Fase diseño de intervenciones',
      },
      {
        titulo: '7ª. Fase propuestas o intervenciones',
      },
      {
        titulo:
          '8ª. Fase reevaluación del proceso y cierre del primer ciclo de mejora',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.w160{width: 160px}
</style>
