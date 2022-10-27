::: tip Summary
- [map id](#map-id)
- [Layers of map](#layers-of-map)
- [World X Position](#world-x-position)
- [World Y Position](#world-y-position)
- [Create Shape](#create-shape)
- [Delete Shape](#delete-shape)
- [Get Shapes](#get-shapes)
- [Get Shape by name](#get-shape-by-name)
- [Assign the map to a world](#assign-the-map-to-a-world)
- [Remove this map from the world](#remove-this-map-from-the-world)
- [Get attached World](#get-attached-world)
- [event list](#event-list)
- [Change Tile in map](#change-tile-in-map)
- [Create Dynamic Event](#create-dynamic-event)
- [Get Event](#get-event)
- [Remove Event](#remove-event)
- [Data of map](#data-of-map)
- [Width of the map in pixels](#width-of-the-map-in-pixels)
- [Height of the map in pixels](#height-of-the-map-in-pixels)
- [The depth of the map in pixels (this is the height of a tile ;))](#the-depth-of-the-map-in-pixels-(this-is-the-height-of-a-tile-;)))
- [Get Layer by name](#get-layer-by-name)
- [Get index of tile](#get-index-of-tile)
- [Get origin position of tile](#get-origin-position-of-tile)
- [Get tile by position](#get-tile-by-position)
- [Get tile by index](#get-tile-by-index)
:::
---
### map id
- **Property**: `id`
- **Type**: <Type type='string' />
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
### World X Position
- **Since**: 3.0.0-beta.8
- **Property**: `worldX`
- **Type**: <Type type='number' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
Retrieves the X position of the map in the world (0 if no world assigned)


---
### World Y Position
- **Since**: 3.0.0-beta.8
- **Property**: `worldY`
- **Type**: <Type type='number' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
Retrieves the Y position of the map in the world (0 if no world assigned)


---
### Create Shape
- **Since**: 3.0.0-beta.3
- **Method**: `map.createShape(obj)`
- **Arguments**:
    - {<Type type='object' />} `obj`.  (Optional: `false`)
- **Return**: <Type type=' <a href="/classes/shape.html">RpgShape</a>' />   
- **Usage**:


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


---
### Delete Shape
- **Method**: `map.removeShape(name)`
- **Arguments**:
    - {<Type type='string' />} `name`. Name of shape (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:


Delete a shape


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
### Assign the map to a world
- **Since**: 3.0.0-beta.8
- **Method**: `map.setInWorldMaps(name)`
- **Arguments**:
    - {<Type type=' <a href="/classes/world-maps.html">RpgWorldMaps</a>' />} `worldMap`. world maps (Optional: `false`) 
- **Usage**:


Assign the map to a world


---
### Remove this map from the world
- **Since**: 3.0.0-beta.8
- **Method**: `map.removeFromWorldMaps()`
- **Return**: <Type type='boolean | undefined' />   
- **Usage**:


Remove this map from the world

---
### Get attached World
- **Since**: 3.0.0-beta.8
- **Method**: `map.getInWorldMaps()` 
- **Usage**:


Recover the world attached to this map (`undefined` if no world attached)


---
### event list
- **Property**: `events`
- **Type**: <Type type=' { [eventId: string]: <a href="/classes/event.html">RpgEvent</a> } ' />
- **Optional**: `true` 
- **Usage**:

 

---
### Change Tile in map
- **Since**: 3.0.0-beta.4
- **Method**: `map.setTile(x,y,layer,tileInfo)`
- **Arguments**:
    - {<Type type='number' />} `x`. Position X (Optional: `false`)
    - {<Type type='number' />} `y`. Position Y (Optional: `false`)
    - {<Type type='string | ((layer: any) =&gt; boolean)' />} `layer`. Name of the layer where you want to put a tile. OYou can also put a function that will act as a filter. The first parameter is the layer and you return a boolean to indicate if you modify the tile of this layer or not (Optional: `false`)
    - {<Type type='object' />} `tileInfo`. Object with the following properties:
 - {number} gid: The tile number in tileset (from 1)
 - {object} properties Property of the tile. You own object. To set a collision, set the `collision:true` property (Optional: `false`)
- **Return**: <Type type='void' />  
- **Example**: 
```ts
map.setTile(15, 18, 'mylayer', { gid: 2 })
``` 
- **Usage**:


Edit a tile on the map. All players on the map will see the modified tile



---
### Create Dynamic Event
- **Since**: 3.0.0-beta.4
- **Method**: `map.createDynamicEvent(eventObj|eventObj[])`
- **Arguments**:
    - {<Type type=' { x: number, y: number, z?: number, event: eventClass } ' />} `eventsList`.  (Optional: `false`)
- **Return**: <Type type=' { [eventId: string]: <a href="/classes/event.html">RpgEvent</a> } ' />   
- **Usage**:


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


---
### Get Event
- **Since**: 3.0.0-beta.7
- **Method**: `map.getEvent(eventId)`
- **Arguments**:
    - {<Type type='string' />} `eventId`. Event Id (Optional: `false`)
- **Return**: <Type type=' <a href="/classes/event.html">RpgEvent</a> | undefined' />   
- **Usage**:


Get Event in current map

---
### Remove Event
- **Since**: 3.0.0-beta.4
- **Method**: `map.removeEvent(eventId)`
- **Arguments**:
    - {<Type type='string' />} `eventId`. Event Name (Optional: `false`)
- **Return**: <Type type='boolean' />   
- **Usage**:


Removes an event from the map. Returns false if the event is not found

---
### Data of map
- **Property**: `data`
- **Type**: <Type type='object' />
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
### Get index of tile
- **Method**: `map.getTileIndex(x,y)`
- **Arguments**:
    - {<Type type='number' />} `x`. Position X (Optional: `false`)
    - {<Type type='number' />} `x`. Position Y (Optional: `false`)
- **Return**: <Type type='number' />   
- **Usage**:


Get the tile index on the tileset


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

