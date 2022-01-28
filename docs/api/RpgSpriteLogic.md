::: tip Summary
- [Get Collision of tiles](#get-collision-of-tiles)
- [Get Collision of other players/events](#get-collision-of-other-players-events)
- [Get Tile](#get-tile)
- [Get Shapes](#get-shapes)
:::
---
### Get Collision of tiles
- **Since**: 3.0.0-beta.4
- **Property**: `tiles`
- **Type**: <Type type=' TileInfo[] ' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:



Recovers all the colliding tiles of the current player 


---
### Get Collision of other players/events
- **Since**: 3.0.0-beta.4
- **Property**: `otherPlayersCollision`
- **Type**: <Type type='  <a href="/commands/common.html">RpgPlayer</a> | Rpgvent)[] ' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:



Recovers all other players and events colliding with the current player's hitbox


---
### Get Tile
- **Since**: 3.0.0-beta.4
- **Method**: `player.getTile(x,y,z?)`
- **Arguments**:
    - {<Type type='number' />} `x`.  (Optional: `false`)
    - {<Type type='number' />} `y`.  (Optional: `false`)
    - {<Type type='number' />} `z`.  (Optional: `true`)
- **Return**: <Type type='object' />   
- **Usage**:


Retrieves a tile and checks if the player has a collision

```ts
const tileInfo = player.getTile(20, 30)
console.log(tileInfo)
```

Example of returns: 

```ts
 {
     tiles: [
         {
             id: 0,
             terrain: [],
             probability: null,
             properties: [Object],
             animations: [],
             objectGroups: [],
             image: null,
             gid: 1
         }
     ],
     hasCollision: false,
     isOverlay: undefined,
     objectGroups: [],
     isClimbable: undefined,
     tileIndex: 93
 }
 ```


---
### Get Shapes
- **Since**: 3.0.0-beta.3
- **Method**: `player.getShapes()`
- **Return**: <Type type=' <a href="/classes/shape.html">RpgShape</a>[]' />   
- **Usage**:


Returns all shapes assigned to this player

