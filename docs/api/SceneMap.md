::: tip Summary
- [Create a dynamic map](#create-a-dynamic-map)
:::
---
### Create a dynamic map
- **Since**: 3.beta-4
- **Method**: `sceneMap.createDynamicMap(mapData)`
- **Arguments**:
    - {<Type type='object | <a href="/classes/map">RpgMap</a>' />} `mapData`. The same property as [@MapData decorator](https://docs.rpgjs.dev/classes/map.html#mapdata-decorator) (Optional: `false`)
- **Return**: <Type type='void' />  
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
 
- **Usage**:


Create a dynamic map

