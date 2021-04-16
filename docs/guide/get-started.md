# Get Started

## What is RPGJS?

RPGJS was created several years ago, with the aim of creating an RPG on the browser. For this, the framework uses HTML5 Canvas. However, it was not possible to make only RPG. Currently, the version of RPGJS allows you to create an RPG or an MMORPG at the same time.

## Technology

- Typescript v4
- Webpack v4 (for compilation)
- NodeJS >v12 (for server)
- Socket.io v3 (for real time)
- PixiJS v5 (for WebGL rendering)
- VueJS v3 (for GUIs)
- Jest v26 (for unit tests)

## Compatibility

**Client-Side**

- Google Chrome
- Firefox
- Edge (only Webkit version)
- Brave

> Warning, the game is not compatible with Internet Explorer.

**Server-Side**

- NodeJS >12

## Installation

**For MMORPG**:

```bash
npx degit rpgjs/template my-rpg-game
cd my-rpg-game
npm install
npm run dev
```

And open a browser on `http://localhost:3001` (Development mode with browserSync)

 > Without browserSync: `http://localhost:3000`
 
 > To change the port: `PORT=4000 npm run dev`. Then, you can go to port 4000 or 4001

**For RPG**:

The same line as above but start the development line with `RPG_TYPE` environment variable:

`RPG_TYPE=rpg npm run dev`

Go to `http://localhost:3000`

> To change the port: `PORT=4000 RPG_TYPE=rpg npm run dev`

## Existing packages

As of the installation, packages allowing to already have a game are present:

* `@rpgjs/starter-kit-client`: Default spritesheets and tilesets
* `@rpgjs/starter-kit-server`: Default maps and data (items, weapons, etc.)
* `@rpgjs/default-gui`: Default GUIs

So, in `src/client/rpg.ts`,

You can reset 

```ts
import { RpgClient } from '@rpgjs/client'

@RpgClient({
    spritesheets: [],
    sounds: [],
    gui: []
})
export default class RPG extends RpgClientEngine { }
```

Same server side, in `src/server/rpg.ts`,

```ts
import { RpgServer, RpgServerEngine } from '@rpgjs/server'

@RpgServer({
    basePath: __dirname,
    maps: []
    database: {}
})
export default class RPG extends RpgServerEngine { } 
```