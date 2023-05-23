<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './data/store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    console.log("App Mounted, store: ", this.store);

    axios.get(this.store.urlAPI).then(r => {
      store.cards = r.data.data
    })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
