<template>
    <section class="card col-4">
        <img class="card-img-top car-img " 
        :src="car.image" 
        alt="car.name">
        <div class="card-body">
            <h5 class="card-title">{{car.name}}</h5>
            <span class="card.text">{{car.year}} {{car.make}} {{car.model}}</span>
            <p class=card.text>Layout: {{car.drive_layout}}</p>
            <button type="button" @click="getInCar(car)" class="btn btn-success">Get In</button>
            <update-car-form 
            :car="car"
            :updateCar="updateCar"/>
            <!-- <button type="button" @click="updateCar()" class="btn btn-warning">Update Car</button> -->
            <button type="button" @click="removeCar(car)" class ="btn btn-danger">Remove Car</button>
        </div>
    </section>
</template>

<script>
import UpdateCarForm from '@/components/UpdateCarForm.vue'
export default {
    name: "car",
    props: ['car', 'removeCar', 'updateCar'],
    components: {
        UpdateCarForm
    },
    data: () => ({
        
        }),
    methods: {
        getInCar(car) {
        this.$router.push({path:`mods/${car.id}`})
    }
    }
}

</script>

<style scoped>

    .car-img {
        height: 200px;
        max-width: 300px;
    }
   
   .card {
      padding: 1em;
   }

   .btn {
       width: 90%
   }
</style>


