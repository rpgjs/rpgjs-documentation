::: tip Summary
- [mode](#mode)
- [hitbox](#hitbox)
- [name](#name)
:::
---
### mode
- **Property**: `mode`
- **Type**: <Type type='string' />
- **Optional**: `true` 
- **Usage**:

 
The mode of the event, shared evening or scenario

The scenario mode allows you to have events specific to the player. Thus, the graphics, the positions of the event will be different for each player. Beware of performance! The event is duplicated by each player.

`shared` mode by default

```ts
import { RpgEvent, EventData, RpgPlayer, EventMode } from '@rpgjs/server'
@EventData({
     name: 'EV-1',
     mode: EventMode.Scenario // or EventMode.Shared
})
export class CharaEvent extends RpgEvent { }
```


---
### hitbox
- **Property**: `hitbox`
- **Type**: <Type type=' { width: number, height: number }' />
- **Optional**: `true` 
- **Usage**:

 
The hitbox of the event. By default, this is the size of the tile of the map


---
### name
- **Property**: `name`
- **Type**: <Type type='string' />
- **Optional**: `false` 
- **Usage**:

 
Name of the event. This is its identifier. it allows you to retrieve an event and place it on the map

