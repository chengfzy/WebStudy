<template>
    <h1>Components</h1>
    <button-counter></button-counter><br>
    <button-counter></button-counter><br>
    <button-counter></button-counter>

    <h2>局部组件</h2>
    <child-comp01></child-comp01>

    <h2>Props</h2>
    <child-comp02 title="组件标题"></child-comp02>
    <site-name title="Google"></site-name>
    <site-name title="Github"></site-name>

    <h3>动态Prop</h3>
    <site-info v-for="site in sites" :id="site.id" :title="site.title"></site-info>
</template>

<script lang="ts">
export default {
    data() {
        return {
            sites: [
                { id: 1, title: 'Google' },
                { id: 2, title: 'Github' },
                { id: 3, title: 'Apple' }
            ]
        }
    },

}
</script>

<style scoped>
button {
    font-weight: bold;
}
</style>
