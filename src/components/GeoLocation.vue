<template>
  <div>
    <h1> Latitude: {{myPosition.lat}} 
      Longitude: {{ myPosition.long }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'GeoLocation',
  data: () => {
    return{
      myLocation: "",
  }},
  computed: {
    myPosition(){
      return this.$store.state.myPosition
    } 
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
