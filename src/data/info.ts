import type { Info } from '../@types'

export const info: Info = {
  name: 'Jesús Vállez Gomis',
  jobDescription: 'Senior Frontend Developer',
  aboutMeShort:
    'La pasión por crear experiencias digitales de valor define mi profesión y hobby. No solo escribo código, sino que me involucro en diseño, análisis e implementación con visión crítica, siempre buscando evolucionar y mantenerme actualizado en el desarrollo web.',
  aboutMe: [
    'Mi hobby es mi profesión y mi profesión es mi hobby.',
    'Mi pasión es crear experiencias digitales que aporte valor a los usuarios. También me gusta sentir la responsabilidad de los proyectos en los que participo y no me conformo con solo escribir código sino que me involucro en el proceso de diseño, análisis y, por supuesto, implementación de los proyectos en los que trabajo con visión crítica.',
    'Trato de seguir evolucionando como profesional de JS/TS y siempre quiero estar actualizado y al día de este gran mundo del desarrollo web.',
  ],
  experience: {
    'Experiencia Profesional': [
      {
        name: 'Grupo MásMóvil',
        location: 'Alcobendas, Madrid, España',
        job: [
          {
            name: 'Senior Frontend Developer',
            startDate: 'Oct 2021',
            endDate: 'Presente',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Desarrollo la web comercial y la parte privada de https://www.pepephone.com, una compañía de telecomunicaciones que ofrece servicios de telefonía fija, móvil e internet en España y, ahora también, Netflix y Prime. También participo en otros proyectos multimarca del Grupo MásMóvil.',
                  'Trabajo bajo metodología Agile y utilizo tecnologías como React, Next.js, react-redux, redux-toolkit, typescript, MUI5, Jest, Cypress y Storybook. Todo ello gestionado mediante un monorepo en NX, lo que me facilita el mantenimiento y la reutilización de funciones y componentes.',
                ],
              },
            ],
          },
          {
            name: 'Senior Frontend Developer',
            startDate: 'Jul 2019',
            endDate: 'Sep 2021',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Desarrollo de la web comercial de https://www.yoigo.com. El projecto está construido en diferentes tecnologías tabajando bajo equipos Agile.',
                  'Los dos stacks tecnológicos usados son: React, NextJS, react-redux, redux-toolkit, redux-persist, typescript, Material-UI, Jest, Cypress, etc; y por otro lado: Angular 9, con SSR, redux (NgRx), Karma, etc.. Todo esto junto a entornos de integración continua como CircleCI o Jenkins.',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'BQ - Educación',
        location: 'Las Rozas de Madrid, España',
        job: [
          {
            name: 'Frontend Developer',
            startDate: 'May 2018',
            endDate: 'Jun 2019',
            description: [
              {
                type: 'paragraph',
                text: [
                  'bMaker es un proyecto de BQ Educación y Macmillan Education. Este proyecto está orientado a centros de enseñanza y está destinada para aprender robótica y programación en las aulas de Primaria y Secundaria.',
                  'Se construyó con diferentes tecnologías y entre ellas se encuentra Angular 7.',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Lowpost S.L.',
        location: 'Paterna, Valencia, España',
        job: [
          {
            name: 'PHP Developer',
            startDate: 'Ago 2017',
            endDate: 'Abr 2018',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Aplicación WEB para la creación de contenidos, escribiendo textos únicos y a medida.',
                  'Esta aplicación web se divide en dos grandes apartados, clientes y autores:',
                ],
              },
              {
                type: 'list',
                text: [
                  'El apartado de clientes está construido con AngularJS, ayudándose de una API pública hecha en Symfony 2 y Drupal para el backend.',
                  'El apartado de autores, está implementado con Drupal 7 y Symfony en su totalidad.',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Mediadd',
        location: 'Paterna, Valencia, España',
        job: [
          {
            name: 'PHP Developer',
            startDate: 'Dic 2016',
            endDate: 'May 2017',
            description: [
              {
                type: 'list',
                text: [
                  'Aplicación WEB basada en formularios dinámico y exportación de datos. Todo esto basado en el Framework Yii 1.1.',
                  'Aplicación WEB que registra los gastos de los empleados mostrando al administrador estadísticas en forma de gráficas con la posibilidad de exportarlos en formato XLS. Aplicación basada en el Framework Yii 2.0.',
                ],
              },
            ],
          },
        ],
      },

      {
        name: 'IR - LISITT (UVEG)',
        location: 'Paterna, Valencia, España',
        job: [
          {
            name: 'PHP Developer',
            startDate: 'Feb 2015',
            endDate: 'May 2016',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Dos aplicaciones WEB relacionadas con el ámbito sanitario (Reumatología y VIH).',
                  'Entre las distintas funcionalidades se encuentran las consultas masivas y eficientes sobre pacientes y medicamentos, o monitorización del coste económico y evolutivo del paciente hacia el hospitales además de la exportación de datos en formato XLS. Aplicaciones basadas en el Framework Yii 1.1.',
                ],
              },
            ],
          },
          {
            name: 'Investigador No Doctor',
            startDate: 'Jun 2014',
            endDate: 'Enero 2015',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Proyecto Final de Carrera: Servicio WEB REST destinado a la integración de información de un CRM. Desarrollada sobre la tecnología J2EE, anotaciones Java JAX-RS y Swagger UI para la documentación.',
                ],
              },
            ],
          },
          {
            name: 'Investigador No Doctor',
            startDate: 'Jul 2013',
            endDate: 'Sep 2014',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Implementación de un módulo CATI para E-NQUEST con la tecnología Asterisk. Desarrollo de un gestor de colas telefónicas en JAVA y configuración del servidor mediante scripts AGI. Implementación de una interfaz gráfica para la gestión de las llamadas.',
                ],
              },
            ],
          },
        ],
      },
    ],
    'Formación Académica': [
      {
        name: "Escola Técnica Superior d'Enginyería",
        location: 'Universitat de València, Valencia',
        job: [
          {
            name: 'Ingeniero Informático',
            startDate: 'Sep 2009',
            endDate: 'Ene 2015',
            description: [
              {
                type: 'paragraph',
                text: [
                  'Proyecto Final de Carrera: servicio WEB REST destinado a la integración de información de un CRM. Desarrollada sobre la tecnología J2EE, anotaciones Java JAX-RS y Swagger UI para la documentación.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  socialMedia: {
    github: 'https://github.com/jesusvallez',
    linkedin: 'https://www.linkedin.com/in/jesusvallez',
  },
  projects: [],
}
