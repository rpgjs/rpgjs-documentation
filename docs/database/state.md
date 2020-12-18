# States

## Prerequisites

Read the article [Create database](/guide/create-database.html#prerequisites) to find out how to put the data into your game and then use it. 

Example of full state:

```ts
import { RpgPlayer } from '@rpgjs/core'
import { State } from '@rpgjs/database'

@State({  
    name: 'Paralyse',
    description: 'The player is paralyzed',
    effects: [],
    paramsModifier: [],
    statesEfficiency: []
    elementsEfficiency: []
})
export class Paralyse {
    
}
```

## API

<Content :page-key="$site.pages.find(p => p.path === '/api/State.html').key"/>