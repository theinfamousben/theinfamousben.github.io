<script setup>
import SiteNavbar from './components/SiteNavbar.vue'
</script>

<template>
  <div id="app-wrapper">
    <SiteNavbar />
    <main>
      <router-view />
    </main>
    <footer class="site-footer">
      <p>Made with ❤️ and 👽 by Benjamin</p>
    </footer>
  </div>
</template>

<style scoped>
#app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.site-footer {
  text-align: center;
  padding: 2rem;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}
</style>
