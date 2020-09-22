# The structure of the project

## It is necessary to know

You are free to build your own structure but we propose a new structure below. It is still necessary to separate the server and client code even for an offline RPG.

## Explanation of the structure

Here is the structure of a project

* src
    * client
        * event.ts (optional)
        * gui (optional)
            * (your-gui).vue
        * characters (optional)
            * (your-chara).ts 
            * assets
                (your-chara).png
        * maps (optional)
            * (your-tileset).ts 
            * assets
                (your-tileset).png
        * index.html
        * main.ts
        * player.ts (optional)
        * rpg.ts
    * server
        * maps (optional)
            * tmx
                * (your-map).tmx
                * (your-tileset).tsx
            * (your-map).ts
        * events (optional)
            * (your-event).ts
        * database (optional)
            * actors
            * classes
            * items
            * skills
            * states
            * weapons
            * index.ts
        * player.ts (optional)
        * main.ts
        * rpg.ts

As you can see, many of the files are optional. For example, you don't have to put events or a database or even maps. Just know that your game will not contain much :)

However the client and the server have at least one : `main.ts` and `rpg.ts`. These two files are important because they allow to start the game