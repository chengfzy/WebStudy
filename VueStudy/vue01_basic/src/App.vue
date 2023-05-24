<template>
    <h1>Quick Start</h1>
    <p>message: {{ message }}</p>
    <button @click="increment">Count is: {{ count }}</button>

    <h1>Vue Directives</h1>

    <h2>raw html</h2>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <h2>v-model</h2>
    <input type="text" v-model="message">
    <p>{{ message }}</p>

    <h2>v-bind</h2>
    <img :src="imageSrc">

    <h2>v-if, v-else</h2>
    <p v-if="showMessage">Hello Vue!</p>
    <p v-else>Goodbye Vue!</p>

    <h2>v-for</h2>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>

    <h2>v-on, v-show</h2>
    <!-- <button v-on:click="showMessage = !showMessage">Show/Hide</button> -->
    <button @click="showMessage = !showMessage">Show/Hide</button>
    <p v-show="showMessage">Hello Vue!</p>
</template>

<script lang="ts">
export default {
    data() {
        return {
            showMessage: true,
            message: 'Hello Vue!',
            rawHtml: '<span style="color:red">This should be red. </span>',
            imageSrc: 'https://static.runoob.com/images/code-icon-script.png',
            count: 0,
            items: [
                { id: 1, text: 'Item 1' },
                { id: 2, text: 'Item 2' },
                { id: 3, text: 'Item 3' }
            ]

        }
    },

    methods: {
        increment() {
            this.count++
        }
    },

    mounted() {
        console.log(`the initial value is ${this.count}`)
    }
}
</script>

<style scoped>
button {
    font-weight: bold;
}
</style>
