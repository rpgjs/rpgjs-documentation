::: tip Summary
- [Set variable](#set-variable)
- [Get variable](#get-variable)
- [Remove variable](#remove-variable)
:::
---
### Set variable
- **Method**: `player.setVariable(key,val)`
- **Arguments**:
    - {<Type type='string' />} `key`.  (Optional: `false`)
    - {<Type type='any' />} `val`.  (Optional: `false`)
- **Return**: <Type type='void' />   
- **Usage**:

 
Assign a variable to the player

```ts
player.setVariable('OPEN_CHEST', true)
```


---
### Get variable
- **Method**: `player.setVariable(key,val)`
- **Arguments**:
    - {<Type type='string' />} `key`.  (Optional: `false`)
- **Return**: <Type type='any' />   
- **Usage**:

 
Get a variable

```ts
const val = player.getVariable('OPEN_CHEST')
```


---
### Remove variable
- **Method**: `player.removeVariable(key)`
- **Arguments**:
    - {<Type type='string' />} `key`.  (Optional: `false`)
- **Return**: <Type type='boolean' />  if a variable existed and has been removed, or false if the variable does not exist. 
- **Usage**:

 
Remove a variable

```ts
player.removeVariable('OPEN_CHEST')
```

