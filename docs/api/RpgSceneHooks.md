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
- **Type**:  (scene: [RpgScene](/classes/scene-map), sprite: [RpgSprite](/classes/sprite)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


a sprite has been added on the scene


---
### onRemoveSprite
- **Property**: `onRemoveSprite`
- **Type**:  (scene: [RpgScene](/classes/scene-map), sprite: [RpgSprite](/classes/sprite)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


a sprite has been removed on the scene


---
### onBeforeLoading
- **Property**: `onBeforeLoading`
- **Type**:  (scene: [RpgScene](/classes/scene-map)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


Before the scene is loaded


---
### onAfterLoading
- **Property**: `onAfterLoading`
- **Type**:  (scene: [RpgScene](/classes/scene-map)) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 When the scene is loaded (Image of the loaded tileset, drawing completed and viewport assigned)


---
### onChanges
- **Property**: `onChanges`
- **Type**:  (scene: [RpgScene](/classes/scene-map), obj: { data: any, partial: any }) =&gt; any 
- **Optional**: `true` 
- **Usage**:


When server data changes on the map (events, players, or other)


---
### onDraw
- **Property**: `onDraw`
- **Type**:  (scene: [RpgScene](/classes/scene-map), t: number) =&gt; any 
- **Optional**: `true` 
- **Usage**:


 the scene is drawn


---
### onMapLoading
- **Property**: `onMapLoading`
- **Type**:  (scene: [[RpgScene](/classes/scene-map)Map](/classes/scene-map), loader: PIXI.Loader) =&gt; any 
- **Optional**: `true` 
- **Usage**:


The map and resources are being loaded

