<template>
    <div class="stations">
        <Station v-for="station in nearbyStations" :key="station.id" v-bind:station="station"/>
    </div>
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