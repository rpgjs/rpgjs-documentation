# Customize Webpack

## Put Webpack

Webpack is used to optimize your game (move resources to the corresponding folders, generate JSON from TMX (Tiled Map Editor), Read .view files, etc.).

All the configuration is in the `@rpgjs/compiler` package.

```bash
npm i webpack webpack-cli rimraf @rpgjs/compiler -D
```

> Note that `@rpgjs/compiler` does not work on version >5 of Webpack

Then, in the `webpack.config.js` file, write the following lines:

```js
const webpack = require('@rpgjs/compiler')

module.exports = webpack(__dirname)
```

In the .json package, put the scripts:

```json
{
    "scripts": {
        "build": "rimraf dist && webpack",
        "dev": "rimraf dist && webpack -w"
    }
}
```

## Changing the Webpack configuration

For example, if you want to change the file as an entry point, you can do so:

```js
const webpack = require('@rpgjs/compiler')
module.exports = webpack(__dirname, {
    extendClient: {
        entry : `./src/${ process.env.RPG_TYPE == 'mmorpg' ? 'client/otherfile.ts' : 'standalone/otherfile.ts' }`
    },
    extendServer: {}
})
```

[Follow the Webpack API to configure the file](https://webpack.js.org/)