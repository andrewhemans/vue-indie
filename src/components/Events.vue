<template>
  <div class="ui container">

      <input type="text" v-model="search" class="form-control" placeholder="Filter">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <a href="#">
                Date
              </a>
            </th>
            <th>
              <a href="#">
                Time
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filterSearch">
            <td>{{ item.date }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.bands }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.cost }}</td>
            <td><a :href="item.link">Link</a></td>
          </tr>
        </tbody>
      </table>

        <div class="form-group four columns">
          <label>Date</label>
          <input type="text" class="form-control" v-model="newEvent.date" >
        </div>
        <div class="form-group four columns">
          <label>Time</label>
          <input type="text" class="form-control" v-model="newEvent.time" >
        </div>
        <div class="form-group four columns">
          <label>Bands</label>
          <input type="text" class="form-control" v-model="newEvent.bands" >
        </div>
        <div class="form-group four columns">
          <label>Location</label>
          <input type="text" class="form-control" v-model="newEvent.location" >
        </div>
        <div class="form-group four columns">
          <label>Cost</label>
          <input type="text" class="form-control" v-model="newEvent.cost" >
        </div>
        <div class="form-group four columns">
          <label>Link</label>
          <input type="text" class="form-control" v-model="newEvent.link" >
        </div>
        <div class="four columns"
          <button type="submit" class="btn btn-primary" v-on:click="addEvent()">Add</button>
        </div>



  </div>
</template>

<script>
export default {
  name: 'Events',
  data () {
    return {
      sortKey: 'name',

      reverse: false,

      search: '',

      columns: ['name', 'age'],

      newEvent: {},
      info: [
        { date: '7/11/2017', time: '7pm', bands: 'Betty Rage, Thought Riot, Scattered Fall', location: 'The Caffein Den', cost: '$5', link: 'link' },
        { date: '7/02/2017', time: '5pm', bands: 'The Woods, Southpaw, The Evening Episode', location: 'The Blackwater Cafe', cost: '$5', link: 'link' },
        { date: '5/21/2017', time: '7pm', bands: 'Cars and Snakes, The Harmonics, Audry K, The Cookie Factory', location: 'Jitterz Cafe', cost: 'Free!', link: 'www.jerkindie.com' }
      ]
    }
  },
  computed: {
    filterSearch: function () {
      return this.info.filter(function (search) {
        return search
      })
    }
  },
  methods: {
    // sortBy: function (sortKey) {
    //   this.reverse = (this.sortKey === sortKey) ? !this.reverse : false
    //
    //   this.sortKey = sortKey
    // },

    addEvent: function () {
      this.info.push(this.newEvent)
      this.newEvent = {}
    }
  }
}
</script>
