::: tip Summary
- [Get Skill](#get-skill)
- [Learn Skill](#learn-skill)
- [Forget Skill](#forget-skill)
- [Use Skill](#use-skill)
:::
---
### Get Skill
- **Method**: `player.getSkill(skillClass)`
- **Arguments**:
    - {[SkillClass](/database/skill.html)} `skillClass`.  (Optional: `false`)
- **Return**: instance of [SkillClass](/database/skill.html) | null   
- **Usage**:


Retrieves a skill. Returns null, if not found
```ts
import Fire from 'your-database/skills/fire'

player.getSkill(Fire)
 ```


---
### Learn Skill
- **Method**: `player.learnSkill(skillClass)`
- **Arguments**:
    - {[SkillClass](/database/skill.html)} `skillClass`.  (Optional: `false`)
- **Return**: instance of [SkillClass](/database/skill.html)   
- **Usage**:


Learn a skill. Attributes the coefficient 1 to the parameter INT (intelligence) if cd is not present on the class.

`onLearn()` method is called on the SkillClass

```ts
import Fire from 'your-database/skills/fire'

player.learnSkill(Fire)
 ```


---
### Forget Skill
- **Method**: `player.learnSkill(skillClass)`
- **Arguments**:
    - {[SkillClass](/database/skill.html)} `skillClass`.  (Optional: `false`)
- **Throws**:

If trying to forget a skill not learned
 ```
{
     id: SKILL_NOT_LEARNED,
     msg: '...'
}
```
---
- **Return**: instance of [SkillClass](/database/skill.html)   
- **Usage**:


Forget a skill

`onForget()` method is called on the SkillClass

```ts
import Fire from 'your-database/skills/fire'

try {
     player.forgetSkill(Fire) 
}
catch (err) {
     console.log(err)
}
 ```


---

::: warning
The realization of this property or method has not been completed.
:::
### Use Skill
- **Method**: `player.useSkill(skillClass,otherPlayer)`
- **Arguments**:
    - {[SkillClass](/database/skill.html)} `skillClass`.  (Optional: `false`)
    - {Array&lt;RpgPlayer&gt; | RpgPlayer} `otherPlayer`.  (Optional: `true`)
- **Throws**:

If the player has the `Effect.CAN_NOT_SKILL` effect 
 ```
{
     id: RESTRICTION_SKILL,
     msg: '...'
}
```
---
If the player tries to use an unlearned skill
 ```
{
     id: SKILL_NOT_LEARNED,
     msg: '...'
}
```
---
If the player does not have enough SP to use the skill
 ```
{
     id: NOT_ENOUGH_SP,
     msg: '...'
}
```
---
If the chance to use the skill has failed (defined with the `hitRate` property)
 ```
{
     id: USE_CHANCE_SKILL_FAILED,
     msg: '...'
}
```

`onUseFailed()` method is called on the SkillClass

---
- **Return**: instance of [SkillClass](/database/skill.html)   
- **Usage**:


Using a skill

`onUse()` method is called on the SkillClass

If other players are indicated then damage will be done to these other players. The method `applyDamage()` will be executed

```ts
import Fire from 'your-database/skills/fire'

try {
     player.useSkill(Fire) 
}
catch (err) {
     console.log(err)
}
 ```

or 


* ```ts
import Fire from 'your-database/skills/fire'

try {
     player.useSkill(Fire, otherPlayer) 
}
catch (err) {
     console.log(err)
}
 ```

