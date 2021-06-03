::: tip Summary
- [id](#id)
- [file](#file)
- [name](#name)
- [events](#events)
- [sounds](#sounds)
- [syncSchema](#syncschema)
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

So, it is possible to play several sounds (in loop or not) on the card. You can put a background music (BGM) and a background noise (BGS) for example

 ```ts
sounds: ['my-bgm', 'my-bgs']
```

And client side:

```ts
import { Sound } from '@rpgjs/client'

@Sound({
     sounds: {
         'my-bgm': require('./assets/bgm.ogg'),
         'my-bgs': require('./assets/bgs.ogg')
     },
     loop: true
})
export class Sounds {}
```

See [https://docs.rpgjs.dev/classes/sound.html#properties](RpgSound Decorator)


---
### syncSchema
- **Property**: `syncSchema`
- **Type**: object
- **Optional**: `true` 
- **Usage**:

 
Specify which properties will be synchronized with the client. On the client side, you can retrieve the values synchronized with the valueChanges property on the scene

You must create the schema:

```ts
import { MapData, RpgMap } from '@rpgjs/server'

@MapData({
     id: 'medieval',
     file: require('./tmx/town.tmx'),
     syncSchema: {
         count: Number
     }
})
export class TownMap extends RpgMap {
     count: number = 0

     onEnter() {
         this.count++
     }

     onLeave() {
         this.count--
     }
}

```

If you want to change the scheme of players and events, consider overwriting the existing scheme

 ```ts
import { MapData, RpgMap, RpgPlayer } from '@rpgjs/server'


export class Player extends RpgPlayer {
   customProp: string = 'test'
}

@MapData({
     id: 'medieval',
     file: require('./tmx/town.tmx'),
     syncSchema: {
         users: [
             {
                 customProp: String,
                 ...RpgPlayer.schemas
             }
         ]
     }
})
export class TownMap extends RpgMap {}
```

The properties are called `users` and `events`. Their scheme is identical and defined in `RpgPlayer.schemas`. To write schematics, refer to the [documentation of the @rpgjs/sync-server](https://github.com/RSamaium/RPG-JS/tree/v3/packages/sync-server#define-schema) module

