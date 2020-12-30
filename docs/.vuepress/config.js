module.exports = {
    title: 'RPGJS v3 Documentation',
    description: 'Create your RPG or MMORPG in Javascript',
    themeConfig: {
      repo: 'https://github.com/RSamaium/RPG-JS',
      nav: [{
          text: 'Home',
          link: 'https://rpgjs.dev'
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
          '/guide/get-started',
          '/guide/structure',
          '/guide/create-tileset',
          '/guide/create-map',
          '/guide/create-sprite',
          '/guide/player-start',
          '/guide/create-event',
          '/guide/create-database',
          '/guide/create-gui',
          '/guide/save',
          '/guide/unit-test',
          '/guide/production',
        ]
      }, {
        title: 'Player Commands API',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/commands/common',
          '/commands/parameter',
          '/commands/class',
          '/commands/gold',
          '/commands/state',
          '/commands/element',
          '/commands/item',
          '/commands/skill',
          '/commands/variable',
          '/commands/move',
          '/commands/gui',
          '/commands/effect',
          '/commands/battle'
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