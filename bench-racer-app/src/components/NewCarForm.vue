<template>
<section class="form-bk">
    <b-button 
    @click="showForm = !showForm" 
    type="button" 
    class="car-btn"
    variant="primary">
    Add A Car
    </b-button>
    <b-form 
    v-if="showForm"
    @submit.prevent="onAddCar">
        <div class="form-group">
            <label for="name">Car Name</label>
            <input v-model="car.name" type="text" name="name" id="name" class="form-control">
            <label for="year">Year</label>
            <input v-model="car.year" type="text" name="year" id="year" class="form-control">
            <label for="make">Make</label>
            <input v-model="car.make" type="text" name="make" id="make" class="form-control">
            <label for="model">Model</label>
            <input v-model="car.model" type="text" name="model" id="model" class="form-control">
            <label for="sub_model">Sub-Model</label>
            <input v-model="car.sub_model" type="text" name="sub_model" id="sub_model" class="form-control">
            <label for="drive_layout">Drive Layout</label>
            <b-form-select v-model="car.drive_layout" name="drive_layout" id="drive_layout" class="form-control">
                <option disabled value="">Select One</option>
                <option>FR</option>
                <option>FF</option>
                <option>MR</option>
                <option>RR</option>
                <option>AWD</option>
            </b-form-select>
            <label for="color">Color</label>
            <input v-model="car.color" type="text" name="color" id="color" class="form-control">
            <label for="image">Image URL</label>
            <input v-model="car.image" type="text" name="image" id="image" class="form-control" placeholder="paste img link here">
        </div>
        <b-button 
            type="submit"
            class="car-btn"
            variant="success">
            Add To Garage
        </b-button>
    </b-form>
</section>
</template>

<script>
function getEmptyCar() {
    return {
        name: "",
        year: 0,
        make: '',
        model: '',
        sub_model: '',
        drive_layout: '',
        color: '',
        image: ''
    }
}
export default {
    props:
        ['addCar'],
    data: () => ({
            showForm: false,
            car: getEmptyCar(),
        }),
    methods: {
        onAddCar() {
            this.addCar(this.car)
            this.car = getEmptyCar()
            getEmptyCar()
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
