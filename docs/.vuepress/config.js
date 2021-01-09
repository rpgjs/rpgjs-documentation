const apiMenu = [
  {
    title: 'Classes Server-Side',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/classes/server',
      '/classes/player',
      '/classes/map',
      '/classes/event'
    ]
  },
  {
    title: 'Classes Client-Side',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/classes/client',
      '/classes/sprite'
    ]
  },
  {
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
]

const guideMenu = [{
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
    '/guide/create-animation',
    '/guide/get-player',
    '/guide/save',
    '/guide/unit-test',
    '/guide/production',
  ]
}, 
{
  title: 'GUI Creation',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/guide/create-gui',
  ]
},
{
  title: 'Advanced',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/advanced/spritesheet',
  ]
}]

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
          link: '/guide/get-started'
        }, {
          text: 'API',
          link: '/commands/common'
        }
      ],
      sidebar:  {
        '/classes/': apiMenu,
        '/commands/': apiMenu,
        '/database/': apiMenu,
        '/guide/': guideMenu,
        '/advanced/': guideMenu
      },
    plugins: ['@vuepress/active-header-links']
  }
}