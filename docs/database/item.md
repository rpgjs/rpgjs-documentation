# Items

## Prerequisites

Read the article (Create database)[/guide/create-database.html#prerequisites] to find out how to put the data into your game and then use it. 

Example of full item:

```ts
import { RpgPlayer } from '@rpgjs/core'
import { Item } from '@rpgjs/database'

@Item({  
    name: 'Potion',
    description: 'Gives 100 HP',
    price: 200,
    hpValue: 100,
    hitRate: 1,
    consumable: true,
    addStates: []
    removeStates: []
    elements: [],
    effects: []
    paramsModifier: {}
})
export class Potion {
    onAdd(player: RpgPlayer) {

    }

    onUse(player: RpgPlayer) {

    }

    onUseFailed(player: RpgPlayer) {

    }

    onRemove(player: RpgPlayer) {

    }
}
```

## API

<Content :page-key="$site.pages.find(p => p.path === '/api/Item.html').key"/>