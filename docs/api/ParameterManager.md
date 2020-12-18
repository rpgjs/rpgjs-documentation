
---
### Set initial level
- **Property**: `player.initialLevel`
- **Type**: `number`
- **Optional**: `false`
- **Default**: `1` 
- **Usage**:

 
```ts
player.initialLevel = 5
``` 


---
### Set final level
- **Property**: `player.finalLevel`
- **Type**: `number`
- **Optional**: `false`
- **Default**: `99` 
- **Usage**:

 
```ts
player.finalLevel = 50
``` 


---
### Change Experience Curve
- **Property**: `player.expCurve`
- **Type**: `object`
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
- **Type**: `number`
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
### Change Experience
- **Property**: `player.exp`
- **Type**: `number`
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
- **Type**: `number`
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
- **Type**: `number`
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
```ts
console.log(player.expForNextlevel) // 150
```
