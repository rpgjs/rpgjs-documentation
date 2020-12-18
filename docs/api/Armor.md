
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

- **Property**: `}`
- **Type**: `Array<{ rate: number, state: StateClass } | StateClass>`
- **Optional**: `false` 
- **Usage**:

 
Apply states
- If it is an item, the state will be applied during the `useItem()` method

The array can contain a rate of chance (between 0 and 1) that the state applies.

Example, the Paralize state has a 1 in 2 chance of applying :
```ts
// Paralize is a class with the decorator State
addStates: [{ rate: 0.5, state: Paralize }]
``` 


---

- **Property**: `}`
- **Type**: `Array<{ rate: number, state: StateClass } | StateClass>`
- **Optional**: `false` 
- **Usage**:

 
Remove states. If the player has states, the object will remove them.

The array can contain a rate of chance (between 0 and 1) of state removal

Example, the Paralize state has a 1 in 2 chance of removal :
```ts
// Paralize is a class with the decorator State
removeStates: [{ rate: 0.5, state: Paralize }]
``` 

