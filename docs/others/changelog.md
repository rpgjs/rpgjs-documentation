# AI ChangeLog

## Version 3.0.2

- [maxFps](/api/RpgClientEntryPoint.html):  
The maximum number of fps for the rendering
- [serverFps](/api/RpgClientEntryPoint.html):  
Put the number of FPS that the server processes. It allows to synchronize the client rendering with the server. The default value is 60

## Version 3.0.0-beta.9

- [props](/api/RpgPlayerHooks.html): 
 Set custom properties on the player. Several interests:
1. The property is shared with the client
2. If you save with `player.save()`, the property will be saved to be reloaded later
3. If you use horizontal scaling, the property will be kept in memory if the player changes the map and this map is on another server

Example:

```ts
import { RpgPlayerHooks } from '@rpgjs/server'

declare module '@rpgjs/server' {
 export interface RpgPlayer {
     nbWood: number
 }
}

export const player: RpgPlayerHooks = {
 props: {
     nbWood: Number
 }
}
```

This is a simple example. Let's say that the player can have a number of harvested woods, then 
1. you must specify the type for Typescript
2. Add the property in props

You can also set up with this object:

```
 {
     $default: <any> (undefined by default), 
     $syncWithClient: <boolean> (true by default),
     $permanent: <boolean> (true by default)
 }
 ```

- Indicate if the property should be shared with the client

Example:

```ts
export const player: RpgPlayerHooks = {
 props: {
     secretProp: {
         $syncWithClient: false
     }
 }
}
```

- Indicate if the property should be registered in a database. If the data is just temporary to use on the current map:

```ts
export const player: RpgPlayerHooks = {
 props: {
     tmpProp: {
         $permanent: false
     }
 }
}
```

## Version 3.0.0-beta.8

- [World X Position](/api/Map.html):  
Retrieves the X position of the map in the world (0 if no world assigned)
- [World Y Position](/api/Map.html):  
Retrieves the Y position of the map in the world (0 if no world assigned)
- [Assign the map to a world](/api/Map.html): 
Assign the map to a world
- [Remove this map from the world](/api/Map.html): 
Remove this map from the world- [Get attached World](/api/Map.html): 
Recover the world attached to this map (`undefined` if no world attached)
- [Add Map in world](/api/RpgWorldMaps.html): 
Adding information from the map to the world

> Maximum maps in world: 500
- [Remove map of the world](/api/RpgWorldMaps.html): 
Remove map of the world- [Retrieve information from the world](/api/RpgWorldMaps.html): 
Retrieve information from the world
- [Retrieves neighboring maps](/api/RpgWorldMaps.html): 
Retrieves neighboring maps according to positions or direction
- [canChangeMap](/api/RpgPlayerHooks.html): 
Allow or not the player to switch maps. `nexMap` parameter is the retrieved RpgMap class and not the instance
- [worldMaps](/api/RpgServer.html): 
Loads the content of a `.world` file from Tiled Map Editor into the map scene

> Note, that if the map already exists (i.e. you have already defined an RpgMap), the world will retrieve the already existing map. Otherwise it will create a new map
- [Create worlds dynamically](/api/SceneMap.html): 
Loads the content of a `.world` file from Tiled Map Editor into the map scene

> Note, that if the map already exists (i.e. you have already defined an RpgMap), the world will retrieve the already existing map. Otherwise it will create a new map
- [Recover a world](/api/SceneMap.html): 
Recover a world
- [Delete a world](/api/SceneMap.html): 
Delete a world

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

Since version 3.0.0-beta.8, you can just pass the path to the file. The identifier will then be the name of the file
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
Removes an event from the map. Returns false if the event is not found- [Listen mouse event](/api/RpgSceneMap.html): 
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
