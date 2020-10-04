module.exports = {
  title: 'RPGJS v3 Documentation',
  description: 'Create your RPG or MMORPG in Javascript',
  themeConfig: {
    repo: 'https://github.com/RSamaium/RPG-JS',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      }
    ],
    sidebar: [{
      title: 'Guide',
      collapsable: false,
      sidebarDepth: 1,
      children: [
        '/guide/structure',
        '/guide/create-tileset',
        '/guide/create-map',
        '/guide/create-sprite',
        '/guide/player-start',
        '/guide/create-event',
        '/guide/create-database',
        '/guide/use-event-commands',
        '/guide/create-gui'
      ]
    }],
    plugins: ['@vuepress/active-header-links']
  }
}