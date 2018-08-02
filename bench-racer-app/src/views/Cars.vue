<template>
    <section class="container">
        <header />
        <section>
            <car-list 
            :cars="cars"
            />
        </section>
        <new-car-form 
        :addCar='addCar'/>
    </section>
</template>

<script>
import Header from '@/components/Header.vue'
import CarList from '@/components/CarList.vue'
import NewCarForm from '@/components/NewCarForm.vue'
// import API from '@/lib/API.js'

export default {
name: 'cars',
components: {
    Header,
    CarList,
    NewCarForm
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
        const carAPI = 'https://bench-racer.herokuapp.com/cars'
        // const carAPI = 'http://localhost:3000/cars'
        const powertrainAPI ='https://bench-racer.herokuapp.com/metrics/powertrain/sum'
        const chassisAPI = 'https://bench-racer.herokuapp.com/metrics/chassis/sum'
        const miscAPI = 'https://bench-racer.herokuapp.com/metrics/misc/sum'
        
        return fetch(carAPI)
            .then(res => res.json())
            .then( (res) => {
                console.log("FETCH FOR CARS", res);
                this.cars = res.cars
                // this.cars.push(res)
                // this.cars = this.cars
                console.log("CARS IN APP", this.cars);                      
            })
    },
  methods: {
    addCar(car) {
        console.log(this);
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
    removeCar(car) {
        const index = this.cars.indexOf(car)
        this.cars.splice(index, 1)
    }  
}
}
</script>

<style>


</style>
