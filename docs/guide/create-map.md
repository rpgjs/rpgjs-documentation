# Create map

## Prerequisites

To create a map, you need the Tiled Map Editor : [https://www.mapeditor.org/](https://www.mapeditor.org/)

## It is necessary to know

1. Note that maps are created on the server side. The map data is known only when the player goes to the map.
2. Maps are cached. If the server is not restarted, it will draw from memory to retrieve the map. If this is the first time it is opened, there will be a file reading (MMORPG) or an ajax request (RPG).

## Create map with Tiled Map Editor

## Create Map class

```ts
import { RpgMap, MapData } from 'rpgjs/server'

@MapData({
    id: 'medieval',
    file: __dirname + '/tmx/medieval.tmx',
    name: 'Town' // optional
})
export class MedievalMap extends RpgMap { }
```

## Add Map in your Game

In `server/main.ts` :

```ts
import { RpgServer, RpgServerEngine } from 'rpgjs/server'
import { MedievalMap } from './maps/medieval.ts'

@RpgServer({
    maps:  [
        MedievalMap
    ]
})
export default class RPG extends RpgServerEngine { }
```