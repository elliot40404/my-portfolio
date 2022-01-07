<script setup>
import TheHeroSection from '../components/TheHeroSection.vue';
import TheAboutSection from '../components/TheAboutSection.vue';
import TheProjectSection from '../components/TheProjectSection.vue';
import TheContactSection from '../components/TheContactSection.vue';

import { useStore } from 'vuex';
const store = useStore();

// -- graphql
import apolloClient from '../apollo/client.js'
import { Content } from '../graphql'
import { onMounted } from 'vue';

onMounted(async () => {
    const { data } = await apolloClient.query({
        query: Content
    });
    store.dispatch('setProjects', data.allProjects);
    store.dispatch('setAbout', data.about.about);
})


</script>

<template>
    <div id="main" class="container">
        <TheHeroSection />
        <TheAboutSection />
        <TheProjectSection />
        <TheContactSection />
    </div>
</template>

<style lang="scss" scoped>
</style>