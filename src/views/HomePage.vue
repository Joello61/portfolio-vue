<template>
  <div class="home">
    <!-- Section Hero -->
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content" >
          <div class="intro-badge">Développeur Fullstack</div>
          <h1 class="hero-title">
            Bonjour, je suis <br>
            <span class="highlight" ref="nameText">Timothée Joel Tchinda Tchoffo</span>
          </h1>
          <p class="hero-description">
            Développeur passionné, je conçois des applications web et mobiles modernes, 
            en combinant frontend élégant et backend robuste pour des solutions complètes.
          </p>
          <div class="hero-cta">
            <router-link to="/projects" class="btn btn-primary">
              <span class="btn-text">Voir mes projets</span>
              <i class="fas fa-chevron-right"></i>
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              <span class="btn-text">Me contacter</span>
            </router-link>
          </div>
          <div class="hero-social">
            <a href="https://www.linkedin.com/in/joel-tchinda" target="_blank" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Joello61" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:tchindajoel61@gmail.com" class="social-link">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="hero-image" >
          <div class="image-wrapper">
            <div class="blob-shape"></div>
            <div class="profile-image-container">
               <img src="images/img1.png" alt="">
            </div>
          </div>
          <div class="tech-icons">
            <div class="tech-icon" v-for="(tech, index) in techIcons" :key="index">
              <i :class="tech.icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <a href="#about" class="scroll-btn">
          <span class="scroll-text">Découvrir</span>
          <span class="scroll-dot"></span>
        </a>
      </div>
    </section>

    <!-- Section À propos -->
    <section id="about" class="about section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">À propos de moi</span>
          <h2 class="section-title">Qui suis-je ?</h2>
        </div>
        <div class="about-content" >
          <div class="about-image">
            <div class="about-image-frame">
              <img src="images/img2.png" alt="">
            </div>
          </div>
          <div class="about-text">
            <p>
              Développeur Fullstack passionné, je suis actuellement en alternance pour approfondir mes compétences
              dans la conception et la maintenance d'applications web et mobiles.
            </p>
            <p>
              Grâce à une stack technologique variée incluant Angular, Vue.js, Spring Boot, Symfony, Node.js et plus,
              j'adopte une approche axée sur la performance et l'expérience utilisateur.
            </p>
            <p>
              Curieux et rigoureux, je m'engage à développer des solutions robustes et innovantes tout en 
              continuant à me perfectionner dans un domaine en constante évolution.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-value">{{ stats.projects }}+</span>
                <span class="stat-label">Projets réalisés</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ stats.years }}+</span>
                <span class="stat-label">Années d'expérience</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">{{ stats.clients }}+</span>
                <span class="stat-label">Clients satisfaits</span>
              </div>
            </div>
            <router-link to="/experience" class="btn btn-outline">
              <span class="btn-text">Mon parcours</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Services -->
    <section class="services section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Mes services</span>
          <h2 class="section-title">Ce que je propose</h2>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index" >
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">
              {{ service.description }}
            </p>
            <ul class="service-features">
              <li v-for="(feature, idx) in service.features" :key="idx">
                <i class="fas fa-check"></i> {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Compétences principales -->
    <section class="featured-skills section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Mes compétences</span>
          <h2 class="section-title">Technologies maîtrisées</h2>
        </div>
        <div class="skills-preview" >
          <SkillItem 
            v-for="(skill, index) in featuredSkills" 
            :key="index"
            :name="skill.name" 
            :level="skill.level" 
            :description="skill.description"
            :icon="skill.icon"
          />
        </div>
        <div class="skills-cta" >
          <router-link to="/skills" class="btn btn-outline">
            <span class="btn-text">Toutes mes compétences</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section Projets récents -->
    <section class="featured-projects section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Mes travaux récents</span>
          <h2 class="section-title">Projets sélectionnés</h2>
        </div>
        <div class="projects-preview">
          <div v-for="(project, index) in featuredProjects" :key="index" class="project-item" >
            <ProjectCard 
              :title="project.title" 
              :description="project.description"
              :imageSrc="project.image"
              :tags="project.tags"
              :demoLink="project.demoLink"
              :codeLink="project.codeLink"
            />
          </div>
        </div>
        <div class="projects-cta" >
          <router-link to="/projects" class="btn btn-outline">
            <span class="btn-text">Tous mes projets</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section Contact rapide -->
    <section class="quick-contact">
      <div class="container">
        <div class="contact-card" >
          <div class="contact-text">
            <h2>Intéressé par une collaboration ?</h2>
            <p>Discutons de votre prochain projet ensemble !</p>
          </div>
          <router-link to="/contact" class="btn btn-primary">
            <span class="btn-text">Contactez-moi</span>
            <i class="fas fa-paper-plane"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import SkillItem from '../components/SkillItem.vue'
import ProjectCard from '../components/ProjectCard.vue'

// Référence pour l'animation du nom
const nameText = ref(null)

// Données pour les statistiques
const stats = reactive({
  projects: 15,
  years: 3,
  clients: 5
})

// Données pour les icônes tech du hero
const techIcons = reactive([
  { icon: 'fab fa-angular' },
  { icon: 'fab fa-vuejs' },
  { icon: 'fab fa-java' },
  { icon: 'fab fa-php' },
  { icon: 'fab fa-node-js' },
  { icon: 'fab fa-python' }
])

// Données pour les services
const services = reactive([
  {
    title: 'Développement Frontend',
    description: 'Création d\'interfaces utilisateur réactives et modernes avec les dernières technologies web.',
    icon: 'fas fa-code',
    features: ['Applications Angular', 'Sites Vue.js', 'Design responsive', 'Interfaces intuitives']
  },
  {
    title: 'Développement Backend',
    description: 'Conception d\'APIs robustes et de systèmes performants pour propulser vos applications.',
    icon: 'fas fa-server',
    features: ['REST APIs', 'Spring Boot', 'Node.js', 'Symfony']
  },
  {
    title: 'Applications Fullstack',
    description: 'Solutions complètes de bout en bout, du frontend au backend, avec une expertise variée.',
    icon: 'fas fa-laptop-code',
    features: ['Applications web', 'Applications mobiles', 'Bases de données', 'Intégration CI/CD']
  }
])

// Données pour les compétences en vedette
const featuredSkills = reactive([
  {
    name: 'Angular / Vue.js',
    level: 85,
    description: 'Développement d\'applications SPA modernes et réactives',
    icon: 'fab fa-angular'
  },
  {
    name: 'Spring Boot / Symfony',
    level: 80,
    description: 'Création d\'applications backend robustes et sécurisées',
    icon: 'fab fa-java'
  },
  {
    name: 'DevOps & CI/CD',
    level: 75,
    description: 'Docker, Git, pipelines d\'intégration et déploiement continu',
    icon: 'fab fa-docker'
  }
])

// Données pour les projets en vedette
const featuredProjects = reactive([
  {
    title: 'Plateforme d\'accès aux soins de santé',
    description: 'Application web et backend permettant de faciliter l\'accès aux soins de santé pour tous.',
    image: '',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
    demoLink: 'https://github.com/Joello61/bocobiWeb',
    codeLink: 'https://github.com/Joello61/bocobiBackend'
  },
  {
    title: 'Plateforme de financement participatif',
    description: 'Solution de crowdfunding permettant de connecter porteurs de projets et investisseurs.',
    image: '',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    demoLink: 'https://github.com/Joello61/wefundWeb',
    codeLink: 'https://github.com/Joello61/wefundBackend'
  },
  {
    title: 'Plateforme de gestion intégrée',
    description: 'Système de gestion complet incluant gestion des ressources, comptabilité et suivi de projets.',
    image: '',
    category: 'Fullstack',
    tags: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
    demoLink: 'https://github.com/Joello61/PGI-Web',
    codeLink: 'https://github.com/Joello61/PGI-Backend'
  },
])

// Animation avec GSAP au montage du composant
onMounted(() => {
  // Animation du texte surligné
  if (nameText.value) {
    gsap.from(nameText.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
  }
  
  // Animation des statistiques
  gsap.from('.stat-value', {
    textContent: 0,
    duration: 2,
    ease: 'power1.out',
    snap: { textContent: 1 },
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.about-stats',
      start: 'top 80%'
    }
  })
  
  // Animation des icônes tech
  gsap.from('.tech-icon', {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    delay: 1
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--accent-color) 100%);
  padding: 100px 0;
  overflow: hidden;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
}

.intro-badge {
  display: inline-block;
  background-color: rgba(66, 184, 131, 0.1);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 20px;
  transform: translateY(0);
  animation: float 3s ease-in-out infinite;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.highlight {
  display: inline-block;
  position: relative;
  color: var(--primary-color);
}

.highlight::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 5px;
  left: 0;
  background-color: rgba(66, 184, 131, 0.2);
  z-index: -1;
  transform: skewX(-5deg);
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: var(--text-light);
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
}

.btn i {
  transition: transform 0.3s ease;
}

.btn:hover i {
  transform: translateX(5px);
}

.hero-social {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--text-dark);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.image-wrapper {
  position: relative;
  width: 380px;
  height: 380px;
}

.blob-shape {
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background-color: var(--primary-color);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: blob-animation 8s linear infinite;
  opacity: 0.1;
  z-index: -1;
}

.profile-image-container {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 5px solid var(--white);
  z-index: 1;
}

.profile-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.tech-icons {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.tech-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: var(--shadow-sm);
  animation: float 3s ease-in-out infinite;
}

.tech-icon:nth-child(1) {
  top: 20%;
  left: 10%;
  color: #E44D26;
  animation-delay: 0.5s;
}

.tech-icon:nth-child(2) {
  top: 0;
  right: 10%;
  color: #264DE4;
  animation-delay: 0.7s;
}

.tech-icon:nth-child(3) {
  bottom: 15%;
  left: 15%;
  color: #F7DF1E;
  animation-delay: 0.9s;
}

.tech-icon:nth-child(4) {
  bottom: 0;
  right: 40%;
  color: #41B883;
  animation-delay: 1.1s;
}

.tech-icon:nth-child(5) {
  top: 50%;
  right: -15%;
  color: #61DAFB;
  animation-delay: 1.3s;
}

.tech-icon:nth-child(6) {
  top: 70%;
  right: 15%;
  color: #68A063;
  animation-delay: 1.5s;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
}

.scroll-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
}

.scroll-text {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.scroll-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-color);
}

/* Section À propos */
.section-title-container {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  color: var(--primary-color);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 10px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-dark);
  position: relative;
  padding-bottom: 20px;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: var(--primary-color);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image-frame {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-md);
}

.about-image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.about-image-frame::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  top: 15px;
  left: 15px;
  z-index: -1;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-text p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1.05rem;
}

.about-stats {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  flex: 1;
  margin: 0 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.stat-label {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* Services Section */
.services {
  background-color: var(--accent-color);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: var(--white);
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: var(--primary-color);
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
  z-index: -1;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-md);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: rgba(66, 184, 131, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 25px;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.service-description {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.7;
}

.service-features {
  list-style: none;
}

.service-features li {
  margin-bottom: 10px;
  color: var(--text-dark);
  display: flex;
  align-items: center;
}

.service-features li i {
  color: var(--primary-color);
  margin-right: 10px;
  font-size: 0.9rem;
}

/* Skills Section */
.skills-preview {
  margin-bottom: 50px;
}

/* Projects Section */
.projects-preview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.project-item {
  height: 100%;
  transition: transform 0.3s ease;
}

.project-item:hover {
  transform: translateY(-10px);
}

/* Call to Action sections */
.skills-cta, .projects-cta {
  text-align: center;
}

/* Quick Contact Section */
.quick-contact {
  padding: 80px 0;
  background-color: var(--background-light);
}

.contact-card {
  background-color: var(--secondary-dark);
  border-radius: 10px;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  top: -100px;
  right: -50px;
}

.contact-card::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  bottom: -50px;
  left: -50px;
}

.contact-text {
  color: var(--white);
}

.contact-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--white);
}

.contact-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes blob-animation {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 50% 50% 30% 70% / 50% 50% 30% 50%;
  }
  50% {
    border-radius: 70% 30% 50% 50% / 40% 40% 60% 60%;
  }
  75% {
    border-radius: 30% 70% 70% 30% / 50% 50% 30% 60%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

/* Media Queries */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-bottom: 50px;
    max-width: 100%;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .hero-social {
    justify-content: center;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    max-width: 80%;
    margin: 0 auto;
    grid-row: 1;
  }
  
  .contact-card {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-preview {
    grid-template-columns: 1fr;
  }
  
  .about-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .stat-item {
    margin: 0;
  }
  
  .contact-card {
    padding: 40px 20px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-cta {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-cta .btn {
    width: 100%;
    justify-content: center;
  }
  
  .image-wrapper {
    width: 300px;
    height: 300px;
  }
}
</style>