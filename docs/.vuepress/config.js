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
      }, {
        title: 'Player Commands API',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/commands/parameter',
          '/commands/gold',
          '/commands/item',
          '/commands/move',
          '/commands/gui'
        ]
      },
      {
        title: 'RPG Database',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/database/item',
          '/database/weapon',
          '/database/armor',
          '/database/actor',
          '/database/class',
          '/database/skill',
          '/database/state',
          '/database/element',
          '/database/effect'
        ]
      }
    ],
    plugins: ['@vuepress/active-header-links']
  }
}