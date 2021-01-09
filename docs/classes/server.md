# RpgServer

## RpgServerEngine

You need to create a class that inherits RpgServerEngine

```ts
import { entryPoint, RpgServerEngine, RpgServer } from '@rpgjs/server'

@RpgServer({
     basePath: __dirname
})
class RPG extends RpgServerEngine { } 

const rpgGame = entryPoint(RPG, io) // io is socket.io instance

rpgGame.start()
```
1. Use the `entryPoint` function, which will group together `socket.io` and your class 
2. the function returns an instance of `RpgServerEngine`. As soon as your server is ready (listening on the port, etc.), start the RPG server.

## @RpgServer decorator

<ApiContent page="RpgServer" />