# Weapons

## Prerequisites

Read the article [Create database](/guide/create-database.html#prerequisites) to find out how to put the data into your game and then use it. 

Example of full weapon:

```ts
import { RpgPlayer } from '@rpgjs/core'
import { Weapon } from '@rpgjs/database'

@Weapon({  
    name: 'Sword',
    description: 'Gives 100 HP',
    price: 2000,
    atk: number
    pdef: number,
    sdef: number,
    addStates: []
    removeStates: []
    elements: [],
    effects: []
    params: {
        maxhp
    }
    paramsModifier: {

    }
    statesDefense: []
    elementsDefense: []
})
export class Sword {
    onAdd(player: RpgPlayer) {

    }

    onEquip(player: RpgPlayer, equip: boolean) {

    }

    onRemove(player: RpgPlayer) {

    }
}
```

## API

<Content :page-key="$site.pages.find(p => p.path === '/api/Weapon.html').key"/>