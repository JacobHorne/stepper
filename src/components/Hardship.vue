<template>
  <div>
    <h1>Hardship Route</h1>
    <button @click="next()">Go To Hardship</button>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';
export default {
  name: 'Hardship',
  data () {
    return {
      clickCount:1
    }
  },
  methods: {
    next(){
      this.clickCount++;
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('update-step', this.clickCount);
      this.$router.push('/Employment');
    }
  },
}
</script>
