# RpgClientEngine & Hooks

## RpgEngineHooks

```ts
import { RpgClientEngine, RpgSpriteHooks } from '@rpgjs/client'

const engine: RpgEngineHooks = {
    onConnected(engine: RpgClientEngine) {
        console.log('client is connected')
    }
}
```

<ApiContent page="RpgEngineHooks" />

## RpgClientEngine

<ApiContent page="RpgClientEngine" />