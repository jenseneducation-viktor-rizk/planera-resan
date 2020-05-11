<template>
  <div class="home">
    <h1>Planera Resan</h1>
    <Stations />
    <TransportOption />
    <Departures />
  </div>
</template>

<script>
import Stations from '@/components/Stations.vue'
import TransportOption from '@/components/TransportOption.vue'
import Departures from '@/components/Departures.vue'

export default {
  name: 'Home',
  components: {
  Stations, TransportOption, Departures
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}
</style>
