::: tip Summary
- [id](#id)
- [name](#name)
- [description](#description)
- [elements](#elements)
- [removeStates](#removestates)
:::
---
### id
- **Property**: `id`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The id of the item. The identifier makes it possible to find an object in the database. By default, the identifier is the name of the class

---
### name
- **Property**: `name`
- **Type**: string
- **Optional**: `false` 
- **Usage**:

 
The name of the item. 

---
### description
- **Property**: `description`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The description of the item. 

---
### elements
- **Enum**: `number`

| Tag           | Description |
| ------------- |------------:|
| Efficiency.GAIN_HP | -0.5 value |
| Efficiency.PERFECT_INVULNERABLE | 0 value |
| Efficiency.INVULNERABLE | 0.5 value |
| Efficiency.NORMAL | 1 value |
| Efficiency.VULNERABLE | 1.5 value |
| Efficiency.VERY_VULNERABLE | 2 value |
- **Property**: `elements`
- **Type**: Array&lt;{ rate: number, element: [Element](/database/element.html)} | [Element](/database/element.html)&gt;
- **Optional**: `true`
- **Example**: 
Example 1

```ts
import { Element } from 'my-database/elements'

elements: [Element.Fire] // rate is 1 by default
```

Example 2 

```ts
import { Element } from 'my-database/elements'

elements: [{ rate: 1.5, element: Element.Fire }]
```
Example 3 

```ts
import { Efficiency } from '@rpgjs/server'
import { Element } from 'my-database/elements'

elements: [{ rate: Efficiency.VULNERABLE, element: Element.Fire }]
``` 
- **Usage**:

 
List of elements.

Applies a vulnerability rate. It is a multiplying coefficient for damage calculations.

To help, you can use the Efficiency enumerations


---
### removeStates
- **Property**: `removeStates`
- **Type**: Array&lt;{ rate: number, state: [StateClass](/database/state.html) } | [StateClass](/database/state.html)&gt;
- **Optional**: `true` 
- **Usage**:

 
Remove states. If the player has states, the object will remove them.

The array can contain a rate of chance (between 0 and 1) of state removal

Example, the Paralize state has a 1 in 2 chance of removal :
```ts
// Paralize is a class with the decorator State
removeStates: [{ rate: 0.5, state: Paralize }]
``` 

