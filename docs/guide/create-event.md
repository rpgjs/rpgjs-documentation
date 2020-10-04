# Create an in-game event

## Prerequisites

1. You have already created a map

## It is necessary to know

1. Events are an integral part of the scenario of your game. You should know that it has 2 possible modes for events:
    1. **The shared mode**. The visibility, positions, direction, speed and graph of the event is seen by all players on the map. For example, a monster
    2. **The scenario mode**. All features of the event are seen only by the player. Thus, the player can move forward in the scenario without the event affecting other players.

2. Each event has a life cycle (created, action, contact with a player, property change detection). In the different hooks of the cycle, you can perform commands on a player (or players) like "display a text", "add an item", etc.

## Create a character. Shared mode

First of all, add a file in `src/server/events/chara.ts`

```ts 
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1',
    syncAll: true
})
export class CharaEvent extends RpgEvent {

    onInit(player: RpgPlayer) {
    }

    onAction(player: RpgPlayer) {
       // here, the controls on the player
    }
}
```

Here we have two hooks: 
1. `onInit()` is a method called when the event is initialized (put on the map)
2. `onAction()` is a method called when the player is in contact with the event and presses the Action key (space or enter).

Then in each method, you can make commands, either on the event, on the player concerned, or on a set of players

### Dialogue with a non-player character


The idea is to put an appearance as soon as the event is initialized.

```ts 
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1',
    syncAll: true
})
export class CharaEvent extends RpgEvent {
    onInit() {
        this.setGraphic('chara')
    }
}
```

Then, when the player interacts with the event, you are asked to display a dialog about the player.

```ts 
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1',
    syncAll: true
})
export class CharaEvent extends RpgEvent {
    onInit() {
        this.setGraphic('chara')
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hello World')
    }
}
```
> You have to know that there are several commands, here we just display a text. In fact, it opens a predefined GUI.
> We use `async/await` because we wait for the player to press Enter after the dialog to continue the other instructions.

#### Example: Earn gold

Here is a more complete example. It shows a small scenario. It is important to know that this event will be seen by everyone. However, the action will be independent to each player :

```ts 
import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1',
    syncAll: true
})
export class CharaEvent extends RpgEvent {
    onInit() {
        this.setGraphic('chara')
    }

    async onAction(player: RpgPlayer) {
        if (player.getVariable('GOLD')) {
            player.showText('I already gave you gold!')
            return
        }
        await player.showText('I give you 10 gold')
        player.gold += 10
        player.setVariable('GOLD', true)
    }
}
```

## Create a character. scenario mode