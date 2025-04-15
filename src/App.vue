<template>
  <div id="app">
    <NavBar />
    <div class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter />
  </div>
</template>


<script setup>
import NavBar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
/* Importation des polices */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

/* Reset CSS amélioré */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Palette de couleurs */
  --primary-color: #42b883;
  --primary-dark: #3aa876;
  --secondary-color: #33485c;
  --secondary-dark: #2c3e50;
  --accent-color: #e7f5fd;
  --text-dark: #333;
  --text-light: #6c757d;
  --background-light: #f8f9fa;
  --white: #ffffff;
  --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 5px 15px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  /* Variables de transition */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Espacement */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--background-light);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
  color: var(--secondary-dark);
}

h1 {
  font-size: 2.75rem;
  font-weight: 700;
}

h2 {
  font-size: 2.25rem;
  font-weight: 600;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

p {
  margin-bottom: var(--spacing-md);
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--primary-dark);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: var(--spacing-lg);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section {
  padding: var(--spacing-xl) 0;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  transition: all var(--transition-normal);
  cursor: pointer;
  font-size: 1rem;
  border: none;
  outline: none;
  text-align: center;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--white);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--accent-color);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-outline:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

/* Animations de transition entre les pages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Media Queries */
@media (max-width: 1200px) {
  html {
    font-size: 15px;
  }
}

@media (max-width: 992px) {
  html {
    font-size: 14px;
  }
  
  .main-content {
    padding: var(--spacing-md);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.25rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  html {
    font-size: 13px;
  }
  
  .container {
    width: 95%;
  }
}
</style>