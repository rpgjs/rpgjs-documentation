
---
### Show Text 
- **Method**: `player.showText(text,options)`
- **Arguments**:
    - `{string}` `text`.  (Optional: `false`)
    - `{object}` `options`. the different options, see usage below (Optional: `true`)
- **Return**: `Promise`   
- **Usage**:


Show a text. This is a graphical interface already built

```ts
player.showText('Hello World')
```

The method returns a promise. It is resolved when the dialog box is closed.

```ts
await player.showText('Hello World')
// dialog box is closed, then ...
```

**Option: position**

You can define how the dialog box is displayed:
- top
- middle
- bottom

(bottom by default)

```ts
player.showText('Hello World', {
     position: 'top'
})
```

**Option: fullWidth**

`boolean` (true by default)

Indicate that the dialog box will take the full width of the screen.

```ts
player.showText('Hello World', {
     fullWidth: true
})
```

**Option: autoClose**

`boolean` (false by default)

If false, the user will have to press Enter to close the dialog box.

 ```ts
player.showText('Hello World', {
     autoClose: true
})
```

**Option: typewriterEffect**

`boolean` (true by default)

Performs a typewriter effect

 ```ts
player.showText('Hello World', {
     typewriterEffect: false
})
```

**Option: talkWith**

`RpgPlayer` (nothing by default)

If you specify the event or another player, the other player will stop his or her movement and look in the player's direction.

 ```ts
// Code in an event
player.showText('Hello World', {
     talkWith: this
})
```

