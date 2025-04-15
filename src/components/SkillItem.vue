<template>
    <div class="skill-item">
      <div class="skill-icon" v-if="icon">
        <i :class="icon"></i>
      </div>
      <div class="skill-content">
        <h3 class="skill-name">{{ name }}</h3>
        <div class="skill-level">
          <div class="skill-progress" :style="{ width: `${level}%` }"></div>
        </div>
        <p class="skill-description" v-if="description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // Props avec définition et validation
  // eslint-disable-next-line no-undef
  defineProps({
    name: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      default: 50,
      validator: val => val >= 0 && val <= 100
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  })

  </script>
  
  <style scoped>
  .skill-item {
    display: flex;
    margin-bottom: 25px;
    background: var(--white);
    border-radius: 8px;
    padding: 20px;
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .skill-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  .skill-icon {
    flex: 0 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--primary-color);
    margin-right: 15px;
  }
  
  .skill-content {
    flex: 1;
  }
  
  .skill-name {
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--text-dark);
  }
  
  .skill-level {
    height: 8px;
    background-color: var(--accent-color);
    border-radius: 4px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  
  .skill-progress {
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 4px;
    transition: width 1s ease-in-out;
  }
  
  .skill-description {
    color: var(--text-light);
    font-size: 0.9rem;
  }
  </style>
  