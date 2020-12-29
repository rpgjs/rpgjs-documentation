::: tip Summary
- [Get States Defense](#get-states-defense)
- [Set/Get States Efficiency](#set-get-states-efficiency)
- [Get State](#get-state)
- [Add State](#add-state)
- [Remove State](#remove-state)
:::
---
### Get States Defense
- **Property**: `player.statesDefense`
- **Type**: Array&lt;{ rate: number, state: [StateClass](/database/state.html)}&gt;
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
Recovers the player's states defense on inventory.  This list is generated from the `statesDefense` property defined on the weapons or armors equipped.
If several items have the same element, only the highest rate will be taken into account.

```ts
import { Armor, State } from '@rpgjs/server'

@State({
     name: 'Paralyze'
})
class Paralyze {}

@Armor({
     name: 'Shield',
     statesDefense: [{ rate: 1, state: Paralyze }]
})
class Shield {}

@Armor({
     name: 'FireShield',
     statesDefense: [{ rate: 0.5, state: Paralyze }]
})
class FireShield {}

player.addItem(Shield)
player.addItem(FireShield)
player.equip(Shield)
player.equip(FireShield)

console.log(player.statesDefense) // [{ rate: 1, state: instance of Paralyze }]
``` 

---
### Set/Get States Efficiency
- **Property**: `player.statesEfficiency`
- **Type**: Array&lt;{ rate: number, state: [StateClass](/database/state.html)}&gt;
- **Optional**: `false` 
- **Usage**:

 
Set or retrieves all the states where the player is vulnerable or not. 

```ts
import { Class, State } from '@rpgjs/server'

@State({
     name: 'Paralyze'
})
class Paralyze {}

@State({
     name: 'Sleep'
})
class Sleep {}

@Class({
     name: 'Fighter',
     statesEfficiency: [{ rate: 1, state: Paralyze }]
})
class Hero {}

player.setClass(Hero)

console.log(player.statesEfficiency) // [{ rate: 1, instance of Paralyze }]

player.statesEfficiency = [{ rate: 2, state: Sleep }]

console.log(player.statesEfficiency) // [{ rate: 1, state: instance of Paralyze }, { rate: 2, state: instance of Sleep }]
``` 

---
### Get State
- **Method**: `player.getState(stateClass)`
- **Arguments**:
    - {[StateClass](/database/state.html)} `stateClass`.  (Optional: `false`)
- **Return**: instance of [StateClass](/database/state.html) | null   
- **Usage**:


Get a state to the player. Returns `null` if the state is not present on the player
```ts
import Paralyze from 'your-database/states/paralyze'

player.getState(Paralyze)
 ```


---

::: warning
The realization of this property or method has not been completed.
:::
### Add State
- **Method**: `player.addState(stateClass,chance=1)`
- **Arguments**:
    - {[StateClass](/database/state.html)} `stateClass`.  (Optional: `false`)
    - {number} `chance`. 1 by default (Optional: `true`)
- **Throws**:

If the chance to add the state has failed (defined with the `chance` param)
 ```
{
     id: ADD_STATE_FAILED,
     msg: '...'
}
```
---
- **Return**: instance of [StateClass](/database/state.html)   
- **Usage**:


Adds a state to the player. Set the chance between 0 and 1 that the state can apply
```ts
import Paralyze from 'your-database/states/paralyze'

try { 
     player.addState(Paralyze)
}
catch (err) {
     console.log(err)
}
 ```


---

::: warning
The realization of this property or method has not been completed.
:::
### Remove State
- **Method**: `player.removeState(stateClass,chance=1)`
- **Arguments**:
    - {[StateClass](/database/state.html)} `stateClass`.  (Optional: `false`)
    - {number} `chance`. 1 by default (Optional: `true`)
- **Throws**:

If the chance to remove the state has failed (defined with the `chance` param)
 ```
{
     id: REMOVE_STATE_FAILED,
     msg: '...'
}
```
---
If the status does not exist
 ```
{
     id: STATE_NOT_APPLIED,
     msg: '...'
}
```
---
- **Return**: instance of [StateClass](/database/state.html)   
- **Usage**:


Remove a state to the player. Set the chance between 0 and 1 that the state can be removed
```ts
import Paralyze from 'your-database/states/paralyze'

try { 
     player.removeState(Paralyze)
}
catch (err) {
     console.log(err)
}
 ```

