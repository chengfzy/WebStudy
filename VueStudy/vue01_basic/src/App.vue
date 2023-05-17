<template>
  <p>message: {{ message }}</p>

  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <button @click="increment">Count is: {{ count }}</button>
</template>

<script lang="ts">
export default {
  data () {
    return {
      message: 'Hello Vue!',
      rawHtml: '<span style="color:red">This should be red. </span>',
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
