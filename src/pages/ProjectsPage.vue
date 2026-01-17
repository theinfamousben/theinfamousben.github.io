<script setup>
import { projects } from '@/data/projects.js'
</script>

<template>
  <div class="projects">
    <section class="projects-hero">
      <h1 class="page-title">My Projects</h1>
      <p class="page-subtitle">A showcase of my work and passion projects</p>
    </section>

    <section class="projects-grid">
      <router-link
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="project-card"
      >
        <div class="project-emoji">{{ project.emoji }}</div>
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <span class="view-project">View Project →</span>
      </router-link>
    </section>

    <section class="more-projects">
      <p>Want to see more? Check out my GitHub for additional projects!</p>
      <a href="https://github.com/theinfamousben" target="_blank" class="github-link">
        View GitHub Profile →
      </a>
    </section>
  </div>
</template>

<style scoped>
  @import url("https://www.nerdfonts.com/assets/css/webfont.css");
.projects {
  min-height: calc(100vh - 80px);
  padding: 2rem;
}

.projects-hero {
  text-align: center;
  padding: 4rem 0;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #fff, #e94560);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.project-card {
  display: block;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
  border-color: rgba(233, 69, 96, 0.3);
}

.project-card:hover .view-project {
  color: #e94560;
}

.project-emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: "NerdFontsSymbols Nerd Font", sans-serif;
}

.project-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.8rem;
}

.project-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(233, 69, 96, 0.2);
  color: #e94560;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.view-project {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  transition: color 0.3s ease;
}

.more-projects {
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.more-projects p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.github-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #e94560, #ff6b6b);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.github-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
}

@media (max-width: 600px) {
  .page-title {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
