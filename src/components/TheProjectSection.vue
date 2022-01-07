<script setup>
import Project from './ProjectCard.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const projects = computed(() => store.getters.getProjects);
</script>

<template>
    <div data-section class="container" id="projects">
        <h1>PROJECTS</h1>
        <div class="project-container">
            <Project v-for="(project, index) in projects" :key="index" :data="project" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    height: 100vh;
    padding: 1.5rem;
    text-align: center;
}
h1 {
    font-size: 2rem;
    padding: 10vh 3rem 0;
    position: relative;
    &::before {
        content: "<";
        margin: 5px;
        color: var(--accent);
    }
    &::after {
        content: "/>";
        margin: 5px;
        color: var(--accent);
    }
}
.project-container {
    padding: 3rem;
}
</style>