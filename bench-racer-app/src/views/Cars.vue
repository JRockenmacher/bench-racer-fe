<template>
<section>
    <div class="top-nav">
        <top-nav />
    </div>
        <section class="container">
            <car-list 
            :cars="cars"
            :removeCar="removeCar"
            :updateCar="updateCar"
            />
            
            <mod-chart />
            <new-car-form 
            :addCar='addCar'
            />
        </section>
    </section>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import CarList from '@/components/CarList.vue'
import NewCarForm from '@/components/NewCarForm.vue'
import ModChart from '@/components/ModChart.vue'
// import API from '@/lib/API.js' - learn to do this later

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

    mounted() {
        this.getCars()                     
    },
methods: {
    getCars() {
        const carAPI = 'https://bench-racer.herokuapp.com/cars'
        fetch(carAPI)
        .then(res => res.json())
        .then( (res) => {
            this.cars = res.cars
            })
    },
    getMods() {
    const modAPI = 'https://bench-racer.herokuapp.com/mods' 
        fetch(modAPI)
        .then(res => res.json())
        .then( (res) => {
            this.mods = res.mods
        })
    },
    addCar(car) {
        const vue = this
        // why am i losing this in scope of fetch
        const data = JSON.stringify(car)
        const carAPI = 'https://bench-racer.herokuapp.com/cars'
            fetch(carAPI, {
            method: 'POST',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
            body: data
            })
            .then(function(response) {
                return response.json()
            })
            .then(function(newCar) {                
                vue.cars.push(newCar.car)
            })
            .catch(function(error) {
            })
      },
    
    removeCar(car) {
        const id = car.id
        const carAPI = `https://bench-racer.herokuapp.com/cars/${car.id}`
         fetch(carAPI, {
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            }          
         })
        .then(res => res.json())
        .then(res => {
            this.cars = this.cars.filter(car => {
                return car.id != id
            })
        })
    },
    updateCar(car){
        console.log("FROM updateCar", car)
        const carAPI = `https://bench-racer.herokuapp.com/cars/${car.id}`
         fetch(carAPI, {
            method: 'PUT',
            headers: {
            "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(car)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }
}
}
</script>

<style>
    .top-nav{
        width: 100%
    }

</style>
