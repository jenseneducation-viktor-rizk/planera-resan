<template>
    <option @click="dpDepartures" class="station">
        {{station.name}}
    </option>

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

<style lang="scss" scoped>

</style>