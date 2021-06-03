# RpgClient

## RpgClientEngine

You need to create a class that inherits RpgClientEngine

```ts
import { entryPoint, RpgClientEngine, RpgClient } from '@rpgjs/client'
import io from 'socket.io'

@RpgClient({
    // options of RpgClient decorator
})
class RPG extends RpgClientEngine { } 

document.addEventListener('DOMContentLoaded', () => { 
    entryPoint(RPG, { io }).start()
})
```
1. Use `entryPoint` to create an instance of `RpgClientEngine`. 
2. Be sure to start the client part when the DOM is loaded.

### RpgClientEngine Hooks 

Full Example:

```ts
import { entryPoint, RpgClientEngine, RpgClient } from '@rpgjs/client'

@RpgClient({
    // options of RpgClient decorator
})
export class RPG extends RpgClientEngine {
    onConnected() { }

    onConnectError(err) { }

    onDisconnect() { }
}
```

## @RpgClient decorator

<ApiContent page="RpgClient" />