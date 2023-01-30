import SpeedometerVue from './components/SpeedometerVue.vue'
export default {
	install(Vue) {
		Vue.component('speedometer-vue', SpeedometerVue)
	}
}
export { SpeedometerVue }