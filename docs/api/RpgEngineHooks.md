::: tip Summary
- [onStart](#onstart)
- [onStep](#onstep)
- [onInput](#oninput)
- [onConnected](#onconnected)
- [onDisconnect](#ondisconnect)
- [onConnectError](#onconnecterror)
:::
---
### onStart
- **Property**: `onStart`
- **Type**:  (engine: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine)) =&gt; boolean | any 
- **Optional**: `true` 
- **Usage**:


When the engine is started. If you send false, you prevent the client from connecting to the server


---
### onStep
- **Property**: `onStep`
- **Type**:  (engine: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine), t: number) =&gt; boolean | any 
- **Optional**: `true` 
- **Usage**:


Each frame


---
### onInput
- **Property**: `onInput`
- **Type**:  (engine: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine), obj: { input: string, playerId: number }) =&gt; any 
- **Optional**: `true` 
- **Usage**:


Recover keys from the pressed keyboard


---
### onConnected
- **Property**: `onConnected`
- **Type**:  (engine: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine), socket: any) =&gt; any 
- **Optional**: `true` 
- **Usage**:


Called when the user is connected to the server


---
### onDisconnect
- **Property**: `onDisconnect`
- **Type**:  (engine: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine), reason: any, socket: any) =&gt; any 
- **Optional**: `true` 
- **Usage**:


Called when the user is disconnected to the server


---
### onConnectError
- **Property**: `onConnectError`
- **Type**:  (engine: [[RpgClient](/classes/client)Engine](/classes/client-engine.html#rpgclientengine), err: any, socket: any) =&gt; any 
- **Optional**: `true` 
- **Usage**:


Called when there was a connection error

