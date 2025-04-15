<template>
  <nav class="navbar" :class="{ 'scrolled': hasScrolled }">
    <div class="container navbar-container">
      <div class="navbar-logo">
        <router-link to="/">
          <span class="logo-text">J<span class="logo-accent">T</span></span>
        </router-link>
      </div>
      <div class="navbar-menu" :class="{ 'active': menuActive }">
        <router-link to="/" class="navbar-item" @click="closeMenu">Accueil</router-link>
        <router-link to="/skills" class="navbar-item" @click="closeMenu">Compétences</router-link>
        <router-link to="/projects" class="navbar-item" @click="closeMenu">Projets</router-link>
        <router-link to="/experience" class="navbar-item" @click="closeMenu">Expérience</router-link>
        <router-link to="/contact" class="navbar-item" @click="closeMenu">Contact</router-link>
        <button @click="emit('toggle-dark')" class="toggle-mode-btn"
          :aria-label="isDark ? 'Mode clair' : 'Mode sombre'">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>

      </div>
      <div class="navbar-burger" @click="toggleMenu" :class="{ 'active': menuActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['toggle-dark'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isDark: Boolean
})

// État réactif
const menuActive = ref(false)
const hasScrolled = ref(false)

// Ferme le menu
const closeMenu = () => {
  menuActive.value = false
}

// Bascule l'état du menu
const toggleMenu = () => {
  menuActive.value = !menuActive.value
}

// Fonction pour détecter le défilement
const handleScroll = () => {
  hasScrolled.value = window.scrollY > 30
}

// Ajout/suppression des écouteurs d'événements
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Vérifier au chargement
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 10px 0;
  background-color: var(--white);
  /* toujours variable */
  box-shadow: var(--shadow-md);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo a {
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
}

.logo-text {
  background: linear-gradient(135deg, var(--secondary-dark), var(--secondary-color));
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -1px;
  position: relative;
  padding: 0 5px;
}

.logo-accent {
  color: var(--primary-color);
}

.navbar-menu {
  display: flex;
  gap: 25px;
}

.navbar-item {
  color: var(--text-dark);
  font-weight: 500;
  position: relative;
  padding: 5px 0;
  transition: color var(--transition-fast);
}

.navbar-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
  transition: width var(--transition-fast);
}

.navbar-item:hover,
.router-link-active {
  color: var(--primary-color);
}

.navbar-item:hover::after,
.router-link-active::after {
  width: 100%;
}

.navbar-burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 102;
}

.navbar-burger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-dark);
  transition: all var(--transition-fast);
}

.navbar-burger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  background-color: var(--primary-color);
}

.navbar-burger.active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  background-color: var(--primary-color);
}

.toggle-mode-btn {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.toggle-mode-btn:hover {
  background-color: var(--primary-color);
  color: var(--white);
}

.dark .toggle-mode-btn {
  color: white;
  border-color: var(--primary-color)
}


@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    flex-direction: column;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: var(--white);
    padding: 100px 40px;
    align-items: flex-start;
    transition: right 0.4s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    /* tu peux créer var(--shadow-right) si besoin */
    z-index: 101;
  }

  .navbar-menu.active {
    right: 0;
  }

  .navbar-menu .navbar-item {
    font-size: 1.1rem;
    margin: 10px 0;
  }

  .navbar-burger {
    display: flex;
  }
}
</style>
