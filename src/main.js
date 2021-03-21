import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'
import Day from "./pages/day/Day.vue";
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Day}
    ]
})
const app=createApp(App)
app.use(router)
app.mount('#app')
import './css/styles.css'