::: tip Summary
- [Subscribe to the world](#subscribe-to-the-world)
- [Get Player](#get-player)
- [Get all Players](#get-all-players)
- [Get all objects of map](#get-all-objects-of-map)
- [Get all Players a map](#get-all-players-a-map)
:::
---
### Subscribe to the world
- **Property**: `RpgWorld.changes`
- **Type**: [Observable](https://rxjs.dev/guide/observable)
- **Optional**: `false` 
- **Usage**:

 
Listen to the changes on all the rooms

```ts
import { RpgWorld } from '@rpgjs/server'
import { map } from 'rxjs/operators' // install rxjs

RpgWorld.changes
 .pipe(
     map(rooms => rooms['mymap'])
 )
 .subscribe((room) => {
     const users: any = Object.values(room.users)
     console.log(users)
 })
``` 


---
### Get Player
- **Method**: `RpgWorld.getPlayer(player)`
- **Arguments**:
    - {[RpgPlayer](/classes/player) | string} `player`. identifier (Optional: `false`)
- **Return**: [RpgPlayer](/classes/player)   
- **Usage**:


Retrieve a player according to his ID

```ts
import { RpgWorld } from '@rpgjs/server'

const player = RpgWorld.getPlayer(player) // player is RpgPlayer (player.id) or string (id)
```


---
### Get all Players
- **Method**: `RpgWorld.getPlayers()`
- **Return**: Array&lt;[RpgPlayer](/classes/player)&gt;   
- **Usage**:


Recover all the players of the game

```ts
import { RpgWorld } from '@rpgjs/server'

const players = RpgWorld.getPlayers()
```


---
### Get all objects of map
- **Method**: `RpgWorld.getObjectsOfMap(map,playerId?)`
- **Arguments**:
    - {string} `map`. Map Name (Optional: `false`)
    - {[RpgPlayer](/classes/player) | string} `playerId`. player identifier (Optional: `false`)
- **Return**: Array&lt;[RpgPlayer](/classes/player)&gt;   
- **Usage**:


Allows to recover all the objects of the map (players and events) 

```ts
import { RpgWorld } from '@rpgjs/server'

const objects = RpgWorld.getObjectsOfMap('mapname')
```

If you specify the player, you can retrieve his events in Scenario mode

```ts
import { RpgWorld } from '@rpgjs/server'

const objects = RpgWorld.getObjectsOfMap('mapname', 'playerid')
```


---
### Get all Players a map
- **Method**: `RpgWorld.getPlayersOfMap(map)`
- **Arguments**:
    - {string} `map`. Map Name (Optional: `false`)
- **Return**: Array&lt;[RpgPlayer](/classes/player)&gt;   
- **Usage**:


Recover all the players of a map

```ts
import { RpgWorld } from '@rpgjs/server'

const players = RpgWorld.getPlayersOfMap('mapname')
```

