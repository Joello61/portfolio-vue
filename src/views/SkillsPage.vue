<template>
  <div class="skills-page">
    <!-- En-tête de la page -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" >
          <h1 class="page-title">Mes compétences</h1>
          <p class="page-description">
            Une liste détaillée des technologies et outils que je maîtrise 
            dans le domaine du développement web.
          </p>
        </div>
        <div class="skills-illustration" >
          <div class="code-illustration">
            <pre><code>&lt;<span class="tag">div</span> <span class="attr">class</span>=<span class="value">"skills"</span>&gt;
  &lt;<span class="tag">code</span>&gt;
    <span class="comment">// Des compétences solides</span>
    <span class="keyword">const</span> <span class="variable">passion</span> = <span class="string">"code"</span>;
    <span class="keyword">function</span> <span class="function">createExperience</span>() {
      <span class="keyword">return</span> <span class="variable">expertise</span> + <span class="variable">creativity</span>;
    }
  &lt;/<span class="tag">code</span>&gt;
&lt;/<span class="tag">div</span>&gt;</code></pre>
          </div>
        </div>
      </div>
      <div class="header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,165.3C672,171,768,213,864,224C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <section class="skills-overview">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Vue d'ensemble</span>
          <h2 class="section-title">Mon éventail de compétences</h2>
          <p class="section-description">
            J'ai acquis diverses compétences techniques tout au long de ma carrière, 
            me permettant de développer des solutions complètes et performantes.
          </p>
        </div>

        <div class="skill-categories">
          <div class="skill-category" >
            <div class="category-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <div class="category-content">
              <h3>Frontend</h3>
              <p>Création d'interfaces utilisateur modernes et réactives</p>
            </div>
          </div>
          <div class="skill-category" >
            <div class="category-icon">
              <i class="fas fa-server"></i>
            </div>
            <div class="category-content">
              <h3>Backend</h3>
              <p>Développement de systèmes robustes et APIs performantes</p>
            </div>
          </div>
          <div class="skill-category" >
            <div class="category-icon">
              <i class="fas fa-tools"></i>
            </div>
            <div class="category-content">
              <h3>Outils &amp; Autres</h3>
              <p>Maîtrise des outils de développement et workflows modernes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Frontend -->
    <section class="skills-category-section" id="frontend">
      <div class="container">
        <div class="category-header" >
          <div class="category-icon-large">
            <i class="fas fa-laptop-code"></i>
          </div>
          <div class="category-title-wrapper">
            <h2 class="category-title">Front-end</h2>
            <p class="category-description">
              Technologies et langages utilisés pour créer des interfaces utilisateur dynamiques et attrayantes.
            </p>
          </div>
        </div>
        
        <div class="skills-grid" >
          <SkillItem 
            v-for="(skill, index) in frontendSkills" 
            :key="index"
            :name="skill.name" 
            :level="skill.level" 
            :description="skill.description"
            :icon="skill.icon" 
          />
        </div>
      </div>
    </section>

    <!-- Section Backend -->
    <section class="skills-category-section alt-bg" id="backend">
      <div class="container">
        <div class="category-header" >
          <div class="category-icon-large">
            <i class="fas fa-server"></i>
          </div>
          <div class="category-title-wrapper">
            <h2 class="category-title">Back-end</h2>
            <p class="category-description">
              Langages et frameworks utilisés pour développer la logique serveur et les bases de données.
            </p>
          </div>
        </div>
        
        <div class="skills-grid" >
          <SkillItem 
            v-for="(skill, index) in backendSkills" 
            :key="index"
            :name="skill.name" 
            :level="skill.level" 
            :description="skill.description"
            :icon="skill.icon" 
          />
        </div>
      </div>
    </section>

    <!-- Section Outils & Autres -->
    <section class="skills-category-section" id="tools">
      <div class="container">
        <div class="category-header" >
          <div class="category-icon-large">
            <i class="fas fa-tools"></i>
          </div>
          <div class="category-title-wrapper">
            <h2 class="category-title">Outils & Autres</h2>
            <p class="category-description">
              Outils, méthodologies et compétences complémentaires pour un développement efficace.
            </p>
          </div>
        </div>
        
        <div class="skills-grid" >
          <SkillItem 
            v-for="(skill, index) in otherSkills" 
            :key="index"
            :name="skill.name" 
            :level="skill.level" 
            :description="skill.description"
            :icon="skill.icon" 
          />
        </div>
      </div>
    </section>

    <!-- Section Formation continue -->
    <section class="skills-learning">
      <div class="container">
        <div class="learning-content" >
          <h2>Formation continue</h2>
          <p>
            Le domaine du développement web évolue constamment. 
            Je m'assure de rester à jour avec les dernières technologies et meilleures pratiques 
            à travers des formations régulières et une veille technologique active.
          </p>
          <div class="learning-platforms">
            <div class="platform">
              <i class="fas fa-book"></i>
              <span>Udemy</span>
            </div>
            <div class="platform">
              <i class="fab fa-youtube"></i>
              <span>YouTube</span>
            </div>
            <div class="platform">
              <i class="fas fa-graduation-cap"></i>
              <span>Coursera</span>
            </div>
            <div class="platform">
              <i class="fas fa-laptop-code"></i>
              <span>FreeCodeCamp</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Appel à l'action -->
    <section class="skills-cta">
      <div class="container">
        <div class="cta-content" >
          <h2>Intéressé par mes compétences ?</h2>
          <p>Découvrez comment je les ai mises en pratique dans mes différents projets</p>
          <router-link to="/projects" class="btn btn-primary">
            <span class="btn-text">Voir mes projets</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import SkillItem from '../components/SkillItem.vue'

// Définition des données réactives
const frontendSkills = reactive([
  {
    name: 'Angular',
    level: 85,
    description: 'Développement d\'applications SPA avec TypeScript',
    icon: 'fab fa-angular'
  },
  {
    name: 'Vue.js',
    level: 80,
    description: 'Création d\'interfaces utilisateur réactives et modernes',
    icon: 'fab fa-vuejs'
  },
  {
    name: 'JavaScript/TypeScript',
    level: 80,
    description: 'ES6+, programmation orientée objet, typage statique',
    icon: 'fab fa-js'
  },
  {
    name: 'HTML5/CSS3',
    level: 85,
    description: 'Structure sémantique, design responsive, animations',
    icon: 'fab fa-html5'
  },
  {
    name: 'CSS Frameworks',
    level: 75,
    description: 'Bootstrap, Tailwind CSS, Material Design',
    icon: 'fab fa-css3-alt'
  },
  {
    name: 'Mobile Web',
    level: 70,
    description: 'Applications web progressives, design responsive',
    icon: 'fas fa-mobile-alt'
  }
])

const backendSkills = reactive([
  {
    name: 'Java & Spring Boot',
    level: 80,
    description: 'Développement d\'APIs REST, microservices',
    icon: 'fab fa-java'
  },
  {
    name: 'PHP & Symfony',
    level: 75,
    description: 'Création d\'applications web robustes',
    icon: 'fab fa-php'
  },
  {
    name: 'Node.js',
    level: 75,
    description: 'Express, RESTful APIs, Middleware',
    icon: 'fab fa-node-js'
  },
  {
    name: 'Python & Flask',
    level: 70,
    description: 'Analyse de données, applications web légères',
    icon: 'fab fa-python'
  },
  {
    name: 'SQL Databases',
    level: 80,
    description: 'PostgreSQL, MySQL, conception et optimisation',
    icon: 'fas fa-database'
  }
])

const otherSkills = reactive([
  {
    name: 'Git & Version Control',
    level: 85,
    description: 'Gestion de versions, branches, pull requests',
    icon: 'fab fa-git-alt'
  },
  {
    name: 'Docker',
    level: 70,
    description: 'Conteneurisation, environnements isolés',
    icon: 'fab fa-docker'
  },
  {
    name: 'CI/CD',
    level: 65,
    description: 'Pipelines d\'intégration et déploiement continu avec GitLab',
    icon: 'fas fa-cogs'
  },
  {
    name: 'IDE & Outils',
    level: 90,
    description: 'VS Code, IntelliJ, PHPStorm, PyCharm, WebStorm',
    icon: 'fas fa-laptop-code'
  },
  {
    name: 'Méthodologies Agiles',
    level: 75,
    description: 'Scrum, Kanban, gestion de projet',
    icon: 'fas fa-tasks'
  },
  {
    name: 'Soft Skills',
    level: 85,
    description: 'Travail d\'équipe, gestion du temps, autonomie, adaptabilité',
    icon: 'fas fa-users'
  }
])

onMounted(() => {
  // Animation des barres de progression
  gsap.from('.skill-progress', {
    width: 0,
    duration: 1.5,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 80%'
    }
  })
  
  // Animation du code dans l'illustration
  gsap.from('.code-illustration code span', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.03,
    ease: 'power3.out',
    delay: 0.3
  })
})
</script>

<style scoped>
.skills-page {
  background-color: var(--background-light);
}

/* Header de la page */
.page-header {
  background: linear-gradient(135deg, var(--secondary-dark) 0%, var(--secondary-color) 100%);
  color: var(--white);
  padding: 100px 0 150px;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23ffffff" fill-opacity="0.05" d="M0,224L48,186.7C96,149,192,75,288,69.3C384,64,480,128,576,144C672,160,768,128,864,106.7C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
  background-size: cover;
  background-position: center bottom;
  opacity: 0.3;
}

.header-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.header-content {
  max-width: 600px;
  z-index: 2;
  position: relative;
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
  left: 0;
}

.page-description {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.7;
}

.skills-illustration {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  max-width: 500px;
}

.code-illustration {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  line-height: 1.5;
  box-shadow: var(--shadow-lg);
}

.code-illustration pre {
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
}

.code-illustration code {
  color: var(--white);
}

.code-illustration .tag {
  color: #e06c75;
}

.code-illustration .attr {
  color: #d19a66;
}

.code-illustration .value {
  color: #98c379;
}

.code-illustration .comment {
  color: #7f848e;
}

.code-illustration .keyword {
  color: #c678dd;
}

.code-illustration .function {
  color: #61afef;
}

.code-illustration .variable {
  color: #e06c75;
}

.code-illustration .string {
  color: #98c379;
}

/* Section d'aperçu */
.skills-overview {
  padding: 80px 0;
  background-color: var(--white);
}

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

.section-description {
  max-width: 700px;
  margin: 20px auto 0;
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.7;
}

.skill-categories {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
}

.skill-category {
  flex: 1;
  min-width: 300px;
  background-color: var(--white);
  border-radius: 10px;
  padding: 30px;
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-md);
}

.category-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(66, 184, 131, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.category-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.category-content p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Sections de catégories de compétences */
.skills-category-section {
  padding: 80px 0;
}

.skills-category-section.alt-bg {
  background-color: var(--accent-color);
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  gap: 30px;
}

.category-icon-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--secondary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--white);
  flex-shrink: 0;
}

.category-title-wrapper {
  flex: 1;
}

.category-title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--secondary-dark);
}

.category-description {
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.7;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 25px;
}

/* Section d'apprentissage continu */
.skills-learning {
  padding: 80px 0;
  background-color: var(--primary-color);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.skills-learning::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23ffffff" fill-opacity="0.1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"%3E%3C/path%3E%3C/svg%3E');
  background-size: cover;
  background-position: center top;
  opacity: 0.3;
}

.learning-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.learning-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--white);
}

.learning-content p {
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.7;
  opacity: 0.9;
}

.learning-platforms {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.platform {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.platform:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.2);
}

.platform i {
  font-size: 1.5rem;
}

/* Section CTA */
.skills-cta {
  padding: 80px 0;
  background-color: var(--white);
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--secondary-dark);
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 40px;
  color: var(--text-light);
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

/* Media Queries */
@media (max-width: 1200px) {
  .skills-illustration {
    right: 2%;
    transform: translateY(-50%) scale(0.9);
  }
}

@media (max-width: 992px) {
  .page-header {
    padding: 80px 0 120px;
  }
  
  .header-content {
    max-width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .page-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .skills-illustration {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .code-illustration {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .skill-categories {
    flex-direction: column;
  }
  
  .skill-category {
    min-width: 100%;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .category-title-wrapper {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .learning-platforms {
    flex-direction: column;
    align-items: center;
  }
  
  .platform {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 60px 0 100px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .code-illustration {
    font-size: 0.8rem;
  }
}
</style>