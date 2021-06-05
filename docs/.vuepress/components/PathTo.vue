<template>
    <code>{{ path }}</code>
</template>

<script>

const baseModule = 'src/game/main'
const serverDir = baseModule + '/server'
const paths = {
    clientIndex: baseModule + '/client/index.ts',
    serverIndex: baseModule + '/server/index.ts',
    baseModule,
    serverDir,
    mapDir: serverDir + '/maps',
    eventDir: serverDir + '/events',
    databaseDir: serverDir + '/database',
    moduleIndex: 'src/game/index.ts'
}

export default {
    props: ['to', 'file'],
    computed: {
        path() {
            return paths[this.to] + (this.file ? '/' + this.file : '')
        }
    }
}
</script>