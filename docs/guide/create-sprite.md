# Create a sprite

## Prerequisites

Have an image with several animation frames (movement, attack, etc.).

## It is necessary to know

It is not mandatory to have a spritesheet as in the example below. You can create animations from any sprite sheet

## Spritesheet

Here is the spritesheet we will use:

![hero](/assets/chara.png)

1. Place the image in `src/client/characters/assets`
2. Then create the following file in `src/client/characters/hero.ts`

```ts
import { Spritesheet } from 'rpgjs/client'

@Spritesheet({
    id: 'hero', // id (mandatory)
    image: require('./assets/chara.png'), // relative path of image
    framesWidth: 4, // number of frames of the image across the width
    framesHeight: 4, // number of frames of the image across the height
    width: 128, // width of image
    height: 192, // height of image
    action: {
        walk: {
            left: '4->7',
            right: '8->11',
            down: '0->3',
            up: '12->15'
        }
    }
})
export class HeroCharacter {}
```

Follow the information in the comments

> It is important to put `require()` because Webpack will retrieve the images and put it in the `dist` folder. 

- - -

[Character Credit Link](https://untamed.wild-refuge.net/rpgxp.php)