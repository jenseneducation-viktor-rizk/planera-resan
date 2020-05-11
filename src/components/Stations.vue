<template>
    <select class="stations" @change="selectStation(selectedStation)" v-model="selectedStation">
        <option value="" disabled selected hidden>Välj hållplats</option>
        <Station
        v-for="station in nearbyStations" 
        :key="station.id" 
        v-bind:station="station" 
        />
    </select>
</template>

<script>
import Station from '@/components/Station.vue'

export default {
    components: {
        Station
    },
    data () {return{
        selectedStation: ''
    }},
    computed: {
        nearbyStations() {
            return this.$store.state.nearbyStations
        }
    },
    methods: {
        selectStation(selectedStation) {
            this.$store.dispatch("saveStation", selectedStation)
        }
    }
}
</script>