<template>
  <div @click="onClick">
    <div class="inline field">
      <span><b>Address:</b> {{rowData.address}}</span>
    </div>
    <div class="inline field">
      <span><b>Time:</b> {{rowData.time}}</span>
    </div>
    <div class="inline field">
      <span><b>Cost: </b>{{rowData.cost}}</span>
    </div>
    <div class="inline field">
      <span><b>Link:</b> <a :href="rowData.link">{{rowData.link}}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {
    onClick (event) {
      console.log('my-detail-row: on-click', event.target)
    }
  }
}
</script>
