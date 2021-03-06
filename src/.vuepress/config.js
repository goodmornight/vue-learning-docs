const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GoodNight FE Notes',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      {
        text: '数据结构与算法',
        link: '/algorithm/',
      },
      {
        text: 'HTML+CSS',
        link: '/algorithm/'
      },
      {
        text: 'JS',
        link: '/algorithm/'
      },
      {
        text: 'Vue',
        link: '/algorithm/'
      },
      {
        text: 'React',
        link: '/algorithm/'
      },
      {
        text: 'Webpack',
        link: '/algorithm/'
      },
      {
        text: 'NodeJS',
        link: '/algorithm/'
      },
      {
        text: '性能优化',
        link: '/algorithm/'
      },
      {
        text: '设计模式',
        link: '/algorithm/'
      },
      {
        text: '小技巧',
        link: '/tips/'
      },
      {
        text: '博客',
        link: 'http://www.goodnight.wiki/'
      }
    ],
    sidebar: {
      // '/guide/': [
      //   {
      //     title: 'Guide',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
      '/algorithm/': [
        '',
        {
          title: '数据结构',
          collapsable: false,
          children: [
            'stack',
            'queue',
            'linkedList',
            'set',
            'map',
            'tree',
            'heap',
            'graph'
          ]
        },
        {
          title: '算法',
          collapsable: false,
          children: [
            'sort'
          ]
        },
        {
          title: '算法设计思想',
          collapsable: false,
          children: [
            
          ]
        },
      ],
      '/tips/': [
        {
          title: '开发小技巧',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    lineNumbers: true
  }
}
