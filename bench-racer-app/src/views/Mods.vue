<template>
    <section class='container'>
        <new-mod-form />
    </section>
</template>

<script>
import NewModForm from '@/components/NewModForm.vue'
export default {
    name: 'mods',
    components: {
        NewModForm
    },
    data () {
        return {
            mods: []
        }
    },
    methods: {
        addMod(mod) {
        // console.log(this);
        const vue = this
        // why am i losing this in scope of fetch
        const data = JSON.stringify(mod)
        const modAPI = `https://bench-racer.herokuapp.com/mods/${mods.car_id}`
        // const carAPI = 'http://localhost:3000/cars'
            fetch(modAPI, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
            body: data
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(newMod) {
                console.log(this);
                
                vue.mods.push(newMod)
                console.log('RESULT', newMod)
            })
            .catch(function(error) {
                console.log('error:', error.message);
            });
        }
    },

}
</script>

<style>

</style>
