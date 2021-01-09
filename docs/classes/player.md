# RpgPlayer

An `RpgPlayer` instance is created each time a player is connected. In an event, you often find a `player` parameter of type `RpgPlayer`. You have a series of methods to apply to the player

You can create a class that inherits RpgPlayer to listen to hooks

```ts
import { RpgPlayer } from '@rpgjs/server'

export class Player extends RpgPlayer {
    onConnected() {
        // Making instructions when the player is connected
    }
}
```

[Then put the class in the RpgServer decorator.](/classes/server.html#playerclass)

# RpgPlayer Hooks

Full Example:

```ts
import { RpgPlayer } from '@rpgjs/server'

export class Player extends RpgPlayer {
    onConnected() { }

    onInput({ input }) { }

    onDead() { }

    onLevelUp(nbLevel) { }

    onDisconnected() { }
}
```