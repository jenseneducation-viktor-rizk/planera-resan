<template>
    <div class="departures">
        <Departure v-for="(departure, index) in trips" :key="index" :departure="departure" />
    </div>
</template>

<script>
import Departure from '@/components/Departure.vue'

export default {
    components: {
        Departure
    },
    computed: {
        trips() {
            return this.$store.state.trips
        }
    }
}
</script>