::: tip Summary
- [Apply Damage](#apply-damage)
:::
---
### Apply Damage
- **Method**: `player.applyDamage(otherPlayer,skill)`
- **Arguments**:
    - {[RpgPlayer](/classes/player)} `otherPlayer`. The attacking player (Optional: `false`)
    - {any} `skill`.  (Optional: `true`)
- **Return**: object   
- **Usage**:

 
Apply damage. Player will lose HP. the `otherPlayer` parameter is the other player, the one who attacks.

If you don't set the skill parameter, it will be a physical attack.
The attack formula is already defined but you can customize it in the server options

```ts
player.applyDamage(otherPlayer) // returns { damage: number }
```

