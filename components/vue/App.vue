<template>
  <div>
      <h1>Hello from Vue</h1>
      <h4>My value is {{count}}</h4>
      <input type="button" v-on:click="handleIncrement" value="+"></input>
      <input type="button" v-on:click="handleDecrement" value="-"></input>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    count: window.myapp.counter,
  }),
  mounted() {
    window.addEventListener('onIncrement', () => {
      this.count = window.myapp.counter;
    });
    window.addEventListener('onDecrement', () => {
      this.count = window.myapp.counter;
    });
  },
  methods: {
    handleIncrement : () => {
      window.myapp.incrementor();
    },
    handleDecrement : () => {
      window.myapp.decrementor();
    },
  }
}
</script>