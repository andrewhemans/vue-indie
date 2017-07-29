<template>
  <div class="ui container">
    <filter-bar></filter-bar>
    <vuetable ref="vuetable"
      api-url="http://localhost:3000/events"
      :fields="fields"
      pagination-path=""
      :per-page="10"
      :sort-order="sortOrder"
      detail-row-component="my-detail-row"
      :appendParams="moreParams"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:cell-clicked="onCellClicked"
    ></vuetable>
    <div class="vuetable-pagination ui basic segment grid">
      <!-- <vuetable-pagination-info ref="paginationInfo"
      ></vuetable-pagination-info> -->
      <vuetable-pagination ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </div>
</template>

<script>
// import accounting from 'accounting'
// import moment from 'moment'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import CustomActions from './CustomActions'
import DetailRow from './DetailRow'
import FilterBar from './FilterBar'
import Vue from 'vue'
import VueEvents from 'vue-events'
Vue.use(VueEvents)
Vue.component('custom-actions', CustomActions)
Vue.component('my-detail-row', DetailRow)
Vue.component('filter-bar', FilterBar)
export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  data () {
    return {
      fields: [
        {
          name: 'date',
          sortField: 'date'
        },

        {
          name: 'bands'
        },
        {
          name: 'location',
          sortField: 'location'
        }
      ],
      sortOrder: [
        {
          field: 'date',
          sortField: 'date',
          direction: 'asc'
        }
      ],
      moreParams: {}
    }
  },
  methods: {
    allcap (value) {
      return value.toUpperCase()
    },
    // formatNumber (value) {
    //   return accounting.formatNumber(value, 2)
    // },
    // formatDate (value, fmt = 'D MMM YYYY') {
    //   return (value == null)
    //     ? ''
    //     : moment(value, 'YYYY-MM-DD').format(fmt)
    // },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      // this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onCellClicked (data, field, event) {
      console.log('cellClicked: ', field.name)
      this.$refs.vuetable.toggleDetailRow(data.id)
    }
  },
  events: {
    'filter-set' (filterText) {
      this.moreParams = {
        'filter': filterText
      }
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    },
    'filter-reset' () {
      this.moreParams = {}
      this.$refs.vuetable.refresh()
      Vue.nextTick(() => this.$refs.vuetable.refresh())
    }
  }
}
</script>
