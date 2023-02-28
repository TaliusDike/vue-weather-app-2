import {createRouter, createWebHistory} from "vue-router"
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WeatherView from "@/views/WeatherView.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },

        {
            path: "/about",
            name: "about",
            component: AboutView
        },

        {
            path: "/weather",
            name: "Weather App",
            component: WeatherView
        }

    ]
})

export default router;