# Set Player start in map

## Prerequisites

1. You must have created a map and added in your game

## It is necessary to know

1. You can perform several commands on the player. Change hit points, level, etc.
2. You can create a `Player` class to perform commands according to a situation. Here it is when it is connected
3. You have several ways to position a player

## Create Player class

```ts
import { RpgPlayer } from '@rpgjs/server'

export class Player extends RpgPlayer {
    onConnected() {
        this.setGraphic('hero')
    }
}
```

1. Create a `Player` class that inherits from RpgPlayer. The file, in our structure, is `src/server/player.ts`.
2. We give it a graph to give an initial appearance to the player

> Make sure the spritesheet is existing. Here, `hero` is the name of the client-side spritesheet. If it is not the case, see the sprite creation tutorial.

## Start Position 

### Solution 1: Insert a point on Tiled Map Editor

1. Go to Tiled Map Editor
2. Go to the object layer
3. Insert a point on the map

![start-player](/assets/start-player.png)

4. Set the `start` type

![start-player2](/assets/start-player2.png)

5. Go to the map by specifying the ID

```ts
import { RpgPlayer } from '@rpgjs/server'

export class Player extends RpgPlayer {
    async onConnected() {
        this.setGraphic('hero')
        await this.changeMap('medieval')
    }
}
```

> **Useful**: If you set more than one starting point, the player will randomly go to one of the points.

### Solution 2: Give coordinate points

Position the player on the map with X and Y positions

```ts
import { RpgPlayer } from '@rpgjs/server'

export class Player extends RpgPlayer {
    async onConnected() {
        this.setGraphic('hero')
        await this.changeMap('medieval', {
            x: 100,
            y: 100
        })
    }
}
```

> Make sure that there is a map with the correct identifier. Here, the `medieval` map exists. Otherwise, read the tutorial on how to create a map.

## Add Player class in your game engine

In `src/server/rpg.ts`

```ts
import { RpgServer, RpgServerEngine } from '@rpgjs/server'
import { Player } from './player'
import { MedievalMap } from './maps/medieval.ts'

@RpgServer({
    basePath: __dirname,
    maps:  [
        MedievalMap
    ],
    playerClass: Player
})
export default class RPG extends RpgServerEngine {
    
}
```