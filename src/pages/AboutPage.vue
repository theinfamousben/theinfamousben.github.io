<script setup></script>

<template>
  <div class="about">
    <section class="about-hero">
      <h1 class="page-title">About Me</h1>
      <p class="page-subtitle">Who is this Benjamin person anyways?</p>
    </section>

    <section class="about-content">
      <div class="about-card">
        <div class="about-image">
          <span class="avatar-emoji"></span>
        </div>
        <div class="about-text">
          <h2>Hello there!</h2>
          <p>
            I'm Benjamin, a silly guy who likes coding, music, and video games.
          </p>
        </div>
      </div>

      <div class="socials">
        <h2>My Socials</h2>
        <div class="socials-grid">
          <div class="socials-item">
            <a class="socials-link" href="https://www.youtube.com/@bobschlowinskii" target="_blank">
              <span class="socials-icon"></span>
              <span class="socials-name">YouTube</span>
            </a>
          </div>
          <div class="socials-item">
            <a class="socials-link" href="https://www.github.com/theinfamousben" target="_blank">
              <span class="socials-icon"></span>
              <span class="socials-name">GitHub</span>
            </a>
          </div>
          <div class="socials-item">
            <a class="socials-link" href="https://open.spotify.com/artist/4UhsHJt9W7iCs2aBvG32Gp?si=BkwklZCETDiKUNc1MPHoOQ" target="_blank">
              <span class="socials-icon"></span>
              <span class="socials-name">Spotify</span>
            </a>
          </div>
          <div class="socials-item">
            <a class="socials-link" href="https://discord.gg/mjsbFeuK" target="_blank">
              <span class="socials-icon"></span>
              <span class="socials-name">Discord</span>
            </a>
          </div>
          <div class="socials-item">
            <a class="socials-link" href="https://steamcommunity.com/id/bobschlowinskii/" target="_blank">
              <span class="socials-icon"></span>
              <span class="socials-name">Steam</span>
            </a>
          </div>
          <!--

            <div class="socials-item">
              <a class="socials-link" href="" target="_blank">
                <span class="socials-icon"></span>
                <span class="socials-name"></span>
              </a>
            </div>
          -->
        </div>
      </div>

      <div class="fun-facts">
        <h2>Fun Facts</h2>
        <ul class="facts-list">
          <li>I can play the piano, guitar, drums and bass!</li>
          <li>I've been coding since I was 11 years old</li>
          <li>I'm a huge fan of sandbox video games (especially satisfactory!)</li>
          <li>I love skiing</li>
          <li>I'm an energy drink enthusiast </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
  @import url("https://www.nerdfonts.com/assets/css/webfont.css");
.about {
  min-height: calc(100vh - 80px);
  padding: 2rem;
}

.socials-link {
  text-decoration: none;
  color: inherit;
}

.about-hero {
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

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-card {
  display: flex;
  gap: 3rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 3rem;
}

.about-image {
  flex-shrink: 0;
}

.avatar-emoji {
  font-size: 8rem;
  display: block;
}

.about-text h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #e94560;
}

.about-text p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.socials {
  margin-bottom: 3rem;
}

.socials h2,
.fun-facts h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
}

.socials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.socials-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.socials-item:hover {
  background: rgba(233, 69, 96, 0.2);
  border-color: #e94560;
  transform: translateY(-3px);
}

.socials-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
  font-family: "NerdFontsSymbols Nerd Font", sans-serif;
}

.socials-name {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.fun-facts {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem 3rem;
}

.facts-list {
  list-style: none;
  padding: 0;
}

.facts-list li {
  color: rgba(255, 255, 255, 0.8);
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.1rem;
}

.facts-list li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    text-align: center;
  }

  .avatar-emoji {
    font-size: 5rem;
  }

  .page-title {
    font-size: 2.5rem;
  }
}
</style>
