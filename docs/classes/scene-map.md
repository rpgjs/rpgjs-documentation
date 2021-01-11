# RpgScene & RpgSceneMap

## RpgScene

<ApiContent page="RpgScene" />

## RpgScene Hooks

Full Example:

```ts
import { RpgSceneMap, RpgSprite } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
    // As soon as the scene is created
    onInit() { }

    // When the scene is loaded (Image of the loaded tileset, drawing completed and viewport assigned)
    onLoad() { }

    // the scene is drawn
    onDraw(t: number, dt: number) {}

    // a sprite has been added on the scene
    onAddSprite(sprite: RpgSprite) {}

    // a sprite has been removed on the scene
    onRemoveSprite(sprite: RpgSprite) {}
}
```

## RpgSceneMap

<ApiContent page="RpgSceneMap" />