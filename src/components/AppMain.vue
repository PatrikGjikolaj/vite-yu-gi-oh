<script>

import AppCards from './AppCards.vue'
import { store } from '../data/store';
import { archetipi } from '../data/store';
import axios from 'axios';

export default {
    components: {
        AppCards
    },
    data() {
        return {
            store,
            archetipi,
            archetipoScelto: null,
        }
    },
    methods: {
        nuovoArchetipo() {
            let indirizzo = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + this.archetipoScelto;

            console.log(indirizzo)

            this.chiamataArchetipo(indirizzo);
        },
        chiamataArchetipo(indirizzo) {

            axios.get(indirizzo).then(r => {
                this.store.cards = [];
                this.store.cards = r.data
            });
        },
    },
    mounted() {

        axios.get(this.archetipi.urlAPI).then(a => {
            archetipi.archetipiList = a.data
        })
    },
}
</script>

<template>
    <div class="container-fluid bg_orange py-3">
        <div class="row">
            <div class="col-12 pb-3">
                <select @change="nuovoArchetipo" v-model="archetipoScelto">
                    <option v-for="archetipo in archetipi.archetipiList">{{ archetipo.archetype_name }}</option>
                </select>
            </div>
            <div class="col-12">
                <AppCards :store='store' />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg_orange {
    background-color: orange;
}
</style>