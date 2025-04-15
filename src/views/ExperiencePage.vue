<template>
  <div class="experience-page">
    <!-- En-tête de la page -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" >
          <h1 class="page-title">Mon parcours</h1>
          <p class="page-description">
            Découvrez mon expérience professionnelle et ma formation dans le domaine du développement web.
          </p>
        </div>
      </div>
      <div class="header-pattern"></div>
      <div class="header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- Navigation de la chronologie -->
    <section class="timeline-nav">
      <div class="container">
        <div class="nav-container" >
          <a href="#experience" class="nav-item active">
            <i class="fas fa-briefcase"></i>
            <span>Expérience</span>
          </a>
          <a href="#education" class="nav-item">
            <i class="fas fa-graduation-cap"></i>
            <span>Formation</span>
          </a>
          <a href="#certifications" class="nav-item">
            <i class="fas fa-certificate"></i>
            <span>Compétences</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Section expérience professionnelle -->
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Carrière professionnelle</span>
          <h2 class="section-title">Expérience professionnelle</h2>
          <p class="section-description">
            Mon parcours professionnel dans le développement web et les technologies numériques.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-line"></div>
          
          <div class="timeline-item" >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-date">12/2024 - Actuel</div>
            </div>
            <div class="timeline-content">
              <div class="content-card">
                <div class="card-header">
                  <h3 class="job-title">Alternant Développeur Fullstack</h3>
                  <div class="company-info">
                    <span class="company-name">Arthur Ngaku (ANG Tech)</span>
                    <span class="job-location">Marseille - Contrat d'apprentissage</span>
                  </div>
                </div>
                <div class="card-body">
                  <p class="job-description">
                    Développement d'une application web et mobile intégrant la 3D, conception d'API REST sécurisée,
                    et implémentation d'une interface utilisateur moderne avec Vue.js.
                  </p>
                  <div class="job-responsibilities">
                    <h4>Responsabilités clés :</h4>
                    <ul>
                      <li>Développement d'une application web et mobile intégrant la 3D</li>
                      <li>Conception du backend avec API REST sécurisée</li>
                      <li>Développement du frontend en Vue.js</li>
                      <li>Intégration d'une API de traitement d'images pour la reconstruction 3D</li>
                      <li>Mise en place de pipelines CI/CD avec GitLab</li>
                      <li>Rédaction d'une documentation technique complète</li>
                    </ul>
                  </div>
                  <div class="job-tags">
                    <span class="tag">Vue.js</span>
                    <span class="tag">API REST</span>
                    <span class="tag">3D</span>
                    <span class="tag">CI/CD</span>
                    <span class="tag">GitLab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item" >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-date">10/2023 - 07/2024</div>
            </div>
            <div class="timeline-content">
              <div class="content-card">
                <div class="card-header">
                  <h3 class="job-title">Stagiaire Consultant Informatique</h3>
                  <div class="company-info">
                    <span class="company-name">SKOOVEL Sarl</span>
                    <span class="job-location">Yaoundé, Cameroun - Stage</span>
                  </div>
                </div>
                <div class="card-body">
                  <p class="job-description">
                    Consultant informatique polyvalent avec des missions d'analyse de données, support technique,
                    développement web et gestion de bases de données pour divers clients.
                  </p>
                  <div class="job-achievements">
                    <h4>Responsabilités :</h4>
                    <ul>
                      <li>Analyse des données et rapports techniques</li>
                      <li>Support technique et résolution de problèmes</li>
                      <li>Développement et gestion de sites web</li>
                      <li>Gestion et optimisation de bases de données</li>
                      <li>Formation et support utilisateur</li>
                      <li>Participation à la gestion de projets</li>
                    </ul>
                  </div>
                  <div class="job-tags">
                    <span class="tag">Analyse de données</span>
                    <span class="tag">Support technique</span>
                    <span class="tag">Web</span>
                    <span class="tag">BDD</span>
                    <span class="tag">Formation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item" >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-date">04/2022 - 06/2022</div>
            </div>
            <div class="timeline-content">
              <div class="content-card">
                <div class="card-header">
                  <h3 class="job-title">Stagiaire Développeur Web</h3>
                  <div class="company-info">
                    <span class="company-name">Megasoft Sarl</span>
                    <span class="job-location">Yaoundé, Cameroun - Stage</span>
                  </div>
                </div>
                <div class="card-body">
                  <p class="job-description">
                    Stage de développement web axé sur la création d'applications, l'intégration d'API REST,
                    la maintenance et la correction de bugs sur des projets existants.
                  </p>
                  <div class="job-responsibilities">
                    <h4>Responsabilités :</h4>
                    <ul>
                      <li>Développement d'applications web et mobiles</li>
                      <li>Intégration d'API REST dans les applications</li>
                      <li>Maintenance et correction de bugs</li>
                      <li>Création et optimisation de requêtes SQL</li>
                      <li>Rédaction de documentations techniques</li>
                      <li>Tests unitaires et fonctionnels</li>
                    </ul>
                  </div>
                  <div class="job-tags">
                    <span class="tag">Web</span>
                    <span class="tag">Mobile</span>
                    <span class="tag">API REST</span>
                    <span class="tag">SQL</span>
                    <span class="tag">Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section formation -->
    <section id="education" class="education-section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Parcours académique</span>
          <h2 class="section-title">Formation</h2>
          <p class="section-description">
            Mon parcours éducatif et mes qualifications académiques.
          </p>
        </div>

        <div class="education-cards">
          <div class="education-card" >
            <div class="card-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="card-content">
              <div class="education-period">09/2024 - En cours</div>
              <h3 class="education-title">Master Informatique</h3>
              <div class="education-school">Université de Toulouse Jean Jaurès</div>
              <p class="education-description">
                Formation avancée en informatique, approfonissant mes connaissances 
                en développement logiciel, architecture de systèmes et technologies web modernes.
              </p>
              <div class="education-details">
                <div class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Toulouse, France</span>
                </div>
              </div>
            </div>
          </div>

          <div class="education-card" >
            <div class="card-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="card-content">
              <div class="education-period">09/2022 - 08/2023</div>
              <h3 class="education-title">Licence Informatique et Réseau</h3>
              <div class="education-school">IUT de Bandjoun</div>
              <p class="education-description">
                Formation approfondie en informatique et réseaux, couvrant les principaux aspects 
                de la programmation, des systèmes d'information et des télécommunications.
              </p>
              <div class="education-details">
                <div class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Bandjoun, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="education-card" >
            <div class="card-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="card-content">
              <div class="education-period">09/2020 - 08/2022</div>
              <h3 class="education-title">DUT Génie Logiciel</h3>
              <div class="education-school">IUT de Bandjoun</div>
              <p class="education-description">
                Formation technique en génie logiciel, couvrant les bases de la programmation,
                des bases de données, et du développement d'applications.
              </p>
              <div class="education-details">
                <div class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Bandjoun, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section certifications/compétences -->
    <section id="certifications" class="certifications-section">
      <div class="container">
        <div class="section-title-container" >
          <span class="section-subtitle">Compétences techniques</span>
          <h2 class="section-title">Technologies maîtrisées</h2>
          <p class="section-description">
            Les technologies et outils que j'utilise quotidiennement dans mes projets.
          </p>
        </div>

        <div class="certifications-grid">
          <div class="certification-card" >
            <div class="certification-badge">
              <i class="fab fa-java"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">Langages de programmation</h3>
              <p class="certification-description">
                Java, PHP, JavaScript, TypeScript, Python
              </p>
            </div>
          </div>
          
          <div class="certification-card" >
            <div class="certification-badge">
              <i class="fas fa-code"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">Frameworks</h3>
              <p class="certification-description">
                Angular, Spring Boot, Symfony, Node.js, Flask, Vue.js
              </p>
            </div>
          </div>
          
          <div class="certification-card" >
            <div class="certification-badge">
              <i class="fas fa-database"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">Bases de données</h3>
              <p class="certification-description">
                PostgreSQL, MySQL, MongoDB
              </p>
            </div>
          </div>
          
          <div class="certification-card" >
            <div class="certification-badge">
              <i class="fab fa-docker"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">DevOps & CI/CD</h3>
              <p class="certification-description">
                Docker, Git, GitLab CI/CD, déploiement continu
              </p>
            </div>
          </div>
          
          <div class="certification-card" >
            <div class="certification-badge">
              <i class="fas fa-laptop-code"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">Outils et environnements</h3>
              <p class="certification-description">
                Visual Studio Code, IntelliJ, PHPStorm, PyCharm, WebStorm
              </p>
            </div>
          </div>
          
          <div class="certification-card" >
            <div class="certification-badge">
              <i class="fas fa-users"></i>
            </div>
            <div class="certification-content">
              <h3 class="certification-title">Soft Skills</h3>
              <p class="certification-description">
                Travail d'équipe, esprit critique, gestion du temps, créativité technique, 
                autonomie professionnelle, adaptabilité
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CV téléchargeable -->
    <section class="resume-download">
      <div class="container">
        <div class="download-card" >
          <div class="card-pattern"></div>
          <div class="download-content">
            <div class="download-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <div class="download-text">
              <h2>Téléchargez mon CV complet</h2>
              <p>Pour plus de détails sur mon parcours professionnel et mes compétences.</p>
            </div>
            <a href="docs/cv.pdf" class="download-btn" download="CV_TchindaJoel.pdf">
              <span>Télécharger</span>
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrement des plugins GSAP
gsap.registerPlugin(ScrollTrigger)

// Fonctions pour la navigation et les animations
onMounted(() => {
  // Animation de la timeline
  const timelineAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top center',
      end: 'bottom bottom',
      scrub: 1
    }
  })
  
  timelineAnimation.to('.timeline-line', {
    height: '100%',
    duration: 1,
    ease: 'none'
  })
  
  // Navigation active au scroll
  const sections = document.querySelectorAll('section[id]')
  const navItems = document.querySelectorAll('.nav-item')
  
  window.addEventListener('scroll', () => {
    let current = ''
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      
      if (scrollY >= (sectionTop - 300)) {
        current = section.getAttribute('id')
      }
    })
    
    navItems.forEach(item => {
      item.classList.remove('active')
      if (item.getAttribute('href').slice(1) === current) {
        item.classList.add('active')
      }
    })
  })
  
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        })
      }
    })
  })
})
</script>

<style scoped>
.experience-page {
  background-color: var(--background-light);
}

/* Header de la page */
.page-header {
  background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
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
  background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 10%),
                    radial-gradient(circle at 75% 44%, rgba(255, 255, 255, 0.1) 0%, transparent 15%),
                    radial-gradient(circle at 64% 77%, rgba(255, 255, 255, 0.1) 0%, transparent 12%),
                    radial-gradient(circle at 12% 67%, rgba(255, 255, 255, 0.1) 0%, transparent 8%);
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
  width: 60%;
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

/* Navigation de la chronologie */
.timeline-nav {
  margin-top: -40px;
  margin-bottom: 60px;
  position: relative;
  z-index: 10;
}

.nav-container {
  background-color: var(--white);
  border-radius: 15px;
  padding: 15px;
  box-shadow: var(--shadow-lg);
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-item {
  padding: 15px 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: var(--text-dark);
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-item i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(66, 184, 131, 0.1);
  color: var(--primary-color);
}

.nav-item:hover i {
  transform: translateY(-3px);
}

.nav-item.active {
  background-color: var(--primary-color);
  color: var(--white);
}

/* Sections communes */
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

/* Section expérience */
.experience-section {
  padding: 80px 0;
  position: relative;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50px;
  top: 0;
  width: 3px;
  height: 0;
  background: linear-gradient(to bottom, var(--primary-color), rgba(66, 184, 131, 0.3));
  border-radius: 3px;
  z-index: 1;
}

.timeline-item {
  display: flex;
  margin-bottom: 50px;
  position: relative;
}

.timeline-marker {
  flex: 0 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.3);
  position: absolute;
  left: 51px; /* même que .timeline-line */
  transform: translateX(-50%);
  top: -10px;
  margin-top: 0;
}

.marker-date {
  margin-top: 10px;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.timeline-content {
  flex: 1;
}

.content-card {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-header {
  padding: 20px 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(66, 184, 131, 0.05);
}

.job-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--secondary-dark);
}

.company-info {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  color: var(--text-light);
  font-size: 0.95rem;
}

.company-name {
  font-weight: 500;
  display: flex;
  align-items: center;
}

.company-name::before {
  content: '\f1ad';
  font-family: 'Font Awesome 5 Free';
  margin-right: 8px;
  color: var(--primary-color);
}

.job-location {
  display: flex;
  align-items: center;
}

.job-location::before {
  content: '\f3c5';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 8px;
  color: var(--primary-color);
}

.card-body {
  padding: 25px;
}

.job-description {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.7;
}

.job-responsibilities,
.job-achievements {
  margin-bottom: 20px;
}

.job-responsibilities h4,
.job-achievements h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--secondary-dark);
}

.job-responsibilities ul,
.job-achievements ul {
  list-style: none;
  padding-left: 20px;
}

.job-responsibilities ul li,
.job-achievements ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.job-responsibilities ul li::before,
.job-achievements ul li::before {
  content: '\f00c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: rgba(66, 184, 131, 0.1);
  color: var(--primary-color);
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Section formation */
.education-section {
  padding: 80px 0;
  background-color: var(--accent-color);
}

.education-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.education-card {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  width: 100%;
  max-width: 500px;
  display: flex;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.card-icon {
  width: 80px;
  background-color: var(--secondary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.card-icon::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.card-icon::after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.card-content {
  flex: 1;
  padding: 25px;
}

.education-period {
  background-color: var(--primary-color);
  color: var(--white);
  display: inline-block;
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 15px;
}

.education-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--secondary-dark);
}

.education-school {
  font-weight: 500;
  color: var(--text-light);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.education-school::before {
  content: '\f19c';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 8px;
  color: var(--secondary-dark);
}

.education-description {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 15px;
}

.education-details {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.detail-item i {
  color: var(--primary-color);
}

/* Section certifications */
.certifications-section {
  padding: 80px 0;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.certification-card {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.certification-badge {
  height: 120px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #2c3e50 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.certification-badge::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 10%),
                    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 15%);
}

.badge-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.certification-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.certification-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--secondary-dark);
}

.certification-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
  color: var(--text-light);
  font-size: 0.9rem;
}

.certification-issuer,
.certification-date {
  display: flex;
  align-items: center;
  gap: 8px;
}

.certification-issuer i,
.certification-date i {
  color: var(--primary-color);
}

.certification-description {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 15px;
  flex: 1;
}

.certification-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: auto;
  transition: color 0.3s ease;
}

.certification-link:hover {
  color: var(--secondary-dark);
}

/* Section CV téléchargeable */
.resume-download {
  padding: 80px 0;
  background-color: var(--accent-color);
}

.download-card {
  background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.card-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
                    radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.1) 0%, transparent 20%);
  opacity: 0.6;
}

.download-content {
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  position: relative;
  z-index: 1;
}

.download-icon {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--white);
  flex-shrink: 0;
}

.download-text {
  flex: 1;
  color: var(--white);
}

.download-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--white);
}

.download-text p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.download-btn {
  background-color: var(--white);
  color: var(--secondary-dark);
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.download-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.download-btn i {
  transition: transform 0.3s ease;
}

.download-btn:hover i {
  transform: translateY(3px);
}

/* Media Queries */
@media (max-width: 992px) {
  .page-title {
    font-size: 3rem;
  }
  
  .nav-container {
    gap: 10px;
  }
  
  .nav-item {
    padding: 10px 15px;
  }
  
  .download-content {
    padding: 40px 30px;
    flex-direction: column;
    text-align: center;
  }
  
  .download-icon {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 120px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .timeline-line {
    left: 30px;
  }
  
  .timeline-marker {
    flex: 0 0 60px;
  }
  
  .marker-date {
    font-size: 0.8rem;
    padding: 3px 8px;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
  
  .education-cards {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 60px 0 100px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .nav-container {
    flex-direction: column;
    padding: 10px;
  }
  
  .nav-item {
    width: 100%;
    justify-content: center;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline-marker {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 15px;
    width: 100%;
  }
  
  .marker-dot {
    margin-right: 15px;
  }
  
  .timeline-line {
    display: none;
  }
  
  .download-content {
    padding: 30px 20px;
  }
  
  .download-text h2 {
    font-size: 1.5rem;
  }
}
</style>