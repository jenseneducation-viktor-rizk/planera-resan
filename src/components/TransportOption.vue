<template>
<div>
  <input type="checkbox" name="pendeltåg" v-model="pendeltåg">
  <label for="pendeltåg">Pendeltåg</label>
  <input type="checkbox" name="tunnelbana" v-model="tunnelbana">
  <label for="tunnelbana">Tunnelbana</label>
  <input type="checkbox" name="spårvagn" v-model="spårvagn">
  <label for="spårvagn">Spårvagn</label>
  <input type="checkbox" name="buss" v-model="buss">
  <label for="buss">Buss</label>
</div>
</template>

<script>
export default {
data: () => {return{
    pendeltåg: true,
    tunnelbana: true,
    spårvagn: true,
    buss: true
}},
computed: {
    selectionVal() {
        return this.pendeltågVal + this.tunnelbanaVal + this.spårvagnVal + this.bussVal 
    },
    pendeltågVal() {
        if(this.pendeltåg){
            return 16
        }else{
            return 0
        }
    },
    tunnelbanaVal() {
        if(this.tunnelbana){
            return 32
        }else{
            return 0
        }
    },
    spårvagnVal() {
        if(this.spårvagn){
            return 64
        }else{
            return 0
        }
    },
    bussVal() {
        if(this.buss){
            return 128
        }else{
            return 0
        }
    }
}
}
</script>

<style lang="scss">

</style>