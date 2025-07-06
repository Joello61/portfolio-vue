<template>
  <div class="projects-page">
    <!-- En-tête de la page -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Mes projets</h1>
          <p class="page-description">
            Une sélection de mes réalisations récentes dans le développement web, 
            montrant mes compétences et mon expertise.
          </p>
        </div>
      </div>
      <div class="header-pattern"></div>
      <div class="header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,218.7C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>

    <!-- Section de filtrage -->
    <section class="projects-filter">
      <div class="container">
        <div class="filter-container">
          <h2 class="filter-title">Parcourir les projets</h2>
          <div class="filter-buttons">
            <button 
              class="filter-btn" 
              :class="{ active: currentFilter === 'all' }"
              @click="filterProjects('all')"
            >
              <span class="btn-text">Tous</span>
              <span class="btn-count">{{ projects.length }}</span>
            </button>
            <button 
              v-for="category in categories" 
              :key="category"
              class="filter-btn" 
              :class="{ active: currentFilter === category }"
              @click="filterProjects(category)"
            >
              <span class="btn-text">{{ category }}</span>
              <span class="btn-count">{{ getCategoryCount(category) }}</span>
            </button>
          </div>
          <div class="search-container">
            <div class="search-input-wrapper">
              <i class="fas fa-search"></i>
              <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="Rechercher un projet..." 
                class="search-input"
              />
              <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section des projets -->
    <section class="projects-showcase">
      <div class="container">
        <div class="projects-count">
          <p v-if="filteredAndSearchedProjects.length === 1">
            <span class="count">1</span> projet trouvé
          </p>
          <p v-else-if="filteredAndSearchedProjects.length > 0">
            <span class="count">{{ filteredAndSearchedProjects.length }}</span> projets trouvés
          </p>
          <p v-else>Aucun projet trouvé</p>
        </div>
        
        <transition-group 
          name="projects-list" 
          tag="div" 
          class="projects-grid"
        >
          <div 
            v-for="project in filteredAndSearchedProjects" 
            :key="project.id"
            class="project-item"
          >
            <ProjectCard 
              :title="project.title" 
              :description="project.description"
              :imageSrc="project.image"
              :tags="project.tags"
              :demoLink="project.demoLink"
              :codeLinks="project.codeLinks"
            />
          </div>
        </transition-group>
        
        <div v-if="filteredAndSearchedProjects.length === 0" class="no-results">
          <div class="no-results-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>Aucun projet trouvé</h3>
          <p>Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.</p>
          <button @click="resetFilters" class="btn btn-primary">
            <span class="btn-text">Réinitialiser les filtres</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Section de contact -->
    <section class="projects-contact">
      <div class="container">
        <div class="contact-card">
          <div class="contact-content">
            <h2>Vous avez un projet en tête ?</h2>
            <p>Je serais ravi de discuter de votre projet et de voir comment je peux vous aider à le concrétiser.</p>
            <router-link to="/contact" class="btn btn-light">
              <span class="btn-text">Discutons-en</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
          <div class="contact-decoration">
            <div class="decoration-circle circle-1"></div>
            <div class="decoration-circle circle-2"></div>
            <div class="decoration-circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed, onMounted } from 'vue'
import { gsap } from 'gsap'
import ProjectCard from '../components/ProjectCard.vue'

// État réactif
const currentFilter = ref('all')
const searchQuery = ref('')

// Données des projets
const projects = reactive([
  {
    id: 1,
    title: 'Exploratory website',
    description: 'Application web de présentation ludique de mon parcours, mes compétences et mes expériences.',
    image: 'images/exploratory.png',
    category: 'Frontend',
    tags: ['Angular'],
    demoLink: 'https://exploratory-website.vercel.app/',
    codeLinks: [{frontend : 'https://github.com/Joello61/exploratory-website.git'}]
  },
  {
    id: 2,
    title: 'Brulage Dashboard',
    description: 'Interface de suivi des opérations de brulage dans les pyrenées, permettant de visualiser les données et statisqtiques.',
    image: 'images/brulage.png',
    category: 'Fullstack',
    tags: ['React', 'PostgreSQL', 'Symfony', 'API REST', 'Python'],
    demoLink: 'https://github.com/Joello61/brulage-dashboard.git',
    codeLinks: [
      {
        frontend : 'https://github.com/Joello61/brulage-dashboard.git',
        backend : '',
        other : ''
      }
    ]
  },
  {
    id: 3,
    title: 'Job Tracker',
    description: 'Application de suivi des candidatures, avec gestion des statuts, des entretiens, des documents de candidature et des notes.',
    image: 'images/jobtracker.png',
    category: 'Fullstack',
    tags: ['React.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Api REST'],
    demoLink: 'https://github.com/Joello61/job-tracker-frontend.git',
    codeLinks: [{
      frontend : 'https://github.com/Joello61/job-tracker-frontend.git',
      backend : 'https://github.com/Joello61/job-tracker-backend.git'
    }]
  },
  {
    id: 4,
    title: 'Gestionnaire de tâches',
    description: 'Application web de gestion de tâches et de projets avec frontend et backend.',
    image: 'images/taskflow.png',
    category: 'Fullstack',
    tags: ['Vue.js', 'Symfony', 'MySQL'],
    demoLink: 'https://github.com/Joello61/frontend_task_flow',
    codeLinks: [
      {
        frontend : 'https://github.com/Joello61/frontend_task_flow',
        backend : 'https://github.com/Joello61/backend_task_flow2'
      }
    ]
  },
  {
    id: 5,
    title: 'Application de gestion d\'événements',
    description: 'Plateforme fullstack permettant de créer, gérer et promouvoir des événements (EventHive).',
    image: 'images/eventhive.png',
    category: 'Fullstack',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
    demoLink: 'https://github.com/Joello61/eventHiveFront',
    codeLinks: [
      {
        frontend : 'https://github.com/Joello61/eventHiveFront',
        backend : 'https://github.com/Joello61/eventHiveFront'
      }
    ]
  },
  {
    id: 6,
    title: 'Plateforme de financement participatif',
    description: 'Solution de crowdfunding permettant de connecter porteurs de projets et investisseurs (WeFund).',
    image: 'images/wefund.png',
    category: 'Fullstack',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    demoLink: 'https://github.com/Joello61/wefundWeb',
    codeLinks: [
      {
        backend : 'https://github.com/Joello61/wefundBackend',
        frontend : 'https://github.com/Joello61/wefundWeb'
      }
    ]
  },
  {
    id: 7,
    title: 'Plateforme de gestion intégrée',
    description: 'Système de gestion complet incluant gestion des ressources, comptabilité et suivi de projets.',
    image: 'images/pgi.png',
    category: 'Fullstack',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
    demoLink: 'https://github.com/Joello61/PGI-Web',
    codeLinks: [
      {
        backend : 'https://github.com/Joello61/PGI-Backend',
        frontend : 'https://github.com/Joello61/PGI-Web'
      }
    ]
  },
  {
    id: 8,
    title: 'Plateforme d\'accès aux soins de santé',
    description: 'Application web et backend permettant de faciliter l\'accès aux soins de santé pour tous (bocobi).',
    image: 'images/bocobi.png',
    category: 'Fullstack',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
    demoLink: 'https://github.com/Joello61/bocobiWeb',
    codeLinks: [
      {
        backend : 'https://github.com/Joello61/bocobiBackend',
        frontend : 'https://github.com/Joello61/bocobiWeb'
      }
    ]
  },
  {
    id: 9,
    title: 'Plateforme d\'aide à l\'autonomie à domicile',
    description: 'Application mobile dédiée à l\'assistance des personnes en perte d\'autonomie.',
    image: '',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'REST API'],
    demoLink: 'https://github.com/Joello61/paadMobile',
    codeLinks: [
      {
        frontend : 'https://github.com/Joello61/paadMobile'
      }
    ]
  },
])

// Propriétés calculées
const categories = computed(() => {
  const categoriesSet = new Set(projects.map(project => project.category))
  return Array.from(categoriesSet)
})

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === currentFilter.value)
})

const filteredAndSearchedProjects = computed(() => {
  if (!searchQuery.value) {
    return filteredProjects.value
  }
  
  const query = searchQuery.value.toLowerCase()
  return filteredProjects.value.filter(project => {
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })
})

// Méthodes
const filterProjects = (category) => {
  currentFilter.value = category
}

const getCategoryCount = (category) => {
  return projects.filter(project => project.category === category).length
}

const resetFilters = () => {
  currentFilter.value = 'all'
  searchQuery.value = ''
}

// Animations avec GSAP
onMounted(() => {
  gsap.set('.project-item', { clearProps: 'all' });
  
  gsap.from('.project-item', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    onComplete: () => {
      gsap.set('.project-item', { opacity: 1, y: 0 });
    }
  });
  
  const animateProjects = () => {
  setTimeout(() => {
    gsap.from('.project-item', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set('.project-item', { opacity: 1, y: 0 })
      }
    })
  }, 10)
}

// Watchers
watch(currentFilter, () => {
  animateProjects()
})

watch(searchQuery, () => {
  animateProjects()
})
})
</script>

<style scoped>
.projects-page {
  background-color: var(--background-light);
}

/* Header de la page */
.page-header {
  background: linear-gradient(135deg, #3a6186 0%, #89253e 100%);
  color: var(--white);
  padding: 100px 0 150px;
  position: relative;
  overflow: hidden;
}

.header-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 8%),
                    radial-gradient(circle at 75% 44%, rgba(255, 255, 255, 0.2) 0%, transparent 6%),
                    radial-gradient(circle at 64% 77%, rgba(255, 255, 255, 0.2) 0%, transparent 12%),
                    radial-gradient(circle at 12% 67%, rgba(255, 255, 255, 0.2) 0%, transparent 10%);
  opacity: 0.4;
}

.header-wave {
  color: var(--white);
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.header-content {
  max-width: 700px;
  z-index: 2;
  position: relative;
  text-align: center;
  margin: 0 auto;
}

.page-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  position: relative;
  display: inline-block;
  color: var(--white);
}

.page-title::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 4px;
  background-color: var(--primary-color);
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.page-description {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.7;
}

/* Section de filtrage */
.projects-filter {
  margin-top: -50px;
  margin-bottom: 30px;
  position: relative;
  z-index: 10;
}

.filter-container {
  background-color: var(--white);
  border-radius: 15px;
  padding: 30px;
  box-shadow: var(--shadow-lg);
}

.filter-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--secondary-dark);
  text-align: center;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}

.filter-btn {
  padding: 8px 16px;
  background-color: var(--background-light);
  border: none;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-btn .btn-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background-color: rgba(66, 184, 131, 0.1);
  color: var(--primary-color);
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.filter-btn.active .btn-count {
  background-color: rgba(255, 255, 255, 0.3);
}

.search-container {
  max-width: 500px;
  margin: 0 auto;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input-wrapper i {
  position: absolute;
  left: 15px;
  color: var(--text-light);
  font-size: 1rem;
}

.search-input {
  width: 100%;
  padding: 12px 40px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
}

.clear-search {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.clear-search:hover {
  color: var(--primary-color);
}

/* Section des projets */
.projects-showcase {
  padding: 30px 0 80px;
}

.projects-count {
  text-align: center;
  margin-bottom: 30px;
  color: var(--text-light);
  font-size: 1.1rem;
}

.projects-count .count {
  font-weight: 700;
  color: var(--primary-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 30px;
}

.project-item {
  height: 100%;
  transition: all 0.3s ease;
  opacity: 1 !important;
}


.projects-list-enter-active,
.projects-list-leave-active {
  transition: all 0.3s ease;
}

.projects-list-enter-from,
.projects-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.no-results {
  text-align: center;
  padding: 60px 0;
}

.no-results-icon {
  font-size: 3rem;
  color: var(--text-light);
  opacity: 0.3;
  margin-bottom: 20px;
}

.no-results h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--secondary-dark);
}

.no-results p {
  color: var(--text-light);
  margin-bottom: 25px;
  font-size: 1.1rem;
}

/* Section de contact */
.projects-contact {
  padding: 50px 0 100px;
}

.contact-card {
  background: linear-gradient(135deg, #3494e6 0%, #ec6ead 100%);
  border-radius: 15px;
  padding: 60px;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.contact-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.contact-content h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: var(--white);
}

.contact-content p {
  opacity: 0.9;
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.7;
}

.btn-light {
  background-color: var(--white);
  color: #3494e6;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-light:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-light i {
  transition: transform 0.3s ease;
}

.btn-light:hover i {
  transform: translateX(5px);
}

.contact-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -50px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  right: 100px;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 30%;
  transform: translateY(-50%);
}

/* Media Queries */
@media (max-width: 992px) {
  .page-title {
    font-size: 3rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .contact-card {
    padding: 40px 30px;
  }
  
  .contact-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 120px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .filter-buttons {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;
    justify-content: flex-start;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 60px 0 100px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .filter-container {
    padding: 20px 15px;
  }
  
  .contact-card {
    padding: 30px 20px;
  }
  
  .contact-content h2 {
    font-size: 1.8rem;
  }
}
</style>