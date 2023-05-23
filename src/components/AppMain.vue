<script>
import AppCards from './AppCards.vue'
import { store } from '../data/store';

export default {
    components: {
        AppCards
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container-fluid bg_orange py-5">
        <div class="row">
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