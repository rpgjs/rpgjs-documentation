::: tip Summary
- [dir](#dir)
- [isPlayer](#isplayer)
- [isEvent](#isevent)
- [isCurrentPlayer](#iscurrentplayer)
- [logic](#logic)
- [Get Positions of Graphic](#get-positions-of-graphic)
:::
---
### dir
- **Property**: `dir`
- **Type**: <Type type='Direction' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
the direction of the sprite


---
### isPlayer
- **Property**: `isPlayer`
- **Type**: <Type type='boolean' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
To know if the sprite is a player


---
### isEvent
- **Property**: `isEvent`
- **Type**: <Type type='boolean' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
To know if the sprite is an event


---
### isCurrentPlayer
- **Property**: `isCurrentPlayer`
- **Type**: <Type type='boolean' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
To know if the sprite is the sprite controlled by the player


---
### logic
- **Since**: 3.0.0-beta.4
- **Property**: `logic`
- **Type**: <Type type=' <a href="/classes/sprite.html">RpgSprite</a>Logic' />
- **Optional**: `false`
- **Read Only** 
- **Usage**:

 
Retrieves the logic of the sprite


---
### Get Positions of Graphic
- **Method**: `sprite.getPositionsOfGraphic(align)`
- **Arguments**:
    - {<Type type='string' />} `align`. middle (Optional: `true`)
- **Return**: <Type type=' x: number, y: number ' />   
- **Usage**:


Recover the position according to the graphic
Normally, the position is that of the hitbox but, we retrieve the top left corner of the graphic

You can also pass the `middle` value as first parameter to retrieve the positions from the middle of the sprite

