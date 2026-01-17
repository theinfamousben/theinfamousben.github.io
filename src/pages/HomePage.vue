<script setup></script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="avatar" @click="cycleEmoji">
          <span class="emoji"></span>
        </div>
        <h1 class="title">Welcome!</h1>
        <p class="subtitle">I'm Benjamin</p>
        <p class="tagline">
          Welcome to my corner of the internet! I'm a passionate developer / musician / idiot who loves to do random stuff with code and instruments.
        </p>
        <div class="cta-buttons">
          <router-link to="/projects" class="btn btn-primary">View My Work</router-link>
          <router-link to="/contact" class="btn btn-secondary">Contact Me</router-link>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <span class="feature-icon"></span>
        <h3><a href="https://github.com/theinfamousben" target="_blank" rel="noopener noreferrer">My GitHub</a></h3>
        <p>Find my Projects and Code</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon"></span>
        <h3><a href="https://open.spotify.com/artist/4UhsHJt9W7iCs2aBvG32Gp?si=BkwklZCETDiKUNc1MPHoOQ" target="_blank" rel="noopener noreferrer">My Spotify</a></h3>
        <p>Find my Music!</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
  @import url("https://www.nerdfonts.com/assets/css/webfont.css");

.home {
  min-height: calc(100vh - 80px);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
  font-family: 'NerdFontsSymbols Nerd Font';
}
.hero-content {
  max-width: 600px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e94560, #ff6b6b);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 40px rgba(233, 69, 96, 0.4);
  animation: pulse 2s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1) rotate(10deg);
}

.emoji {
  font-size: 4rem;
  font-family: "NerdFontsSymbols Nerd Font", sans-serif;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 10px 40px rgba(233, 69, 96, 0.4);
  }
  50% {
    box-shadow: 0 10px 60px rgba(233, 69, 96, 0.6);
  }
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #fff, #e94560);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Poppins', sans-serif;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

.tagline {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Poppins', sans-serif;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #e94560, #ff6b6b);
  color: #fff;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
  font-family: 'NerdFontsSymbols Nerd Font';
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 600px) {
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.2rem;
  }
  .avatar {
    width: 120px;
    height: 120px;
  }
  .emoji {
    font-size: 3rem;
  }
}
</style>
