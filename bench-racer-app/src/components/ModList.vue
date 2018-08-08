<template>
    <section class="row">
        <car 
        v-for="mod in mods"
        :mod="mod"
        :key="mod.id"
        :removemod="removemod"
        :updatemod="updatemod"
        />
    </section>
</template>

<script>
import Mod from '@/components/mod.vue'

export default {
    name: 'mod-list',
    props: ['mods', 'removemod', 'updatemod'],
    components: {
        Mod
    },
        
}
</script>


