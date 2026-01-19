<script setup></script>

<template>
  <div class="project-detail">
    <section class="project-hero">
      <router-link to="/projects" class="back-link">← Back to Projects</router-link>
      <div class="project-emoji-large">󰍳</div>
      <h1 class="page-title">CLIcraft</h1>
      <p class="project-description">A simple Minecraft Mod Package Manager written in Node.js.</p>
    </section>

    <section class="project-content">
      <div class="project-links-section">
        <a href="#" onclick="alert('Not on NPM yet!')" class="project-btn primary" target="_blank"> View on NPM</a>
        <a href="https://github.com/theinfamousben/clicraft" class="project-btn secondary" target="_blank"> View on
          GitHub</a>
      </div>

      <div class="project-body">
        <h2>Overview</h2>
        <p>
          CLIcraft is a command-line tool that simplifies the process of managing Minecraft mods. It
          allows users to easily install, update, and remove mods from their Minecraft installations
          using a simple package management system.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Install mods from modrinth</li>
          <li>Create Client and Server instances</li>
          <li>Works with Fabric and Forge</li>
        </ul>
        <a href="https://github.com/theinfamousben/clicraft">More info on the GitHub Repo</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://www.nerdfonts.com/assets/css/webfont.css');

.project-detail {
  min-height: calc(100vh - 80px);
  padding: 2rem;
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #e94560;
}

.project-hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

.project-emoji-large {
  font-size: 6rem;
  margin-bottom: 1.5rem;
  font-family: 'NerdFontsSymbols Nerd Font', sans-serif;
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

.project-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  background: rgba(233, 69, 96, 0.2);
  color: #e94560;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-content {
  max-width: 800px;
  margin: 0 auto;
}

.project-links-section {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: 'NerdFontsSymbols Nerd Font', sans-serif;
}

.project-btn.primary {
  background: linear-gradient(135deg, #e94560, #ff6b6b);
  color: #fff;
}

.project-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
}

.project-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.project-body {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
}

.project-body h2 {
  font-size: 1.5rem;
  color: #e94560;
  margin: 2rem 0 1rem;
}

.project-body h2:first-child {
  margin-top: 0;
}

.project-body p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

.project-body ul {
  color: rgba(255, 255, 255, 0.8);
  margin-left: 1.5rem;
  line-height: 1.8;
}

.project-body li {
  margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
  .page-title {
    font-size: 2.5rem;
  }

  .project-emoji-large {
    font-size: 4rem;
  }

  .project-body {
    padding: 1.5rem;
  }
}
</style>
