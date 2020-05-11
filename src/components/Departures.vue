<template>
    <div class="departures">
        <Departure v-for="(departure, index) in departures" :key="index" :departure="departure" />
    </div>
</template>

<script>
import Departure from '@/components/Departure.vue'

export default {
    components: {
        Departure
    },
    computed: {
        departures() {
            return this.$store.state.departures
        }
    }
}
</script>