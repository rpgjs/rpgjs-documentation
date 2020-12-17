
---
### Give an itinerary
- **Method**: `player.moveRoutes(routes)`
- **Arguments**:
    - `{Array<string | Promise<any> | Direction | Function>}` `routes`.  (Optional: `false`)
- **Return**: `Promise`  
- **Example**: 
```ts
import { Move } from '@rpgjs/server'

player.moveRoutes([ Move.tileLeft(), Move.tileDown(2) ])
``` 
- **Usage**:

Gives an itinerary
