import { createApp } from 'vue'
import App from './App.vue'
import ChildComp02 from './components/ChildComponent.vue'

const app = createApp(App)

var ChildComp01 = {
    template: '<h4>局部组件01</h4>'
}

// define component named 'button-counter'
app.component('button-counter', {
    data() {
        return { count: 0 }
    },
    template: `
        <button @click="count++">
            点击了{{ count }}次
        </button>
    `
})

app.component('child-comp01', ChildComp01)
app.component('child-comp02', ChildComp02)

app.component('site-name', {
    props: ['title'],
    template: `<h4>{{ title }}</h4>`
})

app.component('site-info', {
    props: ['id', 'title'],
    template: `<h4>{{ id }} - {{ title }}</h4>`
})

app.mount('#app')
