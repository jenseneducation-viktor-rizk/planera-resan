<template>
    <select class="stations">
        <option value="">Närliggande Hållplatser</option>
        <Station v-for="station in nearbyStations" :key="station.id" v-bind:station="station"/>
    </select>
</template>

<script>
import Station from '@/components/Station.vue'

export default {
    components: {
        Station
    },
    computed: {
        nearbyStations() {
            return this.$store.state.nearbyStations
        }
    },
}
</script>