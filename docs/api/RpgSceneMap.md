::: tip Summary
- [Data of map](#data-of-map)
- [Width of a tile](#width-of-a-tile)
- [Height of a tile](#height-of-a-tile)
- [Layers of map](#layers-of-map)
- [Width of the map in pixels](#width-of-the-map-in-pixels)
- [Height of the map in pixels](#height-of-the-map-in-pixels)
- [The depth of the map in pixels (this is the height of a tile ;))](#the-depth-of-the-map-in-pixels-(this-is-the-height-of-a-tile-;)))
- [Get Layer by name](#get-layer-by-name)
- [Get Shapes](#get-shapes)
- [Get Shape by name](#get-shape-by-name)
- [Get index of tile](#get-index-of-tile)
- [Get tile by index](#get-tile-by-index)
- [Get origin position of tile](#get-origin-position-of-tile)
- [Get tile by position](#get-tile-by-position)
- [tilemap](#tilemap)
- [viewport](#viewport)
- [Listen mouse event](#listen-mouse-event)
:::
---
### Data of map
- **Property**: `data`
- **Type**: <Type type='object' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### Width of a tile
- **Property**: `tileWidth`
- **Type**: <Type type='number' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### Height of a tile
- **Property**: `tileHeight`
- **Type**: <Type type='number' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### Layers of map
- **Property**: `layers`
- **Type**: <Type type='object[]' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### Width of the map in pixels
- **Property**: `widthPx`
- **Type**: <Type type='number' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### Height of the map in pixels
- **Property**: `heightPx`
- **Type**: <Type type='number' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 

---
### The depth of the map in pixels (this is the height of a tile ;))
- **Property**: `map.zTileHeight`
- **Type**: <Type type='number' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 

---
### Get Layer by name
- **Method**: `map.getLayerByName(name)`
- **Arguments**:
    - {<Type type='string' />} `name`. layer name (Optional: `false`)
- **Return**: <Type type='LayerInfo | undefined' />  
- **Example**: 

```ts
 const tiles = map.getLayerByName(0, 0)
 ``` 
- **Usage**:


Find a layer by name. Returns `undefined` is the layer is not found


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
### Get index of tile
- **Method**: `map.getTileIndex(x,y)`
- **Arguments**:
    - {<Type type='number' />} `x`. Position X (Optional: `false`)
    - {<Type type='number' />} `x`. Position Y (Optional: `false`)
- **Return**: <Type type='number' />   
- **Usage**:


Get the tile index on the tileset


---
### Get tile by index
- **Method**: `map.getTileByIndex(tileIndex)`
- **Arguments**:
    - {<Type type='number' />} `tileIndex`. tile index (Optional: `false`)
- **Return**: <Type type='TileInfo' />  
- **Example**: 

```ts
 const index = map.getTileIndex(0, 0)
 const tiles = map.getTileByIndex(index)
 ``` 
- **Usage**:


Retrieves tiles according to its index


---
### Get origin position of tile
- **Method**: `map.getTileOriginPosition(x,y)`
- **Arguments**:
    - {<Type type='number' />} `x`. Position X (Optional: `false`)
    - {<Type type='number' />} `x`. Position Y (Optional: `false`)
- **Return**: <Type type=' {x: number, y: number }' />  
- **Example**: 

```ts
 // If the size of a tile is 32x32px
 const position = map.getTileOriginPosition(35, 12)
 console.log(position) // { x: 32, y: 0 }
 ``` 
- **Usage**:


Find the point of origin (top left) of a tile. Of course, its position depends on the size of the tile


---
### Get tile by position
- **Method**: `map.getTileByPosition(x,y)`
- **Arguments**:
    - {<Type type='number' />} `x`. Position X (Optional: `false`)
    - {<Type type='number' />} `x`. Position Y (Optional: `false`)
- **Return**: <Type type='TileInfo' />  
- **Example**: 

```ts
 const tiles = map.getTileByPosition(0, 0)
 ``` 
- **Usage**:


Recover tiles according to a position


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

