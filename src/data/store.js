import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0",
    cards: []
});

export const archetipi = reactive({
    urlAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetipiList: []
});