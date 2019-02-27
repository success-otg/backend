<template>
  <div class="home">
    home page
    <button @click="getHeight" ref="btn">check</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {

      }
    },
    computed:{
    },
    created(){
    },
    mounted(){
    },
    methods:{
      check(){
      },
      getHeight(){
        console.log(this.$refs.btn.offsetHeight)
      }
    }
  }
</script>

<style scoped>

</style>