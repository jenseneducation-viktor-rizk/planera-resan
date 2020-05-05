<template>
  <div class="home">
    <GeoLocation />
  </div>
</template>

<script>
import GeoLocation from '@/components/GeoLocation.vue'

export default {
  name: 'Home',
  components: {
    GeoLocation
  }
}
</script>
