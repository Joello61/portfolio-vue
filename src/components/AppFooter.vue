<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>Tchinda Tchoffo Timothée Joël</h3>
            <p>Développeur Fullstack Passionné</p>
          </div>
          <div class="footer-links">
            <div class="social-links">
              <a href="https://www.linkedin.com/in/joel-tchinda" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Joello61" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:tchindajoel61@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; {{ currentYear }} Joël Tchinda. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  // Propriétés calculées
  const currentYear = computed(() => new Date().getFullYear())
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: #fff;
    padding: 40px 0 20px;
    margin-top: 30px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .footer-info h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
  }
  
  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    transition: background-color 0.3s;
  }
  
  .social-links a:hover {
    background-color: #42b983;
  }
  
  .copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 20px;
    }
    
    .social-links {
      margin-top: 15px;
    }
  }
  </style>