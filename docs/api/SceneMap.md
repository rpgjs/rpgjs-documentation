::: tip Summary
- [Create worlds dynamically](#create-worlds-dynamically)
- [Recover a world](#recover-a-world)
- [Delete a world](#delete-a-world)
- [Create a dynamic map](#create-a-dynamic-map)
:::
---
### Create worlds dynamically
- **Since**: 3.0.0-beta.8
- **Method**: `sceneMap.createDynamicWorldMaps(world)`
- **Arguments**:
    - {<Type type='object' />} `world`. object is 
```ts
{
 id?: string
 maps: {
     id?: string
     properties?: object
     fileName: string;
    height: number;
    width: number;
    x: number;
    y: number;
 }[],
onlyShowAdjacentMaps: boolean, // only for Tiled Map Editor
type: 'world' // only for Tiled Map Editor
}
```
 (Optional: `false`) 
- **Usage**:


Loads the content of a `.world` file from Tiled Map Editor into the map scene

> Note, that if the map already exists (i.e. you have already defined an RpgMap), the world will retrieve the already existing map. Otherwise it will create a new map


---
### Recover a world
- **Since**: 3.0.0-beta.8
- **Method**: `sceneMap.getWorldMaps(id)`
- **Arguments**:
    - {<Type type='string' />} `id`. world id  (Optional: `false`) 
- **Usage**:


Recover a world


---
### Delete a world
- **Since**: 3.0.0-beta.8
- **Method**: `sceneMap.deleteWorldMaps(id)`
- **Arguments**:
    - {<Type type='string' />} `id`. world id  (Optional: `false`) 
- **Usage**:


Delete a world


---
### Create a dynamic map
- **Since**: 3.0.0-beta.4
- **Method**: `sceneMap.createDynamicMap(mapData)`
- **Arguments**:
    - {<Type type='object | <a href="/classes/map.html">RpgMap</a> | string' />} `mapData`. The same property as [@MapData decorator](https://docs.rpgjs.dev/classes/map.html#mapdata-decorator) (Optional: `false`)
- **Return**: <Type type=' <a href="/classes/map.html">RpgMap</a>' />  
- **Example**: 
```ts
sceneMap.createDynamicMap({
     id: 'myid',
     file: require('./tmx/mymap.tmx')
})
```

And later, on the player:

```ts
player.changeMap('myid')
```

--- 

since beta.8

```ts
sceneMap.createDynamicMap(require('./tmx/mymap.tmx')) // id is "mymap"
```
 
- **Usage**:


Create a dynamic map

Since version 3.0.0-beta.8, you can just pass the path to the file. The identifier will then be the name of the file

