::: tip Summary
- [id](#id)
- [name](#name)
- [description](#description)
- [effects](#effects)
- [statesEfficiency](#statesefficiency)
- [elementsEfficiency](#elementsefficiency)
- [paramsModifier](#paramsmodifier)
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
### effects
- **Property**: `effects`
- **Type**: Array&lt;[Effect](/database/effect.html)&gt;
- **Optional**: `true`
- **Example**: 
```ts
import { Effect } from '@rpgjs/server'

effects: [Effect.CAN_NOT_SKILL]
``` 
- **Usage**:

 
List of effects applied by the object, weapon, armor or condition

---
### statesEfficiency
::: warning
The realization of this property or method has not been completed.
:::

- **Enum**: `number`

| Tag           | Description |
| ------------- |------------:|
|  |
- **Property**: `statesEfficiency`
- **Type**: Array&lt;{ rate: number, element: [StateClass](/database/state.html)} | [StateClass](/database/state.html)&gt;
- **Optional**: `true`
- **Example**: 
Example 1

```ts
import { Paralyze } from 'my-database/states/paralyze'

statesEfficiency: [Paralyze] // rate is 1 by default
```

Example 2 

```ts
import { Paralyze } from 'my-database/states/paralyze'

statesEfficiency: [{ rate: 1.5, state: Paralyze }]
```
Example 3 (todo)

```ts
import { Efficiency } from '@rpgjs/server'
import { Paralyze } from 'my-database/states/paralyze'

statesEfficiency: [{ rate: Efficiency.VULNERABLE, state: Paralyze }]
``` 
- **Usage**:

 
List of states.

Changes the efficiency of the states. It indicates whether or not the player with a class or state will be vulnerable to the state.
It is a multiplying coefficient for damage calculations.

To help, you can use the Efficiency enumerations


---
### elementsEfficiency
- **Enum**: `number`

| Tag           | Description |
| ------------- |------------:|
| Efficiency.GAIN_HP | -0.5 value |
| Efficiency.PERFECT_INVULNERABLE | 0 value |
| Efficiency.INVULNERABLE | 0.5 value |
| Efficiency.NORMAL | 1 value |
| Efficiency.VULNERABLE | 1.5 value |
| Efficiency.VERY_VULNERABLE | 2 value |
- **Property**: `elementsEfficiency`
- **Type**: Array&lt;{ rate: number, element: [Element](/database/element.html)} | [Element](/database/element.html)&gt;
- **Optional**: `true`
- **Example**: 
Example 1

```ts
import { Element } from 'my-database/elements'

elementsEfficiency: [Element.Fire] // rate is 1 by default
```

Example 2 

```ts
import { Element } from 'my-database/elements'

elementsEfficiency: [{ rate: 1.5, element: Element.Fire }]
```
Example 3 

```ts
import { Efficiency } from '@rpgjs/server'
import { Element } from 'my-database/elements'

elementsEfficiency: [{ rate: Efficiency.VULNERABLE, element: Element.Fire }]
``` 
- **Usage**:

 
List of elements.

Changes the efficiency of the elements. It indicates whether or not the player with a class or state will be vulnerable to the element.
It is a multiplying coefficient for damage calculations.

To help, you can use the Efficiency enumerations


---
### paramsModifier
- **Property**: `paramsModifier`
- **Type**: Object
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

