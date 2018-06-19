<template>
  <div>
    <h1>Hardship Route</h1>
    <button @click="next()">Go To Hardship</button>
  </div>
</template>

<script>
export default {
  name: 'Hardship',
  data () {
    return {
    }
  },
  methods: {
    next(){
      this.$router.push('/Employment')
    }
  },
}
</script>
