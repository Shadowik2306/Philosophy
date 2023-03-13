import { createApp } from 'vue';
import App from './App.vue'
import VueResizeObserver from "vue-resize-observer";

createApp(App).use(VueResizeObserver)
    .mount('#app')
