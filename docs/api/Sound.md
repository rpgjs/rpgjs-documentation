::: tip Summary
- [sounds](#sounds)
- [id](#id)
- [sound](#sound)
- [loop](#loop)
- [volume](#volume)
:::
---
### sounds
- **Property**: `sounds`
- **Type**:  { [id: string]: string } 
- **Optional**: `true` 
- **Usage**:

 
Put the different sounds that are concerned by the properties below.
The key of the object is the identifier of the sound and the value and the link to the sound.

> Remember to wrap the link to the sound with the `require` function.

```ts
sounds: {
   hero: require('./assets/sound.ogg')
}
```


---
### id
- **Property**: `id`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
Sound identifier.

> Do not use the `sounds` property


---
### sound
- **Property**: `sound`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The link to the sound

> Do not use the `images` property
> Remember to wrap the link to the image with the `require` function.

```ts
sound: require('./assets/sound.ogg')
```


---
### loop
- **Property**: `loop`
- **Type**: boolean
- **Optional**: `true` 
- **Usage**:

 
The sound will restart at the beginning when it is finished.


---
### volume
- **Property**: `volume`
- **Type**: number
- **Optional**: `true` 
- **Usage**:

 
Volume

