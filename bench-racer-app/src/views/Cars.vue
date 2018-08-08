<template>
<section>
    <div class="top-nav">
        <top-nav />
    </div>
        <section class="container">
            <car-list 
            :cars="cars"
            
            />
            <!-- :removeCar="removeCar"
            :getInCar="getInCar"
            :updateCar="updateCar" -->
            <mod-chart />
            <new-car-form 
            />
            <!-- :addCar='addCar' -->
        </section>
    </section>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import CarList from '@/components/CarList.vue'
import NewCarForm from '@/components/NewCarForm.vue'
import ModChart from '@/components/ModChart.vue'
// import API from '@/lib/API.js'

export default {
name: 'cars',
components: {
    TopNav,
    CarList,
    NewCarForm,
    ModChart
  },
    data() {
        return {
            cars: []
        }
    },
// async mounted() {
//     this.movements = await API.getMovements()
// },
    mounted() {
        // const carAPI = 'http://localhost:3000/cars'
        
        this.getCars()
        // this.getMods()
                     
     
    
    },
methods: {
    getCars() {
        const carAPI = 'https://bench-racer.herokuapp.com/cars'
        fetch(carAPI)
        .then(res => res.json())
        .then( (res) => {
            this.cars = res.cars
            console.log("CARS IN APP", this.cars)                   
            })
    },
        getMods() {
        const modAPI = 'https://bench-racer.herokuapp.com/mods' 
            fetch(modAPI)
            .then(res => res.json())
            .then( (res) => {
                // console.log("FETCH FOR CARS", res);
                this.mods = res.mods
                console.log("MODS IN APP", this.mods);                      
            })
        },
    addCar(car) {
        // console.log(this);
        const vue = this
        // why am i losing this in scope of fetch
        const data = JSON.stringify(car)
        const carAPI = 'https://bench-racer.herokuapp.com/cars'
        // const carAPI = 'http://localhost:3000/cars'
            fetch(carAPI, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
            body: data
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(newCar) {
                console.log(this);
                
                vue.cars.push(newCar)
                console.log('RESULT', newCar)
            })
            .catch(function(error) {
                console.log('error:', error.message);
            });
      },
    // addCar(car) {
    //     this.cars.push(car)
    // },
//     removeCar(car) {
//         const index = this.cars.indexOf(car)
//         this.cars.splice(index, 1)
//     },
//     updateCar(car){
//         const index = this.cars.indexOf(car)
//         update()

//     },
    // getInCar(car) {
    //     this.$router.push({path:`mods/${car.id}`})
    // }
}
}
</script>

<style>
    .top-nav{
        width: 100%
    }

</style>
