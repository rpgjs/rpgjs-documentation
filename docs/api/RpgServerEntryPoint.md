::: tip Summary
- [io](#io)
- [basePath](#basepath)
:::
---
### io
- **Property**: `io`
- **Type**: SocketIO or other
- **Optional**: `false` 
- **Usage**:

 
Represents socket io but you can put something else (which is of the same scheme as socket io)


---
### basePath
- **Property**: `basePath`
- **Type**: string
- **Optional**: `false` 
- **Usage**:

 
It allows you to know where the maps are located. Usually put `__dirname` for the current directory.

```ts
basePath: __dirname
``` 
