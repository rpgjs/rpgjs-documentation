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
- **Type**: <Type type=' <a href="https://rxjs.dev/guide/observable.html">Observable</a>' />
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
    - {<Type type=' <a href="/commands/common.html">RpgPlayer</a> | string' />} `player`. identifier (Optional: `false`)
- **Return**: <Type type=' <a href="/commands/common.html">RpgPlayer</a>' />   
- **Usage**:


Retrieve a player according to his ID

```ts
import { RpgWorld } from '@rpgjs/server'

const player = RpgWorld.getPlayer(player) // player is RpgPlayer (player.id) or string (id)
```


---
### Get all Players
- **Method**: `RpgWorld.getPlayers()`
- **Return**: <Type type='Array&lt <a href="/commands/common.html">RpgPlayer</a>&gt;' />   
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
    - {<Type type='string' />} `map`. Map Name (Optional: `false`)
    - {<Type type=' <a href="/commands/common.html">RpgPlayer</a> | string' />} `playerId`. player identifier (Optional: `false`)
- **Return**: <Type type='Array&lt <a href="/commands/common.html">RpgPlayer</a>&gt;' />   
- **Usage**:


Recover all map objects: players and events. If you specify the `player` parameter, it also retrieves the events in scenario mode of the player in question

```ts
import { RpgWorld } from '@rpgjs/server'

const objects = RpgWorld.getObjectsOfMap('mapname')
console.log(objects)
```

Also retrieve events in Scenario mode:

```ts
import { RpgWorld } from '@rpgjs/server'

const objects = RpgWorld.getObjectsOfMap('mapname', 'playerid')
```


---
### Get all Players a map
- **Method**: `RpgWorld.getPlayersOfMap(map)`
- **Arguments**:
    - {<Type type='string' />} `map`. Map Name (Optional: `false`)
- **Return**: <Type type='Array&lt <a href="/commands/common.html">RpgPlayer</a>&gt;' />   
- **Usage**:


Recover all the players of a map

```ts
import { RpgWorld } from '@rpgjs/server'

const players = RpgWorld.getPlayersOfMap('mapname')
```

