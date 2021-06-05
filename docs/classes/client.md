# RpgClient

## RpgClientEngine

You need to create a class that inherits RpgClientEngine

```ts
import { entryPoint } from '@rpgjs/client'
import modules from './to/path/modules'
import io from 'socket.io-client'

document.addEventListener('DOMContentLoaded', () => { 
    entryPoint(modules, { io }).start()
})
```
1. Use `entryPoint` to create an instance of `RpgClientEngine`. 
2. Be sure to start the client part when the DOM is loaded.

### RpgClient Entry Point

<ApiContent page="RpgClientEntryPoint" />

## @RpgClient decorator

<ApiContent page="RpgClient" />