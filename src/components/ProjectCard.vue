<template>
    <div class="project-card">
      <div class="project-image">
        <img :src="imageSrc" :alt="title" v-if="imageSrc">
        <div class="project-placeholder" v-else></div>
      </div>
      <div class="project-content">
        <h3 class="project-title">{{ title }}</h3>
        <div class="project-tags">
          <span v-for="(tag, index) in tags" :key="index" class="project-tag">{{ tag }}</span>
        </div>
        <p class="project-description">{{ description }}</p>
        <div class="project-links">
          <a v-if="demoLink" :href="demoLink" target="_blank" rel="noopener noreferrer" class="project-link demo">
            <i class="fa fa-external-link"></i> Voir le site
          </a>
          <a v-if="codeLink" :href="codeLink" target="_blank" rel="noopener noreferrer" class="project-link code">
            <i class="fa fa-github"></i> Voir le code
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Props avec définition
  // eslint-disable-next-line no-undef
  defineProps({
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
    codeLink: {
      type: String,
      default: ''
    }
  })
  </script>
  
  <style scoped>
  .project-card {
    background: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  .project-image {
    height: 200px;
    overflow: hidden;
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
  }
  
  .project-links {
    display: flex;
    gap: 10px;
    margin-top: auto;
  }
  
  .project-link {
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
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
  </style>
  