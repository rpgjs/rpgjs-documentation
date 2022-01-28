::: tip Summary
- [app](#app)
- [database](#database)
- [globalConfig](#globalconfig)
- [damageFormulas](#damageformulas)
- [io](#io)
- [Add in database](#add-in-database)
- [Start Server](#start-server)
- [Send All Packets](#send-all-packets)
- [sceneMap](#scenemap)
:::
---
### app
- **Property**: `app`
- **Type**: <Type type='Express App' />
- **Optional**: `true` 
- **Usage**:


Express App Instance. If you have assigned this variable before starting the game, you can get the instance of Express


---
### database
- **Property**: `database`
- **Type**: <Type type='object' />
- **Optional**: `true` 
- **Usage**:


List of the data


---
### globalConfig
- **Property**: `globalConfig`
- **Type**: <Type type='object' />
- **Optional**: `true`
- **Read Only** 
- **Usage**:

 
retrieve the global configurations assigned at the entry point


---
### damageFormulas
- **Property**: `damageFormulas`
- **Type**: <Type type='object' />
- **Optional**: `true` 
- **Usage**:


Combat formulas


---
### io
- **Property**: `io`
- **Type**: <Type type='Socket Io Server' />
- **Optional**: `true` 
- **Usage**:


Combat formulas


---
### Add in database
- **Since**: 3.0.0-beta.4
- **Method**: `server.addInDatabase(id,data)`
- **Arguments**:
    - {<Type type='number' />} `id`. resource id (Optional: `false`)
    - {<Type type='class' />} `dataClass`. A class representing the data (Optional: `false`)
- **Return**: <Type type='void' />  
- **Example**: 
```ts
@Item({
     name: 'Potion',
     description: 'Gives 100 HP',
})
class MyItem() {}

server.addInDatabase('dynamic_item', MyItem)
``` 
- **Usage**:


Adds data to the server's database (in RAM) for later use


---
### Start Server
- **Method**: `server.start()`
- **Return**: <Type type='void' />   
- **Usage**:


Start the RPG server


---
### Send All Packets
- **Method**: `server.send()`
- **Return**: <Type type='void' />   
- **Usage**:


Sends all packages to clients. The sending is done automatically but you can decide to send yourself by calling this method (for example, for unit tests)


---
### sceneMap
- **Since**: 3.0.0-beta.4
- **Property**: `sceneMap`
- **Type**: <Type type='SceneMap' />
- **Optional**: `true` 
- **Usage**:


Return the scene that manages the maps of the game
