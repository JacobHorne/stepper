<template>
  <div>    
    <h1>Emplyment Route</h1>
    <button @click="next()">Go To Housing</button>
  </div>
</template>


<script>
export default {
  name: 'Employment',
  data () {
    return {
    }
  },
   methods: {
    next(){
      this.$router.push('/Housing')
    }
  },
}
</script>