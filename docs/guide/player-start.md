# Set Player start in map

## It is necessary to know

1. You can perform several commands on the player. Change hit points, level, etc.
2. You can create a `Player` class to perform commands according to a situation. Here it is when it is connected

## Create Player class

```ts
import { RpgPlayer } from 'rpgjs/server'

export class Player extends RpgPlayer {
    onConnected() {
        this.setGraphic('hero') 
        this.changeMap('medieval', {
            x: 100,
            y: 100
        })
    }
}
```

1. Create a `Player` class that inherits from RpgPlayer. The file, in our structure, is `src/server/player.ts`.
2. We give it a graph to give an initial appearance to the player

> Make sure the spritesheet is existing. Here, `hero` is the name of the client-side spritesheet. If it is not the case, see the sprite creation tutorial.

3. Position the player on the map with X and Y positions

> Make sure that there is a map with the correct identifier. Here, the `medieval` map exists. Otherwise, read the tutorial on how to create a map.