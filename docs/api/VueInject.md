::: tip Summary
- [rpgScene](#rpgscene)
- [rpgStage](#rpgstage)
- [rpgObjects](#rpgobjects)
- [rpgCurrentPlayer](#rpgcurrentplayer)
- [rpgGuiClose](#rpgguiclose)
- [rpgGuiInteraction](#rpgguiinteraction)
- [rpgKeypress](#rpgkeypress)
- [rpgSocket](#rpgsocket)
- [rpgGui](#rpggui)
- [rpgSound](#rpgsound)
:::
---
### rpgScene
- **Property**: `rpgScene`
- **Type**: Function returns [RpgScene](/classes/scene-map)
- **Optional**: `true` 
- **Usage**:

 
Recovery of the current scene

```js
export default {
     inject: ['rpgScene'],
     mounted() {
         const scene = this.rpgScene()
         scene.stopInputs()
     }
}
``` 


---
### rpgStage
- **Property**: `rpgStage`
- **Type**: [PIXI.Container](https://pixijs.download/dev/docs/PIXI.Container.html)
- **Optional**: `true` 
- **Usage**:

 
Retrieve the main container of the game

```js
export default {
     inject: ['rpgStage'],
     mounted() {
         const blur = new PIXI.filters.BlurFilter()
        this.rpgStage.filters = [blur]
     }
}
``` 


---
### rpgObjects
- **Property**: `rpgObjects`
- **Type**: [Observable](https://rxjs.dev/guide/observable)&lt;{ [objectId]: { object: object, paramsChanged: object } }&gt;
- **Optional**: `true` 
- **Usage**:

 
Listen to all the objects present in the room (events and players)

```js
export default {
     inject: ['rpgObjects'],
     mounted() {
         this.obs = this.rpgObjects.subscribe((objects) => {
             for (let id in objects) {
                 const obj = objects[id]
                 console.log(obj.object, obj.paramsChanged)
             }
         })
     },
     unmounted() {
         this.obs.unsubscribe()
     }
}
``` 

> remember to unsubscribe for memory leaks

It is an observable that returns an object: 

* the key is the object identifier
* The value is an object comprising:
     * `object`: The entire object
     * `paramsChanged`: Only the representation of the properties that have been changed on this object


---
### rpgCurrentPlayer
- **Property**: `rpgCurrentPlayer`
- **Type**: [Observable](https://rxjs.dev/guide/observable)&lt;{ object: object, paramsChanged: object }&gt;
- **Optional**: `true` 
- **Usage**:

 
Recovers and listens to the current player

```js
export default {
     inject: ['rpgCurrentPlayer'],
     mounted() {
         this.obs = this.rpgCurrentPlayer.subscribe((obj) => {
             console.log(obj.object, obj.paramsChanged)
         })
     },
     unmounted() {
         this.obs.unsubscribe()
     }
}
``` 

* `object`: The whole player
* `paramsChanged`: Only the representation of the properties that have been changed on this player


---
### rpgGuiClose
- **Property**: `rpgGuiClose`
- **Type**: Function(name, data)
- **Optional**: `true` 
- **Usage**:

 
Tell the server to close the GUI. 

It is a function with 2 parameters:
* `name`: The name of the component
* `data`: The data you want to pass to the server

```js
export default {
     inject: ['rpgGuiClose'],
     methods: {
         close() {
             this.rpgGuiClose('gui-name', {
                 amount: 1000
             })
         }
     }
}
``` 


---
### rpgGuiInteraction
- **Property**: `rpgGuiInteraction`
- **Type**: Function(guiId, name, data = {})
- **Optional**: `true` 
- **Usage**:

 
Perform an interaction with the open GUI

It is a function with 2 parameters:
* `guiId`: The name of the component/Gui
* `name`: The name of the interaction (defined on the server side)
* `data`: Data to be sent

```js
export default {
     inject: ['rpgGuiInteraction'],
     methods: {
         changeGold() {
             this.rpgGuiInteraction('gui-name', 'change-gold', {
                 amount: 100
             })
         }
     }
}
``` 


---
### rpgKeypress
- **Property**: `rpgKeypress`
- **Type**: [Observable](https://rxjs.dev/guide/observable)&lt;{ inputName: string, control: { actionName: string, options: any } }&gt;
- **Optional**: `true` 
- **Usage**:

 
Listen to the keys that are pressed on the keyboard

```js
export default {
     inject: ['rpgKeypress'],
     mounted() {
         this.obs = this.rpgKeypress.subscribe(({ inputName, control }) => {
             console.log(inputName) // "escape"
             console.log(control.actionName) // "back"
         })
     },
     unmounted() {
         this.obs.unsubscribe()
     }
}
``` 

* `object`: The whole player
* `paramsChanged`: Only the representation of the properties that have been changed on this player


---
### rpgSocket
- **Property**: `rpgSocket`
- **Type**: Function returns [RpgScene](/classes/scene-map)
- **Optional**: `true` 
- **Usage**:

 
Recovers the socket.

```js
export default {
     inject: ['rpgSocket'],
     mounted() {
         const socket = this.rpgSocket()
         socket.emit('foo', 'bar')
     }
}
``` 


---
### rpgGui
- **Property**: `rpgGui`
- **Type**: [RpgGui](/classes/gui)
- **Optional**: `true` 
- **Usage**:

 
The RpgGui object to control GUIs

```js
export default {
     inject: ['rpgGui'],
     mounted() {
        const guis = this.rpgGui.getAll()
     }
}
``` 


---
### rpgSound
- **Property**: `rpgSound`
- **Type**: Rpg[Sound](/classes/sound)
- **Optional**: `true` 
- **Usage**:

 
Equivalent to RpgSound

```js
export default {
     inject: ['rpgSound'],
     mounted() {
        this.rpgSound.get('my-sound-id').play()
     }
}
``` 

