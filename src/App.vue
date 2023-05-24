<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './data/store';
import { archetipi } from './data/store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
      archetipi
    }
  },
  mounted() {

    axios.get(this.store.urlAPI).then(r => {
      store.cards = r.data.data
    }),
      axios.get(this.archetipi.urlAPI).then(a => {
        archetipi.archetipiList = a.data
      })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
