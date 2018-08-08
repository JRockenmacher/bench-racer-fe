<template>
    <section class="row">
        <car 
        v-for="car in cars"
        :car="car"
        :key="car.id"
        :removeCar="removeCar"
        :updateCar="updateCar"
        />
    </section>
</template>

<script>
import Car from '@/components/Car.vue'

export default {
    name: 'car-list',
    props: ['cars', 'removeCar', 'updateCar'],
    components: {
        Car
    },
        
}
</script>


