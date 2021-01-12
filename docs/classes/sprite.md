# RpgSprite

Each time an event or player appears on the map, an `RpgSprite` is called. It contains the graphics of the player but also a container to put tiles of the map on top of the sprite (for overlay). Don't pay attention to this system, it is part of the RpgJS engine.

However, `RpgSprite` inherits from [PIXI.Sprite](https://pixijs.download/dev/docs/PIXI.Sprite.html). This way, you can add other containers, etc. This way, you can add other containers, etc.

[Put the created class in the RpgClient decorator](/classes/client.html#rpgclient-decorator)

# RpgSprite Hooks

```ts
import { RpgSprite } from '@rpgjs/client'

export class Sprite extends RpgSprite {
    // As soon as the sprite is initialized
    onInit() { }

    // As soon as a data is changed on the server side (the name for example), you are able to know the new data but also the old data.
    onChanges(data, old) { }

    // At each tick, the method is called
    onUpdate(obj) {}

    // When the x, y positions change
    onMove() {}
}
```
# Properties

<ApiContent page="RpgSprite" />

