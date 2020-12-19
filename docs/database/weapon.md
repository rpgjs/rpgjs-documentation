# Weapons

<Partial page="prerequisites-data" />

## Example of full weapon:

```ts
import { RpgPlayer } from '@rpgjs/server'
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

<ApiContent page="Weapon" />