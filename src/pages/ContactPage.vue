

<template>
  <div class="contact">
    <section class="contact-hero">
      <h1 class="page-title">Get In Touch</h1>
      <p class="page-subtitle">Have a question or want to collaborate? Let's connect!</p>
    </section>

    <section class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <span class="info-icon"></span>
          <h3>Email</h3>
          <a href="mailto:benjamin.mueller@bsstudios.org">benjamin.mueller@bsstudios.org</a>
        </div>
        <div class="info-card">
          <span class="info-icon"></span>
          <h3>Discord</h3>
          <a href="https://discord.gg/mjsbFeuK" target="_blank">Connect with me</a>
        </div>
        <div class="info-card">
          <span class="info-icon"></span>
          <h3>GitHub</h3>
          <a href="https://github.com/theinfamousben" target="_blank">@theinfamousben</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  @import url("https://www.nerdfonts.com/assets/css/webfont.css");

.contact {
  min-height: calc(100vh - 80px);
  padding: 2rem;
}

.contact-hero {
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

.contact-content {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  font-family: "NerdFontsSymbols Nerd Font", sans-serif;
}

.info-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.info-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.8rem;
}

.info-card h3 {
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-card a {
  color: #e94560;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: #ff6b6b;
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1rem;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #e94560;
  background: rgba(255, 255, 255, 0.15);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #e94560, #ff6b6b);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
}

.success-message {
  text-align: center;
  padding: 3rem;
}

.success-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.success-message h3 {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 600px) {
  .page-title {
    font-size: 2.5rem;
  }

  .contact-form-wrapper {
    padding: 1.5rem;
  }
}
</style>
