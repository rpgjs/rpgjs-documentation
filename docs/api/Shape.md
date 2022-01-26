::: tip Summary
- [name ](#name)
- [positioning ](#positioning)
- [x ](#x)
- [y ](#y)
- [Properties ](#properties)
- [Player is in this shape ?](#player-is-in-this-shape-?)
- [Get Player Owner](#get-player-owner)
:::
---
### name 
- **Property**: `name`
- **Type**: <Type type=' string ' />
- **Optional**: `false` 
- **Usage**:


Get/Set name

---
### positioning 
- **Property**: `positioning`
- **Type**: <Type type=' ShapePositioning ' />
- **Optional**: `false`
- **Default**: `default` 
- **Usage**:


Get/Set positioning

---
### x 
- **Property**: `x`
- **Type**: <Type type=' number ' />
- **Optional**: `false` 
- **Usage**:


Get/Set x

---
### y 
- **Property**: `y`
- **Type**: <Type type=' number ' />
- **Optional**: `false` 
- **Usage**:


Get/Set y

---
### Properties 
- **Property**: `Properties`
- **Type**: <Type type=' object ' />
- **Optional**: `false` 
- **Usage**:


Get/Set properties


---
### Player is in this shape ?
- **Method**: `shape.playerIsIn(player)`
- **Return**: <Type type='boolean' />   
- **Usage**:


Whether the player is in this shape


---
### Get Player Owner
- **Method**: `shape.getPlayerOwner()`
- **Return**: <Type type=' <a href="/commands/common.html">RpgPlayer</a> | undefined' />   
- **Usage**:


Recover the player with the shape. You must have used the `attachShape()` method on the player

