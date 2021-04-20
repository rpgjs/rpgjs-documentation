# Create a plugin

## Why ?

By creating a plugin, you allow to install a new system, new menus or new features in the game. You can then share the plugin with the community:

The plugin has two purposes:
- Import the plugin directly into your game with minimal effort
- the plugin adapts to the type of game (RPG or MMORPG), to the execution on the server or client side and to the environment (development and production). In other words, if a plugin is designed just for the MMORPG (a monitoring system for example), then it will be ignored when compiling an RPG game

## Install the template

in your project

`npx degit rpgjs/plugin-template my-rpg-plugin`

- In the `client.ts` file, you find a function with two parameters:
    - An object to use RpgPlugin and the client instance
    - the plugin options

You find the same idea in `server.ts` but for the server part
The `index.ts` file returns an object gathering the client part and the server part:

```ts
import client from 'client!./client'
import server from 'server!./server'

export default {
    client,
    server
}
```

notice that we have added loaders (`client!` and `server!`) in order to ignore the part depending on which side we are located. For example, the client is ignored on the server side. Its value is `null`

We can also use other loaders: 

- `mmorpg!`: 
- `rpg!`
- `development!`
- `production!`

<Partial page="todo" />