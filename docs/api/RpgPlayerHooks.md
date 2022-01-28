::: tip Summary
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
:::
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

