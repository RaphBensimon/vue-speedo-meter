<script>
import SpeedometerVue from './components/SpeedometerVue.vue';
export default {
  components: {
    SpeedometerVue
  },
  data(){
    return {
      score: 66,
      maxValue: 100
    }
  }
}
</script>

<template>
 <div>
   <SpeedometerVue color="#41B883" v-model="score" :maxValue="maxValue" ></SpeedometerVue>
  <SpeedometerVue color="#41B883" v-model="score" :maxValue="maxValue" ></SpeedometerVue>
  <SpeedometerVue color="#41B883" v-model="score" :maxValue="maxValue" ></SpeedometerVue>
 </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
