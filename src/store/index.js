import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrlStations: "https://api.resrobot.se/v2/location.nearbystops?key=a467c024-e7c6-4821-bd29-c47689dd6a7b&format=json",
    baseUrlDepartures: "https://api.resrobot.se/v2/departureBoard?key=7c8fd7e3-9be1-49af-921f-ebd3ea3d61c8&format=json",
    myPosition: {
      long: "",
      lat: ""
    },
    nearbyStations: [],
    departures: [],
    transOptions: 240
  },
  mutations: {
    saveStations(state, stations) {
      state.nearbyStations = stations
      console.log(stations)
    },
    showDepartures(state, departures) {
      state.departures = departures
      console.log(departures)
    },
    saveTrans(state, value) {
      state.transOptions = value
      console.log(value)
    }
  },
  actions: {
    async getPos({dispatch}){
      try {
        let currentPos = await dispatch("fetchPos")
        dispatch("getNearbyStations", currentPos.coords)
      } catch(error) {
        console.error(error)
      }
    },
    fetchPos(){
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
      })
    },
    async getNearbyStations({commit, state}, pos) {
      let data = await fetch (state.baseUrlStations + "&originCoordLong=" + pos.longitude + "&originCoordLat=" + pos.latitude)
      .then(res => res.json())

      commit("saveStations", data.StopLocation)
    },
    async getDepartures({commit, state}, id) {
      let data = await fetch(state.baseUrlDepartures + "&id=" + id)
      .then(res => res.json())

      console.log(data)

      commit("showDepartures", data.Departure)
    },
    getTrans({commit}, value) {
      commit("saveTrans", value)
    }
  }
})
