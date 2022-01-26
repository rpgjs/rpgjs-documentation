::: tip Summary
- [imports](#imports)
- [engine](#engine)
- [player](#player)
- [database](#database)
- [maps](#maps)
- [damageFormulas](#damageformulas)
:::
---
### imports
- **Property**: `imports`
- **Type**: <Type type=' { client: null | Function, server: null | Function }[]' />
- **Optional**: `true` 
- **Usage**:


Adding sub-modules


---
### engine
- **Property**: `engine`
- **Type**: <Type type=' <a href="/classes/server-engine">RpgServerEngine</a>Hooks' />
- **Optional**: `true` 
- **Usage**:


Object containing the hooks concerning the engine

```ts
import { RpgServerEngine, RpgServerEngineHooks, RpgModule, RpgClient } from '@rpgjs/server'

const engine: RpgEngineHooks = {
     onStart(server: RpgServerEngine) {
         console.log('server is started')
     }
}

@RpgModule<RpgServer>({
     engine
})
class RpgServerModule {}
```


---
### player
- **Property**: `player`
- **Type**: <Type type='RpgClassPlayer&lt <a href="/commands/common.html">RpgPlayer</a>&gt;' />
- **Optional**: `true` 
- **Usage**:

 
Give the `player` object hooks. Each time a player connects, an instance of `RpgPlayer` is created.

```ts
import { RpgPlayer, RpgServer, RpgPlayerHooks, RpgModule } from '@rpgjs/server'

const player: RpgPlayerHooks = {
     onConnected(player: RpgPlayer) {
         
     }
}

@RpgModule<RpgServer>({
     player
})
class RpgServerEngine { } 
``` 


---
### database
- **Property**: `database`
- **Type**: <Type type=' { [dataName]: data } ' />
- **Optional**: `true` 
- **Usage**:

 
References all data in the server. it is mainly used to retrieve data according to their identifier

```ts
import { RpgServer, RpgModule } from '@rpgjs/server'
import { Potion } from 'my-database/items/potion'

@RpgModule<RpgServer>({
     database: {
         Potion
     }
})
class RpgServerEngine { } 
``` 


---
### maps
- **Property**: `maps`
- **Type**: <Type type='RpgClassMap&lt <a href="/classes/map">RpgMap</a>&gt;[]' />
- **Optional**: `true` 
- **Usage**:

 
Array of all maps. Each element is an `RpgMap` class

```ts
import { RpgMap, MapData, RpgServer, RpgModule } from '@rpgjs/server'

@MapData({
     id: 'town',
     file: require('./tmx/mymap.tmx'),
     name: 'Town'
})
class TownMap extends RpgMap { }

@RpgModule<RpgServer>({
     maps: [
         TownMap
     ]
})
class RpgServerEngine { } 
``` 

It is possible to just give the object as well

```ts
@RpgModule<RpgServer>({
     maps: [
         {
             id: 'town',
             file: require('./tmx/mymap.tmx'),
             name: 'Town'
         }
     ]
})
class RpgServerEngine { } 
``` 



---
### damageFormulas
- **Property**: `damageFormulas`
- **Type**: <Type type='object' />
- **Optional**: `false` 
- **Usage**:

 
Combat formula used in the method player.applyDamage(). There are already formulas in the RPGJS engine but you can customize them
 
```ts
damageFormulas: {
     damageSkill: (a, b, skill) => number,
     damagePhysic: (a, b) => number,

     // damage: the damages calculated from the previous formulas
     damageCritical: (damage, a, b) => number
     coefficientElementsa : (a, b, bDef) => number
}
```

`a` represents the attacker's parameters
`b` represents the defender's parameters

Example:

```ts
import { RpgModule, RpgServer, Presets } from '@rpgjs/server'

const { ATK, PDEF } = Presets

@RpgModule<RpgServer>({
     damageFormulas: {
         damagePhysic(a, b) {
             let damage = a[ATK] - b[PDEF]
             if (damage < 0) damage = 0
             return damage
         }
     }
})
class RpgServerEngine { } 
```
