<template>
    <section >
        <b-button 
        @click="showForm = !showForm" 
        type="button" 
        class="btn btn-warn"
        variant="warning">
        Update Car
        </b-button>
        <b-form 
        v-if="showForm"
        @submit.prevent="onUpdateCar">
            <div class="form-group">
                <label for="name">Car Name</label>
                <input v-model="carToUpdate.name" type="text" name="name" id="name" class="form-control">
                <label for="color">Color</label>
                <input v-model="carToUpdate.color" type="text" name="color" id="color" class="form-control">
                <button type="submit" 
                variant="success">Submit</button>
            </div>
        </b-form>
    </section>
</template>

<script>
export default {
    mounted () {
        // console.log(this.car);
    },
    props: ['updateCar', 'car'],
    data: function() {
        return {
            showForm: false,
            carToUpdate: this.car
        }
    },
    methods: {
        onUpdateCar() {
            const id = this.car.id
            console.log(id)
            // this.UpdateCar(this.car)
            // this.car = getEmptyUpdate()
            // getEmptyUpdate()
            // this.showForm = false
        }
    }
}
</script>


<style>

</style>
