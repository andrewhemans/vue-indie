<template>
  <div id="app" v-smoothscroll="{ duration : 500}">
    <img id='logo' src="./assets/logo.png">
    <nav-menu></nav-menu>
    <div class="spacer" id="events"></div>
    <div class="container events-title">
      <h1>events</h1>
    </div>
    <events></events>
    <div class="spacer" id="bands"></div>
    <div class="container bands-title">
      <h1>bands</h1>
    </div>
    <my-vuetable></my-vuetable>
    <div class="spacer" id="venues"></div>
    <div class="spacer" id="about"></div>
  </div>
</template>

<script>
import MyVuetable from './components/MyVuetable'
import NavMenu from './components/NavMenu'
import Events from './components/Events'
export default {
  name: 'app',
  components: {
    MyVuetable,
    NavMenu,
    Events
  }
}
</script>
