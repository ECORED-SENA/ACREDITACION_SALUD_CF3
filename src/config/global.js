export default {
  global: {
    componenteFormativo: 'Gestión de la mejora',
    descripcionCurso:
      'Después de realizar la autoevaluación en la cual identificó la situación real de la institución, comparando los resultados obtenidos con los estándares de calidad en los datos cualitativos, calificando los datos cuantitativos, además midiendo los indicadores para interpretarlos según el manual correspondiente, debe hacer, el análisis de resultados reconociendo las oportunidades de mejora. Los cambios necesarios se plasman en el documento “plan de mejora”.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de la mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Integralidad de fuentes de mejora',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ventajas del plan de mejoramiento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Fortalezas y oportunidades de mejora',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Registro de las oportunidades de mejora',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Implementación de acciones de mejora',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Herramientas para el mejoramiento continuo',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Néstor Omar Correa Preciado',
          'Cesar Roberto Ocaña Poveda',
          'Jessica Lozano',
        ],
        cargo:
          'Expertos temáticos.Asesor oficina calidad. Ministerio de Salud y Protección Social.',
        centro: 'Ministerio de Salud',
      },
      {
        nombre: ['María Fernanda Moreno Brand', 'Viviana Ruíz Vergara'],
        cargo: 'Profesionales Especializados SENA',
        centro: 'Centro de Formación de Talento Humano en Salud',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación de recursos', 'Vinculación en plataforma LMS'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Summers, D. (2006). Administración de la calidad. Pearson Educación.',
    },
    {
      referencia:
        'Berwick, D., Blanton, G., y Roessner, J. (1990). Curing Health Care: New Strategies for Quality Improvement. Jossey-Bass.',
    },
    {
      referencia:
        'Lohr, K. y Molla, D. (1990). Assuring Quality of Care for the Elderly. The Journal of Law, Medicine & Ethics, 18(3), 244-253.',
    },
    {
      referencia:
        'Harrigan, J., y Zakrajsek, E. (2000). Factor Supplies and Specialization in the World Economy. National Bureau of economic Research.',
    },
  ],
  glosario: [
    {
      termino: 'Análisis causal',
      significado:
        'Se refiere a establecer las causas apoyándose en las 5M: Mano de obra o talento humano, Materiales o insumos medicamentos, Maquinaria o equipos, Método o guías, procesos, procedimientos y Medida, es decir indicadores.',
    },
    {
      termino: 'Fuente de mejoramiento',
      significado:
        'El diligenciar la fuente de información y analizarla puede llevar a la identificación de una oportunidad de mejora.',
    },
    {
      termino: 'Oportunidad de mejora',
      significado:
        'Son todas las oportunidades de mejora que fueron identificadas de las diferentes fuentes de mejoramiento, así, una oportunidad de mejora debe ser redactada en infinitivo y puede estar presente en la estructura (documentos, directrices, políticas), en los procesos (conjunto de actividades que interactúan) o en el resultado (logros, indicadores). ',
    },
    {
      termino: 'Priorización',
      significado:
        'Las oportunidades de mejora se deben priorizar según variables de costo, riesgo y volumen.',
    },
    {
      termino: 'Proceso afectado',
      significado:
        'Es la selección del proceso que corresponde al mapa de procesos de la organización, involucrado en la ejecución de la oportunidad de mejora.',
    },
    {
      termino: 'Tipo de riesgo',
      significado:
        'Se refiere a la selección del tipo de riesgo según el mapa de riesgos.',
    },
  ],
  complementario: [
    {
      texto:
        'Auditoría en salud: Ministerio de la Protección Social, Programa de Apoyo a la Reforma de Salud, Asociación Centro de Gestión Hospitalaria. (2007). Pautas de auditoría para el mejoramiento de la calidad de la atención en salud. Ministerio de la Protección Social.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/pautas-auditoria-',
    },
    {
      texto:
        'Calidad y autoevaluación en salud: Kerguelén, B., Ministerio de la Protección Social. (2008). Calidad en salud en Colombia. Ministerio de la Protección Social.',
      tipo: 'Libro',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/calidad-salud-colombia.pdf',
    },
    {
      texto:
        'Diagrama de Pareto: Ingenio empresa. (2016). Diagrama de Pareto: qué es y cómo se hace. Ejemplo práctico paso a paso. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vd7QVKpW27Q',
    },
  ],
}
