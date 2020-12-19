::: tip Summary
- [Existing effects](#existing-effects)
:::
---
### Existing effects
- **Enum**: `string`

| Tag           | Description |
| ------------- |------------:|
| Effect.NONE | No effect |
| Effect.CAN_NOT_SKILL | The player will not be able to use a skill. The `player.useSkill()` method will return an exception with the `RESTRICTION_SKILL` id |
| Effect.CAN_NOT_ITEM | The player may not use an item. The `player.useItem()` method will return an exception with the `RESTRICTION_ITEM` id |
| Effect.GUARD | The player goes on defense. When using applyDamage(), damage will be reduced using the damageGuard formula |
| Effect.SUPER_GUARD | Damage with the applyDamage() method will be divided by 4 |
| Effect.HALF_SP_COST | The cost of the SP will be halved when calling the `useSkill()` method | 
- **Usage**:

 
