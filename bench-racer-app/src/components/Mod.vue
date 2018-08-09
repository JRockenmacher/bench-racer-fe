<template>
    <section>
        <img class="card-img-top car-img " 
        :src="icon" 
        alt="icon">
        <div >
            <h5 >{{mod.sub_category}}</h5>
            
            <p >Decription: {{mod.description}}</p>
            <p>Cost: ${{mod.cost}}</p>
            <button type="button" @click="updateMod()" class="btn btn-warning">Update Mod</button>
            <button type="button" @click="removeMod()" class ="btn btn-danger">Remove Mod</button>
            <new-mod-form />
        </div>
    </section>
</template>

<script>
import NewModForm from '@/components/NewModForm.vue'
export default {
    name: "car",
    props: ['car', 'mod', 'getMod', 'removeCar', 'updateCar', 'getinCar'],
    components: {
        NewModForm
    },
    data: () => {
        return {
            newCategory: '',
            newSubCategory: '',
            newDescription: '',
            newCost: 0,
        }
        },
    methods: {
        removeMod(mod) {
        const apiUrl = `https://bench-racer.herokuapp.com/mods/${mod.id}`
        fetch(apiUrl, {
            method: "DELETE",
            body: JSON.stringify(mod),
            headers: new Headers({
              "content-type": "application/json"
            })
          })
          .then(data => {
            console.log(data)
            this.getMod()
          })
          .then(console.log('deleted'))
        },
        updateMod(mod) {
        const updateURL = `https://bench-racer.herokuapp.com/mods/${mod.id}`
        fetch(updateURL, {
            method: "PUT",
            headers: new Headers({
              "content-type": "application/json"
            }),
            body: JSON.stringify({
                category: this.newCategory,
                sub_category: this.newSubCategory,
                description: this.newDescription,
                cost: this.newCost
            })
          })
          .then(response => response.json())
          .then(data => {
            this.getMod()
            this.showDates = false
          })
      }
    }
    
}

</script>

<style scoped>

   .btn {
       width: 90%
   }
</style>


