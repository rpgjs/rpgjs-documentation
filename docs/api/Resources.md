::: tip Summary
- [Get/Set image link](#get-set-image-link)
- [Get/Set sound link](#get-set-sound-link)
:::
---
### Get/Set image link
- **Property**: `spritesheets`
- **Type**:  Map&lt; string, string &gt; 
- **Optional**: `false` 
- **Usage**:


Get/Set images in resources
```ts
 import { RpgResource } from '@rpg/client'
 const fileLink = RpgResource.spritesheets.get('resource_id')
```

---
### Get/Set sound link
- **Property**: `sounds`
- **Type**:  Map&lt; string, string &gt; 
- **Optional**: `false` 
- **Usage**:


Get/Set sounds in resources
```ts
 import { RpgResource } from '@rpg/client'
 const fileLink = RpgResource.sounds.get('resource_id')
```
