::: tip Summary
- [valuesChange](#valueschange)
- [Show Animation](#show-animation)
- [Get Sprite](#get-sprite)
- [Get Current Player](#get-current-player)
:::
---
### valuesChange
- **Property**: `valuesChange`
- **Type**: <Type type=' <a href="https://rxjs.dev/guide/observable">Observable</a>&lt;{ data: object, partial: object }&gt;' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:


Listen to all the synchronized values of the scene with the server

```ts 
import { RpgClient, RpgModule, RpgSceneMap, RpgSprite } from '@rpgjs/client'

 @RpgModule<RpgClient>({ 
     scenes: {
         map: {
             onAfterLoading(scene: RpgSceneMap, sprite: RpgSprite) {
               scene.valuesChange.subscribe((obj) => {
                  console.log(obj.data, obj.partial)
               })
             }
         }
     }
 })
 export default class RpgClientModuleEngine {}
```

- `data` represents all the current data of the scene (`users`, `events` and others)
- `partial` represents only the data that has changed on the scene

> In the class, you can also use the onChanges hook



---
### Show Animation
- **Method**: `scene.showAnimation(object)`
- **Arguments**:
    - {<Type type='object' />} `object`.  (Optional: `false`)
- **Return**: <Type type='Animation' />   
- **Usage**:


Display an animation on the scene

The object is the following:
* `graphic`: Spritesheet id
* `animationName`: The name of the animation
* `attachTo`: Define a sprite. The animation will follow this sprite (optional)
* `x`: Position X (0 by default)
* `y`: Position Y (0 by default)
* `loop`: Display the animation in a loop (false by default)

```ts 
import { RpgClient, RpgModule, RpgSceneMap, RpgSprite } from '@rpgjs/client'


@RpgModule<RpgClient>({ 
     scenes: {
         map: {
             onAfterLoading(scene: RpgSceneMap, sprite: RpgSprite) {
               const animation = scene.showAnimation({
                  graphic: 'my-spritesheet',
                   animationName: 'my-anim'
               })
             }
         }
     }
 })
 export default class RpgClientModuleEngine {}
```

The return is an animation containing two methods:
* `play()`: Play the animation (Already the case when calling the method)
* `stop()`: Stop the animation

They have a hook:

`onFinish`: Triggered when the animation is finished 

```ts
animation.onFinish = () => {
     console.log('finish !')
}
```


---
### Get Sprite
- **Method**: `scene.getSprite(id)`
- **Arguments**:
    - {<Type type='string' />} `id`.  (Optional: `false`)
- **Return**: <Type type=' <a href="/classes/sprite">RpgSprite</a>' />   
- **Usage**:


Retrieve a sprite according to its identifier


---
### Get Current Player
- **Method**: `scene.getCurrentPlayer()`
- **Return**: <Type type=' <a href="/classes/sprite">RpgSprite</a>' />   
- **Usage**:


Retrieve a sprite that the player controls

