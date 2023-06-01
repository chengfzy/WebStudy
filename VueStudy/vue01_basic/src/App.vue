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
    <h3>01</h3>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>
    <h3>02</h3>
    <ul>
        <li v-for="(value, key) in objects">{{ key }} : {{ value }}</li>
    </ul>
    <h3>03</h3>
    <ul>
        <li v-for="(value, key, index) in objects">[{{ index }}] {{ key }}: {{ value }}</li>
    </ul>
    <h3>04</h3>
    <ul>
        <li v-for="n in 5">{{ n }}</li>
    </ul>
    <h3>05</h3>
    <ul>
        <li v-for="n in eventNumbers">{{ n }}</li>
    </ul>


    <h2>v-on, v-show</h2>
    <!-- <button v-on:click="showMessage = !showMessage">Show/Hide</button> -->
    <button @click="showMessage = !showMessage">Show/Hide</button>
    <p v-show="showMessage">Hello Vue!</p>

    <h2>v-model</h2>
    <p>{{ message }}</p>
    <button @click="reverseMessage">反转字符串</button>
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
            numbers: [1, 2, 3, 4, 5, 6, 7],
            items: [
                { id: 1, text: 'Item 1' },
                { id: 2, text: 'Item 2' },
                { id: 3, text: 'Item 3' }
            ],
            objects: {
                name: 'text',
                price: 2356,
                valid: false
            }

        }
    },

    methods: {
        increment() {
            this.count++
        },
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    },

    computed: {
        eventNumbers() {
            return this.numbers.filter(number => number % 2 == 0)
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
