# Players Commands 

## Player Parameters

### Change Gold

- **Property**: `player.gold`
- **Type**: {number}
- **Default**: 0
- **Usage**:

You can change the game money

```ts
player.gold += 100
```

### Change Experience Curve

- **Property**: `player.expCurve`
- **Type**: {object}
- **Default**: 
```ts
{
    basis: 30,
    extra: 20,
    accelerationA: 30,
    accelerationB: 30
}
```
- **Usage**:

With Object-based syntax, you can use following options:
- `basis: number`
- `extra: number`
- `accelerationA: number`
- `accelerationB: number`

### Experience for next level ?

- **Property**: `player.expForNextlevel`
- **Type**: {number}
- **Read Only**
- **Usage**:

```ts
console.log(player.expForNextlevel) // 150
```

### Change Experience

- **Property**: `player.exp`
- **Type**: {number}
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

### Set initial level

- **Property**: `player.initialLevel`
- **Type**: {number}
- **Default**: `1`
- **Usage**:

```ts
player.initialLevel = 5
```

### Set final level

- **Property**: `player.finalLevel`
- **Type**: {number}
- **Default**: `99`
- **Usage**:

```ts
player.finalLevel = 50
```

### Change Level

- **Property**: `player.level`
- **Type**: {number}
- **Default**: 1
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

## Items Settings

<Content :page-key="$site.pages.find(p => p.path === '/api/ItemManager.html').key"/>

## Movement

<Content :page-key="$site.pages.find(p => p.path === '/api/MoveManager.html').key"/>

## Prebuilt GUI

### Show Text 

- **Method**: `player.showText(text, options)`
- **Arguments**: 
    - {string} text
    - {object} options
        - {string} position
        - {boolean} fullWidth
        - {boolean} typewriterEffect
- **Return**: Promise{void}
- **Usage**:

Show a text. This is a graphical interface already built

```ts
player.showText('Hello World')
```

- **Option: positions**