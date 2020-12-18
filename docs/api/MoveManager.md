::: tip Summary
- [Change Speed](#change-speed)
- [Block movement](#block-movement)
- [Go through the player](#go-through-the-player)
- [Change Frequency](#change-frequency)
- [Give an itinerary](#give-an-itinerary)
- [Infinite Move Routes](#infinite-move-routes)
- [Stop an infinite movement](#stop-an-infinite-movement)
- [Replay an infinite movement](#replay-an-infinite-movement)
:::
---
### Change Speed
- **Enum**: `number`

| Tag           | Description |
| ------------- |------------:|
| Speed.Slow | 1 |
| Speed.Normal | 3 |
| Speed.Fast | 5 |
- **Property**: `player.speed`
- **Type**: number
- **Optional**: `false`
- **Default**: `3` 
- **Usage**:

 
Changes the player's speed

```ts
player.speed = 1
```

You can use Speed enum

```ts
import { Speed } from '@rpgjs/server'
player.speed = Speed.Slow
```


---
### Block movement
- **Property**: `player.canMove`
- **Type**: boolean
- **Optional**: `false`
- **Default**: `true` 
- **Usage**:

 
Blocks the movement. The player will not be able to move even if he presses the direction keys on the keyboard.

```ts
player.canMove = false
```


---
### Go through the player
- **Property**: `player.through`
- **Type**: boolean
- **Optional**: `false`
- **Default**: `false` 
- **Usage**:

 
No collision will occur if the value of this property is `true`.

```ts
player.through = true
```


---
### Change Frequency
- **Enum**: `number`

| Tag           | Description |
| ------------- |------------:|
| Frequency.Low | 400 |
| Frequency.None | 0 |
- **Property**: `player.speed`
- **Type**: number
- **Optional**: `false`
- **Default**: `0` 
- **Usage**:

 
The frequency allows to put a stop time between each movement in the array of the moveRoutes() method.
The value represents a dwell time in milliseconds. The higher the value, the slower the frequency.

```ts
player.frequency = 400
```

You can use Frequency enum

```ts
import { Frequency } from '@rpgjs/server'
player.frequency = Frequency.Low
```


---
### Give an itinerary
- **Method**: `player.moveRoutes(routes)`
- **Arguments**:
    - {Array&lt;[Move](/commands/move.html#move)&gt;} `routes`.  (Optional: `false`)
- **Return**: Promise  
- **Example**: 
```ts
import { Move } from '@rpgjs/server'

await player.moveRoutes([ Move.tileLeft(), Move.tileDown(2) ])
// The path is over when the promise is resolved
```
 
- **Usage**:


Gives an itinerary. 

You can create your own motion function:

```ts
import { Direction } from '@rpgjs/server'

const customMove = () => {
     return [Direction.Left, Direction.Up]
}

player.moveRoutes([ customMove() ])
```

Your function can also return a function:

 ```ts
import { Direction, RpgPlayer } from '@rpgjs/server'

// This function can be found in another file. By returning a function, you have access to the player who is making a move.
const customMove = (otherPlayer: RpgPlayer) => {
     return (player: RpgPlayer, map) => {
         return otherPlayer.position.x > player.position.x ? Direction.Left : Direction.Right
     }
}

player.moveRoutes([ customMove(otherPlayer) ])
```

the function contains two parameters:

- `player`: the player concerned by the movement
- `map`: The information of the current map


---
### Infinite Move Routes
- **Method**: `player.infiniteMoveRoute(routes)`
- **Arguments**:
    - {Array&lt;[Move](/commands/move.html#move)&gt;} `routes`.  (Optional: `false`)
- **Return**: void  
- **Example**: 
```ts
import { Move } from '@rpgjs/server'

player.infiniteMoveRoute([ Move.tileRandom() ])
```
 
- **Usage**:


Giving a path that repeats itself in a loop to a character

You can stop the movement at any time with `breakRoutes()` and replay it with `replayRoutes()`.


---
### Stop an infinite movement
- **Method**: `player.breakRoutes(force=false)`
- **Arguments**:
    - {boolean} `force`. Forces the stop of the infinite movement (Optional: `true`)
- **Return**: void  
- **Example**: 
```ts
import { Move } from '@rpgjs/server'

player.infiniteMoveRoute([ Move.tileRandom() ])
player.breakRoutes(true)
```
 
- **Usage**:


Works only for infinite movements. You must first use the method `infiniteMoveRoute()`


---
### Replay an infinite movement
- **Method**: `player.replayRoutes()`
- **Return**: void  
- **Example**: 
```ts
import { Move } from '@rpgjs/server'

player.infiniteMoveRoute([ Move.tileRandom() ])
player.breakRoutes(true)
player.replayRoutes()
```
 
- **Usage**:


Works only for infinite movements. You must first use the method `infiniteMoveRoute()`
If the road was stopped with `breakRoutes()`, you can restart it with this method

