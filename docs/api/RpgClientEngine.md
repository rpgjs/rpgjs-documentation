::: tip Summary
- [renderer](#renderer)
- [socket](#socket)
- [globalConfig](#globalconfig)
- [controls](#controls)
- [Add Spritesheet](#add-spritesheet)
- [Add Sound](#add-sound)
- [Start Client Engine](#start-client-engine)
- [objects](#objects)
- [Connect to server](#connect-to-server)
- [vueApp](#vueapp)
- [vueInstance](#vueinstance)
- [scene](#scene)
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
### Add Spritesheet
- **Since**: beta.3
- **Method**: `addSpriteSheet(spritesheetClass`
- **Return**: <Type type='void' />   
- **Usage**:


Adds Spritesheet classes


---
### Add Sound
- **Since**: beta.3
- **Method**: `addSpriteSheet(soundClass`
- **Return**: <Type type='void' />   
- **Usage**:


Adds Sound classes


---
### Start Client Engine
- **Method**: `start()`
- **Return**: <Type type='Promise&lt; void &gt;' />   
- **Usage**:


Starts the client side and connects to the server


---
### objects
- **Property**: `objects`
- **Type**: <Type type=' <a href="https://rxjs.dev/guide/observable">Observable</a>&lt; {
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
- **Type**: <Type type=' <a href="/classes/scene-map">RpgScene</a>' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
retrieves the current scene (SceneMap if you are on a map)

