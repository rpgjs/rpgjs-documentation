::: tip Summary
- [Add Animation in timeline](#add-animation-in-timeline)
- [Create the animation array](#create-the-animation-array)
:::
---
### Add Animation in timeline
- **Enum**: `Function`

| Tag           | Description |
| ------------- |------------:|
| Ease.linear | linear |
| Ease.easeInQuad | easeInQuad |
| Ease.easeOutQuad | easeOutQuad |
| Ease.easeInOutQuad | easeInOutQuad |
| Ease.easeInCubic | easeInCubic |
| Ease.easeOutCubic | easeOutCubic |
| Ease.easeInOutCubic | easeInOutCubic |
| Ease.easeInQuart | easeInQuart |
| Ease.easeOutQuart | easeOutQuart |
| Ease.easeInOutQuart | easeInOutQuart |
| Ease.easeInQuint | easeInQuint |
| Ease.easeOutQuint | easeOutQuint |
| Ease.easeInOutQuint | easeInOutQuint |
| Ease.easeInSine | easeInSine |
| Ease.easeOutSine | easeOutSine |
| Ease.easeInOutSine | easeInOutSine |
| Ease.easeInExpo | easeInExpo |
| Ease.easeOutExpo | easeOutExpo |
| Ease.easeInOutExpo | easeInOutExpo |
| Ease.easeInCirc | easeInCirc |
| Ease.easeOutCirc | easeOutCirc |
| Ease.easeInOutCirc | easeInOutCirc |
| Ease.easeInElastic | easeInElastic |
| Ease.easeOutElastic | easeOutElastic |
| Ease.easeInOutElastic | easeInOutElastic |
| Ease.easeInBack | easeInBack |
| Ease.easeOutBack | easeOutBack |
| Ease.easeInOutBack | easeInOutBack |
| Ease.easeInBounce | easeInBounce |
| Ease.easeOutBounce | easeOutBounce |
- **Method**: `timeline.add(duration,cb?,transform?)`
- **Arguments**:
    - {<Type type='number' />} `duration`.  (Optional: `false`)
    - {<Type type=' (obj?: number, time?: number) =&gt; TransformOptions[] ' />} `cb`.  (Optional: `true`)
    - {<Type type=' [property: string]: { to:number, from: number: easing?: Function } ' />} `transform`.  (Optional: `true`)
- **Return**: <Type type='<a href="/classes/spritesheet.html#create-animation-with-timeline-system">Timeline</a>' />   
- **Usage**:


Allows you to create complex animations more easily. For example, to display a movement with an Easing function

```ts
import { Timeline, Ease } from '@rpgjs/client'

new Timeline()
     .add(30, ({ scale }) => [{
         frameX: 0,
         frameY: 1,
         scale: [scale]
     }], {
         scale: {
             from: 0,
             to: 1,
             easing: Ease.easeOutBounce
         }
     })
     .add(100)
     .create()
```

Here we say

- For a duration of 30 seconds
- A function that will be called every 1 frame with the `scale` property defined in transform
- An object of transformation. Define the properties of your choice to be passed to the callback function
     - `to`: the starting value
     - `from`: the end value
     - `easing`: An easing function (By default, it is a linear function)

Note that if you just put a duration (`add(100)`), it will only put a pause on the animation

Easing functions available but you can create your own

```ts
function myEase(t: number, b: number, c: number, d: number): number { }
```

`t`: current time
`b`: start value
`c`: end value
`d`: duration


---
### Create the animation array
- **Method**: `timeline.create()`
- **Return**: <Type type='FrameOptions[][]' />  animation array 
- **Usage**:


Allows you to create the animation array to assign to the `animations` property in the Spritesheet

```ts
import { Spritesheet, Timeline } from '@rpgjs/server'

@Spritesheet({
 id: 'sprite',
 image: require('./sprite.png'),
 width: 192,
 height: 228,
 framesHeight: 6,
 framesWidth: 6,
 anchor: [0.5],
 textures: {
     myanim: {
         animations: new Timeline()
                         .add(SEE THE ADD METHOD)
                         .create()    
     }   
 }
})
export class MyAnim {}
```

