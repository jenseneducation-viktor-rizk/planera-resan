<template>
  <div class="home">
    <GeoLocation />
    <button @click="nearbyButton" >Get Nearby Stations</button>
    <Stations />
    <Departures />
  </div>
</template>

<script>
import GeoLocation from '@/components/GeoLocation.vue'
import Stations from '@/components/Stations.vue'
import Departures from '@/components/Departures.vue'

export default {
  name: 'Home',
  components: {
    GeoLocation, Stations, Departures
  },
  methods: {
    nearbyButton() {
      this.$store.dispatch("getNearbyStations")
    }
  }
}
</script>
