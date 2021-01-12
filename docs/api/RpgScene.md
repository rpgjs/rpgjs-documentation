::: tip Summary
- [Set Inputs](#set-inputs)
- [Get Control](#get-control)
- [Apply Control](#apply-control)
- [Stop Inputs](#stop-inputs)
- [Listen Inputs](#listen-inputs)
- [Show Animation](#show-animation)
- [Get Sprite](#get-sprite)
- [Get Current Player](#get-current-player)
:::
---
### Set Inputs
- **Enum**: `string`

| Tag           | Description |
| ------------- |------------:|
| Control.Up | up |
| Control.Down | down |
| Control.Left | left |
| Control.Right | right |
| Control.Action | action |
| Control.Back | back |
- **Method**: `scene.setInputs(inputs)`
- **Arguments**:
    - {object} `inputs`.  (Optional: `false`) 
- **Usage**:


Assign custom inputs to the scene

The object is the following:

* the key of the object is the name of the control. Either it is existing controls (Up, Dow, Left, Right, Action, Back) or customized controls
* The value is an object representing control information:
     * repeat {boolean} The key can be held down to repeat the action. (false by default)
     * bind {string | string[]} To which key is linked the control
     * method {Function} Function to be triggered. If you do not set this property, the name of the control is sent directly to the server.

```ts 
import { RpgSceneMap, Control, Input } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
     onInit() {
         this.setInputs({
             [Control.Up]: {
                 repeat: true,
                 bind: Input.Up
             },
             [Control.Down]: {
                 repeat: true,
                 bind: Input.Down
             },
             [Control.Right]: {
                 repeat: true,
                 bind: Input.Right
             },
             [Control.Left]: {
                 repeat: true,
                 bind: Input.Left
             },
             [Control.Action]: {
                 bind: [Input.Space, Input.Enter]
             },
             [Control.Back]: {
                 bind: Input.Escape
             },

             // The myscustom1 control is sent to the server when the A key is pressed.
             mycustom1: {
                 bind: Input.A
             },

             // the myAction method is executed when the B key is pressed
             mycustom2: {
                 bind: Input.B,
                 method: this.myAction
             }
         })
     }
     myAction() {

     }
}
```

---
### Get Control
- **Method**: `scene.getControl(inputName)`
- **Arguments**:
    - {string} `inputName`.  (Optional: `false`)
- **Return**:  { actionName: string, options: any } | undefined    
- **Usage**:


From the name of the entry, we retrieve the control information

```ts 
import { RpgSceneMap, Input } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
     onLoad() {
         const control = this.getControl(Input.Enter)
         if (control) {
             console.log(control.actionName) // action
         }
     }
}
```

---
### Apply Control
- **Method**: `scene.applyControl(controlName,isDown)`
- **Arguments**:
    - {string} `controlName`.  (Optional: `false`)
    - {boolean} `isDown`.  (Optional: `true`) 
- **Usage**:


Triggers an input according to the name of the control

```ts 
import { RpgSceneMap, Control } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
     onLoad() {
         this.applyControl(Control.Action)
     }
}
```

You can put a second parameter or indicate on whether the key is pressed or released

```ts 
import { RpgSceneMap, Control } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
     onLoad() {
         this.applyControl(Control.Up, true) // keydown
         this.applyControl(Control.Up, false) // keyup
     }
}
```

---
### Stop Inputs
- **Method**: `scene.stopInputs()`
- **Return**: void   
- **Usage**:


Stop listening to the inputs. Pressing a key won't do anything


---
### Listen Inputs
- **Method**: `scene.listenInputs()`
- **Return**: void   
- **Usage**:


Listen to the inputs again


---
### Show Animation
- **Method**: `scene.showAnimation(object)`
- **Arguments**:
    - {object} `object`.  (Optional: `false`)
- **Return**: Animation   
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
import { RpgSceneMap } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
     onLoad() {
         const animation = this.showAnimation({
             graphic: 'my-spritesheet',
             animationName: 'my-anim'
         })
     }
}
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
    - {string} `id`.  (Optional: `false`)
- **Return**: [RpgSprite](/classes/sprite)   
- **Usage**:


Retrieve a sprite according to its identifier


---
### Get Current Player
- **Method**: `scene.getCurrentPlayer()`
- **Return**: [RpgSprite](/classes/sprite)   
- **Usage**:


Retrieve a sprite that the player controls

