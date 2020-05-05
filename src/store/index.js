import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myPosition: {
      long: "",
      lat: ""
    }
  },
  mutations: {
    saveLocation(state, pos){
      console.log(pos)
      state.myPosition.lat = pos.latitude
      state.myPosition.long = pos.longitude
    }
  },
  actions: {
    async getPos({commit, dispatch}){
      try {
        let currentPos = await dispatch("fetchPos")
        commit("saveLocation", currentPos.coords)
      } catch(error) {
        console.error(error)
      }
    },
    fetchPos(){
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
      })
    }
  }
})
