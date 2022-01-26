::: tip Summary
- [skillsToLearn](#skillstolearn)
- [id](#id)
- [name](#name)
- [description](#description)
- [statesEfficiency](#statesefficiency)
- [elementsEfficiency](#elementsefficiency)
:::
---
### skillsToLearn
- **Property**: `skillsToLearn`
- **Type**: <Type type='Array&lt;{ level: number, skill: <a href="/database/skill.html">SkillClass</a> }&gt;' />
- **Optional**: `true` 
- **Usage**:

 
Indicate which skill will be learned when the level is reached

```ts
import { Fire } from 'my-database/skills/fire'

skillsToLearn: [{ level: 5, skill: Fire }]
```


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
### statesEfficiency
::: warning
The realization of this property or method has not been completed.
:::

- **Enum**: `number`

| Tag           | Description |
| ------------- |------------:|
|  |
- **Property**: `statesEfficiency`
- **Type**: <Type type='Array&lt;{ rate: number, element: <a href="/database/state.html">StateClass</a>} | <a href="/database/state.html">StateClass</a>&gt;' />
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
- **Type**: <Type type='Array&lt;{ rate: number, element: <a href="/database/element.html">Element</a>} | <a href="/database/element.html">Element</a>&gt;' />
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

