<script>
import VueSpeedometer from './components/VueSpeedometer.vue';
export default {
  components: {
    VueSpeedometer
  },
  data(){
    return {
      score: 20,
      maxValue: 100
    }
  }
}
</script>

<template>
  <VueSpeedometer color="#41B883" v-model="score" :maxValue="maxValue"></VueSpeedometer>
</template>

<style scoped>
</style>
