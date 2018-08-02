<template>
<section class="form-bk">
    <b-button 
    @click="showForm = !showForm" 
    type="button" 
    class="mod-btn"
    variant="info">
    Add A Mod
    </b-button>
    <b-form 
    v-if="showForm"
    @submit.prevent="onAddMod">
        <div class="form-group">
            <label for="category">Mod Category</label>
            <b-form-select v-model="mod.category" name="category" id="category" class="form-control">
                <option disabled value="">Select One</option>
                <option>Chassis</option>
                <option>Powertrain</option>
                <option>Misc</option>
            </b-form-select>
            <label for="sub_category">Sub-Category</label>
            <input v-model="mod.sub_category" type="text" name="sub_category" id="sub_category" class="form-control">
            <label for="description">Mod Description</label>
            <input v-model="mod.description" type="text" name="description" id="description" class="form-control">
            <label for="cost">Model</label>
            <input v-model="mod.cost" type="text" name="cost" id="cost" class="form-control">
        </div>
        <b-button 
            type="submit"
            class="mod-btn"
            variant="success">
            Add To Mods
        </b-button>
    </b-form>
</section>
</template>

<script>
function getEmptyMod() {
    return {
        category: "",
        sub_category: "",
        description: "",
        cost: ""
    }
}
export default {
    props:
        ['addMod'],
    data: () => ({
            showForm: false,
            car: getEmptyMod(),
        }),
    methods: {
        onAddCar() {
            this.addMod(this.mod)
            this.mod = getEmptyMod()
            getEmptyMod()
            this.showForm = false
        }
    }
}
</script>


<style>
    .car-btn {
        width: 100%;
        margin: 1em 0;
    }

    .form-bk {
        background-color: rgba(0,0,0, .7);
        padding: 0.5em;
    }
</style>
