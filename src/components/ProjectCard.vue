<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="imageSrc" :alt="title" v-if="imageSrc">
      <div class="project-placeholder" v-else>
        <i class="fas fa-image"></i>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <div class="project-tags">
        <span v-for="(tag, index) in tags" :key="index" class="project-tag">{{ tag }}</span>
      </div>
      <p class="project-description">{{ description }}</p>
      <div class="project-links">
        <a v-if="demoLink" :href="demoLink" target="_blank" rel="noopener noreferrer" class="project-link demo">
          <i class="fas fa-external-link-alt"></i> Voir le site
        </a>
        
        <!-- Bouton pour les liens de code -->
        <div v-if="hasCodeLinks" class="code-links-container">
          <button 
            ref="codeButton"
            @click="toggleCodeMenu" 
            class="project-link code"
            :class="{ active: showCodeMenu }"
          >
            <i class="fab fa-github"></i> 
            Voir le code
            <i class="fas fa-chevron-down chevron" :class="{ rotated: showCodeMenu }"></i>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu téléporté dans le body -->
    <Teleport to="body">
      <div v-if="showCodeMenu" class="code-menu-portal" :style="menuPosition">
        <div class="code-menu-header">
          <span>Choisir le repository :</span>
        </div>
        <div class="code-menu-links">
          <a 
            v-for="(link, type) in availableCodeLinks" 
            :key="type"
            :href="link" 
            target="_blank" 
            rel="noopener noreferrer"
            class="code-menu-link"
            @click="closeCodeMenu"
          >
            <i :class="getIconForLinkType(type)"></i>
            <span>{{ getLabelForLinkType(type) }}</span>
            <i class="fas fa-external-link-alt external-icon"></i>
          </a>
        </div>
      </div>
      
      <!-- Overlay pour fermer le menu -->
      <div v-if="showCodeMenu" class="overlay" @click="closeCodeMenu"></div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps, nextTick } from 'vue'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  demoLink: {
    type: String,
    default: ''
  },
  codeLinks: {
    type: Array,
    default: () => []
  }
})

// État local
const showCodeMenu = ref(false)
const menuPosition = ref({})
const codeButton = ref(null)

// Computed properties
const hasCodeLinks = computed(() => {
  return props.codeLinks && props.codeLinks.length > 0
})

const availableCodeLinks = computed(() => {
  if (!props.codeLinks || props.codeLinks.length === 0) return {}
  
  const links = {}
  props.codeLinks.forEach(linkObj => {
    Object.entries(linkObj).forEach(([type, url]) => {
      if (url && url.trim() !== '') {
        links[type] = url
      }
    })
  })
  return links
})

// Méthodes
const toggleCodeMenu = async () => {
  showCodeMenu.value = !showCodeMenu.value
  
  if (showCodeMenu.value) {
    await nextTick()
    calculateMenuPosition()
  }
}

const calculateMenuPosition = () => {
  if (!codeButton.value) return
  
  const rect = codeButton.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight
  const viewportWidth = window.innerWidth
  
  let top = rect.bottom + 8
  let left = rect.left
  
  // Ajuster si le menu sort de l'écran
  if (top + 200 > viewportHeight) {
    top = rect.top - 200 - 8
  }
  
  if (left + 200 > viewportWidth) {
    left = viewportWidth - 200 - 10
  }
  
  menuPosition.value = {
    top: `${top}px`,
    left: `${left}px`
  }
}

const closeCodeMenu = () => {
  showCodeMenu.value = false
}

const getIconForLinkType = (type) => {
  const icons = {
    frontend: 'fas fa-desktop',
    backend: 'fas fa-server',
    mobile: 'fas fa-mobile-alt',
    api: 'fas fa-plug',
    database: 'fas fa-database',
    other: 'fas fa-folder'
  }
  return icons[type] || 'fab fa-github'
}

const getLabelForLinkType = (type) => {
  const labels = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    api: 'API',
    database: 'Base de données',
    other: 'Autre'
  }
  return labels[type] || type.charAt(0).toUpperCase() + type.slice(1)
}

// Fermer le menu avec Escape
const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeCodeMenu()
  }
}

// Recalculer la position au redimensionnement
const handleResize = () => {
  if (showCodeMenu.value) {
    calculateMenuPosition()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.project-card {
  background: var(--white);
  border-radius: 8px;
  overflow: visible;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.project-image {
  height: 400px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 3rem;
}

.project-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text-dark);
  font-size: 1.25rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.project-tag {
  background-color: var(--accent-color);
  color: var(--text-dark);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-description {
  color: var(--text-light);
  margin-bottom: 20px;
  flex: 1;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 10px;
  margin-top: auto;
  position: relative;
}

.project-link {
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  position: relative;
}

.project-link.demo {
  background-color: var(--primary-color);
  color: var(--white);
}

.project-link.demo:hover {
  background-color: var(--primary-dark);
}

.project-link.code {
  background-color: var(--secondary-dark);
  color: var(--white);
}

.project-link.code:hover {
  background-color: var(--text-dark);
}

.project-link.code.active {
  background-color: var(--text-dark);
}

.code-links-container {
  position: relative;
}

.chevron {
  transition: transform 0.3s ease;
  font-size: 0.8rem;
}

.chevron.rotated {
  transform: rotate(180deg);
}

/* Styles pour le menu téléporté */
.code-menu-portal {
  position: fixed;
  background: var(--white);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  z-index: 999999;
  min-width: 200px;
  overflow: hidden;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.code-menu-header {
  padding: 12px 15px;
  background-color: var(--background-light);
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-dark);
  border-bottom: 1px solid #eee;
}

.code-menu-links {
  padding: 8px 0;
}

.code-menu-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  color: var(--text-dark);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;
  position: relative;
}

.code-menu-link:hover {
  background-color: var(--background-light);
  color: var(--primary-color);
}

.code-menu-link i:first-child {
  width: 16px;
  font-size: 0.9rem;
}

.external-icon {
  margin-left: auto;
  font-size: 0.7rem;
  opacity: 0.5;
}

.code-menu-link:hover .external-icon {
  opacity: 1;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999998;
  background: transparent;
}

/* Media Queries */
@media (max-width: 768px) {
  .project-links {
    flex-direction: column;
    gap: 8px;
  }
  
  .code-menu-portal {
    right: 10px;
    left: 10px;
    min-width: auto;
  }
  
  .project-image {
    height: 250px;
  }
}
</style>