import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch, faHome, faHashtag, faClipboardList, faEllipsisH, faBell, faEnvelope, faBookmark, faUser, faEdit, faImage, faFilm, faChartBar, faSmile, faClock, faComment, faRetweet, faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faEdit, faUser, faBookmark ,faEnvelope, faHome, faBell, faHashtag, faClipboardList, faEllipsisH, faTwitter, faImage, faFilm, faChartBar, faSmile, faClock, faComment, faRetweet, faHeart, faExternalLinkAlt)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
