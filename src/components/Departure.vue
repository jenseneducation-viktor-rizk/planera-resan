<template>
    <div class="departure">
        <p>{{departure.name}} </p>
        <p>{{departure.direction}} </p>
        <p>{{departure.time}} </p>
    </div>
</template>

<script>
export default {
    props: {
        departure: Object
    }
}
</script>

<style lang="scss" scoped>
.departure {
    display: flex;
    flex-direction: row;
    p {
        margin: 10px;
    }
}
</style>