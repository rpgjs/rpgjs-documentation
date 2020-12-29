::: tip Summary
- [Set initial level](#set-initial-level)
- [Set final level](#set-final-level)
- [Change Experience Curve](#change-experience-curve)
- [Change HP](#change-hp)
- [Change SP](#change-sp)
- [Change Experience](#change-experience)
- [Change Level](#change-level)
- [Experience for next level ?](#experience-for-next-level-?)
- [Get Param Value](#get-param-value)
- [Set Parameters Modifier](#set-parameters-modifier)
- [Add custom parameters](#add-custom-parameters)
- [Recovery HP and/or SP](#recovery-hp-and-or-sp)
- [All Recovery](#all-recovery)
:::
---
### Set initial level
- **Property**: `player.initialLevel`
- **Type**: number
- **Optional**: `false`
- **Default**: `1` 
- **Usage**:

 
```ts
player.initialLevel = 5
``` 


---
### Set final level
- **Property**: `player.finalLevel`
- **Type**: number
- **Optional**: `false`
- **Default**: `99` 
- **Usage**:

 
```ts
player.finalLevel = 50
``` 


---
### Change Experience Curve
- **Property**: `player.expCurve`
- **Type**: object
- **Optional**: `false`
- **Default**: `
` 
- **Usage**:

 
With Object-based syntax, you can use following options:
- `basis: number`
- `extra: number`
- `accelerationA: number`
- `accelerationB: number`

---
### Change HP
- **Property**: `player.hp`
- **Type**: number
- **Optional**: `false`
- **Default**: `MaxHPValue` 
- **Usage**:

 
Changes the health points
- Cannot exceed the MaxHP parameter
- Cannot have a negative value
- If the value is 0, a hook named `onDead()` is called in the RpgPlayer class.

```ts
player.hp = 100
``` 

---
### Change SP
- **Property**: `player.sp`
- **Type**: number
- **Optional**: `false`
- **Default**: `MaxSPValue` 
- **Usage**:

 
Changes the skill points
- Cannot exceed the MaxSP parameter
- Cannot have a negative value

```ts
player.sp = 200
``` 

---
### Change Experience
- **Property**: `player.exp`
- **Type**: number
- **Optional**: `false`
- **Default**: `0` 
- **Usage**:

 
Changing the player's experience. 
```ts
player.exp += 100
```

Levels are based on the experience curve.

```ts
console.log(player.level) // 1
console.log(player.expForNextlevel) // 150
player.exp += 160
console.log(player.level) // 2
```


---
### Change Level
- **Property**: `player.level`
- **Type**: number
- **Optional**: `false`
- **Default**: `1` 
- **Usage**:

 
Changing the player's level. 

```ts
player.level += 1
``` 

The level will be between the initial level given by the `initialLevel` and final level given by `finalLevel`

```ts
player.finalLevel = 50
player.level = 60 
console.log(player.level) // 50
```


---
### Experience for next level ?
- **Property**: `player.expForNextlevel`
- **Type**: number
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
```ts
console.log(player.expForNextlevel) // 150
```

---
### Get Param Value
- **Property**: `player.param`
- **Type**: object
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
Read the value of a parameter. Put the name of the parameter.

```ts
import { Presets } from '@rpgjs/server'

const { MAXHP } = Presets 

console.log(player.param[MAXHP])
```

> Possible to use the `player.getParamValue(name)` method instead

---
### Set Parameters Modifier
- **Property**: `paramsModifier`
- **Type**: Object
- **Optional**: `true`
- **Example**: 
```ts
import { Presets } from '@rpgjs/server'

const { MAXHP } = Presets

player.paramsModifier = {
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
### Add custom parameters
- **Method**: `player.addParameter(name,curve)`
- **Arguments**:
    - {name} `name`.  (Optional: `false`)
    - {object} `curve`. Scheme of the object: { start: number, end: number } (Optional: `false`)
- **Return**: void   
- **Usage**:

 
Give a new parameter. Give a start value and an end value. 
The start value will be set to the level set at `player.initialLevel` and the end value will be linked to the level set at `player.finalLevel`.

```ts
const SPEED = 'speed'

player.addParameter(SPEED, {
    start: 10,
    end: 100
})

player.param[SPEED] // 10
player.level += 5
player.param[SPEED] // 14
```


---
### Recovery HP and/or SP
- **Method**: `player.recovery(params)`
- **Arguments**:
    - {object} `params`. Scheme of the object: { hp: number, sp: number }. The values of the numbers must be in 0 and 1 (Optional: `false`)
- **Return**: void   
- **Usage**:

 
Gives back in percentage of health points to skill points

```ts
import { Presets } from '@rpgjs/server'

const { MAXHP } = Presets 

console.log(player.param[MAXHP]) // 800
player.hp = 100
player.recovery({ hp: 0.5 }) // = 800 * 0.5
console.log(player.hp) // 400
```


---
### All Recovery
- **Method**: `player.allRecovery()`
- **Return**: void   
- **Usage**:

 
restores all HP and SP

```ts
import { Presets } from '@rpgjs/server'

const { MAXHP, MAXSP } = Presets 

console.log(player.param[MAXHP], player.param[MAXSP]) // 800, 230
player.hp = 100
player.sp = 0
player.allRecovery()
console.log(player.hp, player.sp) // 800, 230
```

