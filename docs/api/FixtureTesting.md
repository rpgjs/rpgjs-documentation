::: tip Summary
- [Create Client](#create-client)
- [Add Other Client In Map](#add-other-client-in-map)
- [server](#server)
- [Change Map](#change-map)
:::
---
### Create Client
- **Method**: `createClient()`
- **Return**: <Type type='Promise&lt;ClientTesting&gt;' />   
- **Usage**:


Allows you to create a client and get fixtures to manipulate it during tests


---
### Add Other Client In Map
- **Since**: 3.2.0
- **Method**: `addOtherClientInMap(firstClient,mapId,position?)`
- **Arguments**:
    - {<Type type=' <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>' />} `firstClient`.  (Optional: `false`)
    - {<Type type='string' />} `mapId`.  (Optional: `false`)
    - {<Type type='Position | string' />} `position`.  (Optional: `true`)
- **Return**: <Type type='Promise&lt;ClientTesting&gt;' />   
- **Usage**:


Create another client, add it to the map and send the information to the first client


---
### server
- **Property**: `server`
- **Type**: <Type type=' <a href="/classes/server-engine.html">RpgServerEngine</a>' />
- **Optional**: `false` 
- **Usage**:


Get server


---
### Change Map
- **Method**: `changeMap(client,mapId,position?)`
- **Arguments**:
    - {<Type type=' <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>' />} `client`.  (Optional: `false`)
    - {<Type type='string' />} `mapId`.  (Optional: `false`)
    - {<Type type='Position | string' />} `position`.  (Optional: `true`)
- **Return**: <Type type='Promise&lt;void&gt;' />   
- **Usage**:


Allows you to change the map. This function on the tests also allows to render with PIXI on the client side

