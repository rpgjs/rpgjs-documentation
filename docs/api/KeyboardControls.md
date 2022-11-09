::: tip Summary
- [Get Control](#get-control)
- [Apply Control](#apply-control)
- [Stop Inputs](#stop-inputs)
- [Listen Inputs](#listen-inputs)
- [Set Inputs](#set-inputs)
:::
---
### Get Control
- **Method**: `getControl(inputName)`
- **Arguments**:
    - {<Type type='string' />} `inputName`.  (Optional: `false`)
- **Return**: <Type type=' { actionName: string, options: any } | undefined ' />   
- **Usage**:


From the name of the entry, we retrieve the control information

```ts 
import { Input } from '@rpgjs/client'

// In method hooks, client is RpgClientEngine
client.controls.getControl(Input.Enter)
if (control) {
   console.log(control.actionName) // action
}
```

---
### Apply Control
- **Method**: `applyControl(controlName,isDown)`
- **Arguments**:
    - {<Type type='string' />} `controlName`.  (Optional: `false`)
    - {<Type type='boolean' />} `isDown`.  (Optional: `true`)
- **Return**: <Type type='Promise&lt;void&gt;' />   
- **Usage**:


Triggers an input according to the name of the control

```ts 
import { Control } from '@rpgjs/client'

// In method hooks, client is RpgClientEngine
client.controls.applyControl(Control.Action)
```

You can put a second parameter or indicate on whether the key is pressed or released

```ts 
import { Control } from '@rpgjs/client'

client.controls.applyControl(Control.Up, true) // keydown
client.controls.applyControl(Control.Up, false) // keyup
```

---
### Stop Inputs
- **Method**: `stopInputs()`
- **Return**: <Type type='void' />   
- **Usage**:


Stop listening to the inputs. Pressing a key won't do anything


---
### Listen Inputs
- **Method**: `listenInputs()`
- **Return**: <Type type='void' />   
- **Usage**:


Listen to the inputs again


---
### Set Inputs
- **Enum**: `string`

| Tag           | Description |
| ------------- |------------:|
| Control.Up | up |
| Control.Down | down |
| Control.Left | left |
| Control.Right | right |
| Control.Action | action |
| Control.Back | back |
- **Method**: `setInputs(inputs)`
- **Arguments**:
    - {<Type type='object' />} `inputs`.  (Optional: `false`) 
- **Usage**:


Assign custom inputs to the scene

The object is the following:

* the key of the object is the name of the control. Either it is existing controls (Up, Dow, Left, Right, Action, Back) or customized controls
* The value is an object representing control information:
     * repeat {boolean} The key can be held down to repeat the action. (false by default)
     * bind {string | string[]} To which key is linked the control
     * method {Function} Function to be triggered. If you do not set this property, the name of the control is sent directly to the server.
     * delay {object|number} (since v3.2.0) Indicates how long (in milliseconds) the player can press the key again to perform the action
         * delay.duration
         * delay.otherControls {string | string[]} Indicates the other controls that will also have the delay at the same time

```ts 
import { Control, Input } from '@rpgjs/client'

// In method hooks, client is RpgClientEngine
client.controls.setInputs({
     [Control.Up]: {
         repeat: true,
         bind: Input.Up
     },
     [Control.Down]: {
         repeat: true,
         bind: Input.Down
     },
     [Control.Right]: {
         repeat: true,
         bind: Input.Right
     },
     [Control.Left]: {
         repeat: true,
         bind: Input.Left
     },
     [Control.Action]: {
         bind: [Input.Space, Input.Enter]
     },
     [Control.Back]: {
         bind: Input.Escape
     },

     // The myscustom1 control is sent to the server when the A key is pressed.
     mycustom1: {
         bind: Input.A
     },

     // the myAction method is executed when the B key is pressed
     mycustom2: {
         bind: Input.B,
         method({ actionName }) {
             console.log('cool', actionName)
         }
     },

     // The player can redo the action after 400ms
     mycustom3: {
         bind: Input.C,
         delay: 400 // ms
     },

     // The player can redo the action (mycustom4) and the directions after 400ms
     mycustom4: {
         bind: Input.C,
         delay: {
             duration: 400,
             otherControls: [Control.Up, Control.Down, Control.Left, Control.Right]
         }
     }
 })

```
