import type { Info } from '../@types'

enum technologies {
  agi = 'AGI',
  angular7 = 'Angular 7',
  angular9 = 'Angular 9',
  angularjs = 'AngularJS',
  asterisk = 'Asterisk',
  cypress = 'Cypress',
  drupal = 'Drupal',
  elasticsearch = 'Elasticsearch',
  j2ee = 'J2EE',
  java = 'Java',
  jaxrs = 'JAX-RS',
  jest = 'Jest',
  karma = 'Karma',
  lerna = 'Lerna',
  mui4 = 'MUI4',
  mui5 = 'MUI5',
  mysql = 'MySQL',
  nextjs11 = 'Next.js 11',
  nextjs14 = 'Next.js 14',
  ngrx = 'NgRx',
  nx = 'Nx',
  php5 = 'PHP 5.6',
  php7 = 'PHP 7',
  playwrigth = 'Playwright',
  rabbitmq = 'RabbitMQ',
  react = 'React',
  redis = 'Redis',
  storybook = 'Storybook',
  swagger = 'Swagger',
  symfony = 'Symfony',
  typescript = 'TypeScript',
  yii = 'Yii 1.1',
  yii2 = 'Yii 2.0',
}

export const info: Info = {
  name: 'Jesús Vállez Gomis',
  jobDescription: 'Senior Frontend Developer',
  aboutMeShort:
    '+10 años de experiencia. Crear experiencias digitales define mi profesión y hobby. Trato de ir más allá involucrandome en el análisis, diseño e implementación con visión crítica.',
  aboutMe: [
    'Mi hobby es mi profesión y mi profesión es mi hobby.',
    'Mi pasión es crear experiencias digitales que aporte valor a los usuarios. También me gusta sentir la responsabilidad de los proyectos en los que participo y no me conformo con solo escribir código sino que me involucro en el proceso de diseño, análisis y, por supuesto, implementación de los proyectos en los que trabajo con visión crítica.',
    'Trato de seguir evolucionando como profesional de JS/TS y siempre quiero estar actualizado y al día de este gran mundo del desarrollo web.',
  ],
  professionalExp: [
    {
      name: 'Grupo MásMóvil',
      location: 'Alcobendas, Madrid, España',
      job: [
        {
          name: 'Senior Frontend Developer',
          startDate: 'Oct 2021',
          endDate: 'Presente',
          technologies: [
            technologies.nextjs14,
            technologies.react,
            technologies.typescript,
            technologies.nx,
            technologies.mui5,
            technologies.jest,
            technologies.playwrigth,
            technologies.storybook,
          ],
          description: [
            {
              type: 'paragraph',
              text: [
                'Ayudo a mejorar la web comercial desde un punto de vista técnico, garantizando un mejor funcionamiento a nivel de performace. También gestiono el frontend de un proyecto interno.',
              ],
            },
          ],
        },
        {
          name: 'Senior Frontend Developer',
          startDate: 'Jul 2019',
          endDate: 'Sep 2021',
          technologies: [
            technologies.angular9,
            technologies.nextjs11,
            technologies.react,
            technologies.typescript,
            technologies.lerna,
            technologies.mui4,
            technologies.jest,
            technologies.karma,
            technologies.cypress,
          ],
          description: [
            {
              type: 'paragraph',
              text: [
                'Desarrollador de la parte comercial de yoigo.com identificando oportunidades para mejorar el sistema existente, así como el uso de un CMS o el módulo del checkout.',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'BQ - Educación',
      location: 'Las Rozas, Madrid, España',
      job: [
        {
          name: 'Frontend Developer',
          startDate: 'May 2018',
          endDate: 'Jun 2019',
          technologies: [
            technologies.angular7,
            technologies.typescript,
            technologies.ngrx,
            technologies.jest,
            technologies.cypress,
          ],
          description: [
            {
              type: 'paragraph',
              text: [
                'Desarrollador de la plataforma educativa bMaker. Creación y puesta en producción, llegando a crear contenido de caracter informático.',
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
          technologies: [
            technologies.symfony,
            technologies.drupal,
            technologies.php7,
            technologies.angularjs,
            technologies.mysql,
            technologies.redis,
            technologies.rabbitmq,
            technologies.elasticsearch,
          ],

          description: [
            {
              type: 'paragraph',
              text: [
                'Desarrollador de la aplicación web dedicada a la gestión de contenidos. Mejora del proceso de automatización de trabajos y correcciones.',
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
          technologies: [
            technologies.yii2,
            technologies.php7,
            technologies.mysql,
            technologies.redis,
            technologies.rabbitmq,
            technologies.elasticsearch,
          ],

          description: [
            {
              type: 'paragraph',
              text: [
                'Creación de una plataforma para la gestión de pagos internos de los empleados, dotando a la web de roles para una futura administración. Mejoras en la plataforma principal y evolución de la arquitectura.',
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
          technologies: [technologies.yii, technologies.php5, technologies.mysql, technologies.redis],
          description: [
            {
              type: 'paragraph',
              text: [
                'Mantenimiento de dos plataformas donde gracias a diferentes formulas y sentencias SQL pude resolver problemas de optimización.',
              ],
            },
          ],
        },
        {
          name: 'Investigador No Doctor',
          startDate: 'Jul 2013',
          endDate: 'Ene 2015',
          technologies: [
            technologies.java,
            technologies.j2ee,
            technologies.swagger,
            technologies.jaxrs,
            technologies.asterisk,
            technologies.agi,
          ],
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
  academicExp: [
    {
      name: "Escola Técnica Superior d'Enginyería",
      location: 'Universitat de València, Valencia',
      job: [
        {
          name: 'Ingeniero Informático',
          startDate: 'Sep 2009',
          endDate: 'Ene 2015',
          technologies: [technologies.java, technologies.j2ee, technologies.swagger, technologies.jaxrs],
          description: [
            {
              type: 'paragraph',
              text: [
                'Nota del proyecto: 9',
                'Servicio WEB REST destinado a la integración de información de un CRM. Desarrollada sobre la tecnología J2EE, anotaciones Java JAX-RS y Swagger UI para la documentación.',
              ],
            },
          ],
        },
      ],
    },
  ],
  socialMedia: {
    github: 'https://github.com/jesusvallez',
    linkedin: 'https://www.linkedin.com/in/jesusvallez',
  },
  projects: [],
}
