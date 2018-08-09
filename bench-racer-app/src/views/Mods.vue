<template>
    <section class='container' 
    v-if="mods.length">
        <div class="mod-box"
        v-for="mod in mods"
        :key="mod.id"
        >
            <h3>Sub-Category: {{mod.sub_category}}</h3>
            <p>Description: {{mod.description}}</p>
            <h5>Cost: ${{mod.cost}}</h5>
        </div>
        <new-mod-form />
    </section>
</template>

<script>

import NewModForm from '@/components/NewModForm.vue'
export default {
    name: 'mods',
    props: [''],
    components: {
        NewModForm
    },
    mounted () {
        const carID = this.$route.params.id
        const apiURL = `https://bench-racer.herokuapp.com/cars/mods/${carID}`
        fetch(apiURL)
        .then(res => res.json())
        .then(res => {
            this.mods = res.mods 
        })
    },
    data () {
        return {
            mods: []
        }
    },
    methods: {
        addMod(mod) {
        const vue = this
        // why am i losing this in scope of fetch
        const data = JSON.stringify(mod)
        const modAPI = `https://bench-racer.herokuapp.com/mods/${mods.car_id}`
            fetch(modAPI, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
            body: data
            })
            .then(function(response) {
                return response.json()
            })
            .then(function(newMod) {
                vue.mods.push(newMod)
            })
            .catch(function(error) {
                console.log('error:', error.message)
            })
        }
    },

}
</script>

<style>
    .mod-box {
        background-color: rgba(255, 255, 255, 0.7);
        color: black;
        padding: 1em;
        margin: .5em;
    }
</style>
