<template>
  <div id="app">
    <h1>Vue.js App</h1>
    <p>Count from Next.js App: {{ count }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    // Fetch the initial count from the shared state
    this.fetchCount();

    // Listen for changes in the shared state
    setInterval(this.fetchCount, 3000); // Refresh every 3 seconds (adjust as needed)
  },
  methods: {
    async fetchCount() {
      try {
        // Call the API to get the shared state
        const response = await axios.get('http://localhost:3001/count');
        this.count = response.data.count;
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    },
  },
};
</script>
