::: tip Summary
- [Layers of map](#layers-of-map)
- [Get Shapes](#get-shapes)
- [Get Shape by name](#get-shape-by-name)
- [tilemap](#tilemap)
- [viewport](#viewport)
- [Listen mouse event](#listen-mouse-event)
:::
---
### Layers of map
- **Property**: `layers`
- **Type**: <Type type='object[]' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### Get Shapes
- **Method**: `map.getShapes()`
- **Return**: <Type type=' <a href="/classes/shape.html">RpgShape</a>[]' />   
- **Usage**:


Return all shapes on the map


---
### Get Shape by name
- **Method**: `map.getShape(name)`
- **Arguments**:
    - {<Type type='string' />} `name`. Name of shape (Optional: `false`)
- **Return**: <Type type=' <a href="/classes/shape.html">RpgShape</a>[] | undefined' />   
- **Usage**:


Returns a shape by its name. Returns undefined is nothing is found


---
### tilemap
- **Property**: `tilemap`
- **Type**: <Type type=' <a href="https://pixijs.download/dev/docs/PIXI.Container.html">PIXI.Container</a>' />
- **Optional**: `true` 
- **Usage**:

 
Get the tilemap


---
### viewport
- **Property**: `viewport`
- **Type**: <Type type=' <a href="https://github.com/davidfig/pixi-viewport">PIXI.Viewport</a>' />
- **Optional**: `false` 
- **Usage**:

 
The viewport of the map

It automatically follows the sprite representing the player but you can attach it to something else

> Do not change the size of the viewport


---
### Listen mouse event
- **Since**: 3.0.0-beta.4
- **Method**: `on(eventName,callback)`
- **Arguments**:
    - {<Type type='string' />} `eventName`. Name of the event (see PIXI documentation). Name often used in the codes
- click
- mousedown
- mouseup
- mousemove
- pointerdown
- pointermove
- pointerup
- (etc...) (Optional: `false`)
    - {<Type type='(position: { x: number, y: number }, ev?: PIXI.InteractionEvent ) =&gt; any' />} `callback`.  (Optional: `false`)
- **Return**: <Type type='void' />  
- **Example**: 
```ts
sceneMap.on('pointerdown', (position) => {
     console.log(position)
})
``` 
- **Usage**:


Listen to the events of the smile on the stage

