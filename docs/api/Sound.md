::: tip Summary
- [sound](#sound)
- [loop](#loop)
- [volume](#volume)
- [id](#id)
- [sound](#sound)
- [sounds](#sounds)
:::
---
### sound
- **Property**: `sound`
- **Type**: <Type type='string' />
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
- **Type**: <Type type='boolean' />
- **Optional**: `true` 
- **Usage**:

 
The sound will restart at the beginning when it is finished.


---
### volume
- **Property**: `volume`
- **Type**: <Type type='number' />
- **Optional**: `true` 
- **Usage**:

 
Volume


---
### id
- **Property**: `id`
- **Type**: <Type type='string' />
- **Optional**: `true` 
- **Usage**:

 
Sound identifier.

> Do not use the `sounds` property


---
### sound
- **Property**: `sound`
- **Type**: <Type type='string' />
- **Optional**: `true` 
- **Usage**:

 
The link to the sound

> Do not use the `images` property
> Remember to wrap the link to the image with the `require` function.

```ts
sound: require('./assets/sound.ogg')
```


---
### sounds
- **Property**: `sounds`
- **Type**: <Type type=' { [id: string]: string } ' />
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

