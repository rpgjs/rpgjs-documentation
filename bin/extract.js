const parser = require('comment-parser')
const fs = require('fs')

const baseUrl = __dirname + '/../../RPGJS/'
const destination  = __dirname + '/../docs/api/'

const open = function(path) {
    return fs
        .readdirSync(baseUrl + path)
        .map(file => `${baseUrl}${path}/${file}`)
        .filter(file => {
            const isDir = fs.lstatSync(file).isDirectory()
            return !isDir
        })
}

const files = [
    ...open('packages/database/src'),
    ...open('packages/database/src/interfaces'),
    ...open('packages/server/src/Player'),
    ...open('packages/common/src'),
    ...open('packages/server/src'),
    ...open('packages/server/src/decorators'),
    ...open('packages/client/src/Sprite'),
    ...open('packages/client/src/Sound'),
    ...open('packages/client/src/Scene'),
    ...open('packages/client/src/Effects'),
    ...open('packages/client/src'),
    ...open('packages/common/src/gui')
]

const types = {
    Effect: '/database/effect.html',
    Element: '/database/element.html',
    StateClass: '/database/state.html',
    ItemClass: '/database/item.html',
    SkillClass: '/database/skill.html',
    WeaponClass: '/database/weapon.html',
    ArmorClass: '/database/armor.html',
    ActorClass: '/database/actor.html',
    ClassClass: '/database/class.html',
    Move: '/commands/move.html#move',
    RpgPlayer: '/classes/player',
    RpgMap: '/classes/map',
    RpgEvent: '/classes/event',
    RpgServer: '/classes/server',
    RpgClientEngine: '/classes/client-engine.html#rpgclientengine',
    RpgClient: '/classes/client',
    RpgSprite: '/classes/sprite',
    RpgGui: '/classes/gui',
    RpgSceneMap: '/classes/scene-map',
    RpgScene: '/classes/scene-map',
    Sound: '/classes/sound',
    RpgShape: '/classes/shape',
    Timeline: '/classes/spritesheet.html#create-animation-with-timeline-system',
    SpriteSheet: '/classes/spritesheet',
    'PIXI.Container': 'https://pixijs.download/dev/docs/PIXI.Container.html',
    'PIXI.Sprite': 'https://pixijs.download/dev/docs/PIXI.Sprite.html',
    'PIXI.Viewport': 'https://github.com/davidfig/pixi-viewport',
    Observable: 'https://rxjs.dev/guide/observable',
    KeyboardControls: '/classes/keyboard.html'
}

function toLink(type) {
    for (let list in types) {
        let regexp = new RegExp(`(${list})`, 'g')
        type = type.replace(regexp, `[$1](${types[list]})`)
        type = type.replace(/>/g, '&gt;')
        type = type.replace(/</g, '&lt;')
    }
    return type
}

function createSummary(summary) {
    let text = '::: tip Summary\n'
    for (let title of summary) {
        if (!title) continue
        text += `- [${title}](#${title.toLowerCase().trim().replace(/[ \/]/g, '-')})\n`
    }
    text += ':::'
    return text
}

let md = {}
let summary = {}
for (let file of files) {
    const code = fs.readFileSync(file, 'utf-8')
    const comments = parser(code, {
        trim: false
    })
    
    for (let comment of comments) {
        const { tags, description } = comment
        const tag = name => tags.find(tag => tag.tag == name)
        const memberofs = tags.filter(tag => tag.tag == 'memberof')
        for (let memberof of memberofs) {  
            if (!md[memberof.name]) md[memberof.name] = ''
            md[memberof.name] += `
---
`
        const title = tag('title') ? `${tag('title').name} ${tag('title').description}` : tag('prop')?.name
        if (!summary[memberof.name]) summary[memberof.name] = []
        summary[memberof.name].push(title)

md[memberof.name] += 
`### ${title}`

        if (tag('todo')) {
    md[memberof.name] += `
::: warning
The realization of this property or method has not been completed.
:::
`
        }

        const stability = tag('stability')

        if (stability) {
            switch (+stability.name) {
                case 0:
                    md[memberof.name] += `
::: danger
Stability: 0 - Deprecated
This feature is known to be problematic, and changes are
planned.  Do not rely on it.  Use of the feature may cause warnings.  Backwards
compatibility should not be expected.
:::
`
                    break;
                    case 1:
                    md[memberof.name] += `
::: warning
Stability: 1 - Experimental
This feature is subject to change, and is gated by a command line flag.
It may change or be removed in future versions.
:::
    `
    break;
            }
        }

        if (tag('since')) {
            md[memberof.name] += `
- **Since**: ${tag('since').name}`
        }

        if (tag('enum')) {
md[memberof.name] += `
- **Enum**: \`${tag('enum').type}\`

| Tag           | Description |
| ------------- |------------:|`
            const description = tag('enum').description
            const lines = description.split('\n')
            for (let line of lines) {
                md[memberof.name] += `
| ${line} |`
            }
        }
       
        if (tag('prop')) {
            md[memberof.name] += 
`
- **Property**: \`${tag('prop').name}\`
- **Type**: ${toLink(tag('prop').type)}
- **Optional**: \`${tag('prop').optional}\``
        }

        if (tag('readonly')) {
            md[memberof.name] += 
`
- **Read Only**`
        }

        if (tag('method')) {
            md[memberof.name] += 
`
- **Method**: \`${tag('method').name}\``
        }

        if (tag('param')) {
            md[memberof.name] += 
`
- **Arguments**:`
            for(let tag of tags) {
                if (tag.tag != 'param') continue
                md[memberof.name] += 
`
    - {${toLink(tag.type)}} \`${tag.name}\`. ${tag.description} (Optional: \`${tag.optional}\`)`
            }
        }

        if (tag('throws')) {
            md[memberof.name] += 
`
- **Throws**:
`
            for(let tag of tags) {
                if (tag.tag != 'throws') continue
                md[memberof.name] += 
`
${tag.description}
---`
            }
        }

        if (tag('returns')) {
md[memberof.name] += `
- **Return**: ${toLink(tag('returns').type)}  ${tag('returns').description}`          
        }

        if (tag('example')) {
            md[memberof.name] += `
- **Example**: 
${tag('example').description}`          
        }

       if (tag('default')) {
        md[memberof.name] += `
- **Default**: \`${tag('default').name}\``
       }
       md[memberof.name] += 
` 
- **Usage**:

${description}
`


        }
    }
}

for (let key in md) {
    const text = createSummary(summary[key]) + md[key]
    fs.writeFileSync(destination + key + '.md', text, 'utf-8')
}