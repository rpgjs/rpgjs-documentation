::: tip Summary
- [selector](#selector)
- [selectorGui](#selectorgui)
- [spritesheets](#spritesheets)
- [gui](#gui)
- [sounds](#sounds)
- [spriteClass](#spriteclass)
- [canvas](#canvas)
:::
---
### selector
- **Property**: `selector`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The element selector that will display the canvas. By default, `#rpg`


---
### selectorGui
- **Property**: `selectorGui`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The selector that corresponds to the GUIs
If you didn't put a GUI element in the div, an element will be automatically created.


---
### spritesheets
- **Property**: `spritesheets`
- **Type**: Array&lt;Class&gt;
- **Optional**: `true` 
- **Usage**:

 
Array containing the list of spritesheets
An element contains a class with the `@Spritesheet` decorator

```ts
import { Spritesheet, Animation, Direction, RpgClient, RpgClientEngine } from '@rpgjs/client'

@Spritesheet({
     id: 'chest',
     image: require('./assets/chest.png'),
     // other options
})
class Chest  { }

@RpgClient({
     spritesheets: [
         Chest
     ]
})
class RPG extends RpgClientEngine {}
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
import { RpgClient, RpgClientEngine } from '@rpgjs/client'

const component = {
     name: 'my-gui',
     template: `
         <div>
             Component
         </div>
     `
}

@RpgClient({
     gui: [
         component
     ]
})
class RPG extends RpgClientEngine {}
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
import { Sound } from '@rpgjs/client'

@Sound({
     sounds: {
         town: require('./assets/Town_Theme.ogg')
     }
})
class Sounds {}

@RpgClient({
     sounds: [ Sounds ]
})
class RPG extends RpgClientEngine {}
```


---
### spriteClass
- **Property**: `spriteClass`
- **Type**: RpgClass&lt;[RpgSprite](/classes/sprite)&gt;
- **Optional**: `true` 
- **Usage**:

 
Give the `RpgSprite` class. A Sprite represents a player or an event

```ts
import { RpgPlayer, RpgServer, RpgServerEngine } from '@rpgjs/server'

class Sprite extends RpgSprite {
     onInit() {
         console.log('sprite is initialized')
     }
}

@RpgClient({
     spriteClass: Sprite
})
class RPG extends RpgClientEngine { } 
``` 


---
### canvas
- **Property**: `canvas`
- **Type**: object
- **Optional**: `true` 
- **Usage**:

 
Canvas Options

* {boolean} [options.transparent=false] - If the render view is transparent, default false
* {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
  resolutions other than 1
* {boolean} [options.antialias=false] - sets antialias
* {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
 resolution of the renderer retina would be 2.
* {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
 enable this if you need to call toDataUrl on the webgl context.
* {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     not before the new render pass.
* {number} [options.backgroundColor=0x000000] - The background color of the rendered area
 (shown if not transparent).

