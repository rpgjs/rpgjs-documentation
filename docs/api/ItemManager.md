
---
### Add Item
- **Method**: `player.addItem(item,nb=1)`
- **Arguments**:
    - `{ItemClass}` `itemClass`.  (Optional: `false`)
    - `{number}` `nb`. Default 1 (Optional: `true`)
- **Return**: `{ nb: number, item: instance of ItemClass }`  
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
    - `{ItemClass}` `itemClass`.  (Optional: `false`)
    - `{number}` `nb`. Default 1 (Optional: `true`)
- **Exceptions**:
    - `{ItemLog}` `notInInventory`. If the object is not in the inventory, an exception is raised
```
{
id: ITEM_NOT_INVENTORY,
msg: '...'
}
```
> If the first parameter is a string, then it must represent the identifier of the item.
- **Return**: `{ nb: number, item: instance of ItemClass } | undefined`  
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
