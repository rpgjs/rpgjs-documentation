::: tip Summary
- [Apply Damage](#apply-damage)
:::
---
### Apply Damage
- **Method**: `player.applyDamage(otherPlayer,skill)`
- **Arguments**:
    - {<Type type=' <a href="/commands/common.html">RpgPlayer</a>' />} `otherPlayer`. The attacking player (Optional: `false`)
    - {<Type type='any' />} `skill`.  (Optional: `true`)
- **Return**: <Type type='object' />   
- **Usage**:

 
Apply damage. Player will lose HP. the `otherPlayer` parameter is the other player, the one who attacks.

If you don't set the skill parameter, it will be a physical attack.
The attack formula is already defined but you can customize it in the server options

```ts
player.applyDamage(otherPlayer) // returns { damage: number }
```

