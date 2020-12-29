::: tip Summary
- [Get Item](#get-item)
- [Has Item](#has-item)
- [Add Item](#add-item)
- [Remove Item](#remove-item)
- [Buy Item](#buy-item)
- [Sell Item](#sell-item)
- [Use an Item](#use-an-item)
- [Equip Weapon or Armor](#equip-weapon-or-armor)
:::
---
### Get Item
- **Method**: `player.getItem(itemClass)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. Identifier of the object if the parameter is a string (Optional: `false`)
- **Return**: { nb: number, item: instance of [ItemClass](/database/item.html) }  
- **Example**: 
```ts
import Potion from 'your-database/potion'

player.addItem(Potion, 5)
const inventory = player.getItem(Potion)
console.log(inventory) // { nb: 5, item: <instance of Potion> }
 ```
 
- **Usage**:


Retrieves the information of an object: the number and the instance 

---
### Has Item
- **Method**: `player.hasItem(itemClass)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. Identifier of the object if the parameter is a string (Optional: `false`)
- **Return**: boolean  
- **Example**: 
```ts
import Potion from 'your-database/potion'

player.hasItem(Potion) // false
 ```
 
- **Usage**:


Check if the player has the item in his inventory.

---
### Add Item
- **Method**: `player.addItem(item,nb=1)`
- **Arguments**:
    - {[ItemClass](/database/item.html)} `itemClass`.  (Optional: `false`)
    - {number} `nb`. Default 1 (Optional: `true`)
- **Return**: { nb: number, item: instance of [ItemClass](/database/item.html) }  
- **Example**: 
```ts
import Potion from 'your-database/potion'
player.addItem(Potion, 5)
 ```
 
- **Usage**:


Add an item in the player's inventory. You can give more than one by specifying `nb`

`onAdd()` method is called on the ItemClass


---
### Remove Item
- **Method**: `player.removeItem(item,nb=1)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. string is item id (Optional: `false`)
    - {number} `nb`. Default 1 (Optional: `true`)
- **Throws**:

If the object is not in the inventory, an exception is raised
 ```
{
     id: ITEM_NOT_INVENTORY,
     msg: '...'
}
```
---
- **Return**: { nb: number, item: instance of [ItemClass](/database/item.html) } | undefined  
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

`onRemove()` method is called on the ItemClass


---
### Buy Item
- **Method**: `player.buyItem(item,nb=1)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. string is item id (Optional: `false`)
    - {number} `nb`. Default 1 (Optional: `true`)
- **Throws**:

If you have not set a price on the item
 ```
{
     id: NOT_PRICE,
     msg: '...'
}
```
---
If the player does not have enough money
 ```
{
     id: NOT_ENOUGH_GOLD,
     msg: '...'
}
```
---
- **Return**: { nb: number, item: instance of [ItemClass](/database/item.html) }  
- **Example**: 
```ts
import Potion from 'your-database/potion'

try {
   player.buyItem(Potion)
}
catch (err) {
   console.log(err)
}
```
 
- **Usage**:


Purchases an item and reduces the amount of gold

`onAdd()` method is called on the ItemClass


---
### Sell Item
- **Method**: `player.sellItem(item,nb=1)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. string is item id (Optional: `false`)
    - {number} `nbToSell`. Default 1 (Optional: `true`)
- **Throws**:

If you have not set a price on the item
  ```
{
     id: NOT_PRICE,
     msg: '...'
}
```
---
If the object is not in the inventory, an exception is raised
 ```
{
     id: ITEM_NOT_INVENTORY,
     msg: '...'
}
```
---
If the number of items for sale exceeds the number of actual items in the inventory
 ```
{
     id: TOO_MANY_ITEM_TO_SELL,
     msg: '...'
}
```
---
- **Return**: { nb: number, item: instance of [ItemClass](/database/item.html) }  
- **Example**: 
```ts
import Potion from 'your-database/potion'

try {
    player.addItem(Potion)
    player.sellItem(Potion)
}
catch (err) {
   console.log(err)
}
```
 
- **Usage**:


Sell an item and the player wins the amount of the item divided by 2

`onRemove()` method is called on the ItemClass


---
### Use an Item
- **Method**: `player.useItem(item,nb=1)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. string is item id (Optional: `false`)
- **Throws**:

If the player has the `Effect.CAN_NOT_ITEM` effect
  ```
{
     id: RESTRICTION_ITEM,
     msg: '...'
}
```
---
If the object is not in the inventory, an exception is raised
 ```
{
     id: ITEM_NOT_INVENTORY,
     msg: '...'
}
```
---
If the `consumable` property is on false
 ```
{
     id: NOT_USE_ITEM,
     msg: '...'
}
```
---
Chance to use the item has failed. Chances of use is defined with `ItemClass.hitRate`
 ```
{
     id: USE_CHANCE_ITEM_FAILED,
     msg: '...'
}
```
> the item is still deleted from the inventory

`onUseFailed()` method is called on the ItemClass

---
- **Return**: { nb: number, item: instance of [ItemClass](/database/item.html) }  
- **Example**: 
```ts
import Potion from 'your-database/potion'

try {
    player.addItem(Potion)
    player.useItem(Potion)
}
catch (err) {
   console.log(err)
}
```
 
- **Usage**:


 Use an object. Applies effects and states. Removes the object from the inventory then

`onUse()` method is called on the ItemClass (If the use has worked)
`onRemove()` method is called on the ItemClass


---
### Equip Weapon or Armor
- **Method**: `player.equip(itemClass,equip=true)`
- **Arguments**:
    - {[ItemClass](/database/item.html) | string} `itemClass`. string is item id (Optional: `false`)
    - {number} `equip`. Equip the object if true or un-equipped if false (Optional: `true`)
- **Throws**:

If the item is not in the inventory
 ```
 {
     id: ITEM_NOT_INVENTORY,
     msg: '...'
 }
 ```
---
If the item is not by a weapon or armor
 ```
 {
     id: INVALID_ITEM_TO_EQUIP,
     msg: '...'
 }
 ```
---
If the item Is already equipped
 ```
 {
     id: ITEM_ALREADY_EQUIPED,
     msg: '...'
 }
 ```
---
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

`onEquip()` method is called on the ItemClass

