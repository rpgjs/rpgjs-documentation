::: tip Summary
- [imports](#imports)
- [engine](#engine)
- [spritesheets](#spritesheets)
- [gui](#gui)
- [sounds](#sounds)
- [sprite](#sprite)
- [scenes](#scenes)
:::
---
### imports
- **Property**: `imports`
- **Type**:  { client: null | Function, server: null | Function }[]
- **Optional**: `true` 
- **Usage**:


Adding sub-modules


---
### engine
- **Property**: `engine`
- **Type**: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine)Hooks
- **Optional**: `true` 
- **Usage**:


Object containing the hooks concerning the engine

```ts
import { RpgClientEngine, RpgClientEngineHooks, RpgModule, RpgClient } from '@rpgjs/client'

const engine: RpgClientEngineHooks = {
     onConnected(engine: RpgClientEngine) {
         console.log('client is connected')
     }
}

@RpgModule<RpgClient>({
     engine
})
class RpgClientModule {}
```


---
### spritesheets
- **Property**: `spritesheets`
- **Type**: Array&lt;Class&gt;
- **Optional**: `true` 
- **Usage**:

 
Array containing the list of spritesheets
An element contains a class with the `@Spritesheet` decorator

```ts
import { Spritesheet, Animation, Direction, RpgClient, RpgModule } from '@rpgjs/client'

@Spritesheet({
     id: 'chest',
     image: require('./assets/chest.png'),
     // other options
})
class Chest  { }

@RpgModule<RpgClient>({
     spritesheets: [
         Chest
     ]
})
class RpgClientEngine {}
```

[Guide: Create Sprite](/guide/create-sprite.html)


---
### gui
- **Property**: `gui`
- **Type**: Array&lt;Component of VueJS&gt;
- **Optional**: `true` 
- **Usage**:

 
Array containing the list of VueJS components

```ts
import { RpgClient, RpgModule } from '@rpgjs/client'

const component = {
     name: 'my-gui',
     template: `
         <div>
             Component
         </div>
     `
}

@RpgModule<RpgClient>({
     gui: [
         component
     ]
})
class RpgClientEngine {}
```

[Guide: Create GUI](/guide/create-gui.html)


---
### sounds
- **Property**: `sounds`
- **Type**: Array&lt;Class&gt;
- **Optional**: `true` 
- **Usage**:

 
Array containing the list of sounds
An element contains a class with the `@Sound` decorator

```ts
import { Sound, RpgModule, RpgClient } from '@rpgjs/client'

@Sound({
     sounds: {
         town: require('./assets/Town_Theme.ogg')
     }
})
class Sounds {}

@RpgModule<RpgClient>({
     sounds: [ Sounds ]
})
class RpgClientEngine {}
```


---
### sprite
- **Property**: `sprite`
- **Type**: [RpgSprite](/classes/sprite)Hooks
- **Optional**: `true` 
- **Usage**:

 
Give the `RpgSprite` class. A Sprite represents a player or an event

```ts
import { RpgSprite, RpgSpriteHooks, RpgClient, RpgModule } from '@rpgjs/client'

export const sprite: RpgSpriteHooks = {
   onInit(sprite: RpgSprite) {}
}

@RpgModule<RpgClient>({
     sprite
})
class RpgClientEngine {}
``` 


---
### scenes
- **Property**: `scenes`
- **Type**:  [sceneName: string]: [[RpgScene](/classes/scene-map)Map](/classes/scene-map)Hooks 
- **Optional**: `true` 
- **Usage**:

 
Reference the scenes of the game. Here you can put your own class that inherits RpgSceneMap

```ts
import { RpgSceneMapHooks, RpgClient, RpgModule } from '@rpgjs/client'

export const sceneMap: RpgSceneMapHooks = {
    
}

@RpgModule<RpgClient>({
     scenes: {
         // If you put the RpgSceneMap scene, Thhe key is called mandatory `map`
         map: sceneMap
     }
})
class RpgClientEngine {}
``` 

