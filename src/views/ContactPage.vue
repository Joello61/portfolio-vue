<template>
  <div class="contact-page">
    <!-- En-tête de la page -->
    <section class="page-header">
      <div class="container">
        <div class="header-content" >
          <h1 class="page-title">Me contacter</h1>
          <p class="page-description">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour
            discuter de vos idées et voir comment je peux vous aider à les
            concrétiser.
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

    <!-- Section coordonnées et formulaire -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-wrapper" >
          <!-- Carte des coordonnées -->
          <div class="contact-info">
            <div class="info-header">
              <div class="avatar-container">
                <img src="images/img1.png" alt="">
              </div>
              <div class="personal-info">
                <h2 class="name">Timothée Joel Tchinda</h2>
                <p class="job-title">Développeur Fullstack</p>
              </div>
            </div>

            <div class="info-details">
              <div class="info-item">
                <div class="item-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="item-content">
                  <h3>Email</h3>
                  <p>tchindajoel61@gmail.com</p>
                  <a href="mailto:tchindajoel61@gmail.com" class="item-link">
                    <span>M'envoyer un email</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="info-item">
                <div class="item-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="item-content">
                  <h3>Téléphone</h3>
                  <p>+33 07 52 89 20 73</p>
                  <a href="tel:+33752892073" class="item-link">
                    <span>M'appeler</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div class="info-item">
                <div class="item-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="item-content">
                  <h3>Localisation</h3>
                  <p>21 Rue du Cher, 31100, Toulouse</p>
                  <a href="https://maps.google.com/maps?q=21+Rue+du+Cher,+31100,+Toulouse" target="_blank"
                    rel="noopener noreferrer" class="item-link">
                    <span>Voir sur la carte</span>
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="social-links">
              <a href="https://www.linkedin.com/in/joel-tchinda" target="_blank" rel="noopener noreferrer"
                class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Joello61" target="_blank" rel="noopener noreferrer" class="social-link">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="contact-form-container">
            <div class="form-header">
              <h2>Envoyez-moi un message</h2>
              <p>Je vous répondrai dans les plus brefs délais</p>
            </div>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nom complet</label>
                  <div class="input-container">
                    <i class="fas fa-user"></i>
                    <input type="text" id="name" v-model="form.name" required placeholder="Votre nom complet"
                      :class="{ filled: form.name }" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Adresse email</label>
                  <div class="input-container">
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="email" v-model="form.email" required placeholder="Votre adresse email"
                      :class="{ filled: form.email }" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Sujet</label>
                <div class="input-container">
                  <i class="fas fa-pen"></i>
                  <input type="text" id="subject" v-model="form.subject" required placeholder="Sujet de votre message"
                    :class="{ filled: form.subject }" />
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <div class="input-container textarea-container">
                  <i class="fas fa-comment-alt"></i>
                  <textarea id="message" v-model="form.message" required placeholder="Votre message" rows="6"
                    :class="{ filled: form.message }"></textarea>
                </div>
              </div>

              <div class="form-footer">
                <button type="submit" class="submit-btn" :disabled="isSubmitting">
                  <span>{{
                    isSubmitting ? "Envoi en cours..." : "Envoyer le message"
                    }}</span>
                  <i class="fas fa-paper-plane" :class="{ sending: isSubmitting }"></i>
                </button>
              </div>

              <transition name="fade">
                <div v-if="formStatus.message" class="form-status" :class="formStatus.type">
                  <i :class="formStatus.type === 'success'
                      ? 'fas fa-check-circle'
                      : 'fas fa-exclamation-circle'
                    "></i>
                  <span>{{ formStatus.message }}</span>
                </div>
              </transition>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Section FAQ -->
    <section class="faq-section" >
      <div class="container">
        <div class="section-title-container">
          <span class="section-subtitle">Questions fréquentes</span>
          <h2 class="section-title">FAQ</h2>
          <p class="section-description">
            Vous avez des questions ? Consultez les réponses à quelques
            questions fréquemment posées.
          </p>
        </div>

        <div class="faq-container">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item" :class="{ active: activeFaq === index }"
            @click="toggleFaq(index)">
            <div class="faq-question">
              <h3>{{ item.question }}</h3>
              <div class="faq-icon">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <transition name="fade-height">
              <div v-if="activeFaq === index" class="faq-answer">
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Section carte -->
    <section class="map-section" >
      <div class="map-container">
        <div id="leaflet-map" class="leaflet-map"></div>
        <div class="map-overlay" v-if="showOverlay">
          <div class="overlay-card">
            <button class="overlay-close-btn" @click="showOverlay = false" aria-label="Fermer">
              <i class="fas fa-times"></i>
            </button>
            <h3>Discutons de votre projet</h3>
            <p>Je suis disponible pour des réunions en personne ou à distance</p>
            <a href="mailto:tchindajoel61@gmail.com" class="overlay-btn">
              <span>Prendre rendez-vous</span>
              <i class="fas fa-calendar-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div v-if="!showOverlay" class="rdv-fallback-container">
      <a href="mailto:tchindajoel61@gmail.com" class="floating-rdv-btn" >
              <span>Prendre rendez-vous</span>
              <i class="fas fa-calendar-alt"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";
import emailjs from '@emailjs/browser';

const showOverlay = ref(true);

// État réactif du formulaire
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// État du processus d'envoi
const isSubmitting = ref(false);

// État du message de statut
const formStatus = reactive({
  message: "",
  type: "",
});

// FAQ
const faqItems = reactive([
  {
    question: "Quels types de projets acceptez-vous ?",
    answer:
      "Je travaille principalement sur des applications web et mobiles utilisant des technologies modernes comme Angular, Vue.js, Spring Boot, Symfony et Node.js. Je suis ouvert à une variété de projets, des sites vitrines aux applications plus complexes nécessitant des bases de données et des API.",
  },
  {
    question: "Comment se déroule votre processus de travail ?",
    answer:
      "Mon processus commence par une discussion approfondie pour comprendre vos besoins et objectifs. Je propose ensuite une maquette ou un prototype pour validation. Une fois approuvé, je passe au développement avec des points d'étape réguliers. Après livraison, je reste disponible pour le support et la maintenance.",
  },
  {
    question: "Êtes-vous disponible pour une alternance ou un stage ?",
    answer:
      "Oui, je suis actuellement à la recherche d'opportunités d'alternance dans le cadre de mon Master en Informatique à l'Université de Toulouse Jean Jaurès. Je suis particulièrement intéressé par des missions en développement fullstack.",
  },
  {
    question: "Quelles sont vos compétences techniques principales ?",
    answer:
      "Mes compétences principales incluent le développement frontend avec Angular et Vue.js, le développement backend avec Spring Boot, Symfony et Node.js, ainsi que la gestion de bases de données SQL et NoSQL. Je maîtrise également les outils DevOps comme Docker et Git.",
  },
]);

const activeFaq = ref(null);

// Méthodes
emailjs.init({
  publicKey: 'RU8lgd8RpyJD-fkwd', 
  blockHeadless: true
})

const submitForm = () => {
  isSubmitting.value = true
  formStatus.message = ''

  const templateParams = {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
    time: new Date().toLocaleString('fr-FR')
  }

  emailjs.send('service_pru88hl', 'template_an36tao', templateParams)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      isSubmitting.value = false
      formStatus.message = 'Votre message a été envoyé avec succès. Je vous répondrai dès que possible.'
      formStatus.type = 'success'
      Object.assign(form, { name: '', email: '', subject: '', message: '' })
      setTimeout(() => { formStatus.message = '' }, 5000)
    })
    .catch((error) => {
      console.log('FAILED...', error)
      isSubmitting.value = false
      formStatus.message = "Une erreur est survenue. Veuillez réessayer."
      formStatus.type = 'error'
      setTimeout(() => { formStatus.message = '' }, 5000)
    })
}

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

// Animations
onMounted(() => {
  // Animation des éléments du formulaire
  gsap.from(".form-group", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.3,
  });

  // Animation des infos de contact
  gsap.from(".info-item", {
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });

  const map = L.map("leaflet-map").setView([43.581485, 1.423772], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Réassigner l’icône par défaut de Leaflet
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
  });

  L.marker([43.581485, 1.423772])
    .addTo(map)
    .bindPopup("Je suis ici 👋")
    .openPopup();
});
</script>

<style scoped>
.contact-page {
  background-color: var(--background-light);
}

/* Header de la page */
.page-header {
  background: linear-gradient(135deg, #00b4db 0%, #0083b0 100%);
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
  background-image: radial-gradient(circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 10%),
    radial-gradient(circle at 75% 44%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 15%),
    radial-gradient(circle at 64% 77%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 12%),
    radial-gradient(circle at 12% 67%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 8%);
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
  content: "";
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

/* Section de contact principale */
.contact-main {
  margin-top: -50px;
  margin-bottom: 80px;
  position: relative;
  z-index: 10;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

/* Carte des coordonnées */
.contact-info {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.info-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.avatar-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  box-shadow: var(--shadow-sm);
  border: 2px solid var(--primary-color);
}

.avatar-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.personal-info h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--secondary-dark);
}

.personal-info p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.info-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
}

.item-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(66, 184, 131, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--primary-color);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.item-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--secondary-dark);
}

.item-content p {
  color: var(--text-dark);
  margin-bottom: 5px;
}

.item-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  transition: gap 0.3s ease;
}

.item-link:hover {
  gap: 12px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: auto;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
}

/* Formulaire de contact */
.contact-form-container {
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  padding: 40px;
}

.form-header {
  text-align: center;
  margin-bottom: 40px;
}

.form-header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--secondary-dark);
}

.form-header p {
  color: var(--text-light);
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--secondary-dark);
}

.input-container {
  position: relative;
}

.input-container i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  transition: color 0.3s ease;
}

.textarea-container i {
  top: 20px;
  transform: none;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 12px 15px 12px 45px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-container input:focus,
.input-container textarea:focus,
.input-container input.filled,
.input-container textarea.filled {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.1);
  outline: none;
}

.input-container input:focus+i,
.input-container textarea:focus+i,
.input-container input.filled+i,
.input-container textarea.filled+i {
  color: var(--primary-color);
}

.form-footer {
  text-align: center;
  margin-top: 20px;
}

.submit-btn {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.submit-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.submit-btn:disabled {
  background-color: var(--text-light);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-btn i {
  transition: transform 0.3s ease;
}

.submit-btn:not(:disabled):hover i {
  transform: translateX(5px);
}

.submit-btn i.sending {
  animation: sending 1s infinite;
}

.form-status {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 8px;
}

.form-status.success {
  background-color: rgba(66, 184, 131, 0.1);
  color: var(--primary-color);
}

.form-status.error {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

/* Section FAQ */
.faq-section {
  padding: 80px 0;
  background-color: var(--accent-color);
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
  content: "";
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

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.faq-item:hover {
  box-shadow: var(--shadow-md);
}

.faq-item.active {
  box-shadow: var(--shadow-md);
}

.faq-question {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--secondary-dark);
  margin: 0;
}

.faq-icon {
  color: var(--primary-color);
  transition: transform 0.3s ease;
}

.faq-item.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 20px 20px;
  color: var(--text-light);
  line-height: 1.7;
}

/* Section carte */
.map-section {
  height: 500px;
  position: relative;
}

.leaflet-map {
  height: 100%;
  width: 100%;
}

.map-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 500;
  /* Doit être au-dessus de la carte Leaflet */
  pointer-events: none;
}

.overlay-card {
  background-color: var(--white);
  border-radius: 10px;
  padding: 30px;
  max-width: 400px;
  box-shadow: var(--shadow-lg);
  text-align: center;
  pointer-events: auto;
  position: relative;
  z-index: 999;
}

.overlay-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: var(--text-light);
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 10;
}

.overlay-close-btn:hover {
  color: var(--primary-color);
}


.overlay-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--secondary-dark);
}

.overlay-card p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.overlay-btn {
  background-color: var(--primary-color);
  color: var(--white);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.overlay-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.floating-rdv-btn {
  background-color: var(--primary-color);
  color: var(--white);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  margin-top: 20px;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.floating-rdv-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.rdv-fallback-container {
  display: flex;
  justify-content: flex-end;
}




/* Animations */
@keyframes sending {
  0% {
    transform: translateX(0) translateY(0);
  }

  25% {
    transform: translateX(3px) translateY(-3px);
  }

  50% {
    transform: translateX(6px) translateY(0);
  }

  75% {
    transform: translateX(3px) translateY(3px);
  }

  100% {
    transform: translateX(0) translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-height-enter-active,
.fade-height-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.fade-height-enter-from,
.fade-height-leave-to {
  max-height: 0;
  opacity: 0;
  margin: 0;
  padding: 0 20px;
}

/* Media Queries */
@media (max-width: 992px) {
  .page-title {
    font-size: 3rem;
  }

  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: 2;
  }

  .contact-form-container {
    order: 1;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 80px 0 120px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .overlay-card {
    max-width: 90%;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 60px 0 100px;
  }

  .page-title {
    font-size: 2rem;
  }

  .contact-form-container {
    padding: 30px 20px;
  }

  .contact-info {
    padding: 20px;
  }

  .info-header {
    flex-direction: column;
    text-align: center;
  }

  .avatar-container {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .info-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .item-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
