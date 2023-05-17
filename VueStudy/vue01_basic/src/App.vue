<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script type="module">
export default {
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increment () {
      this.count++
    }
  },

  mounted () {
    console.log(`the initial value is ${this.count}`)
  }
}
</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
