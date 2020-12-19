::: tip Summary
- [Set Class](#set-class)
- [Set Actor](#set-actor)
:::
---
### Set Class
- **Method**: `player.setClass(ClassClass)`
- **Arguments**:
    - {[ClassClass](/database/class.html)} `class`.  (Optional: `false`)
- **Return**: instance of [ClassClass](/database/class.html)   
- **Usage**:

 
Assign a class to the player

```ts
import { Fighter } from 'my-database/classes/fighter'

player.setClass(Fighter)
```


---
### Set Actor
- **Method**: `player.setActor(ActorClass)`
- **Arguments**:
    - {[ActorClass](/database/actor.html)} `actorClass`.  (Optional: `false`)
- **Return**: instance of [ActorClass](/database/actor.html)   
- **Usage**:

 
Allows to give a set of already defined properties to the player (default equipment, or a list of skills to learn according to the level)

```ts
import { Hero } from 'my-database/classes/hero'

player.setActor(Hero)
```

