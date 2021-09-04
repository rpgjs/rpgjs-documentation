::: tip Summary
- [app](#app)
- [database](#database)
- [globalConfig](#globalconfig)
- [damageFormulas](#damageformulas)
- [io](#io)
:::
---
### app
- **Property**: `app`
- **Type**: Express App
- **Optional**: `true` 
- **Usage**:


Express App Instance. If you have assigned this variable before starting the game, you can get the instance of Express


---
### database
- **Property**: `database`
- **Type**: object
- **Optional**: `true` 
- **Usage**:


List of the data


---
### globalConfig
- **Property**: `globalConfig`
- **Type**: object
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
retrieve the global configurations assigned at the entry point


---
### damageFormulas
- **Property**: `damageFormulas`
- **Type**: object
- **Optional**: `true` 
- **Usage**:


Combat formulas


---
### io
- **Property**: `io`
- **Type**: Socket Io Server
- **Optional**: `true` 
- **Usage**:


Combat formulas


---
### undefined
- **Method**: `server.start()`
- **Return**: void   
- **Usage**:


Start the RPG server

