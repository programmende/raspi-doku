module.exports = {
    // base: "/raspi-doku/",
    plugins: [
    ['@vuepress/back-to-top', true],
    '@vuepress/last-updated',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom'
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
      docsRepo: 'programmende/raspi-doku',
      editLinks: true,
      editLinkText: 'Seite bearbeiten',
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
          }, {
            text: 'Docker Cheatsheet',
            link: '/guide/docker-cheatsheet.html'
      },
          
        ],

        sidebar: {
            '/guide/': getGuideSidebar('Guide', 'Extras'),
        }
    }
}

function getGuideSidebar (groupA, groupB) {
    return [
      {
        title: groupA,
            collapsable: false,
        children: [
            '',
            'raspbian',
            'openmediafault'

        ]
      },
      {
        title: groupB,
        collapsable: true,
        children: [
          'quick-guide',
          'docker-cheatsheet',
        ]
      }
    ]
  }
