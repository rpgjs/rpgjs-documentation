# Create a tileset for the map

## Prerequisites

1. You must have an image representing the tileset
2. To create a tileset, you need the Tiled Map Editor : [https://www.mapeditor.org/](https://www.mapeditor.org/)

## It is necessary to know

1. Tile sizes may vary. In the example below, the size is 32px*32px but you can have more or less tile size.
2. The width and height of the tileset does not matter. However, avoid having images that are too large. This may cause an error with WebGL
3. You can have several tilesets for one map.

## Create a spritesheet for this tileset

Here is the spritesheet we will use:

![medieval](/assets/medieval.png)

> **Warning**, the image above is only a part of the tileset

1. Place the image in `src/client/maps/assets`
2. Then create the following file in `src/client/characters/medieval.ts`

```ts
import { Spritesheet } from 'rpgjs/client'

@Spritesheet({
    images: {
        medieval: require('./assets/medieval.png')
        // here, you can add other tileset
    }
})
export class Tilesets { }
```

The `images` object allows to group several tilesets at the same time
- `medieval`, the key, is the spritesheet identifier
- the value is the relative path to the image

> It is important to put `require()` because Webpack will retrieve the images and put it in the `dist` folder. 

## Add the tileset to the game

1. Go to `src/client/rpg.ts`

```ts
import { RpgClient, RpgClientEngine } from 'rpgjs/client'
import { Tilesets } from './characters/medieval'

@RpgClient({
    spritesheets: [
        Tilesets
    ]
})
export default class RPG extends RpgClientEngine {}
```

2. And add the `Tilesets`, class 

## Put colission properties on the tileset

1. Create a new tileset with Tiled Map Editor (`File` > `New` > `New Tileset`)
2. Set source and width and height of tile

![new tileset](/assets/new-tileset.png)

3. Select the tile (or several at the same time) and set a new property

![select tile](/assets/select-tile.jpeg)

4. Add the `colission` property of type `BOOL`

![add colission](/assets/add-colission.png)

5. Check the `colission` property on the selected tile

![set colission](/assets/set-colission.jpeg)

6. Save file to `medieval.tsx` in `src/server/maps/tmx`