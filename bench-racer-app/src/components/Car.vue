<template>
    <section class="card col-4">
        <img class="card-img-top car-img " :src="car.image" alt="car.name">
        <div class="card-body">
            <h5 class="card-title">{{car.name}}</h5>
            <span class="card.text">{{car.year}} {{car.make}} {{car.model}}</span>
            <p class=card.text>Layout: {{car.drive_layout}}</p>
            <button @click="removeCar()" class ="btn btn-danger">Remove Car</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "car",
    props: ['car', 'removeCar'],
    data: () => ({
        
        }),
    
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
</style>


