<template>
  <div>
    <h1>Vue App</h1>
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increment</button>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Counter', // This line can be changed to `name: 'MyCounter'` to comply with the rule.
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    async incrementCounter() {
      try {
        const response = await this.$axios.post('http://localhost:3000/api/increment');
        this.counter = response.data.count;
      } catch (error) {
        console.error('Error incrementing counter:', error);
      }
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
