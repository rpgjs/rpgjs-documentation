::: tip Summary
- [props](#props)
- [onJoinMap](#onjoinmap)
- [onConnected](#onconnected)
- [onInput](#oninput)
- [onLeaveMap](#onleavemap)
- [onLevelUp](#onlevelup)
- [onDead](#ondead)
- [onDisconnected](#ondisconnected)
- [onInShape](#oninshape)
- [onOutShape](#onoutshape)
- [onMove](#onmove)
- [canChangeMap](#canchangemap)
:::
---
### props
- **Since**: 3.0.0-beta.9
- **Property**: `props`
- **Type**: <Type type='object' />
- **Optional**: `true` 
- **Usage**:


 Set custom properties on the player. Several interests:
1.  The property is shared with the customer
2. If you save with player.save(), the property will be saved to be reloaded later
3. If you use horizontal scaling, the property will be kept in memory if the player changes the map and this map is on another server

Example:

```ts
import { RpgPlayerHooks } from '@rpgjs/server'

declare module '@rpgjs/server' {
 export interface RpgPlayer {
     nbWood: number
 }
}

export const player: RpgPlayerHooks = {
 props: {
     nbWood: Number
 }
}
```

This is a simple example. Let's say that the player can have a number of harvested woods, then 
1. you must specify the type for Typescript
2. Add the property in props

You can also set up with this object:

```
 {
     $default: <any> (undefined by default), 
     $syncWithClient: <boolean> (true by default),
     $permanent: <boolean> (true by default)
 }
 ```

- Indicate if the property should be shared with the client

Example:

```ts
export const player: RpgPlayerHooks = {
 props: {
     secretProp: {
         $syncWithClient: false
     }
 }
}
```

- Indicate if the property should be registered in a database. If the data is just temporary to use on the current map:

```ts
export const player: RpgPlayerHooks = {
 props: {
     tmpProp: {
         $permanent: false
     }
 }
}
```


---
### onJoinMap
- **Property**: `onJoinMap`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, map: <a href="/classes/map.html">RpgMap</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player joins the map


---
### onConnected
- **Property**: `onConnected`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player is connected to the server


---
### onInput
- **Property**: `onInput`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, data: { input: Direction | Control | string, moving: boolean }) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player presses a key on the client side


---
### onLeaveMap
- **Property**: `onLeaveMap`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, map: <a href="/classes/map.html">RpgMap</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player leaves the map


---
### onLevelUp
::: warning
Stability: 1 - Experimental
This feature is subject to change, and is gated by a command line flag.
It may change or be removed in future versions.
:::
    
- **Property**: `onLevelUp`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, nbLevel: number) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player increases one level


---
### onDead
::: warning
Stability: 1 - Experimental
This feature is subject to change, and is gated by a command line flag.
It may change or be removed in future versions.
:::
    
- **Property**: `onDead`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player's HP drops to 0


---
### onDisconnected
- **Property**: `onDisconnected`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player leaves the server


---
### onInShape
- **Property**: `onInShape`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, shape: <a href="/classes/shape.html">RpgShape</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player enters the shape


---
### onOutShape
- **Property**: `onOutShape`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, shape: <a href="/classes/shape.html">RpgShape</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the player leaves the shape


---
### onMove
- **Since**: 3.0.0-beta.4
- **Property**: `onMove`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


When the x, y positions change


---
### canChangeMap
- **Since**: 3.0.0-beta.8
- **Property**: `canChangeMap`
- **Type**: <Type type=' (player: <a href="/commands/common.html">RpgPlayer</a>, nextMap: RpgClassMap&lt <a href="/classes/map.html">RpgMap</a>&gt;) =&gt;  boolean | Promise&lt;boolean&gt; ' />
- **Optional**: `true` 
- **Usage**:


Allow or not the player to switch maps. `nexMap` parameter is the retrieved RpgMap class and not the instance

