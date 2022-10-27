const apiMenu = [
  {
    title: 'Classes Server-Side',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/classes/server-engine',
      '/classes/server',
      '/classes/player',
      '/classes/scene-map-server',
      '/classes/map',
      '/classes/world-maps',
      '/classes/event',
      '/classes/shape',
      '/classes/world'
    ]
  },
  {
    title: 'Classes Client-Side',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/classes/client',
      '/classes/client-engine',
      '/classes/sprite',
      '/classes/spritesheet',
      '/classes/scene-map',
      '/classes/gui',
      '/classes/sound',
      '/classes/resource',
      '/classes/keyboard',
      '/classes/vue-inject'
    ]
  },
  {
    title: 'Player Commands Server-Side',
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
    '/guide/create-tileset',
    '/guide/create-map',
    '/guide/create-world-maps',
    '/guide/create-sprite',
    '/guide/player-start',
    '/guide/create-event',
    '/guide/create-sound',
    '/guide/create-database',
    '/guide/save',
    '/guide/production',
  ]
},
{
  title: 'Guide (advanced)',
  collapsable: false,
  sidebarDepth: 1,
  children: [
    '/guide/create-module',
    '/guide/animation-tile',
    '/guide/create-shape',
    '/guide/unit-test',
    '/advanced/listen-param-client',
    '/advanced/event-changes',
    '/advanced/agones',
    '/guide/performance',
  ]
}, 
{
  title: 'GUI Creation',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/gui/theme',
    '/gui/reuse-gui',
    '/gui/notification-gui',
    '/guide/create-gui',
    '/gui/tooltip'
  ]
},
{
  title: 'Technical',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/guide/inputs',
    '/guide/gamepad',
    '/guide/responsive-design',
    '/guide/webpack',
  ]
}
/*{
  title: 'Advanced',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/advanced/spritesheet',
  ]
} */]

const pluginMenu = [{
  title: 'Plugins',
  collapsable: false,
  sidebarDepth: 1,
  children: [
    '/plugins/chat',
    '/plugins/save',
    '/plugins/title-screen',
    '/plugins/emotion-bubble'
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
        }, 
        {
          text: 'API',
          link: '/commands/common'
        },
        {
          text: 'Plugins',
          link: '/plugins/chat'
        },
        {
          text: 'Lean more',
          items: [
            { text: 'Change Log', link: '/others/changelog' }
          ]
        },
        {
          text: 'Community',
          link: 'https://community.rpgjs.dev'
        }
      ],
      sidebar:  {
        '/classes/': apiMenu,
        '/commands/': apiMenu,
        '/database/': apiMenu,
        '/api/': apiMenu,
        '/guide/': guideMenu,
        '/gui/': guideMenu,
        '/advanced/': guideMenu,
        '/plugins/': pluginMenu
      },
    plugins: ['@vuepress/active-header-links']
  }
}