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
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
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
  transition: color 0.3s ease;
}

.navbar-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.navbar-item:hover, .router-link-active {
  color: var(--primary-color);
}

.navbar-item:hover::after, .router-link-active::after {
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
  transition: all 0.3s ease;
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