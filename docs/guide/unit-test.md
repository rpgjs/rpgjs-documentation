# Unit Tests

## Prerequisites

1. You must know [Jest](https://jestjs.io)
2. The tests apply to the server side

## Create a unit test

1. Create a file in the `tests` folder. This folder must be outside the `src` folder.
2. the file must end with `.spec.ts`

```ts
import { RpgWorld } from '@rpgjs/server'
import { testing } from '@rpgjs/testing'
import RPGServer from '../src/server/rpg'

let client, socket, player

beforeEach(() => {
    const fixture = testing(RPGServer)
    client = fixture.createClient()
    socket = client.connection()
    player = RpgWorld.getPlayer(client.id)
})

test('test player', () => {
    expect(player).toBeDefined()
})
```

In the `beforeEach()` function, you must: 

1. Wrap your server class with the `testing()` function. It will allow you to emulate a client. 
2. Create a client
3. Connecting and recovering a fake socket
4. Using the [RpgWorld class](/classes/world.html), retrieve the player according to his identifier

You can make tests ! 

### Example of a test

```ts
test('check that after the connection, the player is on the map named town', () => {
    const map = player.getCurrentMap()
    expect(map.id).toBe('town')
})
```

## Launch unit tests

Check that you have the following configuration in the `package.json` file: 

```json
{
    "scripts": {
        "test": "jest"
    },
    "jest": {
        "transform": {
        "\\.ts$": "ts-jest",
        "\\.tmx$": "<rootDir>/node_modules/@rpgjs/compiler/tmx-loader/index.js"
        },
        "moduleFileExtensions": [
            "ts",
            "js"
        ]
    }
}
```

Run the following command line :

`npm test`