# Speedometer [![npm](https://flat.badgen.net/npm/v/speedometer-vue)](https://www.npmjs.com/package/speedometer-vue)
A Vue Speedometer for Vue 3

<img src="https://user-images.githubusercontent.com/28560613/215468282-d0de6c94-f1fa-4a7c-bb1c-a000b7908cf4.PNG">


## Install
```bash
npm install speedometer-vue
```
### Basic Usage
```vue
<template>
   <div>
        <VueSpeedometer v-model="speed" :maxValue="50" color="red" />
    </div>
</template>
<script>
    import { SpeedometerVue } from 'speedometer-vue'
    export default {
        components: { SpeedometerVue },
        data () {
            return {
                speed: 50,
                maxValue: 100
            }
        }
    }
</script>
```
### Loading mode
```vue
<template>
   <div>
        <VueSpeedometer v-model="speed" :maxValue="50" :loading="true" />
    </div>
</template>
<script>
    import { SpeedometerVue } from 'speedometer-vue'
    export default {
        components: { SpeedometerVue },
        data () {
            return {
                speed: null,
                maxValue: 100
            }
        }
    }
</script>
```
### Needle style
```vue
<template>
   <div>
        <VueSpeedometer v-model="speed" :maxValue="50" :needle="true" />
    </div>
</template>
<script>
    import { SpeedometerVue } from 'speedometer-vue'
    export default {
        components: { SpeedometerVue },
        data () {
            return {
                speed: 50,
                maxValue: 100
            }
        }
    }
</script>
```
