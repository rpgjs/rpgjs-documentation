::: tip Summary
- [onAddSprite](#onaddsprite)
- [onRemoveSprite](#onremovesprite)
- [onBeforeLoading](#onbeforeloading)
- [onAfterLoading](#onafterloading)
- [onChanges](#onchanges)
- [onDraw](#ondraw)
- [onMapLoading](#onmaploading)
:::
---
### onAddSprite
- **Property**: `onAddSprite`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgScene</a>, sprite: RpgComponent) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


a sprite has been added on the scene


---
### onRemoveSprite
- **Property**: `onRemoveSprite`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgScene</a>, sprite: <a href="/classes/sprite.html">RpgSprite</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


a sprite has been removed on the scene


---
### onBeforeLoading
- **Property**: `onBeforeLoading`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgScene</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


Before the scene is loaded


---
### onAfterLoading
- **Property**: `onAfterLoading`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgScene</a>) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 When the scene is loaded (Image of the loaded tileset, drawing completed and viewport assigned)


---
### onChanges
- **Property**: `onChanges`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgScene</a>, obj: { data: any, partial: any }) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


When server data changes on the map (events, players, or other)


---
### onDraw
- **Property**: `onDraw`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgScene</a>, t: number) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


 the scene is drawn


---
### onMapLoading
- **Property**: `onMapLoading`
- **Type**: <Type type=' (scene: <a href="/classes/scene-map.html">RpgSceneMap</a>, loader: PIXI.Loader) =&gt; any ' />
- **Optional**: `true` 
- **Usage**:


The map and resources are being loaded

