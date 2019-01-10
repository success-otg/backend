<template>
  <div class="home">
    home page
    <button @click="check">check</button>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: "home",
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['tiy'])
    },
    created(){
      this.doTiy()
    },
    methods:{
      ...mapMutations(['doTiy']),
      check(){
        console.log(this.tiy)
      }
    }
  }
</script>

<style scoped>

</style>