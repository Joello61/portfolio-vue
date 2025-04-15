import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

// import store from './store' // Décommenter si vous utilisez Vuex ou Pinia

// Enregistrement des plugins GSAP
gsap.registerPlugin(ScrollTrigger)

// Créer et monter l'application
const app = createApp(App)

// Utiliser le routeur
app.use(router)

// Utiliser Vuex/Pinia si nécessaire
// app.use(store)

// Monter l'application
app.mount('#app')