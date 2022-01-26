::: tip Summary
- [dir](#dir)
- [isPlayer](#isplayer)
- [isEvent](#isevent)
- [isCurrentPlayer](#iscurrentplayer)
- [Get Positions of Graphic](#get-positions-of-graphic)
:::
---
### dir
- **Property**: `dir`
- **Type**: <Type type='Direction' />
- **Optional**: `false` 
- **Usage**:

 
the direction of the sprite


---
### isPlayer
- **Property**: `isPlayer`
- **Type**: <Type type='boolean' />
- **Optional**: `false` 
- **Usage**:

 
To know if the sprite is a player


---
### isEvent
- **Property**: `isEvent`
- **Type**: <Type type='boolean' />
- **Optional**: `false` 
- **Usage**:

 
To know if the sprite is an event


---
### isCurrentPlayer
- **Property**: `isCurrentPlayer`
- **Type**: <Type type='boolean' />
- **Optional**: `false` 
- **Usage**:

 
To know if the sprite is the sprite controlled by the player


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

