::: tip Summary
- [Read/Give a name](#read-give-a-name)
- [Set Graphic](#set-graphic)
- [Change Map](#change-map)
- [Create Dynamic Event](#create-dynamic-event)
- [Teleport on the map](#teleport-on-the-map)
- [Load progress](#load-progress)
- [Save progress](#save-progress)
- [Run Sync Changes](#run-sync-changes)
- [Get Current Map](#get-current-map)
- [Show Animation](#show-animation)
- [Emit to client](#emit-to-client)
- [Listen to data from the client](#listen-to-data-from-the-client)
- [Play Sound](#play-sound)
- [Get/Set position](#get-set-position)
- [Set Sizes](#set-sizes)
- [Set Hitbox](#set-hitbox)
- [Attach Shape](#attach-shape)
- [Get Shapes](#get-shapes)
- [Get In-Shapes](#get-in-shapes)
- [Get Direction](#get-direction)
- [Change direction](#change-direction)
:::
---
### Read/Give a name
- **Property**: `player.name`
- **Type**: <Type type='string' />
- **Optional**: `false` 
- **Usage**:

 
```ts
player.name = 'Link'
``` 

---
### Set Graphic
- **Method**: `player.setGraphic(graphic)`
- **Arguments**:
    - {<Type type='string' />} `graphic`.  (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:


Give the spritesheet identifier

> You must, on the client side, create the spritesheet in question. Guide: [Create Sprite](/guide/create-sprite.html)


---
### Change Map
- **Method**: `player.changeMap(mapId,positions)`
- **Arguments**:
    - {<Type type='string' />} `mapId`.  (Optional: `false`)
    - {<Type type=' {x: number, y: number, z?: number} | string ' />} `positions`.  (Optional: `true`)
- **Return**: <Type type='Promise&lt<a href="/classes/map">RpgMap</a>&gt;' />   
- **Usage**:


Change your map. Indicate the positions to put the player at a place on the map

> The map must be added to RpgServer beforehand. Guide: [Create Map](/guide/create-map.html)

You don't have to give positions but you can put a starting position in the TMX file. Guide: [Start Position](/guide/player-start.html)


---
### Create Dynamic Event
- **Since**: 3.beta-4
- **Method**: `player.createDynamicEvent(eventObj`
- **Arguments**:
    - {<Type type=' { x: number, y: number, z?: number, event: eventClass } ' />} `eventsList`.  (Optional: `true`)
- **Return**: <Type type=' { [eventId: string]:<a href="/classes/event">RpgEvent</a> } ' />   
- **Usage**:


Dynamically create an event in Scenario mode on the current map

```ts
@EventData({
 name: 'EV-1'
})
class MyEvent extends RpgEvent {
 onAction() {
     console.log('ok')
 }
} 

player.createDynamicEvent({
     x: 100,
     y: 100,
     event: MyEvent
})
```

You can also put an array of objects to create several events at once


---
### Teleport on the map
- **Method**: `player.teleport(positions)`
- **Arguments**:
    - {<Type type=' {x: number, y: number, z?: number} | string ' />} `positions`.  (Optional: `true`)
- **Return**: <Type type=' {x: number, y: number, z: number} ' />   
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
    - {<Type type='string' />} `json`. The JSON sent by the method save() (Optional: `false`)
- **Return**: <Type type='string' />   
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
- **Return**: <Type type='string' />   
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
- **Return**: <Type type='void' />   
- **Usage**:


Run the change detection cycle. Normally, as soon as a hook is called in a class, the cycle is started. But you can start it manually
The method calls the `onChanges` method on events and synchronizes all map data with the client.


---
### Get Current Map
- **Method**: `player.getCurrentMap()`
- **Return**: <Type type='<a href="/classes/map">RpgMap</a>' />   
- **Usage**:


Retrieves data from the current map


---
### Show Animation
- **Method**: `player.showAnimation(graphic,animationName,replaceGraphic=false)`
- **Arguments**:
    - {<Type type='string' />} `graphic`. spritesheet identifier (Optional: `false`)
    - {<Type type='string' />} `animationName`. Name of the animation in the spritesheet (Optional: `false`)
    - {<Type type='boolean' />} `replaceGraphic`. Replace the event graphic with the animation. After the end of the animation, the original graphic is reapplied (Optional: `true`)
- **Return**: <Type type='void' />   
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
player.showAnimation('fire', 'default')
```

If you don't want to put an animation on top of the event but replace the event graphic with another one, set true as last parameter.
This is useful, if for example, you want to make an animated character (sword stroke when pressing a key)
When the animation is finished, the original graphic is displayed again

```ts
player.showAnimation('sword_stroke', 'default', true)
```


---
### Emit to client
- **Method**: `player.emit(key,value)`
- **Arguments**:
    - {<Type type='string' />} `key`.  (Optional: `false`)
    - {<Type type='any' />} `value`.  (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:


Emit data to clients with socket


---
### Listen to data from the client
- **Method**: `player.on(key,cb)`
- **Arguments**:
    - {<Type type='string' />} `key`.  (Optional: `false`)
    - {<Type type='function' />} `cb`.  (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:


Listen to the data (socket) sent by the client


---
### Play Sound
::: warning
Stability: 1 - Experimental
This feature is subject to change, and is gated by a command line flag.
It may change or be removed in future versions.
:::
    
- **Since**: 3.0.0-alpha.9
- **Method**: `player.playSound(soundId,allMap=false)`
- **Arguments**:
    - {<Type type='string' />} `soundId`. Sound identifier, defined on the client side (Optional: `false`)
    - {<Type type='boolean' />} `allMap`. Indicate if the sound is heard by the players on the card (Optional: `true`)
- **Return**: <Type type='void' />   
- **Usage**:


Allows to play a sound, heard only by the player or by the players of the map

Here is a sound, client side:

```ts
import { Sound } from '@rpgjs/client'
@Sound({
     id: 'town-music',
     sound: require('./sound/town.ogg')
})
export class TownMusic {}
```

Here is the call of the method, server side:

```ts
player.playSound('town-music')
```

If you want everyone to listen to the sound on the map:

```ts
player.playSound('town-music', true)
```


---
### Get/Set position
- **Property**: `position`
- **Type**: <Type type=' { x: number, y: number, z: number } ' />
- **Optional**: `false` 
- **Usage**:


Get/Set position x, y and z of player

z is the depth layer. By default, its value is 0. Collisions and overlays will be performed with other objects on the same z-position. 


---
### Set Sizes
- **Method**: `player.setSizes(key,value)`
- **Arguments**:
    - {<Type type=' { width: number, height: number, hitbox?: { width: number, height: number } } ' />} `obj`.  (Optional: `false`)
- **Return**: <Type type='void' />   
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
    - {<Type type='number' />} `width`.  (Optional: `false`)
    - {<Type type='number' />} `height`.  (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:


Define the hitbox of the player.

```ts
player.setHitbox({
     width: 20,
     height: 20
})
```


---
### Attach Shape
- **Since**: beta.3
- **Method**: `player.attachShape(parameters)`
- **Arguments**:
    - {<Type type=' { width: number, height: number, positioning?, name?, properties?: object } ' />} `obj`. - positioning: Indicate where the shape is placed.
- properties: An object in order to retrieve information when interacting with the shape
- name: The name of the shape (Optional: `false`)
- **Return**: <Type type='<a href="/classes/shape">RpgShape</a>' />   
- **Usage**:


Attach a shape to the player (and allow interaction with it)

```ts
import { ShapePositioning } from '@rpgjs/server'

player.attachShape({
     width: 100,
     height: 100,
     positioning: ShapePositioning.Center
})
```


---
### Get Shapes
- **Since**: beta.3
- **Method**: `player.getShapes()`
- **Return**: <Type type='<a href="/classes/shape">RpgShape</a>[]' />   
- **Usage**:


Returns all shapes assigned to this player


---
### Get In-Shapes
- **Since**: beta.3
- **Method**: `player.getInShapes()`
- **Return**: <Type type='<a href="/classes/shape">RpgShape</a>[]' />   
- **Usage**:


Retrieves all shapes where the player is located


---
### Get Direction
- **Method**: `player.getDirection()`
- **Return**: <Type type='string' />  right, up or down 
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
    - {<Type type='Direction' />} `direction`.  (Optional: `false`)
- **Return**: <Type type='boolean' />  direction has changed 
- **Usage**:


Changes the player's direction

```ts
import { Direction } from '@rpgjs/server'

player.changeDirection(Direction.Left)
```

