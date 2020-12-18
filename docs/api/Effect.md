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
- **Usage**:

 
