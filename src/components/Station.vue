<template>
    <div @click="dpDepartures" class="station">
        <h1>{{station.name}}</h1>
    </div>
</template>

<script>
export default {
    props: {
        station: Object
    },
    methods: {
        dpDepartures() {
            this.$store.dispatch("getDepartures", this.station.id)
        }
    }
}
</script>