::: tip Summary
- [Add Item](#add-item)
- [Remove Item](#remove-item)
- [Equip Weapon or Armor](#equip-weapon-or-armor)
:::
---
### Add Item
- **Method**: `player.addItem(item,nb=1)`
- **Arguments**:
    - {ItemClass} `itemClass`.  (Optional: `false`)
    - {number} `nb`. Default 1 (Optional: `true`)
- **Return**: { nb: number, item: instance of ItemClass }  
- **Example**: 
```ts
import Potion from 'your-database/potion'
player.addItem(Potion, 5)
 ```
 
- **Usage**:


Add an item in the player's inventory. You can give more than one by specifying `nb`

---
### Remove Item
- **Method**: `player.removeItem(item,nb=1)`
- **Arguments**:
    - {ItemClass} `itemClass`.  (Optional: `false`)
    - {number} `nb`. Default 1 (Optional: `true`)
- **Exceptions**:
    - `{ItemLog}` `notInInventory`. If the object is not in the inventory, an exception is raised
 ```
 {
     id: ITEM_NOT_INVENTORY,
     msg: '...'
 }
 ```
 > If the first parameter is a string, then it must represent the identifier of the item.
- **Return**: { nb: number, item: instance of ItemClass } | undefined  
- **Example**: 
```ts
import Potion from 'your-database/potion'

try {
   player.removeItem(Potion, 5)
}
catch (err) {
   console.log(err)
}
```
 
- **Usage**:


Deletes an item. Decreases the value `nb`. If the number falls to 0, then the item is removed from the inventory. The method then returns `undefined`

---
### Equip Weapon or Armor
- **Method**: `player.equip(itemClass,equip=true)`
- **Arguments**:
    - {ItemClass} `itemClass`.  (Optional: `false`)
    - {number} `equip`. Equip the object if true or un-equipped if false (Optional: `true`)
- **Exceptions**:
    - `{ItemLog}` `notInInventory`. If the item is not in the inventory
 ```
 {
     id: ITEM_NOT_INVENTORY,
     msg: '...'
 }
 ```
    - `{ItemLog}` `invalidToEquiped`. If the item is not by a weapon or armor
 ```
 {
     id: INVALID_ITEM_TO_EQUIP,
     msg: '...'
 }
 ```
    - `{ItemLog}` `isAlreadyEquiped`. If the item Is already equipped
 ```
 {
     id: ITEM_ALREADY_EQUIPED,
     msg: '...'
 }
 ```
- **Return**: void  
- **Example**: 
```ts
import Sword from 'your-database/sword'

try {
     player.addItem(Sword)
     player.equip(Sword)
}
catch (err) {
   console.log(err)
}
```
 
- **Usage**:


Equips a weapon or armor on a player. Think first to add the item in the inventory with the `addItem()` method before equipping the item.
