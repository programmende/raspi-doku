module.exports = {
  //base: "/docs/",
  plugins: [
    ['@vuepress/back-to-top', true],
    '@vuepress/last-updated',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  markdown: {
    lineNumbers: false,
  },
  
  host: 'localhost',
  
  title: 'Raspberry Pi Homeserver',
  
  description: 'erklärt am Praxisbeispiel',
  
  themeConfig: {
    navbar: true,
    smoothScroll: false,
    repo: 'programmende/raspi-doku',
    docsDir: 'docs',
    editLinks: true,
    //docsDir: '',
    editLinkText: 'Seite bearbeiten',
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },

    ],

    sidebar: {
      '/guide/': getGuideSidebar('Guide', 'Extras'),
    }
  }
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'raspbian',
        'openmediafault',
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'docker-cheatsheet',
      ]
    }
  ]
}
