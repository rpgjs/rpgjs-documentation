::: tip Summary
- [Read/Give a name](#read-give-a-name)
- [Set Graphic](#set-graphic)
- [Change Map](#change-map)
- [Teleport on the map](#teleport-on-the-map)
- [Load progress](#load-progress)
- [Save progress](#save-progress)
- [Run Sync Changes](#run-sync-changes)
- [Get Current Map](#get-current-map)
- [Show Animation](#show-animation)
- [Emit to client](#emit-to-client)
- [Get/Set position](#get-set-position)
- [Set Sizes](#set-sizes)
- [Set Hitbox](#set-hitbox)
- [Get Direction](#get-direction)
- [Change direction](#change-direction)
:::
---
### Read/Give a name
- **Property**: `player.name`
- **Type**: string
- **Optional**: `false` 
- **Usage**:

 
```ts
player.name = 'Link'
``` 

---
### Set Graphic
- **Method**: `player.setGraphic(graphic)`
- **Arguments**:
    - {string} `graphic`.  (Optional: `false`)
- **Return**: void   
- **Usage**:


Give the spritesheet identifier

> You must, on the client side, create the spritesheet in question. Guide: [Create Sprite](/guide/create-sprite.html)


---
### Change Map
- **Method**: `player.changeMap(mapId,positions)`
- **Arguments**:
    - {string} `mapId`.  (Optional: `false`)
    - { {x: number, y: number, z?: number} | string } `positions`.  (Optional: `true`)
- **Return**: Promise&lt;[RpgMap](/classes/map)&gt;   
- **Usage**:


Change your map. Indicate the positions to put the player at a place on the map

> The map must be added to RpgServer beforehand. Guide: [Create Map](/guide/create-map.html)

You don't have to give positions but you can put a starting position in the TMX file. Guide: [Start Position](/guide/player-start.html)


---
### Teleport on the map
- **Method**: `player.teleport(positions)`
- **Arguments**:
    - { {x: number, y: number, z?: number} | string } `positions`.  (Optional: `true`)
- **Return**:  {x: number, y: number, z: number}    
- **Usage**:


Allows to change the positions of the player on the current map. 
You can put the X and Y positions or the name of the created shape on Tiled Map Editor.
If you have several shapes with the same name, one position will be chosen randomly.

```ts
player.teleport({ x: 100, y: 500 })
```

or

```ts
player.teleport('my-shape-name')
```

If no parameter: 

```ts
player.teleport() // { x: 0, y: 0, z: 0 }
```


---
### Load progress
- **Method**: `player.load(json)`
- **Arguments**:
    - {string} `json`. The JSON sent by the method save() (Optional: `false`)
- **Return**: string   
- **Usage**:


Load the saved data with the method save()
If the player was on a map, it repositions the player on the map. 

```ts
const json = player.save()
player.load(json)
```


---
### Save progress
- **Method**: `player.save()`
- **Return**: string   
- **Usage**:


Returns a JSON with all the data to keep in memory. Then use the `load()` method to load the data

You can also use the JSON.stringify 

```ts
const json = player.save() // or JSON.stringify(player)
player.load(json)
```


---
### Run Sync Changes
- **Method**: `player.syncChanges()`
- **Return**: void   
- **Usage**:


Run the change detection cycle. Normally, as soon as a hook is called in a class, the cycle is started. But you can start it manually
The method calls the `onChanges` method on events and synchronizes all map data with the client.

```ts
// restarts the change detection cycle every 3s
setInterval(() => {
     player.hp += 10
     player.syncChanges()
}, 3000)
```

---
### Get Current Map
- **Method**: `player.getCurrentMap()`
- **Return**: [RpgMap](/classes/map)   
- **Usage**:


Retrieves data from the current map


---
### Show Animation
- **Method**: `player.showAnimation(graphic,animationName)`
- **Arguments**:
    - {string} `graphic`. spritesheet identifier (Optional: `false`)
    - {string} `animationName`. Name of the animation in the spritesheet (Optional: `false`)
- **Return**: void   
- **Usage**:


Calls the showAnimation() method on the client side to display an animation on the player
You must remember to create the spritesheet beforehand

For this type of spritesheet:

```ts
@Spritesheet({
 id: 'fire',
 image: require('')
 textures: {
     default: {
         animations: [
         
         ]
     }
  }
})
export class FireAnimation {}
```

Here is the call of the method:

```ts
player.animation('fire', 'default')
```


---
### Emit to client
- **Method**: `player.emit(key,value)`
- **Arguments**:
    - {string} `key`.  (Optional: `false`)
    - {any} `value`.  (Optional: `false`)
- **Return**: void   
- **Usage**:


Emit data to clients with socket


---
### Get/Set position
- **Property**: `position`
- **Type**:  { x: number, y: number, z: number } 
- **Optional**: `false` 
- **Usage**:


Get/Set position x, y and z of player

z is the depth layer. By default, its value is 0. Collisions and overlays will be performed with other objects on the same z-position. 


---
### Set Sizes
- **Method**: `player.setSizes(key,value)`
- **Arguments**:
    - { { width: number, height: number, hitbox?: { width: number, height: number } } } `obj`.  (Optional: `false`)
- **Return**: void   
- **Usage**:


Define the size of the player. You can set the hitbox for collisions

```ts
player.setSizes({
     width: 32,
     height: 32
})
```

and with hitbox:

 ```ts
player.setSizes({
     width: 32,
     height: 32,
     hitbox: {
         width: 20,
         height: 20
     }
})
```


---
### Set Hitbox
- **Method**: `player.setHitbox(width,height)`
- **Arguments**:
    - {number} `width`.  (Optional: `false`)
    - {number} `height`.  (Optional: `false`)
- **Return**: void   
- **Usage**:


Define the hitbox of the player.

```ts
player.setHitbox({
     width: 20,
     height: 20
})
```


---
### Get Direction
- **Method**: `player.getDirection()`
- **Return**: string  right, up or down 
- **Usage**:


Get the current direction.

```ts
player.getDirection()
```


---
### Change direction
- **Enum**: `string`

| Tag           | Description |
| ------------- |------------:|
| Direction.Left | left |
| Direction.Right | right |
| Direction.Up | up |
| Direction.Down | down |
- **Method**: `player.changeDirection(direction)`
- **Arguments**:
    - {Direction} `direction`.  (Optional: `false`)
- **Return**: boolean  direction has changed 
- **Usage**:


Changes the player's direction

```ts
import { Direction } from '@rpgjs/server'

player.changeDirection(Direction.Left)
```

