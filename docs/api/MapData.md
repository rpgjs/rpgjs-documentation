::: tip Summary
- [id](#id)
- [file](#file)
- [name](#name)
- [events](#events)
- [sounds](#sounds)
:::
---
### id
- **Property**: `id`
- **Type**: string
- **Optional**: `false` 
- **Usage**:

 
Map identifier. Allows to go to the map (for example with player.changeMap())


---
### file
- **Property**: `file`
- **Type**: string
- **Optional**: `false` 
- **Usage**:

 
the path to the .tmx file (Tiled Map Editor)

Remember to use `require()` function

```ts
import { MapData, RpgMap } from '@rpgjs/server'

@MapData({
     id: 'town',
     file: require('./tmx/town.tmx')
})
class TownMap extends RpgMap { } 
``` 

---
### name
- **Property**: `name`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The name of the map.

---
### events
- **Property**: `events`
- **Type**: Array&lt;Class [RpgEvent](/classes/event)&gt; | { event: Class [RpgEvent](/classes/event), x: number, y: number }
- **Optional**: `true` 
- **Usage**:

 
Map events. This is an array containing `RpgEvent` classes. 
You can also give an object that will indicate the positions of the event on the map.

```ts
import { MapData, RpgMap, EventData, RpgEvent } from '@rpgjs/server'

@EventData({
     name: 'Ev-1'
})
class NpcEvent extends RpgEvent { }

@MapData({
     id: 'medieval',
     file: require('./tmx/town.tmx'),
     events: [NpcEvent]
})
class TownMap extends RpgMap {}
```

If the positions are not defined, the event will be placed on a Tiled Map Editor shape ([/guide/create-event.html#position-the-event-on-the-map](Guide)). Otherwise, it will be placed at {x:0, y:0 }

You can give positions:

```ts
events: [{ event: NpcEvent, x: 10, y: 30 }]
```


---
### sounds
- **Property**: `sounds`
- **Type**: Array&lt;string&gt;
- **Optional**: `true` 
- **Usage**:

 
The sounds that will be played when the map is open. Sounds must be defined on the client side. Then, put the name of the sound identifier

