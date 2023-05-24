<script>

import { store } from '../data/store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    mounted() {
        axios.get(this.store.urlAPI).then(r => {
            this.store.cards = [];
            this.store.cards = r.data.data
            console.log(this.store.cards)
        })
    }
}
</script>

<template>
    <div class="container p-5 bg_white">
        <div class="row">
            <div class="col-12 bg_black text-white py-2">
                <span class="fw-bold">Found {{ this.store.cards.length }} cards</span>
            </div>
        </div>
        <div class="row gap-3 justify-content-between">
            <div class="col-2 bg_orange text-center d-flex flex-column justify-content-between p-0"
                v-for="(card, c) in this.store.cards">
                <img :src="card.card_images[0].image_url" alt="" class="img-fluid">
                <h5 class="text-white">{{ card.name }}</h5>
                <h6>{{ card.archetype }}</h6>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg_white {
    background-color: white;
}

.bg_black {
    background-color: black;
}

.bg_orange {
    background-color: orange;
}
</style>