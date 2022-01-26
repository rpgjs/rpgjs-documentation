::: tip Summary
- [onInit](#oninit)
- [onDestroy](#ondestroy)
- [onChanges](#onchanges)
- [onUpdate](#onupdate)
- [onMove](#onmove)
:::
---
### onInit
- **Property**: `onInit`
- **Type**: <Type type=' (sprite: <a href="/classes/sprite">RpgSprite</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


As soon as the sprite is initialized


---
### onDestroy
- **Property**: `onDestroy`
- **Type**: <Type type=' (sprite: <a href="/classes/sprite">RpgSprite</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Called when the sprite is deleted


---
### onChanges
- **Property**: `onChanges`
- **Type**: <Type type=' (sprite: <a href="/classes/sprite">RpgSprite</a>, data: any, old: any) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


As soon as a data is changed on the server side (the name for example), you are able to know the new data but also the old data.


---
### onUpdate
- **Property**: `onUpdate`
- **Type**: <Type type=' (sprite: <a href="/classes/sprite">RpgSprite</a>, obj: any) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


At each tick, the method is called


---
### onMove
- **Since**: 3.beta-4
- **Property**: `onMove`
- **Type**: <Type type=' (sprite: <a href="/classes/sprite">RpgSprite</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


When the x, y positions change

