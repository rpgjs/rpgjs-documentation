::: tip Summary
- [plugins](#plugins)
- [playerClass](#playerclass)
- [database](#database)
- [maps](#maps)
- [basePath](#basepath)
- [damageFormulas](#damageformulas)
:::
---
### plugins
::: warning
The realization of this property or method has not been completed.
:::

- **Property**: `plugins`
- **Type**:  { client: null | Function, server: null | Function }[]
- **Optional**: `true` 
- **Usage**:


Add server-side plugins


---
### playerClass
- **Property**: `playerClass`
- **Type**: RpgClassPlayer&lt;[RpgPlayer](/classes/player)&gt;
- **Optional**: `true` 
- **Usage**:

 
Give the `RpgPlayer` class. Each time a player connects, an instance of `RpgPlayer` is created.

```ts
import { RpgPlayer, RpgServer, RpgServerEngine } from '@rpgjs/server'

class Player extends RpgPlayer {
     onConnected() {
         console.log('connected')
     }
}

@RpgServer({
     basePath: __dirname,
     playerClass: Player
})
class RPG extends RpgServerEngine { } 
``` 


---
### database
- **Property**: `database`
- **Type**:  { [dataName]: data } 
- **Optional**: `true` 
- **Usage**:

 
References all data in the server. it is mainly used to retrieve data according to their identifier

```ts
import { RpgServer, RpgServerEngine } from '@rpgjs/server'
import { Potion } from 'my-database/items/potion'

@RpgServer({
     basePath: __dirname,
     database: {
         Potion
     }
})
class RPG extends RpgServerEngine { } 
``` 


---
### maps
- **Property**: `maps`
- **Type**: RpgClassMap&lt;[RpgMap](/classes/map)&gt;[]
- **Optional**: `true` 
- **Usage**:

 
Array of all maps. Each element is an `RpgMap` class

```ts
import { RpgMap, MapData, RpgServer, RpgServerEngine } from '@rpgjs/server'

@MapData({
     id: 'town',
     file: require('./tmx/mymap.tmx'),
     name: 'Town'
})
class TownMap extends RpgMap { }

@RpgServer({
     basePath: __dirname,
     maps: [
         TownMap
     ]
})
class RPG extends RpgServerEngine { } 
``` 


---
### basePath
- **Property**: `basePath`
- **Type**: string
- **Optional**: `false` 
- **Usage**:

 
It allows you to know where the maps are located. Usually put `__dirname` for the current directory.

```ts
basePath: __dirname
``` 


---
### damageFormulas
- **Property**: `damageFormulas`
- **Type**: object
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
import { RpgServer, RpgServerEngine, Presets } from '@rpgjs/server'

const { ATK, PDEF } = Presets

@RpgServer({
     basePath: __dirname,
     damageFormulas: {
         damagePhysic(a, b) {
             let damage = a[ATK] - b[PDEF]
             if (damage < 0) damage = 0
             return damage
         }
     }
})
class RPG extends RpgServerEngine { } 
```
