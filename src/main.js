// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSmoothScroll from 'vue-smoothscroll'

/* eslint-disable no-new */
Vue.use(VueSmoothScroll)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  methods: {
    clickfunc: function () {
      this.$SmoothScroll(document.getElementById('messageh1'))
    }
  }
})
