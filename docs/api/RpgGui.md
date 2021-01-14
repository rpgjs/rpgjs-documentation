::: tip Summary
- [Get a GUI](#get-a-gui)
- [Get all GUI](#get-all-gui)
- [GUI Exists ?](#gui-exists-?)
- [Display GUI](#display-gui)
- [Hide GUI](#hide-gui)
:::
---
### Get a GUI
- **Method**: `RpgGui.get(id)`
- **Arguments**:
    - {string} `id`.  (Optional: `false`)
- **Return**:  { data: any, display: boolean }    
- **Usage**:


Get a GUI. You retrieve GUI data and information whether it is displayed or not

```ts
import { RpgGui } from '@rpgjs/client'

const gui = RpgGui.get('my-gui') 
console.log(gui.display) // false
```


---
### Get all GUI
- **Method**: `RpgGui.getAll()`
- **Return**:  { [guiName]: { data: any, display: boolean }  }   
- **Usage**:


Get all GUI. You retrieve GUI data and information whether it is displayed or not

```ts
import { RpgGui } from '@rpgjs/client'

const gui = RpgGui.getAll() 
console.log(gui) // { 'rpg-dialog': { data: {}, display: true } }
```


---
### GUI Exists ?
- **Method**: `RpgGui.exists(id)`
- **Arguments**:
    - {string} `id`.  (Optional: `false`)
- **Return**: boolean   
- **Usage**:


Checks if the GUI exists RpgClient's gui array

```ts
import { RpgGui } from '@rpgjs/client'

RpgGui.exists('my-gui') // true
```


---
### Display GUI
- **Method**: `RpgGui.display(id,data)`
- **Arguments**:
    - {string} `id`.  (Optional: `false`)
    - {object} `data`.  (Optional: `true`)
- **Return**: void   
- **Usage**:


Calls a GUI according to identifier. You can send retrievable data in the component

```ts
import { RpgGui } from '@rpgjs/client'

RpgGui.display('my-gui')
```


---
### Hide GUI
- **Method**: `RpgGui.hide(id)`
- **Arguments**:
    - {string} `id`.  (Optional: `false`)
- **Return**: void   
- **Usage**:


Hide a GUI according to its identifier

```ts
import { RpgGui } from '@rpgjs/client'

RpgGui.hide('my-gui')
```

