<script setup>
import SocialBar from './components/TheSocialBar.vue';
import Modal from './components/ThemeModal.vue';
import TheNavbar from './components/TheNavbar.vue';
import { onBeforeMount, reactive, ref } from 'vue';
import switchTheme from './helpers/themeSwitch';
import TheFooter from './components/TheFooter.vue';
onBeforeMount(async () => {
  const theme = window.localStorage.getItem('theme') || 'dark';
  switchTheme(theme);
});
const isOpen = ref(false);
</script>

<template>
  <TheNavbar />
  <router-view />
  <SocialBar :mode="isOpen" @show="isOpen = true" />
  <Modal @close="isOpen = false" @theme="{ switchTheme($event); isOpen = false }" v-if="isOpen" />
  <TheFooter />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800&display=swap");
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
html {
  font-family: "Archivo", sans-serif;
  scroll-behavior: smooth;
}
body {
  background: var(--dark);
  color: var(--light);
  /* cursor: url('./assets/c.png'), auto; */
}
a {
  text-decoration: none;
}
</style>
