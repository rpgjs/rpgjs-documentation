::: tip Summary
- [id](#id)
- [name](#name)
- [description](#description)
- [price](#price)
- [effects](#effects)
- [elements](#elements)
- [paramsModifier](#paramsmodifier)
- [addStates](#addstates)
- [removeStates](#removestates)
:::
---
### id
- **Property**: `id`
- **Type**: <Type type='string' />
- **Optional**: `true` 
- **Usage**:

 
The id of the item. The identifier makes it possible to find an object in the database. By default, the identifier is the name of the class

---
### name
- **Property**: `name`
- **Type**: <Type type='string' />
- **Optional**: `false` 
- **Usage**:

 
The name of the item. 

---
### description
- **Property**: `description`
- **Type**: <Type type='string' />
- **Optional**: `true` 
- **Usage**:

 
The description of the item. 

---
### price
- **Property**: `price`
- **Type**: <Type type='number' />
- **Optional**: `true` 
- **Usage**:

 
The price of the item. If the price is undefined, then it will not be possible to buy or sell the item.

---
### effects
- **Property**: `effects`
- **Type**: <Type type='Array&lt<a href="/database/effect.html">Effect</a>&gt;' />
- **Optional**: `true`
- **Example**: 

```ts
import { Effect } from '@rpgjs/server'

effects: [Effect.CAN_NOT_SKILL]
``` 
- **Usage**:

 
List of effects applied by the object, weapon, armor or condition

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
- **Type**: <Type type='Array&lt;{ rate: number, element:<a href="/database/element.html">Element</a>} |<a href="/database/element.html">Element</a>&gt;' />
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
### paramsModifier
- **Property**: `paramsModifier`
- **Type**: <Type type='Object' />
- **Optional**: `true`
- **Example**: 

```ts
import { Presets } from '@rpgjs/server'

const { MAXHP } = Presets

paramsModifier: {
     [MAXHP]: {
         value: 100
     }
}
```

1. Player has 741 MaxHp
2. After changing the parameter, he will have 841 MaxHp
 
- **Usage**:

 
Changes the values of some parameters

> It is important that these parameters have been created beforehand with the `addParameter()` method.
> By default, the following settings have been created: 
- maxhp
- maxsp
- str
- int
- dex
- agi

**Object Key**

The key of the object is the name of the parameter

> The good practice is to retrieve the name coming from a constant

**Object Value**

The value of the key is an object containing: 
``` 
{
  value: number,
  rate: number
}
```

- value: Adds a number to the parameter
- rate: Adds a rate to the parameter

> Note that you can put both (value and rate)

In the case of a state or the equipment of a weapon or armor, the parameters will be changed but if the state disappears or the armor/weapon is de-equipped, then the parameters will return to the initial state.


---
### addStates
- **Property**: `addStates`
- **Type**: <Type type='Array&lt;{ rate: number, state:<a href="/database/state.html">StateClass</a> } |<a href="/database/state.html">StateClass</a>&gt;' />
- **Optional**: `true` 
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
### removeStates
- **Property**: `removeStates`
- **Type**: <Type type='Array&lt;{ rate: number, state:<a href="/database/state.html">StateClass</a> } |<a href="/database/state.html">StateClass</a>&gt;' />
- **Optional**: `true` 
- **Usage**:

 
Remove states. If the player has states, the object will remove them.

The array can contain a rate of chance (between 0 and 1) of state removal

Example, the Paralize state has a 1 in 2 chance of removal :
```ts
// Paralize is a class with the decorator State
removeStates: [{ rate: 0.5, state: Paralize }]
``` 

