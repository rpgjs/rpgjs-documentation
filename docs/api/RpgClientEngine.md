::: tip Summary
- [renderer](#renderer)
- [socket](#socket)
- [globalConfig](#globalconfig)
- [controls](#controls)
- [objects](#objects)
- [tick](#tick)
- [Add Spritesheet](#add-spritesheet)
- [Add Sound](#add-sound)
- [Start Client Engine](#start-client-engine)
- [Next Frame](#next-frame)
- [Connect to server](#connect-to-server)
- [vueApp](#vueapp)
- [vueInstance](#vueinstance)
- [scene](#scene)
- [Connect to server](#connect-to-server)
:::
---
### renderer
- **Property**: `renderer`
- **Type**: <Type type='RpgRenderer' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
Get the rendering 


---
### socket
- **Property**: `socket`
- **Type**: <Type type='Socket' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
Get the socket


---
### globalConfig
- **Property**: `globalConfig`
- **Type**: <Type type='object' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
retrieve the global configurations assigned at the entry point


---
### controls
- **Property**: `controls`
- **Type**: <Type type=' <a href="/classes/keyboard.html">KeyboardControls</a>' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
Get the class managing the keyboard


---
### objects
- **Property**: `objects`
- **Type**: <Type type=' <a href="https://rxjs.dev/guide/observable.html">Observable</a>&lt; {
     [id: string]: {
         object: any,
         paramsChanged: any
     }
} &gt;' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:


Read objects synchronized with the server


---
### tick
- **Since**: 3.0.0-beta.5
- **Property**: `tick`
- **Type**: <Type type=' <a href="https://rxjs.dev/guide/observable.html">Observable</a>&lt;{ timestamp: number, deltaTime: number, frame: number }&gt;' />
- **Optional**: `false`
- **Read Only**
- **Example**: 

```ts
client.tick.subscribe(({ timestamp, deltaTime, frame }) => {

})
```
 
- **Usage**:

 
Listen to each frame


---
### Add Spritesheet
- **Since**: 3.0.0-beta.3
- **Method**: `addSpriteSheet(spritesheetClass|spritesheetClass[])`
- **Arguments**:
    - {<Type type=' Class|Class[] ' />} `spritesheetClass`.  (Optional: `false`)
    - {<Type type='string' />} `url`. Define the url of the resource (Optional: `false`)
    - {<Type type='string' />} `id`. Define a resource identifier (Optional: `false`)
- **Return**: <Type type='Class' />   
- **Usage**:


Adds Spritesheet classes


---
### Add Sound
- **Since**: 3.0.0-beta.3
- **Method**: `addSound(soundClass|soundClass[])`
- **Arguments**:
    - {<Type type=' Class|Class[] ' />} `soundClass`.  (Optional: `false`)
    - {<Type type='string' />} `url`. Define the url of the resource (Optional: `false`)
    - {<Type type='string' />} `id`. Define a resource identifier (Optional: `false`)
- **Return**: <Type type='Class' />   
- **Usage**:


Adds Sound classes


---
### Start Client Engine
- **Method**: `start()`
- **Return**: <Type type='Promise&lt; void &gt;' />   
- **Usage**:


Starts the client side and connects to the server


---
### Next Frame
- **Since**: 3.0.0-beta.5
- **Method**: `nextFrame()`
- **Arguments**:
    - {<Type type='number' />} `timestamp`. Indicate the timestamp of the frame (Optional: `false`) 
- **Usage**:


Display the next frame. Useful for unit tests


---
### Connect to server
- **Method**: `connection()`
- **Return**: <Type type='void' />   
- **Usage**:


Connect to the server


---
### vueApp
- **Property**: `vueApp`
- **Type**: <Type type='Vue' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
VueJS Application instance

[https://v3.vuejs.org/api/application-api.html](https://v3.vuejs.org/api/application-api.html)


---
### vueInstance
- **Property**: `vueInstance`
- **Type**: <Type type='Vue Instance' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
VueJS Parent component instance

[https://v3.vuejs.org/api/instance-properties.html](https://v3.vuejs.org/api/instance-properties.html)


---
### scene
- **Property**: `scene`
- **Type**: <Type type=' <a href="/classes/scene-map.html">RpgScene</a>' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
retrieves the current scene (SceneMap if you are on a map)


---
### Connect to server
- **Method**: `getScene()`
- **Return**: <Type type=' <a href="/classes/scene-map.html">RpgScene</a>' />   
- **Usage**:


retrieves the current scene (SceneMap if you are on a map)

