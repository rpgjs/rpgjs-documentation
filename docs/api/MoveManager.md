::: tip Summary
- [Give an itinerary](#give-an-itinerary)
:::
---
### Give an itinerary
- **Method**: `player.moveRoutes(routes)`
- **Arguments**:
    - {Array&lt;string | Promise&lt;any&gt; | Direction | Function&gt;} `routes`.  (Optional: `false`)
- **Return**: Promise  
- **Example**: 
```ts
import { Move } from '@rpgjs/server'

player.moveRoutes([ Move.tileLeft(), Move.tileDown(2) ])
```
 
- **Usage**:


Gives an itinerary
