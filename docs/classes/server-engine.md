# RpgServerEngine & Hooks

## Example to use (in module)

```ts
import { RpgServer, RpgModule, RpgServerEngine } from '@rpgjs/server'
import { player } from './player' // optional

@RpgModule<RpgServer>({ 
    engine: {
        onStart(engine: RpgServerEngine) {
            const globalConfig = engine.globalConfig
        }
    }
})
export default class RpgServerModuleEngine {}
```

## RpgServerEngineHooks

<ApiContent page="RpgServerEngineHooks" />

## RpgClientEngine

<ApiContent page="RpgServerEngine" />