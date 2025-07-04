import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

// Enregistrement des plugins GSAP
gsap.registerPlugin(ScrollTrigger)

// Créer et monter l'application
const app = createApp(App)

// Utiliser le routeur
app.use(router)

// Monter l'application
app.mount('#app')