<template>
  <div id="search">
      <div class="search-wrapper">
        <input type="text" name="from" id="from" placeholder="Från station" v-model="from">
      </div>
        <div class="wrapper" v-if="from.length > 2">
            <div class="station" v-for="stop in sortedStops.slice(0, 6)" :key="stop.index">
                <p> {{stop.SiteName}} </p>
            </div>
        </div>

      <div class="search-wrapper">
        <input type="text" name="to" id="to" placeholder="Till station" v-model="to">
      </div>




  </div>
</template>

<script>
export default {
data(){return{
    from: "",
    to: ""
}},
computed: {
    allStops() {
        return this.$store.state.allStops
    },
    // stops() {
    //     return this.$store.getters.filteredStops
    // },
    fromStop() {
        return this.allStops.filter(stop =>  { 
            return stop.SiteName.toLowerCase().includes(this.from.toLowerCase())
        })
    }, 
    sortedStops() {
        let array = this.fromStop
        return array.sort()
    }
    // fromStop() {
    //     return this.allStops.filter(stop =>  { 
    //         return stop.SiteName.toLowerCase().includes(this.from.toLowerCase()) 
    //     })
    // },
    

}
}
</script>

<style lang="scss">
#search {
    display: flex;
    flex-direction: column;
    .search-wrapper {
        display: flex;
        flex-direction: column;
        padding: 10px;
    label {
        align-self: flex-start;
    }

    }
}

</style>