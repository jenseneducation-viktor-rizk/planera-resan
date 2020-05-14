<template>
<div>
  <input type="checkbox" name="pendeltåg" v-model="pendeltåg" value="16" @change="check">
  <label for="pendeltåg">Pendeltåg</label>
  <input type="checkbox" name="tunnelbana" v-model="tunnelbana" value="32" @change="check">
  <label for="tunnelbana">Tunnelbana</label>
  <input type="checkbox" name="spårvagn" v-model="spårvagn" value="64" @change="check">
  <label for="spårvagn">Spårvagn</label>
  <input type="checkbox" name="buss" v-model="buss" value="128" @change="check">
  <label for="buss">Buss</label>
</div>
</template>

<script>
export default {
data: () => {return{
    pendeltåg: true,
    tunnelbana: true,
    spårvagn: true,
    buss: true,
    
}},

computed: {
    selectedVal() {
            return this.pendeltågVal + this.tunnelbanaVal + this.spårvagnVal + this.bussVal
        }
    ,
    pendeltågVal() {
        if(this.pendeltåg){
            return 1
        }else{
            return 0
        }
    },
    tunnelbanaVal() {
        if(this.tunnelbana){
            return 2
        }else{
            return 0
        }
    },
    spårvagnVal() {
        if(this.spårvagn){
            return 4
        }else{
            return 0
        }
    },
    bussVal() {
        if(this.buss){
            return 8
        }else{
            return 0
        }
    }
},
    methods: {
        check() {
            this.$store.dispatch("getTrans", this.selectedVal)
        }
    }
}



</script>

<style lang="scss">

</style>