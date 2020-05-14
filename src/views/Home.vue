<template>
  <div class="home">
    <h1>Planera Resa</h1>
    <Stations />
    <TransportOption />
    <vue-timepicker 
    class="time"
    hide-clear-button
    close-on-complete 
    v-model="time" 
    :placeholder="time"></vue-timepicker>
    <SearchButton @click.native="clickSearch"/>
    <Departures />
  </div>
</template>

<script>
import Stations from '@/components/Stations.vue'
import TransportOption from '@/components/TransportOption.vue'
import Departures from '@/components/Departures.vue'
import SearchButton from '@/components/SearchButton.vue'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'

export default {
  name: 'Home',
  data () {return{
    time: 'HH:MM'
  }},
  components: {
  Stations, TransportOption, Departures , VueTimepicker, SearchButton
  },
  methods: {
    clickSearch() {
      this.$store.dispatch("getDepartures", this.time)
    }
  },
  created() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if(m < 10) {
      m = "0" + m
    }
    this.time = h + ':' + m
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
