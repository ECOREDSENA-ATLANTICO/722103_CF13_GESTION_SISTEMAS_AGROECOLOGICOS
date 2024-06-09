export default {
  global: {
    componenteFormativo: 'Principios agroecológicos para la siembra',
    descripcionCurso:
      'En el proceso de siembra se aplican técnicas y tipos, principalmente la siembra directa e indirecta, donde es importante el marco de plantación y trazado el cual varía de acuerdo al cultivo y determina la separación o distancia requerida entre las plantas para su desarrollo, crecimiento y manejo ecológico de plagas y enfermedades, por medio de estrategias de control.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas de siembra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Siembra directa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trasplante o siembra indirecta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de trazado',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo Ecológico de Plagas y Enfermedades (MEPE) en siembra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Prácticas de manejo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios de aplicación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tecnologías para la siembra',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download:
          'downloads/722103_Gestión de sistemas agroecológicos_CF13.pdf',
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
  complementario: [
    {
      tema: '1. Técnicas de siembra',
      referencia:
        'Bravo, C., Lozano, Z., Hernández-Hernández, R. M., Cánchica, H. & González, I. (2008). Siembra directa como alternativa agroecológica para la transición hacia la sostenibilidad de las sabanas. Acta biológica venezuelica, 28(1), 15-28. ',
      tipo: 'Artículo',
      descarga: '/downloads/2008-Siembradirecta-BravoActaBiolVen28nuevo.pdf',
    },
    {
      tema: '2. Manejo ecológico de plagas y enfermedades (MEPE)',
      referencia:
        'Torres, L., & Ríos, R. (2007). Formulación y desarrollo del programa de manejo integral de plagas y enfermedades (MIPE) para el cumplimiento de los niveles 1 y 2 del código de conducta flor verde en el cultivo de flores San Agustín SACI (Funza-Cundinamarca)',
      tipo: 'Artículo',
      descarga: '/downloads/viewcontent.cgi.pdf',
    },
    {
      tema: '2. Manejo ecológico de plagas y enfermedades (MEPE)',
      referencia:
        'ICA. (s.f.). Manejo fitosanitario del cultivo de hortalizas (Medidas para la temporada invernal). ',
      tipo: 'Artículo',
      descarga: '/downloads/cartilla-hortalizas-ICA.pdf',
    },
    {
      tema: '3.Tecnologías para la siembra',
      referencia:
        'García, E. & Flego, F. (2008). Agricultura de precisión. Revista Ciencia y Tecnología, 8, 99-116.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Agricultura-de-Precision-Universidad-de-Palermo.pdf',
    },
    {
      tema: '3.Tecnologías para la siembra',
      referencia:
        'Hernández, N., Soto, F. & Caballero, A. (2009). Modelos de simulación de cultivos: Características y usos. Cultivos Tropicales, 30(1), 73-82.',
      tipo: 'Artículo',
      descarga: '/downloads/193217899013.pdf',
    },
    {
      tema: '3.Tecnologías para la siembra',
      referencia:
        'Unión Europea e IICA. (2016). Modelos de simulación y herramientas de modelaje',
      tipo: 'Artículo',
      descarga: '/downloads/FF6B5A49A08D365BFA8870B82B1C25B2.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agroquímicos',
      significado:
        'productos químicos empleados para prevenir, destruir y controlar plagas y enfermedades (herbicidas, fungicidas, insecticidas, etc.).',
    },
    {
      termino: 'Control de plagas y enfermedades',
      significado:
        'Conjunto de medidas utilizadas para mantener los cultivos sanos.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'Alteración del recurso vegetal causada por agentes de daño que pueden ser microorganismos tales como hongos, bacterias y virus.',
    },
    {
      termino: 'Marco de plantación',
      significado:
        'Distancia y distribución requerida entre las plantas a la hora de ser sembradas para su adecuado desarrollo y crecimiento.',
    },
    {
      termino: 'Plaga',
      significado:
        'Animales, plantas y microorganismos que tienen un efecto negativo, dañan los cultivos y generan pérdidas económicas.',
    },
    {
      termino: 'Siembra',
      significado:
        'Proceso por medio del cual se coloca la semilla en la tierra, suelo o medio de cultivo para que germine y obtener una planta nueva.',
    },
    {
      termino: 'Sustrato',
      significado:
        'Material distinto al suelo, empleado para el proceso de siembra ya que cumple las mismas funciones que son proporcionar el anclaje de la planta por medio del sistema radicular.',
    },
    {
      termino: 'Trasplante',
      significado:
        'Trasladar las plantas que se encuentran en los semilleros al lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida.',
    },
    {
      termino: 'Trazado',
      significado:
        'Consiste en determinar el lugar donde se debe sembrar las plantas enfocado a evitar la erosión del suelo.',
    },
    {
      termino: 'Umbral de intervención',
      significado:
        'Grado de infestación en el cual debe implementarse una medida de control para evitar que la población de organismos nocivos supere el umbral económico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Altieri, M. A. & Nicholls, C. I. (2018). Manejo ecológico de plagas. Agroecología: ciencia fundamental para el diseño de fincas resilientes a plagas. LEISA. Revista de Agroecología, 34(1), 5-8.',
    },
    {
      referencia:
        'Baíza Avelar, V. H. (2004). Guía técnica del cultivo del aguacate (No. IICA-F01 44). Ministerio de Agricultura y Ganadería, San Salvador (El Salvador) Programa Nacional de Frutas de El Salvador,) IICA.',
    },
    {
      referencia:
        'Brechelt, A. (2008). El manejo ecológico de plagas y enfermedades. Red de Acción en Plaguicidas y sus Alternativas para América Latina (RAP-AL). Fundación Agricultura y Medio Ambiente (FAMA). RD.',
    },
    {
      referencia:
        'Grenón, D. (2007). Agromática: definición y aplicaciones en la empresa agropecuaria. ',
      link:
        'https://www.fca.unl.edu.ar/agromatica/RAdA/Agromatica-Definicion.pdf',
    },
    {
      referencia:
        'Jiménez, E. (2009). Métodos de control de plagas. Universidad Nacional Agraria. ',
    },
    {
      referencia:
        'Nova Gonzales, G. & Caro Vargas, F. M. (1991). Reforestación de microcuencas: trazados para la siembra. Cartilla 6. Servicio Nacional de Aprendizaje.',
    },
    {
      referencia:
        'Perrachón, A. J. (2004). Siembra Directa: ¿qué es? Plan AGROPECUARIO, p. 54-57.',
    },
    {
      referencia:
        'Romero, F. (2004). Manejo integrado de plagas: las bases, los conceptos, su mercantilización. Universidad Autónoma de Chapingo.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luis Álvarez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Eulises Orduz',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Valencia Ebrat',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
