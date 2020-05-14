<template>
  <div class="home">
    <h1>Ta Tuben</h1>
    <Search @selectedFrom="saveFromId" @selectedTo="saveToId" />
    <!-- <Stations /> -->
    <TransportOption />
    <vue-timepicker 
    class="time"
    hide-clear-button
    close-on-complete 
    v-model="trip.time" 
    :placeholder="trip.time"></vue-timepicker>
    <SearchButton @click.native="clickSearch"/>
    <!-- <Departures /> -->
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
// import Stations from '@/components/Stations.vue'
import TransportOption from '@/components/TransportOption.vue'
// import Departures from '@/components/Departures.vue'
import SearchButton from '@/components/SearchButton.vue'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'

export default {
  name: 'Home',
  data () {return{
    trip: {
      time: 'HH:MM',
      fromId: "",
      toId: ""
    }
  }},
  components: {
  Search, TransportOption, VueTimepicker, SearchButton
  },
  methods: {
    clickSearch() {
      this.$store.dispatch("getTrip", this.trip)
    },
    saveFromId(id) {
      this.trip.fromId = id
    },
    saveToId(id) {
      this.trip.toId = id
    }
  },
  created() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if(m < 10) {
      m = "0" + m
    }
    if(h < 10) {
      h = "0" + h
    }
    this.trip.time = h + ':' + m
  }
}
</script>

<style lang="scss" >
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}
.display-time {
  text-align: center;
}
</style>
