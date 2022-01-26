::: tip Summary
- [Get Elements Defense](#get-elements-defense)
- [Set/Get Elements Efficiency](#set-get-elements-efficiency)
- [Get Elements](#get-elements)
:::
---
### Get Elements Defense
- **Property**: `player.elementsDefense`
- **Type**: <Type type='Array&lt;{ rate: number, element:<a href="/database/element.html">Element</a>}&gt;' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
Recovers the player's elements defense on inventory.  This list is generated from the `elementsDefense` property defined on the weapons or armors equipped.
If several items have the same element, only the highest rate will be taken into account.

```ts
import { Armor } from '@rpgjs/server'

enum Elements {
  Fire = 'fire'
}

@Armor({
     name: 'Shield',
     elementsDefense: [{ rate: 1, element: Elements.Fire }]
})
class Shield {}

@Armor({
     name: 'FireShield',
     elementsDefense: [{ rate: 0.5, element: Elements.Fire }]
})
class FireShield {}

player.addItem(Shield)
player.addItem(FireShield)
player.equip(Shield)
player.equip(FireShield)

console.log(player.elementsDefense) // [{ rate: 1, element: 'fire' }]
``` 

---
### Set/Get Elements Efficiency
- **Property**: `player.elementsEfficiency`
- **Type**: <Type type='Array&lt;{ rate: number, element:<a href="/database/element.html">Element</a>}&gt;' />
- **Optional**: `false` 
- **Usage**:

 
Set or retrieves all the elements where the player is vulnerable or not. 

```ts
import { Class } from '@rpgjs/server'

enum Elements {
  Fire = 'fire',
  Ice = 'ice'
}

@Class({
     name: 'Fighter',
     elementsEfficiency: [{ rate: 1, element: Elements.Fire }]
})
class Hero {}

player.setClass(Hero)

console.log(player.elementsEfficiency) // [{ rate: 1, element: 'fire' }]

player.elementsEfficiency = [{ rate: 2, element: Elements.Ice }]

console.log(player.elementsEfficiency) // [{ rate: 1, element: 'fire' }, { rate: 2, element: 'ice' }]
``` 

---
### Get Elements
- **Property**: `player.elements`
- **Type**: <Type type='Array&lt<a href="/database/element.html">Element</a>&gt;' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
Retrieves a array of elements assigned to the player and the elements of the weapons / armor equipped

```ts
console.log(player.elements)
``` 
