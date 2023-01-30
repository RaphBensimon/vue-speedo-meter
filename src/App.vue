<script>
import SpeedometerVue from './components/SpeedometerVue.vue';
export default {
  components: {
    SpeedometerVue
  },
  data(){
    return {
      score: 50,
      maxValue: 100
    }
  }
}
</script>

<template>
  <SpeedometerVue color="#41B883" v-model="score" :maxValue="maxValue" :needle="true"></SpeedometerVue>
</template>

<style scoped>
</style>
