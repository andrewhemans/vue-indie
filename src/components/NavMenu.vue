<template>
  <div v-sticky="{ zIndex: 100, stickyTop: 0 }">
    <nav class="navbar">
      <div class="container">
        <ul class="navbar-list">
          <li class="navbar-item"><a class="navbar-link" href="#events">Events</a></li>
          <li class="navbar-item">
            <a class="navbar-link" href="#bands">Bands</a>
          </li>
          <li class="navbar-item"><a class="navbar-link" href="#venues">Venues</a></li>
          <li class="navbar-item">
            <a class="navbar-link" href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import VueSticky from 'vue-sticky'
export default {
  name: 'NavMenu',
  directives: {
    'sticky': VueSticky
  }
}
</script>
