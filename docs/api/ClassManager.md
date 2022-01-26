::: tip Summary
- [Set Class](#set-class)
- [Set Actor](#set-actor)
:::
---
### Set Class
- **Method**: `player.setClass(ClassClass)`
- **Arguments**:
    - {<Type type='<a href="/database/class.html">ClassClass</a>' />} `class`.  (Optional: `false`)
- **Return**: <Type type='instance of<a href="/database/class.html">ClassClass</a>' />   
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
    - {<Type type='<a href="/database/actor.html">ActorClass</a>' />} `actorClass`.  (Optional: `false`)
- **Return**: <Type type='instance of<a href="/database/actor.html">ActorClass</a>' />   
- **Usage**:

 
Allows to give a set of already defined properties to the player (default equipment, or a list of skills to learn according to the level)

```ts
import { Hero } from 'my-database/classes/hero'

player.setActor(Hero)
```

