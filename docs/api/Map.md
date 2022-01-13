::: tip Summary
- [Create Shape](#create-shape)
:::
---
### Create Shape
- **Since**: beta.3
- **Method**: `map.createShape(obj)`
- **Return**: [RpgShape](/classes/shape)   
- **Usage**:


Create a shape dynamically on the map

Object:
 - (number) x: Position X
 - (number) y: Position Y
 - (number) width: Width
 - (number) height: Height
 - (object) properties (optionnal): 
     - (number) z: Position Z
     - (hexadecimal) color: Color (shared with client)
     - (boolean) collision
     - You can your own properties

