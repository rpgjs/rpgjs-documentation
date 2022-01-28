::: tip Summary
- [onStart](#onstart)
- [onStep](#onstep)
- [onInput](#oninput)
- [onConnected](#onconnected)
- [onDisconnect](#ondisconnect)
- [onConnectError](#onconnecterror)
- [onWindowResize](#onwindowresize)
:::
---
### onStart
- **Property**: `onStart`
- **Type**: <Type type=' (engine: <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>) =&gt; boolean | any ' />
- **Optional**: `true` 
- **Usage**:


When the engine is started. If you send false, you prevent the client from connecting to the server


---
### onStep
- **Property**: `onStep`
- **Type**: <Type type=' (engine: <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>, t: number) =&gt; boolean | any ' />
- **Optional**: `true` 
- **Usage**:


Each frame


---
### onInput
- **Property**: `onInput`
- **Type**: <Type type=' (engine: <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>, obj: { input: string, playerId: number }) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Recover keys from the pressed keyboard


---
### onConnected
- **Property**: `onConnected`
- **Type**: <Type type=' (engine: <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>, socket: any) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Called when the user is connected to the server


---
### onDisconnect
- **Property**: `onDisconnect`
- **Type**: <Type type=' (engine: <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>, reason: any, socket: any) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Called when the user is disconnected to the server


---
### onConnectError
- **Property**: `onConnectError`
- **Type**: <Type type=' (engine: <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>, err: any, socket: any) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Called when there was a connection error


---
### onWindowResize
- **Since**: 3.0.0-beta.4
- **Property**: `onWindowResize`
- **Type**: <Type type=' () =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Called when window is resized

