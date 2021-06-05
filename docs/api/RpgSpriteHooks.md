::: tip Summary
- [onInit](#oninit)
- [onChanges](#onchanges)
- [onUpdate](#onupdate)
:::
---
### onInit
- **Property**: `onInit`
- **Type**:  (sprite: [RpgSprite](/classes/sprite)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


As soon as the sprite is initialized


---
### onChanges
- **Property**: `onChanges`
- **Type**:  (sprite: [RpgSprite](/classes/sprite), data: any, old: any) =&gt; any 
- **Optional**: `true` 
- **Usage**:


As soon as a data is changed on the server side (the name for example), you are able to know the new data but also the old data.


---
### onUpdate
- **Property**: `onUpdate`
- **Type**:  (sprite: [RpgSprite](/classes/sprite), obj: any) =&gt; any 
- **Optional**: `true` 
- **Usage**:


At each tick, the method is called

