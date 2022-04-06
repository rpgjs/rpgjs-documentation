# AI ChangeLog

## Version 3.0.0-beta.7

- [Get Event](/api/Map.html): 
Get Event in current map
## Version 3.0.0-beta.5

- [View to GUI attached](/api/GuiManager.html):  
Display the GUI attached to the players

If you don't specify the players as parameters, it will display the GUI of the instance 
But you can specify which GUIs to display by specifying the players as the first parameter
- [Hide to GUI attached](/api/GuiManager.html):  
Hide the GUI attached to the players
- [Listen one-time to data from the client](/api/Player.html): 
Adds a one-time listener function for the event named eventName
- [Removes all listeners of the client](/api/Player.html): 
Removes all listeners of the specified eventName.
- [guiDisplay](/api/RpgSprite.html):  
Display/Hide the GUI attached to this sprite
- [width ](/api/Shape.html): 
Get/Set width- [height ](/api/Shape.html): 
Get/Set height- [tick](/api/RpgClientEngine.html):  
Listen to each frame
- [Next Frame](/api/RpgClientEngine.html): 
Display the next frame. Useful for unit tests

## Version 3.0.0-beta.4

- [Create Dynamic Event](/api/Player.html): 
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
- [Remove Event](/api/Player.html): 
Removes an event from the map (Scenario Mode). Returns false if the event is not found- [Get Collision of tiles](/api/Player.html): 

Recovers all the colliding tiles of the current player 
- [Get Collision of tiles](/api/RpgSpriteLogic.html): 

Recovers all the colliding tiles of the current player 
- [Get Collision of other players/events](/api/Player.html): 

Recovers all other players and events colliding with the current player's hitbox
- [Get Collision of other players/events](/api/RpgSpriteLogic.html): 

Recovers all other players and events colliding with the current player's hitbox
- [Get Tile](/api/Player.html): 
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
- [Get Tile](/api/RpgSpriteLogic.html): 
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
- [onMove](/api/RpgPlayerHooks.html): 
When the x, y positions change
- [Add in database](/api/RpgServerEngine.html): 
Adds data to the server's database (in RAM) for later use
- [sceneMap](/api/RpgServerEngine.html): 
Return the scene that manages the maps of the game- [Create a dynamic map](/api/SceneMap.html): 
Create a dynamic map
- [Change Tile in map](/api/Map.html): 
Edit a tile on the map. All players on the map will see the modified tile

- [Create Dynamic Event](/api/Map.html): 
Dynamically create an event in Shared mode

```ts
@EventData({
 name: 'EV-1'
})
class MyEvent extends RpgEvent {
 onAction() {
     console.log('ok')
 }
} 

map.createDynamicEvent({
     x: 100,
     y: 100,
     event: MyEvent
})
```

You can also put an array of objects to create several events at once
- [Remove Event](/api/Map.html): 
Removes an event from the map. Returns false if the event is not found- [logic](/api/RpgSprite.html):  
Retrieves the logic of the sprite
- [Listen mouse event](/api/RpgSceneMap.html): 
Listen to the events of the smile on the stage
- [onWindowResize](/api/RpgEngineHooks.html): 
Called when window is resized
- [onMove](/api/RpgSpriteHooks.html): 
When the x, y positions change

## Version 3.0.0-beta.3

- [Create Shape](/api/Map.html): 
Create a shape dynamically on the map

Object:
 - (number) x: Position X
 - (number) y: Position Y
 - (number) width: Width
 - (number) height: Height
 - (object) properties (optionnal): 
     - (number) z: Position Z
     - (hexadecimal) color: Color (shared with client)
     - (boolean) collision
     - You can your own properties
- [Attach Shape](/api/Player.html): 
Attach a shape to the player (and allow interaction with it)

```ts
import { ShapePositioning } from '@rpgjs/server'

player.attachShape({
     width: 100,
     height: 100,
     positioning: ShapePositioning.Center
})
```
- [Get Shapes](/api/Player.html): 
Returns all shapes assigned to this player
- [Get Shapes](/api/RpgSpriteLogic.html): 
Returns all shapes assigned to this player
- [Get In-Shapes](/api/Player.html): 
Retrieves all shapes where the player is located
- [Add Spritesheet](/api/RpgClientEngine.html): 
Adds Spritesheet classes
- [Add Sound](/api/RpgClientEngine.html): 
Adds Sound classes

## Version 3.0.0-alpha.9

- [Play Sound](/api/Player.html): 
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
