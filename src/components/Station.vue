<template>
    <option class="station" :value="station.id">
        {{station.name}}
    </option>

</template>

<script>
export default {
    props: {
        station: Object
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>