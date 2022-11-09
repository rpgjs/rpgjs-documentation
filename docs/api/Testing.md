::: tip Summary
- [Testing ](#testing)
- [Clear ](#clear)
- [Next Tick](#next-tick)
:::
---
### Testing 
- **Method**: `testing(modules,optionsServer?,optionsClient?)`
- **Arguments**:
    - {<Type type='ModuleType[]' />} `modules`.  (Optional: `false`)
    - {<Type type='object' />} `optionsServer`.  (Optional: `true`)
    - {<Type type='object' />} `optionsClient`.  (Optional: `true`)
- **Return**: <Type type='Promise&lt;Testing&gt;' />   
- **Usage**:


Allows you to test modules


---
### Clear 
- **Method**: `clear()`
- **Return**: <Type type='void' />   
- **Usage**:


Clear caches. Use it after the end of each test

```ts
import { clear } from '@rpgjs/testing'

// with jest
afterEach(() => {
     clear()
})
```


---
### Next Tick
- **Method**: `nextTick(client,timestamp?)`
- **Arguments**:
    - {<Type type=' <a href="/classes/client-engine.html#rpgclientengine">RpgClientEngine</a>' />} `client`.  (Optional: `false`)
    - {<Type type='number' />} `timestamp`. A predefined timestamp (Optional: `true`)
- **Return**: <Type type='Promise&lt;ObjectFixtureList&gt;' />   
- **Usage**:


Allows you to make a tick:
1. on server
2. server sends data to client
3. Client retrieves data and performs inputs (move, etc.) and server reconciliation
4. A tick is performed on the client
5. A tick is performed on VueJS

