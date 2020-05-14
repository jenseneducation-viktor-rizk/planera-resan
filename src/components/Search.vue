<template>
  <div id="search">
      <div class="search-wrapper">
        <input @focus="fromActive = true" @blur="closeFromActive" type="text" 
        name="from" id="from" :placeholder="placeholderFrom" v-model="from">
      </div>
        <div class="wrapper" v-if="from.length > 2 && fromActive == true">
            <div class="station" v-for="stop in fromStop.slice(0, 6)" :key="stop.index">
                <p @click="selectFrom(stop)"> {{stop.SiteName}} </p>
            </div>
        </div>

      <div class="search-wrapper">
        <input @focus="toActive = true" @blur="closeToActive" type="text" 
        name="to" id="to" :placeholder="placeHolderTo" v-model="to">
      </div>
      <div class="wrapper" v-if="to.length > 2 && toActive == true">
            <div class="station" v-for="stop in toStop.slice(0, 6)" :key="stop.index">
                <p @click="selectTo(stop)"> {{stop.SiteName}} </p>
            </div>
        </div>




  </div>
</template>

<script>
export default {
    data(){return{
        toActive: true,
        fromActive: true,
        from: "",
        to: "",
        placeholderFrom: "Från Station",
        placeHolderTo: "Till Station"
    }},
    computed: {
        allStops() {
            return this.$store.state.allStops
        },
        fromStop() {
            let filtered = this.allStops.filter(stop =>  { 
                return stop.SiteName.toLowerCase().includes(this.from.toLowerCase())
            })
            let sorted = this.sortedStops(filtered, this.from)
            return sorted
        },
        toStop() {
            let filtered = this.allStops.filter(stop =>  { 
                return stop.SiteName.toLowerCase().includes(this.to.toLowerCase())
            })
            let sorted = this.sortedStops(filtered, this.to)
            return sorted
        },
    },
    methods: {
        selectFrom(stop) {
            this.from = stop.SiteName
            this.$emit("selectedFrom", stop.SiteId)
        },
        selectTo(stop) {
            this.to = stop.SiteName
            this.$emit("selectedTo", stop.SiteId)
        },
        closeFromActive() {
            setTimeout(() => {
                this.fromActive = false
            }, 200);
        },
        closeToActive() {
            setTimeout(() => {
                this.toActive = false
            }, 200);
        },
        sortedStops(allStops, search) {
            let array = allStops
            let nameB = search

            return array.sort(function(a) {
                let nameA = a.SiteName.toLowerCase()

                if(nameA.charAt(0) == nameB.charAt(0)) {
                    if(nameA.charAt(1) == nameB.charAt(1)) {
                        if(nameA.charAt(2) == nameB.charAt(2)) {
                            return -1
                        }
                        return 0
                    }
                    return 1
                }
                    return 2
            })
        }   
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