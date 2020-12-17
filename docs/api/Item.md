
---

- **Property**: `id`
- **Type**: `string`
- **Optional**: `true` 
- **Usage**:

The id of the item. The identifier makes it possible to find an object in the database. By default, the identifier is the name of the class

---

- **Property**: `name`
- **Type**: `string`
- **Optional**: `false` 
- **Usage**:

The name of the item.

---

- **Property**: `description`
- **Type**: `string`
- **Optional**: `true` 
- **Usage**:

The description of the item.

---

- **Property**: `price`
- **Type**: `number`
- **Optional**: `true` 
- **Usage**:

The price of the item. If the price is undefined, then it will not be possible to buy or sell the item.

---

- **Property**: `hpValue`
- **Type**: `number`
- **Optional**: `true` 
- **Usage**:

The number of heart points given back by the item

---

- **Property**: `hitRate`
- **Type**: `number`
- **Optional**: `true`
- **Default**: `1` 
- **Usage**:

The success rate of the item. Value between 0 and 1. Even if the use of the item failed, the item will be removed from the player's inventory.

---

- **Property**: `consumable`
- **Type**: `boolean`
- **Optional**: `true`
- **Default**: `true` 
- **Usage**:

Indicate if the item can be used. If not, an error will be sent
