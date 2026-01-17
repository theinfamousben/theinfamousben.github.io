<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Navigation items - add new pages here!
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo" @click="closeMenu">
        <span class="logo-icon"></span>
        <span class="logo-text">benjamin.bsstudios.org</span>
      </router-link>

      <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="hamburger" :class="{ active: isMenuOpen }"></span>
      </button>

      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li v-for="item in navItems" :key="item.path">
          <router-link :to="item.path" class="nav-link" @click="closeMenu">
            {{ item.name }}
          </router-link>
        </li>
        <li>
          <a href="https://bsstudios.org" target="_blank" rel="noopener noreferrer" class="nav-link">To BS Studios</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 1.8rem;
}

.logo-text {
  background: linear-gradient(135deg, #fff, #e94560);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: block;
  padding: 0.6rem 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  background: rgba(233, 69, 96, 0.2);
  color: #e94560;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  position: relative;
  transition: background 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  transition: transform 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active::after {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(26, 26, 46, 0.98);
    padding: 1rem;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    text-align: center;
    padding: 1rem;
  }
}
</style>
