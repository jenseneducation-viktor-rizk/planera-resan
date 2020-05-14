import Vue from 'vue'
import Vuex from 'vuex'
import stops from '../api/stops'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allStops: [],
    baseUrlStations: "https://api.resrobot.se/v2/location.nearbystops?key=a467c024-e7c6-4821-bd29-c47689dd6a7b&format=json",
    baseUrlDepartures: "https://api.resrobot.se/v2/departureBoard?key=7c8fd7e3-9be1-49af-921f-ebd3ea3d61c8&format=json",
    myPosition: {
      long: "",
      lat: ""
    },
    nearbyStations: [],
    departures: [],
    transOptions: 15,
    locationId: ""
  },
  mutations: {
    saveStations(state, stations) {
      state.nearbyStations = stations
    },
    showDepartures(state, departures) {
      state.departures = departures
    },
    saveTrans(state, value) {
      state.transOptions = value
    },
    saveStationId(state, id) {
      state.locationId = id
    },
    setStops(state, stops) {
      console.log(stops)
      state.allStops = stops
    }
  },
  actions: {
    getAllStops ({ commit }) {
      stops.getStops(stops => {
        commit('setStops', stops)
      })
    },
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
    async getDepartures({commit, state}, time) {
      console.log(state.transOptions)
      let data = await fetch(state.baseUrlDepartures + "&id=" + state.locationId + "&time=" + time + "&products=" + state.transOptions)
      .then(res => res.json())
      commit("showDepartures", data.Departure)
    },
    getTrans({commit}, value) {
      console.log(value)
      commit("saveTrans", value)
    },
    saveStation({commit}, id) {
      commit("saveStationId", id)
    }
  }
})
