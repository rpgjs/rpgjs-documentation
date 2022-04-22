::: tip Summary
- [Add Map in world](#add-map-in-world)
- [Remove map of the world](#remove-map-of-the-world)
- [Retrieve information from the world](#retrieve-information-from-the-world)
- [Retrieves neighboring maps](#retrieves-neighboring-maps)
:::
---
### Add Map in world
- **Since**: 3.0.0-beta.8
- **Method**: `world.addMap(wordMapInfo,map)`
- **Arguments**:
    - {<Type type='object' />} `wordMapInfo`. Object file:
```ts
{
 fileName: string;
 height: number;
 width: number;
 x: number;
 y: number;
}
 ```
 `fileName` represents a file to the JSON file (TMX transformed) or directly the Tiled Map Editor object
 (Optional: `false`)
    - {<Type type='class of <a href="/classes/map.html">RpgMap</a>' />} `map`.  (Optional: `false`) 
- **Usage**:


Adding information from the map to the world

> Maximum maps in world: 500


---
### Remove map of the world
- **Since**: 3.0.0-beta.8
- **Method**: `world.removeMap(mapId)`
- **Arguments**:
    - {<Type type='string' />} `mapId`.  (Optional: `false`)
- **Return**: <Type type='boolean' />   
- **Usage**:


Remove map of the world

---
### Retrieve information from the world
- **Since**: 3.0.0-beta.8
- **Method**: `world.getMapInfo(id)`
- **Arguments**:
    - {<Type type='string' />} `id`. map id (Optional: `false`) 
- **Usage**:


Retrieve information from the world


---
### Retrieves neighboring maps
- **Since**: 3.0.0-beta.8
- **Method**: `world.getAdjacentMaps(map,search)`
- **Arguments**:
    - {<Type type=' <a href="/classes/map.html">RpgMap</a>' />} `map`. The source map. We want to find the neighboring maps of the source map (Optional: `false`)
    - {<Type type=' PositionBox | Direction | { x: number, y: number } ' />} `search`. Research method
 * PositionBox. An object of the following form:
 `{ minX: number, minY: number, maxX: number, maxY: number }`
 * Direction. Collect all the maps in the given direction (e.g. the maps at the top)
 * Point: { x: number, y: number } (Optional: `false`)
- **Example**: 
```ts
world.getAdjacentMaps(mymap, Direction.Up) // returns [class of RpgMap]
``` 
- **Usage**:


Retrieves neighboring maps according to positions or direction

