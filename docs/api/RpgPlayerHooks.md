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
:::
---
### onJoinMap
- **Property**: `onJoinMap`
- **Type**:  (player: [RpgPlayer](/classes/player), map: [RpgMap](/classes/map)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player joins the map


---
### onConnected
- **Property**: `onConnected`
- **Type**:  (player: [RpgPlayer](/classes/player)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player is connected to the server


---
### onInput
- **Property**: `onInput`
- **Type**:  (player: [RpgPlayer](/classes/player), data: { input: any }) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player presses a key on the client side


---
### onLeaveMap
- **Property**: `onLeaveMap`
- **Type**:  (player: [RpgPlayer](/classes/player), map: [RpgMap](/classes/map)) =&gt; any 
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
- **Type**:  (player: [RpgPlayer](/classes/player), nbLevel: number) =&gt; any 
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
- **Type**:  (player: [RpgPlayer](/classes/player)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player's HP drops to 0


---
### onDisconnected
- **Property**: `onDisconnected`
- **Type**:  (player: [RpgPlayer](/classes/player)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player leaves the server


---
### onInShape
- **Since**: beta.3
- **Property**: `onInShape`
- **Type**:  (player: [RpgPlayer](/classes/player), shape: [RpgShape](/classes/shape)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player enters the shape


---
### onOutShape
- **Since**: beta.3
- **Property**: `onOutShape`
- **Type**:  (player: [RpgPlayer](/classes/player), shape: [RpgShape](/classes/shape)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the player leaves the shape

