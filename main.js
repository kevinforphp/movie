import Vue from 'vue'
import App from './App'
import {
	tools,formatTime
} from 'common/util.js'
Vue.config.productionTip = false
Vue.prototype.navTo = tools.navTo
Vue.prototype.goBack = tools.goBack
Vue.prototype.openUrl = tools.openUrl
Vue.prototype.formatTime = formatTime
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
