// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './routes'
import '../static/css/font-awesome.min.css'
import '../static/css/bootstrap.min.css'
import '../static/css/style.css'
import '../static/js/gmaps.js'
import '../static/js/smoothscroll.js'
import '../static/js/bootstrap.min.js'
import '../static/js/custom.js'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
