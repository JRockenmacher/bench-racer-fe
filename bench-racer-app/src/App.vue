<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<style>


</style>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
export default {
  
}
</script>

<style>
body {
    background-image: url(http://carmechanicsimulator.gamewalkthrough-universe.com/Media/SiteImages/cms2015/yourgarage/YourGarage_4.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
